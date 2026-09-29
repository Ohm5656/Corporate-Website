# NTP cinematic homepage — autoplay

The existing React/Vite project remains the website base. The supplied footage
provides the introduction; the company's sections, routes and contact channels
remain in place. Autoplay now replaces the previous scroll-controlled film.

## Experience

- The muted film plays inline on desktop, phones and tablets without scrolling.
- It starts at normal speed inside the cabinet, smoothly accelerates to 2.6×
  during the electrical-trail journey, and returns smoothly to normal speed
  while approaching the factory. Total playback is approximately 7 seconds.
- The factory's last frame stays visible while the matching still photograph
  decodes, then fades to that still. It stays there without looping or restarting
  when the visitor returns to the top.
- Hero copy, navigation and contact channels fade in after the ending. The
  headline is white with three lines: “ความเป็นเลิศด้าน / วิศวกรรมไฟฟ้า /
  ในทุกโครงการ”. Navigation is transparent at scroll position zero, white
  after scrolling, and transparent again on return to the top.
- The opening has a small pause/play control. It also lets visitors start the
  film if autoplay is blocked. The skip button, NTP / ELECTRIC & ENGINEERING
  label and concept-image caption remain removed.
- The hero takes approximately one viewport. Scrolling is native and available
  immediately. There is no sticky playback area, scroll guard or reading spacer.
- Playback pauses outside the viewport or in a hidden tab, then resumes from
  the same point. A manual pause persists until the visitor presses play.
- Reduced-motion and data-saving preferences show the final composition
  immediately without requesting an MP4. Missing media or a stalled load
  also falls back to that usable composition. Blocked autoplay shows the
  composition plus the small play control once media is ready.
- About copy and photograph still converge from opposite sides with a single
  IntersectionObserver-triggered CSS transform/opacity transition. Compact
  screens use shorter travel; reduced-motion visitors see the settled layout.

## Media and timing

Speed changes are encoded into the MP4 files. Browser playback remains at 1×,
with no JavaScript animation loop, seeking, Blob download or per-frame React
state. H.264, yuv420p, faststart metadata and no audio are used for both variants.
The first play waits for a short native buffer, with a two-second deadline
from source assignment so browsers that limit preload can still start. Resume
and manually requested playback after the opening do not repeat this wait.

| Asset | Dimensions | Duration / frame rate | File bytes |
|---|---|---|---:|
| `public/cinematic/hero-intro.mp4` | 1600×900 | 6.958s / 24 fps | 1,926,040 |
| `public/cinematic/hero-intro-mobile.mp4` | 1280×720 | 6.958s / 24 fps | 829,267 |

VBV rate budgets are 2200 kbps for desktop and 950 kbps for phones, with a
one-second buffer. This limits bitrate spikes while retaining the same motion,
resolution and ending composition. The final still retains its original quality.

Phones and short touch landscape viewports use the smaller file; larger
viewports use the desktop variant. Source selection stays fixed during a
visit, so rotation cannot restart playback. The matching responsive end still
is prepared at low priority during playback; iPad uses the sharper 1600px still.
The mobile opening poster is 960px / 75,126 bytes. Production HTML preloads
only the appropriate opening poster (or end still for reduced-motion/data-saving)
on the homepage, before the application starts. The old `hero-scroll.mp4` is
preserved but no longer requested by the application.
The video also uses that opening image as its native poster, so the opening
composition remains visible while the initial playback buffer is prepared.

Timing is defined against the original 10-second footage:

| Source time | Treatment |
|---|---|
| 0–2.1s | Normal opening |
| 2.1–2.8s | Smooth acceleration |
| 2.8–6.6s | 2.6× electrical-trail journey |
| 6.6–8.2s | Smooth return to normal speed |
| 8.2–10s | Normal arrival at the factory |

The reproducible FFmpeg encoding script is
`projects/ntp-cinematic-review/qa/create-autoplay-video.mjs`. Run it from the
project root with FFmpeg available in PATH. Adjust its source-time boundaries
or peak rate and regenerate both files to change pacing.

## Code and preview

- `src/app/components/CinematicHero.tsx`: native media lifecycle, playback
  controls, visibility handling, final-frame reveal and fallback.
- `src/app/components/cinematicExperience.ts`: shared reduced-motion/data-saving
  preference helper and chrome-visibility event.
- `src/app/App.tsx`: hides and makes site chrome inert during the opening.
- `src/styles/cinematic.css`: responsive composition, reveal and still fade.

`npm run dev` starts local development. `npm run build` creates the deployable
`dist/`, including both new video files. `npx vite preview --host 127.0.0.1
--port 4173` serves the production build for review.

## Verification

The autoplay checks cover desktop, two phone sizes and iPad portrait/landscape,
final-frame hold, transparent/white navigation, native wheel scrolling,
manual/offscreen/background pause, phone rotation, live reduced-motion changes,
blocked autoplay with manual recovery, data-saving, missing video, and route
cleanup. Measurements and screenshots are in the ignored
`projects/ntp-cinematic-review/qa/` directory; current results are summarized in
[HERO_AUTOPLAY_REPORT.md](HERO_AUTOPLAY_REPORT.md).

Tests use Windows Chrome with device, CPU and network emulation. Physical
iPhone/iPad Safari and the deployed host have not been measured. Muted inline
autoplay follows [WebKit's video policy](https://webkit.org/blog/6784/new-video-policies-for-ios/);
the application handles rejected `play()` promises as described in the
[HTMLMediaElement.play documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play).
