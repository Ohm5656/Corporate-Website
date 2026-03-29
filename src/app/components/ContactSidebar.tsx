import { useState } from 'react';
import { Phone, Mail, MessageCircle, Facebook, CheckCircle2 } from 'lucide-react';

export function ContactSidebar() {
  const phoneNumber = '0812345678';
  const [showToast, setShowToast] = useState(false);

  const handleCopyLine = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await navigator.clipboard.writeText(phoneNumber);
      setShowToast(true);

      window.setTimeout(() => {
        setShowToast(false);
      }, 2200);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  const contactItems = [
    {
      type: 'link' as const,
      icon: Phone,
      label: 'Phone',
      href: 'tel:+66812345678',
      color: '#1a3a6b',
    },
    {
      type: 'action' as const,
      icon: MessageCircle,
      label: 'LINE',
      color: '#00B900',
    },
    {
      type: 'link' as const,
      icon: Facebook,
      label: 'Facebook',
      href: 'https://facebook.com',
      color: '#1877F2',
    },
    {
      type: 'link' as const,
      icon: Mail,
      label: 'Email',
      href: 'mailto:info@ntpelectric.com',
      color: '#dc2626',
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
        {contactItems.map((item, index) => {
          const Icon = item.icon;

          if (item.type === 'action') {
            return (
              <button
                key={index}
                type="button"
                onClick={handleCopyLine}
                className="group relative appearance-none border-0 bg-transparent p-0 m-0"
                aria-label="คัดลอกเบอร์ LINE"
              >
                <div
                  className="w-14 h-14 flex items-center justify-center text-white transition-all duration-300 hover:w-16 cursor-pointer"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon size={24} />
                </div>
                <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  คัดลอกเบอร์ LINE
                </span>
              </button>
            );
          }

          return (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative"
              aria-label={item.label}
            >
              <div
                className="w-14 h-14 flex items-center justify-center text-white transition-all duration-300 hover:w-16"
                style={{ backgroundColor: item.color }}
              >
                <Icon size={24} />
              </div>
              <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t shadow-lg">
        <div className="flex justify-around items-center py-3">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            if (item.type === 'action') {
              return (
                <button
                  key={index}
                  type="button"
                  onClick={handleCopyLine}
                  className="flex flex-col items-center gap-1 appearance-none border-0 bg-transparent p-0 m-0"
                  aria-label="คัดลอกเบอร์ LINE"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center text-white rounded-lg cursor-pointer"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="text-xs text-gray-600">LINE</span>
                </button>
              );
            }

            return (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center gap-1"
                aria-label={item.label}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center text-white rounded-lg"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon size={20} />
                </div>
                <span className="text-xs text-gray-600">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Toast */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 bottom-24 lg:bottom-8 z-[60] transition-all duration-300 ${
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
            <p className="text-xs text-gray-500">081-234-5678</p>
          </div>
        </div>
      </div>
    </>
  );
}