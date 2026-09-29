import { m as motion } from 'motion/react';
import { SectionWrapper } from './SectionWrapper';
import { ImageWithFallback } from './figma/ImageWithFallback';




export function OurCustomers() {
  const mainLogos = [
    { name: 'CP Group', src: '/images/customer-cp.webp', width: 225, height: 225 },
    { name: 'Mayekawa', src: '/images/customer-mayekawa.webp', width: 360, height: 113 },
    { name: 'F&N', src: '/images/customer-fn.webp', width: 235, height: 214 },
    { name: 'Thai Union', src: '/images/customer-thai-union.webp', width: 243, height: 207 },
    { name: 'CPRAM', src: '/images/customer-cpram.webp', width: 225, height: 225 },
    { name: 'CPF', src: '/images/customer-cpf.webp', width: 360, height: 203 },
    { name: 'Betagro', src: '/images/customer-betagro.webp', width: 225, height: 225 },
    { name: 'Nestle', src: '/images/customer-nestle.webp', width: 323, height: 156 },
    { name: 'Cuisine', src: '/images/customer-cuisine.webp', width: 200, height: 200 },
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
      }}
      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center justify-center h-48 w-full max-w-[420px] cursor-default"
    >
      <ImageWithFallback
        src={logo.src}
        alt={logo.name}
        className="h-35 w-auto object-contain"
        width={logo.width}
        height={logo.height}
        loading="lazy"
      />
    </motion.div>
  ))}
</div>
        </div>
      </div>
    </SectionWrapper>
  );
}

