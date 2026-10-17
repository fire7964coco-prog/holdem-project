import type { HandChartDict } from "@/components/hand-chart/dict";

// EN meanings and numbers; Polish structure; public-source consensus ranges.
export const HAND_CHART_DICT_TH: HandChartDict = {
  numberLocale: "th-TH",
  seo: {
    title: "ตาราง Preflop — poker chart",
    description: "Poker chart แสดงไพ่เริ่มต้น Texas Hold'em ทั้ง 169 แบบตามตำแหน่ง UTG ถึง SB เลือกตำแหน่งเพื่อไฮไลต์เรนจ์เปิดในตาราง พร้อมสัดส่วนชนิดมือและคอมโบ",
    path: "/th/hand-chart",
    keywords: ["ตาราง Preflop", "poker chart", "poker hand chart", "range poker", "preflop chart", "ไพ่เริ่มต้น"],
  },
  hero: {
    badge: "♠ ตารางไพ่เริ่มต้นแบบโต้ตอบ",
    h1: "ตาราง Preflop · poker chart",
    lead: "ไพ่เริ่มต้นทั้ง 169 แบบแบ่งสีตามตำแหน่ง (UTG → SB) แตะตำแหน่งเพื่อไฮไลต์เฉพาะมือที่เปิดได้จากที่นั่งนั้น",
    handsUnit: "แบบ", positionsUnit: "ตำแหน่ง", tapHint: "แตะหรือวางเมาส์เพื่อดูทันที",
  },
  filter: {
    caption: "เลือกตำแหน่ง → ไฮไลต์มือที่เล่นได้",
    basisNote: ["เปอร์เซ็นต์ของแต่ละตำแหน่งคือ ", { b: "สัดส่วนจากมือ 169 ชนิด" }, " (เปอร์เซ็นต์คอมโบอยู่ในตารางด้านล่างด้วย)"],
    showAll: "แสดงทั้งหมด", selected: "เรนจ์เปิด {pos} · {count} / 169 ({pct}%)", handsCount: "{n} แบบ",
  },
  positions: ["Under the gun (UTG)", "Hijack (HJ)", "Cutoff (CO)", "Button (BTN)", "สมอลบลายด์ (SB)"],
  typePct: "~{n}",
  grid: {
    swipe: "← ปัดเพื่อดูตารางทั้งหมด →", pocketPair: "Pocket pair", suited: "Suited", offsuit: "Offsuit", openFrom: "เปิดจาก {pos} และตำแหน่งถัดไป",
    legendNote: "สามเหลี่ยมขวาบน = suited (s) · แนวทแยง = pocket pair · สามเหลี่ยมซ้ายล่าง = offsuit (o)",
  },
  legend: { heading: "คำอธิบายสี", seatLine: "{pct} จาก 169", fold: "การหมอบ", foldSub: "ทุกตำแหน่ง" },
  table: {
    heading: "เรนจ์เปิดตามตำแหน่ง", swipe: "← ปัดเพื่อดูเรนจ์และตัวอย่างมือ", position: "ตำแหน่ง", hands: "มือ", handsSub: "(จาก 169)", range: "เรนจ์", rangeSub: "ชนิด / คอมโบ", examples: "ตัวอย่างมือ", comboCell: "/ คอมโบ {pct}",
    notes: [
      ["* ", { b: "มีวิธีนับสองแบบ" }, " “12% จาก 169” นับ ", { b: "ชนิด" }, " ของมือ (กี่ชนิดจาก 169 ชนิด) ส่วน ", { b: "คอมโบ" }, " นับว่ามีกี่ชุดจาก 1,326 ชุดอยู่ในเรนจ์ เรนจ์เดียวกันจึงให้เปอร์เซ็นต์ต่างกัน AA เป็นหนึ่งชนิดแต่มี 6 คอมโบ ส่วน AKo เป็นหนึ่งชนิดแต่มี 12 คอมโบ Solver และบทความกลยุทธ์มักนับคอมโบ"],
      ["* ค่าประมาณเรนจ์เปิดมาตรฐานที่อิงข้อมูลสอดคล้องกันจากแหล่งสาธารณะ ผลของ solver ขึ้นกับขนาดเปิด stack และเรนจ์คู่ต่อสู้ เช่น ในตัวอย่างบลายด์เจอบลายด์ของ GTO solver HoldemMaster นั้น SB เปิดถึง 3bb ด้วย 46.6% (92 ชนิด, 618 คอมโบ) ที่โต๊ะจริงให้ปรับเรนจ์ตามแนวโน้มคู่ต่อสู้ด้วย"],
    ],
  },
  why: {
    heading: "ทำไมตำแหน่งจึงกำหนดการเลือกมือ",
    items: [
      { title: "ตำแหน่ง = ข้อมูล", desc: "Button (BTN) ลงมือเป็นคนสุดท้ายเสมอหลังฟลอป การเห็นการเดิมพันและการเช็คของทุกคนก่อนทำให้มือเดียวกันสร้างกำไรได้มากขึ้นมาก" },
      { title: "มีผู้เล่น 8 คนหลัง UTG", desc: "เมื่อ open raise จาก UTG ที่โต๊ะ 9 คน คุณไม่รู้ว่าผู้เล่น 8 คนด้านหลังจะตอบสนองอย่างไร โอกาสเจอ re-raise สูง มือเก็งโอกาสอย่าง suited connectors จึงใช้มูลค่าได้ไม่เต็มที่ ให้ปรับไทท์เหลือมือ Premium" },
      { title: "มูลค่าของ suited", desc: "มือ suited มี equity เหนือมือ offsuit แบบเดียวกันประมาณ 3–5% จึงเปิด A8s จาก HJ ได้ แต่ A8o ต้องรอ BTN" },
      { title: "โจทย์ยากของ SB", desc: "สมอลบลายด์ลงมือก่อนเสมอหลังฟลอป แม้มีเรนจ์กว้างกว่า BTN ก็ใช้ equity ได้จริงน้อยกว่า มือแข็งแกร่งปานกลางจึงทำกำไรได้น้อยลง" },
    ],
  },
  faqHeading: "คำถามเกี่ยวกับ poker hand chart",
  related: {
    heading: "ขั้นต่อไป: บทความและเครื่องมือ",
    items: [
      { href: "/th/blog/texas-holdem-rules-for-beginners", tag: "เริ่มต้น", title: "เริ่มเล่น Texas Hold'em", desc: "จากบลายด์ถึงโชว์ดาวน์ทีละขั้น" },
      { href: "/th/blog/holdem-betting-actions", tag: "แอ็กชัน", title: "เช็ค คอล เพิ่มเดิมพัน และหมอบ", desc: "แอ็กชันการเดิมพันที่โต๊ะ" },
      { href: "/th/blog/holdem-game-order", tag: "ลำดับการเล่น", title: "ใครลงมือก่อน?", desc: "ลำดับแอ็กชัน preflop และหลังฟลอป" },
      { href: "/th/blog/holdem-blind-meaning", tag: "บลายด์", title: "สมอลบลายด์และบิ๊กบลายด์", desc: "SB และ BB ทำหน้าที่อะไร" },
      { href: "/th/calculator", tag: "เครื่องมือ", title: "เครื่องคำนวณ Equity", desc: "Equity และ pot odds สำหรับมือของคุณ" },
    ],
  },
};
