import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MessageCircle, Facebook, CheckCircle2, X } from 'lucide-react';
import { AnimatePresence, m as motion } from 'motion/react';

export function FloatingContactBar() {
  const lineNumber = '0813752024';
  const emailAddress = 'ntpelectric2017@gmail.com';

  const [showToast, setShowToast] = useState(false);
  const [copiedText, setCopiedText] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const toastTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMobileOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMobileOpen]);

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

  const handleCopyLine = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const success = await copyToClipboard(lineNumber, '081-375-2024');

    if (!success) {
      console.error('Copy line failed');
    }
  };

  const handleCopyEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const success = await copyToClipboard(emailAddress, emailAddress);

    if (!success) {
      console.error('Copy email failed');
    }
  };

  const contacts = [
    {
      type: 'link' as const,
      icon: Phone,
      label: 'โทร',
      href: 'tel:+66813752024',
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      type: 'action' as const,
      icon: MessageCircle,
      label: 'LINE',
      onClick: handleCopyLine,
      color: 'bg-[#00B900] hover:bg-[#00A000]',
    },
    {
      type: 'link' as const,
      icon: Facebook,
      label: 'Facebook',
      href: 'https://facebook.com/ntpelectric',
      color: 'bg-[#1877F2] hover:bg-[#0C63D4]',
    },
    {
      type: 'action' as const,
      icon: Mail,
      label: 'อีเมล',
      onClick: handleCopyEmail,
      color: 'bg-[#dc2626] hover:bg-[#b91c1c]',
    },
  ];

  return (
    <>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2"
      >
        {contacts.map((contact) => {
          const Icon = contact.icon;

          if (contact.type === 'action') {
            return (
              <button
                key={contact.label}
                type="button"
                onClick={contact.onClick}
                className={`${contact.color} text-white p-4 transition-all duration-300 group flex items-center shadow-lg border-0`}
                title={contact.label === 'อีเมล' ? 'คัดลอกอีเมล' : 'คัดลอกเบอร์ LINE'}
                aria-label={contact.label === 'อีเมล' ? 'คัดลอกอีเมล' : 'คัดลอกเบอร์ LINE'}
              >
                <Icon size={24} />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 whitespace-nowrap">
                  {contact.label}
                </span>
              </button>
            );
          }

          return (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`${contact.color} text-white p-4 transition-all duration-300 group flex items-center shadow-lg`}
              title={contact.label}
            >
              <Icon size={24} />
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 whitespace-nowrap">
                {contact.label}
              </span>
            </a>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="ntp-contact-tablet fixed bottom-6 left-4 right-4 z-40 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
      >
        <div className="grid grid-cols-4 gap-0">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            if (contact.type === 'action') {
              return (
                <button
                  key={contact.label}
                  type="button"
                  onClick={contact.onClick}
                  className="flex flex-col items-center justify-center py-4 px-2 hover:bg-gray-50 transition-colors gap-1 border-r last:border-r-0 border-gray-100"
                  aria-label={contact.label === 'อีเมล' ? 'คัดลอกอีเมล' : 'คัดลอกเบอร์ LINE'}
                >
                  <div className={`p-2 rounded-full ${contact.color} text-white`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-[10px] font-bold text-gray-600 uppercase tracking-tight">
                    {contact.label}
                  </span>
                </button>
              );
            }

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center justify-center py-4 px-2 hover:bg-gray-50 transition-colors gap-1 border-r last:border-r-0 border-gray-100"
              >
                <div className={`p-2 rounded-full ${contact.color} text-white`}>
                  <Icon size={20} />
                </div>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-tight">
                  {contact.label}
                </span>
              </a>
            );
          })}
        </div>
      </motion.div>

      <div className="ntp-contact-mobile">
        <AnimatePresence>
          {isMobileOpen ? (
            <>
              <motion.button
                type="button"
                aria-label="ปิดช่องทางติดต่อ"
                className="fixed inset-0 z-40 cursor-default bg-[#071925]/20 backdrop-blur-[1px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={() => setIsMobileOpen(false)}
              />
              <motion.div
                id="mobile-contact-panel"
                role="dialog"
                aria-label="ช่องทางติดต่อ NTP"
                initial={{ opacity: 0, y: 18, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="fixed bottom-24 left-4 right-4 z-50 overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 p-3 shadow-[0_18px_60px_rgba(7,25,37,0.24)] backdrop-blur-xl"
              >
                <div className="px-2 pb-3 pt-1">
                  <p className="text-sm font-semibold text-[#102f45]">ติดต่อ NTP</p>
                  <p className="mt-0.5 text-xs text-slate-500">เลือกช่องทางที่สะดวก</p>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  {contacts.map((contact) => {
                    const Icon = contact.icon;
                    const content = (
                      <>
                        <span className={`grid h-10 w-10 place-items-center rounded-full ${contact.color} text-white shadow-sm`}>
                          <Icon size={19} />
                        </span>
                        <span className="text-[11px] font-semibold text-slate-600">{contact.label}</span>
                      </>
                    );

                    if (contact.type === 'action') {
                      return (
                        <button
                          key={contact.label}
                          type="button"
                          onClick={(event) => {
                            void contact.onClick(event);
                            setIsMobileOpen(false);
                          }}
                          className="flex min-h-16 flex-col items-center justify-center gap-1.5 rounded-xl py-2 transition-colors active:bg-slate-100"
                          aria-label={contact.label === 'อีเมล' ? 'คัดลอกอีเมล' : 'คัดลอกเบอร์ LINE'}
                        >
                          {content}
                        </button>
                      );
                    }

                    return (
                      <a
                        key={contact.label}
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        onClick={() => setIsMobileOpen(false)}
                        className="flex min-h-16 flex-col items-center justify-center gap-1.5 rounded-xl py-2 transition-colors active:bg-slate-100"
                        aria-label={`ติดต่อผ่าน${contact.label}`}
                      >
                        {content}
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </>
          ) : null}
        </AnimatePresence>

        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.35 }}
          onClick={() => setIsMobileOpen((open) => !open)}
          aria-label={isMobileOpen ? 'ปิดช่องทางติดต่อ' : 'เปิดช่องทางติดต่อ'}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-contact-panel"
          className="fixed bottom-5 right-4 z-[51] grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-[#dc2626] text-white shadow-[0_10px_30px_rgba(143,24,30,0.35)] transition-colors active:bg-[#b91c1c]"
        >
          {isMobileOpen ? <X size={23} /> : <MessageCircle size={24} />}
        </motion.button>
      </div>

      <div
        className={`fixed left-1/2 -translate-x-1/2 bottom-24 md:bottom-28 lg:bottom-8 z-[60] transition-all duration-300 ${
          showToast
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-gray-200 px-4 py-3 min-w-[260px]">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle2 size={20} className="text-green-600" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900">
              คัดลอกไปยังคลิปบอร์ดแล้ว
            </p>
            <p className="text-xs text-gray-500">{copiedText}</p>
          </div>
        </div>
      </div>
    </>
  );
}
