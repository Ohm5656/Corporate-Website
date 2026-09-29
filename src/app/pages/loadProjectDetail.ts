let detailPromise: Promise<{ default: typeof import('./ProjectDetailPage').ProjectDetailPage }> | undefined;

export const loadProjectDetail = () => detailPromise ??= import('./ProjectDetailPage')
  .then(module => ({ default: module.ProjectDetailPage }));

export function warmProjectDetail() {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (!connection?.saveData && !['slow-2g', '2g', '3g'].includes(connection?.effectiveType || '')) {
    void loadProjectDetail().catch(() => { detailPromise = undefined; });
  }
}
