import { motion } from "motion/react";
import { ProjectGalleryGrid } from "../components/ProjectGalleryGrid";
import { projects } from "../../data/projects";

export function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 pb-32 lg:pb-20">
      {/* Header Section */}
      <section className="bg-[#1a3a6b] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-white mb-6 font-bold"
          >
            ผลงานของเรา
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-5xl mx-auto"
          >
            รวมตัวอย่างผลงานโครงการด้านระบบไฟฟ้าและระบบควบคุมที่เราได้ดำเนินการในภาคอุตสาหกรรม
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-12 text-gray-500 text-sm"
          >
            แสดงทั้งหมด {projects.length} โครงการ
          </motion.div>

          <ProjectGalleryGrid projects={projects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a3a6b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-1xl text-white mb-3 font-bold max-w-10xl mx-auto">
              พร้อมเริ่มโครงการระบบไฟฟ้ากับทีมงานมืออาชีพแล้วหรือยัง ?
            </h2>

            <p className="text-xl text-white/90 mb-8">
              เรายินดีให้คำปรึกษา ออกแบบ และวางแผนงานระบบไฟฟ้า ให้เหมาะสมกับความต้องการของธุรกิจคุณอย่างครบวงจร
            </p>

            <a
              href="/contact"
              className="inline-block bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-md transition-colors text-lg font-medium"
            >
              ติดต่อเรา
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
