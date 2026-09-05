"use client";

import Link from "next/link";
import { SOLVER_FAQ_PT } from "./faq";

/**
 * ★CTA는 `?lang=pt`로 보낸다. 솔버가 이 파라미터를 읽어 로케일을 기억한다.
 *   **2026-08-23 라이브 확인** — `?lang=pt`로 열면 `<html lang="pt">`가 되고 화면 전체가
 *   포르투갈어로 뜬다(Playwright DOM 실측). ko·en·ja·es 랜딩과 같이 **UTM은 붙이지 않는다**.
 *   ⚠ `curl`로는 확인할 수 없다 — SSR 초기 HTML이 한국어이고 타이틀은 JS 실행 후 바뀐다.
 */
const SOLVER_URL = "https://solver.holdemmaster.com/?lang=pt";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/pt/solver` 랜딩 — ★2026-08-23 신설
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ▶ 하는 일: 솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색 노출은 이 랜딩이 받아
 *   본체로 흘려보낸다 — **포르투갈어권에 그 진입로가 0개였다.**
 *   대상은 **pt-BR(브라질)**이고 측정도 전부 `location_name: "Brazil"`이다.
 *
 * ▶ 키워드 근거 (2026-08-23 실측 · DataForSEO Labs + 라쿠 `search-volume-history`.
 *   판정 전체는 `docs/keyword-bank/pt-gto-solver.md`)
 *     **`range poker`/`poker range` 590 · SD 2**(이 판 최대이자 최저 난이도) ·
 *     **`gto poker`/`poker gto`/`gto in poker` 590 · SD 9** · **`solver poker` 170 · SD 17** ·
 *     `range de mãos poker` 210 · `tabela de range poker` 110 · `poker solver` 50 ·
 *     `range de poker` 50 · `o que é gto no poker` 30 · `o que é range no poker` 20 ·
 *     `solver poker gratuito` 20 · `ranges de poker` 70(12개월 **+18%**)
 *   🟢 **두 벤더가 볼륨에서 일치했다** — 라쿠 대 DataForSEO **5/5**(es 6/6에 이은 두 번째 교차 검증).
 *   🪶 인접(경쟁 브랜드 · 직접 조준 금지): `gto wizard` **6,600**(es 2,900의 2.3배) ·
 *      `gto wizard poker` 140 · `piosolver` 140 · `maos de poker` 3,600 · `texas holdem` 5,400
 *
 * ▶ SERP 실측으로 잡은 «이길 자리» (2026-08-23 · DataForSEO SERP API · google.com.br)
 *   ① 🟢🟢 **`range poker`(590) top-10이 «전부 프리플랍»이다 — 플랍 이후 레인지를 다루는 페이지가 0개다.**
 *      freebetrange · pokerbrasil.com.br(**em cada posição**) · reglife.com.br · Google Play ·
 *      gipsyteam.com.br(**Poker Range Chart, as famosas tabelas**) · reddit · pokerstars ·
 *      dmcreditos.com.br · youtube ×2 — 전부 프리플랍 표다. **es와 같은 구조의 빈자리다.**
 *      🪶 PAA는 딴소리다(`Como chama quando faz 4 gols?`=축구 · `Qual poker Neymar joga?` ·
 *         `O que a Bíblia diz sobre poker?`) — **구글이 이 쿼리의 의도를 아직 못 잡았다.**
 *         다만 `O que é reg poker?` 하나는 진짜 포커 질문이라 FAQ로 흡수했다.
 *   ② 🔴 **`solver poker`(170) top-10에 «지금 바로 돌아가는» 무료 솔버가 0개다.**
 *      gtowizard(구독) · Google Play · App Store · solvers.poker(리뷰) · reddit ·
 *      br.pokernews(도구 리뷰) · youtube · gipsyteam · piosolver(설치형) · pokerstrategy(리뷰).
 *      **PAA 축어**: **`O que é um Solver?`** · `Qual o segredo do poker?` ·
 *      `Porque 7 e 2 é a pior mão do poker?` · `O que a Bíblia diz sobre poker?`
 *   ③ `gto poker`(590)는 설명 글이 지배하고 도구는 `instagto.com` 하나다.
 *      🪶 **브라질은 매체형 경쟁자가 많고 도구형이 적다** — pokerbrasil · reglife · gipsyteam ·
 *         superpoker · dmcreditos · br.pokernews. es(스페인 브랜드가 굳어 있음)와 지형이 다르다.
 *
 * 🔴🔴 **`solver`를 단독으로 쓰지 마라 — 브라질에서 «Excel 솔버»다.**
 *   `o que é solver`는 **110 · SD 0**으로 이 판에서 가장 «쉬운» 값이 나온다. **함정이다.**
 *   SERP top-10 **8/8이 엑셀**: `support.microsoft.com`(1위 · Definir e resolver um problema
 *   usando o Solver) · `nomus.com.br` · youtube(Excel SOLVER tool) · 대학 PDF(SOLVER(EXCEL):
 *   MANUAL DE REFERÊNCIA) · `sos.com.br` · `dicio.com.br`(사전) · `hashtagtreinamentos.com`.
 *   PAA도 `Onde acho o Solver no Excel?`이다.
 *   → **제목·H1·H2에서 반드시 `poker`와 붙여 쓴다.**
 *   🪶 **es와 규율은 같고 이유가 다르다** — es는 `GTO`가 과나후아토 주 코드였다. **pt에서 `GTO`는
 *      깨끗하다**(수확물 189개 중 오염 0건). **es 주석을 그대로 옮기면 엉뚱한 단어를 지킨다.**
 *
 * 🔴 **`solver de poker`는 볼륨이 0이다.** `solver poker` 170 · `poker solver` 50인데
 *   전치사형(`solver de poker`·`solver de poker gratis`·`solver poker grátis`)은 데이터가 없다.
 *   **앱 타이틀이 「Solver de poker GTO grátis」라고 해서 그것이 검색어인 것은 아니다** —
 *   제품명과 쿼리는 다른 층이다. 산문은 `de`를 넣어 읽히게 쓰고, 아래 「여러 이름」 문단에서
 *   `solver poker`를 축어로 한 번만 놓는다.
 *   🪶 무료 수식어는 `grátis`가 아니라 **`gratuito`** 쪽에만 값이 잡힌다(20 대 0).
 *
 * 🔴 **`postflop`·`pós-flop`·`pos flop`이 전부 볼륨 0이다 — es와 여기서 갈린다.**
 *   es는 `postflop`을 조준축으로 삼았지만 **브라질은 그 말을 안 친다.**
 *   개념은 「depois do flop」으로 쓰되 **키워드로 조준하지 않는다.**
 *   살아 있는 것은 `flop turn river` **260 · SD 6**이다.
 *
 * 🔴 **악센트가 볼륨을 가르고 방향이 일정하지 않다** — `poker gratis` **1,000** 대
 *   `poker grátis` 210(무악센트 4.8배)인데, `estratégia de poker` **30** 대 무악센트 20으로
 *   **반대로 가는 줄도 있다**(`o que é gto no poker` 30 대 무악센트 **0**).
 *   → 🟢 **본문은 정서법을 지킨다**(`grátis`·`mãos`). 철자를 틀려 얻는 것보다 잃는 것이 크다.
 *      무악센트형은 desc·tags에서 흡수한다. **「브라질은 무악센트로 친다」로 일반화하지 마라.**
 *
 * 🔴🔴 카니발 방지 — **pt 43편 전수 태그 grep. es와 소유 구도가 다르다.**
 *   · `app/pt/`에 있는 것은 **`blog`·`page.tsx`뿐이다.** `/pt/hand-chart`·`/pt/calculator`·
 *     **`/pt/tournaments`도 없다**(es에는 tournaments가 있다). → 링크는 전부 pt 블로그 글이고
 *     대상은 전건 `lib/posts-pt/<slug>.ts` 실존을 확인했다(11/11).
 *   · **프리플랍 표 = `pt/holdem-starting-hands-chart`가 소유**한다(`tabelas gto de preflop` 태그 +
 *     seoTitle 「Tabela de mãos iniciais」). `tabela de range poker`(110)·`tabela range poker`(40)·
 *     `range poker por posição`(30)이 **전부 그쪽 자리다.** 🔴 제목·H2에 쓰지 마라.
 *   · **`estratégia de poker`(30) 외 3형 = `pt/holdem-strategy`가 seoTitle+태그 4개로 소유**한다.
 *   · 🔴 **`calculadora de equity poker`를 `pt/holdem-equity`가 이미 태그로 갖고 있다 — es와 다르다.**
 *     `calculadora de poker`(170)·`calculadora de odds poker`(110)와 함께 계산기 축이므로 안 가져온다.
 *   🟢 미소유 확인: `range poker` 일반형 0편 · `solver` 0편 · `gto poker` 0편.
 *
 * ❌ **`simulador de poker`(70)를 조준하지 마라** — es 실측에서 의도가 «무료로 노는 게임»이었다.
 *   pt SERP는 아직 안 봤으므로 **의도 미확인**이다. 확인 전에는 안 쓴다(뱅크 §8-1).
 *
 * 🔴 사실 출처 — 전부 2026-08-23에 `?lang=pt`로 열어 DOM에서 직접 읽었다(축어):
 *   · 언어 셀렉터 **8개** `ko,en,ja,es,pt,de,zh,zh-hant`
 *   · 히어로 «Estratégia GTO, direto no seu navegador.» / «Nada para instalar, nada para pagar.»
 *   · 특징 4블록 «Grátis / Todos os recursos, sem limite de uso» · «Estudo offline» ·
 *     «Cálculo rápido / Multithread — velocidade de solver de desktop» ·
 *     «Treinador GTO / Jogue spots; sua nota vem da perda de EV **em relação ao pote**»
 *     🟢 **트레이너 문구가 이미 정정본이다** — es 화면은 아직 «pérdida de EV»뿐이라 §4-B로
 *        정정해 넣어야 했는데 **pt는 그 예외가 없다.** 08-22 솔버 배포가 pt에 반영됐다.
 *   · 사이드바 «① Range OOP ② Range IP ③ Board ④ Bet sizes ⑤ Calcular»
 *   · 네비 «Spots de estudo ⚡ Na hora» «Treinador GTO Nota EV» «Tabelas pré-flop Ranges» «Equity % de vitória»
 *   · PWA 버튼 «♠ Adicionar à tela» · 결과 패널 이름 «Mãos / Draws»
 *   · 그룹 조건 «Pote 5,5bb · Stack 97,5bb» / «Pote 22,5bb · Stack 89bb» / «Pote 6bb · Stack 97bb»
 *     🔴 **pt 앱은 소수 구분자로 «쉼표»를 쓴다** — es 앱은 마침표(`5.5bb`)였다.
 *        **언어마다 다르니 es 주석의 「앱은 마침표」를 pt로 옮기지 마라.**
 *     🪶 pt 3벳팟 조건에는 **SPR 표기가 없다**(es에는 «SPR ≈ 4,0»이 있다). 앱을 따라 우리도 안 쓴다.
 *   §13 산수 검산(ko·en·ja·es 랜딩과 동일 · 재검산 완료):
 *     SRP 팟 5.5 = 2.5+2.5+0.5, 스택 100−2.5 = 97.5 ·
 *     3벳팟 22.5 = 11+11+0.5, 100−11 = 89 ·
 *     블라인드전 6 = 3+3, 100−3 = 97 ·
 *     5.5×0.35% = 0.019 ≈ 0.02bb, 5.5×1% = 0.055 ≈ 0.06bb ·
 *     22.5×0.35% = 0.079 ≈ 0.08bb, 22.5×1% = 0.225 ≈ 0.23bb
 *
 * 🔴🔴 **앱 화면 문구를 «해설»로 쓰지 마라.** 판정 기준은 `docs/gto-solver-series-spec.md` §4-B다.
 *   🟢 **pt는 ③⑨⑬ 셋이 이미 앱에서 정정본이다** — ja·es와 다른 점이다. 그대로 옮겨도 된다.
 *      ③ «77,9% contra 119,4% … dá check em 99,9%» · ⑨ «não freia: 98,4% … os 0,8% que dão check» ·
 *      ⑬ «As trincas não são raras … 88 combos contra 66 do BB … o SB aposta 80,1%»
 *   🔴 **④ `9♥8♥7♣`만 아직 틀렸다** — 앱 pt 축어(2026-08-23 라이브):
 *      «A textura clássica que **favorece o caller**. A frequência de c-bet do BTN **despenca** —
 *       este spot mostra exatamente por que «sempre dar c-bet» é um erro.»
 *      ▸ 「favorece o caller」 = **시리즈가 이름까지 대며 폐기한 명제**다.
 *        KO ④ `holdem-donk-bet-strategy` 축어: 「**레인지 우위가 BB로 넘어간 것은 아니다** —
 *        에퀴티는 **48.5% 대 51.5%**로 여전히 BTN이 앞선다」 ·
 *        EN ④ FAQ 「Does the big blind have the advantage? → **No.**」
 *      ▸ 「c-bet do BTN despenca」 = **화면에서 확인 불가**(스팟은 플랍 첫 액션 = BB 차례에서 멈춘다).
 *      ▸ 「«sempre dar c-bet» é um erro」 절도 같은 이유로 **뺀다**(es가 먼저 뺐다).
 *      🔴 **이것이 검수장 M-035 결함 1·2이고 ja·es·pt 세 언어에서 확인됐다.**
 *         M-036에서 「④는 다음 통지에」라고 적어 뒀다 — **되돌리지 마라.**
 *
 * 🔴 **「오프라인으로 GTO 계산 가능」이라고 쓰지 마라 — 사실과 다르다.**
 *   오프라인에서 되는 것은 학습 스팟 열람과 트레이너 풀이뿐이고, 커스텀 스팟 직접 계산은
 *   계산 엔진을 한 번 내려받은 뒤에만 돈다(ko·en·ja·es 주석과 같은 경고).
 *
 * 🪶 **학습 스팟에 블로그 링크가 하나도 없다 — 이것이 정상이다.**
 *   GTO 시리즈 13편은 **ko·en에만 있고 pt에는 0편**이다(`lib/posts-pt/`에 해당 slug 0건).
 *   **없는 링크를 미리 걸지 마라 — 404는 색인에 남는다.** pt판이 발행되면 그때 `slug`를 채운다.
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC: [string, string][] = [
  ["Preço", "Grátis — todos os recursos, sem limite de uso"],
  ["Instalação", "Não precisa — roda no navegador (WebAssembly)"],
  ["Conta", "Não precisa (o login só sincroniza o histórico do Treinador)"],
  ["Alcance", "Depois do flop, heads-up (flop, turn e river)"],
  ["Onde o cálculo roda", "No seu aparelho, não em um servidor nosso"],
  ["Compatibilidade", "Navegadores modernos — Windows, macOS, Linux e celular"],
  // ★2026-08-24 갱신 — 앱이 fr을 배포해 셀렉터가 9개가 됐다(francês 추가).
  // ★2026-09-05 갱신 — 앱이 id·ms를 배포해 셀렉터가 11개가 됐다(라이브 실측 · ③ 마감 회차).
  ["Idioma", "Português (também em coreano, inglês, japonês, espanhol, alemão, francês, chinês, indonésio e malaio)"],
  ["Motor", "WASM Postflop de código aberto (AGPL-3.0) · fonte modificada publicada"],
];

/**
 * 「무엇을 원하나 → 어디로」 — 내부 역할 분리를 표로 못박아 카니발을 막는다.
 * 🔴 EN판은 `/en/hand-chart`·`/en/calculator`·`/en/win-rate-quiz`로 보내지만
 *    **pt에는 그 세 페이지가 없다**(es보다도 적어서 `/pt/tournaments`조차 없다).
 *    pt 블로그 글과 앱 내장 기능으로 보낸다.
 */
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["Calcular um spot específico depois do flop", "O solver desta página", null],
  ["Saber que mãos abrir em cada posição", "A tabela de mãos iniciais", "/pt/blog/holdem-starting-hands-chart"],
  ["Contar outs e calcular pot odds", "O guia de pot odds", "/pt/blog/holdem-pot-odds"],
  ["Ver só o percentual de vitória de uma mão", "O guia de equity", "/pt/blog/holdem-equity"],
];

/** 사용법 — 앱 사이드바 탭 라벨을 그대로 쓴다(2026-08-23 축어 실측). */
const STEPS = [
  { n: "①", title: "Range OOP", desc: "Pinte o range pré-flop do jogador fora de posição na grade 13×13, ou escreva direto em notação (22+, A2s+, KTo+). A diagonal são os pares servidos, acima à direita as mãos do mesmo naipe (AKs) e abaixo à esquerda as de naipes diferentes (AKo)." },
  { n: "②", title: "Range IP", desc: "Faça o mesmo com o jogador em posição. O atalho mais rápido não é montar os dois do zero, e sim carregar um spot de estudo e editar os ranges dele." },
  { n: "③", title: "Board", desc: "Clique nas três cartas do flop ou peça um flop aleatório. Se quiser estudar um run-out específico, dá para fixar o turn e o river também." },
  { n: "④", title: "Bet sizes", desc: "Defina o pote inicial, o stack efetivo e os tamanhos de aposta e aumento de cada street. Na primeira vez deixe os valores padrão e confira só o pote e o stack." },
  { n: "⑤", title: "Calcular", desc: "Monte a árvore e rode. O cálculo acontece na sua máquina e leva de alguns segundos a alguns minutos; quando terminar, abra a aba Resultados." },
];

/**
 * 앱 「Como usar」가 초심자에게 그대로 복사해 쓰라고 주는 레인지(축어 · 언어 불변).
 * 🔴 **자리 이름은 앱 pt 축어를 쓴다** — 앱이 `BB (caller)`·`BTN (open-raiser)`로 적는다.
 * 🔴 **이 레인지의 출처는 «학습 스팟»이지 프리플랍 표 글이 아니다.**
 *    (검수장 M-035 결함 3 = 귀속 오류. es에서 세 곳이나 걸렸다. **다시 만들지 마라.**)
 */
const STARTER_RANGES: [string, string][] = [
  ["OOP — BB (caller)", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP — BTN (open-raiser)", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

/**
 * 결과 화면 읽는 법.
 * 🔴 **행이 다섯이면 본문도 «다섯»이라고 쓴다.** ko·en·ja·es 네 랜딩이 전부 「네 구역」이라 적고
 *    다섯을 세고 있었다 — ✅ 2026-08-24 네 랜딩 전부 「다섯」으로 소급 완료(M-046 E-3).
 *    **pt에서 그 오류를 복제하지 않는다.**
 * 🪶 세 번째 패널의 이름은 앱 축어 «Mãos / Draws»다(스팟 해설이 그렇게 부른다).
 */
const READ_SCREEN: string[][] = [
  ["Barra de ações (topo)", "Move você pelos pontos da linha (flop → aposta → call → turn)", "Clique num nó para pular para a estratégia daquele ponto (nos spots de estudo só o flop está calculado)"],
  ["Matriz 13×13 (esquerda)", "Uma casa por mão; a divisão de cores dentro da casa é a frequência de cada ação", "Vermelho aposta ou aumenta (mais escuro = tamanho maior), verde dá check ou paga, casa clara = fora do range"],
  ["Frequências (canto superior direito)", "Frequência de ação do range inteiro e número de combos", "É aqui que você lê «em Q♠J♦T♠, este range dá check em 99,9% das vezes»"],
  ["Mãos / Draws (centro à direita)", "Como o range encaixa no board — top pair, draws, nada feito", "De relance você vê a qual jogador o board favorece"],
  ["Tabela de detalhes (canto inferior direito)", "Peso, equity, EV e realização de equity (EQR) mão a mão, com o % de cada ação", "Dá para ordenar por coluna, e o resumo sai em CSV"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES: [string, "yes" | "no", string][] = [
  ["Cálculo de flop, turn e river", "yes", "A árvore inteira depois do flop"],
  ["Cálculo do pré-flop", "no", "Os ranges de abertura estão na tabela de mãos iniciais"],
  ["Tamanhos de aposta e aumento livres", "yes", "% do pote, múltiplos, all-in e geométrico"],
  ["Tamanho separado para o donk bet", "yes", "Dá para desenhar à parte a linha em que o OOP aposta primeiro"],
  ["Rake e teto de rake", "yes", "Ajuste às condições da mesa que você joga"],
  ["Edição da árvore nó a nó", "yes", "Adicione ou tire ações num nó específico"],
  ["Modos de precisão e memória", "yes", "Ponto flutuante 32 bits / inteiro 16 bits · limite do navegador ≈ 4GB"],
  ["Exploitabilidade alvo", "yes", "Quanto mais baixa, mais preciso e mais lento"],
  ["Salvar ranges e configurações", "yes", "Salvar, carregar, importar e exportar"],
  ["Exportar o resumo em CSV", "yes", "Direto para a planilha"],
  ["Link para compartilhar um spot", "yes", "Mande o mesmo spot para o seu grupo de estudo"],
  ["Abrir spots de estudo já calculados", "yes", "O resultado aparece sem espera"],
  ["Treinador GTO com pontuação", "yes", "Com detalhamento dos pontos fracos e fila de revisão"],
];

/**
 * 외부 도구 비교 — ⚠ 가격·무료 티어 «수치»는 넣지 않는다(CLAUDE.md §12-B).
 * 🔴 **「PioSOLVER é pago」라고 쓰지 마라** — 그쪽 공식 문서에 무료 버전 안내가 있다.
 *    1차 출처로 확인된 것은 **설치형·주로 Windows**라는 사실뿐이다.
 */
const COMPARE: string[][] = [
  ["Como o cálculo acontece", "No navegador, na hora", "Consulta soluções já calculadas", "Instala e calcula na sua máquina"],
  ["Instalação", "Não precisa", "Não precisa", "Instalador, sobretudo no Windows"],
  ["Alcance", "Depois do flop, heads-up", "Muitas vezes inclui pré-flop", "Depende da edição"],
  ["Editar ranges e árvore", "Livremente", "Dentro do catálogo publicado", "Livremente"],
  ["Onde o cálculo roda", "No seu aparelho", "No provedor (pré-calculado)", "No seu aparelho"],
];

/**
 * 학습 예제 — 앱의 **포르투갈어 라벨·해설을 그대로 옮겼다**(2026-08-23 축어 실측).
 * 🔴 **개수를 문장에 박지 않는다** — 아래 배열에서 세어 쓴다(`SPOT_TOTAL`).
 * 🔴 **카드는 기억으로 적지 않는다** — 13개 보드는 라이브 화면에서 축어로 긁었다.
 * 🟢 **note 13개 중 12개가 앱 축어 그대로다** — pt 앱은 ③⑨⑬이 이미 정정본이라 ja·es와 달리
 *    고칠 것이 하나뿐이었다.
 * 🔴 **④만 §4-B 정정본이다**(위 파일 헤더의 M-035 항목 참조). **앱 문구로 되돌리지 마라.**
 * 🪶 `slug`가 하나도 없다 — GTO 시리즈 해설 13편이 **pt에는 아직 0편**이기 때문이다.
 *    pt판을 발행하면 그 행에 채운다. **없는 링크를 미리 걸지 않는다.**
 */
const SPOT_GROUPS = [
  {
    label: "Single Raised Pot — BTN vs BB (fundamentos)",
    cond: "OOP: BB (caller) · IP: BTN (open-raiser) · Pote 5,5bb · Stack 97,5bb",
    items: [
      // 🔴 M-046 P-2 정정(2026-08-24) — 「BB 체크 이후 BTN이 작은 C벳을 넓게 친다」는 화면이 주지 않는다
      //    (교육 예제는 플랍 첫 액션 = BB 차례에서 멈춘다 · KO ⑦ 239줄). 화면값(체크 98,2%)으로 교체.
      { board: "A♥7♦2♣", name: "Board seco A-high", note: "O spot clássico de vantagem de range — o ás acerta em cheio no range de quem abriu, e o BB dá check em 98,2%" },
      { board: "K♠8♦3♣", name: "Board seco K-high", note: "Também favorece o BTN, mas os checks aumentam um pouco — compare com o board A-high e tente dizer por quê" },
      // 🟢 앱 pt 축어가 이미 정정본이다(es는 앱이 «ambos rangos conectan fuerte»라 우리가 고쳐야 했다).
      //    §4-B ③: BB의 EQR 77.9%로 13스팟 최저, BTN 119.4%, BB 첫 액션 벳 0.1%(= 체크 99.9%).
      // 🔴 M-046 P-1 정정(2026-08-24) — 편 수 하드코딩 금지(RP-08). 「dos 13 spots」 → 「da série」.
      { board: "Q♠J♦T♠", name: "Board Broadway conectado, two-tone", note: "Um board que parece conectar com os dois ranges, mas o BB realiza menos equity aqui do que em qualquer outro spot da série — 77,9% contra 119,4% do BTN — e dá check em 99,9%" },
      // 🔴🔴 M-035 결함 1·2 정정 — 앱 pt는 아직 «favorece o caller … c-bet do BTN despenca»다.
      //    ▸ 「콜러 우위」는 **시리즈가 이름까지 대며 폐기한 명제**다(KO ④ `holdem-donk-bet-strategy`:
      //      「레인지 우위가 BB로 넘어간 것은 아니다 — 48.5% 대 51.5%」 · EN ④ FAQ 「→ No.」).
      //    ▸ 「BTN C벳 빈도」는 **화면에서 확인 불가**다 — 스팟은 플랍 첫 액션(BB 차례)에서 멈춘다.
      //    ▸ 「«sempre dar c-bet» é um erro」 절도 같은 이유로 뺐다(es가 먼저 뺐다).
      //    §4-B ④: OOP(BB) 첫 액션 벳 **23.7%**. ja·es·pt 세 언어에서 같은 결함을 확인했다.
      { board: "9♥8♥7♣", name: "Board médio conectado, two-tone", note: "O único board de pote simples em que o BB realmente lidera: ele aposta primeiro em 23,7% das vezes (a vantagem de range continua sendo do BTN — equity de 48,5% contra 51,5%)" },
      // 🔄 M-067 축어 재동기(2026-08-26) — 앱이 `190d293`에서 ⑤ lesson을 **완화형**으로 정정했다
      //    (구형 = «사라진다»형 → 신형 = «ficam raras» 형). 🔴 **구형 문자열은 주석에도 적지 마라** —
      //    검수장 회귀 앵커가 그 출현 수를 세고 «0 = 정정 반영»으로 읽는다. 화면값에 큰 벳이 3.2% 남아
      //    «사라진다»가 과장이었다(솔버 S-003 ③ · 검수장 S-007 라이브 md5 검증).
      //    🔴 이 자리는 **구형 완전 축어**였다 — 그래서 앱과 갈라지면 즉시 «축어 아님»이 된다.
      { board: "Q♠9♠2♠", name: "Board monotone", note: "As apostas grandes ficam raras e dão lugar a apostas pequenas e checks — repare com que frequência até um flush fechado só dá check" },
      { board: "6♣6♦3♥", name: "Board pareado", note: "Ninguém conecta com este board, então a proporção de blefes sobe — use a tabela de detalhes para achar quais mãos apostam como blefe" },
      // 🔴 M-045 RP-19 + M-046 P-3 정정(2026-08-24) — 결함이 한 문장에 둘이었다:
      //    ① 「BB가 체크레이즈를 아주 자주 한다」(구 문구)는 화면에 없는 값(KO ⑦ 239줄 · §4-B ⑦ = 체크 96,8 · 벳 3,2뿐)
      //    ② 「벳 다음의 상단 띠를 따라가 보라」는 화면이 주지 않는 것을 «보라»고 지시했다(교육 예제는 플랍 첫 액션에서 멈춘다).
      { board: "6♠5♥2♦", name: "Board baixo e rainbow", note: "Uma guerra de overcards. O spot para desenhar o check-raise — na tela, a primeira ação do BB é 96,8% de check e 3,2% de aposta" },
    ],
  },
  {
    label: "Pote de 3-bet — BB dá 3-bet e BTN paga (SPR baixo)",
    cond: "OOP: BB (3-bettor) · IP: BTN (caller) · Pote 22,5bb · Stack 89bb",
    items: [
      // 🔴 M-038 RP-03 정정(2026-08-23 · 신설 당일) — **앱 pt 축어를 그대로 옮겼다가 걸린 자리다.**
      //    작은 벳이 통하는 이유를 «SPR이 낮아서»로 돌리면 시리즈 ⑧이 폐기한 인과가 된다:
      //    「SPR이 똑같이 4.0인 ⑨는 큰 사이즈 98.4%, ⑩은 97.8%다. 사이즈를 정하는 것은
      //    스택 깊이가 아니라 레인지의 모양이다」(`lib/posts/3bet-pot-cbet.ts` 반박 문단).
      //    🪶 검수장 목록(M-038)에는 pt 행이 없었다 — **랜딩이 목록보다 하루 늦게 생겼기 때문**이고,
      //       발원지(EN)를 안 고치면 de·zh가 또 받는다는 그 경고가 pt에서 실제로 일어난 것이다.
      { board: "A♦K♠2♥", name: "Board A-high, vantagem do 3-bettor", note: "O melhor flop possível para o range de 3-bet — carregado de AK, AA e KK. O que faz uma aposta pequena apertar o range inteiro é o formato desse range, não o SPR baixo" },
      // 🟢 앱 pt 축어가 이미 정정본이다(es·ja는 앱이 «empieza a frenar»여서 우리가 고쳤다).
      //    §4-B ⑨: 벳 합계 99.1%(큰 사이즈 98.4 + 작은 사이즈 0.7), 체크 **0.8%**.
      //    🔴 100−99.1로 «빼서» 구하면 0.9가 나온다 — 개별 반올림값의 합은 100이 아니다.
      { board: "Q♥T♥7♠", name: "Board dinâmico two-tone", note: "Um pote de 3-bet num board que também agrada ao caller — e mesmo assim o 3-bettor não freia: 98,4% do range aposta com o mesmo tamanho de dois terços, e só 0,8% dá check" },
      // 🔴 M-042 RP-17 정정(2026-08-24) — **pt 는 목록에 없던 자리다**(RP-03 과 같은 이유로
      //    랜딩이 목록보다 늦게 생겼다). 종전 「em nada」는 en 의 절대 서술과 같은 형태였다.
      //    반례: **거트샷 4.8% · 백도어 플러시 16.9%(14콤보)**.
      //    🔴 **정본은 KO ⑩ `lib/posts/3bet-pot-low-board.ts` 142줄이다** — 초판 주석의 「정본은 ja」는
      //       **틀렸다**(2026-08-24 사장님 지적). ja 는 «정본과 어긋나지 않은 유일한 랜딩»이었을 뿐이다.
      //    🟢 문안은 수치로 갔다 — KO 표 실측 **탑 페어 0%**(8이 들어간 핸드가 3벳 레인지에 없다).
      { board: "8♦5♣2♠", name: "Board baixo e seco", note: "O range de 3-bet não liga nenhum top pair aqui — só gutshots e backdoors — e mesmo assim os overpairs e as mãos A-high mantêm a pressão" },
    ],
  },
  {
    label: "Blind vs Blind — SB vs BB (ranges amplos)",
    cond: "OOP: SB (open-raiser) · IP: BB (caller) · Pote 6bb · Stack 97bb",
    items: [
      { board: "K♥T♦6♠", name: "Board K-high com um T", note: "Ranges amplos e os dois jogadores chegam fracos ao flop — compare as frequências com o spot K-high de BTN vs BB" },
      { board: "7♦6♦5♣", name: "Board baixo conectado, two-tone", note: "Dois ranges amplos se chocam num board ultraconectado: dois pares, straights e draws por todo lado" },
      // 🟢 앱 pt 축어가 이미 정정본이다(es·ja는 앱이 «los tríos son poco frecuentes»여서 우리가 고쳤다).
      //    §4-B ⑬: SB 벳 80.1%(벳45(75%) 0.5% + 벳20(33%) 79.6%) · 체크 19.8%.
      { board: "A♠A♥6♦", name: "Board com A pareado", note: "As trincas não são raras — o SB simplesmente tem mais delas (88 combos contra 66 do BB), então o SB aposta 80,1%" },
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

export default function SolverClientPt() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      <section className="mt-6">
        {/*
          ★H1은 세 축을 한 줄에 담는다: `solver poker`(170) + `gto poker`(590) + `range`(590).
          🔴 `solver`는 `poker`에 붙여 쓴다 — 브라질에서 단독 `solver`는 엑셀이다.
        */}
        <h1 className="text-center text-2xl font-bold">
          Solver de poker GTO grátis — calcule os seus ranges depois do flop
        </h1>
        {/*
          ★h1 직후 직답 단락. GEO 원칙 ① — AI 검색도 페이지가 아니라 이 단락을 뽑는다.
            첫 문장에 정의 + 구체 수치, 앞 문단 의존 없이 자기완결.
        */}
        <p className="mt-3 text-muted-foreground">
          Um <strong className="text-foreground">solver de poker</strong> é o programa que calcula a
          estratégia de equilíbrio de uma situação específica: você entrega os dois ranges, um board e
          os tamanhos de aposta, e ele devolve com que frequência cada mão deve apostar, dar check ou
          desistir. E faz isso para as <strong className="text-foreground">169 mãos iniciais</strong>,
          numa grade de 13×13. O solver do HoldemMaster faz esse cálculo{" "}
          <strong className="text-foreground">dentro do seu navegador — sem baixar nada, sem criar
          conta e sem limite de soluções</strong>. Ao lado da grade você vê a equity, o EV e a
          realização de equity de cada mão. O alcance é depois do flop, heads-up.
        </p>
        <div className="mt-5 text-center">
          <Cta label="Abrir o solver →" />
          <p className="mt-2 text-xs text-muted-foreground">
            Melhor no Chrome do computador — no iOS e no Safari o cálculo roda em uma thread só e os
            spots personalizados demoram mais
          </p>
        </div>
        <Table head={["", "Detalhe"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── 솔버란 (⚠ 「GTO란」 순수 정의는 glossary 소유 → 「solver」로 좁힌다) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">O que é um solver de poker e no que ele difere de uma tabela?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Um solver calcula do zero a estratégia{" "}
          <strong className="text-foreground">GTO (ótima segundo a teoria dos jogos)</strong>. Você
          entrega os ranges, o board, o stack e a árvore de tamanhos de aposta, e ele vai iterando em
          direção ao equilíbrio até devolver a frequência de aposta, check e fold das 169 mãos. A
          diferença para uma tabela está exatamente aí: a tabela guarda a resposta que alguém calculou
          antes, enquanto o solver{" "}
          <strong className="text-foreground">calcula o spot em que você está agora</strong>.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Troque uma única carta do board e a resposta muda junto, porque o solver não lembra: ele
          recalcula.
        </p>
        {/*
          «부르는 이름» 문단 — 같은 것을 가리키는 검색어가 실제로 갈려 있다(2026-08-23 실측):
          solver poker 170 · poker solver 50 · gto poker 590 · range poker 590.
          🔴 `solver poker`(전치사 없는 형태)를 **여기서 딱 한 번** 축어로 놓는다.
             `solver de poker`는 볼륨 0이라 산문용이고, 이 자리가 검색어용이다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          A mesma coisa é procurada com nomes diferentes:{" "}
          <strong className="text-foreground">solver poker</strong>, solver GTO ou simplesmente{" "}
          <strong className="text-foreground">poker GTO</strong>. A saída dele às vezes é chamada de
          ranges GTO. Seja qual for o nome, o que a ferramenta desta página calcula é a mesma coisa.
        </p>
        <Table
          head={["O que você quer fazer", "Onde olhar"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link key={want} href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span key={want} className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
        <p className="mt-4 text-sm text-muted-foreground">
          Se o que você procura é o significado de GTO em si, a definição e os mal-entendidos mais
          comuns estão no{" "}
          <Link href="/pt/blog/holdem-glossary" className="font-semibold text-primary hover:underline">
            glossário de poker
          </Link>{" "}
          e no{" "}
          <Link href="/pt/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
            guia de estratégia de Texas Hold&apos;em
          </Link>
          .
        </p>
      </section>

      {/*
        ── ★pt 고유 절: 「range poker」 본진 ──────────────────────────
        이 절이 이 랜딩의 핵심이다. `range poker`/`poker range`(590 · SD 2)는 이 판 최대 축이면서
        **난이도가 가장 낮다.** 그런데 SERP top-10이 전부 프리플랍 표다(2026-08-23 실측).
        플랍 이후 레인지를 다루는 포르투갈어 페이지가 없다 → 우리가 그 자리를 정의하러 들어간다.
        🔴 프리플랍 표는 `pt/holdem-starting-hands-chart`의 것이다. **가져오지 않고 넘긴다.**
        🔴 수치는 전부 §4-B 확정표에서만 가져왔다(③ 0.1% · ④ 23.7% — 둘 다 OOP 첫 액션 기준).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Por que os seus ranges quebram depois do flop?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Porque um range pré-flop é estável e um range depois do flop não é.{" "}
          <strong className="text-foreground">Um range pré-flop cabe numa tabela</strong> — você abre
          mais ou menos as mesmas mãos do botão toda vez que senta. Assim que caem três cartas, esses
          mesmos ranges de poker se repartem em mãos feitas, draws e nada, e o certo a fazer muda por
          completo conforme a textura do board.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Dois exemplos desta mesma página ensinam isso melhor do que qualquer explicação. Nos dois, o
          BB paga o aumento do botão e age primeiro no flop — mesmo assento, mesmo range, mesmo pote:
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <li>
            Em <strong className="text-foreground">Q♠J♦T♠</strong>, o BB aposta primeiro em{" "}
            <span className="font-semibold text-orange-500">0,1% das vezes</span>. Praticamente nunca
            toma a iniciativa.
          </li>
          <li>
            Em <strong className="text-foreground">9♥8♥7♣</strong>, o BB aposta primeiro em{" "}
            <span className="font-semibold text-emerald-500">23,7% das vezes</span>.
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Os dois boards são conectados e two-tone. Parecem primos e, ainda assim, a resposta certa não
          tem nada a ver uma com a outra.{" "}
          <strong className="text-foreground">Nenhuma tabela pré-flop consegue conter essa diferença</strong>,
          porque a tabela é escrita antes de o flop existir. É exatamente isso que um solver faz: ele
          te dá o range de depois, não o de antes.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Se você ainda está construindo a parte de antes, comece pela{" "}
          <Link href="/pt/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            tabela de mãos iniciais
          </Link>{" "}
          — lá estão os ranges de abertura por posição, explicados assento a assento. Para ler uma mão
          dentro do range do adversário, a{" "}
          <Link href="/pt/blog/holdem-reading-the-board" className="font-semibold text-primary hover:underline">
            leitura do board
          </Link>{" "}
          é o passo intermediário.
        </p>
      </section>

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Como usar o solver de poker em 5 passos</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Se é a primeira vez que você mexe num solver,{" "}
          <strong className="text-foreground">abra um spot de estudo antes de configurar qualquer coisa.</strong>{" "}
          Eles já estão calculados, então você aprende a ler a saída antes de brigar com a entrada.
          Quando quiser montar o seu, as abas da barra lateral seguem de cima para baixo.
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
          No spot personalizado as fichas são números inteiros quaisquer. Se você prefere raciocinar em
          big blinds, use <strong className="text-foreground">10 fichas = 1bb</strong> (um pote de 55 é
          5,5bb). Os spots de estudo e o Treinador já usam essa escala.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Montar os dois ranges do zero é o caminho longo. Os ranges de abertura por posição estão na{" "}
          <Link href="/pt/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            tabela de mãos iniciais
          </Link>
          . Os dois ranges abaixo são outra coisa:{" "}
          <strong className="text-foreground">são os que os spots de Single Raised Pot usam</strong>{" "}
          (o pote de aumento simples, BTN vs BB), prontos para colar em ① e ②.
        </p>
        <Table head={["Para colar em", "Range"]} rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])} />
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Como ler os ranges de poker na tela de resultados</h2>
        {/*
          🔴 **다섯이다.** 아래 표가 다섯 행이고 이 문단이 다섯을 센다.
             ko·en·ja·es 네 랜딩은 「네 구역」이라 적고 다섯을 센다 — 소급 대상이다. 복제하지 않았다.
        */}
        <p className="mt-2 text-sm text-muted-foreground">
          A tela tem cinco áreas de trabalho: a{" "}
          <strong className="text-foreground">barra de ações</strong> no topo, a{" "}
          <strong className="text-foreground">matriz 13×13</strong> à esquerda e, à direita, as{" "}
          <strong className="text-foreground">frequências, o painel Mãos / Draws e a tabela de
          detalhes</strong>. Guarde isto: à esquerda você lê o que cada mão faz, à direita o que o
          range inteiro faz.
        </p>
        <Table head={["Onde", "O que tem", "Como se lê"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          Se a realização de equity (EQR) cair abaixo de 100%, vale parar ali: significa que você não
          está cobrando toda a equity que tem. O que abre essa diferença muda conforme o spot — a
          posição, a iniciativa e quem chega com mais mãos da parte alta do range.{" "}
          <strong className="text-foreground">Um solver não te diz como jogar, ele te diz por que a
          frequência é aquela</strong>, e o EQR é o número onde esse porquê aparece mais claro.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Se esses termos ainda soam distantes, o{" "}
          <Link href="/pt/blog/holdem-equity" className="font-semibold text-primary hover:underline">
            guia de equity
          </Link>{" "}
          e o de{" "}
          <Link href="/pt/blog/holdem-continuation-bet" className="font-semibold text-primary hover:underline">
            aposta de continuidade
          </Link>{" "}
          te dão de antemão o vocabulário que o solver está medindo.
        </p>
      </section>

      {/* ── 무료 범위 (기능표) ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">É grátis mesmo? — tudo o que está incluído</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          É, e sem as letras miúdas de costume: não precisa cadastrar forma de pagamento, não tem recurso
          bloqueado, não existe número máximo de cálculos por dia e não precisa de conta. Os ajustes
          que costumam viver nos solvers de desktop pagos —{" "}
          <strong className="text-foreground">rake e teto de rake, modos de precisão, edição da árvore
          nó a nó</strong> — também estão aqui. O único limite real é que esta ferramenta é{" "}
          <strong className="text-foreground">só depois do flop e heads-up</strong>.
        </p>
        <Table
          head={["Recurso", "Incluído", "Observações"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span key={name} className="font-bold text-emerald-600">Sim</span>
            ) : (
              <span key={name} className="font-bold text-muted-foreground">Não</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="Testar de graça →" variant="outline" />
        </div>
      </section>

      {/* ── 플랍 이후 범위 (카니발 방지의 본체) ──────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Por que ele só calcula depois do flop</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Este é um <strong className="text-foreground">solver de pós-flop</strong>: ele começa no
          momento em que o flop abre e calcula dali em diante para os dois jogadores. Deixar o pré-flop
          de fora é proposital, porque o pré-flop é outro tipo de problema — os ranges de abertura são
          estáveis o bastante para caber numa tabela, enquanto o jogo depois do flop se reescreve a
          cada board.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Dentro desse limite não há nada cortado: os{" "}
          <strong className="text-foreground">ranges dos dois jogadores</strong>, qualquer flop, turn e
          river, o pote inicial e o stack efetivo, e a árvore completa de tamanhos street por street. A
          estratégia que sai não é genérica, é a da sua mesa — incluindo o rake, que a maior parte do
          material de estudo nem menciona.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Se o que falta para você é a parte de antes do flop, a{" "}
          <Link href="/pt/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            tabela de mãos iniciais
          </Link>{" "}
          reúne os ranges por posição. Com as duas peças você cobre uma mão do começo ao fim: a tabela
          decide com o que você entra, o solver decide o que acontece a partir do flop.
        </p>
      </section>

      {/* ── GTO 트레이너 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Treinador GTO — pratique e meça quanto EV você deixa</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O Treinador GTO vem junto na própria ferramenta e não pede cadastro à parte. Ele transforma
          os spots já calculados em exercícios: distribui uma mão num ponto de decisão real, você
          escolhe uma ação e recebe uma nota. Se você procurava um jeito gratuito de treinar poker e o
          que quer treinar não são as jogadas e sim{" "}
          <strong className="text-foreground">as decisões</strong>, comece por aqui.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          A nota não é acerto ou erro, e sim{" "}
          <strong className="text-foreground">quanto valor esperado você deixou na mesa</strong>. Como
          o GTO mistura ações, escolher a opção menos frequente não é automaticamente um erro: a
          pergunta é de quanto EV você abriu mão. Ao escolher você vê a frequência e o EV de cada ação
          ao lado do custo da sua.
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/*
            🔴 팟 대비 비율이다. **절대 bb가 아니다** — 앱이 2026-08-15에 바꿨고 ko·en·ja 랜딩의
               옛 절대값(0.01/0.05bb)도 그때 함께 고쳤다. **되돌리지 마라.**
            🟢 pt 앱 화면도 이미 «em relação ao pote»라 **화면과 아래 문장이 일치한다** —
               es는 화면이 아직 «pérdida de EV»뿐이라 그 랜딩엔 「화면 문구를 근거로 삼지 말라」는
               경고가 붙어 있다. pt에는 그 예외가 필요 없다.
            🪶 화면의 «quantos bb cada decisão custa»는 **오류가 아니다** — 표시되는 값은 실제로 bb이고
               합격선만 팟 대비다. 2026-08-23에 이 구조를 솔버와 확인해 우리 지적을 철회했다.
          */}
          <li className="text-muted-foreground">
            O limite é medido <strong className="text-foreground">em relação ao pote</strong> —{" "}
            <span className="font-semibold text-emerald-500">até 0,35%</span> é jogada ótima ·{" "}
            <span className="font-semibold text-blue-500">até 1%</span> é aceitável ·{" "}
            <span className="font-semibold text-orange-500">acima disso</span> vale revisar
          </li>
          <li className="text-muted-foreground">
            Os mesmos 0,08bb são 1,45% num pote de 5,5bb (revisar) e 0,36% num de 22,5bb (aceitável).
            Os limites ficam em 0,02bb e 0,06bb no Single Raised Pot, e em 0,08bb e 0,23bb no pote
            de 3-bet. Existem pisos de 0,02bb e 0,05bb para que diferenças mínimas não sejam confundidas
            com a própria margem de erro do solver
          </li>
          <li className="text-muted-foreground">
            As perguntas saem de vários pontos de decisão de cada spot, então as combinações{" "}
            <strong className="text-foreground">passam de dez mil</strong> (exploitabilidade alvo de
            0,5%). Também dá para treinar um tipo só: Single Raised Pot, pote de 3-bet ou blind
            vs blind
          </li>
          <li className="text-muted-foreground">
            As mãos são distribuídas{" "}
            <strong className="text-foreground">na proporção do peso real do range GTO</strong> — elas
            chegam com a frequência com que você de fato as teria naquele spot
          </li>
          <li className="text-muted-foreground">
            A sequência de acertos, o detalhamento dos pontos fracos e a{" "}
            <strong className="text-foreground">fila de revisão</strong> com os exercícios em que você
            mais perdeu EV são construídos com esse histórico. Se você não fizer login, tudo fica no
            seu aparelho
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="Abrir o Treinador GTO →" variant="outline" />
        </div>
      </section>

      {/* ── 학습 스팟 (앱 축어 12 + §4-B 정정 1) ─────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">
          {SPOT_TOTAL} spots de estudo já resolvidos
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Todos os spots abaixo já estão calculados, então a estratégia aparece assim que você abre —
          sem espera e sem configurar nada. Os ranges são aproximações do padrão online de 100bb, então
          a melhor forma de usá-los é carregar um, trocar os ranges, calcular de novo e olhar o que se
          moveu. Não existe atalho mais rápido para entender como a textura do board reescreve a
          estratégia.
        </p>
        {SPOT_GROUPS.map((g) => (
          <div key={g.label} className="mt-5">
            <p className="text-sm font-semibold">{g.label}</p>
            <p className="text-xs text-muted-foreground">{g.cond}</p>
            <ul className="mt-2 space-y-1.5">
              {g.items.map((s) => {
                const item = s as { board: string; name: string; note: string; slug?: string };
                return (
                  <li key={item.board} className="text-sm">
                    <span className="font-semibold">{item.board}</span>
                    <span className="mx-1.5 text-muted-foreground">·</span>
                    {item.slug ? (
                      <Link
                        href={`/pt/blog/${item.slug}`}
                        className="font-semibold text-primary hover:underline"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-medium">{item.name}</span>
                    )}{" "}
                    <span className="text-muted-foreground">— {item.note}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      {/* ── 외부 도구 비교 ───────────────────────────────────────────── */}
      {/*
        ⚠ 가격·무료 티어 «수치»를 쓰지 않는다(§12-B). «방식의 차이»만 적는다.
        🪶 브랜드 인접 검색은 브라질에서 특히 크다 — `gto wizard` **6,600**(es 2,900의 2.3배) ·
           `gto wizard poker` 140 · `piosolver` 140. 직접 조준은 안 하지만 비교 문맥의 언급은 정당하다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Qual é a diferença para o GTO Wizard ou o PioSOLVER?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Todos são chamados de solver, mas o que muda é{" "}
          <strong className="text-foreground">onde e quando o cálculo acontece</strong>. Bibliotecas de
          soluções como o GTO Wizard são de consulta: mostram soluções calculadas de antemão, são muito
          rápidas e costumam incluir pré-flop. Solvers de desktop como o PioSOLVER se instalam e
          calculam na sua própria máquina, principalmente no Windows. Esta ferramenta{" "}
          <strong className="text-foreground">calcula no navegador, na hora</strong>, então você pode
          reescrever ranges e árvore à vontade e não há nada para instalar.
        </p>
        <Table
          head={["", "Solver do HoldemMaster", "Biblioteca de soluções", "Solver de desktop"]}
          rows={COMPARE}
        />
        {/*
          🔴 여기서 «남의 무료 티어 수치»를 적지 않는다. 대신 SERP 실측으로 확인된 **구조**를 적는다:
             top-10의 무료 접근이 전부 «구독 / 하루 몇 개 / 크레딧 / 다운로드» 중 하나로 제한된다.
        */}
        <p className="mt-4 text-sm text-muted-foreground">
          Se você procurar «solver de poker gratuito» em português, vai ver que quase tudo o que é
          gratuito vem com uma condição: uma assinatura com parte do catálogo aberta, um número de
          soluções por dia, um sistema de créditos que se consome ao abrir uma linha, ou um download. O
          que não existe aqui é essa condição —{" "}
          <strong className="text-foreground">nem cadastro, nem cota diária, nem créditos</strong>. É a
          diferença que faz valer a pena deixar esta página aberta ao lado enquanto você revisa mãos.
        </p>
        {/*
          🔴 이 문단의 근거는 wasm-postflop.pages.dev의 **자기 고지**와 GitHub 저장소 제목
             "[Development suspended]"다. 추측이 아니라 원본이 스스로 적어 둔 문장이고,
             우리 앱의 AGPL 고지 축어와 일치한다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          Uma nota para quem chegou aqui procurando{" "}
          <strong className="text-foreground">WASM Postflop</strong>: o projeto original de código
          aberto anunciou no próprio site que parava de ser atualizado, e o repositório dele consta
          como desenvolvimento suspenso. Este solver é um fork que mantém aquele motor: mesma licença
          AGPL-3.0, código igualmente publicado e, por cima, uma interface nova, os spots de estudo e o
          Treinador.
        </p>
      </section>

      {/* ── 모바일·오프라인 (PWA) ───────────────────────────────────── */}
      {/*
        근거: 앱이 이미 PWA이고 버튼 축어가 «♠ Adicionar à tela»다. SERP 실측에서
        `solver poker`의 **Google Play 2위 · App Store 3위** — 스토어 등재물이 이 검색결과에서
        실제로 순위를 먹는다(es보다 순위가 더 높다).
        🔴 **「설치할 수 없다」로 쓰지 마라** — 앱 등록을 준비 중이라 출시되는 순간 거짓이 된다.
           「설치가 «필요 없고», 원하면 담을 수도 있다」로 쓴다.
        🔴 **「오프라인으로 계산까지 된다」로 쓰지 마라** — 오프라인은 스팟 열람과 트레이너뿐이다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Dá para usar no celular e sem internet?</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Sim para as duas coisas. Você não precisa instalar nada para começar — abre no navegador do
          celular igual ao do computador — mas{" "}
          <strong className="text-foreground">se quiser, dá para adicionar à tela de início</strong> e
          ele se comporta como um app: ícone próprio, tela cheia e sem barra de endereço. É um atalho
          do navegador, não um programa, então nunca pede permissões do sistema.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Depois de adicionado, os spots de estudo e o Treinador GTO ficam guardados no aparelho e{" "}
          <strong className="text-foreground">você continua praticando sem internet</strong> — no
          metrô, no avião ou com pouca franquia de dados. A ressalva importante: resolver um spot
          personalizado do zero precisa que o motor de cálculo tenha sido baixado pelo menos uma vez.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          No iPhone e no Safari o cálculo roda em uma thread só por limitação do próprio navegador,
          então spots grandes demoram mais; para esses, o computador é mais confortável. Adicionar se
          faz pelo ícone de instalar da barra de endereço no Chrome e no Edge, e por «Adicionar à Tela
          de Início» no menu de compartilhar do iPhone.
        </p>
      </section>

      {/* ── 함께 읽으면 좋은 글 (⚠ pt엔 도구 페이지가 없다 — 전부 블로그) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Para continuar lendo</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/pt/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
              Tabela de mãos iniciais
            </Link>{" "}
            — esta ferramenta é só depois do flop. <strong>Com que mãos entrar</strong> em cada posição
            está naquele artigo; os ranges que se colam em ① e ② vêm dos spots de estudo
          </li>
          <li>
            <Link href="/pt/blog/holdem-pot-odds" className="font-semibold text-primary hover:underline">
              Pot odds
            </Link>{" "}
            — quando você só quer o número e não precisa abrir um solver: outs e equity necessária
          </li>
          <li>
            <Link href="/pt/blog/holdem-equity" className="font-semibold text-primary hover:underline">
              Equity no poker
            </Link>{" "}
            — quase toda a saída do solver deriva da equity. Ler isto antes deixa a tela de resultados
            legível
          </li>
          <li>
            <Link href="/pt/blog/holdem-position-play" className="font-semibold text-primary hover:underline">
              Jogo posicional
            </Link>{" "}
            — o EQR se move muito com a posição. Aqui está o que o solver está quantificando
          </li>
          <li>
            <Link href="/pt/blog/holdem-3bet" className="font-semibold text-primary hover:underline">
              Guia do 3-bet
            </Link>{" "}
            — três dos spots de estudo são potes de 3-bet. Este artigo explica como se chega até aquele
            flop
          </li>
          <li>
            <Link href="/pt/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
              Guia de estratégia de Texas Hold&apos;em
            </Link>{" "}
            — o mapa completo dos conceitos que o solver coloca em números, incluindo a definição de GTO
          </li>
        </ul>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {/*
        배열은 `./faq.ts`가 단일 출처다(서버 `page.tsx`의 FAQPage 스키마와 공유).
        🔴 본문에도 전부 렌더한다 — 스키마에만 두면 LLM이 못 읽는다(posting.mdc GEO ④).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Perguntas frequentes</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_PT.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">Q. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 오픈소스 고지 (AGPL) ─────────────────────────── */}
      <section className="mt-12 text-center">
        <Cta label="Abrir o solver de poker grátis →" />
      </section>
      {/*
        🔴 AGPL 고지 — 앱 화면의 축어와 같은 사실이다. **훅으로 키우지 않는다**(2026-08-22 판정:
           앱스토어 등록 준비 중이라 오픈소스를 마케팅 축으로 세우지 않는다).
        🪶 렌더되는 자리가 셋이다: SPEC 표 `Motor` 행 · WASM Postflop 문단 · 이 꼬리 고지.
           **제목·H1·H2에 없다는 것이 지켜야 할 선**이다. 옮기려면 판정을 먼저 다시 받을 것.
      */}
      <p className="mt-8 text-xs text-muted-foreground">
        Este aplicativo é baseado no WASM Postflop, de Wataru Inariba (AGPL-3.0), localizado e
        melhorado pelo HoldemMaster. O código-fonte modificado completo está publicado sob a mesma
        licença.
      </p>
    </div>
  );
}
