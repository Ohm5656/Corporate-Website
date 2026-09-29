import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { m as motion, AnimatePresence } from 'motion/react';

const logo = `${import.meta.env.BASE_URL}images/logo.webp`;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const transparentOnHero = isHomePage && !isScrolled;
  const navigationText = transparentOnHero ? 'text-white' : 'text-gray-700';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // If not on homepage, navigate to homepage first using client-side navigation
      navigate(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'หน้าแรก', section: 'home' },
    { label: 'เกี่ยวกับเรา', section: 'about' },
    { label: 'บริการ', section: 'services' },
    { label: 'โครงการ', section: 'projects' },
    { label: 'ใบรับรอง', section: 'standards' },
    { label: 'ลูกค้า', section: 'customers' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} width={192} height={192} alt="NTP Electric and Engineering" className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`${navigationText} hover:text-[#dc2626] transition-colors font-medium`}
              >
                {item.label}
              </button>
            ))}
            <Link
              to="/contact"
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-6 py-2 rounded-md transition-colors font-medium"
            >
              ติดต่อเรา
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="เปิดเมนูนำทาง"
            aria-expanded={isMobileMenuOpen}
            className={`lg:hidden p-2 ${navigationText} hover:text-[#dc2626] transition-colors`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 lg:hidden bg-white"
          >
            <div className="flex justify-between items-center h-20 px-4 sm:px-6">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src={logo} width={192} height={192} alt="NTP Electric" className="h-16 w-auto" />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-700"
              >
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8 px-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.section}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.section)}
                  className="text-2xl text-[#1a3a6b] font-semibold"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="w-full pt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-[#dc2626] text-white px-6 py-4 rounded-xl text-xl font-bold shadow-lg shadow-red-200"
                >
                  ติดต่อเรา
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
