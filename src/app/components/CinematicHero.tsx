import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowUpRight, Pause, Play } from 'lucide-react';
import { CINEMATIC_CHROME_EVENT, CINEMATIC_REDUCED_MOTION_QUERY, prefersCinematicStill } from './cinematicExperience';

const ASSETS = `${import.meta.env.BASE_URL}cinematic/`;
const SMALL_MEDIA = '(max-width: 720px), (max-height: 560px) and (pointer: coarse)';

export function CinematicHero() {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current!;
    const video = videoRef.current!;
    const control = controlRef.current!;
    const content = root.querySelector<HTMLElement>('.cinema-content')!;
    const progress = root.querySelector<HTMLElement>('.cinema-progress')!;
    const reducedMotion = matchMedia(CINEMATIC_REDUCED_MOTION_QUERY);
    const connection = (navigator as Navigator & { connection?: EventTarget }).connection;
    let disposed = false, active = false, completed = false, ready = false;
    let userPaused = false, blocked = false, playPending = false, generation = 0;
    let started = false, bufferDeadlineReached = false, bufferTimer = 0;
    let visible = root.getBoundingClientRect().bottom > 0 && root.getBoundingClientRect().top < innerHeight;
    let watchdog = 0, previousTime = 0;
    let lastChrome: boolean | null = null;
    let finalImage: HTMLImageElement | null = null;

    const publishChrome = (show: boolean) => {
      if (disposed || lastChrome === show) return;
      lastChrome = show;
      window.dispatchEvent(new CustomEvent(CINEMATIC_CHROME_EVENT, { detail: show }));
    };
    const reveal = (show: boolean) => {
      root.dataset.revealed = String(show);
      content.inert = !show;
      publishChrome(show || !visible);
    };
    const phase = (value: string) => {
      root.dataset.phase = value;
      control.hidden = !active || (!ready && value !== 'blocked') || completed || value === 'offscreen';
      control.setAttribute('aria-label', value === 'playing' ? 'พักวิดีโอแนะนำบริษัท' : 'เล่นวิดีโอแนะนำบริษัท');
    };
    const clearWait = () => { clearTimeout(watchdog); watchdog = 0; };
    const fallback = (failed = false) => {
      active = false; completed = true; ready = false; generation++;
      playPending = false; blocked = false; clearWait();
      clearTimeout(bufferTimer);
      video.pause(); video.removeAttribute('src'); video.removeAttribute('poster'); video.preload = 'none'; video.load();
      root.dataset.mode = 'static';
      root.dataset.load = failed ? 'failed' : 'idle';
      root.removeAttribute('data-ready'); root.removeAttribute('data-still-ready');
      phase('still'); reveal(true);
    };
    const armWait = () => {
      clearWait();
      if (active && !completed && visible && !document.hidden && !userPaused && !blocked)
        watchdog = window.setTimeout(() => fallback(true), 20000);
    };
    const finalStill = () => {
      const src = `${ASSETS}${matchMedia(SMALL_MEDIA).matches ? 'hero-end-mobile.webp' : 'hero-end.webp'}`;
      if (!finalImage || finalImage.src !== new URL(src, location.href).href) {
        finalImage = new Image(); finalImage.fetchPriority = 'low'; finalImage.src = src;
      }
      return finalImage.decode();
    };
    const attemptPlay = () => {
      if (!active || completed || userPaused || blocked || !visible || document.hidden || playPending) return;
      // Collect a short native buffer before the first play so the opening
      // does not start with only one decoded frame on a slower connection.
      if (!started && !bufferDeadlineReached && (!ready || !Number.isFinite(video.duration)
        || !video.buffered.length || video.buffered.end(0) < Math.min(2, video.duration))) return;
      const token = generation;
      playPending = true;
      void video.play().catch(error => {
        if (disposed || !active || token !== generation) return;
        if (error.name === 'AbortError') return;
        if (error.name === 'NotAllowedError') {
          blocked = true; clearWait(); phase('blocked'); reveal(true);
        } else fallback(true);
      }).finally(() => { if (token === generation) playPending = false; });
    };
    const synchronize = () => {
      if (disposed) return;
      if (!active || completed) { publishChrome(true); return; }
      if (blocked) { phase('blocked'); reveal(true); return; }
      publishChrome(!visible);
      if (!visible || document.hidden || userPaused) {
        video.pause(); clearWait(); phase(userPaused ? 'paused' : 'offscreen');
      } else {
        if (video.paused) { armWait(); attemptPlay(); }
      }
    };
    const onLoaded = () => {
      if (!active || disposed) return;
      ready = true; root.dataset.ready = 'true';
      synchronize();
    };
    const onPlaying = () => {
      if (!active || completed || userPaused || !visible || document.hidden) { video.pause(); return; }
      blocked = false;
      started = true;
      clearTimeout(bufferTimer);
      ready = true; root.dataset.ready = 'true'; root.dataset.load = 'playing';
      clearWait(); phase('playing'); reveal(false);
      void finalStill().catch(() => {});
    };
    const onEnded = () => {
      if (!active || disposed || completed) return;
      completed = true; userPaused = false; clearWait(); video.pause();
      root.dataset.load = 'complete'; phase('complete');
      progress.style.transform = 'scaleX(1)'; reveal(true);
      // Keep the decoded last frame until the matching photograph is ready.
      const token = generation;
      void finalStill().then(() => {
        if (!disposed && completed && token === generation) root.dataset.stillReady = 'true';
      }).catch(() => {});
    };
    const onTimeUpdate = () => {
      if (!active || completed || !Number.isFinite(video.duration)) return;
      progress.style.transform = `scaleX(${Math.min(1, video.currentTime / video.duration)})`;
      if (video.currentTime > previousTime) {
        previousTime = video.currentTime; clearWait();
      }
    };
    const onWaiting = () => { if (active && !completed) { root.dataset.load = 'buffering'; armWait(); } };
    const onPause = () => {
      if (!active || completed || blocked) return;
      phase(!visible || document.hidden ? 'offscreen' : 'paused');
    };
    const onError = () => { if (active && video.hasAttribute('src')) fallback(true); };
    const togglePlayback = () => {
      if (!active || completed || (!ready && !blocked)) return;
      if (!video.paused && !blocked) {
        userPaused = true; video.pause(); clearWait(); phase('paused');
      } else {
        userPaused = false; blocked = false; reveal(false); phase('paused');
        armWait(); attemptPlay();
      }
    };
    const reconcile = () => {
      if (prefersCinematicStill()) { if (active || root.dataset.mode !== 'static') fallback(); return; }
      if (active) return;
      generation++; active = true; completed = ready = userPaused = blocked = playPending = false;
      started = bufferDeadlineReached = false; bufferTimer = 0;
      previousTime = 0; finalImage = null;
      root.dataset.mode = 'motion'; root.dataset.load = 'loading';
      root.removeAttribute('data-ready'); root.removeAttribute('data-still-ready');
      progress.style.transform = 'scaleX(0)'; phase('loading'); reveal(false);
      const small = matchMedia(SMALL_MEDIA).matches;
      root.dataset.asset = small ? 'mobile' : 'desktop';
      video.muted = video.defaultMuted = true;
      video.autoplay = false; video.loop = false; video.preload = 'auto';
      video.poster = `${ASSETS}${small ? 'hero-poster-mobile.webp' : 'hero-poster.webp'}`;
      video.src = `${ASSETS}${small ? 'hero-intro-mobile.mp4' : 'hero-intro.mp4'}`;
      // A bounded wait also works when a browser only preloads metadata.
      bufferTimer = window.setTimeout(() => {
        bufferDeadlineReached = true; synchronize();
      }, 2000);
      video.load(); armWait(); synchronize();
    };

    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; synchronize(); });
    observer.observe(root);
    video.addEventListener('loadeddata', onLoaded);
    video.addEventListener('progress', synchronize);
    video.addEventListener('canplaythrough', synchronize);
    video.addEventListener('playing', onPlaying);
    video.addEventListener('ended', onEnded);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('waiting', onWaiting);
    video.addEventListener('stalled', onWaiting);
    video.addEventListener('pause', onPause);
    video.addEventListener('error', onError);
    control.addEventListener('click', togglePlayback);
    reducedMotion.addEventListener('change', reconcile);
    connection?.addEventListener('change', reconcile);
    document.addEventListener('visibilitychange', synchronize);
    reconcile();

    return () => {
      disposed = true; active = false; generation++; clearWait(); clearTimeout(bufferTimer); observer.disconnect();
      video.removeEventListener('loadeddata', onLoaded);
      video.removeEventListener('progress', synchronize);
      video.removeEventListener('canplaythrough', synchronize);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('waiting', onWaiting);
      video.removeEventListener('stalled', onWaiting);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('error', onError);
      control.removeEventListener('click', togglePlayback);
      reducedMotion.removeEventListener('change', reconcile);
      connection?.removeEventListener('change', reconcile);
      document.removeEventListener('visibilitychange', synchronize);
      video.pause(); video.removeAttribute('src'); video.load(); finalImage = null;
    };
  }, []);

  return (
    <section ref={rootRef} id="home" className="cinematic-hero" data-mode="motion" aria-labelledby="cinematic-title">
      <h1 id="cinematic-title" className="sr-only">NTP Electric &amp; Engineering ความเป็นเลิศด้านวิศวกรรมไฟฟ้า ในทุกโครงการ</h1>
      <div className="cinema-stage">
        <div className="cinema-still" aria-hidden="true" />
        <video ref={videoRef} className="cinema-video" preload="none" muted playsInline disablePictureInPicture aria-hidden="true" tabIndex={-1} />
        <div className="cinema-shade" aria-hidden="true" />
        <div className="cinema-grid" aria-hidden="true" />
        <div className="cinema-content cinema-width">
          <div className="cinema-copy">
            <div className="cinema-eyebrow"><span /> ENGINEERED TO CONNECT</div>
            <div className="cinema-panels">
              <div className="cinema-panel">
                <p className="cinema-title">ความเป็นเลิศด้าน<br />วิศวกรรมไฟฟ้า<br />ในทุกโครงการ</p>
                <p className="cinema-description">NTP Electric &amp; Engineering<br />ออกแบบ ติดตั้ง งานระบบไฟฟ้าโรงงานและห้องเย็น</p>
              </div>
            </div>
            <p className="sr-only">ออกแบบและติดตั้งตู้คอนโทรล ระบบ PLC งานระบบไฟฟ้าโรงงาน และงานระบบไฟฟ้าห้องเย็น</p>
            <div className="cinema-actions">
              <Link to="/contact" className="cinema-primary">ปรึกษาโครงการ <ArrowUpRight size={20} /></Link>
              <a href="#services" className="cinema-secondary">บริการของเรา <ArrowRight size={17} /></a>
            </div>
          </div>
        </div>
        <button ref={controlRef} type="button" className="cinema-player-control" aria-label="พักวิดีโอแนะนำบริษัท" hidden>
          <Pause className="cinema-pause-icon" size={19} /><Play className="cinema-play-icon" size={19} />
        </button>
        <span className="cinema-loading sr-only" role="status">กำลังโหลดวิดีโอแนะนำบริษัท</span>
        <div className="cinema-bottom cinema-width">
          <a href="#about" className="cinema-scroll-hint"><ArrowDown size={19} /><span>เลื่อนต่อเพื่อรู้จักเรา<small>EXPLORE NTP</small></span></a>
        </div>
        <div className="cinema-progress" aria-hidden="true" />
      </div>
    </section>
  );
}
