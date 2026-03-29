export interface Project {
  id: number;
  title: string;
  titleTh: string;
  category: string;
  categoryTh: string;
  coverImage: string;
  images: string[];
  description: string;
  descriptionTh: string;
  location?: string;
  locationTh?: string;
  year?: string;
}

const projectGallerySets = {
  project1: [
    "/projects/id1/1.jpg",
    "/projects/id1/2.jpg",
    "/projects/id1/3.jpg",
    "/projects/id1/4.jpg",
    
  ],
  project2: [
    "/projects/id2/1.jpg",
    "/projects/id2/2.jpg",
    "/projects/id2/3.jpg",
    "/projects/id2/4.jpg",
  
  ],
  project3: [
    "/projects/id3/1.jpg",
    "/projects/id3/2.jpg",
    "/projects/id3/3.jpg",
    "/projects/id3/4.jpg",
    "/projects/id3/5.jpg",
    "/projects/id3/6.jpg",
  ],
  project4: [
    "/projects/id4/1.jpg",
    "/projects/id4/2.jpg",
    "/projects/id4/3.jpg",
    "/projects/id4/4.jpg",
    "/projects/id4/5.jpg",
    "/projects/id4/6.jpg",
  ],
  project5: [
    "/projects/id5/1.jpg",
    "/projects/id5/2.jpg",
    "/projects/id5/3.jpg",
    "/projects/id5/4.jpg",
    "/projects/id5/5.jpg",
    "/projects/id5/6.jpg",
  ],
  project6: [
    "/projects/id6/1.jpg",
    "/projects/id6/2.jpg",
    "/projects/id6/3.jpg",
    "/projects/id6/4.jpg",
    "/projects/id6/5.jpg",
  ],
  project7: [
    "/projects/id7/9.jpg",
    "/projects/id7/2.jpg",
    "/projects/id7/3.jpg",
    "/projects/id7/4.jpg",
    "/projects/id7/5.jpg",
    "/projects/id7/6.jpg",
    "/projects/id7/7.jpg",
    "/projects/id7/1.jpg",
    "/projects/id7/8.jpg",
    "/projects/id7/10.jpg",
    "/projects/id7/11.jpg",
    "/projects/id7/12.jpg",

  ],
  project8: [
    "/projects/id8/1.jpg",
    "/projects/id8/2.jpg",
    "/projects/id8/3.jpg",
    "/projects/id8/4.jpg",
  ],
  project9: [
    "/projects/id9/1.jpg",
    "/projects/id9/2.jpg",
    "/projects/id9/3.jpg",
    "/projects/id9/4.jpg",
    "/projects/id9/5.jpg",
    "/projects/id9/6.jpg",
    "/projects/id9/7.jpg",
    "/projects/id9/8.jpg",
    "/projects/id9/9.jpg",
    "/projects/id9/10.jpg",
    "/projects/id9/11.jpg",
    "/projects/id9/12.jpg",
  ],
  project10: [
    "/projects/id10/1.jpg",
    "/projects/id10/2.jpg",
    "/projects/id10/3.jpg",
    "/projects/id10/4.jpg",
  ],
  project11: [
    "/projects/id11/1.jpg",
    "/projects/id11/2.jpg",
    "/projects/id11/3.jpg",
    "/projects/id11/4.jpg",
    "/projects/id11/5.jpg",
    "/projects/id11/6.jpg",
    "/projects/id11/7.jpg",
    "/projects/id11/8.jpg",
  ],
  project12: [
    "/projects/id12/1.jpg",
    "/projects/id12/2.jpg",
    "/projects/id12/3.jpg",
    "/projects/id12/4.jpg",
    "/projects/id12/5.jpg",
  ],
  project13: [
    "/projects/id13/1.jpg",
    "/projects/id13/2.jpg",
    "/projects/id13/3.jpg",
    "/projects/id13/4.jpg",
    "/projects/id13/5.jpg",
    "/projects/id13/6.jpg",
    "/projects/id13/7.jpg",
    "/projects/id13/8.jpg",
    "/projects/id13/9.jpg",
    "/projects/id13/10.jpg",
    "/projects/id13/11.jpg",
    "/projects/id13/12.jpg",
    "/projects/id13/13.jpg",
    "/projects/id13/14.jpg",
    "/projects/id13/15.jpg",
    "/projects/id13/16.jpg",
    "/projects/id13/17.jpg",
    "/projects/id13/18.jpg",
  ],
  project14: [
    "/projects/id14/1.jpg",
    "/projects/id14/2.jpg",
    "/projects/id14/3.jpg",
    "/projects/id14/4.jpg",
    "/projects/id14/5.jpg",
    "/projects/id14/6.jpg",
    "/projects/id14/7.jpg",
    "/projects/id14/8.jpg",
    "/projects/id14/9.jpg",
    "/projects/id14/10.jpg",
    "/projects/id14/11.jpg",
  ],
  project15: [
    "/projects/id15/1.jpg",
    "/projects/id15/2.jpg",
    "/projects/id15/3.jpg",
    "/projects/id15/4.jpg",
    "/projects/id15/5.jpg",
    "/projects/id15/6.jpg",
    "/projects/id15/7.jpg",
    "/projects/id15/8.jpg",
    "/projects/id15/9.jpg",
    "/projects/id15/10.jpg",
    "/projects/id15/11.jpg",
    "/projects/id15/12.jpg",
  ],
  project16: [
    "/projects/id16/1.jpg",
    "/projects/id16/2.jpg",
    "/projects/id16/3.jpg",
    "/projects/id16/4.jpg",
    "/projects/id16/5.jpg",
    "/projects/id16/6.jpg",
    "/projects/id16/7.jpg",
    "/projects/id16/8.jpg",
    "/projects/id16/9.jpg",
    "/projects/id16/10.jpg",
    "/projects/id16/11.jpg",
    "/projects/id16/12.jpg",
  ],
  project17: [
    "/projects/id17/1.jpg",
    "/projects/id17/2.jpg",
    "/projects/id17/3.jpg",
    "/projects/id17/4.jpg",
    "/projects/id17/5.jpg",
    "/projects/id17/6.jpg",
    "/projects/id17/7.jpg",
    "/projects/id17/8.jpg",
    "/projects/id17/9.jpg",
    "/projects/id17/10.jpg",
    "/projects/id17/11.jpg",
  ],
} as const;

export const projects: Project[] = [
  {
    id: 17,
    title: "Cold Storage Room at -25°C Plant 3 for Piti Foods Wang Noi",
    titleTh: "ห้องเก็บสินค้าอุณหภูมิ -25°C Plant 3 บริษัท ปิติ ฟู้ดส์ วังน้อย",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.project17[0],
    images: [...projectGallerySets.project17],
    description:
      "Electrical and refrigeration system works for -25°C cold storage room at Plant 3 of Piti Foods Wang Noi.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบเครื่องทำความเย็นสำหรับห้องเก็บสินค้าอุณหภูมิ -25°C Plant 3 ของบริษัท ปิติ ฟู้ดส์ วังน้อย",
    location: "Wang Noi, Ayutthaya, Thailand",
    locationTh: "วังน้อย พระนครศรีอยุธยา",
  },
  {
    id: 16,
    title: "Cold Storage Room at -25°C Plant 2 for Global Fish Co., Ltd.",
    titleTh: "คลังเก็บสินค้าอุณหภูมิ -25°C Plant 2 บริษัท โกลบอล ฟิส จำกัด",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.project16[0],
    images: [...projectGallerySets.project16],
    description:
      "Electrical and refrigeration system works for -25°C cold storage room at Plant 2 of Global Fish Co., Ltd.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบเครื่องทำความเย็นสำหรับคลังเก็บสินค้าอุณหภูมิ -25°C Plant 2 ของบริษัท โกลบอล ฟิส จำกัด",
    location: "Thailand",
    locationTh: "กรุงเทพมหานคร",
  },
{
  id: 15,
  title: "Refrigeration System Installation for Art of Baking Co., Ltd.",
  titleTh: "งานติดตั้งระบบเครื่องทำความเย็น บริษัท อาร์ทออฟเบคกิ้ง จำกัด",
  category: "Refrigeration System",
  categoryTh: "ระบบทำความเย็น",
  coverImage: projectGallerySets.project15[0],
  images: [...projectGallerySets.project15],
  description:
    "Installation works for refrigeration support systems and related electrical systems for Art of Baking Co., Ltd.",
  descriptionTh:
    "งานติดตั้งระบบเครื่องทำความเย็นและงานระบบไฟฟ้าที่เกี่ยวข้อง สำหรับ บริษัท อาร์ทออฟเบคกิ้ง จำกัด",
  location: "Thailand",
  locationTh: "สมุทรสาคร",
},
  {
    id: 14,
    title: "Chill Room for Itoham Betagro Lopburi",
    titleTh: "ห้อง Chill บริษัท อิโตแฮม เบทาโกร ลพบุรี",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.project14[0],
    images: [...projectGallerySets.project14],
    description:
      "Electrical and refrigeration system works for chill room at Itoham Betagro Lopburi.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบเครื่องทำความเย็นสำหรับห้อง Chill ของบริษัท อิโตแฮม เบทาโกร ลพบุรี",
    location: "Lopburi, Thailand",
    locationTh: "ลพบุรี",
  },
  {
    id: 13,
    title: "Control Panel for Tunnel Freezer and Hardening Freezer at Golden Seafood International",
    titleTh: "ตู้คอนโทรลสำหรับ Tunnel Freezer และ Hardening Freezer บริษัท โกลเด้น ซีฟู้ด อินเตอร์เนชั่นแนล",
    category: "Control Panel",
    categoryTh: "ตู้คอนโทรล",
    coverImage: projectGallerySets.project13[0],
    images: [...projectGallerySets.project13],
    description:
      "Design and installation of control panel for tunnel freezer and hardening freezer systems.",
    descriptionTh:
      "ออกแบบและติดตั้งตู้คอนโทรลสำหรับระบบ Tunnel Freezer และ Hardening Freezer",
    location: "Thailand",
    locationTh: "สมุทรสาคร",
  },
  {
    id: 12,
    title: "Airblast Freezer Room for Surapon Nichirei Thepharak",
    titleTh: "ห้อง Airblast Freezer บริษัท สุรพล นิชิเร สาขาเทพารักษ์",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.project12[0],
    images: [...projectGallerySets.project12],
    description:
      "Electrical and refrigeration system works for airblast freezer room at Surapon Nichirei Thepharak.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบเครื่องทำความเย็นสำหรับห้อง Airblast Freezer ของบริษัท สุรพล นิชิเร สาขาเทพารักษ์",
    location: "Thepharak, Samut Prakan, Thailand",
    locationTh: "เทพารักษ์ สมุทรปราการ",
  },
  {
    id: 11,
    title: "Renovation of Refrigeration Control Panel for CPF Minburi Plant 1",
    titleTh: "ปรับปรุงตู้คอนโทรลระบบเครื่องทำความเย็น โรงงาน CPF มีนบุรี 1",
    category: "Control Panel",
    categoryTh: "ตู้คอนโทรล",
    coverImage: projectGallerySets.project11[0],
    images: [...projectGallerySets.project11],
    description:
      "Renovation and upgrade of refrigeration control panel system for CPF Minburi Plant 1.",
    descriptionTh:
      "ปรับปรุงและอัปเกรดตู้คอนโทรลสำหรับระบบเครื่องทำความเย็นของโรงงาน CPF มีนบุรี 1",
    location: "Minburi, Bangkok, Thailand",
    locationTh: "มีนบุรี กรุงเทพมหานคร",
  },
  {
    id: 10,
    title: "PO4 Air Conditioning System for Chotiwat Manufacturing, Hat Yai",
    titleTh: "ระบบปรับอากาศ PO4 บริษัท โชติวัฒน์อุตสาหกรรม อำเภอหาดใหญ่ จังหวัดสงขลา",
    category: "AHU & HVAC",
    categoryTh: "AHU และปรับอากาศ",
    coverImage: projectGallerySets.project10[0],
    images: [...projectGallerySets.project10],
    description:
      "Electrical installation and control works for PO4 air conditioning system at Chotiwat Manufacturing in Hat Yai, Songkhla.",
    descriptionTh:
      "ติดตั้งระบบไฟฟ้าและระบบควบคุมสำหรับระบบปรับอากาศ PO4 ของบริษัท โชติวัฒน์อุตสาหกรรม อำเภอหาดใหญ่ จังหวัดสงขลา",
    location: "Hat Yai, Songkhla, Thailand",
    locationTh: "หาดใหญ่ สงขลา",
  },
  {
    id: 9,
    title: "Refrigeration System for Rieckermann at Siam Flour Trading Co., Ltd.",
    titleTh: "ระบบเครื่องทำความเย็น Rieckermann บริษัท สยาม ค้าแป้ง จำกัด",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.project9[0],
    images: [...projectGallerySets.project9],
    description:
      "Electrical and control works for industrial refrigeration system by Rieckermann at Siam Flour Trading Co., Ltd.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบควบคุมสำหรับระบบเครื่องทำความเย็นของ Rieckermann ณ บริษัท สยาม ค้าแป้ง จำกัด",
    location: "Thailand",
    locationTh: "กรุงเทพมหานคร",
  },
  {
    id: 8,
    title: "Screw Compressor Improvement for CPF Saraburi",
    titleTh: "งานปรับปรุงระบบ Screw Compressor โรงงาน CPF สระบุรี",
    category: "Maintenance & Improvement",
    categoryTh: "ปรับปรุงและบำรุงรักษา",
    coverImage: projectGallerySets.project8[0],
    images: [...projectGallerySets.project8],
    description:
      "Improvement and upgrade of electrical and control systems for screw compressor equipment at CPF Saraburi.",
    descriptionTh:
      "ปรับปรุงและอัปเกรดระบบไฟฟ้าและระบบควบคุมของเครื่อง Screw Compressor สำหรับโรงงาน CPF สระบุรี",
    location: "Saraburi, Thailand",
    locationTh: "สระบุรี",
  },
  {
    id: 7,
    title: "AHU System for CPF Minburi Plant 1",
    titleTh: "ระบบ AHU โรงงาน CPF มีนบุรี 1",
    category: "AHU & HVAC",
    categoryTh: "AHU และปรับอากาศ",
    coverImage: projectGallerySets.project7[0],
    images: [...projectGallerySets.project7],
    description:
      "Electrical installation and control system works for AHU system at CPF Minburi Plant 1.",
    descriptionTh:
      "ติดตั้งระบบไฟฟ้าและระบบควบคุมสำหรับระบบ AHU ของโรงงาน CPF มีนบุรี 1",
    location: "Minburi, Bangkok, Thailand",
    locationTh: "มีนบุรี กรุงเทพมหานคร",
  },
  {
    id: 6,
    title: "Chill Room and Air Conditioning System for Laemthong Protein Foods Omnoi",
    titleTh: "ห้อง Chill และระบบปรับอากาศ บริษัท แหลมทองโปรตีนฟู้ดส์ สาขาอ้อมน้อย",
    category: "AHU & HVAC",
    categoryTh: "AHU และปรับอากาศ",
    coverImage: projectGallerySets.project6[0],
    images: [...projectGallerySets.project6],
    description:
      "Electrical and control works for chill room and air conditioning systems at Laemthong Protein Foods Omnoi.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบควบคุมสำหรับห้อง Chill และระบบปรับอากาศของบริษัท แหลมทองโปรตีนฟู้ดส์ สาขาอ้อมน้อย",
    location: "Omnoi, Samut Sakhon, Thailand",
    locationTh: "อ้อมน้อย สมุทรสาคร",
  },
  {
    id: 5,
    title: "Crush Freezer Refrigeration System for Laemthong Poultry Korat",
    titleTh: "ระบบเครื่องทำความเย็น Crush Freezer บริษัท แหลมทองโพลทรี สาขาโคราช",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.project5[0],
    images: [...projectGallerySets.project5],
    description:
      "Installation of refrigeration system for crush freezer application at Laemthong Poultry Korat.",
    descriptionTh:
      "ติดตั้งระบบเครื่องทำความเย็นสำหรับงาน Crush Freezer ของบริษัท แหลมทองโพลทรี สาขาโคราช",
    location: "Nakhon Ratchasima, Thailand",
    locationTh: "นครราชสีมา",
  },
  {
    id: 4,
    title: "Chill Room and AHU System for CPRAM Khon Kaen Plant",
    titleTh: "ระบบห้อง Chill และ AHU โรงงานซีพีแรม ขอนแก่น",
    category: "AHU & HVAC",
    categoryTh: "AHU และปรับอากาศ",
    coverImage: projectGallerySets.project4[0],
    images: [...projectGallerySets.project4],
    description:
      "Electrical installation and control works for chill room and AHU systems at CPRAM Khon Kaen plant.",
    descriptionTh:
      "ติดตั้งระบบไฟฟ้าและระบบควบคุมสำหรับห้อง Chill และระบบ AHU ของโรงงานซีพีแรม ขอนแก่น",
    location: "Khon Kaen, Thailand",
    locationTh: "ขอนแก่น",
  },
  {
    id: 3,
    title: "Refrigeration System for Art of Baking Co., Ltd.",
    titleTh: "ระบบเครื่องทำความเย็น บริษัท อาร์ทออฟเบคกิ้ง จำกัด",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.project3[0],
    images: [...projectGallerySets.project3],
    description:
      "Installation of refrigeration electrical and control systems for food manufacturing operations.",
    descriptionTh:
      "ติดตั้งระบบไฟฟ้าและระบบควบคุมสำหรับระบบเครื่องทำความเย็นในกระบวนการผลิตอาหาร",
    location: "Thailand",
    locationTh: "สมุทรสาคร",
  },
  {
    id: 2,
    title: "Refrigeration System for Cuisine Solutions Asia",
    titleTh: "ระบบเครื่องทำความเย็น บริษัท ควิซีน โซลูชั่น เอเชีย",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.project2[0],
    images: [...projectGallerySets.project2],
    description:
      "Electrical and control system works for industrial refrigeration system at Cuisine Solutions Asia.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบควบคุมสำหรับระบบเครื่องทำความเย็นอุตสาหกรรมของบริษัท ควิซีน โซลูชั่น เอเชีย",
    location: "Thailand",
    locationTh: "กรุงเทพมหานคร",
  },
  {
    id: 1,
    title: "Refrigeration System for CPRAM Surat Thani Plant",
    titleTh: "ระบบเครื่องทำความเย็น โรงงานซีพีแรม สาขาสุราษฎร์ธานี",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.project1[0],
    images: [...projectGallerySets.project1],
    description:
      "Design and installation of industrial refrigeration system for CPRAM Surat Thani plant.",
    descriptionTh:
      "ออกแบบและติดตั้งระบบเครื่องทำความเย็นสำหรับโรงงานซีพีแรม สาขาสุราษฎร์ธานี",
    location: "Surat Thani, Thailand",
    locationTh: "สุราษฎร์ธานี",
  },
];

export const projectCategories = [
  "All",
  "Refrigeration System",
  "AHU & HVAC",
  "Control Panel",
  "Maintenance & Improvement",
];

export const projectCategoriesTh = [
  "ทั้งหมด",
  "ระบบทำความเย็น",
  "AHU และปรับอากาศ",
  "ตู้คอนโทรล",
  "ปรับปรุงและบำรุงรักษา",
];