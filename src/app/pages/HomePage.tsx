import { m as motion } from "motion/react";
import {
  ArrowRight,
  Zap,
  Building2,
  Factory,
  Wrench,
  Lightbulb,
  Shield,
  FileCheck,
  Award,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SectionWrapper } from "../components/SectionWrapper";
import { ProjectGalleryGrid } from "../components/ProjectGalleryGrid";
import { CountUpAnimation } from "../components/CountUpAnimation";
import { OurCustomers } from "../components/OurCustomers";
import { projects } from "../../data/projects";
import { CinematicHero } from "../components/CinematicHero";
import { ConvergingAbout } from "../components/ConvergingAbout";

export function HomePage() {
const services = [
  {
    icon: Zap,
    title: "ออกแบบและผลิตตู้คอนโทรล",
    description:
      "ออกแบบวงจรไฟฟ้าและระบบควบคุม พร้อมผลิตตู้ MDB / DB / Control Panel โดยเลือกอุปกรณ์ให้เหมาะสม รองรับงานโรงงานและเครื่องจักรอุตสาหกรรม",
  },
  {
    icon: Factory,
    title: "ระบบควบคุมอัตโนมัติ (PLC & Automation)",
    description:
      "ออกแบบและพัฒนาระบบควบคุมเครื่องจักร เขียนโปรแกรม PLC เชื่อมต่อ Sensor, Motor และ Inverter เพื่อเพิ่มประสิทธิภาพการผลิต",
  },
  {
    icon: Building2,
    title: "ระบบไฟฟ้าห้องเย็น",
    description:
      "ออกแบบและติดตั้งระบบควบคุมอุณหภูมิ ตู้ควบคุม Compressor และ Condensing Unit พร้อมระบบป้องกันสำหรับงานห้องเย็นอุตสาหกรรม",
  },
  {
    icon: Wrench,
    title: "ติดตั้งระบบไฟฟ้าเครื่องจักร",
    description:
      "ติดตั้งระบบไฟฟ้าสำหรับเครื่องจักรอุตสาหกรรม Wiring และเชื่อมต่ออุปกรณ์ พร้อมทดสอบระบบให้พร้อมใช้งานจริง",
  },
  {
    icon: Lightbulb,
    title: "Wiring ภายในตู้คอนโทรล",
    description:
      "เดินสายภายในตู้คอนโทรลอย่างเป็นระเบียบ ตามมาตรฐานวิศวกรรม พร้อมตรวจสอบความถูกต้องก่อนใช้งาน",
  },
  {
    icon: Shield,
    title: "ซ่อมบำรุงและปรับปรุงระบบไฟฟ้า",
    description:
      "ตรวจสอบ แก้ไข และปรับปรุงระบบควบคุม อัปเกรดตู้คอนโทรล และบำรุงรักษาเครื่องจักรเพื่อให้ทำงานได้อย่างต่อเนื่อง",
  },
];
  const certifications = [
    {
      title: "ISO 9001:2015",
      subtitle: "ระบบบริหารคุณภาพ",
      description:
        "รับรองระบบบริหารคุณภาพเพื่อให้มั่นใจในการส่งมอบผลิตภัณฑ์และบริการที่สอดคล้องกับความต้องการของลูกค้าและข้อกำหนด",
      year: "2020",
    },
    {
      title: "ISO 14001:2015",
      subtitle: "การจัดการสิ่งแวดล้อม",
      description:
        "รับรองระบบการจัดการสิ่งแวดล้อม แสดงให้เห็นถึงความมุ่งมั่นในการดำเนินงานที่ยั่งยืนและรับผิดชอบต่อสิ่งแวดล้อม",
      year: "2021",
    },
    {
      title: "ISO 45001:2018",
      subtitle: "อาชีวอนามัยและความปลอดภัย",
      description:
        "รับรองระบบการจัดการอาชีวอนามัยและความปลอดภัย เพื่อสภาพการทำงานที่ปลอดภัยสำหรับพนักงานทุกคน",
      year: "2021",
    },
    {
      title: "ใบอนุญาตวิศวกรไฟฟ้า",
      subtitle: "สภาวิศวกร",
      description:
        "บริษัทวิศวกรรมไฟฟ้าที่ได้รับใบอนุญาตให้ออกแบบและดำเนินโครงการวิศวกรรมไฟฟ้า ครอบคลุมถึงระบบแรงสูง",
      year: "1998",
    },
  ];

  const accreditations = [
    "สมาชิกสถาบันวิศวกรรมแห่งประเทศไทย",
    "จดทะเบียนกับกรมโยธาธิการและผังเมือง",
    "ได้รับการรับรองจากสถาบันมาตรฐานอุตสาหกรรมไทย",
    "สมาชิกสมาคมผู้รับเหมาไฟฟ้า",
  ];

const featuredProjectIds = [1, 13, 14, 8, 4, 9];

const featuredProjects = featuredProjectIds
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean);

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "โครงการที่ดำเนินการสำเร็จ",
    },
    { number: 100, suffix: "%", label: "ความไว้วางใจจากลูกค้าในทุกโครงการ" },
    { number: 10, suffix: "+", label: "ประสบการณ์มากกว่า" },
  ];

  return (
    <div className="min-h-screen ntp-cinematic-home">
      <CinematicHero />

{/* About Section */}
<SectionWrapper id="about" className="py-20 bg-white content-auto">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <ConvergingAbout>
      <div data-about-part="copy"
        className="max-w-3xl"
      >
        <div className="mb-2">
                <p className="text-[#dc2626] text-1xl uppercase tracking-wide mb-1 font-semibold">
                  เกี่ยวกับเรา
                </p>
              </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1a3a6b] mb-6 font-bold leading-tight">
          บริษัท เอ็นทีพี อิเล็คทริค
          <br className="hidden sm:block" />
          แอนด์ เอ็นจิเนียริ่ง จำกัด
        </h2>

        <p className="thai-text thai-balance text-gray-700 text-base md:text-lg mb-5 leading-8 md:leading-9">
          บริษัทได้ดำเนินกิจการเกี่ยวกับการออกแบบ ติดตั้งงานระบบไฟฟ้าโรงงาน
          และงานระบบไฟฟ้าห้องเย็น โดยจดทะเบียนการค้าเมื่อวันที่ 7 กรกฎาคม
          พ.ศ. 2555 ในนาม ห้างหุ้นส่วนจำกัด เอ็นทีพี อิเล็คทริคแอนด์เอ็นจิเนียริ่ง
          และต่อมาได้ดำเนินการแปรสภาพกิจการจากห้างหุ้นส่วนจำกัด
          เป็นบริษัทจำกัดในชื่อ บริษัท เอ็นทีพี อิเล็คทริคแอนด์ เอ็นจิเนียริ่ง จำกัด
          เมื่อวันที่ 29 ธันวาคม พ.ศ. 2559
          พร้อมดำเนินกิจการอย่างต่อเนื่องมาจนถึงปัจจุบัน
        </p>

        <p className="thai-text thai-balance text-gray-700 text-base md:text-lg mb-8 leading-8 md:leading-9">
          ด้วยประสบการณ์ในการทำงานด้านวิศวกรรมไฟฟ้ามากกว่า 10 ปี
          เรามุ่งมั่นส่งมอบงานที่มีคุณภาพ
          พร้อมมาตรฐานความปลอดภัยสูงสุดให้แก่ลูกค้าของเรา
        </p>

        <Link
          to="/about"
          className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-md transition-all duration-300 group font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          อ่านเพิ่มเติม
          <ArrowRight
            className="group-hover:translate-x-1 transition-transform"
            size={18}
          />
        </Link>
      </div>

      <div data-about-part="picture" className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
        <ImageWithFallback
          src="/images/company-home.webp"
          srcSet="/images/company-home-640.webp 640w, /images/company-home-1024.webp 1024w, /images/company-home.webp 1280w"
          sizes="(min-width: 1280px) 576px, (min-width: 768px) 45vw, calc(100vw - 32px)"
          width={1280}
          height={960}
          alt="Modern Engineering"
          className="w-full h-full object-cover"
          loading="lazy"
          fetchPriority="low"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_48%,rgba(0,0,0,0.55)_100%)]" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <p className="text-white text-lg md:text-1xl text-center font-bold italic leading-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]">
            “ความพึงพอใจของลูกค้า คือหัวใจหลักของงานเรา”
          </p>
        </div>
      </div>
    </ConvergingAbout>
  </div>
</SectionWrapper>

      {/* Stats Section */}
      <section className="ntp-stats py-20 bg-[#1a3a6b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="text-center py-6 md:py-0"
              >
                <div className="text-4xl md:text-5xl text-[#dc2626] mb-4 font-bold tracking-tight">
                  <CountUpAnimation
                    end={stat.number}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-white text-base md:text-xl font-medium leading-relaxed">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <SectionWrapper id="services" className="py-20 bg-white content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl text-[#1a3a6b] mb-4 font-bold"
            >
              บริการของเรา
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              ให้บริการออกแบบและติดตั้งระบบไฟฟ้า และ ระบบไฟฟ้าห้องเย็นสำหรับโรงงานอุตสาหกรรม
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="ntp-service-card bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#1a3a6b] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#dc2626] transition-colors">
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl text-[#1a3a6b] mb-4 font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Projects Preview Section */}
      <SectionWrapper id="projects" className="py-20 bg-[#f6f8fa] content-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl text-[#1a3a6b] mb-4 font-bold"
            >
              ผลงานที่ผ่านมาของเรา
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-4xl mx-auto"
            >
              ตัวอย่างโครงการวิศวกรรมไฟฟ้าที่เราได้ดำเนินงานให้กับลูกค้าภาคอุตสาหกรรมและธุรกิจต่าง ๆ
            </motion.p>
          </div>

          <ProjectGalleryGrid
            projects={featuredProjects}
            className="mb-16"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-md transition-colors group text-lg font-medium"
            >
              ดูโครงการทั้งหมด
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Professional Standards Section */}
<SectionWrapper
  id="standards"
  className="py-20 bg-white content-auto"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header */}
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl text-[#1a3a6b] mb-4 font-bold"
      >
        การรับรองและมาตรฐานการดำเนินงาน
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl text-gray-600 max-w-3xl mx-auto"
      >
        ดำเนินงานตามมาตรฐานวิศวกรรมและความปลอดภัย เพื่อให้มั่นใจในคุณภาพและความน่าเชื่อถือในทุกโครงการ
      </motion.p>
    </div>

    {/* Items */}
    <div className="max-w-4xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-6">
        
        {[
          "ดำเนินงานโดยวิศวกรที่ได้รับใบอนุญาต (กว.)",
          "จดทะเบียนบริษัทถูกต้องตามกฎหมาย",
          "ปฏิบัติงานตามมาตรฐานวิศวกรรมและความปลอดภัย",
          "มีประสบการณ์งานระบบไฟฟ้าในภาคอุตสาหกรรม",
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="flex items-center gap-4 bg-gray-50 p-6 rounded-lg"
          >
            <CheckCircle
              className="text-[#dc2626] flex-shrink-0"
              size={24}
            />
            <p className="text-gray-700 text-base">
              {item}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  </div>
</SectionWrapper>

{/* Our Customers Section */}
<OurCustomers />
    </div>
  );
}
