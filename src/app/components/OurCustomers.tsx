import { motion } from 'motion/react';
import { SectionWrapper } from './SectionWrapper';
import { ImageWithFallback } from './figma/ImageWithFallback';

import cpLogo from "../../assets/88bf3f31bd74a9fd9d845b4646521b19ff16b93f.png";
import mayekawaLogo from "../../assets/8af1f773480944f7a152dc7efbcd619a82544e28.png";
import FandN from "../../assets/F&N.png";
import Thai_Union from "../../assets/thai_union.png";
import cpram from "../../assets/cpram.png";
import cpf from "../../assets/cpf.jpg";
import betagro from "../../assets/betagro.jpg";
import nestle from "../../assets/nestle.jpg";
import cuisine from "../../assets/cuisine.png";



export function OurCustomers() {
  const mainLogos = [
    { name: 'CP Group', src: cpLogo },
    { name: 'Mayekawa', src: mayekawaLogo },
    { name: 'F&N', src: FandN },
    { name: 'Thai Union', src: Thai_Union },
    { name: 'CPRAM', src: cpram },
    { name: 'CPF', src: cpf },
    { name: 'Betagro', src: betagro },
    { name: 'Nestle', src: nestle },
    { name: 'Cuisine', src: cuisine },
  ];

  return (
    <SectionWrapper id="customers" className="py-24 bg-white border-t border-gray-100 content-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl text-[#1a3a6b] mb-4 font-bold"
          >
            ลูกค้าของเรา (Our Customers)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            ความไว้วางใจจากบริษัทชั้นนำระดับประเทศ เป็นเครื่องยืนยันถึงคุณภาพ 
            และความเชี่ยวชาญในงานวิศวกรรมไฟฟ้าที่เราส่งมอบให้ลูกค้าเสมอมา
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-16">
          {/* Main Customers (CP & Mayekawa) - Styled like the second image */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center w-full max-w-2xl mx-auto">
  {mainLogos.map((logo, index) => (
    <motion.div
      key={index}
      whileHover={{
        y: -6,
        boxShadow: "0 18px 35px -12px rgba(0, 0, 0, 0.12)",
      }}
      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center h-48 w-full max-w-[420px] transition-all duration-300 cursor-default"
    >
      <ImageWithFallback
        src={logo.src}
        alt={logo.name}
        className="h-35 w-auto object-contain"
        loading="eager"
      />
    </motion.div>
  ))}
</div>
        </div>
      </div>
    </SectionWrapper>
  );
}

