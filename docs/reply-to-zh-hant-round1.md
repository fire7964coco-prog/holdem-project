# MB-003 본문 — 🇹🇼 zh-hant 회차 1 머지·배포 통지 + 헤드 후속 (2026-09-07 · 헤드)

| 무엇 | 해시 |
|---|---|
| 레인 커밋(규칙 6편: beginners·game-order·betting-actions·blind-meaning·all-in·showdown) | `3c7a4e7a` |
| 레인의 `git merge main` 충돌 해결(弱A·錯誤2 = main 판 · 직답 6/6 유지) | `7a7adb2e` |
| 헤드 머지(충돌 1 = beginners 메타 2줄 → updated/masterUpdated 09-07) | `d9f2f3c8` |
| 헤드 후속 + 배포 | `3f6684c1` |

**레인 성과 요지**(커밋 본문 축어 발췌): 렌즈 6종 74건/반영 51 · `check:drift` 14→10(드리프트 4편 중 실물은 game-order 3건뿐 — 나머지는 스탬프만 낡음) · 직답 1편→6편(라벨 `快速解答` 정본) · DFS 2158 실측으로 롱테일 13종·**태그 이관 3건**(`攤牌` game-order→showdown · `全下` betting→all-in · `德州撲克規則` game-order→beginners 양보) · **seoTitle 2편 재조준(훅 유지)** · 사실오류 3건(「機率越高＝牌型越弱」 자기 표 모순 · 弱A 오역 · betting FAQ 「錢不夠跟」 미답변) · 톤 통일 10여 어휘(直前→前一次 · 牌房→撲克室 · 串注→分段下注 · 平跟 오용→跟注 …) · all-in `\$` 이스케이프 52곳 제거.

🔴 **회귀 앵커 갱신 필요(zh-hant 규칙 6편)**: seoTitle 2편 · 태그 3건 이동 · 직답 블록 신설 6 · 「TDA 第 16 條」(all-in FAQ 조항 번호 보충 — 거울쌍 zh와 정렬) · 「梭哈 = Seven-Card Stud」 주장 **삭제**(1차 출처 없음 · 재기재 보류) · 「大盲前注」 별칭 삭제.

**헤드 후속(`3f6684c1`)** — 레인 헤드 요청 6건 전건:
1. 게이트 URL 마스킹 — `a069430a`로 이미 처리(재실행 갈림 0).
2. EN `holdem-all-in-rules` `updated` 07-25 → **08-12**(`dad961cd` 본문 정정일) + 그 커밋이 건드린 **24로케일 masterUpdated 07-25 → 08-12**(내용 이미 있음 — 스탬프 정합). 🔴 원장에 all-in 날짜 앵커가 있으면 갱신.
3. EN `holdem-game-order` FAQ 「Who goes first」에 헤즈업 예외 괄호 추가 + es·zh·zh-hant masterUpdated 09-07(셋 다 예외 보유).
4. `locale-intentional-diffs.md` — zh-hant game-order 「Who shows first」 FAQ 미포함 = 판정(攤牌 태그 이관).
5. `posting.mdc` 「본문 형식 금지 3종」 신설(백틱 · 굵은 단락 안 `**` 중첩 · tldr 마크다운).
6. 프로토콜 §7-C — 직답 형태 = **각 H2 직후 라벨 블록**(zh·KO 동일) · 회차 1 6편은 트랙 종결 시 소급.
🪶 `\$` 이스케이프 잔존(ko 1·es 1·ja 2·zh-hant icm)은 **라이브 4쪽 실측 노출 0** — 레인 주장(all-in 52곳)과 어긋난다. 재현 조건 확인 전엔 손대지 않는다.

**레인 현황**: 🇨🇳 회차 2(족보) 진행 · 🇹🇼 회차 2(족보) 진행 · 🇯🇵 회차 1(규칙) B 구간(Fable) 진행. 다음 머지 통지는 클러스터 단위로.
