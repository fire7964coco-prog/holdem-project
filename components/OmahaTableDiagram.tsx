"use client";

type Stage = "blinds" | "preflop" | "flop" | "turn" | "river" | "showdown";
interface Props { stage: Stage; }

/* ── 게임 시나리오 ─────────────────────────────────
   5인 PLO 0.01/0.02
   Sam (HERO/UTG): A♠ K♠ 7♦ 3♣  ← 쇼다운: A♠K♠ 사용
   Robin (D):      Q♥ J♥ 10♥ 9♥ ← 쇼다운: Q♥J♥ 사용
   커뮤니티: 10♠ J♠ Q♠ | K♥ | 2♥
   ─────────────────────────────────────────────── */
const HERO_CARDS = [
  { rank:"A", suit:"♠", red:false, used:true  },
  { rank:"K", suit:"♠", red:false, used:true  },
  { rank:"7", suit:"♦", red:true,  used:false },
  { rank:"3", suit:"♣", red:false, used:false },
];
const ROBIN_CARDS = [
  { rank:"Q", suit:"♥", red:true,  used:true  },
  { rank:"J", suit:"♥", red:true,  used:true  },
  { rank:"10",suit:"♥", red:true,  used:false },
  { rank:"9", suit:"♥", red:true,  used:false },
];
const COMMUNITY_CARDS = [
  { rank:"10",suit:"♠", red:false, used:true  },
  { rank:"J", suit:"♠", red:false, used:true  },
  { rank:"Q", suit:"♠", red:false, used:true  },
  { rank:"K", suit:"♥", red:true,  used:false },
  { rank:"2", suit:"♥", red:true,  used:false },
];

/* ── 팟 성장 ──────────────────────────────────── */
const POT_STEPS = [
  { stage:"blinds",   label:"블라인드", added:"+$0.03", total:"$0.03" },
  { stage:"preflop",  label:"프리플랍", added:"+$0.05", total:"$0.08" },
  { stage:"flop",     label:"플랍",     added:"+$0.08", total:"$0.16" },
  { stage:"turn",     label:"턴",       added:"+$0.16", total:"$0.32" },
  { stage:"river",    label:"리버",     added:"+$0.32", total:"$0.64" },
  { stage:"showdown", label:"쇼다운",   added:"—",      total:"$0.64" },
] as const;
const RAKE = { pct:"5%", amount:"$0.03", net:"$0.61" };
const STAGE_ORDER: Stage[] = ["blinds","preflop","flop","turn","river","showdown"];

const STAGE_LABEL: Record<Stage,string> = {
  blinds:   "STEP 1 — 블라인드",
  preflop:  "STEP 2 — 프리플랍 (홀 카드 4장)",
  flop:     "STEP 3 — 플랍",
  turn:     "STEP 4 — 턴",
  river:    "STEP 5 — 리버",
  showdown: "STEP 6 — 쇼다운 (2+3 규칙 확인)",
};

const STAGE_CFG: Record<Stage,{ community:number; newCard:number; showdown:boolean; narrative:string; }> = {
  blinds:   { community:0, newCard:-1, showdown:false,
    narrative:"Chris SB $0.01 · Dana BB $0.02 포스팅 → 홀 카드 4장 배분 대기" },
  preflop:  { community:0, newCard:-1, showdown:false,
    narrative:"UTG부터 → Sam 콜 $0.02 · Lee 폴드 · Robin 콜 $0.02 · Chris 콜 $0.02 · Dana 체크" },
  flop:     { community:3, newCard:2,  showdown:false,
    narrative:"Chris 체크 · Dana 체크 · Sam 체크 · Robin 벳 $0.04 → Chris·Dana 폴드 · Sam 콜 $0.04" },
  turn:     { community:4, newCard:3,  showdown:false,
    narrative:"Sam 벳 $0.08 (너트 밸류벳) · Robin 콜 $0.08" },
  river:    { community:5, newCard:4,  showdown:false,
    narrative:"Sam 벳 $0.16 · Robin 콜 $0.16 → 쇼다운" },
  showdown: { community:5, newCard:-1, showdown:true,
    narrative:"Sam: A♠K♠ + 10♠J♠Q♠ = 로열 플러시! Robin: Q♥J♥ + 10♠J♠Q♠ = 투페어 → Sam 승리" },
};

type ActionType = "fold"|"call"|"check"|"bet"|"blind_sb"|"blind_bb"|"win"|"lose"|"wait"|"";
interface PlayerState { action:ActionType; amount?:string; folded:boolean; betChip?:boolean; }

const GAME_STATE: Record<Stage,Record<string,PlayerState>> = {
  blinds:  { robin:{action:"wait",folded:false}, chris:{action:"blind_sb",amount:"$0.01",folded:false,betChip:true},
             dana:{action:"blind_bb",amount:"$0.02",folded:false,betChip:true}, sam:{action:"wait",folded:false}, lee:{action:"wait",folded:false} },
  preflop: { robin:{action:"call",amount:"$0.02",folded:false,betChip:true}, chris:{action:"call",amount:"$0.02",folded:false,betChip:true},
             dana:{action:"check",folded:false}, sam:{action:"call",amount:"$0.02",folded:false,betChip:true}, lee:{action:"fold",folded:true} },
  flop:    { robin:{action:"bet",amount:"$0.04",folded:false,betChip:true}, chris:{action:"fold",folded:true},
             dana:{action:"fold",folded:true}, sam:{action:"call",amount:"$0.04",folded:false,betChip:true}, lee:{action:"",folded:true} },
  turn:    { robin:{action:"call",amount:"$0.08",folded:false,betChip:true}, chris:{action:"",folded:true},
             dana:{action:"",folded:true}, sam:{action:"bet",amount:"$0.08",folded:false,betChip:true}, lee:{action:"",folded:true} },
  river:   { robin:{action:"call",amount:"$0.16",folded:false,betChip:true}, chris:{action:"",folded:true},
             dana:{action:"",folded:true}, sam:{action:"bet",amount:"$0.16",folded:false,betChip:true}, lee:{action:"",folded:true} },
  showdown:{ robin:{action:"lose",folded:false}, chris:{action:"",folded:true},
             dana:{action:"",folded:true}, sam:{action:"win",folded:false}, lee:{action:"",folded:true} },
};

const ACTION_STYLE: Record<ActionType,{bg:string;text:string;label:string}> = {
  "":        {bg:"transparent",text:"#9ca3af",label:""},
  wait:      {bg:"#374151",text:"#9ca3af",label:"대기"},
  fold:      {bg:"#4b5563",text:"#d1d5db",label:"FOLD"},
  call:      {bg:"#15803d",text:"#bbf7d0",label:"CALL"},
  check:     {bg:"#1d4ed8",text:"#bfdbfe",label:"CHECK"},
  bet:       {bg:"#b45309",text:"#fde68a",label:"BET"},
  blind_sb:  {bg:"#1e40af",text:"#bfdbfe",label:"SB"},
  blind_bb:  {bg:"#6d28d9",text:"#e9d5ff",label:"BB"},
  win:       {bg:"#92400e",text:"#fef3c7",label:"WINNER"},
  lose:      {bg:"#374151",text:"#9ca3af",label:"LOSE"},
};

/* ── 서브 컴포넌트 ─────────────────────────────── */
function Card({x,y,w=40,h=57,rank="",suit="",red=false,faceDown=false,glow=false,dimmed=false,newCard=false}:{
  x:number;y:number;w?:number;h?:number;rank?:string;suit?:string;red?:boolean;
  faceDown?:boolean;glow?:boolean;dimmed?:boolean;newCard?:boolean;
}) {
  if (faceDown) return (
    <g opacity={dimmed?0.3:1}>
      <rect x={x} y={y} width={w} height={h} rx={4} fill="#1e3a8a" stroke="#3b82f6" strokeWidth={1.5}/>
      <rect x={x+3} y={y+3} width={w-6} height={h-6} rx={2} fill="#1e40af" stroke="#60a5fa" strokeWidth={0.5}/>
      <line x1={x+4} y1={y+4} x2={x+w-4} y2={y+h-4} stroke="#2563eb" strokeWidth={0.5} opacity={0.4}/>
      <line x1={x+w-4} y1={y+4} x2={x+4} y2={y+h-4} stroke="#2563eb" strokeWidth={0.5} opacity={0.4}/>
    </g>
  );
  const fc = red?"#dc2626":"#111827";
  return (
    <g opacity={dimmed?0.28:1}>
      {glow&&<rect x={x-4} y={y-4} width={w+8} height={h+8} rx={7} fill="#fbbf24" opacity={0.35}/>}
      {newCard&&<rect x={x-3} y={y-3} width={w+6} height={h+6} rx={6} fill="none" stroke="#f59e0b" strokeWidth={2} strokeDasharray="3 2"/>}
      <rect x={x} y={y} width={w} height={h} rx={4} fill="white"
        stroke={glow?"#fbbf24":"#d1d5db"} strokeWidth={glow?2:1}/>
      <text x={x+4} y={y+14} fontSize={12} fontWeight="bold" fill={fc} fontFamily="Georgia,serif">{rank}</text>
      <text x={x+4} y={y+27} fontSize={11} fill={fc} fontFamily="Georgia,serif">{suit}</text>
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
  const bw = Math.max(lbl.length*6.2+10,46);
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

/* ── 4장 카드 팬 (엎어진 카드) ───────────────── */
function FaceDownFan({cx,cy,r,above=true}:{cx:number;cy:number;r:number;above?:boolean}) {
  const cW=15, cH=22, offset=6;
  const totalW = cW + 3*offset;
  const startX = cx - totalW/2;
  const cardY = above ? cy - r - 5 - cH : cy + r + 5;
  return (
    <g>
      {[0,1,2,3].map(i=>(
        <g key={i}>
          <rect x={startX+i*offset} y={cardY} width={cW} height={cH} rx={2}
            fill="#1e3a8a" stroke="#3b82f6" strokeWidth={1}/>
          <line x1={startX+i*offset+2} y1={cardY+2}
                x2={startX+i*offset+cW-2} y2={cardY+cH-2}
                stroke="#2563eb" strokeWidth={0.4} opacity={0.4}/>
        </g>
      ))}
    </g>
  );
}

/* ── 팟 패널 ─────────────────────────────────── */
function PotPanel({stage}:{stage:Stage}) {
  const idx = STAGE_ORDER.indexOf(stage);
  const isShowdown = stage==="showdown";
  const visibleSteps = POT_STEPS.slice(0, idx+1);
  const pX=576, pY=10, pW=216;

  return (
    <g>
      <rect x={pX} y={pY} width={pW} height={isShowdown?178:26+visibleSteps.length*18+8}
        rx={8} fill="rgba(0,0,0,0.75)" stroke="rgba(251,191,36,0.25)" strokeWidth={1}/>
      <text x={pX+10} y={pY+17} fontSize={10} fontWeight="bold" fill="#fbbf24" fontFamily="Arial,sans-serif">
        팟(POT) 현황 — PLO
      </text>
      {visibleSteps.map((ps,i)=>{
        const isCurr = ps.stage===stage;
        const ry = pY+26+i*18;
        return (
          <g key={ps.stage}>
            {isCurr&&<rect x={pX+4} y={ry-2} width={pW-8} height={18} rx={3} fill="rgba(251,191,36,0.12)"/>}
            <text x={pX+10} y={ry+11} fontSize={9.5} fill={isCurr?"#fbbf24":"#9ca3af"} fontFamily="Arial,sans-serif">{ps.label}</text>
            <text x={pX+80} y={ry+11} fontSize={9} fill={isCurr?"#86efac":"#6b7280"} fontFamily="Arial,sans-serif">{ps.added}</text>
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

/* ── 쇼다운 패 조합 패널 ──────────────────────── */
function ShowdownHandPanel() {
  return (
    <g>
      <rect x={8} y={472} width={784} height={84} rx={8} fill="rgba(0,0,0,0.80)" stroke="rgba(251,191,36,0.3)" strokeWidth={1}/>
      {/* Omaha 2+3 rule label */}
      <rect x={16} y={478} width={190} height={14} rx={4} fill="rgba(251,191,36,0.15)"/>
      <text x={111} y={489} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#fbbf24" fontFamily="Arial,sans-serif">
        오마하 규칙: 홀 카드 정확히 2장 + 커뮤니티 3장
      </text>
      {/* Sam line */}
      <text x={16} y={508} fontSize={10} fontWeight="bold" fill="#fbbf24" fontFamily="Arial,sans-serif">Sam (승자)</text>
      <text x={82} y={508} fontSize={10} fill="#fbbf24" fontFamily="Arial,sans-serif">A♠K♠</text>
      <text x={115} y={508} fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">+</text>
      <text x={124} y={508} fontSize={10} fill="#60a5fa" fontFamily="Arial,sans-serif">10♠J♠Q♠</text>
      <text x={175} y={508} fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">=</text>
      <text x={184} y={508} fontSize={10} fontWeight="bold" fill="#f59e0b" fontFamily="Arial,sans-serif">로열 플러시 ♠</text>
      {/* Robin line */}
      <text x={16} y={526} fontSize={10} fill="#9ca3af" fontFamily="Arial,sans-serif">Robin (패자)</text>
      <text x={82} y={526} fontSize={10} fill="#fca5a5" fontFamily="Arial,sans-serif">Q♥J♥</text>
      <text x={113} y={526} fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">+</text>
      <text x={122} y={526} fontSize={10} fill="#60a5fa" fontFamily="Arial,sans-serif">10♠J♠Q♠</text>
      <text x={173} y={526} fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">=</text>
      <text x={182} y={526} fontSize={10} fill="#9ca3af" fontFamily="Arial,sans-serif">투 페어 (QQ·JJ)</text>
      {/* Note about same community cards */}
      <text x={310} y={508} fontSize={9} fill="#4b5563" fontFamily="Arial,sans-serif">← 두 플레이어 모두 같은 커뮤니티 3장 사용,</text>
      <text x={310} y={522} fontSize={9} fill="#4b5563" fontFamily="Arial,sans-serif">   홀 카드 2장이 달라 완전히 다른 패 완성</text>
      {/* unused note */}
      <rect x={540} y={478} width={250} height={74} rx={6} fill="rgba(251,191,36,0.05)" stroke="rgba(251,191,36,0.1)" strokeWidth={1}/>
      <text x={665} y={492} textAnchor="middle" fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">미사용 카드 (흐린 표시)</text>
      <text x={665} y={506} textAnchor="middle" fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">Sam: 7♦ 3♣  Robin: 10♥ 9♥</text>
      <text x={665} y={520} textAnchor="middle" fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">커뮤니티 미사용: K♥ 2♥</text>
      <text x={665} y={534} textAnchor="middle" fontSize={9} fontStyle="italic" fill="#d97706" fontFamily="Arial,sans-serif">오마하는 4장 중 2장만 사용 가능!</text>
    </g>
  );
}

/* ── 메인 ────────────────────────────────────── */
export default function OmahaTableDiagram({stage}:Props) {
  const cfg = STAGE_CFG[stage];
  const gs  = GAME_STATE[stage];
  const W=800, H=560;
  const isShowdown = cfg.showdown;

  // Community card layout
  const cW=40, cH=57, cGap=9;
  const totalCW = 5*cW + 4*cGap;
  const cardsX = (W-totalCW)/2, cardsY = 200-cH/2;

  // Player positions: Robin(D), Chris(SB), Dana(BB), Sam(HERO/UTG), Lee(CO)
  const POS: Record<string,[number,number,string,boolean?]> = {
    robin: [400, 85, "#b91c1c", true],   // D, top
    chris: [636, 170, "#15803d"],          // SB, top-right
    dana:  [668, 310, "#7c3aed"],          // BB, right
    sam:   [285, 400, "#d97706"],          // HERO, bottom
    lee:   [108, 245, "#0f766e"],          // CO, left
  };

  const heroR=27, otherR=21;

  return (
    <div className="w-full rounded-xl overflow-hidden" style={{background:"#0a180a"}}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{display:"block"}}
        role="img" aria-label={`오마하 포커 ${STAGE_LABEL[stage]} 다이어그램`}>

        <rect width={W} height={H} fill="#0a180a"/>

        {/* Table */}
        <ellipse cx={400} cy={215} rx={340} ry={178} fill="#3d1f05" stroke="#5c3009" strokeWidth={5}/>
        <ellipse cx={400} cy={215} rx={320} ry={161} fill="#166534"/>
        <ellipse cx={400} cy={205} rx={280} ry={135} fill="none" stroke="#15803d" strokeWidth={1} opacity={0.4}/>

        {/* Community card zone */}
        <rect x={cardsX-16} y={cardsY-16} width={totalCW+32} height={cH+30} rx={9} fill="rgba(0,0,0,0.28)"/>
        <text x={400} y={cardsY-22} textAnchor="middle" fontSize={8} fill="#6b7280" fontFamily="Arial,sans-serif" letterSpacing="1">
          COMMUNITY CARDS
        </text>

        {/* Community cards */}
        {Array.from({length:5}).map((_,i)=>{
          const cx = cardsX + i*(cW+cGap);
          if (i < cfg.community) {
            const c = COMMUNITY_CARDS[i];
            const usedHighlight = isShowdown && c.used;
            const dimmed = isShowdown && !c.used;
            return <Card key={i} x={cx} y={cardsY} w={cW} h={cH}
              rank={c.rank} suit={c.suit} red={c.red}
              glow={usedHighlight} dimmed={dimmed} newCard={i===cfg.newCard}/>;
          }
          if (stage!=="blinds"&&stage!=="preflop")
            return <Card key={i} x={cx} y={cardsY} w={cW} h={cH} faceDown/>;
          return null;
        })}

        {/* "USED" label under used community cards at showdown */}
        {isShowdown && (
          <g>
            <text x={cardsX + (0+1+2)*(cW+cGap)/3 + cW/2 + cGap} y={cardsY+cH+20}
              textAnchor="middle" fontSize={8} fill="#fbbf24" fontFamily="Arial,sans-serif" fontWeight="bold">
              ← USED (3장) →
            </text>
          </g>
        )}

        {/* POT display */}
        <g>
          <ellipse cx={400} cy={156} rx={30} ry={13} fill="rgba(0,0,0,0.5)"/>
          {[{cx:393,cy:155},{cx:393,cy:151},{cx:407,cy:155},{cx:407,cy:151},{cx:400,cy:148}].map((p,i)=>(
            <ellipse key={i} cx={p.cx} cy={p.cy} rx={8} ry={3.5}
              fill={["#ef4444","#3b82f6","#22c55e","#f59e0b","#8b5cf6"][i]} stroke="white" strokeWidth={0.7}/>
          ))}
          <rect x={368} y={138} width={64} height={16} rx={4} fill="rgba(0,0,0,0.75)"/>
          <text x={400} y={149.5} textAnchor="middle" fontSize={9.5} fill="#fbbf24"
            fontFamily="Arial,sans-serif" fontWeight="bold">
            POT {POT_STEPS[STAGE_ORDER.indexOf(stage)].total}
          </text>
        </g>

        {/* PLO label */}
        <rect x={305} y={265} width={190} height={18} rx={5} fill="rgba(0,0,0,0.55)"/>
        <text x={400} y={278} textAnchor="middle" fontSize={9.5} fill="#9ca3af" fontFamily="Arial,sans-serif">
          PLO · 팟 리밋 Blinds 0.01/0.02
        </text>

        {/* Omaha 4-card rule badge */}
        <rect x={8} y={10} width={195} height={26} rx={6} fill="rgba(0,0,0,0.72)"/>
        <text x={18} y={26} fontSize={11} fontWeight="bold" fill="#fbbf24" fontFamily="Arial,sans-serif">
          {STAGE_LABEL[stage]}
        </text>

        {/* ── Players ── */}
        {Object.entries(POS).map(([name,[px,py,color,isDealer]])=>{
          const state = gs[name];
          const isFolded = state.folded;
          const isHero = name==="sam";
          const isSB = name==="chris";
          const isBB = name==="dana";
          const R = isHero ? heroR : otherR;
          const op = isFolded ? 0.32 : 1;

          // Chip position toward center
          const chipX = px + (400-px)*0.42;
          const chipY = py + (215-py)*0.42;

          // Hero: 4 face-up cards; others: face-down fan
          const heroCardW=33, heroCardH=48, heroGap=5;
          const heroTotalW = 4*heroCardW + 3*heroGap;
          const heroCardX = px - heroTotalW/2;
          const heroCardY = py - R - 7 - heroCardH;

          // Robin showdown cards (face-up)
          const rCardW=16, rCardH=24, rGap=3;
          const rTotalW = 4*rCardW + 3*rGap;
          const rCardX = px - rTotalW/2;
          const rCardY = py - R - 6 - rCardH;

          return (
            <g key={name} opacity={op}>
              {state.betChip&&!isFolded&&<BetChip x={chipX} y={chipY}/>}

              {/* Cards */}
              {isHero ? (
                <g>
                  {HERO_CARDS.map((c,i)=>(
                    <Card key={i}
                      x={heroCardX+i*(heroCardW+heroGap)} y={heroCardY}
                      w={heroCardW} h={heroCardH}
                      rank={c.rank} suit={c.suit} red={c.red}
                      glow={isShowdown&&c.used}
                      dimmed={isShowdown&&!c.used}
                    />
                  ))}
                  {/* USED label under first 2 cards */}
                  {isShowdown&&(
                    <g>
                      <text x={heroCardX+(heroCardW+heroGap)*0.5+heroCardW/2} y={heroCardY+heroCardH+11}
                        textAnchor="middle" fontSize={7.5} fill="#fbbf24" fontFamily="Arial,sans-serif" fontWeight="bold">USED</text>
                      <text x={heroCardX+(heroCardW+heroGap)*2.5+heroCardW/2} y={heroCardY+heroCardH+11}
                        textAnchor="middle" fontSize={7.5} fill="#6b7280" fontFamily="Arial,sans-serif">UNUSED</text>
                    </g>
                  )}
                </g>
              ) : name==="robin" && isShowdown ? (
                <g>
                  {ROBIN_CARDS.map((c,i)=>(
                    <Card key={i}
                      x={rCardX+i*(rCardW+rGap)} y={rCardY}
                      w={rCardW} h={rCardH}
                      rank={c.rank} suit={c.suit} red={c.red}
                      glow={c.used} dimmed={!c.used}
                    />
                  ))}
                </g>
              ) : !isFolded ? (
                <FaceDownFan cx={px} cy={py} r={R}/>
              ) : null}

              {/* Player circle */}
              <circle cx={px} cy={py} r={R} fill={color}
                stroke={state.action==="win"?"#fbbf24":"white"}
                strokeWidth={state.action==="win"?3:isHero?3:2}/>
              {isHero&&<circle cx={px} cy={py} r={R+4} fill="none" stroke="#fbbf24"
                strokeWidth={1.5} strokeDasharray="4 3" opacity={0.6}/>}
              <text x={px} y={py+5} textAnchor="middle" fontSize={isHero?15:12}
                fontWeight="bold" fill="white" fontFamily="Arial,sans-serif">{name[0].toUpperCase()}</text>

              {/* Name tag */}
              <rect x={px-28} y={py+R+5} width={56} height={isHero?34:22} rx={4} fill="rgba(0,0,0,0.8)"/>
              <text x={px} y={py+R+17} textAnchor="middle" fontSize={9.5} fill="white"
                fontFamily="Arial,sans-serif" fontWeight="bold">
                {name[0].toUpperCase()+name.slice(1)}
              </text>
              {isHero&&<text x={px} y={py+R+29} textAnchor="middle" fontSize={8.5} fill="#fbbf24"
                fontFamily="Arial,sans-serif">(You)</text>}

              {/* Badges */}
              {isSB&&<g><circle cx={px+R+2} cy={py-R+2} r={10} fill="#3b82f6" stroke="white" strokeWidth={1.5}/>
                <text x={px+R+2} y={py-R+6} textAnchor="middle" fontSize={7.5} fontWeight="bold" fill="white" fontFamily="Arial,sans-serif">SB</text></g>}
              {isBB&&<g><circle cx={px+R+2} cy={py-R+2} r={10} fill="#7c3aed" stroke="white" strokeWidth={1.5}/>
                <text x={px+R+2} y={py-R+6} textAnchor="middle" fontSize={7.5} fontWeight="bold" fill="white" fontFamily="Arial,sans-serif">BB</text></g>}
              {isDealer&&<g><circle cx={px-R-2} cy={py-R+2} r={9} fill="white" stroke="#6b7280" strokeWidth={1.5}/>
                <text x={px-R-2} y={py-R+6} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#111" fontFamily="Arial,sans-serif">D</text></g>}

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

        {/* Bottom: showdown hand panel OR narrative bar */}
        {isShowdown ? <ShowdownHandPanel/> : (
          <g>
            <rect x={0} y={468} width={W} height={92} fill="rgba(0,0,0,0.75)"/>
            <text x={16} y={484} fontSize={9} fill="#6b7280" fontFamily="Arial,sans-serif">베팅 진행</text>
            <foreignObject x={16} y={488} width={W-32} height={64}>
              <div xmlns="http://www.w3.org/1999/xhtml"
                style={{fontSize:"11px",color:"#e5e7eb",fontFamily:"Arial,sans-serif",
                  lineHeight:"1.4",whiteSpace:"normal",overflow:"hidden"}}>
                {cfg.narrative}
              </div>
            </foreignObject>
          </g>
        )}
      </svg>
    </div>
  );
}
