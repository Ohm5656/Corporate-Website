import { motion } from "motion/react";
import {
  Target,
  Eye,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
  Building2,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import myImage from "../../assets/picture_2.jpg";

export function AboutPage() {
  const navigate = useNavigate();

const values = [
  {
    icon: Target,
    title: "พันธกิจของเรา",
    description: (
      <>
        มุ่งส่งมอบงานระบบไฟฟ้าและงานวิศวกรรมที่มีคุณภาพ 
        <br/>ได้มาตรฐาน และ
        ตอบโจทย์การใช้งานจริงของลูกค้า 
        พร้อมยึดมั่นในความปลอดภัยและความรับผิดชอบในทุกขั้นตอน
      </>
    ),
  },
  {
    icon: Eye,
    title: "วิสัยทัศน์ของเรา",
    description: (
      <>
        มุ่งพัฒนาองค์กรอย่างต่อเนื่อง เพื่อยกระดับคุณภาพงานวิศวกรรมไฟฟ้า 
        ให้ได้มาตรฐาน และตอบโจทย์การใช้งานจริงของลูกค้า 
        พร้อมสร้างความไว้วางใจผ่านการดำเนินงานที่มีประสิทธิภาพ
      </>
    ),
  },
  {
    icon: Award,
    title: "มาตรฐานคุณภาพ",
    description: (
      <>
        เรามุ่งเน้นการส่งมอบงานที่ถูกต้อง ตรงเวลา และได้มาตรฐาน <br />
        เพื่อสร้างผลลัพธ์ที่มั่นคง <br />
        และความพึงพอใจสูงสุดให้แก่ลูกค้า
      </>
    ),
  },
  {
    icon: Users,
    title: "ทีมงานของเรา",
    description: (
      <>
        ทีมงานของเราประกอบด้วยวิศวกร ช่างเทคนิค และ<br />ผู้เชี่ยวชาญ 
        ที่มีประสบการณ์ พร้อมดูแลโครงการอย่างเป็นระบบ 
        ตั้งแต่การวางแผนจนถึงการส่งมอบ
      </>
    ),
  },
];

  const strengths = [
    "เชี่ยวชาญด้านงานระบบไฟฟ้าโรงงานและงานระบบไฟฟ้าห้องเย็น",
    "ดำเนินงานด้วยมาตรฐานความปลอดภัยและคุณภาพในทุกโครงการ",
    "พร้อมดูแลงานตั้งแต่ออกแบบ ติดตั้ง ทดสอบ และส่งมอบ",
    "ได้รับความไว้วางใจจากลูกค้าในภาคอุตสาหกรรมและพาณิชยกรรม",
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1a3a6b] py-24 md:py-28">
        <div className="absolute inset-0 opacity-100">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a6b]/95 to-[#1a3a6b]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-[#ff4d4f] text-sm md:text-base font-semibold tracking-wide mb-4">
              ABOUT US
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
              
              บริษัท เอ็นทีพี อิเล็คทริค
              <br className="hidden sm:block" />
              แอนด์ เอ็นจิเนียริ่ง จำกัด
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-8 max-w-3xl mx-auto">
              ผู้ให้บริการด้านงานระบบไฟฟ้าโรงงานและงานระบบไฟฟ้าห้องเย็น
              ที่มุ่งมั่นส่งมอบคุณภาพ 
              <br className="hidden sm:block" />
              ความปลอดภัย
              และความไว้วางใจในทุกโครงการ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 md:py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="mb-3">
                <p className="text-[#dc2626] text-sm md:text-base font-semibold tracking-wide">
                  ประวัติความเป็นมา
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1a3a6b] mb-6 font-bold leading-tight flex items-center gap-4">
                <span className="hidden sm:block w-14 h-1 bg-[#dc2626] rounded-full" />
                เรื่องราวของเรา
              </h2>

              <div className="space-y-6 text-gray-700 text-base md:text-lg leading-8 md:leading-9">
                <p>
                  บริษัท เอ็นทีพี อิเล็คทริค แอนด์ เอ็นจิเนียริ่ง จำกัด
                  ดำเนินธุรกิจด้านการออกแบบและติดตั้งงานระบบไฟฟ้าโรงงาน
                  และงานระบบไฟฟ้าห้องเย็น
                  โดยเริ่มต้นจากการจดทะเบียนการค้าเมื่อวันที่ 7 กรกฎาคม พ.ศ. 2555
                  ในนาม ห้างหุ้นส่วนจำกัด เอ็นทีพี อิเล็คทริคแอนด์เอ็นจิเนียริ่ง
                  ก่อนที่จะพัฒนาและแปรสภาพกิจการเป็นบริษัทจำกัดในชื่อ
                  บริษัท เอ็นทีพี อิเล็คทริค แอนด์ เอ็นจิเนียริ่ง จำกัด
                  เมื่อวันที่ 29 ธันวาคม พ.ศ. 2559
                </p>

                <p>
                  จากจุดเริ่มต้นของการให้บริการด้านงานระบบไฟฟ้า
                  บริษัทได้เติบโตอย่างต่อเนื่องจากประสบการณ์ การสั่งสมความเชี่ยวชาญ
                  และความตั้งใจในการส่งมอบงานที่มีคุณภาพ
                  เราให้ความสำคัญกับรายละเอียดในทุกขั้นตอนของการดำเนินงาน
                  ตั้งแต่การวางแผน ออกแบบ ติดตั้ง ทดสอบระบบ
                  ไปจนถึงการส่งมอบงานที่ได้มาตรฐานและพร้อมใช้งานจริง
                </p>

                <p>
                  ตลอดระยะเวลาการดำเนินงานที่ผ่านมา
                  บริษัทได้รับความไว้วางใจจากลูกค้าในภาคอุตสาหกรรมและพาณิชยกรรมอย่างต่อเนื่อง
                  ด้วยแนวทางการทำงานที่ยึดมั่นในคุณภาพ ความปลอดภัย
                  และความรับผิดชอบต่อโครงการ
                  เราจึงพร้อมพัฒนาและต่อยอดศักยภาพขององค์กรอยู่เสมอ
                  เพื่อเป็นพันธมิตรที่ลูกค้าไว้วางใจได้ในระยะยาว
                </p>
              </div>
            </motion.div>

            <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={myImage}
                alt="NTP Electric and Engineering"
                className="w-full h-full object-cover"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.55)_100%)]" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white text-lg md:text-2xl text-center font-bold italic leading-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]">
                  “ความพึงพอใจของลูกค้า คือหัวใจหลักของงานเรา”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#dc2626] text-sm md:text-base font-semibold tracking-wide mb-3">
                ความเชี่ยวชาญของเรา
              </p>
              <h2 className="text-3xl md:text-4xl text-[#1a3a6b] font-bold mb-6 leading-tight">
                ดำเนินงานด้วยประสบการณ์
                <br />
                และมาตรฐานที่เชื่อถือได้
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-8 md:leading-9">
                ด้วยประสบการณ์ในการทำงานด้านวิศวกรรมไฟฟ้ามากกว่า 10 ปี
                เรามุ่งเน้นการพัฒนางานอย่างต่อเนื่อง
                เพื่อให้ทุกโครงการตอบโจทย์การใช้งานจริงของลูกค้า
                ทั้งในด้านประสิทธิภาพ ความปลอดภัย
                และความคุ้มค่าในระยะยาว
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#f8f8f8] border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {strengths.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100"
                  >
                    <CheckCircle
                      className="text-[#dc2626] flex-shrink-0 mt-1"
                      size={20}
                    />
                    <p className="text-gray-700 leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-[#dc2626] text-sm md:text-base font-semibold tracking-wide mb-3">
              ค่านิยมองค์กร
            </p>
            <h2 className="text-3xl md:text-5xl text-[#1a3a6b] font-bold mb-4">
              หลักการที่เราให้ความสำคัญ
            </h2>
            <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-8">
              ทุกโครงการของเราขับเคลื่อนด้วยแนวคิดที่เน้นคุณภาพ ความปลอดภัย
              ความรับผิดชอบ และความไว้วางใจจากลูกค้า
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#1a3a6b] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#dc2626] transition-colors">
                    <Icon className="text-white" size={30} />
                  </div>

                  <h3 className="text-2xl text-[#1a3a6b] font-bold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-8">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Customers Trust Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-[#dc2626] text-sm md:text-base font-semibold tracking-wide mb-3">
              จุดเด่นของบริษัท
            </p>
            <h2 className="text-3xl md:text-5xl text-[#1a3a6b] font-bold mb-4">
              เหตุผลที่ลูกค้าไว้วางใจเรา
            </h2>
            <p className="text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-8">
              เราเชื่อว่าความสำเร็จของทุกโครงการ
              เริ่มต้นจากการทำงานที่เป็นระบบ ซื่อสัตย์ และใส่ใจในคุณภาพอย่างแท้จริง
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm"
            >
              <Building2 className="text-[#dc2626] mb-5" size={34} />
              <h3 className="text-2xl font-bold text-[#1a3a6b] mb-4">
                ประสบการณ์จริงในงานภาคสนาม
              </h3>
              <p className="text-gray-600 leading-8">
                เรามีประสบการณ์ในการดำเนินงานระบบไฟฟ้าในโครงการหลากหลายประเภท
                พร้อมเข้าใจข้อจำกัดและความต้องการเฉพาะของแต่ละหน้างาน
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm"
            >
              <Shield className="text-[#dc2626] mb-5" size={34} />
              <h3 className="text-2xl font-bold text-[#1a3a6b] mb-4">
                ให้ความสำคัญกับความปลอดภัย
              </h3>
              <p className="text-gray-600 leading-8">
                ทุกขั้นตอนของการทำงานยึดหลักความปลอดภัยและมาตรฐานวิชาชีพ
                เพื่อให้งานมีความมั่นคง ปลอดภัย และใช้งานได้อย่างมั่นใจ
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm"
            >
              <Award className="text-[#dc2626] mb-5" size={34} />
              <h3 className="text-2xl font-bold text-[#1a3a6b] mb-4">
                มุ่งเน้นคุณภาพและความเชื่อมั่น
              </h3>
              <p className="text-gray-600 leading-8">
                เราให้ความสำคัญกับผลลัพธ์ของงานในระยะยาว
                พร้อมสร้างความเชื่อมั่นให้ลูกค้าด้วยการส่งมอบงานที่มีคุณภาพในทุกครั้ง
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#dc2626]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 leading-tight">
              พร้อมเริ่มโครงการระบบไฟฟ้ากับทีมงานมืออาชีพแล้วหรือยัง
            </h2>
            <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto mb-8 leading-8">
              เรายินดีให้คำปรึกษา ออกแบบ และวางแผนงานระบบไฟฟ้า
              ให้เหมาะสมกับความต้องการของธุรกิจคุณอย่างครบวงจร
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#dc2626] px-8 py-4 rounded-md font-semibold shadow-lg transition-all"
            >
              ติดต่อเราวันนี้
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
