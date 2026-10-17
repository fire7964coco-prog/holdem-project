"use client";

import Link from "next/link";
import { SOLVER_FAQ_IT } from "./faq";

/**
 * ★CTA는 `?lang=it`으로 보낸다(솔버 it 라이브 S-104 · 10-17). UTM은 붙이지 않는다(기존 관례).
 */
const SOLVER_URL = "https://solver.holdemmaster.com/?lang=it";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/it/solver` 랜딩 — ★2026-10-17 신설 (16번째 · 마스터 = `app/en/solver/solver-client.tsx`)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ▶ 키워드 = `docs/keyword-bank/it-tools.md` §1·§6 (DFS 2380 · it): gto poker 480 · solver poker 90 ·
 *   poker solver 70 · gto solver 40 · solver poker gratis 30. «solver poker» SERP에 이탈리아어 원문 페이지 0.
 * 🔴 용어 = `docs/translation-terms-it.md` — Solver·GTO 영어 유지(risolutore 금지) · Range · Piatto · Board · Stack effettivo ·
 *   Fold·Check 영어 · 버튼 Punta/Chiama/Rilancia ↔ 명사 Puntata/Call/Rilancio · tu체 · 숫자 1.755 · 2,5 · 0,35%.
 *   본체 산문은 «game tree»를 영어로 둘 수 있지만, 솔버 화면 라벨을 인용하는 자리는 솔버 글자(albero di gioco)로 쓴다.
 * 🔴 솔버 화면 라벨 = 솔버 it 소스 축어(`docs/solver-app-verbatim-it-2026-10-17.md`).
 * 🔴 카니발: 프리플랍 오픈 레인지 = `/it/hand-chart` · 확률·equity·ICM = `/it/calculator` · 이 페이지 = 포스트플랍 GTO 계산만.
 * 🔴 it에는 GTO 예제 글·equity·c-bet·strategy 글이 없다 → SPOT_GROUPS slug 비움 ·
 *   EN equity 링크 = `/it/glossary` · c-bet 링크 = `/it/blog/holdem-betting-actions` · strategy 링크 = `/it/blog/texas-holdem-rules-for-beginners`
 *   (내부링크 개수 = EN과 같은 11 · translation-link-structure-equals-en).
 * 🔴 수치·판정 근거 = EN 주석과 같다(스펙 §4-B · §13 산수 검산은 EN 파일 머리 주석) — 값은 바꾸지 않고 구분자만 이탈리아식.
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC: [string, string][] = [
  ["Prezzo", "Gratis — tutte le funzioni, senza limiti di utilizzo"],
  ["Installazione", "Nessuna — gira nel browser (WebAssembly)"],
  ["Account", "Non serve (con l’accesso sincronizzi lo storico di Esempi e Sfida del giorno · i tuoi spot calcolati e il loro storico di allenamento restano su questo dispositivo)"],
  ["Ambito", "Postflop, heads-up (flop, turn, river)"],
  ["Dove calcola", "Sulla tua CPU, non su un server"],
  ["Piattaforme", "Qualsiasi browser moderno — Windows, macOS, Linux, smartphone"],
  ["Motore", "WASM Postflop open source (AGPL-3.0) · codice modificato pubblicato"],
];

/** 「무엇을 원하나 → 어느 도구」 — 내부 역할 분리(라벨 = 각 it 도구 HubPage title · side-rail 축어). */
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["Calcolare uno spot postflop e vedere le frequenze di puntata", "Il solver GTO di questa pagina", null],
  ["Vedere quali mani aprire da ogni posizione", "Tabella delle mani iniziali", "/it/hand-chart"],
  ["Calcolare outs, pot odds, SPR o ICM", "Calcolatore poker", "/it/calculator"],
  ["Allenare le tue stime di equity", "Quiz poker", "/it/win-rate-quiz"],
];

/** 사용법 — 앱 사이드바 탭 라벨을 그대로 쓴다(솔버 it 축어). */
const STEPS = [
  { n: "①", title: "Range OOP", desc: "Colora il range preflop del giocatore fuori posizione sulla griglia 13×13, oppure scrivilo: 22+, A2s+, KTo+. Sulla griglia, sulla diagonale ci sono le coppie servite, in alto a destra le mani suited, in basso a sinistra le offsuit." },
  { n: "②", title: "Range IP", desc: "Fai lo stesso per il giocatore in posizione. Il modo più rapido è caricare un esempio e modificarne i range invece di costruirli entrambi da zero." },
  { n: "③", title: "Board", desc: "Clicca tre carte del flop o premi «Flop casuale». Puoi anche fissare turn e river se vuoi studiare un runout preciso." },
  { n: "④", title: "Dimensioni di puntata", desc: "Imposta il piatto iniziale, lo stack effettivo e le dimensioni di puntata e di rilancio per ogni street. Al primo calcolo lascia i valori predefiniti e controlla solo piatto e stack." },
  { n: "⑤", title: "Avvia solver", desc: "Premi «Crea albero», poi «Avvia solver» quando l’albero è pronto. Sul tuo computer servono da pochi secondi a qualche minuto; quando appare «Calcolo completato!», apri la scheda «Risultati» in alto." },
];

/** 앱 도움말이 초심자에게 그대로 복사해 쓰라고 주는 레인지(축어 — 입력 문법은 번역하지 않는다). */
const STARTER_RANGES: [string, string][] = [
  ["OOP — BB che chiama", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP — BTN che apre", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

/** 결과 화면 읽는 법 — 앱 도움말의 구역 구분을 그대로 옮겼다. */
const READ_SCREEN: string[][] = [
  ["Striscia in alto", "Selettore della linea d’azione (flop → puntata → call → turn)", "Clicca un nodo per saltare alla strategia in quel punto"],
  ["Matrice 13×13 (a sinistra)", "Una cella per mano; la divisione dei colori all’interno mostra le frequenze delle azioni", "Rosso = puntata o rilancio (più scuro = più grande), verde = check o call, una cella spenta non è nel range"],
  ["Riquadri (in alto a destra)", "Frequenze delle azioni e numero di combo su tutto il range", "È qui che leggi «qui il range fa check il 98%»"],
  ["Categorie di mani (al centro a destra)", "Come il range si collega al board — top pair, progetti, nessun punto", "Una lettura veloce di quale giocatore è favorito da questo board"],
  ["Tabella (in basso a destra)", "Per ogni mano: peso, equity, EV ed EQR più le % delle azioni", "Clicca l’intestazione di una colonna per ordinare; il riepilogo si esporta in CSV"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES: [string, "yes" | "no", string][] = [
  ["Calcolo di flop, turn e river", "yes", "Albero postflop completo"],
  ["Calcolo del preflop", "no", "I range di apertura sono nella tabella delle mani iniziali"],
  ["Dimensioni di puntata e di rilancio personalizzate", "yes", "% del piatto, multipli, all-in, geometriche"],
  ["Sizing separato per la donk bet (lead)", "yes", "Progetta a parte la linea in cui OOP punta per primo"],
  ["Rake e rake cap", "yes", "Ricrea le condizioni del tuo tavolo reale"],
  ["Modifica dell’albero di gioco per nodo", "yes", "Aggiungi o togli azioni in un nodo preciso"],
  ["Node locking con ricalcolo", "yes", "Fissa le frequenze delle azioni in un nodo e ricalcola"],
  ["Modalità di precisione e memoria", "yes", "Float a 32 bit o intero a 16 bit · limite del browser circa 4 GB"],
  ["Exploitability obiettivo", "yes", "Più bassa = più precisa e più lenta"],
  ["Salvataggio di range e impostazioni", "yes", "Salva, carica, importa ed esporta"],
  ["Esportazione del riepilogo in CSV", "yes", "Direttamente in un foglio di calcolo"],
  ["Condivisione di uno spot con un link", "yes", "Manda lo spot esatto al tuo gruppo di studio"],
  ["Esempi già calcolati", "yes", "Nessuna attesa — le soluzioni compaiono subito"],
  ["Studio dei flop — strategie del flop precalcolate", "yes", "Scegli spot, posizioni e flop e la griglia compare senza attesa · solo flop · dimensioni di puntata fisse (flop 33% / 75%, rilancio 60%)"],
  ["Statistiche flop — strategia media per gruppo di board", "yes", "1.755 flop pesati per frequenza · prima decisione e dopo un check · raggruppati per carta più alta, semi, coppie sul board, connessione · dimensioni di puntata fisse"],
  ["Trainer GTO con valutazione in base all’EV loss", "yes", "Con filtri per i punti deboli e una coda di Ripasso"],
  ["Allenamento RNG nel Trainer GTO", "yes", "Un numero da 1 a 100 a ogni mano · l’azione nell’intervallo di quel numero è «Scelta migliore» · High/Low · spento di default · non usato nel Sfida del giorno né in «I miei spot»"],
  ["Allenamento sui tuoi spot calcolati", "yes", "Un clic nella schermata dei risultati lo salva come domande del trainer · solo su questo dispositivo"],
];

/**
 * 외부 도구 비교 — ⚠ 가격·무료 티어 수치는 넣지 않는다(§12-B).
 * 🔴 «PioSOLVER는 유료»라고 쓰지 마라 — 공식 문서에 무료 버전 안내가 있다. 확인된 것은 설치형·윈도우뿐이다.
 */
const COMPARE: string[][] = [
  ["Come calcola", "Calcola nel browser, quando vuoi tu", "Soprattutto consulti soluzioni calcolate in anticipo", "Calcola in locale dopo l’installazione"],
  ["Installazione", "Nessuna", "Nessuna", "Installer, Windows"],
  ["Copertura", "Postflop, heads-up", "Spesso include il preflop", "Soprattutto postflop (alcune versioni aggiungono il preflop)"],
  ["Modifica di range e alberi", "Come vuoi", "Soprattutto dentro le soluzioni pubblicate; alcuni servizi aggiungono il calcolo personalizzato", "Come vuoi"],
  ["Dove gira il calcolo", "Sul tuo computer", "Sui computer del fornitore", "Sul tuo computer"],
];

/**
 * 교육 예제 — 이름·그룹·조건 줄 = 앱 it 라벨 축어(presets.ts titleIt·categoryIt · 축어 문서). 해설(note)은 EN 랜딩의 정정본(스펙 §4-B 수치)을 옮긴 것이다 — 앱 문구가 아니다.
 * 🔴 개수를 문장에 박지 않는다 — 아래 배열에서 세어 쓴다.
 * 🪶 it 해설 글이 발행되면 그 행에 `slug`를 채운다(없는 링크를 미리 걸지 않는다).
 * 🔴 note 정정 경위(M-038 RP-01·03·04 · M-042 RP-17 · M-045 RP-19 · M-046 E-4 · M-067)는 EN 파일 주석이 정본이다.
 *    폐기된 옛 명제(«콜러에게 유리한 보드» · «SPR이 낮아서 작게» · «통째로 빗나간다» · «체크레이즈를 많이 한다»)로 되돌리지 마라.
 */
const SPOT_GROUPS: { label: string; cond: string; items: { board: string; name: string; note: string; slug?: string }[] }[] = [
  {
    label: "Piatto con un rilancio — BTN vs BB (fondamenti)",
    cond: "OOP: BB (call) · IP: BTN (apertura) · Piatto 5,5bb · Stack 97,5bb",
    items: [
      { board: "A♥7♦2♣", name: "Board A-high dry", note: "Il flop da manuale del vantaggio di range: l’asso colpisce in pieno il range di chi ha aperto" },
      { board: "K♠8♦3♣", name: "Board K-high dry", note: "Favorisce ancora chi ha aperto, ma i check aumentano. Confrontalo con l’asso" },
      { board: "Q♠J♦T♠", name: "Board broadway connesso, two-tone", note: "Sembra colpire entrambi i range, ma il BB è quello che realizza meno equity di tutta la serie — 77,9% contro il 119,4% del BTN — e fa check il 99,9%" },
      { board: "9♥8♥7♣", name: "Board medio connesso, two-tone", note: "Il board da piatto con un rilancio su cui il BB punta per primo più spesso: il 23,7% delle volte (sul monotone Q♠9♠2♠ è l’11,2%), eppure il vantaggio di range resta al BTN — 48,5% di equity contro 51,5%" },
      { board: "Q♠9♠2♠", name: "Board monotone (un solo seme)", note: "Le puntate grandi lasciano spazio a puntate piccole e check — anche i colori già chiusi fanno spesso check" },
      { board: "6♣6♦3♥", name: "Board pairato", note: "Nessuno dei due range si collega, quindi la quota di bluff sale" },
      { board: "6♠5♥2♦", name: "Board basso rainbow", note: "Una guerra di overcard — lo spot per progettare il check-raise: sullo schermo la prima azione del BB è check al 96,8% e puntata al 3,2%" },
    ],
  },
  {
    label: "Piatto 3-bet — BB fa 3-bet, BTN chiama (SPR basso)",
    cond: "OOP: BB (3-bet) · IP: BTN (call) · Piatto 22,5bb · Stack 89bb · SPR ≈ 4,0",
    items: [
      { board: "A♦K♠2♥", name: "Board A-high: vantaggio a chi fa 3-bet", note: "Il miglior flop che il range di 3-bet possa vedere — pieno di AK, AA e KK. Ciò che permette a una puntata piccola di mettere sotto pressione tutto il range è la forma di quel range, non lo SPR basso" },
      { board: "Q♥T♥7♠", name: "Board dinamico two-tone", note: "Due progetti vivi — il 98,4% del range spara la stessa puntata da due terzi" },
      { board: "8♦5♣2♠", name: "Board basso dry", note: "Qui il range di 3-bet non floppa nessuna top pair — oltre alle overpair e alla coppia di cinque di A5s, il resto è quasi tutto gutshot e backdoor — eppure le overpair continuano a mettere pressione" },
    ],
  },
  {
    label: "Scontro tra bui — SB vs BB (range ampi)",
    cond: "OOP: SB (apertura) · IP: BB (call) · Piatto 6bb · Stack 97bb",
    items: [
      { board: "K♥T♦6♠", name: "Board K-high con un dieci", note: "Range larghi, quindi entrambi i giocatori sono deboli — confrontalo con la versione BTN" },
      { board: "7♦6♦5♣", name: "Board basso connesso, two-tone", note: "Due range larghi su un board super connesso: doppie coppie e progetti ovunque" },
      { board: "A♠A♥6♦", name: "Board con coppia di assi", note: "Qui i tris non sono rari — semplicemente il SB ne ha di più (88 combo contro le 66 del BB), ed è per questo che il SB punta l’80,1%" },
    ],
  },
];

const SPOT_TOTAL = SPOT_GROUPS.reduce((n, g) => n + g.items.length, 0);

/* ── 공통 조각 ───────────────────────────────────────────────────────── */

function Cta({ label, variant = "solid" }: { label: string; variant?: "solid" | "outline" }) {
  const base = "inline-block rounded-xl px-8 py-3 font-bold transition-opacity";
  return (
    <a
      href={SOLVER_URL}
      target="_blank"
      rel="noopener"
      className={
        variant === "solid"
          ? `${base} bg-primary text-lg text-primary-foreground hover:opacity-90`
          : `${base} border border-primary text-primary hover:bg-primary hover:text-primary-foreground`
      }
    >
      {label}
    </a>
  );
}

/** 표는 전부 가로 스크롤 컨테이너에 넣는다 — 모바일에서 페이지 자체가 밀리지 않게. */
function Table({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            {head.map((h) => (
              <th key={h} className="py-2 pr-4 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/50 align-top">
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "py-2 pr-4 font-medium" : "py-2 pr-4 text-muted-foreground"}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SolverClientIt({ reviews }: { reviews?: React.ReactNode } = {}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      <section className="mt-6">
        <h1 className="text-center text-2xl font-bold">
          Solver GTO gratis per il poker — calcola gli spot nel browser
        </h1>
        <p className="mt-3 text-muted-foreground">
          Un <strong className="text-foreground">solver GTO</strong> prende i range dei due giocatori, il
          board e gli stack, e calcola con che frequenza ciascuna delle 169 mani iniziali dovrebbe
          puntare, fare check o foldare. Il solver di HoldemMaster fa questo calcolo{" "}
          <strong className="text-foreground">nel tuo browser — niente da scaricare, nessun account,
          nessuna versione a pagamento</strong> — e accanto alla griglia della strategia mostra equity,
          EV e realizzazione dell’equity di ogni mano. Copre il gioco postflop heads-up.
        </p>
        <div className="mt-5 text-center">
          <Cta label="Apri il solver →" />
          <p className="mt-2 text-xs text-muted-foreground">
            Consigliamo Chrome da computer — su iOS e Safari il calcolo usa un solo thread, quindi gli
            spot personalizzati sono più lenti
          </p>
        </div>
        <Table head={["", "Dettagli"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── 솔버란 ───────────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Cos’è un solver GTO?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Un solver GTO calcola da zero la strategia{" "}
          <strong className="text-foreground">game theory optimal</strong>. Gli dai range, board, stack
          e un albero di dimensioni di puntata, e il solver itera verso un equilibrio di Nash, restituendo
          le frequenze di puntata, check e fold per tutte le 169 mani. È questa la differenza tra un
          solver e una tabella: la tabella conserva una risposta che qualcuno ha trovato prima, il
          solver calcola la risposta per lo spot esatto in cui ti trovi.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Non è una tabella, e non è un trainer con dentro le opinioni di qualcuno. Dagli un flop
          diverso e ti darà una risposta diversa, perché ricalcola invece di ricordare.
        </p>
        {/* «nomi diversi» 문단 — 뱅크 §6: solver poker 90 · poker solver 70 · gto poker 480 · gto solver 40. */}
        <p className="mt-3 text-sm text-muted-foreground">
          Lo stesso strumento ha più nomi. <strong className="text-foreground">Solver poker</strong>,
          poker solver, solver GTO e <strong className="text-foreground">solver postflop</strong>{" "}
          indicano tutti questo tipo di programma, e chi cerca «GTO poker» spesso vuole proprio questi
          numeri; il risultato a volte viene chiamato anche chart GTO. Cambia solo la
          parola cercata — quello che calcola il solver di questa pagina è la stessa cosa.
        </p>
        <Table
          head={["Cosa vuoi fare", "Strumento da usare"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
      </section>

      {/* ── GTO 뜻 (SERP «gto poker» 정의 의도 6/10) ─────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Cosa significa GTO nel poker?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTO sta per <strong className="text-foreground">Game Theory Optimal</strong>: una strategia
          ottimale secondo la teoria dei giochi — ottimale è la strategia, non la teoria. È una
          strategia che sul lungo periodo non si può sfruttare, comunque si adatti l’altro giocatore.
          È una base, non un massimo: non cerca di punire un avversario scarso, fa in modo che uno
          bravo non possa punire te.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          La proprietà che sorprende di più è che{" "}
          <strong className="text-foreground">la GTO mescola le azioni con la stessa mano</strong>:
          punta il 70% delle volte e fa check il 30% — così la tua linea non si legge. Il risultato
          è quindi una tabella di frequenze, non un’istruzione unica. Un solver ti dice{" "}
          <em>quanto spesso</em> fare una cosa, non <em>quale</em> fare, ed è per questo che una
          sessione di studio finisce con delle percentuali e non con delle regole.
        </p>
      </section>

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Come si usa un solver di poker? Cinque passaggi</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Se è il tuo primo solver, <strong className="text-foreground">apri un esempio prima di
          impostare qualsiasi cosa.</strong> Gli esempi sono già calcolati, quindi impari a leggere il
          risultato prima di imparare a impostare i parametri. Quando costruisci il tuo spot, le schede
          vanno in ordine lungo la barra laterale a sinistra.
        </p>
        <ol className="mt-4 space-y-4">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {s.n}
              </span>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          Negli spot personalizzati i valori sono fiches intere arbitrarie. Per ragionare in big blind
          usa <strong className="text-foreground">10 fiches = 1bb</strong> (un piatto di 55 è 5,5bb).
          Gli esempi e il trainer convertono automaticamente su questa scala.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Costruire entrambi i range da zero è la strada lenta. I range di apertura per posizione sono
          nella{" "}
          <Link href="/it/hand-chart" className="font-semibold text-primary hover:underline">
            tabella delle mani iniziali
          </Link>
          . I due range qui sotto sono un’altra cosa:{" "}
          <strong className="text-foreground">quelli che usano gli esempi del «Piatto con un rilancio»</strong>{" "}
          (BTN vs BB), pronti da incollare in ① e ②.
        </p>
        <Table head={["Incolla in", "Range"]} rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])} />
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Come si legge la schermata dei risultati?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {/* EN M-046 E-3: 상단1 + 매트릭스1 + 우측3 = 다섯 · READ_SCREEN 5행. «quattro»로 되돌리지 마라. */}
          La schermata dei risultati ha cinque zone di lavoro: il{" "}
          <strong className="text-foreground">selettore della linea</strong> in alto, la{" "}
          <strong className="text-foreground">matrice di strategia 13×13</strong> a sinistra e, a
          destra, <strong className="text-foreground">riquadri delle frequenze, categorie di mani e
          tabella di dettaglio</strong>. Leggi la parte sinistra per cosa fa una singola mano e la
          parte destra per cosa fa il range nel suo insieme.
        </p>
        <Table head={["Dove", "Cosa contiene", "Come leggerlo"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          Un esempio concreto: apri il primo esempio (A♥7♦2♣ rainbow, il BB parla per primo) e i
          riquadri mostrano <strong className="text-foreground">Check 98,2%</strong> su 455,5 combo,
          con la puntata da 1,8bb all’1,0% e quella da 4,1bb allo 0,9%. La riga di riepilogo della
          tabella mostra tutto il range a 464,0 combo, 45,1% di equity, 2,09bb di EV e{" "}
          <strong className="text-foreground">84,0% di EQR</strong>. Una realizzazione dell’equity
          sotto il 100% è il numero a cui fare attenzione: questo range ha il 45,1% di equity ma, giocando
          fuori posizione e senza l’iniziativa, ne incassa solo l’84% del valore.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Se questi termini sono nuovi, i{" "}
          <Link href="/it/glossary" className="font-semibold text-primary hover:underline">
            termini del poker
          </Link>{" "}
          (equity, outs) e la guida alle{" "}
          <Link href="/it/blog/holdem-betting-actions" className="font-semibold text-primary hover:underline">
            azioni di puntata
          </Link>{" "}
          spiegano cosa misura il solver prima che tu provi a leggerne i numeri.
        </p>
      </section>

      {/* ── 무료 범위 (기능표) ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">È davvero un solver di poker gratis?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sì, e senza i soliti asterischi: nessun metodo di pagamento, nessuna funzione bloccata,
          nessun limite giornaliero di calcoli e nessun account. Le impostazioni che ti aspetteresti
          da un solver desktop installato — rake e rake cap, modalità di precisione, modifica
          dell’albero di gioco nodo per nodo — ci sono tutte. Il limite principale è che questo
          solver è <strong className="text-foreground">postflop e heads-up</strong>.
        </p>
        <Table
          head={["Funzione", "Inclusa", "Note"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span className="font-bold text-emerald-600">Sì</span>
            ) : (
              <span className="font-bold text-muted-foreground">No</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="Provalo gratis →" variant="outline" />
        </div>
      </section>

      {/* ── 포스트플랍 범위 ──────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Perché solo postflop — e cosa copre?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          È un <strong className="text-foreground">solver postflop</strong>: parte quando il flop è
          sul tavolo e calcola il resto della mano per due giocatori. Il preflop è lasciato fuori di
          proposito, perché i range preflop sono un problema di un altro tipo — abbastanza stabili da
          leggerli in una tabella, mentre il postflop cambia a ogni board.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Dentro quel confine non manca nulla. Imposti entrambi i{" "}
          <strong className="text-foreground">range postflop</strong>, qualsiasi flop, turn e river,
          il piatto iniziale e lo stack effettivo, e un albero completo di dimensioni di puntata per
          ogni street. Così la strategia postflop che ottieni è per il tuo tavolo, non una generica —
          rake compreso, che quasi tutto il materiale di studio ignora in silenzio.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Se ti serve la metà preflop, è nella{" "}
          <Link href="/it/hand-chart" className="font-semibold text-primary hover:underline">
            tabella delle mani iniziali
          </Link>
          . La tabella dà i range di apertura per posizione e il solver analizza il gioco dopo il flop
          — rispondere a un rilancio prima del flop (chiamare o fare 3-bet) richiede range a parte,
          che la tabella di apertura non copre.
        </p>
      </section>

      {/* ── GTO 트레이너 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          Esiste un GTO trainer gratis? Come ti valuta?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sì — il «Trainer GTO» è dentro lo stesso software gratuito, senza registrazioni a parte.
          Trasforma gli spot calcolati in esercizio: ricevi una mano in un vero punto di decisione,
          scegli un’azione e il trainer ti valuta.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          La valutazione non è giusto o sbagliato, ma in base all’{" "}
          <strong className="text-foreground">EV loss rispetto al piatto</strong>. Siccome la GTO
          mescola le azioni, scegliere l’opzione a frequenza più bassa non è per forza un errore —
          conta quanto valore atteso ha lasciato sul tavolo la tua scelta. Scegli un’azione e il
          trainer mostra frequenza ed EV di ogni azione insieme al costo della tua.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/* 🔴 팟 대비 비율이다 — 절대 bb가 아니다(앱 2026-08-15 변경 · EN 주석). */}
          <li className="text-muted-foreground">
            Le soglie si misurano <strong className="text-foreground">rispetto al piatto</strong> —{" "}
            <span className="font-semibold text-emerald-500">fino allo 0,35%</span> è «Scelta migliore» ·{" "}
            <span className="font-semibold text-blue-500">fino all’1%</span> è «Accettabile» ·{" "}
            <span className="font-semibold text-orange-500">oltre</span> è «Da rivedere»
          </li>
          <li className="text-muted-foreground">
            Gli stessi 0,08bb sono l’1,45% in un piatto da 5,5bb (da rivedere) e lo 0,36% in uno da
            22,5bb (accettabile). In un piatto con un rilancio da 5,5bb le soglie scendono a 0,02bb e
            0,055bb; in un piatto 3-bet da 22,5bb, circa a 0,079bb e 0,225bb — quindi 0,08bb sta
            appena oltre la linea della scelta migliore. I minimi di 0,02bb e 0,05bb tengono la
            valutazione sopra il rumore del solver
          </li>
          <li className="text-muted-foreground">
            Le domande vengono da diversi punti di decisione dentro ogni spot, quindi le combinazioni{" "}
            <strong className="text-foreground">superano le diecimila</strong> (exploitability
            obiettivo 0,5%), e puoi allenare a parte piatti con un rilancio, piatti 3-bet o scontri tra bui
          </li>
          <li className="text-muted-foreground">
            Le mani arrivano <strong className="text-foreground">in proporzione ai pesi reali del
            range GTO</strong> — una mano esce tanto spesso quanto l’avresti davvero in quel punto
          </li>
          <li className="text-muted-foreground">
            Serie, analisi dei punti deboli e una coda di <strong className="text-foreground">Ripasso</strong>{" "}
            degli spot in cui hai perso EV si basano sul tuo storico di allenamento. Con l’accesso lo
            storico di Esempi e Sfida del giorno si sincronizza tra i dispositivi; la serie di giorni del
            Sfida del giorno e il segno di completamento restano su ogni dispositivo. I tuoi spot calcolati
            e il loro storico di allenamento restano su questo dispositivo anche dopo l’accesso
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="Apri il Trainer GTO →" variant="outline" />
        </div>
      </section>

      {/* ── 교육 예제 (이름 = 앱 it 라벨) ────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          {SPOT_TOTAL} esempi già calcolati da aprire subito
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Ogni spot qui sotto è già calcolato, quindi la strategia compare nel momento in cui lo apri
          — nessuna attesa, nessuna impostazione. I range approssimano il gioco online standard a
          100bb; caricane uno, cambia un range e ricalcola per vedere cosa si è mosso. È il modo più
          rapido per farti un’idea di come la texture del board riscrive la strategia.
        </p>
        {SPOT_GROUPS.map((g) => (
          <div key={g.label} className="mt-5">
            <p className="text-sm font-semibold">{g.label}</p>
            <p className="text-xs text-muted-foreground">{g.cond}</p>
            <ul className="mt-2 space-y-1.5">
              {g.items.map((item) => (
                <li key={item.board} className="text-sm">
                  <span className="font-semibold">{item.board}</span>
                  <span className="mx-1.5 text-muted-foreground">·</span>
                  {item.slug ? (
                    <Link
                      href={`/it/blog/${item.slug}`}
                      className="font-semibold text-primary hover:underline"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className="font-medium">{item.name}</span>
                  )}{" "}
                  <span className="text-muted-foreground">— {item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* ── 외부 도구 비교 ───────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">In cosa è diverso da GTO Wizard o PioSOLVER?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Si chiamano tutti solver, ma si distinguono per dove e quando avviene il calcolo. Le librerie di
          soluzioni come GTO Wizard servono soprattutto a consultare spot calcolati in anticipo: sono
          veloci e possono includere il preflop (GTO Wizard offre anche il calcolo personalizzato). I
          solver desktop come PioSOLVER si installano su un computer Windows e calcolano in locale.
          Il solver di HoldemMaster{" "}
          <strong className="text-foreground">calcola quando vuoi tu, dentro il browser</strong>,
          quindi range e alberi li riscrivi tu senza installare nulla.
        </p>
        <Table
          head={["", "Solver HoldemMaster", "Libreria di soluzioni", "Solver desktop installato"]}
          rows={COMPARE}
        />
        {/* 근거 = wasm-postflop.pages.dev 자기 고지 축어 + GitHub «[Development suspended]»(EN 주석). */}
        <p className="mt-4 text-sm text-muted-foreground">
          Un’ultima distinzione utile se hai cercato{" "}
          <strong className="text-foreground">WASM Postflop</strong>: il progetto open source
          originale annuncia sul proprio sito che non sarà più aggiornato, e il suo repository è
          segnato come sviluppo sospeso. Questo solver è un fork mantenuto di quel motore — stessa
          licenza AGPL-3.0, stesso codice pubblicato, con l’interfaccia, gli esempi e il trainer
          aggiunti sopra.
        </p>
      </section>

      {/* ── 함께 쓰면 좋은 도구 ──────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Strumenti da usare insieme al solver</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/it/hand-chart" className="font-semibold text-primary hover:underline">
              Tabella delle mani iniziali
            </Link>{" "}
            {/* EN M-046 E-2: 차트에는 붙여넣기 문자열이 없고 값도 갈린다 — 두 출처를 갈라 적는다. */}
            — questo solver è solo postflop. Quali mani <strong>aprire</strong> da ogni posizione lo
            trovi nella tabella. I range pronti da incollare qui sopra sono un’altra cosa — i range
            BTN vs BB che usano gli esempi del «Piatto con un rilancio»
          </li>
          <li>
            <Link href="/it/calculator" className="font-semibold text-primary hover:underline">
              Calcolatore poker
            </Link>{" "}
            — outs, pot odds, SPR, M e ICM quando ti serve un numero senza avviare un calcolo
          </li>
          <li>
            <Link href="/it/win-rate-quiz" className="font-semibold text-primary hover:underline">
              Quiz poker
            </Link>{" "}
            — i risultati del solver sono soprattutto equity, quindi affinare prima le tue stime di
            equity rende la schermata dei risultati molto più facile da leggere
          </li>
          <li>
            <Link href="/it/blog/texas-holdem-rules-for-beginners" className="font-semibold text-primary hover:underline">
              Regole del Texas Hold’em per principianti
            </Link>{" "}
            — posizione, bui, ordine di gioco e prima strategia: le basi che il solver dà per scontate
          </li>
        </ul>
      </section>

      {/* ── 써 본 사람들(솔버 후기창 · FAQ 바로 위) ── */}
      {reviews}

      {/* ── FAQ — 배열은 `./faq.ts` 단일 출처(서버 FAQPage 스키마와 공유) · 본문에도 전부 렌더 ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Domande frequenti</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_IT.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">D. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">R. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 설치 안내 + 오픈소스 고지 (AGPL) ─────────────── */}
      <section className="mt-12 text-center">
        <Cta label="Avvia il solver GTO gratis →" />
        {/* 🔴 «오프라인으로 GTO 계산 가능»이라고 쓰지 마라 — 오프라인은 예제 열람·트레이너만(엔진 한 번 받은 뒤 계산). */}
        <p className="mt-3 text-xs text-muted-foreground">
          Aggiungilo alla schermata Home e gli esempi e il trainer restano salvati sul dispositivo,
          così puoi allenarti <strong className="text-foreground">senza connessione a internet</strong> —
          Chrome ed Edge mostrano un’icona di installazione nella barra degli indirizzi; su iPhone usa
          Condividi → Aggiungi alla schermata Home.
        </p>
      </section>
      <p className="mt-8 text-xs text-muted-foreground">
        Questo solver si basa su WASM Postflop di Wataru Inariba (AGPL-3.0), localizzato e migliorato
        da HoldemMaster. Il codice sorgente modificato completo è pubblicato con la stessa licenza.
      </p>
    </div>
  );
}
