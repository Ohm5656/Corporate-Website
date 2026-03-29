import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/9d68ce4323e20f2687da32ca763fe4e87c181bcf.png";

export function NewFooter() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const lineNumber = '0813752024';
  const emailAddress = 'ntpelectric2017@gmail.com';

  const [showToast, setShowToast] = useState(false);
  const [copiedText, setCopiedText] = useState('');
  const toastTimerRef = useRef<number | null>(null);

  const showCopyToast = (value: string) => {
    setCopiedText(value);
    setShowToast(true);

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setShowToast(false);
    }, 2200);
  };

  const fallbackCopyText = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.opacity = '0';
    textArea.style.pointerEvents = 'none';
    textArea.style.zIndex = '-1';

    document.body.appendChild(textArea);

    const selection = document.getSelection();
    const selectedRange =
      selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : null;

    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, text.length);

    let copied = false;

    try {
      copied = document.execCommand('copy');
    } catch (error) {
      console.error('Fallback copy failed:', error);
      copied = false;
    }

    document.body.removeChild(textArea);

    if (selectedRange && selection) {
      selection.removeAllRanges();
      selection.addRange(selectedRange);
    }

    return copied;
  };

  const copyToClipboard = async (text: string, successLabel: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        showCopyToast(successLabel);
        return true;
      }

      const copied = fallbackCopyText(text);
      if (copied) {
        showCopyToast(successLabel);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Clipboard API copy failed, trying fallback:', error);

      const copied = fallbackCopyText(text);
      if (copied) {
        showCopyToast(successLabel);
        return true;
      }

      return false;
    }
  };

  const handleCopyLine = async () => {
    const success = await copyToClipboard(lineNumber, '081-375-2024');

    if (!success) {
      console.error('Copy line failed');
    }
  };

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(emailAddress, emailAddress);

    if (!success) {
      console.error('Copy email failed');
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const quickLinks = [
    { id: 'home', label: 'หน้าแรก' },
    { id: 'about', label: 'เกี่ยวกับเรา' },
    { path: '/about', label: 'ประวัติความเป็นมา' },
    { id: 'services', label: 'บริการ' },
    { id: 'projects', label: 'โครงการ' },
    { id: 'certifications', label: 'ใบรับรอง' },
    { id: 'customers', label: 'ลูกค้า' },
  ];

  const services = [
    'ติดตั้งระบบไฟฟ้า',
    'ระบบอัตโนมัติอุตสาหกรรม',
    'ตู้ควบคุมไฟฟ้า',
    'บำรุงรักษาและซ่อมแซม',
    'ตรวจสอบความปลอดภัย',
  ];

  return (
    <>
      <footer className="bg-[#1a3a6b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 bg-white p-2 inline-block rounded-lg shadow-sm">
                  <img
                    src={logo}
                    alt="NTP Electric and Engineering"
                    className="h-16 w-auto"
                  />
                </div>

                <p className="text-white/80 mb-4 leading-relaxed">
                  ผู้เชี่ยวชาญด้านการ ออกแบบ ติดตั้งงานระบบไฟฟ้าโรงงาน
                  <br />
                  และงานระบบไฟฟ้าห้องเย็น
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+66813752024"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                  >
                    <Phone size={18} className="flex-shrink-0" />
                    <span>+66 (0) 81-375-2024</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group text-left bg-transparent border-0 p-0"
                    aria-label="คัดลอกอีเมล"
                  >
                    <Mail size={18} className="flex-shrink-0" />
                    <span>{emailAddress}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyLine}
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group text-left bg-transparent border-0 p-0"
                    aria-label="คัดลอกเบอร์ LINE"
                  >
                    <MessageCircle size={18} className="flex-shrink-0" />
                    <span>081-375-2024</span>
                  </button>

                  <div className="flex items-start gap-3 text-white/80">
                    <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                    <span>
                      333/51 หมู่ 19 ต.บางพลีใหญ่ อ.บางพลี จ.สมุทรปราการ 10540
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-xl mb-4 font-semibold">เมนูหลัก</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    {link.id ? (
                      <button
                        type="button"
                        onClick={() => scrollToSection(link.id!)}
                        className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.path!}
                        className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}

                <li>
                  <Link
                    to="/contact"
                    className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    ติดต่อเรา
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-xl mb-4 font-semibold">บริการของเรา</h4>
              <ul className="space-y-3 text-white/80">
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm text-center md:text-left">
                &copy; 2026 NTP Electric and Engineering Co., Ltd. สงวนลิขสิทธิ์
              </p>
              <div className="flex gap-6 text-sm text-white/60"></div>
            </div>
          </div>
        </div>
      </footer>

      <div
        className={`fixed left-1/2 -translate-x-1/2 bottom-24 lg:bottom-8 z-[60] transition-all duration-300 ${
          showToast
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-3 rounded-3xl bg-[#e9e9ec] shadow-xl px-6 py-4 min-w-[320px]">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 size={22} className="text-[#16a34a]" />
          </div>

          <div className="text-left">
            <p className="text-[15px] font-semibold text-gray-900 leading-tight">
              คัดลอกไปยังคลิปบอร์ดแล้ว
            </p>
            <p className="text-[14px] text-gray-600 leading-tight mt-1">
              {copiedText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}