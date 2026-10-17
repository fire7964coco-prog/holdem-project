"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

// Polish structure; meaning from EN, labels from docs/translation-terms-th.md.
const n = (x: number) => x.toLocaleString("th-TH", { numberingSystem: "latn", useGrouping: true });

const TH_NAMES: HandNames = {
  categories: ["ไพ่สูง", "คู่", "สองคู่", "ตอง", "สเตรท", "ฟลัช", "ฟูลเฮาส์", "โฟร์การ์ด", "สเตรทฟลัช"],
  drawingDead: "Drawing dead",
  flushDraw: "ฟลัชดรอว์",
  straightDraw: "Straight draw",
};

const TH_UI: QuizUI = {
  names: TH_NAMES,
  streets: ["Preflop", "ฟลอป", "เทิร์น", "ริเวอร์"],
  hero: "คุณ",
  folded: "การหมอบ",
  raise: "การเพิ่มเดิมพัน",
  call: "การคอล",
  bet: "การเดิมพัน",
  check: "การเช็ค",
  allIn: "ออลอิน",
  tableNote: "โต๊ะ 6-max หรือ 9 คน · เลือกจำนวนผู้เล่นที่เห็นฟลอป (2–6)",
  playersBtn: (k) => `${k} คน`,
  playersLabel: "ผู้เล่น",
  tableBtn: (k) => `${k}-max`,
  styleLabel: "สไตล์คู่ต่อสู้",
  styleHint: "สไตล์คู่ต่อสู้เปลี่ยนเฉพาะเงื่อนไขแอ็กชันตั้งแต่ฟลอปเป็นต้นไป เรนจ์ preflop ยังคงเดิม",
  styleNames: { standard: "Standard", tight: "ไทท์", loose: "Loose", aggressive: "ดุดัน" },
  loading: "กำลังสับไพ่และคำนวณ…",

  myEquity: "Equity ของคุณ",
  vsOpponents: (k) => k === 0 ? "ไม่เหลือคู่ต่อสู้" : `เทียบกับคู่ต่อสู้ ${k} คน`,
  basisSeat: "เทียบกับเรนจ์ตามตำแหน่ง",
  basisRange: "เทียบกับมือที่สอดคล้องกับแอ็กชัน",
  roleOpen: "Open",
  roleDefend: "Defend",
  winShort: "ชนะ",
  tieShort: "เสมอ",
  loseShort: "แพ้",
  revealedLabel: "👀 เทียบกับไพ่จริงที่เปิดให้เห็น",
  revealedNote: (gap) =>
    `ค่าด้านบนคำนวณโดยถือว่าคุณไม่เห็นไพ่คู่ต่อสู้ จึงต่างกัน ${gap} percentage points เมื่อตัดสินใจที่โต๊ะ คุณต้องใช้ค่าด้านบน`,

  potOddsTitle: "Pot odds — equity ที่ต้องการเพื่อคอลให้ถึงจุด break-even",
  potLabel: "พอต",
  potBeforeLabel: "พอต (ก่อนเดิมพัน)",
  toCallLabel: "Amount to call",
  requiredLabel: "Equity ที่ต้องการ",
  noBet: "ไม่มีใครเดิมพัน คุณจึงเห็นไพ่ใบถัดไปได้โดยไม่ต้องจ่ายเพิ่ม",
  noBetAllIn: (river) => river
    ? "ผู้เล่นที่เหลือออลอินแล้วทุกคน จึงไม่มีชิปเหลือให้เดิมพัน มือนี้เข้าสู่โชว์ดาวน์ทันที"
    : "ผู้เล่นที่เหลือออลอินแล้วทุกคน จึงไม่มีชิปเหลือให้เดิมพัน แจกไพ่ที่เหลือแล้วเข้าสู่โชว์ดาวน์",
  verdictCall: "คอล",
  verdictFold: "หมอบ",
  impliedNote: "แต่ถ้าคุณชนะเงินเพิ่มได้เมื่อดรอว์ติด (implied odds) การคอลก็อาจยังถูกต้อง",

  revealBtn: (next) => `แจก${next} →`,
  newHandBtn: "New hand 🔄",
  showCards: "👀 Show cards",
  hideCards: "🙈 Hide cards",

  wonByFold: (pot) => `ทุกคนหมอบ คุณรับพอต ${n(pot)}`,
  splitLabel: (names) => `แบ่งเงินกองกลาง — เสมอ: ${names.join(" · ")}`,
  winLabel: (name, cat) => `${name} ชนะ · ${cat}`,
  winLabelHero: (cat) => `คุณชนะ · ${cat}`,

  reviewTitle: "📋 Review — คุณควรหมอบตอนไหน?",
  reviewCols: ["Street", "Equity ของคุณ", "ที่ต้องการ", "คำตัดสิน"],
  reviewNoMistake: "✅ การคอลถูกต้องตลอดจนจบมือ",
  reviewMistake: (street) => `⚠️ เมื่อถึง ${street} การหมอบก็เป็นทางเลือกที่ถูกต้องแล้ว นั่นคือจังหวะที่คุณควรออกจากมือ`,
  reviewInvested: (invested, pot) => `ชิปที่คุณลงไป: ${n(invested)} · พอตสุดท้าย: ${n(pot)}`,

  formulaTitle: "📐 ค่านี้มาจากไหน",
  outsLabel: (k) => `ไพ่ ${k} ใบที่ทำให้มือคุณสมบูรณ์หรือดีขึ้น`,
  outsBreak: (o, both) => [
    o.flush > 0 ? `${o.flush} ใบทำให้เป็นฟลัช` : "",
    o.straight > 0 ? `${o.straight} ใบทำให้เป็นสเตรท` : "",
    o.set > 0 ? `${o.set} ใบทำให้เป็น Set หรือ Trips` : "",
    o.twoPair > 0 ? `${o.twoPair} ใบทำให้เป็นสองคู่` : "",
    o.over > 0 ? `${o.over} ใบทำให้ Overcard จับคู่` : "",
    both > 0 ? `${both} ใบอยู่ในสองกลุ่ม (นับเพียงครั้งเดียว)` : "",
  ].filter(Boolean).join(" · "),
  hitLabel: "โอกาสได้ไพ่หนึ่งในกลุ่มนี้ (การคำนวณที่โต๊ะ)",
  winLabel2: "Equity ของคุณในพอต (ค่าจำลอง · เมื่อเสมอ นับตามส่วนแบ่งพอตของคุณ)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat: "สองค่านี้วัดคนละอย่าง ค่าบนคือโอกาสได้ไพ่ที่ต้องการ ค่าล่างคือส่วนแบ่งพอตจากการชนะ (เมื่อเสมอ นับตามส่วนแบ่งของคุณ) คุณอาจได้ไพ่ที่ต้องการแต่ยังแพ้หากคู่ต่อสู้พัฒนามือได้ดีกว่า หรือไม่ได้ไพ่ที่ต้องการแต่ยังชนะ คำตัดสินใช้ค่าล่าง",
  noDrawNote: (basis, k) => basis === "seat"
    ? `ตอนนี้ยังเป็น preflop จึงยังใช้สูตรลัด “outs × 2/4” ไม่ได้ Equity ด้านบนมาจากการจำลอง ${k} ครั้ง เทียบกับมือที่คู่ต่อสู้แต่ละคนน่าจะเข้าพอตจากตำแหน่งของตน`
    : `คุณไม่มี outs ที่เครื่องมือนี้นับ ไม่มีไพ่ใบใดทำให้เป็นฟลัชหรือสเตรท หรือยกระดับมือเป็น Set สองคู่ หรือคู่จาก Overcard จึงใช้สูตรลัด “outs × 2/4” ไม่ได้ Equity ด้านบนมาจากการจำลอง ${k} ครั้ง เทียบกับทุกมือที่สอดคล้องกับแอ็กชันที่เห็น`,
  foldWinNote: "คู่ต่อสู้ทุกคนหมอบ พอตจึงเป็นของคุณ ค่า 100% ด้านบนเป็นผลของมือนี้ ไม่ใช่ค่าจำลอง",
  riverNote: "นี่คือริเวอร์ ไม่มีไพ่เหลือให้แจก จึงใช้สูตรลัด “outs × 2/4” ไม่ได้ Equity ด้านบนเปรียบเทียบมือสุดท้ายของคุณกับทุกมือที่สอดคล้องกับแอ็กชันที่เห็น",
  chartTitle: "📈 Equity ในแต่ละ street — เปิดไพ่ทุกคน",
  resultTabs: ["📋 Review", "📈 Graph", "🃏 อัตราต่อรอง"],
  solverTitle: (info) => info.kind === "spot" ? "ดู Spot นี้ใน GTO Solver" : info.kind === "notReady" ? "ดู Spot ใกล้เคียงใน GTO Solver" : "ดู Spot แบบ Heads-up ใน GTO Solver",
  solverOpen: "เปิด Flop study ใน Solver (ภาษาอังกฤษ)",
  solverNote: (info) => {
    const gto = "แสดงกลยุทธ์บนฟลอปเมื่อผู้เล่นทั้งสองเล่น GTO (ผลที่คำนวณไว้ล่วงหน้า · 6-max 100bb · เฉพาะฟลอป) เรนจ์ ขนาดเดิมพัน และเงื่อนไขแอ็กชันของคู่ต่อสู้จึงต่างจากเครื่องมือนี้";
    switch (info.kind) {
      case "spot": return info.flop
        ? `${info.opener} open · ${info.caller} คอล (single-raised pot ใน Solver) · ฟลอป ${info.flop.map((c) => c.rank + c.suit).join("")} — เปิดตำแหน่งและฟลอปเดียวกันใน Flop study ของ Solver ${gto}`
        : `${info.opener} open · ${info.caller} คอล — มือนี้จบก่อนฟลอป จึงเปิดเฉพาะคู่ตำแหน่ง เลือกไพ่ฟลอปสามใบใน Solver ${gto}`;
      case "notReady": return `${info.opener} open · ${info.caller} คอล ยังไม่มีผลที่คำนวณไว้ใน Flop study ของ Solver เลือกคู่ตำแหน่งใกล้เคียงหรือคำนวณเองใน Solver`;
      case "multiway": return `ผู้เล่น ${info.players} คนเห็นฟลอปนี้ ผลที่คำนวณไว้ของ Solver ครอบคลุมเฉพาะพอต Heads-up จึงเปิดมือนี้ตามเดิมไม่ได้ เลือกคู่ตำแหน่งที่เจอกับคู่ต่อสู้หนึ่งคนใน Flop study`;
      case "table9": return "ผลที่คำนวณไว้ของ Solver ใช้โต๊ะ 6-max จึงเปิดมือจากโต๊ะ 9 คนตามเดิมไม่ได้ เลือกคู่ตำแหน่งที่ใกล้เคียงที่สุดใน Flop study";
    }
  },
  solverLang: "en",
  fmtNum: n,
  decimalComma: false,
  chartRangeLegend: "ค่าที่คุณเห็น",
  chartNote: "เส้นทึบคือ equity ของแต่ละตำแหน่งเมื่อเปิดไพ่ทุกคน เส้นประคือ equity ที่คุณเห็นโดยไม่รู้ไพ่คู่ต่อสู้ เส้นของผู้เล่นที่หมอบจะจบที่ street ก่อนหมอบ",
  quizToggle: "🎯 ควิซ",
  quizGuessTitle: "Equity ของคุณเท่าไหร่?",
  quizGuessHint: "เลื่อนแถบเพื่อกำหนดค่าที่คุณประเมิน",
  quizSubmit: "ตรวจคำตอบ",
  quizCallSubmit: "คอล → ตรวจคำตอบ",
  quizFoldSubmit: "หมอบ → ตรวจคำตอบ",
  quizResult: (guess, err, points) => `Guess: ${guess}% · Error: ${err} percentage points · Points: ${points}`,
  quizChoiceResult: (ok, verdict) => ok ? `ถูก (${verdict})` : `ผิด — คำตอบคือ ${verdict}`,
  quizNotCounted: "ไม่นับในสถิติควิซ เพราะคุณเห็น equity หรือไพ่คู่ต่อสู้แล้ว",
  quizStats: (s) => `มือ: ${s.hands} · Error เฉลี่ย: ${s.avgErr} percentage points · ตัดสินใจถูก: ${s.hits}/${s.decisions} · Points: ${n(s.points)}`,
  quizReset: "Reset",
  quizResetConfirm: "ลบประวัติควิซที่บันทึกในเบราว์เซอร์นี้หรือไม่? เมื่อลบแล้วจะกู้คืนไม่ได้",
  quizInvite: "เข้าสู่ระบบเพื่อเก็บประวัตินี้ในบัญชี และเปิดดูได้จากโทรศัพท์หรือคอมพิวเตอร์เครื่องอื่น",
  quizInviteLink: "เข้าสู่ระบบ",
  quizGuessCol: "Guess",
  quizChoiceCol: "ตัวเลือก",
  quizHandSummary: (avgErr, hits, decisions, points) => `มือนี้: Error เฉลี่ย ${avgErr} percentage points${decisions > 0 ? ` · ตัดสินใจถูก: ${hits}/${decisions}` : ""} · Points: ${points}`,
  quizGuessLegend: "Guess",
  customToggle: "✍️ กำหนดมือ",
  customTitle: "กำหนดมือ — เล่นซ้ำมือที่คุณเคยเล่น",
  customHint: "แตะช่องแล้วเลือกไพ่ด้านล่าง ช่องว่างจะได้รับไพ่แบบสุ่ม ส่วนคู่ต่อสู้ยังได้รับมือตามเรนจ์ของตำแหน่ง",
  customPos: "ตำแหน่งของคุณ",
  customRandom: "Random",
  customHero: "ไพ่ของคุณ",
  customBoard: "บอร์ด",
  customBoardSlots: ["ฟลอป", "ฟลอป", "ฟลอป", "เทิร์น", "ริเวอร์"],
  customStart: "แจกมือนี้ →",
  customClear: "ล้างทั้งหมด",
  customClose: "ปิด",
  customOff: "กลับไปสุ่มมือ",
  customActive: "มือที่คุณกำหนด — เมื่อเริ่มมือถัดไปจะยังใช้ไพ่เหล่านี้",
  customEdit: "แก้ไข",
  shareBtn: "คัดลอกลิงก์มือนี้",
  shareCopied: "Copied ผู้ที่เปิดลิงก์จะเล่นมือนี้ตั้งแต่ preflop ด้วยไพ่และ equity เดียวกัน",
  shareManual: "คัดลอกอัตโนมัติไม่ได้ กรุณาคัดลอกที่อยู่ด้านล่าง",
  sharedActive: "มือที่แชร์ — ไพ่และ equity เหมือนผู้ส่ง (ไม่นับในสถิติควิซ)",
  sharedInvalid: "อ่านลิงก์ที่แชร์ไม่ได้ จึงแสดงมือสุ่มใหม่ (ลิงก์อาจไม่ครบหรือถูกแก้ไข)",
  rangeToggle: "แสดงเรนจ์คู่ต่อสู้",
  rangeTitle: "เรนจ์คู่ต่อสู้ — มือที่สอดคล้องกับแอ็กชันจนถึงตอนนี้",
  rangeCombos: (pre, cur, pct) => `Preflop ${pre} คอมโบ → ตอนนี้ ${cur} คอมโบ (เหลือ ${pct}%)`,
  rangeLegend: ["ยังอยู่ในเรนจ์ (ยิ่งเข้มยิ่งเหลือมาก)", "ตัดออกตามแอ็กชัน", "ไม่เคยอยู่ในเรนจ์", "มือจริง", "ถูกบล็อกด้วยไพ่ของคุณหรือบอร์ด"],
  rangeNote: "เริ่มจากเรนจ์ preflop ของตำแหน่ง แล้วตัดมือที่จะทำแอ็กชันต่างออกไปตามเงื่อนไขคู่ต่อสู้ในแต่ละ street ค่าความน่าจะเป็นในการชนะด้านบนใช้เรนจ์เดียวกันนี้ คอมโบที่มีไพ่ซ้ำกับไพ่ของคุณหรือบอร์ดจะถูกตัดออก",
  quizKinds: ["ประเมิน equity และตัดสินใจ", "ตัดสินใจอย่างเดียว (คอลหรือหมอบ?)"],
  decideTitle: "คอลหรือหมอบ?",
  decideHint: "เลือกคอลหรือหมอบโดยไม่เห็นไพ่คู่ต่อสู้ แม้คุณเลือกหมอบ มือนี้ก็จะเล่นต่อจนจบ โหมดนี้ไม่นับในสถิติควิซ",
  decideSummary: (hits, decisions) => `มือนี้: ตัดสินใจถูกตาม pot odds ${hits}/${decisions}`,
  actualCol: "เมื่อรู้ไพ่",
  actualSummary: (hits, decisions) => `ตัดสินใจถูกเมื่อรู้ไพ่คู่ต่อสู้: ${hits}/${decisions} ใช้เทียบดูเท่านั้น ที่โต๊ะจริงต้องใช้ pot odds โดยไม่เห็นไพ่คู่ต่อสู้`,

  ruleTitle: "สมมติฐานของเครื่องมือนี้",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">คู่ต่อสู้ทำตามเงื่อนไขด้านล่างเท่านั้น</b> ผู้เล่นจริงไม่ได้เล่นแบบนี้ ตำแหน่ง คู่ต่อสู้ ความลึกของ Stack และภาพลักษณ์ที่โต๊ะล้วนเปลี่ยนการเล่นได้ ให้มองเหมือนโจทย์ฟิสิกส์ที่สมมติว่าไม่มีแรงเสียดทาน
      </p>
      <p className="mb-1">
        สไตล์คู่ต่อสู้ตอนนี้: <b className="text-foreground">{TH_UI.styleNames[style]}</b> (ทั้งโต๊ะใช้สไตล์เดียวกัน เปลี่ยนได้จากตัวเลือกด้านบน)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>สองคู่หรือดีกว่า → <b className="text-foreground">{style === "aggressive" ? "Bet or raise ขนาด 150% ของพอต (Overbet)" : "Bet or raise เท่าพอต"}</b></li>
        {style === "standard" && <li>คู่ หรือฟลัชดรอว์ / straight draw → <b className="text-foreground">เดิมพันครึ่งพอต</b></li>}
        {style === "tight" && <>
          <li>คู่ระดับ top pair หรือดีกว่าที่ใช้ไพ่ในมือ (รวม Overpair) หรือฟลัชดรอว์ / straight draw → <b className="text-foreground">เดิมพันครึ่งพอต</b></li>
          <li>คู่ที่อ่อนกว่านั้น (รวมคู่ที่อยู่บนบอร์ดเท่านั้น) → <b className="text-foreground">หมอบ</b></li>
        </>}
        {style === "loose" && <li>คู่ ฟลัชดรอว์ / straight draw หรือไพ่ในมือที่สูงกว่าไพ่ทุกใบบนบอร์ด (Overcard) → <b className="text-foreground">เดิมพันครึ่งพอต</b></li>}
        {style === "aggressive" && <>
          <li>ฟลัชดรอว์ / straight draw → <b className="text-foreground">Bet or raise (Semi-bluff)</b></li>
          <li>คู่ → <b className="text-foreground">เดิมพันครึ่งพอต</b></li>
          <li>ไม่มีคู่และไม่มีดรอว์ แต่มี Overcard → <b className="text-foreground">Bet or raise (บลัฟ)</b></li>
        </>}
        <li>กรณีอื่นทั้งหมด → <b className="text-foreground">หมอบ</b> (ทิ้งไพ่โดยไม่เปิด เหมือนเล่นสด)</li>
      </ul>
      <p className="mb-2">
        ตรวจเงื่อนไขจากบนลงล่าง ใช้แถวแรกที่ตรงเพื่อตัดสินแอ็กชัน ดรอว์ในที่นี้คือไพ่สี่ใบที่รอฟลัชหรือสเตรทบนฟลอปหรือเทิร์น โดยใช้ไพ่ในมืออย่างน้อยหนึ่งใบ (ริเวอร์ไม่มีดรอว์){" "}
        {style === "aggressive" && "การเพิ่มเดิมพันทุกครั้งในสไตล์ดุดัน รวม Semi-bluff และบลัฟ มีขนาด 150% ของพอต "}
        เมื่อใครเพิ่มเดิมพัน ผู้เล่นที่ยังอยู่ทุกคนจะคอลตามจำนวนนั้น หากเดิมพันเกิน Stack ที่เหลือ จะจำกัดที่ออลอิน หลังออลอินจะไม่มีใครหมอบ แจกบอร์ดที่เหลือแล้วโชว์ดาวน์ ไม่มี Check-raise เพราะคู่ต่อสู้แต่ละคนทำแอ็กชันครั้งเดียวต่อ street ไม่มีขั้นตอนให้เช็คแล้วตอบสนองอีกครั้ง
        ใน street ตั้งแต่ฟลอปที่มีการเดิมพัน ป้ายตำแหน่งสรุปทั้ง street: ผู้กำหนดจำนวนเงินจะแสดง “การเดิมพัน” และคู่ต่อสู้คนอื่นที่ยังอยู่จะแสดง “การคอล” โดยไม่ขึ้นกับลำดับ (ป้าย preflop แสดงวิธีเข้าพอต ส่วนผู้ที่ออลอินตั้งแต่ street ก่อนจะแสดงออลอิน)
        คุณจะไม่เดิมพันเองในเครื่องมือนี้ แต่คอลไปจนถึงริเวอร์ เรนจ์ preflop ด้านล่างเหมือนกันทุกสไตล์
      </p>
      <p className="mb-2">
        <b className="text-foreground">Equity ของคุณคำนวณโดยถือว่าคุณไม่เห็นไพ่คู่ต่อสู้</b> ตั้งแต่ฟลอป เรนจ์ของคู่ต่อสู้แต่ละคนคือมือในเรนจ์ preflop ตามตำแหน่งที่ทำแอ็กชันที่เห็นตามเงื่อนไขสไตล์นั้น
        เมื่อเจอ Standard การเพิ่มเดิมพันจะเหลือเฉพาะสองคู่หรือดีกว่า แต่เมื่อเจอสไตล์ดุดัน ดรอว์และบลัฟด้วย Overcard จะยังอยู่ด้วย
        หากแอ็กชันของตำแหน่งนั้นเป็นการเพิ่มเดิมพัน การคำนวณก็ยังถือว่าเพิ่มเดิมพัน แม้ป้ายจะแสดง “การคอล” โดยป้ายนั้นจะเป็นสีแดง ผู้ที่หมอบบนหน้าจอจะถูกนำออกจากการคำนวณด้วย
      </p>
      <p className="mb-2">
        <b className="text-foreground">มือ preflop ของคู่ต่อสู้มาจากเรนจ์ตามตำแหน่ง</b> ในกลุ่มผู้เล่นที่เข้าพอต คนที่ทำแอ็กชันก่อนใน preflop ถือเป็นผู้เปิด คนอื่นถือว่า Defend ด้วยการคอลหรือ 3-bet (เรนจ์เปิด · defending range)
        ใช้เรนจ์ฉันทามติสำหรับ cash แบบ 6-max 100bb ที่เทียบจากแหล่งสาธารณะหลายแห่ง และผสมมือก้ำกึ่งที่ 25/50/75%
        หากไม่มีตาราง (HJ เจอ UTG open · SB เจอ UTG, HJ หรือ CO open) และตั้งแต่ผู้เล่นคนที่สาม ใช้ตาราง Defend ที่ใกล้เคียงที่สุดแทน
        ไม่มีตาราง 9 คน ดังนั้นโต๊ะ 9-max จะใช้ตาราง UTG ของ 6-max สำหรับ UTG, UTG+1, UTG+2 และ LJ ส่วนตำแหน่งอื่นใช้ตาราง 6-max ชื่อเดียวกัน
        (ตำแหน่งต้นที่ Defend การเปิดของตำแหน่งต้นอีกคน หรือ HJ ที่ Defend การเปิดนั้น ใช้ตาราง CO vs UTG) ทำให้สามตำแหน่งแรกของโต๊ะ 9-max มีเรนจ์กว้างกว่าความเป็นจริง
        มีเพียงมือของคุณที่สุ่ม (เว้นแต่กำหนดเอง) คุณจึงเล่นไพ่สองใบใดก็ได้ไปจนถึงริเวอร์ ส่วน 3-bet ไม่เปลี่ยนขนาดพอตในเครื่องมือนี้ (เป็นการลดความซับซ้อน)
      </p>
      <p className="mb-2">
        <b className="text-foreground">คำตัดสินใช้ pot odds เท่านั้น</b> ไม่รวม implied odds ส่วนแนวโน้มและบลัฟของคู่ต่อสู้มีผลต่อเรนจ์ตามเงื่อนไขสไตล์ที่เลือกเท่านั้น โดยเฉพาะดรอว์อาจยังคุ้มที่จะคอล แม้ pot odds เพียงอย่างเดียวจะขาดไปเล็กน้อย
      </p>
      <p>
        ทุกคนลง Ante {ANTE} และเริ่มด้วย Stack {n(STACK)} คุณจะไม่หมอบ เพื่อให้ได้เห็นริเวอร์และย้อนดูมือ Equity เป็นค่าประมาณจากการจำลองจำนวนคงที่:{" "}
        <b className="text-foreground">{n(SAMPLES.preflop)} ครั้ง</b> ใน preflop และ{" "}
        <b className="text-foreground">{n(SAMPLES.postflop)} ครั้ง</b> ตั้งแต่ฟลอป (standard error ประมาณ 0.25–0.35 percentage points)
        แต่ละมือใช้ค่าเริ่มต้นการสุ่มคงที่ จึงแสดงตัวเลขเดียวกันทุกอุปกรณ์ เมื่อเสมอจะแบ่งพอตตามจำนวนผู้เล่นที่ร่วมชนะ (คนละครึ่งเมื่อเสมอสองคน)
      </p>
      <p className="mt-2">
        <b className="text-foreground">เมื่อเปิดไพ่คู่ต่อสู้</b> แต่ละตำแหน่งจะมี equity เมื่อรู้ไพ่ทุกคน ตั้งแต่ฟลอปจะนับไพ่ที่เหลือทุกแบบอย่างแม่นยำ (เฉพาะ preflop ใช้การจำลอง {n(SAMPLES.known)} ครั้ง)
        ค่านี้ไม่ถูกนำไปใช้กับ equity หรือคำตัดสินคอล/หมอบที่แสดง เพราะที่โต๊ะจริงคุณไม่มีข้อมูลนี้
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 เมื่อเปิดควิซ</b> equity และคำตัดสินจะถูกซ่อนจนกว่าคุณตอบ ในโหมด “{TH_UI.quizKinds[0]}” คุณประเมิน equity ทุก street และเลือกคอลหรือหมอบเมื่อมีคนเดิมพัน
        ในโหมด “{TH_UI.quizKinds[1]}” คุณเลือกเฉพาะคอลหรือหมอบใน street ที่มีการเดิมพัน โดยไม่ประเมิน equity และไม่นับในสถิติควิซ
        คำตอบคือ “Equity ของคุณ” ด้านบน ซึ่งคำนวณโดยไม่รู้ไพ่คู่ต่อสู้ แต่ละครั้งได้ Points ตามสูตร{" "}
        <b className="text-foreground">100 − 4 × Error (percentage points)</b> ปัดเป็นจำนวนเต็มและไม่ต่ำกว่าศูนย์ (Error ตั้งแต่ 25 percentage points ได้ 0)
        การเลือกคอล/หมอบถือว่าถูกเมื่อตรงกับคำตัดสิน pot odds ผลสะสมเก็บในเบราว์เซอร์นี้ และเมื่อเข้าสู่ระบบจะบันทึกในบัญชีเพื่อใช้ข้ามอุปกรณ์ด้วย (ไม่บันทึกไพ่และบอร์ด)
      </p>
      <p className="mt-2">
        <b className="text-foreground">✍️ กำหนดมือ</b> ให้เลือกตำแหน่ง ไพ่ในมือ และบอร์ดเพื่อเล่นซ้ำมือที่เคยเล่น ช่องว่างจะแจกแบบสุ่ม คุณเลือกไพ่คู่ต่อสู้ไม่ได้ เพราะที่โต๊ะจริงก็ไม่รู้เช่นกัน
        ไพ่คู่ต่อสู้ยังมาจากเรนจ์ตามตำแหน่ง และ equity ยังถือว่าไม่รู้ไพ่เหล่านั้น แม้กำหนดบอร์ดไว้ล่วงหน้า equity ของแต่ละ street ก็ใช้เฉพาะไพ่ที่แจกถึงตอนนั้น
        มือที่กำหนดเองไม่นับในประวัติควิซ เพราะการเล่นซ้ำอาจทำให้จำคำตอบได้
      </p>
    </>
  ),
  footer: <><a href="/th/calculator" className="text-primary underline">เครื่องคำนวณ Equity →</a></>,
};

export default function WinRateQuizClientTh() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">ควิซโป๊กเกอร์: poker quiz ฝึก equity 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">ฝึกโดยไม่เห็นไพ่คู่ต่อสู้ แล้วดูว่าคุณควรหมอบตอนไหน</p>
      </div>
      <WinRateSimulator ui={TH_UI} />
    </div>
  );
}
