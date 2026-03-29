import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-gray-200 bg-white/95 backdrop-blur-sm shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <p className="text-sm md:text-base text-gray-700 leading-7">
            เว็บไซต์นี้ใช้คุกกี้เพื่อสร้างประสบการณ์ที่ดีมีประสิทธิภาพยิ่งขึ้น
            อ่านเพิ่มเติมได้ที่{" "}
            <Link
              to="/privacy-policy"
              className="text-[#ef3b2d] font-medium hover:underline"
            >
              นโยบายความเป็นส่วนตัว
            </Link>
          </p>

          <button
            onClick={handleAccept}
            className="shrink-0 inline-flex items-center justify-center rounded-xl bg-[#ef3b2d] hover:bg-[#d92f22] text-white font-semibold px-8 py-3 transition-colors duration-300 shadow-md"
          >
            ยอมรับ
          </button>
        </div>
      </div>
    </div>
  );
}