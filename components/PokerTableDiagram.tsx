"use client";

type Stage = "blinds" | "preflop" | "flop" | "turn" | "river" | "showdown";

interface Props {
  stage: Stage;
}

const COMMUNITY_CARDS = [
  { rank: "A", suit: "♠", red: false },
  { rank: "K", suit: "♥", red: true },
  { rank: "8", suit: "♦", red: true },
  { rank: "3", suit: "♣", red: false },
  { rank: "7", suit: "♠", red: false },
];
const HERO_CARDS    = [{ rank: "3", suit: "♠", red: false }, { rank: "8", suit: "♥", red: true }];
const OPPONENT_SHOW = [{ rank: "A", suit: "♦", red: true  }, { rank: "Q", suit: "♣", red: false }];

/* ── 팟 성장 데이터 ─────────────────────────────── */
interface PotStep { stage: Stage; label: string; added: string; total: string; }
const POT_STEPS: PotStep[] = [
  { stage: "blinds",   label: "블라인드",  added: "+$0.03", total: "$0.03" },
  { stage: "preflop",  label: "프리플랍",  added: "+$0.05", total: "$0.08" },
  { stage: "flop",     label: "플랍",      added: "+$0.12", total: "$0.20" },
  { stage: "turn",     label: "턴",        added: "+$0.20", total: "$0.40" },
  { stage: "river",    label: "리버",      added: "+$0.28", total: "$0.68" },
  { stage: "showdown", label: "쇼다운",    added: "—",      total: "$0.68" },
];
const RAKE = { pct: "5%", amount: "$0.03", net: "$0.65" };

const STAGE_ORDER: Stage[] = ["blinds", "preflop", "flop", "turn", "river", "showdown"];

/* ── 스테이지 설정 ───────────────────────────────── */
const STAGE_CFG: Record<Stage, {
  community: number; heroFaceUp: boolean; newCard: number;
  showdown: boolean; narrative: string;
}> = {
  blinds:   { community: 0, heroFaceUp: false, newCard: -1, showdown: false,
    narrative: "Chris SB $0.01 · Dana BB $0.02 포스팅 → 홀 카드 배분 대기" },
  preflop:  { community: 0, heroFaceUp: true,  newCard: -1, showdown: false,
    narrative: "UTG부터 시계방향 → Sam 콜 $0.02 · Lee 폴드 · Alex 폴드 · Robin 콜 $0.02 · Chris 콜 $0.02 · Dana 체크" },
  flop:     { community: 3, heroFaceUp: true,  newCard: 2,  showdown: false,
    narrative: "Chris 체크 · Dana 체크 · Sam 체크 · Robin 벳 $0.06 → Chris 폴드 · Dana 폴드 · Sam 콜 $0.06" },
  turn:     { community: 4, heroFaceUp: true,  newCard: 3,  showdown: false,
    narrative: "Sam 체크 · Robin 벳 $0.10 · Sam 콜 $0.10" },
  river:    { community: 5, heroFaceUp: true,  newCard: 4,  showdown: false,
    narrative: "Sam 체크 · Robin 벳 $0.14 · Sam 콜 $0.14 → 쇼다운" },
  showdown: { community: 5, heroFaceUp: true,  newCard: -1, showdown: true,
    narrative: "Sam 투페어(8·8·3·3) 승리! 레이크 $0.03 차감 후 $0.65 수령" },
};

const STAGE_LABEL: Record<Stage, string> = {
  blinds:   "STEP 1 — 블라인드",
  preflop:  "STEP 2 — 프리플랍",
  flop:     "STEP 3 — 플랍",
  turn:     "STEP 4 — 턴",
  river:    "STEP 5 — 리버",
  showdown: "STEP 6 — 쇼다운",
};

type ActionType = "fold"|"call"|"check"|"bet"|"raise"|"blind_sb"|"blind_bb"|"win"|"lose"|"wait"|"";
interface PlayerState { action: ActionType; amount?: string; folded: boolean; betChip?: boolean; }

const GAME_STATE: Record<Stage, Record<string, PlayerState>> = {
  blinds:  {
    alex:{action:"wait",folded:false}, robin:{action:"wait",folded:false},
    chris:{action:"blind_sb",amount:"$0.01",folded:false,betChip:true},
    dana:{action:"blind_bb",amount:"$0.02",folded:false,betChip:true},
    lee:{action:"wait",folded:false}, sam:{action:"wait",folded:false},
  },
  preflop: {
    alex:{action:"fold",folded:true}, robin:{action:"call",amount:"$0.02",folded:false,betChip:true},
    chris:{action:"call",amount:"$0.02",folded:false,betChip:true},
    dana:{action:"check",folded:false}, lee:{action:"fold",folded:true},
    sam:{action:"call",amount:"$0.02",folded:false,betChip:true},
  },
  flop:    {
    alex:{action:"",folded:true}, robin:{action:"bet",amount:"$0.06",folded:false,betChip:true},
    chris:{action:"fold",folded:true}, dana:{action:"fold",folded:true},
    lee:{action:"",folded:true}, sam:{action:"call",amount:"$0.06",folded:false,betChip:true},
  },
  turn:    {
    alex:{action:"",folded:true}, robin:{action:"bet",amount:"$0.10",folded:false,betChip:true},
    chris:{action:"",folded:true}, dana:{action:"",folded:true},
    lee:{action:"",folded:true}, sam:{action:"call",amount:"$0.10",folded:false,betChip:true},
  },
  river:   {
    alex:{action:"",folded:true}, robin:{action:"bet",amount:"$0.14",folded:false,betChip:true},
    chris:{action:"",folded:true}, dana:{action:"",folded:true},
    lee:{action:"",folded:true}, sam:{action:"call",amount:"$0.14",folded:false,betChip:true},
  },
  showdown:{
    alex:{action:"",folded:true}, robin:{action:"lose",folded:false},
    chris:{action:"",folded:true}, dana:{action:"",folded:true},
    lee:{action:"",folded:true}, sam:{action:"win",folded:false},
  },
};

const ACTION_STYLE: Record<ActionType,{bg:string;text:string;label:string}> = {
  "":        {bg:"transparent",text:"#9ca3af",label:""},
  wait:      {bg:"#374151",text:"#9ca3af",label:"대기"},
  fold:      {bg:"#4b5563",text:"#d1d5db",label:"FOLD"},
  call:      {bg:"#15803d",text:"#bbf7d0",label:"CALL"},
  check:     {bg:"#1d4ed8",text:"#bfdbfe",label:"CHECK"},
  bet:       {bg:"#b45309",text:"#fde68a",label:"BET"},
  raise:     {bg:"#b91c1c",text:"#fecaca",label:"RAISE"},
  blind_sb:  {bg:"#1e40af",text:"#bfdbfe",label:"SB"},
  blind_bb:  {bg:"#6d28d9",text:"#e9d5ff",label:"BB"},
  win:       {bg:"#92400e",text:"#fef3c7",label:"WINNER"},
  lose:      {bg:"#374151",text:"#9ca3af",label:"LOSE"},
};

/* ── 서브 컴포넌트들 ─────────────────────────────── */
function PlayingCard({x,y,w=44,h=62,rank="",suit="",red=false,faceDown=false,highlight=false,newCard=false}:{
  x:number;y:number;w?:number;h?:number;rank?:string;suit?:string;red?:boolean;
  faceDown?:boolean;highlight?:boolean;newCard?:boolean;
}) {
  if (faceDown) return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={5} fill="#1e3a8a" stroke="#3b82f6" strokeWidth={1.5}/>
      <rect x={x+4} y={y+4} width={w-8} height={h-8} rx={3} fill="#1e40af" stroke="#60a5fa" strokeWidth={0.5}/>
      <line x1={x+4} y1={y+4} x2={x+w-4} y2={y+h-4} stroke="#2563eb" strokeWidth={0.5} opacity={0.4}/>
      <line x1={x+w-4} y1={y+4} x2={x+4} y2={y+h-4} stroke="#2563eb" strokeWidth={0.5} opacity={0.4}/>
    </g>
  );
  const fc = red?"#dc2626":"#111827";
  return (
    <g>
      {highlight&&<rect x={x-4} y={y-4} width={w+8} height={h+8} rx={8} fill="#fbbf24" opacity={0.45}/>}
      {newCard&&<rect x={x-3} y={y-3} width={w+6} height={h+6} rx={7} fill="none" stroke="#f59e0b" strokeWidth={2} strokeDasharray="3 2"/>}
      <rect x={x} y={y} width={w} height={h} rx={5} fill="white" stroke="#d1d5db" strokeWidth={1}/>
      <text x={x+5} y={y+16} fontSize={13} fontWeight="bold" fill={fc} fontFamily="Georgia,serif">{rank}</text>
      <text x={x+5} y={y+30} fontSize={12} fill={fc} fontFamily="Georgia,serif">{suit}</text>
      <text x={x+w-5} y={y+h-5} fontSize={13} fontWeight="bold" fill={fc} textAnchor="end" fontFamily="Georgia,serif"
        transform={`rotate(180,${x+w-5},${y+h-5})`}>{rank}</text>
    </g>
  );
}

function ActionBadge({x,y,type,amount}:{x:number;y:number;type:ActionType;amount?:string}) {
  if(!type||type==="") return null;
  const s = ACTION_STYLE[type];
  const lbl = amount?`${s.label} ${amount}`:s.label;
  const bw = Math.max(lbl.length*6.5+12,50);
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

function BetChipStack({x,y}:{x:number;y:number}) {
  return (
    <g opacity={0.9}>
      <ellipse cx={x} cy={y}   rx={8} ry={3.5} fill="#ef4444" stroke="white" strokeWidth={0.8}/>
      <ellipse cx={x} cy={y-4} rx={8} ry={3.5} fill="#3b82f6" stroke="white" strokeWidth={0.8}/>
      <ellipse cx={x} cy={y-8} rx={8} ry={3.5} fill="#22c55e" stroke="white" strokeWidth={0.8}/>
    </g>
  );
}

function PlayerSeat({x,y,label,color,isHero=false,heroFaceUp=false,isDealer=false,badge,state,showOpponentCards=false}:{
  x:number;y:number;label:string;color:string;isHero?:boolean;heroFaceUp?:boolean;
  isDealer?:boolean;badge?:"SB"|"BB";state:PlayerState;showOpponentCards?:boolean;
}) {
  const R=isHero?26:20, cW=isHero?40:24, cH=isHero?57:34, gap=5;
  const totalW=cW*2+gap, cardY=y-cH-R-6, cardX=x-totalW/2;
  const isFolded=state.folded, op=isFolded?0.32:1;
  const chipX=x+(400-x)*0.42, chipY=y+(215-y)*0.42;
  return (
    <g opacity={op}>
      {state.betChip&&!isFolded&&<BetChipStack x={chipX} y={chipY}/>}
      {(heroFaceUp&&isHero)||showOpponentCards ? (
        <g>
          <PlayingCard x={cardX} y={cardY} w={cW} h={cH}
            rank={showOpponentCards?OPPONENT_SHOW[0].rank:HERO_CARDS[0].rank}
            suit={showOpponentCards?OPPONENT_SHOW[0].suit:HERO_CARDS[0].suit}
            red={showOpponentCards?OPPONENT_SHOW[0].red:HERO_CARDS[0].red}
            highlight={isHero&&state.action==="win"}/>
          <PlayingCard x={cardX+cW+gap} y={cardY} w={cW} h={cH}
            rank={showOpponentCards?OPPONENT_SHOW[1].rank:HERO_CARDS[1].rank}
            suit={showOpponentCards?OPPONENT_SHOW[1].suit:HERO_CARDS[1].suit}
            red={showOpponentCards?OPPONENT_SHOW[1].red:HERO_CARDS[1].red}
            highlight={isHero&&state.action==="win"}/>
        </g>
      ) : (!isFolded&&(
        <g>
          <PlayingCard x={cardX} y={cardY} w={cW} h={cH} faceDown/>
          <PlayingCard x={cardX+cW+gap} y={cardY} w={cW} h={cH} faceDown/>
        </g>
      ))}
      <circle cx={x} cy={y} r={R} fill={color} stroke={state.action==="win"?"#fbbf24":"white"}
        strokeWidth={state.action==="win"?3:isHero?3:2}/>
      {isHero&&<circle cx={x} cy={y} r={R+4} fill="none" stroke="#fbbf24" strokeWidth={1.5} strokeDasharray="4 3" opacity={0.6}/>}
      <text x={x} y={y+5} textAnchor="middle" fontSize={isHero?16:13} fontWeight="bold" fill="white" fontFamily="Arial,sans-serif">{label[0]}</text>
      <rect x={x-30} y={y+R+5} width={60} height={isHero?34:24} rx={4} fill="rgba(0,0,0,0.8)"/>
      <text x={x} y={y+R+18} textAnchor="middle" fontSize={10} fill="white" fontFamily="Arial,sans-serif" fontWeight="bold">{label}</text>
      {isHero&&<text x={x} y={y+R+30} textAnchor="middle" fontSize={9} fill="#fbbf24" fontFamily="Arial,sans-serif">(You)</text>}
      {state.action&&state.action!=="wait"&&(
        <ActionBadge x={x} y={y+R+(isHero?52:40)} type={state.action} amount={state.amount}/>
      )}
      {badge&&(
        <g>
          <circle cx={x+R+2} cy={y-R+2} r={11} fill={badge==="SB"?"#3b82f6":"#7c3aed"} stroke="white" strokeWidth={1.5}/>
          <text x={x+R+2} y={y-R+6} textAnchor="middle" fontSize={8} fontWeight="bold" fill="white" fontFamily="Arial,sans-serif">{badge}</text>
        </g>
      )}
      {isDealer&&(
        <g>
          <circle cx={x-R-2} cy={y-R+2} r={10} fill="white" stroke="#6b7280" strokeWidth={1.5}/>
          <text x={x-R-2} y={y-R+6} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#111" fontFamily="Arial,sans-serif">D</text>
        </g>
      )}
    </g>
  );
}

/* ── 팟 성장 패널 ─────────────────────────────────── */
function PotPanel({stage}:{stage:Stage}) {
  const currentIdx = STAGE_ORDER.indexOf(stage);
  const isShowdown = stage === "showdown";
  const panelX = 570, panelY = 10, panelW = 222, rowH = 18;
  const visibleSteps = POT_STEPS.slice(0, currentIdx + 1);

  return (
    <g>
      {/* Panel background */}
      <rect x={panelX} y={panelY} width={panelW} height={isShowdown ? 148 : 26 + visibleSteps.length * rowH + 10}
        rx={8} fill="rgba(0,0,0,0.75)" stroke="rgba(251,191,36,0.25)" strokeWidth={1}/>

      {/* Header */}
      <text x={panelX+10} y={panelY+17} fontSize={10} fontWeight="bold" fill="#fbbf24" fontFamily="Arial,sans-serif">
        팟(POT) 현황
      </text>

      {/* Rows */}
      {visibleSteps.map((ps, i) => {
        const isCurrent = ps.stage === stage;
        const ry = panelY + 26 + i * rowH;
        return (
          <g key={ps.stage}>
            {isCurrent && <rect x={panelX+4} y={ry-2} width={panelW-8} height={rowH} rx={3} fill="rgba(251,191,36,0.12)"/>}
            <text x={panelX+10} y={ry+11} fontSize={9.5} fill={isCurrent?"#fbbf24":"#9ca3af"} fontFamily="Arial,sans-serif">
              {ps.label}
            </text>
            <text x={panelX+72} y={ry+11} fontSize={9} fill={isCurrent?"#86efac":"#6b7280"} fontFamily="Arial,sans-serif">
              {ps.added}
            </text>
            <text x={panelX+panelW-10} y={ry+11} fontSize={9.5} fontWeight={isCurrent?"bold":"normal"}
              fill={isCurrent?"#fff":"#9ca3af"} textAnchor="end" fontFamily="Arial,sans-serif">
              {ps.total}
            </text>
          </g>
        );
      })}

      {/* Rake breakdown at showdown */}
      {isShowdown && (
        <g>
          <line x1={panelX+8} y1={panelY+132} x2={panelX+panelW-8} y2={panelY+132}
            stroke="#4b5563" strokeWidth={0.8}/>
          {/* Rake row */}
          <rect x={panelX+4} y={panelY+134} width={panelW-8} height={16} rx={3} fill="rgba(239,68,68,0.1)"/>
          <text x={panelX+10} y={panelY+145} fontSize={9.5} fill="#f87171" fontFamily="Arial,sans-serif">레이크 {RAKE.pct}</text>
          <text x={panelX+panelW-10} y={panelY+145} fontSize={9.5} fill="#f87171" textAnchor="end" fontFamily="Arial,sans-serif">
            -{RAKE.amount}
          </text>
          {/* Winner receives */}
          <rect x={panelX+4} y={panelY+134+18} width={panelW-8} height={16} rx={3} fill="rgba(251,191,36,0.15)"/>
          <text x={panelX+10} y={panelY+145+18} fontSize={9.5} fontWeight="bold" fill="#fbbf24" fontFamily="Arial,sans-serif">
            Sam 수령
          </text>
          <text x={panelX+panelW-10} y={panelY+145+18} fontSize={9.5} fontWeight="bold" fill="#fbbf24"
            textAnchor="end" fontFamily="Arial,sans-serif">{RAKE.net}</text>
        </g>
      )}
    </g>
  );
}

/* ── 메인 컴포넌트 ───────────────────────────────── */
export default function PokerTableDiagram({stage}:Props) {
  const cfg = STAGE_CFG[stage];
  const gs  = GAME_STATE[stage];
  const W=800, H=468;

  const cardW=44,cardH=62,cardGap=10;
  const totalCW=5*cardW+4*cardGap;
  const cardsX=(W-totalCW)/2, cardsY=205-cardH/2;

  const POS:{[k:string]:[number,number,string]}={
    alex: [185,90, "#1d4ed8"], robin:[400,52, "#b91c1c"],
    chris:[615,90, "#15803d"], dana: [710,262,"#7c3aed"],
    sam:  [400,368,"#d97706"], lee:  [90, 262,"#0f766e"],
  };

  return (
    <div className="w-full rounded-xl overflow-hidden" style={{background:"#0a180a"}}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{display:"block"}}
        role="img"
        aria-label={`텍사스 홀덤 ${STAGE_LABEL[stage]} 팟·레이크 포함 게임 상황 다이어그램`}>

        <rect width={W} height={H} fill="#0a180a"/>

        {/* Table */}
        <ellipse cx={400} cy={215} rx={345} ry={185} fill="#3d1f05" stroke="#5c3009" strokeWidth={5}/>
        <ellipse cx={400} cy={215} rx={325} ry={168} fill="#166534"/>
        <ellipse cx={400} cy={205} rx={290} ry={140} fill="none" stroke="#15803d" strokeWidth={1} opacity={0.45}/>

        {/* Community card zone */}
        <rect x={cardsX-18} y={cardsY-18} width={totalCW+36} height={cardH+34} rx={10} fill="rgba(0,0,0,0.28)"/>
        <text x={400} y={cardsY-24} textAnchor="middle" fontSize={8.5} fill="#6b7280" fontFamily="Arial,sans-serif" letterSpacing="1">
          COMMUNITY CARDS
        </text>

        {/* Community cards */}
        {Array.from({length:5}).map((_,i)=>{
          const cx=cardsX+i*(cardW+cardGap);
          if(i<cfg.community){
            const c=COMMUNITY_CARDS[i];
            return <PlayingCard key={i} x={cx} y={cardsY} w={cardW} h={cardH}
              rank={c.rank} suit={c.suit} red={c.red} newCard={i===cfg.newCard}/>;
          }
          if(stage!=="blinds"&&stage!=="preflop")
            return <PlayingCard key={i} x={cx} y={cardsY} w={cardW} h={cardH} faceDown/>;
          return null;
        })}

        {/* POT chips + label */}
        <g>
          <ellipse cx={400} cy={162} rx={32} ry={14} fill="rgba(0,0,0,0.5)"/>
          <ellipse cx={392} cy={161} rx={9} ry={4} fill="#ef4444" stroke="white" strokeWidth={0.8}/>
          <ellipse cx={392} cy={157} rx={9} ry={4} fill="#3b82f6" stroke="white" strokeWidth={0.8}/>
          <ellipse cx={408} cy={161} rx={9} ry={4} fill="#22c55e" stroke="white" strokeWidth={0.8}/>
          <ellipse cx={408} cy={157} rx={9} ry={4} fill="#f59e0b" stroke="white" strokeWidth={0.8}/>
          <ellipse cx={400} cy={154} rx={9} ry={4} fill="#8b5cf6" stroke="white" strokeWidth={0.8}/>
          <rect x={368} y={143} width={64} height={17} rx={4} fill="rgba(0,0,0,0.75)"/>
          <text x={400} y={155.5} textAnchor="middle" fontSize={10} fill="#fbbf24"
            fontFamily="Arial,sans-serif" fontWeight="bold">
            POT {POT_STEPS[STAGE_ORDER.indexOf(stage)].total}
          </text>
        </g>

        {/* Hold em NL */}
        <rect x={305} y={268} width={190} height={20} rx={5} fill="rgba(0,0,0,0.55)"/>
        <text x={400} y={282} textAnchor="middle" fontSize={10} fill="#9ca3af" fontFamily="Arial,sans-serif">
          Hold'em NL · Blinds 0.01/0.02
        </text>

        {/* Players */}
        <PlayerSeat x={POS.alex[0]} y={POS.alex[1]} label="Alex" color={POS.alex[2]}
          heroFaceUp={cfg.heroFaceUp} state={gs.alex}/>
        <PlayerSeat x={POS.robin[0]} y={POS.robin[1]} label="Robin" color={POS.robin[2]}
          isDealer heroFaceUp={cfg.heroFaceUp} state={gs.robin} showOpponentCards={cfg.showdown}/>
        <PlayerSeat x={POS.chris[0]} y={POS.chris[1]} label="Chris" color={POS.chris[2]}
          badge="SB" heroFaceUp={cfg.heroFaceUp} state={gs.chris}/>
        <PlayerSeat x={POS.dana[0]} y={POS.dana[1]} label="Dana" color={POS.dana[2]}
          badge="BB" heroFaceUp={cfg.heroFaceUp} state={gs.dana}/>
        <PlayerSeat x={POS.sam[0]} y={POS.sam[1]} label="Sam" color={POS.sam[2]}
          isHero heroFaceUp={cfg.heroFaceUp} state={gs.sam}/>
        <PlayerSeat x={POS.lee[0]} y={POS.lee[1]} label="Lee" color={POS.lee[2]}
          heroFaceUp={cfg.heroFaceUp} state={gs.lee}/>

        {/* Winner glow */}
        {cfg.showdown&&(
          <ellipse cx={POS.sam[0]} cy={POS.sam[1]} rx={34} ry={34}
            fill="none" stroke="#fbbf24" strokeWidth={3} opacity={0.6}>
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
          </ellipse>
        )}

        {/* Pot panel (top-right) */}
        <PotPanel stage={stage}/>

        {/* Stage label (top-left) */}
        <rect x={10} y={10} width={190} height={26} rx={6} fill="rgba(0,0,0,0.72)"/>
        <text x={20} y={28} fontSize={12} fontWeight="bold" fill="#fbbf24" fontFamily="Arial,sans-serif">
          {STAGE_LABEL[stage]}
        </text>

        {/* Narrative bar */}
        <rect x={0} y={416} width={W} height={52} fill="rgba(0,0,0,0.75)"/>
        <text x={16} y={432} fontSize={9.5} fill="#6b7280" fontFamily="Arial,sans-serif">베팅 진행</text>
        <foreignObject x={16} y={436} width={W-32} height={26}>
          <div xmlns="http://www.w3.org/1999/xhtml"
            style={{fontSize:"11px",color:"#e5e7eb",fontFamily:"Arial,sans-serif",
              lineHeight:"1.4",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>
            {cfg.narrative}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
