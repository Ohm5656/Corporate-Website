export const CINEMATIC_CHROME_EVENT = 'ntp:cinematic-chrome';
export const CINEMATIC_REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
export const CINEMATIC_PHONE_QUERY = '(max-width: 767px), (max-height: 560px) and (pointer: coarse)';

export function prefersCinematicStill() {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return window.matchMedia(CINEMATIC_PHONE_QUERY).matches
    || window.matchMedia(CINEMATIC_REDUCED_MOTION_QUERY).matches
    || Boolean(connection?.saveData);
}
