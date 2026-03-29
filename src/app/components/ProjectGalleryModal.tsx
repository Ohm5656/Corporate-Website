import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  CalendarDays,
  Download,
  Images,
  MapPin,
  Share2,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { Project } from "../../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageLightbox } from "./ImageLightbox";

interface ProjectGalleryModalProps {
  open: boolean;
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

export function ProjectGalleryModal({
  open,
  project,
  onOpenChange,
}: ProjectGalleryModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!open) {
      setActiveImageIndex(null);
    }
  }, [open]);

  useEffect(() => {
    setActiveImageIndex(null);
  }, [project?.id]);

  if (!project) {
    return null;
  }

  const handleShare = async () => {
    const shareText = `${project.titleTh}\n${project.descriptionTh}`;

    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({
          title: project.titleTh,
          text: shareText,
          url: project.coverImage,
        });
        return;
      }

      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(
          `${shareText}\n${project.coverImage}`,
        );
      }
    } catch {
      // ignore
    }
  };

  return (
    <>
      <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <AnimatePresence>
          {open ? (
            <DialogPrimitive.Portal forceMount>
              <DialogPrimitive.Overlay asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-[70] bg-[#1a3a6b]/18 backdrop-blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                />
              </DialogPrimitive.Overlay>

              <DialogPrimitive.Content asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-[80] overflow-hidden bg-[#f5f8fc] outline-none sm:inset-y-4 sm:left-1/2 sm:w-[min(calc(100vw-2rem),1360px)] sm:-translate-x-1/2 sm:rounded-[30px] sm:border sm:border-white/70 sm:shadow-[0_40px_120px_-48px_rgba(15,23,42,0.35)] lg:inset-y-8 lg:w-[min(calc(100vw-4rem),1360px)]"
                  initial={{ opacity: 0, y: 28, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 24, scale: 0.985 }}
                  transition={{ duration: 0.26, ease: "easeOut" }}
                >
                  <DialogPrimitive.Title className="sr-only">
                    {project.titleTh}
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="sr-only">
                    {project.descriptionTh}
                  </DialogPrimitive.Description>

                  <div className="flex h-full flex-col">
                    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 border-b border-slate-200/80 bg-white/88 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
                      <DialogPrimitive.Close asChild>
                        <button
                          type="button"
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1a3a6b]/10 bg-white text-[#1a3a6b] transition-colors hover:border-[#dc2626]/20 hover:bg-[#dc2626] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-2"
                          aria-label="ปิดแกลเลอรีโครงการ"
                        >
                          <X size={20} />
                        </button>
                      </DialogPrimitive.Close>

                      <div className="min-w-0 px-1 text-center">
                        <p className="truncate text-[13px] font-semibold tracking-[0.12em] text-[#dc2626] mb-1 sm:text-[14px]">
                          {project.categoryTh}
                        </p>
                      <h2 className="truncate text-[17px] font-semibold leading-tight tracking-tight text-[#1a3a6b] sm:text-[20px] lg:text-[22px]">                          {project.titleTh}
                        </h2>
                      </div>

                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={handleShare}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1a3a6b]/10 bg-white text-[#1a3a6b] transition-colors hover:border-[#dc2626]/20 hover:bg-[#dc2626] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-2"
                          aria-label="แชร์โครงการ"
                        >
                          <Share2 size={18} />
                        </button>

                        <a
                          href={project.coverImage}
                          download
                          target="_blank"
                          rel="noreferrer"
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1a3a6b]/10 bg-white text-[#1a3a6b] transition-colors hover:border-[#dc2626]/20 hover:bg-[#dc2626] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-2"
                          aria-label="ดาวน์โหลดภาพหน้าปก"
                        >
                          <Download size={18} />
                        </a>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
                        <section className="grid gap-5 rounded-[28px] border border-white/70 bg-white p-5 shadow-[0_26px_90px_-42px_rgba(15,23,42,0.32)] lg:grid-cols-[minmax(0,1.05fr)_400px] lg:items-center lg:gap-7 lg:p-7">
                          <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#1a3a6b]/10 bg-[#1a3a6b]/5 px-4 py-2 text-sm font-medium text-[#1a3a6b]">
                              <Images size={16} />
                              แกลเลอรีโครงการ {project.images.length} ภาพ
                            </div>

                            <div className="space-y-2.5">
                              <h3 className="text-[1.85rem] font-semibold leading-tight tracking-tight text-[#1a3a6b] sm:text-[2rem] lg:text-[2.15rem]">
                                {project.titleTh}
                              </h3>

                              <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-[15px]">
                                {project.descriptionTh}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                              {project.locationTh ?? project.location ? (
                                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
                                  <MapPin size={16} className="text-[#dc2626]" />
                                  {project.locationTh ?? project.location}
                                </div>
                              ) : null}

                              {project.year ? (
                                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
                                  <CalendarDays size={16} className="text-[#dc2626]" />
                                  {project.year}
                                </div>
                              ) : null}
                            </div>
                          </div>

                          <div className="overflow-hidden rounded-[26px] border border-[#1a3a6b]/8 bg-slate-100 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.4)]">
                            <ImageWithFallback
                              src={project.coverImage}
                              alt={project.titleTh}
                              className="h-full max-h-[340px] w-full object-cover lg:max-h-[400px]"
                            />
                          </div>
                        </section>

                        <section className="rounded-[28px] border border-white/70 bg-white p-4 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.3)] sm:p-5 lg:p-6">
                          <div className="mb-5 flex items-center justify-between gap-4">
                            <div>
                              <h3 className="text-lg font-semibold text-[#1a3a6b] sm:text-[1.15rem]">
                                Project Gallery
                              </h3>
                              <p className="text-sm text-slate-500">
                                แตะหรือคลิกเพื่อดูภาพขนาดใหญ่
                              </p>
                            </div>

                            <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
                              {project.images.length} images
                            </div>
                          </div>

                          <div className="columns-2 gap-4 sm:gap-5 lg:columns-3 xl:columns-4">
                            {project.images.map((image, index) => (
                              <motion.button
                                key={`${project.id}-${index}`}
                                type="button"
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.18 }}
                                onClick={() => setActiveImageIndex(index)}
                                className="group mb-4 w-full break-inside-avoid overflow-hidden rounded-[24px] border border-slate-200 bg-[#f8fafc] p-2 text-left shadow-[0_16px_40px_-28px_rgba(15,23,42,0.28)] transition-colors hover:border-[#1a3a6b]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] focus-visible:ring-offset-2 sm:mb-5"
                                aria-label={`เปิดภาพที่ ${index + 1} ของโครงการ ${project.titleTh}`}
                              >
                                <div className="overflow-hidden rounded-[20px] bg-slate-100">
                                  <ImageWithFallback
                                    src={image}
                                    alt={`${project.titleTh} ${index + 1}`}
                                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                  />
                                </div>

                                <div className="flex items-center justify-between px-3 pb-2 pt-3 sm:px-4 sm:pb-3">
                                  <div>
                                    <p className="text-sm font-medium text-[#1a3a6b]">
                                      ภาพที่ {index + 1}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                      Tap to preview
                                    </p>
                                  </div>

                                  <div className="rounded-full border border-[#1a3a6b]/10 bg-white px-3 py-1 text-xs font-semibold text-[#1a3a6b]">
                                    {index + 1}/{project.images.length}
                                  </div>
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          ) : null}
        </AnimatePresence>
      </DialogPrimitive.Root>

      <ImageLightbox
        activeIndex={activeImageIndex ?? 0}
        images={project.images}
        open={activeImageIndex !== null}
        projectTitle={project.titleTh}
        onActiveIndexChange={setActiveImageIndex}
        onOpenChange={(nextOpen) => {
          if (!nextOpen) {
            setActiveImageIndex(null);
          }
        }}
      />
    </>
  );
}