import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect } from "react";

import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ImageLightboxProps {
  activeIndex: number;
  images: string[];
  open: boolean;
  projectTitle: string;
  onActiveIndexChange: (index: number) => void;
  onOpenChange: (open: boolean) => void;
}

export function ImageLightbox({
  activeIndex,
  images,
  open,
  projectTitle,
  onActiveIndexChange,
  onOpenChange,
}: ImageLightboxProps) {
  const totalImages = images.length;

  const goToPrevious = useCallback(() => {
    onActiveIndexChange(
      activeIndex === 0 ? totalImages - 1 : activeIndex - 1,
    );
  }, [activeIndex, onActiveIndexChange, totalImages]);

  const goToNext = useCallback(() => {
    onActiveIndexChange(
      activeIndex === totalImages - 1 ? 0 : activeIndex + 1,
    );
  }, [activeIndex, onActiveIndexChange, totalImages]);

  useEffect(() => {
    if (!open || totalImages <= 1) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, open, totalImages]);

  if (totalImages === 0) {
    return null;
  }

  const activeImage = images[activeIndex];

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open ? (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[95] bg-[#1a3a6b]/18 backdrop-blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </DialogPrimitive.Overlay>

            <DialogPrimitive.Content asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[100] bg-[#f2f6fb]/96 px-4 py-4 outline-none sm:px-6 sm:py-6 lg:px-10 lg:py-8"
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
              >
                <DialogPrimitive.Title className="sr-only">
                  {projectTitle}
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="sr-only">
                  ภาพที่ {activeIndex + 1} จากทั้งหมด {totalImages}
                </DialogPrimitive.Description>

                <div className="mx-auto flex h-full w-full max-w-[1400px] flex-col">
                  <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[28px] border border-white/70 bg-white/86 px-4 py-3 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:px-5">
                    <DialogPrimitive.Close asChild>
                      <button
                        type="button"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1a3a6b]/10 bg-white text-[#1a3a6b] transition-colors hover:border-[#dc2626]/20 hover:bg-[#dc2626] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-2"
                        aria-label="ปิดตัวอย่างรูปภาพ"
                      >
                        <X size={20} />
                      </button>
                    </DialogPrimitive.Close>

                    <div className="min-w-0 px-2 text-center">
                      <p className="truncate text-sm font-semibold text-[#1a3a6b] sm:text-base">
                        {projectTitle}
                      </p>
                      <p className="text-xs text-slate-500 sm:text-sm">
                        {activeIndex + 1} / {totalImages}
                      </p>
                    </div>

                    <a
                      href={activeImage}
                      download
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1a3a6b]/10 bg-white text-[#1a3a6b] transition-colors hover:border-[#dc2626]/20 hover:bg-[#dc2626] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-2"
                      aria-label="ดาวน์โหลดรูปภาพ"
                    >
                      <Download size={18} />
                    </a>
                  </div>

                  <div className="relative mt-4 flex min-h-0 flex-1 items-center justify-center">
                    {totalImages > 1 ? (
                      <button
                        type="button"
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/88 text-[#1a3a6b] shadow-lg backdrop-blur-xl transition-colors hover:border-[#dc2626]/20 hover:bg-[#dc2626] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-2 sm:flex"
                        aria-label="รูปก่อนหน้า"
                      >
                        <ChevronLeft size={24} />
                      </button>
                    ) : null}

                    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[34px] border border-white/70 bg-white/80 px-3 py-3 shadow-[0_30px_80px_-36px_rgba(15,23,42,0.38)] backdrop-blur-xl sm:px-6 sm:py-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeImage}
                          initial={{ opacity: 0, scale: 0.985 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.985 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="flex h-full w-full items-center justify-center"
                        >
                          <ImageWithFallback
                            src={activeImage}
                            alt={`${projectTitle} ${activeIndex + 1}`}
                            className="max-h-[72vh] w-auto max-w-full rounded-[26px] object-contain"
                          />
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {totalImages > 1 ? (
                      <button
                        type="button"
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/88 text-[#1a3a6b] shadow-lg backdrop-blur-xl transition-colors hover:border-[#dc2626]/20 hover:bg-[#dc2626] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-2 sm:flex"
                        aria-label="รูปถัดไป"
                      >
                        <ChevronRight size={24} />
                      </button>
                    ) : null}
                  </div>

                  {totalImages > 1 ? (
                    <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                      {images.map((image, index) => {
                        const isActive = index === activeIndex;

                        return (
                          <button
                            key={`${image}-${index}`}
                            type="button"
                            onClick={() => onActiveIndexChange(index)}
                            className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-[20px] border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-2 ${
                              isActive
                                ? "border-[#dc2626] shadow-[0_16px_40px_-24px_rgba(220,38,38,0.6)]"
                                : "border-white/70 opacity-80 hover:opacity-100"
                            }`}
                            aria-label={`เปิดรูปภาพที่ ${index + 1}`}
                            aria-current={isActive}
                          >
                            <ImageWithFallback
                              src={image}
                              alt={`${projectTitle} thumbnail ${index + 1}`}
                              className="h-full w-full object-cover"
                            />
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        ) : null}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
