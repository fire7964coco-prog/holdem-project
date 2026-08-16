# 토큰을 안 타는 색 — 전수 스캔

> `node scripts/scan-color-debt.mjs`로 재생성. 대상 = `components/` `app/` `lib/` (tsx·ts·css).
> 제외 = `app/globals.css`(토큰 정의처) · `*Diagram.tsx`(SVG 일러스트).
> 오탐 제거 = 색 문맥 없는 3~4자리 `#XXX` **34건**(「#1000」 같은 순위·수량 표기).

## 한눈에

| 구역 | 자리 | 파일 | 성격 |
|---|---:|---:|---|
| **UI (components·app)** | **1322** | 57 | 🔴 토큰 회수 대상 — 톤 변경이 여기서 갈린다 |
| **포스트 본문 인라인 스타일** | **9784** | 453 | 🟠 콘텐츠 편집 필요 · 다국어라 파급 큼 |
| 데이터·기타 | 485 | 3 | 🟡 의미색(등급·상태)일 수 있음 — 개별 판정 |
| **합계** | **11591** | 513 | |

**종류별**: hex 706 · rgba 9799 · arbitrary 96 · palette 990

## 🔴 UI — 회수 대상

톤을 바꾸면 **이 자리들만 옛 톤으로 남는다.** 위에서부터 처리하면 효과가 크다.

| 파일 | 자리 | 내역 |
|---|---:|---|
| `app/calculator/calculator-client.tsx` | 146 | palette 139 · hex 6 · rgba 1 |
| `app/en/calculator/calculator-client.tsx` | 140 | palette 139 · hex 1 |
| `components/quiz-widget.tsx` | 71 | hex 28 · rgba 43 |
| `app/home-client.tsx` | 63 | palette 62 · rgba 1 |
| `app/_archive/home-client.tsx` | 63 | palette 62 · rgba 1 |
| `app/blog/roadmap/blog-roadmap-client.tsx` | 59 | hex 33 · arbitrary 1 · palette 25 |
| `app/tournaments/tournaments-client.tsx` | 54 | palette 54 |
| `app/win-rate-quiz/_simulator.tsx` | 45 | hex 27 · rgba 18 |
| `app/blog/[slug]/blog-post-client.tsx` | 41 | hex 25 · rgba 7 · arbitrary 8 · palette 1 |
| `components/tournament-guide-post.tsx` | 35 | rgba 10 · hex 13 · arbitrary 11 · palette 1 |
| `app/rules/rules-client.tsx` | 35 | hex 9 · arbitrary 9 · palette 17 |
| `app/community/post-card.tsx` | 34 | hex 21 · rgba 13 |
| `app/login/page.tsx` | 33 | hex 21 · rgba 12 |
| `app/community/event-tab.tsx` | 31 | hex 12 · rgba 18 · palette 1 |
| `app/pub/[region]/pub-region-client.tsx` | 31 | hex 13 · palette 5 · arbitrary 13 |
| `app/blog/blog-index-client.tsx` | 30 | palette 6 · hex 10 · arbitrary 9 · rgba 5 |
| `app/en/quiz/quiz-client.tsx` | 30 | hex 12 · rgba 4 · palette 14 |
| `app/quiz/quiz-client.tsx` | 30 | hex 12 · rgba 4 · palette 14 |
| `app/rules/texas-holdem/rules-texas-holdem-client.tsx` | 25 | palette 25 |
| `components/cluster-minimap.tsx` | 22 | hex 11 · arbitrary 11 |
| `app/holdem-practice/holdem-practice-client.tsx` | 18 | hex 11 · rgba 2 · arbitrary 3 · palette 2 |
| `components/intl-blog-post-client.tsx` | 17 | hex 8 · arbitrary 8 · palette 1 |
| `app/admin/admin-client.tsx` | 17 | hex 17 |
| `app/en/hand-chart/hand-chart-client.tsx` | 17 | hex 15 · rgba 1 · arbitrary 1 |
| `app/hand-chart/hand-chart-client.tsx` | 17 | hex 15 · rgba 1 · arbitrary 1 |
| `components/poker-odds-calculator.tsx` | 16 | palette 12 · hex 2 · arbitrary 2 |
| `components/community-cta.tsx` | 14 | hex 11 · rgba 3 |
| `app/community/chat-tab.tsx` | 14 | hex 11 · rgba 3 |
| `app/pub/pub-index-client.tsx` | 12 | hex 5 · palette 2 · arbitrary 5 |
| `components/site-popup.tsx` | 10 | rgba 2 · hex 8 |
| `app/en/ranking/ranking-data.ts` | 10 | palette 10 |
| `app/post/[id]/post-detail-client.tsx` | 10 | rgba 6 · hex 4 |
| `app/ranking/ranking-data.ts` | 10 | palette 10 |
| `app/rules/omaha/rules-omaha-client.tsx` | 10 | hex 3 · palette 4 · arbitrary 3 |
| `app/strategy/strategy-client.tsx` | 10 | palette 10 |
| `components/ranking-table.tsx` | 9 | hex 4 · arbitrary 4 · palette 1 |
| `app/rules/seven-card-stud/rules-seven-card-stud-client.tsx` | 9 | hex 3 · palette 3 · arbitrary 3 |
| `components/blog-top-bar.tsx` | 8 | hex 5 · rgba 3 |
| `components/reading-progress-bar.tsx` | 8 | hex 6 · rgba 2 |
| `app/en/glossary/glossary-client.tsx` | 7 | hex 7 |
| `components/feed-nav-arrows.tsx` | 6 | hex 4 · rgba 2 |
| `components/card-thumb.tsx` | 5 | hex 4 · rgba 1 |
| `components/footer.tsx` | 5 | hex 4 · arbitrary 1 |
| `components/intl-footer.tsx` | 5 | hex 4 · arbitrary 1 |
| `components/calc-cta-button.tsx` | 4 | hex 2 · arbitrary 2 |
| `components/tournament-board.tsx` | 4 | palette 4 |
| `app/community/community-client.tsx` | 4 | rgba 4 |
| `app/en/ranking/ranking-client.tsx` | 4 | palette 4 |
| `app/ranking/ranking-client.tsx` | 4 | palette 4 |
| `app/solver/solver-client.tsx` | 4 | palette 4 |
| `components/site-chrome.tsx` | 3 | hex 3 |
| `components/solver-promo.tsx` | 3 | rgba 2 · hex 1 |
| `app/hands/hands-client.tsx` | 3 | palette 3 |
| `components/bottom-tab-bar.tsx` | 2 | rgba 2 |
| `components/hub-sidebar.tsx` | 2 | rgba 2 |
| `components/side-rail.tsx` | 2 | hex 2 |
| `app/layout.tsx` | 1 | hex 1 |

## 🟠 포스트 본문 인라인 스타일

본문 `content` 문자열 안의 `style="color:#..."`. 상당수가 **어두운 배경을 전제**(`rgba(255,255,255,...)` 테두리)해서 라이트 테마와 이미 어긋나 있을 수 있다. 로케일마다 같은 글이 있어 한 건이 N배로 퍼진다.

| 파일 | 자리 | 내역 |
|---|---:|---|
| `lib/posts/apt-incheon-2026-guide.ts` | 76 | rgba 63 · hex 13 |
| `lib/posts/appt-korea-2026-guide.ts` | 69 | rgba 59 · hex 10 |
| `lib/posts/apt-jeju-2026-fall-guide.ts` | 69 | rgba 58 · hex 11 |
| `lib/posts-de/holdem-tournament.ts` | 69 | rgba 59 · hex 10 |
| `lib/posts-en/holdem-tournament.ts` | 69 | rgba 59 · hex 10 |
| `lib/posts-es/holdem-tournament.ts` | 69 | rgba 59 · hex 10 |
| `lib/posts-id/holdem-tournament.ts` | 69 | rgba 59 · hex 10 |
| `lib/posts-ja/holdem-tournament.ts` | 69 | rgba 59 · hex 10 |
| `lib/posts-pt/holdem-tournament.ts` | 69 | rgba 59 · hex 10 |
| `lib/posts-zh/holdem-tournament.ts` | 69 | rgba 59 · hex 10 |
| `lib/posts-zh-hant/holdem-tournament.ts` | 61 | rgba 51 · hex 10 |
| `lib/posts-en/wsop-2026-tournament-guide.ts` | 52 | rgba 45 · hex 7 |
| `lib/posts-de/korea-poker-marathon-2026.ts` | 45 | rgba 42 · hex 3 |
| `lib/posts-en/korea-poker-marathon-2026.ts` | 45 | rgba 42 · hex 3 |
| `lib/posts-es/korea-poker-marathon-2026.ts` | 45 | rgba 42 · hex 3 |
| `lib/posts-id/korea-poker-marathon-2026.ts` | 45 | rgba 42 · hex 3 |
| `lib/posts-ja/korea-poker-marathon-2026.ts` | 45 | rgba 42 · hex 3 |
| `lib/posts-pt/korea-poker-marathon-2026.ts` | 45 | rgba 42 · hex 3 |
| `lib/posts-zh/korea-poker-marathon-2026.ts` | 45 | rgba 42 · hex 3 |
| `lib/posts-zh-hant/korea-poker-marathon-2026.ts` | 45 | rgba 42 · hex 3 |
| `lib/posts-es/wsop-2026-tournament-guide.ts` | 38 | rgba 38 |
| `lib/posts/wsop-2026-tournament-guide.ts` | 36 | rgba 36 |
| `lib/posts-ja/texas-holdem-rules-for-beginners.ts` | 36 | rgba 36 |
| `lib/posts-zh-hant/wpt-australia-2026-guide.ts` | 36 | rgba 36 |
| `lib/posts-de/texas-holdem-rules-for-beginners.ts` | 34 | rgba 34 |
| `lib/posts-en/texas-holdem-rules-for-beginners.ts` | 34 | rgba 34 |
| `lib/posts-es/texas-holdem-rules-for-beginners.ts` | 34 | rgba 34 |
| `lib/posts-id/texas-holdem-rules-for-beginners.ts` | 34 | rgba 34 |
| `lib/posts-pt/texas-holdem-rules-for-beginners.ts` | 34 | rgba 34 |
| `lib/posts-zh/texas-holdem-rules-for-beginners.ts` | 34 | rgba 34 |
| `lib/posts-zh-hant/ept-barcelona-2026-guide.ts` | 34 | rgba 34 |
| `lib/posts/holdem-masters-7th-guide.ts` | 33 | rgba 32 · hex 1 |
| `lib/posts/pokerstars-appt-satellite-guide.ts` | 32 | rgba 32 |
| `lib/posts-de/holdem-glossary.ts` | 32 | rgba 32 |
| `lib/posts-de/wpt-australia-2026-guide.ts` | 32 | rgba 32 |
| `lib/posts-en/wpt-australia-2026-guide.ts` | 32 | rgba 32 |
| `lib/posts-es/wpt-australia-2026-guide.ts` | 32 | rgba 32 |
| `lib/posts-id/wpt-australia-2026-guide.ts` | 32 | rgba 32 |
| `lib/posts-ja/wpt-australia-2026-guide.ts` | 32 | rgba 32 |
| `lib/posts-pt/wpt-australia-2026-guide.ts` | 32 | rgba 32 |
| `lib/posts-zh/holdem-glossary.ts` | 32 | rgba 32 |
| `lib/posts-zh/wpt-australia-2026-guide.ts` | 32 | rgba 32 |
| `lib/posts-ar/texas-holdem-rules-for-beginners.ts` | 30 | rgba 30 |
| `lib/posts-bn/texas-holdem-rules-for-beginners.ts` | 30 | rgba 30 |
| `lib/posts-de/ept-barcelona-2026-guide.ts` | 30 | rgba 30 |
| `lib/posts-en/ept-barcelona-2026-guide.ts` | 30 | rgba 30 |
| `lib/posts-en/holdem-glossary.ts` | 30 | rgba 30 |
| `lib/posts-es/ept-barcelona-2026-guide.ts` | 30 | rgba 30 |
| `lib/posts-es/holdem-glossary.ts` | 30 | rgba 30 |
| `lib/posts-fil/texas-holdem-rules-for-beginners.ts` | 30 | rgba 30 |
| `lib/posts-he/texas-holdem-rules-for-beginners.ts` | 30 | rgba 30 |
| `lib/posts-hi/texas-holdem-rules-for-beginners.ts` | 30 | rgba 30 |
| `lib/posts-id/ept-barcelona-2026-guide.ts` | 30 | rgba 30 |
| `lib/posts-id/holdem-glossary.ts` | 30 | rgba 30 |
| `lib/posts-ja/ept-barcelona-2026-guide.ts` | 30 | rgba 30 |
| `lib/posts-ja/holdem-glossary.ts` | 30 | rgba 30 |
| `lib/posts-ms/texas-holdem-rules-for-beginners.ts` | 30 | rgba 30 |
| `lib/posts-pt/ept-barcelona-2026-guide.ts` | 30 | rgba 30 |
| `lib/posts-pt/holdem-glossary.ts` | 30 | rgba 30 |
| `lib/posts-ro/texas-holdem-rules-for-beginners.ts` | 30 | rgba 30 |
| `lib/posts-sw/texas-holdem-rules-for-beginners.ts` | 30 | rgba 30 |
| `lib/posts-th/texas-holdem-rules-for-beginners.ts` | 30 | rgba 30 |
| `lib/posts-tr/texas-holdem-rules-for-beginners.ts` | 30 | rgba 30 |
| `lib/posts-uk/texas-holdem-rules-for-beginners.ts` | 30 | rgba 30 |
| `lib/posts-vi/texas-holdem-rules-for-beginners.ts` | 30 | rgba 30 |
| `lib/posts-zh/ept-barcelona-2026-guide.ts` | 30 | rgba 30 |
| `lib/posts-zh-hant/holdem-glossary.ts` | 30 | rgba 30 |
| `lib/posts-de/apt-incheon-2026-guide.ts` | 28 | rgba 20 · hex 8 |
| `lib/posts-de/holdem-3bet.ts` | 28 | rgba 28 |
| `lib/posts-de/holdem-hand-rankings.ts` | 28 | rgba 28 |
| `lib/posts-en/apt-incheon-2026-guide.ts` | 28 | rgba 20 · hex 8 |
| `lib/posts-en/holdem-3bet.ts` | 28 | rgba 28 |
| `lib/posts-en/holdem-hand-rankings.ts` | 28 | rgba 28 |
| `lib/posts-es/apt-incheon-2026-guide.ts` | 28 | rgba 20 · hex 8 |
| `lib/posts-es/holdem-3bet.ts` | 28 | rgba 28 |
| `lib/posts-es/holdem-hand-rankings.ts` | 28 | rgba 28 |
| `lib/posts-id/apt-incheon-2026-guide.ts` | 28 | rgba 20 · hex 8 |
| `lib/posts-id/holdem-3bet.ts` | 28 | rgba 28 |
| `lib/posts-ja/apt-incheon-2026-guide.ts` | 28 | rgba 20 · hex 8 |
| `lib/posts-ja/holdem-3bet.ts` | 28 | rgba 28 |
| `lib/posts-ja/holdem-hand-rankings.ts` | 28 | rgba 28 |
| `lib/posts-pt/apt-incheon-2026-guide.ts` | 28 | rgba 20 · hex 8 |
| `lib/posts-pt/holdem-3bet.ts` | 28 | rgba 28 |
| `lib/posts-zh/apt-incheon-2026-guide.ts` | 28 | rgba 20 · hex 8 |
| `lib/posts-zh/holdem-3bet.ts` | 28 | rgba 28 |
| `lib/posts-zh/holdem-drawing-odds.ts` | 28 | rgba 28 |
| `lib/posts-zh/holdem-hand-rankings.ts` | 28 | rgba 28 |
| `lib/posts-zh-hant/apt-incheon-2026-guide.ts` | 28 | rgba 20 · hex 8 |
| `lib/posts-zh-hant/holdem-3bet.ts` | 28 | rgba 28 |
| `lib/posts-de/holdem-drawing-odds.ts` | 26 | rgba 26 |
| `lib/posts-de/holdem-probability.ts` | 26 | rgba 26 |
| `lib/posts-de/holdem-tournament-vs-cash-game.ts` | 26 | rgba 26 |
| `lib/posts-en/holdem-drawing-odds.ts` | 26 | rgba 26 |
| `lib/posts-en/holdem-probability.ts` | 26 | rgba 26 |
| `lib/posts-en/holdem-tournament-vs-cash-game.ts` | 26 | rgba 26 |
| `lib/posts-es/holdem-drawing-odds.ts` | 26 | rgba 26 |
| `lib/posts-es/holdem-probability.ts` | 26 | rgba 26 |
| `lib/posts-es/holdem-tournament-vs-cash-game.ts` | 26 | rgba 26 |
| `lib/posts-fa/texas-holdem-rules-for-beginners.ts` | 26 | rgba 26 |
| `lib/posts-fr/texas-holdem-rules-for-beginners.ts` | 26 | rgba 26 |
| `lib/posts-id/holdem-drawing-odds.ts` | 26 | rgba 26 |
| `lib/posts-id/holdem-probability.ts` | 26 | rgba 26 |
| `lib/posts-id/holdem-tournament-vs-cash-game.ts` | 26 | rgba 26 |
| `lib/posts-it/texas-holdem-rules-for-beginners.ts` | 26 | rgba 26 |
| `lib/posts-ja/holdem-drawing-odds.ts` | 26 | rgba 26 |
| `lib/posts-ja/holdem-probability.ts` | 26 | rgba 26 |
| `lib/posts-ja/holdem-tournament-vs-cash-game.ts` | 26 | rgba 26 |
| `lib/posts-pl/texas-holdem-rules-for-beginners.ts` | 26 | rgba 26 |
| `lib/posts-pt/holdem-drawing-odds.ts` | 26 | rgba 26 |
| `lib/posts-pt/holdem-probability.ts` | 26 | rgba 26 |
| `lib/posts-ru/texas-holdem-rules-for-beginners.ts` | 26 | rgba 26 |
| `lib/posts-zh/holdem-probability.ts` | 26 | rgba 26 |
| `lib/posts-zh/holdem-tournament-vs-cash-game.ts` | 26 | rgba 26 |
| `lib/posts-zh-hant/holdem-drawing-odds.ts` | 26 | rgba 26 |
| `lib/posts-zh-hant/holdem-tournament-vs-cash-game.ts` | 26 | rgba 26 |
| `lib/posts-id/holdem-hand-rankings.ts` | 24 | rgba 24 |
| `lib/posts-pt/holdem-hand-rankings.ts` | 24 | rgba 24 |
| `lib/posts-zh/holdem-tiebreak-rules.ts` | 24 | rgba 24 |
| `lib/posts/ggpoker-wsop-express-satellite-guide.ts` | 22 | rgba 19 · hex 3 |
| `lib/posts-de/holdem-all-in-rules.ts` | 22 | rgba 22 |
| `lib/posts-de/holdem-bad-beat.ts` | 22 | rgba 22 |
| `lib/posts-de/holdem-continuation-bet.ts` | 22 | rgba 22 |
| `lib/posts-de/holdem-game-order.ts` | 22 | rgba 22 |
| `lib/posts-de/holdem-icm.ts` | 22 | rgba 22 |
| `lib/posts-de/holdem-outs.ts` | 22 | rgba 22 |
| `lib/posts-de/holdem-tiebreak-rules.ts` | 22 | rgba 22 |
| `lib/posts-de/holdem-when-to-fold.ts` | 22 | rgba 22 |
| `lib/posts-en/holdem-all-in-rules.ts` | 22 | rgba 22 |
| `lib/posts-en/holdem-bad-beat.ts` | 22 | rgba 22 |
| `lib/posts-en/holdem-continuation-bet.ts` | 22 | rgba 22 |
| `lib/posts-en/holdem-game-order.ts` | 22 | rgba 22 |
| `lib/posts-en/holdem-icm.ts` | 22 | rgba 22 |
| `lib/posts-en/holdem-outs.ts` | 22 | rgba 22 |
| `lib/posts-en/holdem-tiebreak-rules.ts` | 22 | rgba 22 |
| `lib/posts-en/holdem-when-to-fold.ts` | 22 | rgba 22 |
| `lib/posts-es/holdem-all-in-rules.ts` | 22 | rgba 22 |
| `lib/posts-es/holdem-bad-beat.ts` | 22 | rgba 22 |
| `lib/posts-es/holdem-continuation-bet.ts` | 22 | rgba 22 |
| `lib/posts-es/holdem-game-order.ts` | 22 | rgba 22 |
| `lib/posts-es/holdem-icm.ts` | 22 | rgba 22 |
| `lib/posts-es/holdem-outs.ts` | 22 | rgba 22 |
| `lib/posts-es/holdem-tiebreak-rules.ts` | 22 | rgba 22 |
| `lib/posts-es/holdem-when-to-fold.ts` | 22 | rgba 22 |
| `lib/posts-fil/holdem-game-order.ts` | 22 | rgba 22 |
| `lib/posts-id/holdem-all-in-rules.ts` | 22 | rgba 22 |
| `lib/posts-id/holdem-bad-beat.ts` | 22 | rgba 22 |
| `lib/posts-id/holdem-continuation-bet.ts` | 22 | rgba 22 |
| `lib/posts-id/holdem-game-order.ts` | 22 | rgba 22 |
| `lib/posts-id/holdem-icm.ts` | 22 | rgba 22 |
| `lib/posts-id/holdem-outs.ts` | 22 | rgba 22 |
| `lib/posts-id/holdem-tiebreak-rules.ts` | 22 | rgba 22 |
| `lib/posts-id/holdem-when-to-fold.ts` | 22 | rgba 22 |
| `lib/posts-ja/holdem-all-in-rules.ts` | 22 | rgba 22 |
| `lib/posts-ja/holdem-bad-beat.ts` | 22 | rgba 22 |
| `lib/posts-ja/holdem-continuation-bet.ts` | 22 | rgba 22 |
| `lib/posts-ja/holdem-game-order.ts` | 22 | rgba 22 |
| `lib/posts-ja/holdem-icm.ts` | 22 | rgba 22 |
| `lib/posts-ja/holdem-outs.ts` | 22 | rgba 22 |
| `lib/posts-ja/holdem-tiebreak-rules.ts` | 22 | rgba 22 |
| `lib/posts-ja/holdem-when-to-fold.ts` | 22 | rgba 22 |
| `lib/posts-ja/wsop-2026-tournament-guide.ts` | 22 | rgba 22 |
| `lib/posts-pt/holdem-all-in-rules.ts` | 22 | rgba 22 |
| `lib/posts-pt/holdem-bad-beat.ts` | 22 | rgba 22 |
| `lib/posts-pt/holdem-continuation-bet.ts` | 22 | rgba 22 |
| `lib/posts-pt/holdem-game-order.ts` | 22 | rgba 22 |
| `lib/posts-pt/holdem-icm.ts` | 22 | rgba 22 |
| `lib/posts-pt/holdem-outs.ts` | 22 | rgba 22 |
| `lib/posts-pt/holdem-tiebreak-rules.ts` | 22 | rgba 22 |
| `lib/posts-pt/holdem-when-to-fold.ts` | 22 | rgba 22 |
| `lib/posts-uk/holdem-game-order.ts` | 22 | rgba 22 |
| `lib/posts-vi/holdem-game-order.ts` | 22 | rgba 22 |
| `lib/posts-zh/holdem-all-in-rules.ts` | 22 | rgba 22 |
| `lib/posts-zh/holdem-bad-beat.ts` | 22 | rgba 22 |
| `lib/posts-zh/holdem-continuation-bet.ts` | 22 | rgba 22 |
| `lib/posts-zh/holdem-fish.ts` | 22 | rgba 22 |
| `lib/posts-zh/holdem-game-order.ts` | 22 | rgba 22 |
| `lib/posts-zh/holdem-icm.ts` | 22 | rgba 22 |
| `lib/posts-zh/holdem-kicker.ts` | 22 | rgba 22 |
| `lib/posts-zh/holdem-outs.ts` | 22 | rgba 22 |
| `lib/posts-zh/holdem-when-to-fold.ts` | 22 | rgba 22 |
| `lib/posts-zh/wsop-2026-tournament-guide.ts` | 22 | rgba 22 |
| `lib/posts-zh-hant/holdem-all-in-rules.ts` | 22 | rgba 22 |
| `lib/posts-zh-hant/holdem-bad-beat.ts` | 22 | rgba 22 |
| `lib/posts-zh-hant/holdem-continuation-bet.ts` | 22 | rgba 22 |
| `lib/posts-zh-hant/holdem-game-order.ts` | 22 | rgba 22 |
| `lib/posts-zh-hant/holdem-icm.ts` | 22 | rgba 22 |
| `lib/posts-zh-hant/holdem-outs.ts` | 22 | rgba 22 |
| `lib/posts-zh-hant/holdem-tiebreak-rules.ts` | 22 | rgba 22 |
| `lib/posts-zh-hant/holdem-when-to-fold.ts` | 22 | rgba 22 |
| `lib/posts-zh-hant/wsop-2026-tournament-guide.ts` | 22 | rgba 22 |
| `lib/posts-de/holdem-cooler.ts` | 20 | rgba 20 |
| `lib/posts-de/holdem-equity.ts` | 20 | rgba 20 |
| `lib/posts-de/holdem-fish.ts` | 20 | rgba 20 |
| `lib/posts-de/holdem-kicker.ts` | 20 | rgba 20 |
| `lib/posts-de/holdem-limping.ts` | 20 | rgba 20 |
| `lib/posts-de/holdem-pot-odds.ts` | 20 | rgba 20 |
| `lib/posts-de/holdem-rake.ts` | 20 | rgba 20 |
| `lib/posts-de/holdem-short-stack.ts` | 20 | rgba 20 |
| `lib/posts-de/holdem-strategy.ts` | 20 | rgba 20 |
| `lib/posts-en/holdem-cooler.ts` | 20 | rgba 20 |
| `lib/posts-en/holdem-equity.ts` | 20 | rgba 20 |
| `lib/posts-en/holdem-fish.ts` | 20 | rgba 20 |
| `lib/posts-en/holdem-kicker.ts` | 20 | rgba 20 |
| `lib/posts-en/holdem-limping.ts` | 20 | rgba 20 |
| `lib/posts-en/holdem-pot-odds.ts` | 20 | rgba 20 |
| `lib/posts-en/holdem-rake.ts` | 20 | rgba 20 |
| `lib/posts-en/holdem-short-stack.ts` | 20 | rgba 20 |
| `lib/posts-en/holdem-strategy.ts` | 20 | rgba 20 |
| `lib/posts-es/holdem-cooler.ts` | 20 | rgba 20 |
| `lib/posts-es/holdem-equity.ts` | 20 | rgba 20 |
| `lib/posts-es/holdem-fish.ts` | 20 | rgba 20 |
| `lib/posts-es/holdem-kicker.ts` | 20 | rgba 20 |
| `lib/posts-es/holdem-limping.ts` | 20 | rgba 20 |
| `lib/posts-es/holdem-pot-odds.ts` | 20 | rgba 20 |
| `lib/posts-es/holdem-rake.ts` | 20 | rgba 20 |
| `lib/posts-es/holdem-short-stack.ts` | 20 | rgba 20 |
| `lib/posts-es/holdem-strategy.ts` | 20 | rgba 20 |
| `lib/posts-id/holdem-cooler.ts` | 20 | rgba 20 |
| `lib/posts-id/holdem-equity.ts` | 20 | rgba 20 |
| `lib/posts-id/holdem-fish.ts` | 20 | rgba 20 |
| `lib/posts-id/holdem-kicker.ts` | 20 | rgba 20 |
| `lib/posts-id/holdem-limping.ts` | 20 | rgba 20 |
| `lib/posts-id/holdem-pot-odds.ts` | 20 | rgba 20 |
| `lib/posts-id/holdem-rake.ts` | 20 | rgba 20 |
| `lib/posts-id/holdem-short-stack.ts` | 20 | rgba 20 |
| `lib/posts-id/holdem-strategy.ts` | 20 | rgba 20 |
| `lib/posts-ja/holdem-cooler.ts` | 20 | rgba 20 |
| `lib/posts-ja/holdem-equity.ts` | 20 | rgba 20 |
| `lib/posts-ja/holdem-fish.ts` | 20 | rgba 20 |
| `lib/posts-ja/holdem-kicker.ts` | 20 | rgba 20 |
| `lib/posts-ja/holdem-limping.ts` | 20 | rgba 20 |
| `lib/posts-ja/holdem-pot-odds.ts` | 20 | rgba 20 |
| `lib/posts-ja/holdem-rake.ts` | 20 | rgba 20 |
| `lib/posts-ja/holdem-short-stack.ts` | 20 | rgba 20 |
| `lib/posts-ja/holdem-strategy.ts` | 20 | rgba 20 |
| `lib/posts-pt/holdem-cooler.ts` | 20 | rgba 20 |
| `lib/posts-pt/holdem-equity.ts` | 20 | rgba 20 |
| `lib/posts-pt/holdem-fish.ts` | 20 | rgba 20 |
| `lib/posts-pt/holdem-kicker.ts` | 20 | rgba 20 |
| `lib/posts-pt/holdem-limping.ts` | 20 | rgba 20 |
| `lib/posts-pt/holdem-pot-odds.ts` | 20 | rgba 20 |
| `lib/posts-pt/holdem-rake.ts` | 20 | rgba 20 |
| `lib/posts-pt/holdem-short-stack.ts` | 20 | rgba 20 |
| `lib/posts-pt/holdem-strategy.ts` | 20 | rgba 20 |
| `lib/posts-zh/holdem-cooler.ts` | 20 | rgba 20 |
| `lib/posts-zh/holdem-equity.ts` | 20 | rgba 20 |
| `lib/posts-zh/holdem-limping.ts` | 20 | rgba 20 |
| `lib/posts-zh/holdem-pot-odds.ts` | 20 | rgba 20 |
| `lib/posts-zh/holdem-rake.ts` | 20 | rgba 20 |
| `lib/posts-zh/holdem-short-stack.ts` | 20 | rgba 20 |
| `lib/posts-zh/holdem-strategy.ts` | 20 | rgba 20 |
| `lib/posts-zh-hant/holdem-cooler.ts` | 20 | rgba 20 |
| `lib/posts-zh-hant/holdem-equity.ts` | 20 | rgba 20 |
| `lib/posts-zh-hant/holdem-fish.ts` | 20 | rgba 20 |
| `lib/posts-zh-hant/holdem-kicker.ts` | 20 | rgba 20 |
| `lib/posts-zh-hant/holdem-limping.ts` | 20 | rgba 20 |
| `lib/posts-zh-hant/holdem-pot-odds.ts` | 20 | rgba 20 |
| `lib/posts-zh-hant/holdem-rake.ts` | 20 | rgba 20 |
| `lib/posts-zh-hant/holdem-short-stack.ts` | 20 | rgba 20 |
| `lib/posts-zh-hant/holdem-strategy.ts` | 20 | rgba 20 |
| `lib/posts-ar/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-ar/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-bn/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-bn/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-de/holdem-bubble.ts` | 18 | rgba 18 |
| `lib/posts-de/holdem-implied-odds.ts` | 18 | rgba 18 |
| `lib/posts-de/holdem-straddle.ts` | 18 | rgba 18 |
| `lib/posts-en/holdem-bubble.ts` | 18 | rgba 18 |
| `lib/posts-en/holdem-implied-odds.ts` | 18 | rgba 18 |
| `lib/posts-en/holdem-straddle.ts` | 18 | rgba 18 |
| `lib/posts-es/holdem-bubble.ts` | 18 | rgba 18 |
| `lib/posts-es/holdem-implied-odds.ts` | 18 | rgba 18 |
| `lib/posts-es/holdem-straddle.ts` | 18 | rgba 18 |
| `lib/posts-fa/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-fa/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-fil/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-fr/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-fr/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-he/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-he/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-hi/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-hi/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-id/holdem-bubble.ts` | 18 | rgba 18 |
| `lib/posts-id/holdem-implied-odds.ts` | 18 | rgba 18 |
| `lib/posts-id/holdem-straddle.ts` | 18 | rgba 18 |
| `lib/posts-it/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-it/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-ja/holdem-bubble.ts` | 18 | rgba 18 |
| `lib/posts-ja/holdem-implied-odds.ts` | 18 | rgba 18 |
| `lib/posts-ja/holdem-straddle.ts` | 18 | rgba 18 |
| `lib/posts-ms/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-ms/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-pl/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-pl/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-pt/holdem-bubble.ts` | 18 | rgba 18 |
| `lib/posts-pt/holdem-implied-odds.ts` | 18 | rgba 18 |
| `lib/posts-pt/holdem-straddle.ts` | 18 | rgba 18 |
| `lib/posts-ro/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-ro/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-ru/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-ru/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-sw/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-sw/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-th/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-th/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-tr/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-tr/holdem-game-order.ts` | 18 | rgba 18 |
| `lib/posts-uk/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-vi/holdem-all-in-rules.ts` | 18 | rgba 18 |
| `lib/posts-zh/holdem-bubble.ts` | 18 | rgba 18 |
| `lib/posts-zh/holdem-implied-odds.ts` | 18 | rgba 18 |
| `lib/posts-zh/holdem-split-pot-rules.ts` | 18 | rgba 18 |
| `lib/posts-zh/holdem-straddle.ts` | 18 | rgba 18 |
| `lib/posts-zh-hant/holdem-bubble.ts` | 18 | rgba 18 |
| `lib/posts-zh-hant/holdem-implied-odds.ts` | 18 | rgba 18 |
| `lib/posts-zh-hant/holdem-straddle.ts` | 18 | rgba 18 |
| `lib/posts-ar/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-bn/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-de/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-de/holdem-card-counting.ts` | 16 | rgba 16 |
| `lib/posts-de/holdem-position-play.ts` | 16 | rgba 16 |
| `lib/posts-de/holdem-positions.ts` | 16 | rgba 16 |
| `lib/posts-de/holdem-showdown-rules.ts` | 16 | rgba 16 |
| `lib/posts-de/holdem-split-pot-rules.ts` | 16 | rgba 16 |
| `lib/posts-en/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-en/holdem-card-counting.ts` | 16 | rgba 16 |
| `lib/posts-en/holdem-position-play.ts` | 16 | rgba 16 |
| `lib/posts-en/holdem-positions.ts` | 16 | rgba 16 |
| `lib/posts-en/holdem-showdown-rules.ts` | 16 | rgba 16 |
| `lib/posts-en/holdem-split-pot-rules.ts` | 16 | rgba 16 |
| `lib/posts-es/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-es/holdem-card-counting.ts` | 16 | rgba 16 |
| `lib/posts-es/holdem-position-play.ts` | 16 | rgba 16 |
| `lib/posts-es/holdem-positions.ts` | 16 | rgba 16 |
| `lib/posts-es/holdem-showdown-rules.ts` | 16 | rgba 16 |
| `lib/posts-es/holdem-split-pot-rules.ts` | 16 | rgba 16 |
| `lib/posts-fa/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-fil/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-he/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-he/holdem-showdown-rules.ts` | 16 | rgba 16 |
| `lib/posts-hi/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-id/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-id/holdem-card-counting.ts` | 16 | rgba 16 |
| `lib/posts-id/holdem-position-play.ts` | 16 | rgba 16 |
| `lib/posts-id/holdem-positions.ts` | 16 | rgba 16 |
| `lib/posts-id/holdem-showdown-rules.ts` | 16 | rgba 16 |
| `lib/posts-id/holdem-split-pot-rules.ts` | 16 | rgba 16 |
| `lib/posts-ja/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-ja/holdem-card-counting.ts` | 16 | rgba 16 |
| `lib/posts-ja/holdem-position-play.ts` | 16 | rgba 16 |
| `lib/posts-ja/holdem-positions.ts` | 16 | rgba 16 |
| `lib/posts-ja/holdem-showdown-rules.ts` | 16 | rgba 16 |
| `lib/posts-ja/holdem-split-pot-rules.ts` | 16 | rgba 16 |
| `lib/posts-ms/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-pl/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-pt/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-pt/holdem-card-counting.ts` | 16 | rgba 16 |
| `lib/posts-pt/holdem-position-play.ts` | 16 | rgba 16 |
| `lib/posts-pt/holdem-positions.ts` | 16 | rgba 16 |
| `lib/posts-pt/holdem-showdown-rules.ts` | 16 | rgba 16 |
| `lib/posts-pt/holdem-split-pot-rules.ts` | 16 | rgba 16 |
| `lib/posts-pt/holdem-tournament-vs-cash-game.ts` | 16 | rgba 16 |
| `lib/posts-sw/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-th/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-tr/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-vi/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-zh/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-zh/holdem-card-counting.ts` | 16 | rgba 16 |
| `lib/posts-zh/holdem-position-play.ts` | 16 | rgba 16 |
| `lib/posts-zh/holdem-positions.ts` | 16 | rgba 16 |
| `lib/posts-zh/holdem-showdown-rules.ts` | 16 | rgba 16 |
| `lib/posts-zh-hant/holdem-blind-meaning.ts` | 16 | rgba 16 |
| `lib/posts-zh-hant/holdem-card-counting.ts` | 16 | rgba 16 |
| `lib/posts-zh-hant/holdem-flush-vs-straight.ts` | 16 | rgba 16 |
| `lib/posts-zh-hant/holdem-position-play.ts` | 16 | rgba 16 |
| `lib/posts-zh-hant/holdem-positions.ts` | 16 | rgba 16 |
| `lib/posts-zh-hant/holdem-reading-the-board.ts` | 16 | rgba 16 |
| `lib/posts-zh-hant/holdem-showdown-rules.ts` | 16 | rgba 16 |
| `lib/posts-zh-hant/holdem-split-pot-rules.ts` | 16 | rgba 16 |
| `lib/posts-zh-hant/holdem-probability.ts` | 14 | rgba 14 |
| `lib/posts-ar/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-bn/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-de/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-de/holdem-flush-vs-straight.ts` | 12 | rgba 12 |
| `lib/posts-de/holdem-reading-the-board.ts` | 12 | rgba 12 |
| `lib/posts-de/holdem-starting-hands-chart.ts` | 12 | rgba 12 |
| `lib/posts-en/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-en/holdem-flush-vs-straight.ts` | 12 | rgba 12 |
| `lib/posts-en/holdem-reading-the-board.ts` | 12 | rgba 12 |
| `lib/posts-en/holdem-starting-hands-chart.ts` | 12 | rgba 12 |
| `lib/posts-es/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-es/holdem-flush-vs-straight.ts` | 12 | rgba 12 |
| `lib/posts-es/holdem-reading-the-board.ts` | 12 | rgba 12 |
| `lib/posts-es/holdem-starting-hands-chart.ts` | 12 | rgba 12 |
| `lib/posts-fa/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-fil/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-fil/holdem-showdown-rules.ts` | 12 | rgba 12 |
| `lib/posts-fr/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-he/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-hi/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-id/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-id/holdem-flush-vs-straight.ts` | 12 | rgba 12 |
| `lib/posts-id/holdem-reading-the-board.ts` | 12 | rgba 12 |
| `lib/posts-id/holdem-starting-hands-chart.ts` | 12 | rgba 12 |
| `lib/posts-it/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-ja/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-ja/holdem-flush-vs-straight.ts` | 12 | rgba 12 |
| `lib/posts-ja/holdem-reading-the-board.ts` | 12 | rgba 12 |
| `lib/posts-ja/holdem-starting-hands-chart.ts` | 12 | rgba 12 |
| `lib/posts-ms/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-pl/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-pt/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-pt/holdem-flush-vs-straight.ts` | 12 | rgba 12 |
| `lib/posts-pt/holdem-reading-the-board.ts` | 12 | rgba 12 |
| `lib/posts-pt/holdem-starting-hands-chart.ts` | 12 | rgba 12 |
| `lib/posts-ro/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-ru/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-sw/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-th/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-tr/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-uk/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-vi/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-vi/holdem-showdown-rules.ts` | 12 | rgba 12 |
| `lib/posts-zh/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-zh/holdem-flush-vs-straight.ts` | 12 | rgba 12 |
| `lib/posts-zh/holdem-reading-the-board.ts` | 12 | rgba 12 |
| `lib/posts-zh/holdem-starting-hands-chart.ts` | 12 | rgba 12 |
| `lib/posts-zh-hant/holdem-betting-actions.ts` | 12 | rgba 12 |
| `lib/posts-zh-hant/holdem-starting-hands-chart.ts` | 12 | rgba 12 |
| `lib/posts-zh-hant/texas-holdem-rules-for-beginners.ts` | 10 | rgba 10 |
| `lib/posts-ar/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts-bn/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts-fa/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts-fr/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts-hi/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts-it/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts-ms/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts-pl/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts-ro/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts-ru/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts-sw/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts-th/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts-tr/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts-uk/holdem-showdown-rules.ts` | 8 | rgba 8 |
| `lib/posts.ts` | 8 | rgba 8 |
| `lib/posts/holdem-raise-how-much.ts` | 5 | rgba 5 |
| `lib/posts-fr/holdem-blind-meaning.ts` | 4 | rgba 4 |
| `lib/posts-it/holdem-blind-meaning.ts` | 4 | rgba 4 |
| `lib/posts-ro/holdem-blind-meaning.ts` | 4 | rgba 4 |
| `lib/posts-ru/holdem-blind-meaning.ts` | 4 | rgba 4 |
| `lib/posts-uk/holdem-blind-meaning.ts` | 4 | rgba 4 |
| `lib/posts-zh-hant/holdem-hand-rankings.ts` | 4 | rgba 4 |
| `lib/posts/holdem-tournament-tax-guide.ts` | 2 | rgba 2 |

## 🟡 데이터·기타

등급·상태를 나타내는 **의미색일 수 있다.** 일괄 교체 금지 — 자리마다 판정.

| 파일 | 자리 | 내역 |
|---|---:|---|
| `lib/tournaments.ts` | 351 | palette 351 |
| `lib/render-markdown.ts` | 119 | hex 64 · rgba 55 |
| `lib/theme.ts` | 15 | hex 15 |

## 🔴 UI — 자리별 전체 목록

### `app/calculator/calculator-client.tsx` (146)

- **L19** — `text-slate-300` · `text-red-400` · `text-red-400` · `text-slate-300`
  <br/>`const SUIT_COLORS = ["text-slate-300","text-red-400","text-red-400","text-slate-300"];`
- **L20** — `bg-slate-800` · `bg-red-950` · `bg-red-950` · `bg-slate-800`
  <br/>`const SUIT_BG    = ["bg-slate-800","bg-red-950","bg-red-950","bg-slate-800"];`
- **L46** — `text-yellow-300`
  <br/>`if (isFlush && isStraight && !isWheel && uniq[0]===12) return { rank:9, name:"로열 플러시 👑", color:"tex`
- **L47** — `text-yellow-400`
  <br/>`if (isFlush && isStraight) return { rank:8, name:"스트레이트 플러시 🌟", color:"text-yellow-400" };`
- **L48** — `text-purple-400`
  <br/>`if (cnts[0]===4) return { rank:7, name:"포 오브 어 카인드 💎", color:"text-purple-400" };`
- **L49** — `text-blue-400`
  <br/>`if (cnts[0]===3 && cnts[1]===2) return { rank:6, name:"풀 하우스 🏠", color:"text-blue-400" };`
- **L50** — `text-cyan-400`
  <br/>`if (isFlush) return { rank:5, name:"플러시 🌊", color:"text-cyan-400" };`
- **L51** — `text-green-400`
  <br/>`if (isStraight) return { rank:4, name:"스트레이트 ➡️", color:"text-green-400" };`
- **L52** — `text-green-500`
  <br/>`if (cnts[0]===3) return { rank:3, name:"트리플 3️⃣", color:"text-green-500" };`
- **L53** — `text-lime-400`
  <br/>`if (cnts[0]===2 && cnts[1]===2) return { rank:2, name:"투 페어 ✌️", color:"text-lime-400" };`
- **L70** — `text-yellow-300` · `bg-yellow-300` · `border-yellow-300`
  <br/>`1: { color:"text-yellow-300", bg:"bg-yellow-300/10 border-yellow-300/40" },`
- **L71** — `text-green-400` · `bg-green-400` · `border-green-400`
  <br/>`2: { color:"text-green-400",  bg:"bg-green-400/10 border-green-400/40" },`
- **L72** — `text-blue-400` · `bg-blue-400` · `border-blue-400`
  <br/>`3: { color:"text-blue-400",   bg:"bg-blue-400/10 border-blue-400/40" },`
- **L73** — `text-orange-400` · `bg-orange-400` · `border-orange-400`
  <br/>`4: { color:"text-orange-400", bg:"bg-orange-400/10 border-orange-400/40" },`
- **L74** — `text-red-400` · `bg-red-400` · `border-red-400`
  <br/>`5: { color:"text-red-400",    bg:"bg-red-400/10 border-red-400/40" },`
- **L79** — `bg-yellow-300` · `bg-green-400` · `bg-blue-400` · `bg-orange-400` · `bg-red-400`
  <br/>`1: "bg-yellow-300", 2: "bg-green-400", 3: "bg-blue-400", 4: "bg-orange-400", 5: "bg-red-400",`
- **L251** — `text-green-400` · `text-yellow-400` · `text-red-400`
  <br/>`function pcolor(p: number) { return p>=35?"text-green-400":p>=20?"text-yellow-400":"text-red-400"; }`
- **L252** — `bg-green-400` · `bg-yellow-400` · `bg-red-400`
  <br/>`function pbg(p: number) { return p>=35?"bg-green-400":p>=20?"bg-yellow-400":"bg-red-400"; }`
- **L411** — `text-blue-400`
  <br/>`예상 추가 수익 (핸드 완성 시): <span className="text-blue-400">{implied.toLocaleString()}원</span>`
- **L414** — `#60a5fa`
  <br/>`className="w-full h-2 rounded-full" style={{ accentColor: "#60a5fa" }} />`
- **L419** — `bg-blue-400` · `border-blue-400`
  <br/>`<div className="mt-3 rounded-xl bg-blue-400/5 border border-blue-400/20 p-3">`
- **L421** — `text-blue-400`
  <br/>`<p className="text-2xl font-black text-blue-400 mt-1">{impliedOdds}%</p>`
- **L434** — `border-green-500` · `bg-green-500` · `text-green-400`
  <br/>`call: { box:"border-green-500/50 bg-green-500/10", text:"text-green-400", icon:"✅", title:"콜 (수익적)",`
- **L436** — `border-yellow-500` · `bg-yellow-500` · `text-yellow-400`
  <br/>`even: { box:"border-yellow-500/50 bg-yellow-500/10", text:"text-yellow-400", icon:"⚖️", title:"손익분기 `
- **L438** — `border-red-500` · `bg-red-500` · `text-red-400`
  <br/>`fold: { box:"border-red-500/50 bg-red-500/10", text:"text-red-400", icon:"❌", title:"폴드 권장",`
- **L510** — `text-yellow-300`
  <br/>`{ name:"로열 플러시", color:"text-yellow-300", ex:"A♠K♠Q♠J♠T♠" },`
- **L511** — `text-yellow-400`
  <br/>`{ name:"스트레이트 플러시", color:"text-yellow-400", ex:"9♥8♥7♥6♥5♥" },`
- **L512** — `text-purple-400`
  <br/>`{ name:"포 오브 어 카인드", color:"text-purple-400", ex:"A♠A♥A♦A♣K♠" },`
- **L513** — `text-blue-400`
  <br/>`{ name:"풀 하우스", color:"text-blue-400", ex:"K♠K♥K♦Q♠Q♥" },`
- **L514** — `text-cyan-400`
  <br/>`{ name:"플러시", color:"text-cyan-400", ex:"A♠J♠8♠5♠2♠" },`
- **L515** — `text-green-400`
  <br/>`{ name:"스트레이트", color:"text-green-400", ex:"T♠9♥8♦7♣6♠" },`
- **L516** — `text-green-500`
  <br/>`{ name:"트리플", color:"text-green-500", ex:"Q♠Q♥Q♦K♠A♥" },`
- **L517** — `text-lime-400`
  <br/>`{ name:"투 페어", color:"text-lime-400", ex:"A♠A♥K♠K♥Q♦" },`
- **L626** — `text-red-400` · `bg-red-400` · `border-red-400`
  <br/>`: spr < 4   ? { label:"낮은 SPR (커밋 구간)", color:"text-red-400", bg:"bg-red-400/10 border-red-400/40",`
- **L628** — `text-red-400` · `text-yellow-400`
  <br/>`actions:[["TPTK+","올인 고려","text-red-400"],["드로우","팟 오즈 계산 필수","text-yellow-400"],["약한 핸드","신중하게 폴드",`
- **L629** — `text-yellow-400` · `bg-yellow-400` · `border-yellow-400`
  <br/>`: spr < 8   ? { label:"중간 SPR (유연 구간)", color:"text-yellow-400", bg:"bg-yellow-400/10 border-yellow-`
- **L631** — `text-green-400` · `text-yellow-400`
  <br/>`actions:[["투페어+","밸류 베팅","text-green-400"],["원페어","상황 봐서","text-yellow-400"],["드로우","위험 대비 수익 계산","t`
- **L632** — `text-blue-400` · `bg-blue-400` · `border-blue-400`
  <br/>`: spr < 15  ? { label:"높은 SPR (딥스택 시작)", color:"text-blue-400", bg:"bg-blue-400/10 border-blue-400/4`
- **L634** — `text-green-400` · `text-blue-400` · `text-yellow-400`
  <br/>`actions:[["셋+","강하게 플레이","text-green-400"],["드로우","임플라이드 오즈 상승","text-blue-400"],["원페어/TPTK","신중하게",`
- **L635** — `text-green-400` · `bg-green-400` · `border-green-400`
  <br/>`: { label:"매우 높은 SPR (딥스택)", color:"text-green-400", bg:"bg-green-400/10 border-green-400/40",`
- **L637** — `text-green-400` · `text-blue-400` · `text-red-400`
  <br/>`actions:[["너트 핸드","크게 베팅 가능","text-green-400"],["드로우","매우 높은 임플라이드 오즈","text-blue-400"],["약한 메이드","조`
- **L687** — `bg-red-400` · `border-red-400` · `text-red-400`
  <br/>`{ r:"SPR < 4", l:"커밋", c:"bg-red-400/20 border-red-400/40 text-red-400" },`
- **L688** — `bg-yellow-400` · `border-yellow-400` · `text-yellow-400`
  <br/>`{ r:"4 ≤ SPR < 8", l:"유연", c:"bg-yellow-400/20 border-yellow-400/40 text-yellow-400" },`
- **L689** — `bg-blue-400` · `border-blue-400` · `text-blue-400`
  <br/>`{ r:"8 ≤ SPR < 15", l:"딥스택 시작", c:"bg-blue-400/20 border-blue-400/40 text-blue-400" },`
- **L690** — `bg-green-400` · `border-green-400` · `text-green-400`
  <br/>`{ r:"SPR ≥ 15", l:"딥스택", c:"bg-green-400/20 border-green-400/40 text-green-400" },`
- **L716** — `text-red-500` · `bg-red-900` · `border-red-500`
  <br/>`: M < 1  ? { name:"💀 데드 존", color:"text-red-500", bg:"bg-red-900/30 border-red-500/40",`
- **L718** — `text-red-400` · `bg-red-500` · `border-red-500`
  <br/>`: M < 6  ? { name:"🔴 레드 존", color:"text-red-400", bg:"bg-red-500/10 border-red-500/40",`
- **L720** — `text-orange-400` · `bg-orange-500` · `border-orange-500`
  <br/>`: M < 10 ? { name:"🟠 오렌지 존", color:"text-orange-400", bg:"bg-orange-500/10 border-orange-500/40",`
- **L722** — `text-yellow-400` · `bg-yellow-500` · `border-yellow-500`
  <br/>`: M < 20 ? { name:"🟡 옐로우 존", color:"text-yellow-400", bg:"bg-yellow-500/10 border-yellow-500/40",`
- **L724** — `text-green-400` · `bg-green-500` · `border-green-500`
  <br/>`: { name:"🟢 그린 존", color:"text-green-400", bg:"bg-green-500/10 border-green-500/40",`
- **L782** — `text-red-500` · `bg-red-900` · `border-red-500`
  <br/>`["💀 데드 존",  "< 1",  "text-red-500",   "bg-red-900/20 border-red-500/30",   "즉시 올인"],`
- **L783** — `text-red-400` · `bg-red-500` · `border-red-500`
  <br/>`["🔴 레드 존",  "1–5",  "text-red-400",   "bg-red-500/10 border-red-500/30",   "푸시/폴드"],`
- **L784** — `text-orange-400` · `bg-orange-500` · `border-orange-500`
  <br/>`["🟠 오렌지 존","6–9",  "text-orange-400","bg-orange-500/10 border-orange-500/30","좁은 레인지"],`
- **L785** — `text-yellow-400` · `bg-yellow-500` · `border-yellow-500`
  <br/>`["🟡 옐로우 존","10–19","text-yellow-400","bg-yellow-500/10 border-yellow-500/30","어그레시브 플레이"],`
- **L786** — `text-green-400` · `bg-green-500` · `border-green-500`
  <br/>`["🟢 그린 존",  "20+",  "text-green-400", "bg-green-500/10 border-green-500/30", "자유로운 전략"],`
- **L981** — `text-green-400` · `text-red-400`
  <br/>`<td className={'px-3 py-1.5 text-right font-mono font-bold ${diff > 0.1 ? "text-green-400" : diff < `
- **L992** — `text-green-400`
  <br/>`<span className="text-green-400 font-bold flex-shrink-0">+차이</span>`
- **L996** — `text-red-400`
  <br/>`<span className="text-red-400 font-bold flex-shrink-0">−차이</span>`
- **L1135** — `text-green-400`
  <br/>`<span className={'text-[26px] sm:text-4xl leading-none font-black tabular-nums ${isCall ? "text-gree`
- **L1160** — `bg-green-500`
  <br/>`<span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-[3px] bg-green-500/90 i`
- **L1187** — `bg-green-500` · `text-green-950`
  <br/>`? "bg-green-500/90 text-green-950"`
- **L1295** — `#1a3a2a`
  <br/>`같은 다크 그린 계열에 배경만 한 톤 밝게(#1a3a2a).`
- **L1300** — `#1a3a2a` · `rgba(255,255,255...)`
  <br/>`style={{ background: "#1a3a2a", borderBottom: "1px solid rgba(255,255,255,0.10)", height: 62 }}`
- **L1307** — `#f4f0e7`
  <br/>`style={{ color: "#f4f0e7" }}`
- **L1321** — `#f4f0e7`
  <br/>`style={{ color: "#f4f0e7" }}`
- **L1359** — `#e9c766`
  <br/>`style={{ color: "#e9c766" }}`
- **L1473** — `text-green-600` · `text-red-500`
  <br/>`<td className={'px-3 py-2.5 text-right font-mono font-bold ${up ? "text-green-600" : "text-red-500"}`
- **L1511** — `text-green-600` · `text-red-500`
  <br/>`<td className={'px-3 py-2.5 text-right font-mono font-bold ${up ? "text-green-600" : "text-red-500"}`

### `app/en/calculator/calculator-client.tsx` (140)

- **L18** — `text-slate-300` · `text-red-400` · `text-red-400` · `text-slate-300`
  <br/>`const SUIT_COLORS = ["text-slate-300","text-red-400","text-red-400","text-slate-300"];`
- **L19** — `bg-slate-800` · `bg-red-950` · `bg-red-950` · `bg-slate-800`
  <br/>`const SUIT_BG    = ["bg-slate-800","bg-red-950","bg-red-950","bg-slate-800"];`
- **L45** — `text-yellow-300`
  <br/>`if (isFlush && isStraight && !isWheel && uniq[0]===12) return { rank:9, name:"Royal Flush 👑", color`
- **L46** — `text-yellow-400`
  <br/>`if (isFlush && isStraight) return { rank:8, name:"Straight Flush 🌟", color:"text-yellow-400" };`
- **L47** — `text-purple-400`
  <br/>`if (cnts[0]===4) return { rank:7, name:"Four of a Kind 💎", color:"text-purple-400" };`
- **L48** — `text-blue-400`
  <br/>`if (cnts[0]===3 && cnts[1]===2) return { rank:6, name:"Full House 🏠", color:"text-blue-400" };`
- **L49** — `text-cyan-400`
  <br/>`if (isFlush) return { rank:5, name:"Flush 🌊", color:"text-cyan-400" };`
- **L50** — `text-green-400`
  <br/>`if (isStraight) return { rank:4, name:"Straight ➡️", color:"text-green-400" };`
- **L51** — `text-green-500`
  <br/>`if (cnts[0]===3) return { rank:3, name:"Three of a Kind 3️⃣", color:"text-green-500" };`
- **L52** — `text-lime-400`
  <br/>`if (cnts[0]===2 && cnts[1]===2) return { rank:2, name:"Two Pair ✌️", color:"text-lime-400" };`
- **L69** — `text-yellow-300` · `bg-yellow-300` · `border-yellow-300`
  <br/>`1: { color:"text-yellow-300", bg:"bg-yellow-300/10 border-yellow-300/40" },`
- **L70** — `text-green-400` · `bg-green-400` · `border-green-400`
  <br/>`2: { color:"text-green-400",  bg:"bg-green-400/10 border-green-400/40" },`
- **L71** — `text-blue-400` · `bg-blue-400` · `border-blue-400`
  <br/>`3: { color:"text-blue-400",   bg:"bg-blue-400/10 border-blue-400/40" },`
- **L72** — `text-orange-400` · `bg-orange-400` · `border-orange-400`
  <br/>`4: { color:"text-orange-400", bg:"bg-orange-400/10 border-orange-400/40" },`
- **L73** — `text-red-400` · `bg-red-400` · `border-red-400`
  <br/>`5: { color:"text-red-400",    bg:"bg-red-400/10 border-red-400/40" },`
- **L78** — `bg-yellow-300` · `bg-green-400` · `bg-blue-400` · `bg-orange-400` · `bg-red-400`
  <br/>`1: "bg-yellow-300", 2: "bg-green-400", 3: "bg-blue-400", 4: "bg-orange-400", 5: "bg-red-400",`
- **L250** — `text-green-400` · `text-yellow-400` · `text-red-400`
  <br/>`function pcolor(p: number) { return p>=35?"text-green-400":p>=20?"text-yellow-400":"text-red-400"; }`
- **L251** — `bg-green-400` · `bg-yellow-400` · `bg-red-400`
  <br/>`function pbg(p: number) { return p>=35?"bg-green-400":p>=20?"bg-yellow-400":"bg-red-400"; }`
- **L403** — `text-blue-400`
  <br/>`Expected extra winnings (if you hit): <span className="text-blue-400">{implied.toLocaleString()}</sp`
- **L406** — `#60a5fa`
  <br/>`className="w-full h-2 rounded-full" style={{ accentColor: "#60a5fa" }} />`
- **L411** — `bg-blue-400` · `border-blue-400`
  <br/>`<div className="mt-3 rounded-xl bg-blue-400/5 border border-blue-400/20 p-3">`
- **L413** — `text-blue-400`
  <br/>`<p className="text-2xl font-black text-blue-400 mt-1">{impliedOdds}%</p>`
- **L426** — `border-green-500` · `bg-green-500` · `text-green-400`
  <br/>`call: { box:"border-green-500/50 bg-green-500/10", text:"text-green-400", icon:"✅", title:"Call (pro`
- **L428** — `border-yellow-500` · `bg-yellow-500` · `text-yellow-400`
  <br/>`even: { box:"border-yellow-500/50 bg-yellow-500/10", text:"text-yellow-400", icon:"⚖️", title:"Break`
- **L430** — `border-red-500` · `bg-red-500` · `text-red-400`
  <br/>`fold: { box:"border-red-500/50 bg-red-500/10", text:"text-red-400", icon:"❌", title:"Fold recommende`
- **L502** — `text-yellow-300`
  <br/>`{ name:"Royal Flush", color:"text-yellow-300", ex:"A♠K♠Q♠J♠T♠" },`
- **L503** — `text-yellow-400`
  <br/>`{ name:"Straight Flush", color:"text-yellow-400", ex:"9♥8♥7♥6♥5♥" },`
- **L504** — `text-purple-400`
  <br/>`{ name:"Four of a Kind", color:"text-purple-400", ex:"A♠A♥A♦A♣K♠" },`
- **L505** — `text-blue-400`
  <br/>`{ name:"Full House", color:"text-blue-400", ex:"K♠K♥K♦Q♠Q♥" },`
- **L506** — `text-cyan-400`
  <br/>`{ name:"Flush", color:"text-cyan-400", ex:"A♠J♠8♠5♠2♠" },`
- **L507** — `text-green-400`
  <br/>`{ name:"Straight", color:"text-green-400", ex:"T♠9♥8♦7♣6♠" },`
- **L508** — `text-green-500`
  <br/>`{ name:"Three of a Kind", color:"text-green-500", ex:"Q♠Q♥Q♦K♠A♥" },`
- **L509** — `text-lime-400`
  <br/>`{ name:"Two Pair", color:"text-lime-400", ex:"A♠A♥K♠K♥Q♦" },`
- **L618** — `text-red-400` · `bg-red-400` · `border-red-400`
  <br/>`: spr < 4   ? { label:"Low SPR (committed)", color:"text-red-400", bg:"bg-red-400/10 border-red-400/`
- **L620** — `text-red-400` · `text-yellow-400`
  <br/>`actions:[["TPTK+","Consider all-in","text-red-400"],["Draws","Pot odds are a must","text-yellow-400"`
- **L621** — `text-yellow-400` · `bg-yellow-400` · `border-yellow-400`
  <br/>`: spr < 8   ? { label:"Medium SPR (flexible)", color:"text-yellow-400", bg:"bg-yellow-400/10 border-`
- **L623** — `text-green-400` · `text-yellow-400`
  <br/>`actions:[["Two pair+","Value bet","text-green-400"],["One pair","Play it by feel","text-yellow-400"]`
- **L624** — `text-blue-400` · `bg-blue-400` · `border-blue-400`
  <br/>`: spr < 15  ? { label:"High SPR (getting deep)", color:"text-blue-400", bg:"bg-blue-400/10 border-bl`
- **L626** — `text-green-400` · `text-blue-400` · `text-yellow-400`
  <br/>`actions:[["Set+","Play strong","text-green-400"],["Draws","Implied odds go up","text-blue-400"],["On`
- **L627** — `text-green-400` · `bg-green-400` · `border-green-400`
  <br/>`: { label:"Very high SPR (deep)", color:"text-green-400", bg:"bg-green-400/10 border-green-400/40",`
- **L629** — `text-green-400` · `text-blue-400` · `text-red-400`
  <br/>`actions:[["Nut hands","Can bet big","text-green-400"],["Draws","Very high implied odds","text-blue-4`
- **L673** — `bg-red-400` · `border-red-400` · `text-red-400`
  <br/>`{ r:"SPR < 4", l:"Committed", c:"bg-red-400/20 border-red-400/40 text-red-400" },`
- **L674** — `bg-yellow-400` · `border-yellow-400` · `text-yellow-400`
  <br/>`{ r:"4 ≤ SPR < 8", l:"Flexible", c:"bg-yellow-400/20 border-yellow-400/40 text-yellow-400" },`
- **L675** — `bg-blue-400` · `border-blue-400` · `text-blue-400`
  <br/>`{ r:"8 ≤ SPR < 15", l:"Getting deep", c:"bg-blue-400/20 border-blue-400/40 text-blue-400" },`
- **L676** — `bg-green-400` · `border-green-400` · `text-green-400`
  <br/>`{ r:"SPR ≥ 15", l:"Deep", c:"bg-green-400/20 border-green-400/40 text-green-400" },`
- **L702** — `text-red-500` · `bg-red-900` · `border-red-500`
  <br/>`: M < 1  ? { name:"💀 Dead zone", color:"text-red-500", bg:"bg-red-900/30 border-red-500/40",`
- **L704** — `text-red-400` · `bg-red-500` · `border-red-500`
  <br/>`: M < 6  ? { name:"🔴 Red zone", color:"text-red-400", bg:"bg-red-500/10 border-red-500/40",`
- **L706** — `text-orange-400` · `bg-orange-500` · `border-orange-500`
  <br/>`: M < 10 ? { name:"🟠 Orange zone", color:"text-orange-400", bg:"bg-orange-500/10 border-orange-500/`
- **L708** — `text-yellow-400` · `bg-yellow-500` · `border-yellow-500`
  <br/>`: M < 20 ? { name:"🟡 Yellow zone", color:"text-yellow-400", bg:"bg-yellow-500/10 border-yellow-500/`
- **L710** — `text-green-400` · `bg-green-500` · `border-green-500`
  <br/>`: { name:"🟢 Green zone", color:"text-green-400", bg:"bg-green-500/10 border-green-500/40",`
- **L768** — `text-red-500` · `bg-red-900` · `border-red-500`
  <br/>`["💀 Dead zone",  "< 1",  "text-red-500",   "bg-red-900/20 border-red-500/30",   "All-in now"],`
- **L769** — `text-red-400` · `bg-red-500` · `border-red-500`
  <br/>`["🔴 Red zone",  "1–5",  "text-red-400",   "bg-red-500/10 border-red-500/30",   "Push/fold"],`
- **L770** — `text-orange-400` · `bg-orange-500` · `border-orange-500`
  <br/>`["🟠 Orange zone","6–9",  "text-orange-400","bg-orange-500/10 border-orange-500/30","Tight range"],`
- **L771** — `text-yellow-400` · `bg-yellow-500` · `border-yellow-500`
  <br/>`["🟡 Yellow zone","10–19","text-yellow-400","bg-yellow-500/10 border-yellow-500/30","Play aggressive`
- **L772** — `text-green-400` · `bg-green-500` · `border-green-500`
  <br/>`["🟢 Green zone",  "20+",  "text-green-400", "bg-green-500/10 border-green-500/30", "Full strategy"]`
- **L966** — `text-green-400` · `text-red-400`
  <br/>`<td className={'px-3 py-2.5 text-right font-mono font-bold ${diff > 0.1 ? "text-green-400" : diff < `
- **L977** — `text-green-400`
  <br/>`<span className="text-green-400 font-bold flex-shrink-0">+diff</span>`
- **L981** — `text-red-400`
  <br/>`<span className="text-red-400 font-bold flex-shrink-0">−diff</span>`
- **L1116** — `text-green-400`
  <br/>`<p className={'text-4xl sm:text-5xl font-black tabular-nums ${isCall ? "text-green-400" : "text-prim`
- **L1128** — `bg-green-500`
  <br/>`<span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-[3px] bg-green-500/90 i`
- **L1149** — `bg-green-500` · `text-green-950`
  <br/>`? "bg-green-500/90 text-green-950"`
- **L1319** — `text-green-600` · `text-red-500`
  <br/>`<td className={'px-3 py-2.5 text-right font-mono font-bold ${up ? "text-green-600" : "text-red-500"}`
- **L1357** — `text-green-600` · `text-red-500`
  <br/>`<td className={'px-3 py-2.5 text-right font-mono font-bold ${up ? "text-green-600" : "text-red-500"}`

### `components/quiz-widget.tsx` (71)

- **L16** — `#0a0a0a` · `#f3f3f3`
  <br/>`background: dim ? '#0a0a0a' : 'linear-gradient(145deg,#fff 0%,#f3f3f3 100%)',`
- **L20** — `#d4af37` · `#1f1f1f` · `#c8c8c8`
  <br/>`border: highlight ? '2px solid #d4af37' : '1px solid ${dim ? '#1f1f1f' : '#c8c8c8'}',`
- **L22** — `rgba(212,175,55...)` · `rgba(0,0,0...)`
  <br/>`? '0 0 14px rgba(212,175,55,0.6), 0 4px 10px rgba(0,0,0,0.4)'`
- **L23** — `rgba(0,0,0...)`
  <br/>`: dim ? 'none' : '0 3px 8px rgba(0,0,0,0.45)',`
- **L30** — `#dc2626` · `#111827`
  <br/>`<span style={{ fontSize: 13, fontWeight: 900, color: dim ? '#222' : isRed ? '#dc2626' : '#111827', l`
- **L33** — `#dc2626` · `#111827`
  <br/>`<span style={{ fontSize: 15, lineHeight: 1, marginTop: 2, color: dim ? '#222' : isRed ? '#dc2626' : `
- **L50** — `#d4af37` · `rgba(255,255,255...)`
  <br/>`background: i < current ? '#d4af37' : 'rgba(255,255,255,0.15)',`
- **L83** — `rgba(212,175,55...)` · `rgba(255,255,255...)`
  <br/>`let bg = hov && phase === 'playing' ? 'rgba(212,175,55,0.1)' : 'rgba(255,255,255,0.04)';`
- **L84** — `rgba(212,175,55...)` · `rgba(255,255,255...)`
  <br/>`let borderCol = hov && phase === 'playing' ? 'rgba(212,175,55,0.45)' : 'rgba(255,255,255,0.1)';`
- **L88** — `#4ade80` · `rgba(34,197,94...)` · `rgba(34,197,94...)`
  <br/>`if (isCorr)      { bg = 'rgba(34,197,94,0.12)';  borderCol = 'rgba(34,197,94,0.6)';  textCol = '#4ad`
- **L89** — `#f87171` · `rgba(239,68,68...)` · `rgba(239,68,68...)`
  <br/>`else if (isSel)  { bg = 'rgba(239,68,68,0.12)';  borderCol = 'rgba(239,68,68,0.6)';  textCol = '#f87`
- **L111** — `rgba(255,255,255...)`
  <br/>`<div style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', marginTop: 2 }}>{choice.engName}</div>`
- **L112** — `#4ade80`
  <br/>`{phase === 'answered' && isCorr && <div style={{ fontSize: 11, color: '#4ade80', fontWeight: 800, ma`
- **L113** — `#f87171`
  <br/>`{phase === 'answered' && isSel && !isCorr && <div style={{ fontSize: 11, color: '#f87171', fontWeigh`
- **L160** — `#b8960c` · `#d4af37` · `#b8960c`
  <br/>`background: 'linear-gradient(90deg,#b8960c,#d4af37,#b8960c)',`
- **L162** — `rgba(212,175,55...)`
  <br/>`boxShadow: '0 2px 10px rgba(212,175,55,0.4)',`
- **L172** — `rgba(212,175,55...)`
  <br/>`border: '1.5px solid rgba(212,175,55,0.55)',`
- **L173** — `rgba(18,24,16...)` · `rgba(10,18,10...)`
  <br/>`background: 'linear-gradient(160deg,rgba(18,24,16,0.95) 0%,rgba(10,18,10,0.98) 100%)',`
- **L174** — `rgba(212,175,55...)` · `rgba(212,175,55...)` · `rgba(0,0,0...)`
  <br/>`boxShadow: '0 0 0 1px rgba(212,175,55,0.1), 0 0 16px rgba(212,175,55,0.14), 0 6px 24px rgba(0,0,0,0.`
- **L181** — `rgba(22,63,32...)` · `rgba(14,40,20...)`
  <br/>`background: 'linear-gradient(90deg,rgba(22,63,32,0.8) 0%,rgba(14,40,20,0.9) 100%)',`
- **L182** — `rgba(212,175,55...)`
  <br/>`borderBottom: '1px solid rgba(212,175,55,0.25)',`
- **L189** — `rgba(255,255,255...)`
  <br/>`<div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 1 }}>7장 카드에서 최강 족보를 맞혀보세요</d`
- **L194** — `rgba(255,255,255...)`
  <br/>`<div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 4 }}>진행</div>`
- **L208** — `#d4af37`
  <br/>`<div style={{ fontSize: 36, fontWeight: 900, color: '#d4af37', letterSpacing: '-1px', marginBottom: `
- **L209** — `rgba(255,255,255...)`
  <br/>`{score}<span style={{ fontSize: 20, color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>/{TOTAL}</spa`
- **L211** — `rgba(255,255,255...)`
  <br/>`<div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', marginBottom: 22 }}>{getGradeText(score`
- **L215** — `#d4af37` · `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`background: 'rgba(212,175,55,0.1)', border: '1.5px solid rgba(212,175,55,0.4)', color: '#d4af37',`
- **L221** — `#b8960c` · `#d4af37`
  <br/>`background: 'linear-gradient(90deg,#b8960c,#d4af37)',`
- **L238** — `rgba(255,255,255...)` · `rgba(255,255,255...)`
  <br/>`background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)',`
- **L243** — `rgba(255,255,255...)`
  <br/>`<div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, color: '`
- **L255** — `rgba(255,255,255...)`
  <br/>`<div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)' }} />`
- **L256** — `rgba(255,255,255...)`
  <br/>`<span style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', fontWeight: 700 }}>+</span>`
- **L257** — `rgba(255,255,255...)`
  <br/>`<div style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.1)' }} />`
- **L260** — `#d4af37`
  <br/>`<div style={{ fontSize: 9, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, color: '`
- **L297** — `rgba(34,197,94...)` · `rgba(239,68,68...)`
  <br/>`background: isRight ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)',`
- **L298** — `rgba(34,197,94...)` · `rgba(239,68,68...)`
  <br/>`border: '1.5px solid ${isRight ? 'rgba(34,197,94,0.35)' : 'rgba(239,68,68,0.35)'}',`
- **L303** — `#4ade80` · `#f87171`
  <br/>`<div style={{ fontSize: 13, fontWeight: 800, color: isRight ? '#4ade80' : '#f87171' }}>`
- **L307** — `rgba(255,255,255...)`
  <br/>`<div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 3, lineHeight: 1.5 }}>`
- **L311** — `rgba(255,255,255...)`
  <br/>`<div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>`
- **L323** — `#b8960c` · `#d4af37` · `#c9a227`
  <br/>`background: 'linear-gradient(90deg,#b8960c,#d4af37,#c9a227)',`
- **L325** — `rgba(212,175,55...)`
  <br/>`boxShadow: '0 3px 14px rgba(212,175,55,0.28)',`
- **L337** — `rgba(255,255,255...)`
  <br/>`<span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>현재 점수</span>`
- **L338** — `#d4af37`
  <br/>`<span style={{ fontSize: 13, fontWeight: 800, color: '#d4af37' }}>{score} / {qNum - 1}</span>`

### `app/home-client.tsx` (63)

- **L33** — `bg-yellow-500`
  <br/>`badgeColor: "bg-yellow-500",`
- **L44** — `bg-red-600`
  <br/>`badgeColor: "bg-red-600",`
- **L55** — `bg-green-600`
  <br/>`badgeColor: "bg-green-600",`
- **L66** — `bg-blue-600`
  <br/>`badgeColor: "bg-blue-600",`
- **L77** — `bg-purple-600`
  <br/>`badgeColor: "bg-purple-600",`
- **L144** — `text-red-400` · `bg-red-500` · `border-red-500`
  <br/>`{ name: "얼리 포지션 (EP)", seats: "UTG, UTG+1", strategy: "프리미엄 핸드만 플레이. AA, KK, QQ, AK 위주로 타이트하게.", col`
- **L145** — `text-yellow-400` · `bg-yellow-500` · `border-yellow-500`
  <br/>`{ name: "미들 포지션 (MP)", seats: "MP1, MP2, MP3", strategy: "EP보다 약간 넓게. JJ, TT, AQ, AJ 추가 가능.", color:`
- **L146** — `text-green-400` · `bg-green-500` · `border-green-500`
  <br/>`{ name: "레이트 포지션 (LP)", seats: "CO, BTN", strategy: "가장 유리한 자리. 더 넓은 핸드 레인지로 공격적 플레이 가능.", color: "t`
- **L147** — `text-blue-400` · `bg-blue-500` · `border-blue-500`
  <br/>`{ name: "블라인드 (SB/BB)", seats: "스몰·빅 블라인드", strategy: "강제로 베팅. BB는 수비적, SB는 가장 불리한 포지션.", color: "te`
- **L151** — `bg-yellow-500` · `border-yellow-500` · `text-yellow-300`
  <br/>`{ tier: "S급 (항상 플레이)", hands: ["AA", "KK", "QQ", "AKs"], color: "bg-yellow-500/20 border-yellow-500/`
- **L152** — `bg-green-500` · `border-green-500` · `text-green-300`
  <br/>`{ tier: "A급 (강력 추천)", hands: ["JJ", "TT", "AQs", "AKo", "KQs"], color: "bg-green-500/20 border-green`
- **L153** — `bg-blue-500` · `border-blue-500` · `text-blue-300`
  <br/>`{ tier: "B급 (포지션에 따라)", hands: ["99", "88", "AJs", "AQo", "KJs", "QJs"], color: "bg-blue-500/20 bord`
- **L182** — `fill-yellow-400` · `text-yellow-400` · `fill-yellow-400` · `text-yellow-400` · `text-gray-600`
  <br/>`className={'w-4 h-4 ${i <= Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : i - 0.5 <= ratin`
- **L185** — `text-yellow-400`
  <br/>`<span className="ml-1.5 text-sm font-bold text-yellow-400">{rating}/5</span>`
- **L283** — `rgba(0,0,0...)`
  <br/>`style={{ textShadow: "0 4px 32px rgba(0,0,0,0.55)" }}`
- **L398** — `border-yellow-500` · `bg-yellow-500`
  <br/>`{ step: "1단계", name: "프리플랍 (Pre-Flop)", desc: "각 플레이어에게 홀 카드 2장을 배분합니다. 스몰 블라인드·빅 블라인드 강제 베팅 후, 왼쪽부터`
- **L399** — `border-green-500` · `bg-green-500`
  <br/>`{ step: "2단계", name: "플랍 (Flop)", desc: "공용 카드 3장을 테이블 중앙에 공개합니다. 본격적인 핸드 강도 판단 시작. 가장 많은 정보가 나오는 단계`
- **L400** — `border-blue-500` · `bg-blue-500`
  <br/>`{ step: "3단계", name: "턴 (Turn)", desc: "4번째 공용 카드를 공개합니다. 팟이 커지고 베팅 압박이 높아지는 단계. 드로우 핸드의 완성 여부가 중요해집`
- **L401** — `border-purple-500` · `bg-purple-500`
  <br/>`{ step: "4단계", name: "리버 (River)", desc: "마지막 5번째 공용 카드 공개. 최종 베팅 라운드 후 쇼다운. 남은 플레이어 중 가장 강한 패를 가진 사`
- **L416** — `text-yellow-400`
  <br/>`<Link href="/rules" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-`
- **L433** — `text-green-400`
  <br/>`<CheckCircle className="w-3.5 h-3.5 text-green-400" />`
- **L445** — `bg-yellow-500` · `bg-gray-500`
  <br/>`<div className={'flex items-center justify-center md:w-20 py-4 md:py-0 ${idx === 0 ? "bg-yellow-500/`
- **L446** — `text-yellow-400` · `text-gray-400`
  <br/>`<span className={'text-3xl font-black ${idx === 0 ? "text-yellow-400" : idx === 1 ? "text-gray-400" `
- **L462** — `text-green-400`
  <br/>`<CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> {pro}`
- **L483** — `text-yellow-400`
  <br/>`<Link href="/ranking" className="inline-flex items-center gap-2 text-primary font-semibold hover:tex`
- **L512** — `bg-yellow-500`
  <br/>`<tr key={hand.rank} className={'border-b border-border/50 ${idx === 0 ? "bg-yellow-500/5" : ""}'}>`
- **L514** — `text-yellow-400`
  <br/>`<span className={'font-black text-lg ${idx === 0 ? "text-yellow-400" : idx <= 2 ? "text-primary" : "`
- **L527** — `text-yellow-400`
  <br/>`<Link href="/blog/holdem-hand-rankings" className="inline-flex items-center gap-2 text-primary font-`
- **L555** — `text-yellow-400`
  <br/>`<Link href="/strategy" className="inline-flex items-center gap-2 text-primary font-semibold hover:te`
- **L587** — `text-yellow-400`
  <br/>`<Link href="/strategy" className="inline-flex items-center gap-2 text-primary font-semibold hover:te`
- **L640** — `text-yellow-400`
  <br/>`<Link href="/strategy" className="inline-flex items-center gap-2 text-primary font-semibold hover:te`
- **L655** — `bg-red-500` · `border-red-500`
  <br/>`<div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex ite`
- **L656** — `text-red-400`
  <br/>`<AlertTriangle className="w-5 h-5 text-red-400" />`
- **L669** — `text-yellow-400`
  <br/>`<Link href="/strategy" className="inline-flex items-center gap-2 text-primary font-semibold hover:te`
- **L714** — `to-yellow-600`
  <br/>`<div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-cente`
- **L720** — `text-green-400`
  <br/>`<CheckCircle className="w-4 h-4 text-green-400" />`
- **L745** — `text-yellow-400`
  <br/>`<Link href="/blog" className="hidden md:flex items-center gap-1 text-primary text-sm font-semibold h`
- **L792** — `text-yellow-400`
  <br/>`<Link href="/glossary" className="inline-flex items-center gap-2 text-primary font-semibold hover:te`

### `app/_archive/home-client.tsx` (63)

- **L31** — `bg-yellow-500`
  <br/>`badgeColor: "bg-yellow-500",`
- **L42** — `bg-red-600`
  <br/>`badgeColor: "bg-red-600",`
- **L53** — `bg-green-600`
  <br/>`badgeColor: "bg-green-600",`
- **L64** — `bg-blue-600`
  <br/>`badgeColor: "bg-blue-600",`
- **L75** — `bg-purple-600`
  <br/>`badgeColor: "bg-purple-600",`
- **L142** — `text-red-400` · `bg-red-500` · `border-red-500`
  <br/>`{ name: "얼리 포지션 (EP)", seats: "UTG, UTG+1", strategy: "프리미엄 핸드만 플레이. AA, KK, QQ, AK 위주로 타이트하게.", col`
- **L143** — `text-yellow-400` · `bg-yellow-500` · `border-yellow-500`
  <br/>`{ name: "미들 포지션 (MP)", seats: "MP1, MP2, MP3", strategy: "EP보다 약간 넓게. JJ, TT, AQ, AJ 추가 가능.", color:`
- **L144** — `text-green-400` · `bg-green-500` · `border-green-500`
  <br/>`{ name: "레이트 포지션 (LP)", seats: "CO, BTN", strategy: "가장 유리한 자리. 더 넓은 핸드 레인지로 공격적 플레이 가능.", color: "t`
- **L145** — `text-blue-400` · `bg-blue-500` · `border-blue-500`
  <br/>`{ name: "블라인드 (SB/BB)", seats: "스몰·빅 블라인드", strategy: "강제로 베팅. BB는 수비적, SB는 가장 불리한 포지션.", color: "te`
- **L149** — `bg-yellow-500` · `border-yellow-500` · `text-yellow-300`
  <br/>`{ tier: "S급 (항상 플레이)", hands: ["AA", "KK", "QQ", "AKs"], color: "bg-yellow-500/20 border-yellow-500/`
- **L150** — `bg-green-500` · `border-green-500` · `text-green-300`
  <br/>`{ tier: "A급 (강력 추천)", hands: ["JJ", "TT", "AQs", "AKo", "KQs"], color: "bg-green-500/20 border-green`
- **L151** — `bg-blue-500` · `border-blue-500` · `text-blue-300`
  <br/>`{ tier: "B급 (포지션에 따라)", hands: ["99", "88", "AJs", "AQo", "KJs", "QJs"], color: "bg-blue-500/20 bord`
- **L180** — `fill-yellow-400` · `text-yellow-400` · `fill-yellow-400` · `text-yellow-400` · `text-gray-600`
  <br/>`className={'w-4 h-4 ${i <= Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : i - 0.5 <= ratin`
- **L183** — `text-yellow-400`
  <br/>`<span className="ml-1.5 text-sm font-bold text-yellow-400">{rating}/5</span>`
- **L281** — `rgba(0,0,0...)`
  <br/>`style={{ textShadow: "0 4px 32px rgba(0,0,0,0.55)" }}`
- **L396** — `border-yellow-500` · `bg-yellow-500`
  <br/>`{ step: "1단계", name: "프리플랍 (Pre-Flop)", desc: "각 플레이어에게 홀 카드 2장을 배분합니다. 스몰 블라인드·빅 블라인드 강제 베팅 후, 왼쪽부터`
- **L397** — `border-green-500` · `bg-green-500`
  <br/>`{ step: "2단계", name: "플랍 (Flop)", desc: "공용 카드 3장을 테이블 중앙에 공개합니다. 본격적인 핸드 강도 판단 시작. 가장 많은 정보가 나오는 단계`
- **L398** — `border-blue-500` · `bg-blue-500`
  <br/>`{ step: "3단계", name: "턴 (Turn)", desc: "4번째 공용 카드를 공개합니다. 팟이 커지고 베팅 압박이 높아지는 단계. 드로우 핸드의 완성 여부가 중요해집`
- **L399** — `border-purple-500` · `bg-purple-500`
  <br/>`{ step: "4단계", name: "리버 (River)", desc: "마지막 5번째 공용 카드 공개. 최종 베팅 라운드 후 쇼다운. 남은 플레이어 중 가장 강한 패를 가진 사`
- **L414** — `text-yellow-400`
  <br/>`<Link href="/rules" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-`
- **L431** — `text-green-400`
  <br/>`<CheckCircle className="w-3.5 h-3.5 text-green-400" />`
- **L443** — `bg-yellow-500` · `bg-gray-500`
  <br/>`<div className={'flex items-center justify-center md:w-20 py-4 md:py-0 ${idx === 0 ? "bg-yellow-500/`
- **L444** — `text-yellow-400` · `text-gray-400`
  <br/>`<span className={'text-3xl font-black ${idx === 0 ? "text-yellow-400" : idx === 1 ? "text-gray-400" `
- **L460** — `text-green-400`
  <br/>`<CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> {pro}`
- **L481** — `text-yellow-400`
  <br/>`<Link href="/ranking" className="inline-flex items-center gap-2 text-primary font-semibold hover:tex`
- **L510** — `bg-yellow-500`
  <br/>`<tr key={hand.rank} className={'border-b border-border/50 ${idx === 0 ? "bg-yellow-500/5" : ""}'}>`
- **L512** — `text-yellow-400`
  <br/>`<span className={'font-black text-lg ${idx === 0 ? "text-yellow-400" : idx <= 2 ? "text-primary" : "`
- **L525** — `text-yellow-400`
  <br/>`<Link href="/hands" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-`
- **L553** — `text-yellow-400`
  <br/>`<Link href="/strategy" className="inline-flex items-center gap-2 text-primary font-semibold hover:te`
- **L585** — `text-yellow-400`
  <br/>`<Link href="/strategy" className="inline-flex items-center gap-2 text-primary font-semibold hover:te`
- **L638** — `text-yellow-400`
  <br/>`<Link href="/strategy" className="inline-flex items-center gap-2 text-primary font-semibold hover:te`
- **L653** — `bg-red-500` · `border-red-500`
  <br/>`<div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex ite`
- **L654** — `text-red-400`
  <br/>`<AlertTriangle className="w-5 h-5 text-red-400" />`
- **L667** — `text-yellow-400`
  <br/>`<Link href="/strategy" className="inline-flex items-center gap-2 text-primary font-semibold hover:te`
- **L712** — `to-yellow-600`
  <br/>`<div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-yellow-600 flex items-cente`
- **L718** — `text-green-400`
  <br/>`<CheckCircle className="w-4 h-4 text-green-400" />`
- **L743** — `text-yellow-400`
  <br/>`<Link href="/blog" className="hidden md:flex items-center gap-1 text-primary text-sm font-semibold h`
- **L790** — `text-yellow-400`
  <br/>`<Link href="/glossary" className="inline-flex items-center gap-2 text-primary font-semibold hover:te`

### `app/blog/roadmap/blog-roadmap-client.tsx` (59)

- **L37** — `#7c3aed`
  <br/>`color: "#7c3aed",`
- **L38** — `#ede9fe`
  <br/>`textColor: "#ede9fe",`
- **L54** — `#1d4ed8`
  <br/>`color: "#1d4ed8",`
- **L55** — `#dbeafe`
  <br/>`textColor: "#dbeafe",`
- **L70** — `#b91c1c`
  <br/>`color: "#b91c1c",`
- **L71** — `#fee2e2`
  <br/>`textColor: "#fee2e2",`
- **L88** — `#b45309`
  <br/>`color: "#b45309",`
- **L89** — `#fef3c7`
  <br/>`textColor: "#fef3c7",`
- **L105** — `#065f46`
  <br/>`color: "#065f46",`
- **L106** — `#d1fae5`
  <br/>`textColor: "#d1fae5",`
- **L121** — `#0e7490`
  <br/>`color: "#0e7490",`
- **L122** — `#cffafe`
  <br/>`textColor: "#cffafe",`
- **L139** — `#92400e`
  <br/>`color: "#92400e",`
- **L140** — `#fed7aa`
  <br/>`textColor: "#fed7aa",`
- **L153** — `#6d28d9`
  <br/>`color: "#6d28d9",`
- **L155** — `#ede9fe`
  <br/>`textColor: "#ede9fe",`
- **L169** — `#be185d`
  <br/>`color: "#be185d",`
- **L170** — `#fce7f3`
  <br/>`textColor: "#fce7f3",`
- **L231** — `#0a0f1a` · `bg-[#0a0f1a]`
  <br/>`<div className="min-h-screen bg-[#0a0f1a] text-white">`
- **L234** — `text-gray-400`
  <br/>`<nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">`
- **L235** — `text-yellow-400`
  <br/>`<Link href="/" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">`
- **L239** — `text-yellow-400`
  <br/>`<Link href="/blog" className="flex items-center gap-1 hover:text-yellow-400 transition-colors">`
- **L246** — `text-yellow-400`
  <br/>`<h1 className="text-3xl font-bold text-yellow-400 mb-2">홀덤마스터 블로그 로드맵</h1>`
- **L247** — `text-gray-300`
  <br/>`<p className="text-gray-300 mb-3">`
- **L253** — `bg-gray-800`
  <br/>`<div className="flex-1 bg-gray-800 rounded-full h-2.5 overflow-hidden">`
- **L255** — `from-yellow-500` · `to-yellow-300`
  <br/>`className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full transition-all duratio`
- **L259** — `text-yellow-400`
  <br/>`<span className="text-sm text-yellow-400 font-mono whitespace-nowrap">`
- **L265** — `text-gray-400`
  <br/>`<div className="flex gap-4 text-xs text-gray-400 mb-6">`
- **L267** — `bg-yellow-400`
  <br/>`<span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />`
- **L271** — `bg-gray-600` · `border-gray-500`
  <br/>`<span className="w-3 h-3 rounded-full bg-gray-600 border border-gray-500 border-dashed inline-block"`
- **L288** — `#111827`
  <br/>`<stop offset="0%" stopColor="#111827" />`
- **L289** — `#0a0f1a`
  <br/>`<stop offset="100%" stopColor="#0a0f1a" />`
- **L301** — `#1e293b`
  <br/>`fill="none" stroke="#1e293b" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />`
- **L339** — `#374151`
  <br/>`stroke={cluster.published ? pillar.color : "#374151"}`
- **L355** — `#1e293b`
  <br/>`fill={isHovered ? pillar.color : "#1e293b"}`
- **L362** — `#fbbf24`
  <br/>`fill="#fbbf24" />`
- **L377** — `#111827`
  <br/>`fill="#111827"`
- **L378** — `#374151`
  <br/>`stroke="#374151"`
- **L383** — `#4b5563`
  <br/>`fill="#4b5563" />`
- **L386** — `#6b7280`
  <br/>`fontSize="10.5" fill="#6b7280"`
- **L426** — `#92400e` · `#fbbf24`
  <br/>`fill="#92400e" stroke="#fbbf24" strokeWidth="2.5" />`
- **L428** — `#fef3c7`
  <br/>`fontSize="15" fontWeight="bold" fill="#fef3c7"`
- **L433** — `#fcd34d`
  <br/>`fontSize="10" fill="#fcd34d"`
- **L443** — `text-yellow-400` · `border-gray-800`
  <br/>`<h2 className="text-xl font-bold text-yellow-400 mb-6 border-b border-gray-800 pb-3">`
- **L449** — `bg-gray-900` · `border-gray-800`
  <br/>`className="bg-gray-900 rounded-xl p-4 border border-gray-800">`
- **L454** — `text-gray-500`
  <br/>`<span className="ml-auto text-xs text-gray-500">`
- **L463** — `bg-yellow-400`
  <br/>`<span className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />`
- **L465** — `text-gray-200` · `text-yellow-400`
  <br/>`className="text-gray-200 hover:text-yellow-400 transition-colors leading-snug">`
- **L471** — `bg-gray-600`
  <br/>`<span className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />`
- **L472** — `text-gray-600`
  <br/>`<span className="text-gray-600 leading-snug">{c.label}</span>`
- **L485** — `bg-yellow-500` · `bg-yellow-400`
  <br/>`className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black fon`

### `app/tournaments/tournaments-client.tsx` (54)

- **L44** — `bg-blue-500` · `text-blue-400` · `border-blue-500`
  <br/>`badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",`
- **L60** — `bg-yellow-500` · `text-yellow-400` · `border-yellow-500`
  <br/>`badgeColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",`
- **L76** — `bg-green-500` · `text-green-400` · `border-green-500`
  <br/>`badgeColor: "bg-green-500/15 text-green-400 border-green-500/30",`
- **L119** — `bg-blue-500` · `text-blue-400` · `border-blue-500`
  <br/>`badgeColor: "bg-blue-500/15 text-blue-400 border-blue-500/30",`
- **L137** — `bg-red-500` · `text-red-400` · `border-red-500`
  <br/>`badgeColor: "bg-red-500/15 text-red-400 border-red-500/30",`
- **L155** — `bg-orange-500` · `text-orange-400` · `border-orange-500`
  <br/>`badgeColor: "bg-orange-500/15 text-orange-400 border-orange-500/30",`
- **L206** — `text-blue-400`
  <br/>`color: "text-blue-400",`
- **L217** — `text-yellow-400`
  <br/>`color: "text-yellow-400",`
- **L243** — `bg-blue-500` · `text-blue-400` · `border-blue-500`
  <br/>`color: "bg-blue-500/15 text-blue-400 border-blue-500/30",`
- **L256** — `bg-orange-500` · `text-orange-400` · `border-orange-500`
  <br/>`color: "bg-orange-500/15 text-orange-400 border-orange-500/30",`
- **L272** — `bg-green-500` · `text-green-400` · `border-green-500`
  <br/>`color: "bg-green-500/15 text-green-400 border-green-500/30",`
- **L281** — `bg-blue-500` · `text-blue-400` · `border-blue-500`
  <br/>`color: "bg-blue-500/15 text-blue-400 border-blue-500/30",`
- **L290** — `bg-yellow-500` · `text-yellow-400` · `border-yellow-500`
  <br/>`color: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",`
- **L299** — `bg-orange-500` · `text-orange-400` · `border-orange-500`
  <br/>`color: "bg-orange-500/15 text-orange-400 border-orange-500/30",`
- **L308** — `bg-violet-500` · `text-violet-400` · `border-violet-500`
  <br/>`color: "bg-violet-500/15 text-violet-400 border-violet-500/30",`
- **L422** — `border-yellow-500` · `shadow-yellow-500`
  <br/>`className={'bg-card border rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden ${"highlight`
- **L425** — `bg-yellow-500` · `text-yellow-400`
  <br/>`<div className="absolute top-0 right-0 bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2.5`
- **L441** — `bg-green-500` · `text-green-400` · `border-green-500`
  <br/>`? "bg-green-500/15 text-green-400 border-green-500/30"`
- **L1097** — `border-yellow-500` · `border-yellow-500` · `shadow-yellow-500`
  <br/>`<div className="mb-4 p-5 bg-card border-2 border-yellow-500/40 rounded-2xl hover:border-yellow-500/7`
- **L1098** — `bg-yellow-500` · `text-yellow-400`
  <br/>`<div className="absolute top-0 right-0 bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2.5`
- **L1102** — `text-yellow-400`
  <br/>`<div className="text-[11px] font-bold text-yellow-400 uppercase tracking-widest mb-1">WSOP 2026 · 메인`

### `app/win-rate-quiz/_simulator.tsx` (45)

- **L29** — `#d4af37`
  <br/>`const GOLD = "#d4af37";`
- **L30** — `#1f7a52` · `#12603f` · `#0b4229` · `#08331f`
  <br/>`const FELT = "radial-gradient(ellipse 120% 90% at 50% 42%, #1f7a52 0%, #12603f 45%, #0b4229 78%, #08`
- **L31** — `rgba(255,255,255...)`
  <br/>`const MUTED = "rgba(255,255,255,0.3)";`
- **L32** — `#e0555e`
  <br/>`const LIVE = "#e0555e";`
- **L33** — `#4ade80`
  <br/>`const GOOD = "#4ade80";`
- **L34** — `#f87171`
  <br/>`const BAD = "#f87171";`
- **L127** — `#4b3535` · `#584040` · `#4b3535`
  <br/>`? "linear-gradient(135deg,#4b3535 0%,#584040 50%,#4b3535 100%)"`
- **L128** — `#7f1d1d` · `#991b1b` · `#7f1d1d`
  <br/>`: "linear-gradient(135deg,#7f1d1d 0%,#991b1b 50%,#7f1d1d 100%)",`
- **L129** — `rgba(255,255,255...)` · `rgba(212,175,55...)`
  <br/>`border: '2px solid ${muted ? "rgba(255,255,255,0.18)" : "rgba(212,175,55,0.5)"}',`
- **L130** — `rgba(0,0,0...)`
  <br/>`boxShadow: "0 2px 6px rgba(0,0,0,0.45)",`
- **L135** — `rgba(255,255,255...)` · `rgba(212,175,55...)`
  <br/>`border: '1px solid ${muted ? "rgba(255,255,255,0.14)" : "rgba(212,175,55,0.45)"}',`
- **L136** — `rgba(255,255,255...)` · `rgba(212,175,55...)` · `rgba(255,255,255...)` · `rgba(212,175,55...)`
  <br/>`background: 'repeating-linear-gradient(45deg,transparent,transparent 2.5px,${muted ? "rgba(255,255,2`
- **L142** — `#dc2626` · `#0f172a`
  <br/>`const color = isRed ? "#dc2626" : "#0f172a";`
- **L148** — `#f1f5f9`
  <br/>`background: "linear-gradient(160deg,#fff 0%,#f1f5f9 100%)", borderRadius: 5, flexShrink: 0,`
- **L149** — `#cbd5e1` · `rgba(0,0,0...)`
  <br/>`position: "relative", border: "1px solid #cbd5e1", boxShadow: "0 2px 7px rgba(0,0,0,0.4)",`
- **L165** — `rgba(0,0,0...)`
  <br/>`minWidth: 30, height: 24, padding: "0 5px", borderRadius: 12, background: "rgba(0,0,0,0.38)",`
- **L176** — `#f8fafc` · `#0f172a`
  <br/>`width: 17, height: 17, borderRadius: "50%", background: "#f8fafc", color: "#0f172a",`
- **L178** — `#94a3b8` · `rgba(0,0,0...)`
  <br/>`border: "1px solid #94a3b8", boxShadow: "0 1px 3px rgba(0,0,0,0.5)", flexShrink: 0,`
- **L211** — `rgba(255,255,255...)`
  <br/>`style={{ color: isDead ? BAD : "rgba(255,255,255,0.72)", maxWidth: isHero ? 108 : 86 }}>`
- **L394** — `rgba(255,255,255...)`
  <br/>`statusText={statusText} statusColor={act === "raise" ? BAD : "rgba(255,255,255,0.55)"} />;`
- **L456** — `#6b4a29` · `#4a3319` · `#37260f`
  <br/>`background: "linear-gradient(160deg,#6b4a29 0%,#4a3319 55%,#37260f 100%)",`
- **L457** — `rgba(0,0,0...)`
  <br/>`boxShadow: "0 16px 44px rgba(0,0,0,0.42)",`
- **L462** — `rgba(0,0,0...)`
  <br/>`border: '2px solid ${GOLD}66', boxShadow: "inset 0 3px 44px rgba(0,0,0,0.5)",`
- **L509** — `#0f172a` · `rgba(255,255,255...)`
  <br/>`<div className="rounded-xl px-4 py-2 lg:py-2.5 mb-2" style={{ background: "#0f172a", border: "1px so`
- **L534** — `#7dd3fc`
  <br/>`<span className="text-lg font-black tabular-nums" style={{ color: "#7dd3fc" }}>`
- **L539** — `#7dd3fc`
  <br/>`<motion.div className="h-full" style={{ background: "#7dd3fc" }}`

### `app/blog/[slug]/blog-post-client.tsx` (41)

- **L405** — `#1a3a2a` · `#0d1c14`
  <br/>`배경은 하단 전역 탭바와 같은 계열에 한 톤 밝게(#1a3a2a vs #0d1c14). */`
- **L407** — `#1a3a2a` · `#0d1c14`
  <br/>`배경만 한 톤 밝게(#1a3a2a vs 하단 #0d1c14)해 상·하단을 구분한다. */`
- **L408** — `#1a3a2a` · `rgba(255,255,255...)`
  <br/>`style={{ background: "#1a3a2a", borderBottom: "1px solid rgba(255,255,255,0.10)", height: 62 }}`
- **L424** — `#f4f0e7`
  <br/>`style={{ color: "#f4f0e7" }}`
- **L439** — `#f4f0e7`
  <br/>`style={{ color: "#f4f0e7" }}`
- **L468** — `#f4f0e7`
  <br/>`style={{ color: "#f4f0e7" }}`
- **L494** — `#e9c766`
  <br/>`style={{ color: "#e9c766" }}`
- **L616** — `#d4af37` · `#f0d060` · `rgba(212,175,55...)`
  <br/>`style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", boxShadow: "0 2px 12px rgba(212,175,`
- **L619** — `rgba(13,28,20...)`
  <br/>`<div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: "rgba(13,28,20`
- **L620** — `#0d1c14`
  <br/>`<div className="text-sm font-extrabold leading-snug line-clamp-2" style={{ color: "#0d1c14" }}>`
- **L624** — `rgba(13,28,20...)`
  <br/>`<div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgr`
- **L625** — `#0d1c14`
  <br/>`<ChevronRight className="w-5 h-5" style={{ color: "#0d1c14" }} />`
- **L764** — `#1da1f2` · `#1da1f2` · `#1da1f2` · `#1da1f2` · `bg-[#1da1f2]` · `border-[#1da1f2]` · `text-[#1da1f2]` · `bg-[#1da1f2]`
  <br/>`className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1da1f2]/10 border border-[#1da1f2]/`
- **L773** — `#1877f2` · `#1877f2` · `#1877f2` · `#1877f2` · `bg-[#1877f2]` · `border-[#1877f2]` · `text-[#1877f2]` · `bg-[#1877f2]`
  <br/>`className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877f2]/10 border border-[#1877f2]/`
- **L794** — `text-yellow-400`
  <br/>`<Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-y`
- **L821** — `#d4af37` · `#f0d060` · `rgba(212,175,55...)`
  <br/>`style={{ bottom: TAB_BAR_HEIGHT, background: "linear-gradient(135deg,#d4af37,#f0d060)", boxShadow: "`
- **L825** — `rgba(13,28,20...)`
  <br/>`<div className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "rgba(13,28,`
- **L826** — `#0d1c14`
  <br/>`<div className="text-sm font-extrabold truncate" style={{ color: "#0d1c14" }}>{nextPost.title}</div>`
- **L828** — `rgba(13,28,20...)`
  <br/>`<div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgr`
- **L829** — `#0d1c14`
  <br/>`<ChevronRight className="w-5 h-5" style={{ color: "#0d1c14" }} />`

### `components/tournament-guide-post.tsx` (35)

- **L75** — `rgba(212,175,55...)`
  <br/>`<div className="border-b border-primary/20" style={{ background: "rgba(212,175,55,0.06)" }}>`
- **L106** — `rgba(0,0,0...)`
  <br/>`<div className="border-b border-border" style={{ background: "rgba(0,0,0,0.15)" }}>`
- **L137** — `rgba(0,0,0...)` · `rgba(0,0,0...)`
  <br/>`<div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%,`
- **L186** — `rgba(212,175,55...)`
  <br/>`style={{ background: "rgba(212,175,55,0.07)" }}>`
- **L207** — `#d4af37` · `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`style={{ background: "rgba(212,175,55,0.15)", color: "#d4af37", border: "1px solid rgba(212,175,55,0`
- **L255** — `#d4af37` · `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`style={{ background: "rgba(212,175,55,0.15)", color: "#d4af37", border: "1px solid rgba(212,175,55,0`
- **L283** — `rgba(212,175,55...)`
  <br/>`style={{ background: "rgba(212,175,55,0.05)" }}>`
- **L312** — `#0d2618` · `#0a3320` · `#071a10` · `from-[#0d2618]` · `via-[#0a3320]` · `to-[#071a10]`
  <br/>`<div className="h-36 bg-gradient-to-br from-[#0d2618] via-[#0a3320] to-[#071a10] flex items-center j`
- **L357** — `#1da1f2` · `#1da1f2` · `#1da1f2` · `#1da1f2` · `bg-[#1da1f2]` · `border-[#1da1f2]` · `text-[#1da1f2]` · `bg-[#1da1f2]`
  <br/>`className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1da1f2]/10 border border-[#1da1f2]/`
- **L362** — `#1877f2` · `#1877f2` · `#1877f2` · `#1877f2` · `bg-[#1877f2]` · `border-[#1877f2]` · `text-[#1877f2]` · `bg-[#1877f2]`
  <br/>`className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877f2]/10 border border-[#1877f2]/`
- **L374** — `text-yellow-400`
  <br/>`<Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-y`

### `app/rules/rules-client.tsx` (35)

- **L15** — `#0d2818` · `#1a4a2e` · `#0d2818` · `from-[#0d2818]` · `via-[#1a4a2e]` · `to-[#0d2818]`
  <br/>`bg: "from-[#0d2818] via-[#1a4a2e] to-[#0d2818]",`
- **L24** — `#1a1a0d` · `#3a3a10` · `#1a1a0d` · `from-[#1a1a0d]` · `via-[#3a3a10]` · `to-[#1a1a0d]`
  <br/>`bg: "from-[#1a1a0d] via-[#3a3a10] to-[#1a1a0d]",`
- **L33** — `#1a0d0d` · `#3a1010` · `#1a0d0d` · `from-[#1a0d0d]` · `via-[#3a1010]` · `to-[#1a0d0d]`
  <br/>`bg: "from-[#1a0d0d] via-[#3a1010] to-[#1a0d0d]",`
- **L112** — `text-blue-400`
  <br/>`{ name: "체크 (Check)", desc: "앞에 베팅이 없을 때 베팅 없이 순서를 넘기는 행동", color: "text-blue-400" },`
- **L113** — `text-red-400`
  <br/>`{ name: "폴드 (Fold)", desc: "다른 사람이 이미 베팅을 했을 때 핸드를 포기하고 기권하는 것", color: "text-red-400" },`
- **L114** — `text-green-400`
  <br/>`{ name: "벳 (Bet)", desc: "테이블에 처음으로 베팅을 시작하는 행동", color: "text-green-400" },`
- **L115** — `text-orange-400`
  <br/>`{ name: "레이즈 (Raise)", desc: "상대방의 베팅 금액에 더 많은 칩을 추가해 올리는 것", color: "text-orange-400" },`
- **L116** — `text-yellow-400`
  <br/>`{ name: "콜 (Call)", desc: "상대방의 베팅 금액과 동일하게 베팅하여 핸드에 남아 계속 플레이하는 것", color: "text-yellow-400" },`
- **L303** — `bg-red-500` · `border-red-500`
  <br/>`<div className="flex gap-3 bg-red-500/5 border border-red-500/20 rounded-xl px-4 py-4">`
- **L304** — `text-red-400`
  <br/>`<AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />`
- **L328** — `bg-red-500` · `border-red-500` · `text-red-400`
  <br/>`<span className="w-6 h-6 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs fl`
- **L407** — `border-green-500` · `bg-green-500`
  <br/>`{ name: "노 리밋 (No-Limit)", desc: "플레이어가 언제든지 원하는 만큼 베팅할 수 있으며, '올인'까지 가능합니다. 텍사스 홀덤에서 가장 일반적입니다.", c`
- **L408** — `border-yellow-500` · `bg-yellow-500`
  <br/>`{ name: "팟 리밋 (Pot-Limit)", desc: "현재 팟의 크기가 플레이어가 베팅할 수 있는 최대 금액을 결정합니다. 오마하 포커에서 주로 사용됩니다.", color`
- **L409** — `border-blue-500` · `bg-blue-500`
  <br/>`{ name: "고정 리밋 (Fixed-Limit)", desc: "베팅과 레이즈 금액이 미리 정해진 고정액으로 제한됩니다. 세븐 카드 스터드에서 일반적입니다.", color: "`

### `app/community/post-card.tsx` (34)

- **L81** — `#facc15`
  <br/>`winner: { label: "🏆 우승", color: "#facc15" },`
- **L82** — `#f87171`
  <br/>`hot: { label: "🔥 인기", color: "#f87171" },`
- **L83** — `#60a5fa`
  <br/>`top: { label: "⭐ TOP", color: "#60a5fa" },`
- **L84** — `#34d399`
  <br/>`participant: { label: "🎟️ 참여", color: "#34d399" },`
- **L108** — `#d4af37` · `#f0d060`
  <br/>`style={{ width: size, height: size, background: "linear-gradient(135deg,#d4af37,#f0d060)" }}`
- **L110** — `#0d1c14`
  <br/>`<span style={{ fontSize: size * 0.52, color: "#0d1c14", lineHeight: 1 }}>♠</span>`
- **L167** — `rgba(212,175,55...)`
  <br/>`style={{ background: CARD, border: "1px solid rgba(212,175,55,0.25)" }}`
- **L173** — `#d4af37` · `#f0d060`
  <br/>`style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)" }}`
- **L193** — `#d4af37` · `#f0d060`
  <br/>`style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}`
- **L230** — `rgba(212,175,55...)`
  <br/>`? "1px solid rgba(212,175,55,0.25)"`
- **L231** — `rgba(52,211,153...)`
  <br/>`: "1px solid rgba(52,211,153,0.18)";`
- **L240** — `rgba(212,175,55...)`
  <br/>`style={{ background: CARD, border: "1px solid rgba(212,175,55,0.25)" }}`
- **L242** — `#d4af37` · `#f0d060`
  <br/>`<div className="hidden lg:block" style={{ height: 3, background: "linear-gradient(90deg,#d4af37,#f0d`
- **L252** — `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`<span className="text-[10px] px-2 py-0.5 rounded-full font-bold flex-shrink-0" style={{ background: `
- **L275** — `rgba(212,175,55...)`
  <br/>`style={{ aspectRatio: "16 / 9", maxHeight: 340, background: "rgba(212,175,55,0.06)" }}`
- **L290** — `#d4af37` · `#f0d060`
  <br/>`<Link href={blogHref} className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounde`
- **L305** — `#d4af37` · `#f0d060`
  <br/>`<div className="hidden lg:block" style={{ height: 3, background: "linear-gradient(90deg,#d4af37,#f0d`
- **L319** — `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`<span className="hidden lg:inline text-[10px] px-2 py-0.5 rounded-full font-bold flex-shrink-0" styl`
- **L343** — `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`<div className="rounded-lg p-3 mb-1" style={{ background: "rgba(212,175,55,0.06)", border: "1px soli`
- **L382** — `rgba(212,175,55...)`
  <br/>`background: translated && !showOriginal ? "rgba(212,175,55,0.15)" : SURFACE,`
- **L384** — `rgba(212,175,55...)`
  <br/>`border: '1px solid ${translated && !showOriginal ? "rgba(212,175,55,0.3)" : DIVIDER}',`
- **L389** — `#f87171`
  <br/>`{transErr && <span className="text-[11px] ml-2" style={{ color: "#f87171" }}>번역 실패</span>}`
- **L401** — `#f87171` · `#f87171`
  <br/>`<svg className="w-[18px] h-[18px] lg:w-5 lg:h-5" fill={post.liked ? "#f87171" : "none"} viewBox="0 0`
- **L404** — `#f87171`
  <br/>`<span className="text-xs lg:text-sm font-semibold" style={{ color: post.liked ? "#f87171" : TEXT_SEC`

### `app/login/page.tsx` (33)

- **L9** — `#d4af37`
  <br/>`const GOLD = "#d4af37";`
- **L10** — `#0b1120`
  <br/>`const BG = "#0b1120";`
- **L109** — `#0f1a2e` · `rgba(212,175,55...)`
  <br/>`style={{ background: "#0f1a2e", border: "1px solid rgba(212,175,55,0.2)" }}`
- **L115** — `#d4af37` · `#f0d060`
  <br/>`style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)" }}`
- **L119** — `#f0e8c8`
  <br/>`<h1 className="text-lg font-bold" style={{ color: "#f0e8c8" }}>`
- **L122** — `rgba(255,255,255...)`
  <br/>`<p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>`
- **L133** — `#1f1f1f`
  <br/>`style={{ background: "#fff", color: "#1f1f1f" }}`
- **L141** — `#EA4335`
  <br/>`<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6`
- **L142** — `#4285F4`
  <br/>`<path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78`
- **L143** — `#FBBC05`
  <br/>`<path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.`
- **L144** — `#34A853`
  <br/>`<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.2`
- **L155** — `#FEE500` · `#191919`
  <br/>`style={{ background: "#FEE500", color: "#191919" }}`
- **L164** — `#191919`
  <br/>`fill="#191919"`
- **L176** — `rgba(255,255,255...)`
  <br/>`<div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />`
- **L177** — `rgba(255,255,255...)`
  <br/>`<span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>또는 이메일로</span>`
- **L178** — `rgba(255,255,255...)`
  <br/>`<div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />`
- **L190** — `#f0e8c8` · `rgba(255,255,255...)` · `rgba(255,255,255...)`
  <br/>`style={{ background: "rgba(255,255,255,0.06)", color: "#f0e8c8", border: "1px solid rgba(255,255,255`
- **L200** — `#f0e8c8` · `rgba(255,255,255...)` · `rgba(255,255,255...)`
  <br/>`style={{ background: "rgba(255,255,255,0.06)", color: "#f0e8c8", border: "1px solid rgba(255,255,255`
- **L210** — `#f0e8c8` · `rgba(255,255,255...)` · `rgba(255,255,255...)`
  <br/>`style={{ background: "rgba(255,255,255,0.06)", color: "#f0e8c8", border: "1px solid rgba(255,255,255`
- **L213** — `#f87171`
  <br/>`{err && <p className="text-xs" style={{ color: "#f87171" }}>{err}</p>}`
- **L214** — `#34d399`
  <br/>`{msg && <p className="text-xs" style={{ color: "#34d399" }}>{msg}</p>}`
- **L220** — `#d4af37` · `#f0d060`
  <br/>`style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}`
- **L234** — `rgba(255,255,255...)`
  <br/>`style={{ color: "rgba(255,255,255,0.5)" }}`

### `app/community/event-tab.tsx` (31)

- **L41** — `#d4af37` · `#f0d060`
  <br/>`? "linear-gradient(90deg,#d4af37,#f0d060)"`
- **L42** — `rgba(212,175,55...)`
  <br/>`: "rgba(212,175,55,0.35)",`
- **L76** — `#d4af37` · `#f0d060`
  <br/>`? "linear-gradient(135deg,#d4af37,#f0d060)"`
- **L78** — `rgba(212,175,55...)`
  <br/>`? "rgba(212,175,55,0.85)"`
- **L82** — `rgba(212,175,55...)`
  <br/>`? "2px solid rgba(212,175,55,0.6)"`
- **L84** — `rgba(212,175,55...)`
  <br/>`? "2px solid rgba(212,175,55,0.9)"`
- **L86** — `rgba(212,175,55...)`
  <br/>`boxShadow: isMatch ? "0 0 10px rgba(212,175,55,0.5)" : "none",`
- **L410** — `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`background: "linear-gradient(135deg, rgba(212,175,55,0.1), rgba(212,175,55,0.04))",`
- **L411** — `rgba(212,175,55...)`
  <br/>`border: "1px solid rgba(212,175,55,0.25)",`
- **L414** — `#d4af37` · `#f0d060`
  <br/>`<div className="h-1" style={{ background: "linear-gradient(90deg,#d4af37,#f0d060,transparent)" }} />`
- **L418** — `rgba(212,175,55...)`
  <br/>`<span className="text-xs font-black px-2 py-0.5 rounded-full" style={{ background: "rgba(212,175,55,`
- **L437** — `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.15)" }}`
- **L448** — `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)" }}`
- **L472** — `#d4af37` · `#f0d060`
  <br/>`style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}`
- **L521** — `#d4af37` · `#f0d060`
  <br/>`style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}`
- **L586** — `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)" }}`
- **L637** — `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`<div className="flex flex-wrap gap-2 mb-4 px-3 py-2.5 rounded-xl" style={{ background: "rgba(212,175`
- **L645** — `rgba(212,175,55...)`
  <br/>`style={{ background: "rgba(212,175,55,0.2)", color: GOLD }}`
- **L657** — `text-red-400`
  <br/>`<p className="text-xs text-red-400 mb-3 text-center">{submitError}</p>`
- **L666** — `#d4af37` · `#f0d060`
  <br/>`? "linear-gradient(135deg,#d4af37,#f0d060)"`

### `app/pub/[region]/pub-region-client.tsx` (31)

- **L94** — `#03C75A` · `#02b050` · `shadow-green-900` · `bg-[#03C75A]` · `bg-[#02b050]`
  <br/>`className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#03C75A] hover:bg-[#02b050] te`
- **L104** — `#FEE500` · `#f0d800` · `#191919` · `shadow-yellow-900` · `bg-[#FEE500]` · `bg-[#f0d800]` · `text-[#191919]`
  <br/>`className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#FEE500] hover:bg-[#f0d800] te`
- **L158** — `bg-amber-500` · `text-amber-400` · `border-amber-500`
  <br/>`<span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full px-3`
- **L190** — `#03C75A` · `text-[#03C75A]`
  <br/>`className="inline-flex items-center gap-1 text-xs text-[#03C75A] hover:underline flex-shrink-0 mt-1"`
- **L217** — `#03C75A` · `#02b050` · `bg-[#03C75A]` · `bg-[#02b050]`
  <br/>`className="flex-1 inline-flex items-center justify-center gap-2 bg-[#03C75A] hover:bg-[#02b050] text`
- **L247** — `#03C75A` · `#02b050` · `bg-[#03C75A]` · `bg-[#02b050]`
  <br/>`className="inline-flex items-center justify-center gap-2 bg-[#03C75A] hover:bg-[#02b050] text-white `
- **L256** — `#FEE500` · `#f0d800` · `#191919` · `bg-[#FEE500]` · `bg-[#f0d800]` · `text-[#191919]`
  <br/>`className="inline-flex items-center justify-center gap-2 bg-[#FEE500] hover:bg-[#f0d800] text-[#1919`

### `app/blog/blog-index-client.tsx` (30)

- **L135** — `bg-gray-500`
  <br/>`★2026-08-04: 회색(bg-gray-500) 풀블리드 히어로 + 흑백 로드맵 배경 이미지를 걷어냈다.`
- **L195** — `#1c0b35` · `#0d1f3a` · `#071a0e` · `from-[#1c0b35]` · `via-[#0d1f3a]` · `to-[#071a0e]`
  <br/>`<div className="absolute inset-0 bg-gradient-to-br from-[#1c0b35] via-[#0d1f3a] to-[#071a0e]" />`
- **L196** — `rgba(212,175,55...)`
  <br/>`<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(212,175,55,0.18)_0%,tra`
- **L201** — `rgba(255,220,80...)`
  <br/>`style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,220,80,0.13) 50%, transparen`
- **L209** — `rgba(212,175,55...)` · `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`animate={{ borderColor: ["rgba(212,175,55,0.35)", "rgba(212,175,55,0.75)", "rgba(212,175,55,0.35)"] `
- **L215** — `bg-yellow-500` · `border-yellow-400`
  <br/>`<div className="flex-shrink-0 w-14 h-14 rounded-xl bg-yellow-500/15 border border-yellow-400/40 flex`
- **L222** — `bg-yellow-400`
  <br/>`<span className="inline-block text-[11px] bg-yellow-400 text-black font-black px-2.5 py-0.5 rounded-`
- **L229** — `text-yellow-300`
  <br/>`<p className="text-xs text-yellow-300/75 mt-0.5">`
- **L243** — `bg-yellow-400`
  <br/>`className="flex-shrink-0 px-4 py-2.5 bg-yellow-400 text-black font-black text-sm rounded-xl flex ite`
- **L244** — `#fef08a`
  <br/>`whileHover={{ backgroundColor: "#fef08a" }}`
- **L323** — `#0d2618` · `#0a3320` · `#071a10` · `from-[#0d2618]` · `via-[#0a3320]` · `to-[#071a10]`
  <br/>`<div className="h-52 md:h-auto md:w-72 bg-gradient-to-br from-[#0d2618] via-[#0a3320] to-[#071a10] f`
- **L398** — `#0d2618` · `#0a3320` · `#071a10` · `from-[#0d2618]` · `via-[#0a3320]` · `to-[#071a10]`
  <br/>`<div className="h-36 bg-gradient-to-br from-[#0d2618] via-[#0a3320] to-[#071a10] flex items-center j`

### `app/en/quiz/quiz-client.tsx` (30)

- **L30** — `#d4af37` · `#d1d5db`
  <br/>`border: highlight ? '2px solid #d4af37' : '1px solid ${dim ? '#333' : '#d1d5db'}',`
- **L31** — `rgba(212,175,55...)` · `rgba(0,0,0...)`
  <br/>`boxShadow: highlight ? '0 0 14px rgba(212,175,55,0.55)' : '0 2px 8px rgba(0,0,0,0.45)',`
- **L34** — `#dc2626` · `#111827`
  <br/>`<span style={{ fontSize:13, fontWeight:800, color: dim?'#444': isRed?'#dc2626':'#111827', lineHeight`
- **L42** — `#d4af37`
  <br/>`if (s===10) return { label:"🏆 Perfect! Hand-ranking master", color:"#d4af37" };`
- **L43** — `#22c55e`
  <br/>`if (s>=8)   return { label:"🔥 Expert — great job",           color:"#22c55e" };`
- **L44** — `#60a5fa`
  <br/>`if (s>=6)   return { label:"👍 Solid — almost there!",         color:"#60a5fa" };`
- **L45** — `#f59e0b`
  <br/>`if (s>=4)   return { label:"📚 Keep practicing — try again",   color:"#f59e0b" };`
- **L46** — `#ef4444`
  <br/>`return       { label:"💪 Beginner — review the rankings!",      color:"#ef4444" };`
- **L105** — `#d4af37` · `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`style={{ borderColor:'rgba(212,175,55,0.5)', color:'#d4af37', background:'rgba(212,175,55,0.08)' }}>`
- **L110** — `#d4af37`
  <br/>`style={{ background:'#d4af37' }}>`
- **L178** — `bg-green-900` · `border-green-500`
  <br/>`if (isCorr)     { bg='bg-green-900/25'; border='border-green-500'; }`
- **L179** — `bg-red-900` · `border-red-500`
  <br/>`else if (isSel) { bg='bg-red-900/25';   border='border-red-500'; }`
- **L185** — `text-green-400` · `text-red-400`
  <br/>`<div className={'font-bold text-sm ${isCorr&&phase==='answered'?'text-green-400':isSel&&phase==='ans`
- **L188** — `text-green-400`
  <br/>`{phase==='answered' && isCorr && <div className="text-[11px] font-bold mt-1.5 text-green-400">✓ Corr`
- **L189** — `text-red-400`
  <br/>`{phase==='answered' && isSel && !isCorr && <div className="text-[11px] font-bold mt-1.5 text-red-400`
- **L197** — `bg-green-900` · `border-green-500` · `bg-red-900` · `border-red-500`
  <br/>`className={'rounded-xl p-4 mb-5 border-2 ${isRight?'bg-green-900/20 border-green-500/40':'bg-red-900`
- **L201** — `text-green-400` · `text-red-400`
  <br/>`<div className={'font-bold text-sm ${isRight?'text-green-400':'text-red-400'}'}>`
- **L215** — `#d4af37`
  <br/>`style={{ background:'#d4af37' }}>`

### `app/quiz/quiz-client.tsx` (30)

- **L16** — `#d4af37` · `#d1d5db`
  <br/>`border: highlight ? '2px solid #d4af37' : '1px solid ${dim ? '#333' : '#d1d5db'}',`
- **L17** — `rgba(212,175,55...)` · `rgba(0,0,0...)`
  <br/>`boxShadow: highlight ? '0 0 14px rgba(212,175,55,0.55)' : '0 2px 8px rgba(0,0,0,0.45)',`
- **L20** — `#dc2626` · `#111827`
  <br/>`<span style={{ fontSize:13, fontWeight:800, color: dim?'#444': isRed?'#dc2626':'#111827', lineHeight`
- **L28** — `#d4af37`
  <br/>`if (s===10) return { label:"🏆 만점! 족보 마스터",    color:"#d4af37" };`
- **L29** — `#22c55e`
  <br/>`if (s>=8)   return { label:"🔥 고수 — 아주 잘했어요", color:"#22c55e" };`
- **L30** — `#60a5fa`
  <br/>`if (s>=6)   return { label:"👍 준수 — 조금만 더!",    color:"#60a5fa" };`
- **L31** — `#f59e0b`
  <br/>`if (s>=4)   return { label:"📚 연습 필요 — 다시 도전", color:"#f59e0b" };`
- **L32** — `#ef4444`
  <br/>`return       { label:"💪 초보 — 족보부터 다시!",       color:"#ef4444" };`
- **L91** — `#d4af37` · `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`style={{ borderColor:'rgba(212,175,55,0.5)', color:'#d4af37', background:'rgba(212,175,55,0.08)' }}>`
- **L96** — `#d4af37`
  <br/>`style={{ background:'#d4af37' }}>`
- **L166** — `bg-green-900` · `border-green-500`
  <br/>`if (isCorr)     { bg='bg-green-900/25'; border='border-green-500'; }`
- **L167** — `bg-red-900` · `border-red-500`
  <br/>`else if (isSel) { bg='bg-red-900/25';   border='border-red-500'; }`
- **L173** — `text-green-400` · `text-red-400`
  <br/>`<div className={'font-bold text-sm ${isCorr&&phase==='answered'?'text-green-400':isSel&&phase==='ans`
- **L177** — `text-green-400`
  <br/>`{phase==='answered' && isCorr && <div className="text-[11px] font-bold mt-1.5 text-green-400">✓ 정답</`
- **L178** — `text-red-400`
  <br/>`{phase==='answered' && isSel && !isCorr && <div className="text-[11px] font-bold mt-1.5 text-red-400`
- **L186** — `bg-green-900` · `border-green-500` · `bg-red-900` · `border-red-500`
  <br/>`className={'rounded-xl p-4 mb-5 border-2 ${isRight?'bg-green-900/20 border-green-500/40':'bg-red-900`
- **L190** — `text-green-400` · `text-red-400`
  <br/>`<div className={'font-bold text-sm ${isRight?'text-green-400':'text-red-400'}'}>`
- **L204** — `#d4af37`
  <br/>`style={{ background:'#d4af37' }}>`

### `app/rules/texas-holdem/rules-texas-holdem-client.tsx` (25)

- **L82** — `text-red-400`
  <br/>`{ name: "폴드 (Fold)", icon: "✗", color: "text-red-400", desc: "이번 판을 포기하고 카드를 버립니다. 추가 손실 없이 이번 판에서 제`
- **L83** — `text-blue-400`
  <br/>`{ name: "체크 (Check)", icon: "✓", color: "text-blue-400", desc: "베팅 없이 다음 플레이어에게 순서를 넘깁니다. 앞에 베팅이 없을 `
- **L84** — `text-yellow-400`
  <br/>`{ name: "콜 (Call)", icon: "=", color: "text-yellow-400", desc: "앞 플레이어의 베팅 금액과 동일하게 베팅해 핸드를 유지합니다.",`
- **L85** — `text-green-400`
  <br/>`{ name: "벳 (Bet)", icon: "↑", color: "text-green-400", desc: "처음으로 베팅을 시작합니다. 앞에 베팅이 없을 때만 사용 가능합니다.`
- **L86** — `text-orange-400`
  <br/>`{ name: "레이즈 (Raise)", icon: "↑↑", color: "text-orange-400", desc: "앞의 베팅 금액보다 더 높게 올립니다. 상대에게 더 많은 `
- **L87** — `text-purple-400`
  <br/>`{ name: "리레이즈 (3-Bet)", icon: "↑↑↑", color: "text-purple-400", desc: "레이즈에 다시 레이즈합니다. 매우 강한 핸드 신호이거나`
- **L92** — `text-yellow-400`
  <br/>`{ rank: 1, name: "로열 플러시", korean: "Royal Flush", example: "A♠ K♠ Q♠ J♠ 10♠", desc: "같은 무늬 A·K·Q·J·1`
- **L93** — `text-yellow-400`
  <br/>`{ rank: 2, name: "스트레이트 플러시", korean: "Straight Flush", example: "5♥ 6♥ 7♥ 8♥ 9♥", desc: "같은 무늬 연속 5`
- **L94** — `text-orange-400`
  <br/>`{ rank: 3, name: "포카드", korean: "Four of a Kind", example: "A♠ A♥ A♦ A♣ K♠", desc: "같은 숫자 4장", freq:`
- **L95** — `text-orange-400`
  <br/>`{ rank: 4, name: "풀하우스", korean: "Full House", example: "K♠ K♥ K♦ A♠ A♥", desc: "트리플 + 원페어", freq: "`
- **L96** — `text-blue-400`
  <br/>`{ rank: 5, name: "플러시", korean: "Flush", example: "A♠ K♠ 8♠ 5♠ 2♠", desc: "같은 무늬 5장 (비연속)", freq: "드`
- **L97** — `text-blue-400`
  <br/>`{ rank: 6, name: "스트레이트", korean: "Straight", example: "5♥ 6♠ 7♦ 8♣ 9♥", desc: "다른 무늬 연속 5장", freq: `
- **L98** — `text-green-400`
  <br/>`{ rank: 7, name: "트리플", korean: "Three of a Kind", example: "Q♠ Q♥ Q♦ 5♠ 7♥", desc: "같은 숫자 3장", freq`
- **L99** — `text-green-400`
  <br/>`{ rank: 8, name: "투페어", korean: "Two Pair", example: "J♠ J♥ 8♦ 8♣ A♠", desc: "다른 숫자 페어 2쌍", freq: "자`
- **L299** — `text-blue-400`
  <br/>`{ label: "레이크 요율", value: "통상 3~5%", sub: "사이트·스테이크마다 다름", color: "text-blue-400" },`
- **L300** — `text-orange-400`
  <br/>`{ label: "레이크 캡(Cap)", value: "최대 한도 있음", sub: "큰 팟도 일정 금액 이상 안 뗌", color: "text-orange-400" },`
- **L301** — `text-green-400`
  <br/>`{ label: "노 플랍 노 드랍", value: "NFND 규칙", sub: "플랍 전 팟 종료 시 레이크 없음", color: "text-green-400" },`
- **L322** — `text-red-400`
  <br/>`<div className="text-xl font-bold text-red-400">5%</div>`
- **L325** — `bg-red-950` · `border-red-900`
  <br/>`<div className="px-5 py-3 bg-red-950/30 rounded-lg border border-red-900/40">`
- **L326** — `text-red-400`
  <br/>`<div className="text-xs text-red-400/70 mb-0.5">레이크 공제</div>`
- **L327** — `text-red-400`
  <br/>`<div className="text-xl font-bold text-red-400">-$0.03</div>`
- **L337** — `bg-yellow-950` · `border-yellow-700`
  <br/>`<div className="mt-4 p-4 bg-yellow-950/20 border border-yellow-700/20 rounded-lg text-sm text-muted-`
- **L338** — `text-yellow-400`
  <br/>`<strong className="text-yellow-400">⚠️ 레이크가 수익성에 미치는 영향:</strong> 장기적으로 승리하려면 레이크를 이기고도 남는 승률이 필요합니다`

### `components/cluster-minimap.tsx` (22)

- **L63** — `#2563eb` · `#2563eb` · `fill-[#2563eb]` · `text-[#2563eb]`
  <br/>`<MapPin className="w-4 h-4 fill-[#2563eb] text-[#2563eb] drop-shadow-[0_0_7px_rgba(37,99,235,0.8)]" `
- **L83** — `#2563eb` · `#2563eb` · `bg-[#2563eb]` · `border-[#2563eb]`
  <br/>`<div className="-mt-0.5 rounded-lg bg-[#2563eb]/10 border border-[#2563eb]/45 px-2 py-1 shadow-[0_0_`
- **L85** — `#2563eb` · `text-[#2563eb]`
  <br/>`<div className="text-[9px] font-semibold text-[#2563eb] uppercase tracking-wider mt-0.5">{labels.you`
- **L138** — `#2563eb` · `#2563eb` · `#2563eb` · `text-[#2563eb]` · `bg-[#2563eb]` · `border-[#2563eb]`
  <br/>`<span className="flex-shrink-0 text-[10px] font-semibold text-[#2563eb] bg-[#2563eb]/10 border borde`
- **L155** — `#2563eb` · `#2563eb` · `#2563eb` · `text-[#2563eb]` · `bg-[#2563eb]` · `border-[#2563eb]`
  <br/>`<span className="ml-auto text-[10px] font-semibold text-[#2563eb] bg-[#2563eb]/10 border border-[#25`

### `app/holdem-practice/holdem-practice-client.tsx` (18)

- **L166** — `#3b1d12` · `#3b1d12` · `#4a2417` · `#4a2417`
  <br/>`background: "repeating-linear-gradient(45deg,#3b1d12,#3b1d12 6px,#4a2417 6px,#4a2417 12px)",`
- **L167** — `rgba(212,175,55...)`
  <br/>`border: "1px solid rgba(212,175,55,0.35)",`
- **L178** — `#fdf8ee` · `bg-[#fdf8ee]`
  <br/>`className={'${w} rounded-md bg-[#fdf8ee] flex flex-col items-center justify-center font-black leadin`
- **L179** — `#d4af37` · `#c0392b` · `#0f172a`
  <br/>`style={{ border: "1px solid #d4af37", color: red ? "#c0392b" : "#0f172a" }}`
- **L313** — `rgba(0,0,0...)`
  <br/>`boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)",`
- **L427** — `#fdf8ee` · `#0f172a` · `bg-[#fdf8ee]` · `text-[#0f172a]`
  <br/>`<span className="w-5 h-5 rounded-full bg-[#fdf8ee] text-[#0f172a] text-[10px] font-black flex items-`
- **L444** — `text-amber-300`
  <br/>`<div className="text-[11px] text-amber-300">베팅 {p.bet.toLocaleString()}</div>`
- **L449** — `text-emerald-300`
  <br/>`<div className="text-[11px] text-emerald-300 font-semibold">{revealName}</div>`
- **L490** — `#d4af37`
  <br/>`className="w-full accent-[#d4af37]"`

### `components/intl-blog-post-client.tsx` (17)

- **L456** — `#1da1f2` · `#1da1f2` · `#1da1f2` · `#1da1f2` · `bg-[#1da1f2]` · `border-[#1da1f2]` · `text-[#1da1f2]` · `bg-[#1da1f2]`
  <br/>`className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1da1f2]/10 border border-[#1da1f2]/`
- **L464** — `#1877f2` · `#1877f2` · `#1877f2` · `#1877f2` · `bg-[#1877f2]` · `border-[#1877f2]` · `text-[#1877f2]` · `bg-[#1877f2]`
  <br/>`className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1877f2]/10 border border-[#1877f2]/`
- **L483** — `text-yellow-400`
  <br/>`<Link href={base} className="inline-flex items-center gap-2 text-primary font-semibold hover:text-ye`

### `app/admin/admin-client.tsx` (17)

- **L12** — `#12100c`
  <br/>`const BG = "#12100c";`
- **L13** — `#1c1810`
  <br/>`const CARD = "#1c1810";`
- **L14** — `#2e2818`
  <br/>`const BORDER = "#2e2818";`
- **L15** — `#f4ead2`
  <br/>`const INK = "#f4ead2";`
- **L16** — `#a8977a`
  <br/>`const MUTED = "#a8977a";`
- **L17** — `#c9a227`
  <br/>`const GOLD = "#c9a227";`
- **L18** — `#c0392b`
  <br/>`const RED = "#c0392b";`
- **L73** — `#1a1508`
  <br/>`background: tab === t ? GOLD : "transparent", color: tab === t ? "#1a1508" : MUTED, fontWeight: 600,`
- **L139** — `#3fb950`
  <br/>`총 {filtered.length}명 · <span style={{ color: "#3fb950" }}>🟢 최근 24시간 로그인 {recentCount}명</span> · 최근 `
- **L145** — `#3fb950`
  <br/>`{isRecent(m.lastSignIn) && <span title="24시간 내 로그인" style={{ fontSize: 9, color: "#3fb950" }}>🟢</sp`
- **L162** — `#1a1508`
  <br/>`style={{ ...btn(m.badge === b || (!m.badge && b === "") ? GOLD : BORDER), background: m.badge === b `
- **L183** — `#1a1508`
  <br/>`<button key={s} onClick={() => setSub(s)} style={{ ...btn(sub === s ? GOLD : BORDER), background: su`
- **L226** — `#1a1508`
  <br/>`<button onClick={() => setEditing({})} style={{ ...btn(GOLD), color: "#1a1508", marginBottom: 12 }}>`
- **L234** — `#1a1508`
  <br/>`<span style={{ fontSize: 11, padding: "2px 7px", borderRadius: 6, background: p.active ? GOLD : BORD`
- **L282** — `#1a1508`
  <br/>`<button type="submit" style={{ ...btn(GOLD), background: GOLD, color: "#1a1508" }}>저장</button>`
- **L308** — `#1a1508`
  <br/>`<button disabled={pending} onClick={() => run(() => runDrawTest(target, force))} style={{ ...btn(GOL`
- **L322** — `#1a1508`
  <br/>`<span key={n} style={{ width: 26, height: 26, borderRadius: "50%", background: GOLD, color: "#1a1508`

### `app/en/hand-chart/hand-chart-client.tsx` (17)

- **L33** — `#dc2626`
  <br/>`{ id: 1, label: "UTG", full: "Under the Gun (UTG)", color: "#dc2626", pct: "~12%" },`
- **L34** — `#ea580c`
  <br/>`{ id: 2, label: "HJ", full: "Hijack (HJ)", color: "#ea580c", pct: "~20%" },`
- **L35** — `#ca8a04`
  <br/>`{ id: 3, label: "CO", full: "Cutoff (CO)", color: "#ca8a04", pct: "~29%" },`
- **L36** — `#16a34a`
  <br/>`{ id: 4, label: "BTN", full: "Button (BTN)", color: "#16a34a", pct: "~42%" },`
- **L37** — `#2563eb`
  <br/>`{ id: 5, label: "SB", full: "Small Blind (SB)", color: "#2563eb", pct: "~56%" },`
- **L42** — `#dc2626`
  <br/>`"#dc2626",`
- **L43** — `#ea580c`
  <br/>`"#ea580c",`
- **L44** — `#ca8a04`
  <br/>`"#ca8a04",`
- **L45** — `#16a34a`
  <br/>`"#16a34a",`
- **L46** — `#2563eb`
  <br/>`"#2563eb",`
- **L98** — `rgba(212,175,55...)`
  <br/>`style={{ background: "radial-gradient(circle, rgba(212,175,55,0.18), transparent 70%)" }}`
- **L210** — `#1a1a1a`
  <br/>`const bgColor = TIER_COLORS[tier] || "#1a1a1a";`
- **L226** — `#d4af37`
  <br/>`outline: isHovered ? "2px solid #d4af37" : undefined,`
- **L254** — `#0d0d0d`
  <br/>`backgroundColor: "#0d0d0d",`
- **L255** — `#f0f0f0`
  <br/>`color: "#f0f0f0",`
- **L306** — `#1a1a1a` · `bg-[#1a1a1a]`
  <br/>`<div className="w-8 h-8 rounded-lg shrink-0 bg-[#1a1a1a] border border-border" />`

### `app/hand-chart/hand-chart-client.tsx` (17)

- **L33** — `#dc2626`
  <br/>`{ id: 1, label: "UTG", full: "언더더건 (UTG)", color: "#dc2626", pct: "약 12%" },`
- **L34** — `#ea580c`
  <br/>`{ id: 2, label: "HJ", full: "하이잭 (HJ)", color: "#ea580c", pct: "약 20%" },`
- **L35** — `#ca8a04`
  <br/>`{ id: 3, label: "CO", full: "컷오프 (CO)", color: "#ca8a04", pct: "약 29%" },`
- **L36** — `#16a34a`
  <br/>`{ id: 4, label: "BTN", full: "버튼 (BTN)", color: "#16a34a", pct: "약 42%" },`
- **L37** — `#2563eb`
  <br/>`{ id: 5, label: "SB", full: "스몰블라인드 (SB)", color: "#2563eb", pct: "약 56%" },`
- **L42** — `#dc2626`
  <br/>`"#dc2626",`
- **L43** — `#ea580c`
  <br/>`"#ea580c",`
- **L44** — `#ca8a04`
  <br/>`"#ca8a04",`
- **L45** — `#16a34a`
  <br/>`"#16a34a",`
- **L46** — `#2563eb`
  <br/>`"#2563eb",`
- **L107** — `rgba(212,175,55...)`
  <br/>`style={{ background: "radial-gradient(circle, rgba(212,175,55,0.18), transparent 70%)" }}`
- **L219** — `#1a1a1a`
  <br/>`const bgColor = TIER_COLORS[tier] || "#1a1a1a";`
- **L235** — `#d4af37`
  <br/>`outline: isHovered ? "2px solid #d4af37" : undefined,`
- **L263** — `#0d0d0d`
  <br/>`backgroundColor: "#0d0d0d",`
- **L264** — `#f0f0f0`
  <br/>`color: "#f0f0f0",`
- **L314** — `#1a1a1a` · `bg-[#1a1a1a]`
  <br/>`<div className="w-8 h-8 rounded-lg shrink-0 bg-[#1a1a1a] border border-border" />`

### `components/poker-odds-calculator.tsx` (16)

- **L19** — `text-green-400`
  <br/>`if (pct >= 35) return "text-green-400";`
- **L20** — `text-yellow-400`
  <br/>`if (pct >= 20) return "text-yellow-400";`
- **L21** — `text-red-400`
  <br/>`return "text-red-400";`
- **L25** — `bg-green-400`
  <br/>`if (pct >= 35) return "bg-green-400";`
- **L26** — `bg-yellow-400`
  <br/>`if (pct >= 20) return "bg-yellow-400";`
- **L27** — `bg-red-400`
  <br/>`return "bg-red-400";`
- **L75** — `#0a1a0d` · `#0d1f12` · `from-[#0a1a0d]` · `to-[#0d1f12]`
  <br/>`className="my-10 rounded-2xl overflow-hidden border border-primary/30 bg-gradient-to-br from-[#0a1a0`
- **L286** — `border-green-500` · `bg-green-500`
  <br/>`? "border-green-500/50 bg-green-500/10"`
- **L287** — `border-red-500` · `bg-red-500`
  <br/>`: "border-red-500/50 bg-red-500/10"`
- **L291** — `text-green-400` · `text-red-400`
  <br/>`<div className={'text-2xl font-black mb-2 ${potDecision ? "text-green-400" : "text-red-400"}'}>`

### `components/community-cta.tsx` (14)

- **L81** — `#0b1120` · `#111827`
  <br/>`background: "linear-gradient(135deg, #0b1120 0%, #111827 100%)",`
- **L82** — `rgba(212,175,55...)`
  <br/>`border: "1px solid rgba(212,175,55,0.25)",`
- **L87** — `#d4af37` · `#f0d060`
  <br/>`style={{ background: "linear-gradient(90deg,#d4af37,#f0d060,transparent)" }}`
- **L94** — `#d4af37` · `#f0d060`
  <br/>`style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)" }}`
- **L96** — `#0b1120`
  <br/>`<span className="font-black text-[10px]" style={{ color: "#0b1120" }}>HM</span>`
- **L98** — `rgba(212,175,55...)`
  <br/>`<span className="text-xs font-bold" style={{ color: "rgba(212,175,55,0.7)" }}>`
- **L102** — `#f0e8c8`
  <br/>`<p className="text-sm font-bold leading-snug" style={{ color: "#f0e8c8" }}>`
- **L105** — `rgba(255,255,255...)`
  <br/>`<p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>`
- **L113** — `#d4af37` · `#f0d060`
  <br/>`background: "linear-gradient(135deg,#d4af37,#f0d060)",`
- **L114** — `#0b1120`
  <br/>`color: "#0b1120",`

### `app/community/chat-tab.tsx` (14)

- **L257** — `#22c55e`
  <br/>`style={{ background: "#22c55e" }}`
- **L261** — `#22c55e`
  <br/>`style={{ background: "#22c55e" }}`
- **L266** — `#22c55e`
  <br/>`style={{ color: "#22c55e" }}`
- **L286** — `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`style={{ background: "rgba(212,175,55,0.1)", color: GOLD, border: "1px solid rgba(212,175,55,0.2)" }`
- **L299** — `rgba(212,175,55...)`
  <br/>`scrollbarColor: "rgba(212,175,55,0.15) transparent",`
- **L327** — `#d4af37` · `#f0d060`
  <br/>`background: "linear-gradient(135deg,#d4af37,#f0d060)",`
- **L328** — `#0b1120`
  <br/>`color: "#0b1120",`
- **L379** — `#d4af37` · `#f0d060`
  <br/>`background: "linear-gradient(135deg,#d4af37,#f0d060)",`
- **L389** — `#f87171`
  <br/>`style={{ color: "#f87171" }}`
- **L407** — `#d4af37` · `#f0d060`
  <br/>`background: "linear-gradient(135deg,#d4af37,#f0d060)",`

### `app/pub/pub-index-client.tsx` (12)

- **L89** — `#03C75A` · `#02b050` · `shadow-green-900` · `bg-[#03C75A]` · `bg-[#02b050]`
  <br/>`className="inline-flex items-center justify-center gap-2 bg-[#03C75A] hover:bg-[#02b050] text-white `
- **L98** — `#FEE500` · `#f0d800` · `#191919` · `shadow-yellow-900` · `bg-[#FEE500]` · `bg-[#f0d800]` · `text-[#191919]`
  <br/>`className="inline-flex items-center justify-center gap-2 bg-[#FEE500] hover:bg-[#f0d800] text-[#1919`

### `components/site-popup.tsx` (10)

- **L57** — `rgba(0,0,0...)`
  <br/>`style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.6)", display: "flex", a`
- **L61** — `#1c1810` · `#c9a227` · `rgba(0,0,0...)`
  <br/>`style={{ width: "100%", maxWidth: 400, background: "#1c1810", border: "1px solid #c9a227", borderRad`
- **L67** — `#f4ead2`
  <br/>`<div style={{ padding: 20, fontFamily: "var(--font-inter), sans-serif", color: "#f4ead2" }}>`
- **L69** — `#a8977a`
  <br/>`{popup.body && <p style={{ margin: "10px 0 0", fontSize: 14, color: "#a8977a", lineHeight: 1.6, whit`
- **L73** — `#c9a227` · `#1a1508`
  <br/>`style={{ flex: 1, textAlign: "center", padding: "10px", borderRadius: 9, background: "#c9a227", colo`
- **L78** — `#2e2818` · `#a8977a`
  <br/>`style={{ flex: popup.link_url ? "0 0 auto" : 1, padding: "10px 16px", borderRadius: 9, background: "`

### `app/en/ranking/ranking-data.ts` (10)

- **L19** — `from-blue-600` · `to-blue-800`
  <br/>`logoColor: "from-blue-600 to-blue-800",`
- **L30** — `from-red-600` · `to-red-800`
  <br/>`logoColor: "from-red-600 to-red-800",`
- **L41** — `from-orange-500` · `to-orange-700`
  <br/>`logoColor: "from-orange-500 to-orange-700",`
- **L52** — `from-purple-600` · `to-purple-800`
  <br/>`logoColor: "from-purple-600 to-purple-800",`
- **L63** — `from-emerald-600` · `to-emerald-800`
  <br/>`logoColor: "from-emerald-600 to-emerald-800",`

### `app/post/[id]/post-detail-client.tsx` (10)

- **L74** — `rgba(11,17,32...)`
  <br/>`<header className="sticky top-0 z-40 flex items-center gap-3 px-4 py-3" style={{ background: "rgba(1`
- **L119** — `rgba(248,113,113...)`
  <br/>`<button onClick={() => onDeleteComment(c.id)} className="text-[10px] mt-1 ml-1" style={{ color: "rgb`
- **L133** — `rgba(11,17,32...)` · `rgba(212,175,55...)`
  <br/>`<div className="fixed bottom-0 left-0 right-0 flex items-center gap-2 px-3 py-3" style={{ background`
- **L142** — `#d4af37` · `#f0d060`
  <br/>`<button onClick={onSubmitComment} disabled={isPending || !draft.trim()} className="px-4 py-2.5 round`
- **L147** — `rgba(11,17,32...)` · `rgba(212,175,55...)`
  <br/>`<div className="fixed bottom-0 left-0 right-0 px-4 py-3 flex items-center gap-3" style={{ background`
- **L149** — `#d4af37` · `#f0d060`
  <br/>`<Link href="/login" className="px-4 py-2.5 rounded-xl text-xs font-bold flex-shrink-0" style={{ back`

### `app/ranking/ranking-data.ts` (10)

- **L33** — `from-blue-600` · `to-blue-800`
  <br/>`logoColor: "from-blue-600 to-blue-800",`
- **L44** — `from-red-600` · `to-red-800`
  <br/>`logoColor: "from-red-600 to-red-800",`
- **L55** — `from-orange-500` · `to-orange-700`
  <br/>`logoColor: "from-orange-500 to-orange-700",`
- **L66** — `from-purple-600` · `to-purple-800`
  <br/>`logoColor: "from-purple-600 to-purple-800",`
- **L77** — `from-emerald-600` · `to-emerald-800`
  <br/>`logoColor: "from-emerald-600 to-emerald-800",`

### `app/rules/omaha/rules-omaha-client.tsx` (10)

- **L137** — `#1a1a0d` · `#3a3a10` · `#1a1a0d` · `border-yellow-500` · `from-[#1a1a0d]` · `via-[#3a3a10]` · `to-[#1a1a0d]`
  <br/>`className="mb-10 bg-gradient-to-br from-[#1a1a0d] via-[#3a3a10] to-[#1a1a0d] border border-yellow-50`
- **L138** — `text-yellow-400`
  <br/>`<div className="text-xs font-bold tracking-widest text-yellow-400/60 mb-2 uppercase">핵심 차이점</div>`
- **L146** — `text-yellow-400`
  <br/>`<div className="text-sm font-bold text-yellow-400 mb-3">{col.label}</div>`
- **L150** — `text-yellow-400`
  <br/>`<span className="text-yellow-400/60 mt-0.5">•</span>{item}`

### `app/strategy/strategy-client.tsx` (10)

- **L192** — `text-red-400`
  <br/>`<p className="text-muted-foreground mt-2">플러시 드로우 승률 ≈ 20% (턴 기준) → 수학적으로 <span className="text-red-`
- **L193** — `text-green-400`
  <br/>`<p className="text-muted-foreground">플러시 드로우 승률 ≈ 35% (플랍→쇼다운) → 수학적으로 <span className="text-green-4`
- **L208** — `border-blue-500` · `bg-blue-500`
  <br/>`{ size: "팟의 25~33%", use: "블로킹 벳, 정보 수집", color: "border-blue-500/30 bg-blue-500/5" },`
- **L209** — `border-green-500` · `bg-green-500`
  <br/>`{ size: "팟의 50%", use: "일반 밸류 벳, 드로우 차단", color: "border-green-500/30 bg-green-500/5" },`
- **L210** — `border-yellow-500` · `bg-yellow-500`
  <br/>`{ size: "팟의 75%", use: "강한 밸류 벳, 세미 블러프", color: "border-yellow-500/30 bg-yellow-500/5" },`
- **L211** — `border-red-500` · `bg-red-500`
  <br/>`{ size: "팟의 100%+", use: "너트 핸드, 풀 블러프", color: "border-red-500/30 bg-red-500/5" },`

### `components/ranking-table.tsx` (9)

- **L24** — `#141414` · `text-[#141414]`
  <br/>`<h2 className="m-0 text-sm sm:text-base font-extrabold text-[#141414] tracking-tight">{name}</h2>`
- **L35** — `to-yellow-500`
  <br/>`? "bg-gradient-to-br from-primary to-yellow-500 text-black shadow-sm"`
- **L52** — `#141414` · `text-[#141414]`
  <br/>`<b className="text-[15px] font-bold text-[#141414] sm:text-base">{it.name}</b>`
- **L53** — `#5b5b5b` · `text-[#5b5b5b]`
  <br/>`{eng && <span className="text-xs text-[#5b5b5b]">{eng}</span>}`
- **L56** — `#333333` · `text-[#333333]`
  <br/>`<span className="mt-0.5 block text-xs text-[#333333] sm:text-[13px]">{compo}</span>`

### `app/rules/seven-card-stud/rules-seven-card-stud-client.tsx` (9)

- **L136** — `#1a0d0d` · `#3a1010` · `#1a0d0d` · `border-red-500` · `from-[#1a0d0d]` · `via-[#3a1010]` · `to-[#1a0d0d]`
  <br/>`className="mb-10 bg-gradient-to-br from-[#1a0d0d] via-[#3a1010] to-[#1a0d0d] border border-red-500/3`
- **L137** — `text-red-400`
  <br/>`<div className="text-xs font-bold tracking-widest text-red-400/60 mb-2 uppercase">7 CARD STUD</div>`
- **L146** — `text-red-400`
  <br/>`<div className="text-sm font-bold text-red-400 mb-2">{item.label}</div>`

### `components/blog-top-bar.tsx` (8)

- **L5** — `#1a3a2a`
  <br/>`const BG = "#1a3a2a";       // 커뮤니티 하단 네비와 동일 색상`
- **L6** — `#d4af37`
  <br/>`const GOLD = "#d4af37";`
- **L24** — `rgba(212,175,55...)`
  <br/>`borderBottom: "1px solid rgba(212,175,55,0.25)",`
- **L34** — `rgba(212,175,55...)`
  <br/>`background: "rgba(212,175,55,0.12)",`
- **L35** — `rgba(212,175,55...)`
  <br/>`border: "1px solid rgba(212,175,55,0.30)",`
- **L58** — `#d4af37` · `#f0d060`
  <br/>`background: "linear-gradient(135deg,#d4af37,#f0d060)",`
- **L59** — `#0d1c14`
  <br/>`color: "#0d1c14",`

### `components/reading-progress-bar.tsx` (8)

- **L79** — `#ff0080` · `#ff6a00` · `#ffe600` · `#00e676` · `#00b8ff` · `#c400ff`
  <br/>`background: "linear-gradient(90deg,#ff0080 0%,#ff6a00 20%,#ffe600 40%,#00e676 60%,#00b8ff 80%,#c400f`
- **L80** — `rgba(255,255,255...)` · `rgba(0,0,0...)`
  <br/>`boxShadow: "0 0 8px rgba(255,255,255,0.35), 0 1px 2px rgba(0,0,0,0.3)",`

### `app/en/glossary/glossary-client.tsx` (7)

- **L13** — `#60a5fa`
  <br/>`{ key: "Action", color: "#60a5fa" },`
- **L14** — `#d4af37`
  <br/>`{ key: "Hand", color: "#d4af37" },`
- **L15** — `#22c55e`
  <br/>`{ key: "Position", color: "#22c55e" },`
- **L16** — `#a78bfa`
  <br/>`{ key: "Math", color: "#a78bfa" },`
- **L17** — `#22d3ee`
  <br/>`{ key: "Board", color: "#22d3ee" },`
- **L18** — `#fb923c`
  <br/>`{ key: "Slang", color: "#fb923c" },`
- **L113** — `#0a0a0a`
  <br/>`? { backgroundColor: c.color, borderColor: c.color, color: "#0a0a0a" }`

### `components/feed-nav-arrows.tsx` (6)

- **L138** — `#d4af37` · `#f0d060`
  <br/>`? "linear-gradient(135deg,#d4af37,#f0d060)" // 브랜드 골드 (맨위로 버튼과 통일)`
- **L139** — `rgba(13,28,20...)`
  <br/>`: "rgba(13,28,20,0.85)", // 다크 포레스트 그린 반투명`
- **L140** — `#0d1c14` · `#f4f0e7`
  <br/>`color: lit ? "#0d1c14" : "#f4f0e7",`
- **L141** — `rgba(212,175,55...)`
  <br/>`border: "1px solid rgba(212,175,55,0.4)",`

### `components/card-thumb.tsx` (5)

- **L64** — `#c0392b` · `#0f172a`
  <br/>`const color = isRed(suit) ? "#c0392b" : "#0f172a";`
- **L72** — `rgba(0,0,0...)`
  <br/>`<g transform={'rotate(${tilt})'} style={{ filter: shadow ? "drop-shadow(0 3px 8px rgba(0,0,0,0.45))"`
- **L74** — `#fdf8ee` · `#d4af37`
  <br/>`fill="#fdf8ee" stroke="#d4af37" strokeWidth={1.2} />`

### `components/footer.tsx` (5)

- **L100** — `#f5d36a` · `#d4af37` · `#b8862a`
  <br/>`background: "linear-gradient(135deg, #f5d36a 0%, #d4af37 50%, #b8862a 100%)",`
- **L103** — `#1a0e02` · `text-[#1a0e02]`
  <br/>`<Spade className="h-4 w-4 text-[#1a0e02] fill-current" aria-hidden="true" />`

### `components/intl-footer.tsx` (5)

- **L21** — `#f5d36a` · `#d4af37` · `#b8862a`
  <br/>`style={{ background: "linear-gradient(135deg, #f5d36a 0%, #d4af37 50%, #b8862a 100%)" }}`
- **L23** — `#1a0e02` · `text-[#1a0e02]`
  <br/>`<Spade className="h-4 w-4 text-[#1a0e02] fill-current" aria-hidden="true" />`

### `components/calc-cta-button.tsx` (4)

- **L21** — `#2563eb` · `#2563eb` · `border-[#2563eb]` · `border-[#2563eb]`
  <br/>`className="calc-pulse group mb-4 flex items-center gap-2.5 rounded-xl border-2 border-[#2563eb]/50 b`

### `components/tournament-board.tsx` (4)

- **L122** — `border-yellow-500`
  <br/>`t.highlight ? "border-yellow-500/40" : "border-border"`
- **L144** — `bg-green-500` · `text-green-400` · `border-green-500`
  <br/>`? "bg-green-500/15 text-green-400 border-green-500/30"`

### `app/community/community-client.tsx` (4)

- **L1052** — `rgba(32,49,42...)`
  <br/>`style={{ background: "rgba(32,49,42,0.5)", backdropFilter: "blur(4px)" }}`
- **L1218** — `rgba(32,49,42...)`
  <br/>`style={{ bottom: 80, right: 20, width: 48, height: 48, background: INK, boxShadow: "0 4px 16px rgba(`
- **L1490** — `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`style={{ background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.18)" }}`

### `app/en/ranking/ranking-client.tsx` (4)

- **L64** — `from-yellow-300`
  <br/>`<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-primary">How to C`
- **L128** — `text-green-400`
  <br/>`<CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" /> {f}`
- **L189** — `text-red-400`
  <br/>`<AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />`
- **L195** — `text-red-400`
  <br/>`<span className="text-red-400 font-bold flex-shrink-0 mt-0.5">✕</span>`

### `app/ranking/ranking-client.tsx` (4)

- **L59** — `from-yellow-300`
  <br/>`<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-primary">제대로 고르는 `
- **L123** — `text-green-400`
  <br/>`<CheckCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" /> {f}`
- **L184** — `text-red-400`
  <br/>`<AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />`
- **L190** — `text-red-400`
  <br/>`<span className="text-red-400 font-bold flex-shrink-0 mt-0.5">✕</span>`

### `app/solver/solver-client.tsx` (4)

- **L370** — `text-emerald-600`
  <br/>`<span className="font-bold text-emerald-600">있음</span>`
- **L400** — `text-emerald-500`
  <br/>`<span className="font-semibold text-emerald-500">0.01bb 이하</span> = 최적 선택 ·{" "}`
- **L401** — `text-blue-500`
  <br/>`<span className="font-semibold text-blue-500">0.05bb 이하</span> = 허용 가능 ·{" "}`
- **L402** — `text-orange-500`
  <br/>`<span className="font-semibold text-orange-500">그 이상</span> = 다시 볼 스팟`

### `components/site-chrome.tsx` (3)

- **L96** — `#d4af37` · `#f0d060`
  <br/>`background: "linear-gradient(135deg,#d4af37,#f0d060)",`
- **L97** — `#0b1120`
  <br/>`color: "#0b1120",`

### `components/solver-promo.tsx` (3)

- **L22** — `rgba(212,175,55...)`
  <br/>`/** 골드 액센트 — 이벤트 카드가 쓰는 rgba(212,175,55,…)와 같은 색. */`
- **L23** — `#d4af37`
  <br/>`const GOLD_ACCENT = "#d4af37";`
- **L43** — `rgba(244,240,231...)`
  <br/>`style={{ color: "rgba(244,240,231,0.72)", fontFamily: FONT_SANS }}`

### `app/hands/hands-client.tsx` (3)

- **L12** — `text-red-500`
  <br/>`if (card.includes("♥") || card.includes("♦")) return "text-red-500";`
- **L13** — `text-gray-900`
  <br/>`return "text-gray-900";`
- **L137** — `border-gray-300`
  <br/>`className="flex h-14 w-10 items-center justify-center rounded border border-gray-300 bg-white shadow`

### `components/bottom-tab-bar.tsx` (2)

- **L109** — `rgba(255,255,255...)`
  <br/>`borderTop: "1px solid rgba(255,255,255,0.06)",`
- **L115** — `rgba(244,240,231...)`
  <br/>`const color = active === t.key ? BG : "rgba(244,240,231,0.4)";`

### `components/hub-sidebar.tsx` (2)

- **L97** — `rgba(212,175,55...)` · `rgba(212,175,55...)`
  <br/>`style={{ background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.18)" }}`

### `components/side-rail.tsx` (2)

- **L263** — `#7a2e2e` · `#f4f0e7`
  <br/>`style={{ background: "#7a2e2e", color: "#f4f0e7" }}`

### `app/layout.tsx` (1)

- **L139** — `#0a1f10`
  <br/>`themeColor: "#0a1f10",`
