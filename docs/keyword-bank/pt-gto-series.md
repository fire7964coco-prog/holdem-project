# PT-BR — palavras-chave da série de 13 spots GTO

> Pesquisa editorial: **2026-09-15**. Mercado: Brasil; idioma editorial: **pt-BR**.
> Escopo: títulos, intenção de busca, H2/FAQ e separação de páginas. As frequências, condições, cálculos e limites vêm dos arquivos **`lib/posts-en/<slug>.ts`** e da verificação do app; as fontes externas abaixo não substituem esses dados.

## 1. O que foi verificado

- Li o banco da landing `docs/keyword-bank/pt-gto-solver.md`, o guia `docs/translation-terms-pt.md`, o banco de hardening e os metadados das páginas PT já existentes.
- Fiz buscas atuais em português e abri conteúdo educacional oficial em **PokerStars Learn BR**. As buscas amplas também devolveram páginas em inglês, francês e português europeu; elas **não validam linguagem brasileira**.
- Esta rodada **não obteve uma captura localizada e completa dos dez resultados do Google Brasil**, dados novos de volume/dificuldade, Google Suggest ou PAA. A ferramenta disponível retorna resultados de busca, sem garantia de posição ou localização exata. Não atribuir ranking, volume ou pergunta de PAA às propostas abaixo.
- As 13 frases principais são **long tails editoriais propostas**, apoiadas na linguagem das fontes e no conteúdo dos spots. Não são uma lista de 13 consultas com demanda medida. As perguntas de FAQ abaixo são redação editorial, não transcrições de PAA.
- Os números de `pt-gto-solver.md` foram medidos em **2026-08-23**: por exemplo, `gto poker` 590, `range poker` 590 e `solver poker` 170. São **dados históricos**, não volumes atuais nem volumes dos 13 artigos. Ausência de dado/volume informado como zero no banco antigo não prova ausência de leitores ou buscas.

### Buscas realizadas nesta rodada

Entre as consultas efetivamente enviadas:

1. `poker cbet flop A high K high vantagem de range Brasil`
2. `poker flop monotone board pareado cbet estratégia português`
3. `poker pote 3bet tamanho aposta flop blind vs blind português`
4. `site:pokerstars.com/pt-BR/poker/learn "C-Bet Moderna"`
5. `site:pokerstars.com/pt-BR/poker/learn "3-bet" "flop"`
6. `site:pokerstars.com/pt-BR/poker/learn "donk"`
7. `poker "board monotone" português estratégia`
8. `poker "blind vs blind" "cbet" português`
9. `poker "3bet pot" "sizing" português`
10. `blind contra blind flop cbet` com domínio PokerStars.

As consultas 7–9 trouxeram cobertura insuficiente de PT-BR para afirmar demanda exata desses termos; os modificadores de board e posição são uma decisão editorial.

## 2. Linguagem e dúvidas observadas nas fontes

Fontes primárias abertas em 2026-09-15; usadas para linguagem e enquadramento, sem copiar sua estratégia genérica para o spot:

| Fonte | Linguagem/dúvida observada | Aplicação na série |
|---|---|---|
| [PokerStars BR: frequência de c-bet](https://www.pokerstars.com/pt-BR/poker/learn/strategies/c-bet-moderna-parte-1-fazendo-a-c-bet-frequentemente/) — 2020-09-22 | Expressões curtas: “vantagem de range”, “dar check”, “top pair”. O texto organiza a aposta em torno dos ranges e da proteção. | Explicar o motivo de apostar/dar check com uma mão concreta; partes 1–3 e 8. |
| [PokerStars BR: guia de continuation bet](https://www.pokerstars.com/pt-BR/poker/learn/strategies/the-continuation-bet-in-poker-your-guide-to-c-betting/) — 2024-01-26 | Pergunta publicada: “O que é uma continuation bet no poker?”; distingue mão forte, média e blefe. | A definição básica pertence ao guia PT já publicado. Os novos artigos mostram a aplicação em um flop específico. |
| [PokerStars BR: donk bet](https://www.pokerstars.com/pt-BR/poker/learn/strategies/donk-bet-o-que-e-e-quando-fazer/) — 2026-01-30 | Usa “donk bet” e distingue aposta do caller antes do agressor de outras apostas iniciais. | Parte 4 explica quem está agindo, antes de discutir se a aposta faz sentido. Donk do BB não é c-bet do BTN. |
| [PokerStars BR: flops com pares baixos](https://www.pokerstars.com/pt-BR/poker/learn/strategies/fazendo-a-donk-bet-em-flops-baixos-pareados/) — 2026-04-16 | Expressões: “flops com pares baixos”, “trincas”, “range de donk-bet”. Pergunta sobre quais flops permitem liderar. | Parte 6 precisa separar quantidade de trincas e estratégia do range; a existência de outros exemplos com donk não muda o resultado 6-6-3. |
| [PokerStars BR: defesa contra c-bets](https://www.pokerstars.com/pt-BR/poker/learn/lesson/8-lidando-com-as-c-bets-no-cash-game-6-max/) — sem data visível | Vocabulário: “valor de showdown”, “pagar”, “implied odds”, “floating”. Usa exemplos SB contra BB. | Explicar por que check não equivale a fold e por que posição/ação pré-flop importam; partes 7 e 11–13. |
| [PokerStars BR: resposta à c-bet excessiva](https://www.pokerstars.com/pt-BR/poker/learn/strategies/como-explorar-os-jogadores-que-fazem-c-bet-leve-em-jogos-de-limites-baixos/) — 2026-02-20 | O texto pergunta se a oportunidade de check-raise permite aumentar com qualquer mão; distingue valor de showdown de mãos que precisam de proteção. | Direção de FAQ da parte 7. O resultado inicial do nosso spot não mede uma frequência posterior de check-raise. |
| [Arquivo brasileiro de c-bet](https://www.pokerstars.com/pt-BR/poker/learn/tag/c-bet/) | O arquivo usa “bordos estáticos”, “C-Bet Polarizada” e “Dando check no range” como temas. | São termos locais de contexto, não prova de volume. No projeto, manter `board` como forma principal para consistência com app/glossário. |

### Padrão de linguagem

- `range/ranges`, `c-bet`, `donk bet`, `check-raise`, `flop`, `board`, `draw`, `overpair` e `solver` seguem o vocabulário existente. Escrever **pote**, **naipe**, **pagar**, **aumentar**, **dar check**, **blefe**. Primeira ocorrência pode explicar o termo técnico em uma frase.
- Usar **você**, português brasileiro e acentos corretos. Números editoriais: `98,2%`, `5,5bb`. Não deformar português para reproduzir consultas sem acento.
- Nos títulos/H2 que mencionarem solver, usar **solver de poker** ou **solver poker**, pois a palavra isolada tem outra intenção no banco histórico. Não é necessário acrescentar “solver” a todos os títulos.
- `flop monotone`: explicar “três cartas do mesmo naipe”; `nut flush`: explicar “o maior flush possível”; `vantagem de nuts`: explicar “maior concentração das mãos mais fortes”.
- `trinca` cobre o resultado, mas distinguir **set** (par na mão + uma carta no board) e **trips** (uma carta na mão + par no board) ao ensinar o conceito.
- App confirmado pela equipe nesta rodada: **Spots de estudo → título do spot → ⚡ Ver resultados**. A estratégia editorial continua baseada no EN revisado, não nas chamadas promocionais dos cards do app.

## 3. Proprietários atuais e prevenção de sobreposição

| Intenção ampla | Página proprietária | Limite dos 13 artigos |
|---|---|---|
| GTO, solver, ranges depois do flop, como usar a ferramenta | `/pt/solver` | Linkar a landing; cada artigo responde a um spot, não a uma nova introdução ao produto. |
| Continuation bet, quando dar c-bet, frequência e sizing gerais | `/pt/blog/holdem-continuation-bet` | Adicionar board/posição/pote na intenção principal. Definição resumida pode linkar o guia. |
| Quando dar 3-bet, sizing pré-flop, range de 3-bet | `/pt/blog/holdem-3bet` | Partes 8–10 tratam **do flop em um pote que já recebeu 3-bet**. “Sizing de 3-bet” isolado está fora do escopo. |
| Equity, calculadora de equity, cálculo geral | `/pt/blog/holdem-equity` | Equity/EQR explicam o resultado local; não tornar um spot outra calculadora ou guia geral. |
| Regras de leitura da mesa, melhores cinco cartas, mesa pareada | `/pt/blog/holdem-reading-the-board` | Partes 5/6/13 tratam da estratégia da textura; linkar regras se necessário. |
| In/out of position, por que posição importa | `/pt/blog/holdem-position-play` | Partes 11–13 tratam de SB agressor contra BB, com boards explícitos. |
| Ranges/tabelas pré-flop e estratégia geral | `holdem-starting-hands-chart`, `holdem-strategy` | Não converter os artigos em guias introdutórios desses temas. |

Repetir uma palavra técnica não é, por si só, canibalização. O problema seria várias páginas prometerem a mesma resposta ampla. As partes 1/2, 4/7, 6/13, 8/9/10 e 11/12 se diferenciam pela **pergunta, board e papel dos jogadores**; seus links cruzados ajudam a comparação.

## 4. Títulos fixos para metadata e readnext

**Copiar a coluna `title` sem variações para `POST.title` e cards/readnext entre lotes.** Todos têm no máximo 40 caracteres. `seoTitle` é separado e aparece em §5.

| # | slug | title |
|---|---|---|
| 1 | `a-high-board-cbet` | A-7-2: top pair também dá check |
| 2 | `k-high-board-cbet` | K-8-3: 99,8% de check |
| 3 | `broadway-board-strategy` | Q-J-T: draws não bastam |
| 4 | `donk-bet-strategy` | 9-8-7: a hora da donk bet |
| 5 | `monotone-board-strategy` | Flop monotone: check com nut flush |
| 6 | `paired-board-strategy` | 6-6-3: mais trincas, 97% de check |
| 7 | `low-board-check-raise` | 6-5-2: preparando o check-raise |
| 8 | `3bet-pot-cbet` | A-K-2: c-bet com todo o range |
| 9 | `3bet-pot-bet-sizing` | Q-T-7: 98,4% no mesmo tamanho |
| 10 | `3bet-pot-low-board` | 8-5-2: overpairs mantêm a pressão |
| 11 | `blind-battle-cbet` | K-T-6: c-bet entre os blinds |
| 12 | `blind-battle-connected-board` | 7-6-5: a c-bet cai para 9,6% |
| 13 | `ace-paired-board-strategy` | A-A-6: a c-bet sobe para 80,1% |

## 5. Atribuição por artigo

Títulos SEO têm no máximo 60 caracteres; descrições têm no máximo 160. A direção de H2/FAQ deve ser encaixada **na estrutura EN existente**. Não adicionar FAQ às partes cujo original não tenha essa seção só para inserir palavras-chave.

### 01. `a-high-board-cbet`

- **Principal proposta:** `c-bet no flop A-7-2`
- **seoTitle (51):** C-bet no flop A-7-2: por que o BB dá check em 98,2%
- **desc (133):** No flop A-7-2, o BB dá check com 98,2% do range, inclusive top pair. Veja a diferença entre equity e realização de equity neste spot.
- **H2:** Por que o BB dá check até com top pair?; O que muda entre equity e vantagem de range?
- **FAQ/dúvida:** Devo apostar sempre num flop com ás alto?
- **Limite e diferença:** Defesa do BB antes da c-bet; não apresentar 98,2% como frequência de c-bet do BTN.

### 02. `k-high-board-cbet`

- **Principal proposta:** `estratégia no flop K-8-3`
- **seoTitle (42):** Flop K-8-3: por que o BB dá check em 99,8%
- **desc (129):** No flop K-8-3, o BB quase nunca sai apostando. Compare os ranges, os backdoors e a realização de equity com o exemplo de ás alto.
- **H2:** Por que o check é ainda mais frequente no K-8-3?; Que backdoors existem num flop sem draws imediatos?
- **FAQ/dúvida:** Um flop com rei alto pede c-bet em todas as mãos?
- **Limite e diferença:** Contraste K-high/A-high e composição dos ranges; não duplicar o guia geral de c-bet.

### 03. `broadway-board-strategy`

- **Principal proposta:** `vantagem de nuts no flop Q-J-T`
- **seoTitle (43):** Flop Q-J-T: muitos draws, quase nenhum lead
- **desc (129):** No Q-J-T com dois naipes, 68% do range do BB tem draw e 99,9% dá check. Entenda como a vantagem de nuts muda esse flop conectado.
- **H2:** Quem tem vantagem de nuts no Q-J-T?; Por que ter draw não basta para sair apostando?
- **FAQ/dúvida:** Vantagem de range e vantagem de nuts são a mesma coisa?
- **Limite e diferença:** Aplicação da vantagem de nuts em três cartas altas conectadas; evitar tomar 'range poker' da landing.

### 04. `donk-bet-strategy`

- **Principal proposta:** `donk bet no flop 9-8-7`
- **seoTitle (49):** Donk bet no flop 9-8-7: por que o BB aposta 23,7%
- **desc (122):** No 9-8-7, o BB sai apostando com 23,7% do range. Veja a distribuição das mãos fortes e por que a donk bet depende do spot.
- **H2:** Por que a donk bet aparece no 9-8-7?; Este flop realmente dá vantagem de range ao BB?
- **FAQ/dúvida:** Quando uma donk bet faz sentido?
- **Limite e diferença:** Aposta inicial do caller no 9-8-7; não afirmar que o BB tem vantagem de equity nem inventar a c-bet posterior do BTN.

### 05. `monotone-board-strategy`

- **Principal proposta:** `estratégia no flop monotone`
- **seoTitle (43):** Flop monotone: por que o nut flush dá check
- **desc (129):** No Q-9-2 de espadas, a aposta grande aparece só em 3,2% do range do BB. Até o nut flush mistura check: veja o papel dos blockers.
- **H2:** Por que o tamanho grande perde espaço no flop monotone?; O que uma única espada muda na sua mão?
- **FAQ/dúvida:** Por que dar check com o nut flush?
- **Limite e diferença:** Três cartas do mesmo naipe e efeito dos blockers na aposta; o artigo de leitura de mesa mantém as regras gerais de flush.

### 06. `paired-board-strategy`

- **Principal proposta:** `estratégia no flop pareado 6-6-3`
- **seoTitle (50):** Flop pareado 6-6-3: mais trincas, mas 97% de check
- **desc (137):** No 6-6-3, o BB tem 26 combos de trinca contra 20 do BTN e ainda dá check em 97%. Entenda por que contar trincas não resolve a estratégia.
- **H2:** Por que o BB dá check mesmo com mais trincas?; Como trips e set se formam de maneiras diferentes?
- **FAQ/dúvida:** Ter mais trincas significa que devo sair apostando?
- **Limite e diferença:** Flop baixo pareado BTN contra BB; reservar A-A-6 e SB contra BB para a parte 13.

### 07. `low-board-check-raise`

- **Principal proposta:** `check-raise no flop 6-5-2`
- **seoTitle (52):** Check-raise no flop 6-5-2: por que começar com check
- **desc (136):** No 6-5-2, nenhum dos ranges tem uma sequência pronta e o BB dá check em 96,8%. Veja como pensar em check-raise sem inventar frequências.
- **H2:** Por que o BB dá check em 96,8% no 6-5-2?; Que mãos podem compor um check-raise neste flop?
- **FAQ/dúvida:** Dar check significa desistir da agressividade?
- **Limite e diferença:** Plano de defesa em flop baixo; frequência de check-raise não é dado medido se a saída termina na primeira ação.

### 08. `3bet-pot-cbet`

- **Principal proposta:** `c-bet em pote de 3-bet no A-K-2`
- **seoTitle (48):** C-bet em pote de 3-bet: 100% de apostas no A-K-2
- **desc (128):** No A-K-2 em pote de 3-bet, os 63 combos do BB apostam. Veja como SPR, ranges pré-flop e ausência de AA e KK no BTN mudam o spot.
- **H2:** Por que todo o range aposta no A-K-2?; O que o SPR de aproximadamente 4 muda neste pote?
- **FAQ/dúvida:** SPR baixo significa apostar sempre?
- **Limite e diferença:** Ação depois da 3-bet e relação stack/pote; não disputar 'quando dar 3-bet' ou 'sizing de 3-bet' pré-flop.

### 09. `3bet-pot-bet-sizing`

- **Principal proposta:** `tamanho da c-bet em pote de 3-bet`
- **seoTitle (47):** Tamanho da c-bet no Q-T-7: 98,4% em dois terços
- **desc (131):** No Q-T-7 em pote de 3-bet, 98,4% do range aposta dois terços do pote. Compare o preço dos draws e os limites dessa conta de equity.
- **H2:** Por que dois terços concentram as apostas no Q-T-7?; O que as pot odds explicam — e o que não explicam?
- **FAQ/dúvida:** O que é um tamanho geométrico de aposta?
- **Limite e diferença:** Sizing no flop Q-T-7 após 3-bet; manter o qualificador no título/H2 para não colidir com sizing pré-flop ou c-bet geral.

### 10. `3bet-pot-low-board`

- **Principal proposta:** `c-bet em flop baixo em pote de 3-bet`
- **seoTitle (53):** Flop baixo em pote de 3-bet: 97,8% de aposta no 8-5-2
- **desc (126):** No 8-5-2 em pote de 3-bet, o BB aposta dois terços em 97,8%. Veja por que overpairs mantêm a pressão mesmo sem acertar o flop.
- **H2:** Só três combos acertam o board: onde estão os overpairs?; Por que as trincas estão no range do caller?
- **FAQ/dúvida:** Não criar FAQ extra: incorporar as dúvidas aos H2 já existentes.
- **Limite e diferença:** Overpairs e range polarizado no 8-5-2; não chamar 97,8% de frequência total se esse número identifica o tamanho grande.

### 11. `blind-battle-cbet`

- **Principal proposta:** `c-bet blind vs blind no K-T-6`
- **seoTitle (48):** C-bet blind vs blind: o SB aposta 67,4% no K-T-6
- **desc (131):** No K-T-6 entre os blinds, o SB aposta 67,4% mesmo fora de posição. Veja como os ranges e a realização de equity explicam esse spot.
- **H2:** Por que o small blind aposta primeiro no K-T-6?; Como a realização de equity passa de 100% fora de posição?
- **FAQ/dúvida:** Não criar FAQ extra: responder às dúvidas nos H2 existentes.
- **Limite e diferença:** SB agressor contra BB em K-T-6; conteúdo de posições geral continua em holdem-position-play.

### 12. `blind-battle-connected-board`

- **Principal proposta:** `c-bet blind vs blind em flop conectado`
- **seoTitle (54):** Flop conectado entre os blinds: c-bet de 9,6% no 7-6-5
- **desc (128):** Os mesmos ranges e stacks, outro flop: no 7-6-5, o SB aposta só 9,6%. Compare com K-T-6 e veja como a textura muda a estratégia.
- **H2:** Por que 67,4% vira 9,6% quando só o flop muda?; Quais mãos sustentam as poucas apostas no 7-6-5?
- **FAQ/dúvida:** Não criar FAQ extra: responder à comparação entre boards nos H2 existentes.
- **Limite e diferença:** Comparação controlada K-T-6/7-6-5 entre blinds; não usar a donk do caller em 9-8-7 como se fosse a mesma ação.

### 13. `ace-paired-board-strategy`

- **Principal proposta:** `c-bet no flop A-A-6 entre blinds`
- **seoTitle (47):** Flop A-A-6: por que a c-bet do SB chega a 80,1%
- **desc (126):** No A-A-6 entre os blinds, o SB aposta 80,1% e tem 88 combos de trinca contra 66 do BB. Compare com o flop baixo pareado 6-6-3.
- **H2:** Quem tem mais trincas no A-A-6?; Por que dois flops pareados produzem frequências tão diferentes?
- **FAQ/dúvida:** Não criar FAQ extra: esclarecer o contraste com 6-6-3 nos H2 existentes.
- **Limite e diferença:** Ás pareado entre blinds; o contraste com 6-6-3 também muda posições/ranges, portanto não é comparação só de textura.

## 6. Verificação antes de publicar

- Aplicar os 13 títulos fixos em todos os lotes e ligações de leitura seguinte.
- Conferir `POST.title <= 40`, `seoTitle <= 60` e `desc <= 160` após a edição final. As propostas desta versão passaram na contagem de caracteres.
- Não prometer resultado de uma street que a saída não mostra. Nas partes 1–7, a frequência inicial do BB não é automaticamente a frequência de c-bet do BTN.
- Conservar condições, arredondamentos, ausência de rake modelado e as ressalvas do EN. Na parte 9, diferenciar a conta simplificada de odds/equity de uma recomendação completa de call.
- Partes 11→12 podem comparar alteração só do board quando os parâmetros são iguais; partes 6→13 também mudam posições/ranges e precisam dizer isso.
- Meta e keywords não substituem a qualidade da explicação: o leitor deve entender **quem age, o que o número mede, por que o range produz a decisão e até onde a conclusão vale**.

