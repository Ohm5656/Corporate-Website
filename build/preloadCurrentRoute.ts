import type { Plugin } from 'vite';

// Discover only the requested page's chunks before React starts. This avoids
// the entry -> router -> page waterfall without downloading other routes.
export function preloadCurrentRoute(): Plugin {
  let base = '/';
  return {
    name: 'ntp-preload-current-route',
    apply: 'build',
    enforce: 'post',
    configResolved(config) { base = config.base; },
    generateBundle(_, bundle) {
      const html = bundle['index.html'];
      if (!html || html.type !== 'asset' || typeof html.source !== 'string') return;
      const pages: Record<string, string> = {
        '/': 'HomePage', '/about': 'AboutPage', '/projects': 'ProjectsPage',
        '/projects/:projectId': 'ProjectDetailPage',
        '/contact': 'ContactPage', '/privacy-policy': 'PrivacyPolicyPage',
      };
      const routes: Record<string, string[]> = {};
      for (const [route, page] of Object.entries(pages)) {
        const chunk = Object.values(bundle).find(item => item.type === 'chunk'
          && item.facadeModuleId?.replaceAll('\\', '/').endsWith(`/pages/${page}.tsx`));
        if (!chunk || chunk.type !== 'chunk') continue;
        const files = new Set<string>();
        const visit = (name: string) => {
          if (files.has(name)) return;
          files.add(name);
          const item = bundle[name];
          if (item?.type === 'chunk') item.imports.forEach(visit);
        };
        visit(chunk.fileName);
        routes[route] = [...files].map(file => `${base}${file}`);
      }
      const heroPreload = `if(p==='/'){var small=matchMedia('(max-width: 720px), (max-height: 560px) and (pointer: coarse)').matches,still=matchMedia('(prefers-reduced-motion: reduce)').matches||(navigator.connection&&navigator.connection.saveData),i=document.createElement('link');i.rel='preload';i.as='image';i.href='${base}cinematic/'+(still?'hero-end':'hero-poster')+(small?'-mobile':'')+'.webp';i.fetchPriority='high';document.head.appendChild(i);}`;
      const script = `(function(){var p=location.pathname.replace(/\\/$/,'')||'/',r=${JSON.stringify(routes)};for(var u of r[p]||(/^\\/projects\\/[^/]+$/.test(p)?r['/projects/:projectId']:[])||[]){var l=document.createElement('link');l.rel='modulepreload';l.crossOrigin='';l.href=u;document.head.appendChild(l);}${heroPreload}if(p==='/about'){var i=document.createElement('link');i.rel='preload';i.as='image';i.href='${base}images/about-background.webp';i.imageSrcset='${base}images/about-background-640.webp 640w, ${base}images/about-background-1024.webp 1024w, ${base}images/about-background.webp 1600w';i.imageSizes='100vw';i.fetchPriority='high';document.head.appendChild(i);}})();`;
      html.source = html.source.replace('</head>', `<script>${script}</script>\n  </head>`);
    },
  };
}
