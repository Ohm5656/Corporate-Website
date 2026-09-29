import { ArrowLeft, ArrowRight, Check, Images, MapPin, Maximize2, Share2 } from 'lucide-react';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { projects } from '../../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const ImageLightbox = lazy(() => import('../components/ImageLightbox')
  .then(module => ({ default: module.ImageLightbox })));

export function ProjectDetailPage() {
  const { projectId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const project = projects.find(item => item.id === Number(projectId));
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [shareStatus, setShareStatus] = useState('');
  const [sharing, setSharing] = useState(false);
  const photoTrigger = useRef<HTMLButtonElement | null>(null);
  const title = project?.titleTh ?? 'ไม่พบโครงการ';
  const originPath = (location.state as { projectOrigin?: { path?: string } } | null)?.projectOrigin?.path;
  const origin = typeof originPath === 'string' && ['/', '/projects'].includes(originPath.split(/[?#]/)[0])
    ? originPath : undefined;

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = `${title} | ผลงาน NTP Electric & Engineering`;
    if (description && project) description.content = project.descriptionTh;
    setShareStatus('');
    setActiveImage(null);
    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined) description.content = previousDescription;
    };
  }, [title, project]);

  const shareProject = async () => {
    if (!project || sharing) return;
    setSharing(true);
    setShareStatus('');
    try {
      const url = new URL(`/projects/${project.id}`, window.location.origin).href;
      if (navigator.share) {
        try {
          await navigator.share({ title: project.titleTh, text: project.descriptionTh, url });
          setShareStatus('แชร์โครงการแล้ว');
          return;
        } catch (error) {
          if ((error as Error).name === 'AbortError') return;
        }
      }
      await navigator.clipboard.writeText(url);
      setShareStatus('คัดลอกลิงก์แล้ว');
    } catch (error) {
      if ((error as Error).name !== 'AbortError') setShareStatus('แชร์ไม่สำเร็จ สามารถคัดลอกลิงก์จากแถบที่อยู่ได้');
    } finally {
      setSharing(false);
    }
  };

  if (!project) {
    return (
      <div className="min-h-[70vh] bg-[#f6f8fa] px-4 pb-24 pt-40 text-center">
        <p className="mb-4 text-sm font-semibold text-[#dc2626]">ผลงาน / โครงการ</p>
        <h1 tabIndex={-1} className="mb-4 text-3xl font-bold text-[#1a3a6b] outline-none">ไม่พบโครงการนี้</h1>
        <p className="mb-8 text-slate-600">เลือกชมผลงานอื่น ๆ ของเราได้จากหน้ารวมโครงการ</p>
        <Link to="/projects" className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-[#1a3a6b] px-6 py-3 font-semibold text-white">
          <ArrowLeft size={18} aria-hidden="true" /> ดูโครงการทั้งหมด
        </Link>
      </div>
    );
  }

  const renderPhoto = (image: string, index: number, lead = false) => (
    <figure key={image} className="min-w-0" data-project-photo={index + 1}>
      <button
        type="button"
        onClick={event => { photoTrigger.current = event.currentTarget; setActiveImage(index); }}
        aria-label={`ขยายภาพที่ ${index + 1} ของ ${project.titleTh}`}
        aria-haspopup="dialog"
        className="ntp-project-photo group relative block w-full overflow-hidden rounded-xl border border-slate-200 bg-[#edf1f5] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-4"
      >
        <ImageWithFallback
          src={image}
          alt={`${project.titleTh} — ภาพผลงานที่ ${index + 1}`}
          className={lead ? 'h-auto max-h-[680px] w-full object-contain' : 'h-auto w-full object-contain'}
          loading={lead ? 'eager' : 'lazy'}
          fetchPriority={lead ? 'high' : 'auto'}
          sizes={lead
            ? '(min-width: 1280px) 1216px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)'
            : '(min-width: 1280px) 596px, (min-width: 768px) calc((100vw - 88px) / 2), (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)'}
        />
        <span className="absolute bottom-3 right-3 inline-flex min-h-10 items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-[#1a3a6b] shadow-sm">
          <Maximize2 size={15} aria-hidden="true" /> ขยายภาพ
        </span>
      </button>
      <figcaption className="flex items-center justify-between px-1 pb-1 pt-3 text-xs text-slate-500 sm:text-sm">
        <span>ภาพผลงาน {String(index + 1).padStart(2, '0')}</span>
        <span>{index + 1} / {project.images.length}</span>
      </figcaption>
    </figure>
  );

  return (
    <article className="bg-[#f6f8fa] pb-16 pt-24 sm:pb-20 sm:pt-28" data-project-detail={project.id}>
      <header className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-8 flex items-start justify-between gap-4 sm:mb-10">
          <Link
            to={origin ?? '/projects'}
            onClick={event => {
              if (origin && history.state?.idx > 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && event.button === 0) {
                event.preventDefault();
                navigate(-1);
              }
            }}
            data-project-back
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#1a3a6b] hover:text-[#dc2626] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-4"
          >
            <ArrowLeft size={18} aria-hidden="true" /> กลับไปดูผลงาน
          </Link>
          <div className="flex max-w-[55%] flex-col items-end">
            <button type="button" onClick={shareProject} disabled={sharing}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-[#1a3a6b] transition-colors hover:border-[#1a3a6b]/30 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-2">
              {shareStatus === 'คัดลอกลิงก์แล้ว' ? <Check size={17} aria-hidden="true" /> : <Share2 size={17} aria-hidden="true" />}
              แชร์โครงการ
            </button>
            <p role="status" className="mt-2 text-right text-xs leading-5 text-slate-600">{shareStatus}</p>
          </div>
        </div>

        <span className="mb-4 inline-block rounded-full bg-[#1a3a6b] px-4 py-2 text-xs font-semibold text-white sm:text-sm">{project.categoryTh}</span>
        <h1 tabIndex={-1} className="max-w-5xl text-[28px] font-bold leading-[1.55] text-slate-900 outline-none sm:text-4xl lg:text-[42px]">
          {project.titleTh}
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">{project.descriptionTh}</p>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
          {(project.locationTh || project.location) && <span className="inline-flex items-center gap-2"><MapPin size={18} className="text-[#dc2626]" aria-hidden="true" />{project.locationTh ?? project.location}</span>}
          {project.year && <span>ปี {project.year}</span>}
          <span className="inline-flex items-center gap-2"><Images size={18} className="text-[#1a3a6b]" aria-hidden="true" />{project.images.length} ภาพผลงาน</span>
        </div>
      </header>

      <section aria-labelledby="project-album-title" className="mx-auto mt-8 max-w-7xl px-4 sm:mt-10 sm:px-8">
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-t border-slate-200 pt-6">
          <h2 id="project-album-title" className="text-lg font-semibold text-[#1a3a6b] sm:text-xl">ภาพผลงานโครงการ</h2>
          <p className="text-sm text-slate-500">เลื่อนชมภาพทั้งหมดได้ด้านล่าง</p>
        </div>
        {project.images.length > 0 && renderPhoto(project.images[0], 0, true)}
        <div className="mt-6 grid grid-cols-1 items-start gap-x-6 gap-y-7 md:grid-cols-2 sm:mt-8 sm:gap-y-8">
          {project.images.slice(1).map((image, index) => renderPhoto(image, index + 1))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:mt-16 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#1a3a6b] p-6 text-white sm:p-8 lg:flex-row lg:items-center lg:p-10">
          <div>
            <h2 className="text-2xl font-semibold leading-relaxed">มีโครงการลักษณะนี้อยู่ในแผน?</h2>
            <p className="mt-2 text-sm leading-7 text-white/85 sm:text-base">พูดคุยกับทีม NTP เพื่อวางแผนงานให้เหมาะกับธุรกิจของคุณ</p>
          </div>
          <Link to="/contact" className="inline-flex min-h-12 shrink-0 items-center gap-3 rounded-lg bg-[#dc2626] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#b91c1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#1a3a6b]">
            ปรึกษาโครงการ <ArrowRight size={19} aria-hidden="true" />
          </Link>
        </div>
        <Link to="/projects" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#1a3a6b] hover:text-[#dc2626]">
          ดูโครงการทั้งหมด <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </section>

      {activeImage !== null && <Suspense fallback={<div role="status" className="fixed bottom-28 left-1/2 z-[100] -translate-x-1/2 rounded-lg bg-white px-5 py-3 text-sm text-[#1a3a6b] shadow-lg">กำลังเปิดภาพขนาดใหญ่…</div>}>
        <ImageLightbox activeIndex={activeImage} images={project.images} open projectTitle={project.titleTh}
          onActiveIndexChange={setActiveImage}
          onOpenChange={open => {
            if (!open) {
              setActiveImage(null);
              requestAnimationFrame(() => photoTrigger.current?.focus({ preventScroll: true }));
            }
          }} />
      </Suspense>}
    </article>
  );
}
