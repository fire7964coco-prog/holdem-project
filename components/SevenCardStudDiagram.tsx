"use client";

type Stage = "ante"|"third-street"|"fourth-street"|"fifth-street"|"sixth-street"|"seventh-street";
interface Props { stage: Stage; }

/* ── 게임 시나리오 ─────────────────────────────────────────────────
   4인 Fixed Limit $0.02/$0.04
   Sam  (HERO): ↓A♥ ↓K♥ ↑9♥ ↑10♥ ↑J♥ ↑Q♥ ↓7♣ → 로열 플러시 ♥
   Robin:       ↓Q♦ ↓Q♣ ↑K♠ ↑Q♥ ↑7♦ ↑5♣ ↓3♦ → 트리플 퀸즈 (QQQ·K·7)
   Chris: ↓7♠ ↓J♣ ↑2♣  (도어 2♣ 최저 → 브링인 → 3rd 폴드)
   Dana:  ↓4♦ ↓9♣ ↑6♦  (3rd 폴드)
   ────────────────────────────────────────────────────────────── */
interface CardDef { rank:string; suit:string; red:boolean; down:boolean; used:boolean; }

const SAM_CARDS: CardDef[] = [
  {rank:"A",  suit:"♥", red:true,  down:true,  used:true },  // ↓ hole 1
  {rank:"K",  suit:"♥", red:true,  down:true,  used:true },  // ↓ hole 2
  {rank:"9",  suit:"♥", red:true,  down:false, used:false},  // ↑ door (3rd)
  {rank:"10", suit:"♥", red:true,  down:false, used:true },  // ↑ 4th
  {rank:"J",  suit:"♥", red:true,  down:false, used:true },  // ↑ 5th
  {rank:"Q",  suit:"♥", red:true,  down:false, used:true },  // ↑ 6th
  {rank:"7",  suit:"♣", red:false, down:true,  used:false},  // ↓ 7th
];
const ROBIN_CARDS: CardDef[] = [
  {rank:"Q",  suit:"♦", red:true,  down:true,  used:true },  // ↓ hole 1
  {rank:"Q",  suit:"♣", red:false, down:true,  used:true },  // ↓ hole 2
  {rank:"K",  suit:"♠", red:false, down:false, used:true },  // ↑ door (3rd)
  {rank:"Q",  suit:"♥", red:true,  down:false, used:true },  // ↑ 4th
  {rank:"7",  suit:"♦", red:true,  down:false, used:true },  // ↑ 5th
  {rank:"5",  suit:"♣", red:false, down:false, used:false},  // ↑ 6th
  {rank:"3",  suit:"♦", red:true,  down:true,  used:false},  // ↓ 7th
];
const CHRIS_CARDS: CardDef[] = [
  {rank:"7",  suit:"♠", red:false, down:true,  used:false},
  {rank:"J",  suit:"♣", red:false, down:true,  used:false},
  {rank:"2",  suit:"♣", red:false, down:false, used:false},  // door 2♣ = 브링인
];
const DANA_CARDS: CardDef[] = [
  {rank:"4",  suit:"♦", red:true,  down:true,  used:false},
  {rank:"9",  suit:"♣", red:false, down:true,  used:false},
  {rank:"6",  suit:"♦", red:true,  down:false, used:false},  // door 6♦
];

const STAGE_CARD_COUNT: Record<Stage,number> = {
  ante:3, "third-street":3, "fourth-street":4, "fifth-street":5, "sixth-street":6, "seventh-street":7,
};
const STAGE_NEWCARD: Record<Stage,number> = {
  ante:-1, "third-street":-1, "fourth-street":3, "fifth-street":4, "sixth-street":5, "seventh-street":-1,
};

/* ── 팟 성장 ─────────────────────────────────────── */
const POT_STEPS = [
  {stage:"ante",           label:"앤티·브링인",     added:"+$0.05", total:"$0.05"},
  {stage:"third-street",   label:"서드 스트리트",   added:"+$0.04", total:"$0.09"},
  {stage:"fourth-street",  label:"포스 스트리트",   added:"+$0.04", total:"$0.13"},
  {stage:"fifth-street",   label:"피프스 스트리트", added:"+$0.08", total:"$0.21"},
  {stage:"sixth-street",   label:"식스 스트리트",   added:"+$0.08", total:"$0.29"},
  {stage:"seventh-street", label:"세븐스 스트리트", added:"+$0.08", total:"$0.37"},
] as const;
const RAKE = {pct:"5%", amount:"$0.02", net:"$0.35"};
const STAGE_ORDER: Stage[] = ["ante","third-street","fourth-street","fifth-street","sixth-street","seventh-street"];

const STAGE_LABEL: Record<Stage,string> = {
  ante:            "STEP 1 — 앤티 & 브링인",
  "third-street":  "STEP 2 — 서드 스트리트 (카드 3장)",
  "fourth-street": "STEP 3 — 포스 스트리트 (카드 4장)",
  "fifth-street":  "STEP 4 — 피프스 스트리트 (카드 5장)",
  "sixth-street":  "STEP 5 — 식스 스트리트 (카드 6장)",
  "seventh-street":"STEP 6 — 세븐스 스트리트 (쇼다운)",
};
const STAGE_NARRATIVE: Record<Stage,string> = {
  ante:            "앤티 $0.01씩 납부 → 다운2 + 업(도어)1장 배분 · Chris 도어 2♣ 최저 → 브링인 $0.01",
  "third-street":  "Chris 브링인 $0.01 · Dana 폴드 · Sam 콜 $0.02 · Robin 콜 $0.02 · Chris 폴드",
  "fourth-street": "Robin 체크 · Sam 벳 $0.02 · Robin 콜 (10♥ 추가 — 9♥10♥ 하트 연속)",
  "fifth-street":  "Robin 체크 · Sam 벳 $0.04 (빅벳 시작) · Robin 콜 (J♥ — 스트레이트 플러시 드로우!)",
  "sixth-street":  "Sam 벳 $0.04 · Robin 콜 (Q♥ 추가 → 홀 카드 A♥K♥로 로열 플러시 완성!)",
  "seventh-street":"Sam 벳 $0.04 · Robin 콜 → 쇼다운: ↓A♥K♥ 공개 → 로열 플러시 vs 트리플 퀸즈 → Sam 승리",
};

type ActionType = "fold"|"call"|"check"|"bet"|"bring_in"|"win"|"lose"|"wait"|"";
interface PlayerState { action:ActionType; amount?:string; folded:boolean; betChip?:boolean; }
const ACTION_STYLE: Record<ActionType,{bg:string;text:string;label:string}> = {
  "":       {bg:"transparent",text:"#9ca3af",label:""},
  wait:     {bg:"#374151",    text:"#9ca3af",label:"대기"},
  fold:     {bg:"#4b5563",    text:"#d1d5db",label:"FOLD"},
  call:     {bg:"#15803d",    text:"#bbf7d0",label:"CALL"},
  check:    {bg:"#1d4ed8",    text:"#bfdbfe",label:"CHECK"},
  bet:      {bg:"#b45309",    text:"#fde68a",label:"BET"},
  bring_in: {bg:"#6d28d9",    text:"#e9d5ff",label:"브링인"},
  win:      {bg:"#92400e",    text:"#fef3c7",label:"WINNER"},
  lose:     {bg:"#374151",    text:"#9ca3af",label:"LOSE"},
};
const GAME_STATE: Record<Stage,Record<string,PlayerState>> = {
  ante:            {sam:{action:"wait",folded:false}, robin:{action:"wait",folded:false}, chris:{action:"bring_in",amount:"$0.01",folded:false,betChip:true}, dana:{action:"wait",folded:false}},
  "third-street":  {sam:{action:"call",amount:"$0.02",folded:false,betChip:true}, robin:{action:"call",amount:"$0.02",folded:false,betChip:true}, chris:{action:"fold",folded:true}, dana:{action:"fold",folded:true}},
  "fourth-street": {sam:{action:"bet",amount:"$0.02",folded:false,betChip:true}, robin:{action:"call",amount:"$0.02",folded:false,betChip:true}, chris:{action:"",folded:true}, dana:{action:"",folded:true}},
  "fifth-street":  {sam:{action:"bet",amount:"$0.04",folded:false,betChip:true}, robin:{action:"call",amount:"$0.04",folded:false,betChip:true}, chris:{action:"",folded:true}, dana:{action:"",folded:true}},
  "sixth-street":  {sam:{action:"bet",amount:"$0.04",folded:false,betChip:true}, robin:{action:"call",amount:"$0.04",folded:false,betChip:true}, chris:{action:"",folded:true}, dana:{action:"",folded:true}},
  "seventh-street":{sam:{action:"win",folded:false}, robin:{action:"lose",folded:false}, chris:{action:"",folded:true}, dana:{action:"",folded:true}},
};

/* ── 서브 컴포넌트 ───────────────────────────────────────── */
function Card({x,y,w=36,h=52,rank="",suit="",red=false,faceDown=false,glow=false,dimmed=false,newCard=false}:{
  x:number;y:number;w?:number;h?:number;rank?:string;suit?:string;red?:boolean;
  faceDown?:boolean;glow?:boolean;dimmed?:boolean;newCard?:boolean;
}) {
  if (faceDown) return (
    <g opacity={dimmed?0.28:1}>
      <rect x={x} y={y} width={w} height={h} rx={3} fill="#1e3a8a" stroke="#3b82f6" strokeWidth={1.5}/>
      <rect x={x+2} y={y+2} width={w-4} height={h-4} rx={2} fill="#1e40af" stroke="#60a5fa" strokeWidth={0.5}/>
      <line x1={x+3} y1={y+3} x2={x+w-3} y2={y+h-3} stroke="#2563eb" strokeWidth={0.5} opacity={0.4}/>
      <line x1={x+w-3} y1={y+3} x2={x+3} y2={y+h-3} stroke="#2563eb" strokeWidth={0.5} opacity={0.4}/>
    </g>
  );
  const fc = red?"#dc2626":"#111827";
  return (
    <g opacity={dimmed?0.28:1}>
      {glow&&<rect x={x-3} y={y-3} width={w+6} height={h+6} rx={6} fill="#fbbf24" opacity={0.35}/>}
      {newCard&&<rect x={x-2} y={y-2} width={w+4} height={h+4} rx={5} fill="none" stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="3 2"/>}
      <rect x={x} y={y} width={w} height={h} rx={3} fill="white"
        stroke={glow?"#fbbf24":"#d1d5db"} strokeWidth={glow?2:1}/>
      <text x={x+3} y={y+12} fontSize={11} fontWeight="bold" fill={fc} fontFamily="Georgia,serif">{rank}</text>
      <text x={x+3} y={y+24} fontSize={10} fill={fc} fontFamily="Georgia,serif">{suit}</text>
    </g>
  );
}
function BetChip({x,y}:{x:number;y:number}) {
  return (
    <g opacity={0.9}>
      <ellipse cx={x} cy={y}   rx={7} ry={3} fill="#ef4444" stroke="white" strokeWidth={0.7}/>
      <ellipse cx={x} cy={y-4} rx={7} ry={3} fill="#3b82f6" stroke="white" strokeWidth={0.7}/>
      <ellipse cx={x} cy={y-8} rx={7} ry={3} fill="#22c55e" stroke="white" strokeWidth={0.7}/>
    </g>
  );
}
function ActionBadge({x,y,type,amount}:{x:number;y:number;type:ActionType;amount?:string}) {
  if (!type||type==="") return null;
  const s = ACTION_STYLE[type];
  const lbl = amount?`${s.label} ${amount}`:s.label;
  const bw = Math.max(lbl.length*6.2+10,50);
  const isWin = type==="win";
  return (
    <g>
      {isWin&&<rect x={x-bw/2-3} y={y-13} width={bw+6} height={22} rx={7} fill="#fbbf24" opacity={0.3}/>}
      <rect x={x-bw/2} y={y-10} width={bw} height={16} rx={5} fill={s.bg} opacity={0.95}/>
      <text x={x} y={y+3} textAnchor="middle" fontSize={isWin?9.5:9} fontWeight="bold"
        fill={s.text} fontFamily="Arial,sans-serif">{lbl}</text>
    </g>
  );
}

/* ── 팟 패널 ─────────────────────────────────────────────── */
function PotPanel({stage}:{stage:Stage}) {
  const idx = STAGE_ORDER.indexOf(stage);
  const isShowdown = stage==="seventh-street";
  const visibleSteps = POT_STEPS.slice(0, idx+1);
  const pX=576, pY=10, pW=216;
  return (
    <g>
      <rect x={pX} y={pY} width={pW} height={isShowdown?178:26+visibleSteps.length*18+8}
        rx={8} fill="rgba(0,0,0,0.75)" stroke="rgba(251,191,36,0.25)" strokeWidth={1}/>
      <text x={pX+10} y={pY+17} fontSize={10} fontWeight="bold" fill="#fbbf24" fontFamily="Arial,sans-serif">
        팟(POT) 현황 — 리밋
      </text>
      {visibleSteps.map((ps,i)=>{
        const isCurr = ps.stage===stage;
        const ry = pY+26+i*18;
        return (
          <g key={ps.stage}>
            {isCurr&&<rect x={pX+4} y={ry-2} width={pW-8} height={18} rx={3} fill="rgba(251,191,36,0.12)"/>}
            <text x={pX+10} y={ry+11} fontSize={9.5} fill={isCurr?"#fbbf24":"#9ca3af"} fontFamily="Arial,sans-serif">{ps.label}</text>
            <text x={pX+120} y={ry+11} fontSize={9} fill={isCurr?"#86efac":"#6b7280"} fontFamily="Arial,sans-serif">{ps.added}</text>
            <text x={pX+pW-8} y={ry+11} fontSize={9.5} fontWeight={isCurr?"bold":"normal"}
              fill={isCurr?"#fff":"#9ca3af"} textAnchor="end" fontFamily="Arial,sans-serif">{ps.total}</text>
          </g>
        );
      })}
      {isShowdown&&(
        <g>
          <line x1={pX+8} y1={pY+136} x2={pX+pW-8} y2={pY+136} stroke="#4b5563" strokeWidth={0.8}/>
          <rect x={pX+4} y={pY+138} width={pW-8} height={15} rx={3} fill="rgba(239,68,68,0.1)"/>
          <text x={pX+10} y={pY+149} fontSize={9} fill="#f87171" fontFamily="Arial,sans-serif">레이크 {RAKE.pct}</text>
          <text x={pX+pW-8} y={pY+149} fontSize={9} fill="#f87171" textAnchor="end" fontFamily="Arial,sans-serif">-{RAKE.amount}</text>
          <rect x={pX+4} y={pY+155} width={pW-8} height={15} rx={3} fill="rgba(251,191,36,0.15)"/>
          <text x={pX+10} y={pY+166} fontSize={9} fontWeight="bold" fill="#fbbf24" fontFamily="Arial,sans-serif">Sam 수령</text>
          <text x={pX+pW-8} y={pY+166} fontSize={9} fontWeight="bold" fill="#fbbf24" textAnchor="end" fontFamily="Arial,sans-serif">{RAKE.net}</text>
        </g>
      )}
    </g>
  );
}

/* ── 쇼다운 패 조합 패널 ──────────────────────────────────── */
function ShowdownHandPanel() {
  return (
    <g>
      <rect x={8} y={475} width={784} height={108} rx={8} fill="rgba(0,0,0,0.80)" stroke="rgba(251,191,36,0.3)" strokeWidth={1}/>
      <rect x={16} y={481} width={200} height={14} rx={4} fill="rgba(251,191,36,0.15)"/>
      <text x={116} y={492} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#fbbf24" fontFamily="Arial,sans-serif">
        스터드 쇼다운: 7장 중 최강 5장 선택
      </text>
      {/* Sam */}
      <text x={16}  y={514} fontSize={10} fontWeight="bold" fill="#fbbf24" fontFamily="Arial,sans-serif">Sam (승자)</text>
      <text x={82}  y={514} fontSize={9.5} fill="#9ca3af" fontFamily="Arial,sans-serif">↓</text>
      <text x={91}  y={514} fontSize={10} fill="#fbbf24" fontFamily="Arial,sans-serif">A♥K♥</text>
      <text x={125} y={514} fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">+</text>
      <text x={134} y={514} fontSize={10} fill="#60a5fa" fontFamily="Arial,sans-serif">↑Q♥J♥10♥</text>
      <text x={204} y={514} fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">=</text>
      <text x={214} y={514} fontSize={10} fontWeight="bold" fill="#f59e0b" fontFamily="Arial,sans-serif">로열 플러시 ♥</text>
      {/* Robin */}
      <text x={16}  y={532} fontSize={10} fill="#9ca3af" fontFamily="Arial,sans-serif">Robin (패자)</text>
      <text x={82}  y={532} fontSize={9.5} fill="#9ca3af" fontFamily="Arial,sans-serif">↓</text>
      <text x={91}  y={532} fontSize={10} fill="#fca5a5" fontFamily="Arial,sans-serif">Q♦Q♣</text>
      <text x={122} y={532} fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">+</text>
      <text x={131} y={532} fontSize={10} fill="#60a5fa" fontFamily="Arial,sans-serif">↑Q♥K♠7♦</text>
      <text x={201} y={532} fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">=</text>
      <text x={211} y={532} fontSize={10} fill="#9ca3af" fontFamily="Arial,sans-serif">트리플 퀸즈 (QQQ·K·7)</text>
      {/* Stud note */}
      <line x1={16} y1={540} x2={540} y2={540} stroke="#374151" strokeWidth={0.7}/>
      <text x={16}  y={553} fontSize={9} fill="#4b5563" fontFamily="Arial,sans-serif">미사용: Sam 9♥·7♣  Robin 5♣·3♦</text>
      <text x={16}  y={567} fontSize={9} fontStyle="italic" fill="#d97706" fontFamily="Arial,sans-serif">스터드 핵심: ↓다운카드가 승부 결정! Robin은 Sam의 ↓A♥K♥를 몰랐습니다</text>
      {/* Right box */}
      <rect x={550} y={481} width={242} height={98} rx={6} fill="rgba(251,191,36,0.05)" stroke="rgba(251,191,36,0.1)" strokeWidth={1}/>
      <text x={671} y={495} textAnchor="middle" fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">↓ = 다운카드 (비공개 → 쇼다운 공개)</text>
      <text x={671} y={509} textAnchor="middle" fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">↑ = 업카드 (상대에게 공개)</text>
      <text x={671} y={523} textAnchor="middle" fontSize={9} fill="#fbbf24" fontFamily="Arial,sans-serif">Sam 업카드: 9♥ 10♥ J♥ Q♥</text>
      <text x={671} y={537} textAnchor="middle" fontSize={9} fill="#9ca3af" fontFamily="Arial,sans-serif">Robin 눈에는 플러시 드로우만 보임</text>
      <text x={671} y={551} textAnchor="middle" fontSize={9} fontStyle="italic" fill="#d97706" fontFamily="Arial,sans-serif">A♥K♥는 쇼다운까지 비공개!</text>
    </g>
  );
}

/* ── 업/다운 카드 구조 범례 ──────────────────────── */
function CardStructureLegend({stage}:{stage:Stage}) {
  return (
    <g>
      <rect x={8} y={10} width={220} height={26} rx={6} fill="rgba(0,0,0,0.72)"/>
      <text x={18} y={24} fontSize={10} fontWeight="bold" fill="#fbbf24" fontFamily="Arial,sans-serif">
        {STAGE_LABEL[stage]}
      </text>
    </g>
  );
}

/* ── 메인 컴포넌트 ───────────────────────────────────────── */
export default function SevenCardStudDiagram({stage}:Props) {
  const gs = GAME_STATE[stage];
  const W=800, H=590;
  const isShowdown = stage==="seventh-street";
  const cardCount = STAGE_CARD_COUNT[stage];
  const newCardIdx = STAGE_NEWCARD[stage];

  // Player positions: Robin(top) Chris(right) Sam(HERO/bottom) Dana(left)
  const POS: Record<string,[number,number,string,boolean?]> = {
    robin: [400, 80,  "#b91c1c", true],
    chris: [655, 230, "#15803d"],
    sam:   [285, 418, "#d97706"],
    dana:  [122, 230, "#7c3aed"],
  };
  const heroR=27, otherR=21;

  // Card dimensions
  const rCW=26, rCH=38, rGap=4;  // Robin (top)
  const sCW=30, sCH=44, sGap=4;  // Sam (hero, bottom)
  const oCW=22, oCH=32, oGap=3;  // Chris/Dana (side, 3 cards only)

  // Robin card row position (below circle)
  const robinCardCount = cardCount;
  const robinTotalW = robinCardCount*rCW + (robinCardCount-1)*rGap;
  const robinCardX = 400 - robinTotalW/2;
  const robinCardY = POS.robin[1] + otherR + 6;

  // Sam card row position (above circle)
  const samCardCount = cardCount;
  const samTotalW = samCardCount*sCW + (samCardCount-1)*sGap;
  const samCardX = 285 - samTotalW/2;
  const samCardY = POS.sam[1] - heroR - 8 - sCH;

  // Chris cards (to left of circle, only ante/3rd)
  const chrisTotalW = 3*oCW + 2*oGap;
  const chrisCardX = POS.chris[0] - otherR - 8 - chrisTotalW;
  const chrisCardY = POS.chris[1] - oCH/2;

  // Dana cards (to right of circle, only ante/3rd)
  const danaCardX = POS.dana[0] + otherR + 8;
  const danaCardY = POS.dana[1] - oCH/2;

  return (
    <div className="w-full rounded-xl overflow-hidden" style={{background:"#0a180a"}}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{display:"block"}}
        role="img" aria-label={`세븐 카드 스터드 ${STAGE_LABEL[stage]} 다이어그램`}>

        <rect width={W} height={H} fill="#0a180a"/>

        {/* Table */}
        <ellipse cx={400} cy={225} rx={310} ry={162} fill="#3d1f05" stroke="#5c3009" strokeWidth={5}/>
        <ellipse cx={400} cy={225} rx={292} ry={148} fill="#166534"/>
        <ellipse cx={400} cy={216} rx={255} ry={122} fill="none" stroke="#15803d" strokeWidth={1} opacity={0.4}/>

        {/* Table center — NO community cards */}
        <text x={400} y={218} textAnchor="middle" fontSize={12} fill="#15803d" fontFamily="Arial,sans-serif" fontWeight="bold" opacity={0.35}>
          커뮤니티 카드 없음
        </text>
        <text x={400} y={235} textAnchor="middle" fontSize={9.5} fill="#6b7280" fontFamily="Arial,sans-serif" opacity={0.7}>
          각자 7장 개인 배분 · Fixed Limit $0.02/$0.04
        </text>

        {/* POT chips + label */}
        <g>
          <ellipse cx={400} cy={162} rx={28} ry={12} fill="rgba(0,0,0,0.5)"/>
          {[{cx:394,cy:161},{cx:394,cy:157},{cx:406,cy:161},{cx:406,cy:157},{cx:400,cy:154}].map((p,i)=>(
            <ellipse key={i} cx={p.cx} cy={p.cy} rx={7.5} ry={3.2}
              fill={["#ef4444","#3b82f6","#22c55e","#f59e0b","#8b5cf6"][i]} stroke="white" strokeWidth={0.7}/>
          ))}
          <rect x={368} y={140} width={64} height={16} rx={4} fill="rgba(0,0,0,0.75)"/>
          <text x={400} y={151} textAnchor="middle" fontSize={9.5} fill="#fbbf24"
            fontFamily="Arial,sans-serif" fontWeight="bold">
            POT {POT_STEPS[STAGE_ORDER.indexOf(stage)].total}
          </text>
        </g>

        {/* Stage badge */}
        <CardStructureLegend stage={stage}/>

        {/* UP/DOWN legend box */}
        <rect x={230} y={10} width={162} height={26} rx={6} fill="rgba(0,0,0,0.65)"/>
        <text x={240} y={24} fontSize={9} fill="#9ca3af" fontFamily="Arial,sans-serif">
          ↓ 비공개 (다운)&nbsp;&nbsp;↑ 공개 (업)
        </text>

        {/* ── Robin's card row ── */}
        {Array.from({length: robinCardCount}).map((_,i)=>{
          const c = ROBIN_CARDS[i];
          const x = robinCardX + i*(rCW+rGap);
          const isFaceDown = !isShowdown && c.down;
          const glow = isShowdown && c.used;
          const dimmed = isShowdown && !c.used;
          const isNew = i === newCardIdx;
          return (
            <g key={`rc-${i}`}>
              <Card x={x} y={robinCardY} w={rCW} h={rCH}
                rank={c.rank} suit={c.suit} red={c.red}
                faceDown={isFaceDown} glow={glow} dimmed={dimmed} newCard={isNew}/>
              {/* Down card indicator above */}
              {!isFaceDown && c.down && (
                <text x={x+rCW/2} y={robinCardY-3} textAnchor="middle" fontSize={7}
                  fill="#9ca3af" fontFamily="Arial,sans-serif">↓</text>
              )}
              {/* Up card indicator */}
              {!c.down && !isFaceDown && (
                <text x={x+rCW/2} y={robinCardY-3} textAnchor="middle" fontSize={7}
                  fill="#22c55e" fontFamily="Arial,sans-serif">↑</text>
              )}
              {/* Used bar at showdown */}
              {isShowdown && (
                <rect x={x} y={robinCardY+rCH+3} width={rCW} height={2.5} rx={1}
                  fill={c.used?"#fbbf24":"#374151"} opacity={c.used?0.9:0.5}/>
              )}
            </g>
          );
        })}

        {/* Robin door card label — 앤티·서드 스트리트 단계에만 표시 */}
        {(stage==="ante"||stage==="third-street") && (
          <text x={robinCardX + 2*(rCW+rGap) + rCW/2} y={robinCardY+rCH+14}
            textAnchor="middle" fontSize={7.5} fill="#22c55e" fontFamily="Arial,sans-serif" fontWeight="bold">도어↑</text>
        )}

        {/* ── Sam's card row (HERO, all face-up) ── */}
        {Array.from({length: samCardCount}).map((_,i)=>{
          const c = SAM_CARDS[i];
          const x = samCardX + i*(sCW+sGap);
          const glow = isShowdown && c.used;
          const dimmed = isShowdown && !c.used;
          const isNew = i === newCardIdx;
          return (
            <g key={`sc-${i}`}>
              <Card x={x} y={samCardY} w={sCW} h={sCH}
                rank={c.rank} suit={c.suit} red={c.red}
                glow={glow} dimmed={dimmed} newCard={isNew}/>
              {/* Down/up indicator above each card */}
              <text x={x+sCW/2} y={samCardY-3} textAnchor="middle" fontSize={7.5}
                fill={c.down?"#fbbf24":"#22c55e"} fontFamily="Arial,sans-serif">{c.down?"↓":"↑"}</text>
              {/* Used bar at showdown */}
              {isShowdown && (
                <rect x={x} y={samCardY+sCH+3} width={sCW} height={2.5} rx={1}
                  fill={c.used?"#fbbf24":"#374151"} opacity={c.used?0.9:0.5}/>
              )}
            </g>
          );
        })}

        {/* ── Chris's cards (only at ante/third-street) ── */}
        {(stage==="ante"||stage==="third-street") && (
          <>
            {CHRIS_CARDS.map((c,i)=>{
              const x = chrisCardX + i*(oCW+oGap);
              const isFaceDown = c.down;
              return (
                <g key={`cc-${i}`}>
                  <Card x={x} y={chrisCardY} w={oCW} h={oCH}
                    rank={c.rank} suit={c.suit} red={c.red} faceDown={isFaceDown}/>
                  {!c.down && (
                    <text x={x+oCW/2} y={chrisCardY-3} textAnchor="middle" fontSize={6.5}
                      fill="#22c55e" fontFamily="Arial,sans-serif">↑</text>
                  )}
                </g>
              );
            })}
            {/* Bring-in badge on Chris's door card */}
            <text x={chrisCardX+2*(oCW+oGap)+oCW/2} y={chrisCardY+oCH+12}
              textAnchor="middle" fontSize={7} fill="#a78bfa" fontFamily="Arial,sans-serif" fontWeight="bold">
              2♣ 최저
            </text>
          </>
        )}

        {/* ── Dana's cards (only at ante/third-street) ── */}
        {(stage==="ante"||stage==="third-street") && (
          <>
            {DANA_CARDS.map((c,i)=>{
              const x = danaCardX + i*(oCW+oGap);
              return (
                <g key={`dc-${i}`}>
                  <Card x={x} y={danaCardY} w={oCW} h={oCH}
                    rank={c.rank} suit={c.suit} red={c.red} faceDown={c.down}/>
                  {!c.down && (
                    <text x={x+oCW/2} y={danaCardY-3} textAnchor="middle" fontSize={6.5}
                      fill="#22c55e" fontFamily="Arial,sans-serif">↑</text>
                  )}
                </g>
              );
            })}
          </>
        )}

        {/* ── Players ── */}
        {Object.entries(POS).map(([name,[px,py,color,isDealer]])=>{
          const state = gs[name];
          const isFolded = state.folded;
          const isHero = name==="sam";
          const isBringIn = name==="chris";
          const R = isHero ? heroR : otherR;
          const op = isFolded ? 0.30 : 1;

          const chipX = px + (400-px)*0.40;
          const chipY = py + (225-py)*0.40;

          return (
            <g key={name} opacity={op}>
              {state.betChip&&!isFolded&&<BetChip x={chipX} y={chipY}/>}

              <circle cx={px} cy={py} r={R} fill={color}
                stroke={state.action==="win"?"#fbbf24":"white"}
                strokeWidth={state.action==="win"?3:isHero?3:2}/>
              {isHero&&<circle cx={px} cy={py} r={R+4} fill="none" stroke="#fbbf24"
                strokeWidth={1.5} strokeDasharray="4 3" opacity={0.6}/>}
              <text x={px} y={py+5} textAnchor="middle" fontSize={isHero?15:12}
                fontWeight="bold" fill="white" fontFamily="Arial,sans-serif">
                {name[0].toUpperCase()}
              </text>

              {/* Name tag */}
              <rect x={px-28} y={py+R+5} width={56} height={isHero?34:22} rx={4} fill="rgba(0,0,0,0.8)"/>
              <text x={px} y={py+R+17} textAnchor="middle" fontSize={9.5} fill="white"
                fontFamily="Arial,sans-serif" fontWeight="bold">
                {name[0].toUpperCase()+name.slice(1)}
              </text>
              {isHero&&<text x={px} y={py+R+29} textAnchor="middle" fontSize={8.5} fill="#fbbf24"
                fontFamily="Arial,sans-serif">(You)</text>}

              {/* Dealer badge */}
              {isDealer&&<g>
                <circle cx={px-R-2} cy={py-R+2} r={9} fill="white" stroke="#6b7280" strokeWidth={1.5}/>
                <text x={px-R-2} y={py-R+6} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#111" fontFamily="Arial,sans-serif">D</text>
              </g>}

              {/* Bring-in badge on Chris's door card side */}
              {isBringIn && (stage==="ante"||stage==="third-street") && (
                <g>
                  <circle cx={px+R+2} cy={py-R+2} r={11} fill="#7c3aed" stroke="white" strokeWidth={1.5}/>
                  <text x={px+R+2} y={py-R+7} textAnchor="middle" fontSize={6.5} fontWeight="bold" fill="white" fontFamily="Arial,sans-serif">B/I</text>
                </g>
              )}

              {/* Action badge */}
              {state.action&&state.action!=="wait"&&(
                <ActionBadge x={px} y={py+R+(isHero?50:36)} type={state.action} amount={state.amount}/>
              )}
            </g>
          );
        })}

        {/* Winner glow */}
        {isShowdown&&(
          <ellipse cx={POS.sam[0]} cy={POS.sam[1]} rx={32} ry={32}
            fill="none" stroke="#fbbf24" strokeWidth={3} opacity={0.6}>
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
          </ellipse>
        )}

        {/* Pot panel */}
        <PotPanel stage={stage}/>

        {/* Bottom panel */}
        {isShowdown ? <ShowdownHandPanel/> : (
          <g>
            <rect x={0} y={470} width={W} height={120} fill="rgba(0,0,0,0.75)"/>
            <text x={16} y={486} fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">베팅 진행</text>
            <foreignObject x={16} y={490} width={W-32} height={90}>
              <div xmlns="http://www.w3.org/1999/xhtml"
                style={{fontSize:"11px",color:"#e5e7eb",fontFamily:"Arial,sans-serif",
                  lineHeight:"1.5",whiteSpace:"normal",overflow:"hidden"}}>
                {STAGE_NARRATIVE[stage]}
              </div>
            </foreignObject>
          </g>
        )}
      </svg>
    </div>
  );
}
