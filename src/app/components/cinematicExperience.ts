export const CINEMATIC_CHROME_EVENT = 'ntp:cinematic-chrome';
export const CINEMATIC_REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

// Device size selects a smaller video; it no longer disables playback.
export function prefersCinematicStill() {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return window.matchMedia(CINEMATIC_REDUCED_MOTION_QUERY).matches || Boolean(connection?.saveData);
}
