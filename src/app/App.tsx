import { useEffect, useLayoutEffect, useRef, useState, Suspense, lazy, type ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FloatingContactBar } from './components/FloatingContactBar';
import { NewFooter } from './components/NewFooter';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingSpinner } from './components/LoadingSpinner';
import { CookieConsent } from './components/CookieConsent';
import { RouteScrollRestoration } from './components/RouteScrollRestoration';
import { loadProjectDetail } from './pages/loadProjectDetail';
import { LazyMotion, domAnimation, MotionConfig } from 'motion/react';
import { CINEMATIC_CHROME_EVENT, prefersCinematicStill } from './components/cinematicExperience';
import '../styles/cinematic.css';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(module => ({ default: module.ProjectsPage })));
const ProjectDetailPage = lazy(loadProjectDetail);
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })));

function RouteView({ children }: { children: ReactNode }) {
  const { key } = useLocation();
  return <div data-route-key={key}>{children}</div>;
}

function AppContent() {
  const { pathname } = useLocation();
  const chromeRef = useRef<HTMLDivElement>(null);
  const [heroChromeVisible, setHeroChromeVisible] = useState(prefersCinematicStill);
  const hideChrome = pathname === '/' && !heroChromeVisible;

  useLayoutEffect(() => {
    const onChromeChange = (event: Event) => {
      setHeroChromeVisible((event as CustomEvent<boolean>).detail);
    };
    window.addEventListener(CINEMATIC_CHROME_EVENT, onChromeChange);
    const hero = document.getElementById('home');
    setHeroChromeVisible(hero
      ? hero.dataset.mode === 'static' || hero.dataset.revealed === 'true' || hero.getBoundingClientRect().bottom <= 0
      : prefersCinematicStill());
    return () => window.removeEventListener(CINEMATIC_CHROME_EVENT, onChromeChange);
  }, [pathname]);

  useLayoutEffect(() => {
    if (chromeRef.current) chromeRef.current.inert = hideChrome;
  }, [hideChrome]);

  return (
    <div className="ntp-site-shell min-h-screen bg-white">
      <RouteScrollRestoration />
      <div ref={chromeRef} className="cinematic-site-chrome" data-hidden={hideChrome} aria-hidden={hideChrome || undefined}>
        <Navbar />
        <FloatingContactBar />
        <ScrollToTop />
        <CookieConsent />
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Suspense fallback={<LoadingSpinner />}><RouteView><HomePage /></RouteView></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<LoadingSpinner />}><RouteView><AboutPage /></RouteView></Suspense>} />
          <Route path="/projects" element={<Suspense fallback={<LoadingSpinner />}><RouteView><ProjectsPage /></RouteView></Suspense>} />
          <Route path="/projects/:projectId" element={<Suspense fallback={<LoadingSpinner />}><RouteView><ProjectDetailPage /></RouteView></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<LoadingSpinner />}><RouteView><ContactPage /></RouteView></Suspense>} />
          <Route path="/privacy-policy" element={<Suspense fallback={<LoadingSpinner />}><RouteView><PrivacyPolicyPage /></RouteView></Suspense>} />
        </Routes>
      </main>

      <NewFooter />
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateScrollBehavior = () => {
      document.documentElement.style.scrollBehavior = reducedMotion.matches ? 'auto' : 'smooth';
    };
    updateScrollBehavior();
    reducedMotion.addEventListener('change', updateScrollBehavior);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      reducedMotion.removeEventListener('change', updateScrollBehavior);

    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}><Router>
        <AppContent />
      </Router></LazyMotion>
    </MotionConfig>
  );
}
