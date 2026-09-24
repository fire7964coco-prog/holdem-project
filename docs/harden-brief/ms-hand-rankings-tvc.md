# ms 경화 브리프 — `holdem-hand-rankings` · `holdem-tournament-vs-cash-game` (2026-09-24 · 사장님 지시)

> 사장님 지시(09-24): 「ms 두 편이 히어로이미지도 없고 조금 부실하다 — 경화작업 프로세서대로 꼼꼼히」.
> 절차 정본 = `docs/hardening-protocol.md` §2~§5 (A 준비 = 이 파일 → B 재저작 → C 마감).
> 🪶 결재 40(«문안·구조 전파는 핵심 9까지»)은 **EN 정정의 자동 전파 범위** 규칙이다. 이번은 사장님이 특정 2편을 지목한 단건 경화라 그 결재와 충돌하지 않는다.

## 0. B 구간이 반드시 먼저 읽을 것 (이 순서)

1. `docs/keyword-bank/ms-posting-reference.md` **전문** — 🔴 용어·문체 정본. 특히 §1(kad·tangan·posisi/kedudukan) · §2(문중 소문자 `anda`, 문두·제목만 `Anda`) · §3(인니어 금지어 표 — kartu·uang·bisa·karena·setelah·baru 등) · §4(숫자 영어식 `1,326` · `2.5` · `35%` 앞 공백 없음).
2. `docs/translation-terms-ms.md` (보조 — 정본과 어긋나면 정본이 이긴다).
3. `docs/keyword-bank/ms-core-volumes.md` (이번 실측).
4. 원천: `lib/posts-en/<slug>.ts` **현행판 전문**(EN이 마스터) + 현재 `lib/posts-ms/<slug>.ts`(기존 ms 문장·용어의 톤 참고용 — 좋은 문장은 살린다).

🪶 프로토콜 §3 「브리프에 EN 축어」 대신 **EN 파일을 직접 읽는다**: 두 편 모두 ms가 EN의 55~60% 분량이라 델타가 사실상 EN 전문이다(tvc는 06-11 이후 EN 경화·정정 9커밋을 한 번도 받지 않음 · hand-rankings는 09-09 EN-먼저 2커밋 `e47a3f2f`·`125c83f5`가 ms에 미전파). **EN 현행판을 원천으로 쓰면 드리프트가 전부 들어온다.**

## 1. 공통 규칙 (두 편)

| 자리 | 규칙 |
|---|---|
| 목표 | **EN 현행판의 구조(H2·H3·표·디렉티브·FAQ 전 문항·경험담·3 Things·readnext·Related)를 빠짐없이 ms로 재저작.** 직역 금지 — 말레이시아 독자가 읽는 자연스러운 말레이어(ms 정본 문체) |
| 🔴 불변(§13) | 카드 토큰(`A♠` 등) · `:::hand[...]` 인자 · 모든 % · 확률 · 조합 수 · 금액($) · bb · 퍼즐의 보드와 정답 — **EN 축어 복사**. 숫자 구분자는 EN과 동일(영어식) |
| 경험담 | EN의 1인칭 경험담을 **그대로 번역**(사실을 만들지 않는다 · 현지화로 새 일화 금지) |
| 직답 | EN의 각 H2 직후 직답 단락을 살린다. EN에 `> **Short answer**`류 블록이 있으면 라벨은 ms 정본 **`> **Jawapan ringkas**`** 하나 |
| H2 | 말레이어 **질문형/검색형**(EN 질문형 H2를 자연스러운 말레이어 질문으로). Title Case 대문자 Anda 허용(제목) |
| FAQ 형식 | `**Q. …**` + 빈 줄 + `A. …` (빈 줄 필수 — 스키마) · EN 문항 **전부** |
| 링크 | 🔴 **ms에 실존하는 슬러그만 링크.** 실존 21편 = `lib/posts-ms/index.ts`(입문 8: texas-holdem-rules-for-beginners · holdem-game-order · holdem-betting-actions · holdem-blind-meaning · holdem-all-in-rules · holdem-showdown-rules · holdem-hand-rankings · holdem-tournament-vs-cash-game + GTO 13). **없는 글(kicker·tiebreak·split-pot·flush-vs-straight·probability·starting-hands-chart·icm·bubble·short-stack·rake·tournament·pot-odds 등)은 링크를 빼고 설명 문장은 보존**(ms 정본 §9 «앵커를 목적지 범위로»). 경로는 `/ms/blog/<slug>` · 끝 `/` 금지 |
| 링크 매핑(허용) | EN의 tiebreak/split-pot «동점·팟 나누기» 앵커 → `/ms/blog/holdem-showdown-rules`로 **한 번만** 걸 수 있다(그 글에 «Cards Speak»·쇼다운 순서가 있다. 킥커 상세를 약속하는 앵커로 쓰지 마라) · EN blind-meaning·game-order·hand-rankings 링크 → ms 동일 슬러그 |
| 썸네일 링크 | `"thumb:/images/…"` 제목 부착은 **대상이 ms 실존 글일 때만**, 이미지는 그 ms 글의 `image` 값 |
| readnext | `:::readnext[Baca seterusnya]` + ms 실존 글 2장(형식: `/ms/blog/<slug> \| 제목 \| 이미지`) — 제목·이미지는 **대상 ms 글의 현행 `title`/`image`**(아래 §4 표) |
| Related | `## Artikel Berkaitan` + EN과 같은 grid HTML(스타일 문자열 그대로) · 카드 4~5장 모두 ms 실존 글 |
| 금지 | 백틱 · 굵은 단락 안 `**` 중첩(→ 「」 또는 ==…==) · `tldr`에 마크다운 · slug 변경 · 새 출처 창작 · «lengkap/total» 류 정리형 제목 남발 |
| 메타 | `seoTitle` ≤ 60자 · `desc` ≤ 160자(권장 120~155) · `tldr` 평문 2~3문장 · `updated: "2026-09-24"` · `masterUpdated: "<그 EN 파일의 updated>"` · `readTime` ms 형식 **`"N minit"`**(코퍼스 19/21 · «min» 2건은 소수파) |
| 이미지 | `image` 필드 신설(아래) + `imageAlt` 말레이어 구체 묘사 · `keepImagesInBody: true` 유지 · 본문 이미지 alt·title 말레이어 |

## 2. `holdem-hand-rankings` (EN updated 2026-09-17 · ms masterUpdated 09-07)

- **키워드(실측 §1)**: 주 표적 **«susunan kad poker»(140/월)** — 현재 seoTitle의 «Susunan tangan poker»는 **볼륨 null** → 교체.
  - `seoTitle` 예: 「Ingat menang tetapi kalah pot? — Susunan Kad Poker Tertinggi」 수준(훅 유지 + 키워드). 60자 이내.
  - `title`·첫 H2·`tldr` 첫 문장에 «susunan kad poker» · 본문에 «dari tertinggi hingga terendah» 자연 배치.
  - `tags`: susunan kad poker · ranking poker · susunan poker · kedudukan tangan poker · kad poker tertinggi · poker hand ranking · royal flush · kicker (8개 내외).
  - 🔴 본문 «tangan»(hand) 용어는 그대로(정본 §1: tangan 203 확정). «susunan kad»는 **제목·검색어 자리**의 어구다 — 본문 전체를 kad로 바꾸지 마라.
- **이미지**: `image: "/images/holdem-hand-rankings-hero.webp"`(실사 · Royal Flush 스페이드) · 본문에 EN과 같은 자리에 `holdem-hand-rankings-board-puzzle.webp`(퍼즐 절) · `holdem-hand-rankings-board-read.webp`(1초 루틴 절) 추가 · 기존 `holdem-kicker-showdown-neutral.webp` 유지. 인포그래픽 속 영어 글자는 18언어 공용 자산이라 그대로 둔다(alt만 ms).
- **FAQ**: 현재 8 → EN **20문항 전부**.
- **EN에 있고 ms에 없는 것**: «What Beats What» 매치업 표 절 확인 · «Why Does a Flush Beat a Straight?» · «Are Poker Hand Rankings the Same in Every Game?» 표 · 마무리 문단의 starting-hands 링크(→ ms 미실존 → 문장만 두거나 `/ms/blog/texas-holdem-rules-for-beginners`로 «langkah seterusnya» 재구성) · readnext · Related.
- **§13 자리(C 구간 손검산 대상)**: 10개 `:::hand` · 퍼즐 3개(보드 A♠A♦K♥K♣Q♠ / 7♥8♥9♥10♥J♠ / K♠K♦K♥A♠2♠ + 각 정답) · 매치업 표 · 확률 표(0.0032% … 17.4%) · «61%» 문장 · 1초 루틴 보드 9♥Q♥9♠8♣7♠.
- **되돌리지 마라**: 09-17 12로케일 전파분(abdc7a21) — 이미 ms에 있는 §13 정정은 EN 현행과 같으므로 EN을 따르면 유지된다.

## 3. `holdem-tournament-vs-cash-game` (EN updated 2026-09-13 · ms masterUpdated 없음 · updated 06-11)

- **키워드(실측 §2)**: 말레이어 수요 ≈ 0. 영어 차용 «cash game»·«tournament»를 그대로(코퍼스 관습). 키워드보다 **내용 완결**.
  - `seoTitle`은 현재 훅(「Cip bukan selalu duit — Tournament atau cash game?」) 결을 유지하며 다듬어도 된다(≤60).
- **이미지**: `image: "/images/holdem-tournament-vs-cash-hero.webp"`(EN 히어로) · 본문은 **EN과 같게** `holdem-tournament-chips-not-money.webp`(칩 절) · `holdem-tournament-icm-bubble.webp`(ICM 절). 기존 ms 본문 이미지 3장(`tournament-table-action.webp` · `icm-chips-not-money-real.webp` · `holdem-bubble-table.webp`)은 **제거**(EN 구성으로 통일 — id 등 핵심 로케일과 같은 구성).
- **EN에 있고 ms에 없는 H2(재저작 필수)**: What Is a Cash Game in Poker? · Cash Game vs Tournament Strategy — What Actually Changes(+ Deep-Stack vs Short-Stack H3) · Are Cash Games Harder Than Tournaments? · Are Cash Games More Profitable? bb/100 vs ROI · When to Leave a Cash Game · Beginner Decision Framework(H3 3개). EN의 `:::note[…]`(cash-game 전용 글 확장 예고)는 ms에 그 글이 없으니 **예고 문장은 옮기지 마라**(약속 금지).
- **FAQ**: 6 → EN **10문항 전부**. «Do you get taxed on poker tournament winnings?»는 🔴 posting.mdc «합법/불법 금지» 절 적용 — EN 문장 범위(일반 정보·현지 규정 확인 권고)를 넘어 말레이시아 법·세금을 판정하지 마라.
- **§13·수치 자리(C 손검산 대상)**: bb/100·ROI 표 · 뱅크롤 바이인 수(표) · 스택 bb 수 · ICM 예시 수치 · 블라인드 예시 · 칩 수 FAQ — **EN 축어**.
- **readnext**: EN은 pot-odds·probability(ms 미실존) → ms 실존 2장으로 교체: `holdem-blind-meaning` · `holdem-all-in-rules`.

## 4. ms 실존 글 — 링크·카드용 현행 값 (09-24 grep)

| slug | title | image |
|---|---|---|
| texas-holdem-rules-for-beginners | Cara Main Texas Hold'em untuk Pemula — Peraturan, Cip, Kedudukan Tangan & Strategi Pertama | /images/rules-texas-holdem.webp |
| holdem-game-order | Cara Main Texas Hold'em: Urutan Permainan Dari Blinds Hingga Showdown | /images/blog-holdem-game-flow.webp |
| holdem-betting-actions | Aksi Pertaruhan Texas Hold'em: Cek, Call, Raise, Fold | /images/holdem-betting-actions-hero.webp |
| holdem-blind-meaning | Apa Itu Blind Dalam Poker? Small Blind vs Big Blind, Dijelaskan Dengan Mudah | /images/holdem-blind-meaning-hero.webp |
| holdem-all-in-rules | Peraturan All-In Texas Hold'em: Side Pot, Re-Raise & Showdown | /images/holdem-all-in-rules-hero.webp |
| holdem-showdown-rules | Peraturan Showdown Texas Hold'em: Siapa Buka Kad Dulu, Muck dan Slow Roll | /images/holdem-showdown-rules-hero.webp |
| holdem-hand-rankings | (이번 개정 title) | /images/holdem-hand-rankings-hero.webp |
| holdem-tournament-vs-cash-game | (이번 개정 title) | /images/holdem-tournament-vs-cash-hero.webp |

readnext·카드에는 짧은 제목을 써도 된다(기존 ms 관례: «Urutan Permainan», «Peraturan All-In & Side Pot»).

## 5. B 종료 조건

- 두 파일 편집 완료 → `npm run audit:hard -- --slug=<slug> --locale=ms` 🔴 0 (자기 게이트만).
- 보고: 편별 H2 수·FAQ 수·이미지 수·링크 목록(대상 전부 ms 실존 확인)·EN 대비 뺀 것과 이유.
