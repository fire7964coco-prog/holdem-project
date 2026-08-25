/**
 * `/pt/solver` FAQ — 화면(`solver-client.tsx`)과 서버 `page.tsx`의 FAQPage 스키마가
 * **같은 배열**을 쓴다. 정본 구조 = `app/es/solver/faq.ts` · `app/ja/solver/faq.ts`.
 *
 * ★2026-08-23 신설. **포르투갈어권에 솔버 진입로가 0개였다**(본체는 noindex).
 *
 * 🔴 **번역이 아니다.** 실측 근거는 `docs/keyword-bank/pt-gto-solver.md`. 갈아 끼운 것 —
 *   ① **PAA 축어를 그대로 문항으로 세웠다** (DataForSEO SERP API · google.com.br):
 *      `solver poker` → **「O que é um Solver?」** · `range poker` → **「O que é reg poker?」**
 *   ② 🔴 **「Qual o segredo do poker?」·「O que a Bíblia diz sobre poker?」는 답하지 않는다** —
 *      `range poker` PAA에 실재하지만 **구글이 이 쿼리의 의도를 아직 못 잡은 흔적**이지
 *      우리 독자의 질문이 아니다(축구 질문 「Como chama quando faz 4 gols?」까지 섞여 있다).
 *   ③ 🔴 **GTO Wizard 가격도 답하지 않는다** — 남의 가격을 우리가 대신 적어 주는 것은 다른 일이다
 *      (CLAUDE.md §12-B · KO·EN·ja·es와 같은 규율). 「구독이냐·하루 몇 개냐·크레딧이냐」라는
 *      **구조**로만 대비시킨다.
 *   ④ **`o que é gto no poker`(30)·`o que é range no poker`(20) 전용 문항** — 정의는 짧게 두고
 *      링크로 넘겨 `pt/holdem-glossary`·`pt/holdem-strategy`와 양쪽이 다 살게 한다.
 *   ⑤ **ja의 「삼성 브라우저」 문항은 뺐다** — 브라질 맥락이 아니다. 앱이 실제로 경고하는
 *      **iOS·Safari 싱글스레드**만 남겼다.
 *
 * 🔴 **`solver`를 단독으로 쓰지 마라 — 브라질에서 «Excel 솔버»다**(뱅크 §1-B-①).
 *    `o que é solver` 110 · SD 0인데 SERP top-10이 **8/8 엑셀**이다.
 *    ⚠ **그런데 아래 문항 제목은 PAA 축어라 `Solver` 단독으로 둔다** — 그 PAA는
 *       **`solver poker` 검색결과 안에서 뜬 것**이라 문맥이 이미 포커다. 답 첫 문장에서
 *       「no poker」로 못박고 마지막에 엑셀과 갈라 준다. **이 예외를 제목·H1·H2로 넓히지 마라.**
 *
 * 🔴 **답의 사실은 전부 2026-08-23에 `solver.holdemmaster.com/?lang=pt`를 열어
 *    화면에서 직접 읽은 것만 쓴다** (Playwright DOM 추출). 확인한 축어 —
 *    · `<html lang="pt">` · title «HoldemMaster GTO Solver — Solver de poker GTO grátis no navegador»
 *    · 언어 셀렉터 **8개** `ko,en,ja,es,pt,de,zh,zh-hant`
 *    · 히어로 «Estratégia GTO, direto no seu navegador.» / «Nada para instalar, nada para pagar.»
 *    · 특징 4블록 «Grátis / Todos os recursos, sem limite de uso» ·
 *      «Estudo offline» · «Cálculo rápido / Multithread — velocidade de solver de desktop» ·
 *      «Treinador GTO / Jogue spots; sua nota vem da perda de EV em relação ao pote»
 *      🟢 **트레이너 문구가 이미 정정본이다** — es 화면은 아직 «pérdida de EV»인데
 *         pt는 «em relação ao pote»까지 들어와 있다(08-22 솔버 배포 반영).
 *    · 사이드바 «① Range OOP ② Range IP ③ Board ④ Bet sizes ⑤ Calcular»
 *    · 네비 «Spots de estudo ⚡ Na hora» «Treinador GTO Nota EV» «Tabelas pré-flop Ranges» «Equity % de vitória»
 *    · PWA 버튼 «Adicionar à tela»
 *    · 학습 스팟 **13개**(3그룹 7+3+3)
 *
 * 🔴🔴 **앱 화면 문구를 «해설»로 쓰지 마라** (ja·es 교훈). 판정 기준은
 *   **`docs/gto-solver-series-spec.md` §4-B 확정표**다. pt에서 실제로 걸린 것 —
 *   🟢 ③ `Q♠J♦T♠` · ⑨ `Q♥T♥7♠` · ⑬ `A♠A♥6♦` **셋은 pt 앱이 이미 정정본**이다
 *      (77,9/119,4 · 98,4/0,8 · 88 대 66/80,1). **그대로 써도 된다** — es·ja와 다른 점이다.
 *   🔴 **④ `9♥8♥7♣`만 아직 틀렸다** — 앱 pt 축어 «A textura clássica que **favorece o caller**.
 *      A frequência de c-bet do BTN **despenca**». 이것이 M-035 결함 1·2이고
 *      **ja·es·pt 세 언어에서 확인**됐다. 랜딩은 §4-B 정정본을 쓴다(레인지 우위는 여전히 BTN ·
 *      에퀴티 **48.5% 대 51.5%** · BB 첫 액션 벳 **23.7%**). **되돌리지 마라.**
 *
 * 🔴 카니발 — 이 FAQ가 **답하지 않는 것 셋**(뱅크 §4):
 *   ① 프리플랍 표 → `pt/holdem-starting-hands-chart`가 갖는다(`tabelas gto de preflop` 태그).
 *   ② 계산기 → `calculadora de poker`(170)뿐 아니라 **`calculadora de equity poker`도
 *      `pt/holdem-equity`가 이미 태그로 갖고 있다**(es와 다르다).
 *   ③ 「estratégia de poker」 일반 → `pt/holdem-strategy`가 seoTitle+태그 4개로 소유.
 *   **되찾아 오지 마라.**
 */
export interface FaqItem { q: string; a: string; }

export const SOLVER_FAQ_PT: FaqItem[] = [
  {
    q: "Qual é a diferença entre um solver de poker e uma tabela pronta?",
    a: "Uma tabela guarda uma resposta que alguém calculou antes; um solver calcula o spot que está na sua frente agora. Troque uma carta do board e a tabela continua dizendo a mesma coisa, enquanto o solver devolve outra resposta. Por isso uma tabela pré-flop e um solver não competem: a tabela decide com que mãos você entra, e o solver decide o que acontece a partir do flop.",
  },
  {
    q: "É grátis mesmo?",
    a: "É. Todos os recursos, sem limite de uso: resolver os seus próprios spots, abrir os exemplos já calculados, o Treinador GTO, salvar e exportar. Não existe plano pago, nem créditos, nem um número máximo de soluções por dia.",
  },
  {
    q: "Preciso me cadastrar ou criar uma conta?",
    a: "Não. Você abre a página e calcula. O login serve só para sincronizar o seu histórico do Treinador entre aparelhos — se você não usar, não perde nenhuma função.",
  },
  {
    q: "Tem alguma coisa para instalar?",
    a: "Não precisa. Roda dentro do navegador com WebAssembly, então funciona em Windows, macOS, Linux e celular sem instalador. Se quiser, dá para adicionar à tela de início pelo botão «Adicionar à tela» do próprio app, mas isso é um atalho do navegador, não um programa: nunca pede permissões do sistema.",
  },
  {
    // 🔴 `o que é gto no poker` **BR 30**. 무악센트형(`o que e gto no poker`)은 볼륨 **0**이다 —
    //    이 축은 **악센트가 붙어야 산다**(뱅크 §1-B-③. 방향이 일정하지 않으니 표기마다 재라).
    q: "O que é GTO no poker?",
    a: "GTO é a sigla de Game Theory Optimal: a estratégia de equilíbrio que nenhum adversário consegue explorar de forma sistemática. Na prática ela não se expressa como «aposte» ou «desista», e sim como frequências — apostar esta mão 70% das vezes e dar check nos outros 30%. Um solver é a ferramenta que calcula essas frequências para um spot específico. A definição completa e os mal-entendidos mais comuns estão no glossário e no guia de estratégia.",
  },
  {
    // 🔴 PAA 축어(`solver poker` 검색결과 · google.com.br). 제목의 `Solver` 단독은
    //    **이 문항에 한한 예외**다 — 답 첫 문장에서 「no poker」로 못박고 끝에서 엑셀과 갈랐다.
    q: "O que é um Solver?",
    a: "No poker, um solver é o programa que resolve uma situação buscando o equilíbrio: a estratégia que nenhum adversário consegue explorar de forma sistemática. Em vez de dizer «aposte» ou «desista», ele devolve frequências — por exemplo, apostar 70% das vezes com uma mão e dar check nos 30% restantes. É essa mistura que torna a estratégia inexplorável. Vale o aviso: fora do poker, «Solver» costuma se referir à ferramenta de otimização do Excel, que é outra coisa completamente diferente.",
  },
  {
    // 🔴 `o que é range no poker` BR 20. 정의는 짧게 — 본체는 `pt/holdem-glossary` L233이 소유한다
    //    (「Range | O conjunto completo de mãos que um jogador pode ter num spot」).
    q: "O que é range no poker?",
    a: "Range é o conjunto completo de mãos que um jogador pode ter num spot. Quem está começando pergunta «que mão ele tem?»; quem estuda pergunta «que conjunto de mãos teria jogado assim até aqui?». O solver trabalha inteiro nesse nível: você entrega dois ranges e ele devolve o que cada uma das 169 mãos deve fazer, em vez de um palpite sobre uma mão só.",
  },
  {
    // 🔴 PAA 축어(`range poker` 검색결과). 브라질 포럼 표준어는 **regs**
    //    (`docs/translation-terms-pt.md` §4 — 「regulars → regs」).
    q: "O que é reg no poker?",
    a: "Reg é a abreviação de regular: o jogador que aparece todo dia nos mesmos limites e vive do jogo ou perto disso. A diferença prática entre um reg e um jogador casual quase nunca está numa jogada espetacular — está em ter estudado antes as situações que se repetem. É exatamente para isso que serve um solver: transformar spots recorrentes em frequências que você já sabe de cor quando eles aparecem na mesa.",
  },
  {
    q: "Dá para usar no celular e sem internet?",
    a: "Dá, com uma ressalva. Adicione à tela de início e os Spots de estudo e o Treinador GTO ficam guardados no aparelho, então você continua praticando sem internet. Resolver um spot personalizado do zero precisa que o motor de cálculo tenha sido baixado pelo menos uma vez antes.",
  },
  {
    q: "Funciona no iPhone ou no Safari?",
    a: "Funciona, só que mais devagar. No iOS e no Safari as limitações do próprio navegador forçam o cálculo em uma única thread, enquanto nos outros navegadores o solver usa vários núcleos ao mesmo tempo. Para spots grandes o computador é mais confortável; no macOS recomendamos o Chrome.",
  },
  {
    q: "Ele também calcula o pré-flop?",
    a: "Não. Esta ferramenta é depois do flop e heads-up: flop, turn e river. Os ranges de abertura por posição estão no guia da tabela de mãos iniciais do blog, que é por onde convém começar. Dentro do app também dá para consultá-los rápido enquanto você monta um spot, mas a explicação de por que cada posição abre o que abre está no artigo.",
  },
  {
    q: "Qual é a diferença para o GTO Wizard ou o PioSOLVER?",
    a: "Está em onde e quando o cálculo acontece. Aqui a solução é calculada no seu aparelho, na hora, com os ranges e a árvore que você escrever. As plataformas de consulta mostram soluções calculadas de antemão, dentro do catálogo que publicam. O PioSOLVER é um programa que se instala e calcula na sua própria máquina, principalmente no Windows. Não é melhor nem pior: resolvem necessidades diferentes.",
  },
  {
    q: "Quanto tempo leva para resolver um spot?",
    a: "Depende do tamanho da árvore e do seu processador: de alguns segundos a alguns minutos. Se você só quer ver uma solução sem esperar, abra qualquer spot da seção Spots de estudo — eles já estão calculados e aparecem na hora.",
  },
  {
    q: "Os meus ranges são enviados para algum servidor?",
    a: "Não. O cálculo roda no processador do seu próprio aparelho, não em um servidor nosso. Os ranges que você salva ficam no seu navegador e só saem de lá se você gerar um link para compartilhar um spot ou exportar um arquivo. A exceção é o histórico do Treinador: se você fizer login, ele fica salvo na sua conta para poder ser visto de outro aparelho.",
  },
  {
    q: "O solver leva o rake em conta?",
    a: "Leva. Você pode configurar o rake e o teto de rake antes de resolver, então a solução se ajusta às condições da mesa que você realmente joga. É uma diferença que aparece principalmente em potes pequenos, onde a comissão muda quais mãos continuam sendo lucrativas.",
  },
  {
    // 🔴 팟 대비 비율이다. **절대 bb가 아니다.**
    // 🟢 pt 앱 화면도 이미 «em relação ao pote»라 **화면과 이 문항이 일치한다** —
    //    es는 화면이 아직 「pérdida de EV」라 §4-B로 정정해 넣어야 했다. pt는 그 예외가 없다.
    q: "O que é o Treinador GTO e como ele pontua as minhas decisões?",
    a: "É um modo de prática: ele apresenta spots já resolvidos, você escolhe uma ação e ele diz quanto valor esperado você deixou na mesa. Como o GTO mistura ações, escolher uma opção pouco frequente não é automaticamente um erro — por isso a nota é medida em relação ao pote: até 0,35% do pote é jogada ótima, até 1% é aceitável, e acima disso vale revisar. Os limites têm pisos de 0,02bb e 0,05bb para que diferenças mínimas não contem como falha.",
  },
  {
    q: "Dá para salvar um spot e compartilhar?",
    a: "Dá. Você pode salvar ranges e configurações, importar e exportar como arquivo, tirar o resumo dos resultados em CSV e gerar um link que abre exatamente o mesmo spot no aparelho de outra pessoa. É a forma mais rápida de perguntar uma mão no grupo de estudo.",
  },
  {
    q: "Serve para torneio ou só para cash?",
    a: "O cálculo é de chip EV, então encaixa naturalmente no cash e nas fases de torneio em que o ICM ainda não pesa. Perto da bolha e dos saltos de premiação, a decisão certa pode se afastar da solução de chip EV, e esse é um cálculo diferente que esta ferramenta não faz.",
  },
  {
    q: "O aplicativo está em português?",
    a: "Está, a interface inteira em português, e você também pode trocar para coreano, inglês, japonês, espanhol, alemão, francês e chinês no seletor de idioma. Não é tradução parcial: os menus, os spots de estudo e o Treinador estão localizados.",
  },
  {
    q: "Onde encontro material de estudo de poker de graça?",
    a: "Um solver sozinho dá números, não explicações. No blog você tem guias gratuitos dos conceitos que o solver coloca em números: a tabela de mãos iniciais, as pot odds, a equity, a aposta de continuidade e o 3-bet. Dá para ler com a solução aberta do lado, que é a forma mais rápida de os percentuais começarem a significar alguma coisa.",
  },
];

export default SOLVER_FAQ_PT;
