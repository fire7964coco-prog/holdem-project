# 번체(繁體) 트랙 구축 플랜 — /zh-hant/ (대만·홍콩 타깃)

> **이 문서는 세션 간 인수인계용 리빙 도큐먼트다.** 새 세션은 이 파일 → `session-handoff.md` → `WORKLOG.md` 순으로 읽고 이어간다.
> 근거: 메모리 [[chinese-seo-traditional-taiwan-first]] + 2026-07-22 6개 리서치 에이전트 종합.
> 최종수정: 2026-07-22

---

## 0. 왜 하는가 (한 줄)
구글에서 "중국어"는 사실상 **번체·대만**이다(본토=구글 차단). 현재 `/zh/`는 100% 간체라 구글 미도달 시장을 최적화 중 → **번체 신규 트랙을 병행 구축**해 대만·홍콩(구글 도달 번체 ~2,900만)을 잡는다.

## 1. 확정된 결정
- **로케일 코드**: `zh-hant` / 경로 `/zh-hant/` / hreflang `zh-Hant` / og `zh_TW` / html lang `zh-Hant`.
- **기존 간체 `/zh/`**: 그대로 유지(이미 `zh-Hans` 라벨). 건드리지 않음.
- **방식**: 파일럿 없이 **순서대로 쭉 진행**(아래 §5 순서). 필라 먼저, 클러스터 뒤.
- **소스**: **EN 마스터**(경화 완료·§13 검증본)를 구조 소스로 → 대만 현지 재저작(직역 아님).

## 2. 기술 셋업 (1회성 — 콘텐츠 전에 먼저)
- [ ] `lib/intl.ts`: `SECONDARY_LOCALES`에 `"zh-hant"` 추가 + 라벨맵 7종 항목(OG_LOCALE=`zh_TW`, HTML_LANG=`zh-Hant`, POST_LABELS, CHROME, NAV_HOME_FEED, NAV_CTA) — 전부 번체로.
- [ ] `lib/posts-zh-hant/index.ts`: `export const ZH_HANT_POSTS: Post[] = [...]`.
- [ ] `lib/intl-posts.ts`: import + `POSTS_BY_LOCALE`에 `"zh-hant": ZH_HANT_POSTS` 연결.
- [ ] `app/zh-hant/**`: `app/zh/` 라우트 폴더 구조 미러(page/blog/[slug] 등).
- [ ] `npm run build` → sitemap·hreflang 자동 반영 확인. (hreflang 상호링크는 `secondaryLocalesForSlug()`가 **같은 slug 자동 페어링** → 간체↔번체 자동 연결. 별도 배선 불필요.)
- 주의: 로케일 키에 하이픈(`zh-hant`) 사용 — 경로/객체키 모두 문제없음. `isSecondaryLocale`/`localeFromPath`는 `zh`와 정확히 구분됨.

## 3. 콘텐츠 전략 (번체 = 번역이 아니라 대만 현지 재저작)
- **슬러그**: EN/KO와 **동일 slug 유지**(hreflang 보존). 예: `holdem-hand-rankings`.
- **용어(필수)**: `德州撲克`/`德撲` · `牌型大小`(족보, "排名" 아님) · `詐唬`(블러프) · `底池賠率`(팟오즈) · `全下`(올인) · `盲注(大盲/小盲)` · `錦標賽`(토너먼트) · `公牌/底牌`. 포지션은 라틴약어+한자(UTG=槍口位, CO=關煞位, BTN=按鈕位). `GTO`는 라틴 유지.
  - ⚠️ **`梭哈`는 텍사스홀덤이 아님**(다른 게임=쇼핸드/스터드, "梭了"=올인 속어). 혼동 금지. "梭哈 vs 德州撲克 差別"은 오히려 winnable 신규 H2 후보.
- **제목·구조 규칙 (⚠️대만 SERP 실측 — 영어식 질문형 아님!)**: 대만 포커 검색은 **질문형이 아니라 키워드·명사형**(rakko 질문DB `德州撲克`=0건). **영어 마스터의 질문형 H2를 그대로 이식 금지.**
  - **H1(제목) 공식 (구글 번체 실측)**: `【태그】`(【新手教學】·【圖解】·【德州撲克位置】) + **시간·원스톱 약속**(`5分鐘搞懂`·`3分鐘了解`·`一篇`·`一次看/一次懂`·`這一篇全都包`) + **키워드 스택**(구분자 `、｜／`: 玩法/位置/規則/大小) + **감정 훅**(`就是一切！`·`看這篇就夠了`) + 브랜드 접미. 짧은 `怎麼玩？/怎麼看？` how-단편은 훅으로 OK, **풀 자연어 질문·`是什麼`는 지양**. 키워드 2~3회 반복 관대. ~28자. 예) `【新手教學】5分鐘搞懂德州撲克規則玩法！`, `德州撲克位置怎麼看？3分鐘了解各位置優劣勢`
  - **H2**: 키워드 박은 **명사형 토픽 헤딩**(`德州撲克玩法簡介`·`基本規則與遊戲流程`·`手牌大小排名一覽`·`實用技巧`). 타깃 문자열 **끊김 없이**.
  - **질문은 FAQ 블록에 격리**: `常見問題 FAQ`/`問與答` 섹션 안에서만 질문(H3). 본문 H2 질문 도배 X.
  - **족보=번호 리스트**(1.皇家同花順…10.高牌), **베팅라운드=翻牌前(Pre-Flop)/翻牌/轉牌/河牌** 분해, 마무리 `總結/結語`.
  - **용어 中(英) 병기 표준**: 皇家同花順(Royal Flush)·翻牌前(Pre-Flop)·莊家按鈕位(Dealer Button).
  - **롱폼 원스톱**이 이김(상위 평균 ~6,500자). desc ~78자(픽셀 기준).
  - ★편당 `rakko headline`로 그 키워드 상위글 H2 구조를 실측해 골격을 맞출 것(추측 금지).
- **§13 불변**: 핸드 예시 베스트5 검산은 언어 불변. EN 마스터에서 검증된 계산 그대로, **용어 오역이 족보 의미를 깨지 않는지만** 확인(同花順/葫蘆/四條/鐵支 등).
- **E-E-A-T**: 경험담은 대만 맥락으로(撲克室, TMT/APT Taipei 등). 없는 사실 창작 금지.
- **GEO**: 직답 우선(각 섹션 첫 문장에 결론) + 표(족보·확률·팟오즈) + "2026" 신선도 마커. 질문형 Q-A-E는 **FAQ 블록 안에서만**(본문 H2를 질문으로 만들지 말 것).
- **내부링크·이미지**: 이미지는 18언어 공용(영어 오버레이 최소). 인라인 미니썸네일 링크 1~2 + FAQ앞 `:::readnext` 카드(posting.mdc 클릭율 규칙). 내부링크 밀도·대상은 EN과 1:1(count로 검증).

## 4. 편당 워크플로우 (모델분담 [[translation-model-roles-workflow]])
1. **착수 전 현지 리서치 (필수·건너뛰기 금지)** —
   a. **현지 구글글 3편 정독**(WebFetch): 그 키워드 상위 대만 포커글 3편을 실제로 읽고 **현지 용어·말투·키워드 전략·구조**를 분석. (사용자 확정 2026-07-22)
   b. **rakko** `headline`(상위 H1/H2 골격) + `suggest-keywords`(번체 롱테일) + `co-occurrence`(포함어). `seoDifficulty`+`suggestClass`+volume으로 winnable 선별. 질문검색은 中 DB 희소하니 보조로만.
   c. **WebSearch로 SERP·경쟁 실측**(taiwanrounders/Natural8/娛樂城/Dcard/PTT/巴哈姆特). 얇은 娛樂城 상위=winnable 신호.
2. **소스 로드** — 해당 slug의 EN 마스터 글을 구조 소스로.
3. **재저작(Opus)** — 대만 네이티브가 쓴 글처럼. **명사형 토픽 H2 + 中(英) 병기 용어 + 연속 문자열 + 攻略/教學형 제목**(질문은 FAQ 블록만). 구조·§13 계산 불변. 경험담 대만화.
4. **§13 검산** — 핸드 예시 족보/승자 재확인(용어로 깨지지 않았는지).
5. **적대적 네이티브 QA** — "대만 현지 포커 전문가" 페르소나 Agent로 용어 실검색 매치·자연스러움·§13·신규H2 사실성 적대 검수. [[ja-adversarial-native-review]] 패턴.
6. **빌드·배포** — `npm run build`(포스트수·링크검사·hreflang 확인) → 커밋(한글메시지 `commit-msg.txt`) → `git push`. 글마다 자동 배포, 결과만 보고 [[en-hardening-autodeploy-cadence]].
7. **기록** — 본 문서 §5 트래커 체크 + WORKLOG 최상단.
- 케이던스: **필라 1개 끝날 때마다 보고** 후 다음 [[translation-local-research-first]].

## 5. 진행 순서 & 트래커 (필라 우선 → 클러스터)
> 소스=EN 마스터 slug. 상태: ⬜ 대기 / 🔧 작업중 / ✅ 배포.

### 기술 셋업
- [x] ✅ 로케일 인프라(§2) — `zh-hant` 등록(intl.ts 6맵+intl-posts) · 라우트 `app/zh-hant/**` · CJK 줄바꿈 CSS · 빌드검증(25언어). ⚠️미커밋(첫 글과 함께 배포). 용어 브리프 `docs/translation-terms-zh-hant.md` 작성.

### 필라 (대만 검색수요 우선순위)
1. [x] ✅ `holdem-hand-rankings` — 牌型大小. 현지 3편 정독+rakko / 대만 네이티브 적대검수(🔴1 §13 練習3 "A로 四條K" 오류 수정 + 連套 용어보강) / 배포. ⚠️형제글 링크는 클러스터 완성 후 복원.
2. [x] ✅ `texas-holdem-rules-for-beginners` — 德州撲克規則. EN 재저작+대만 실측구조(명사형 H2·中英병기·질문 FAQ격리) / **신규 winnable 섹션 `德州撲克在台灣合法嗎？撲克室與錦標賽`**(monsterstack 상위 앵글) + `梭哈≠德州撲克` FAQ / 링크는 hand-rankings만(형제글 클러스터 후 복원) / 적대적 대만 네이티브 검수: §13 전항 통과, 🟠2 수정(합법성 과대표현 완화·확률표 오독방지) + 🟢 정밀화(梭哈=沙蟹/Stud·讀牌面). 배포.
3. [x] ✅ `holdem-probability` — 機率. EN 재저작+대만 실측(機率表·勝率·四二法則·底池賠率·暗三條/Set·補牌/Outs·聽牌 用어, 명사형 H2·질문 FAQ격리·中英병기). 신규 FAQ `為什麼勝率高還是輸`(변이수 개념). 링크=hand-rankings+rules(둘 다 존재). 적대적 대만 네이티브 검수: **§13 전 수치 검증 통과**(주표10·起手5·翻牌7·聽牌7×2·四二 2례·팟오즈·냉문4·皇家湊法·新FAQ). 🟢 檯面 반영. 팟오즈 이미지 alt는 공용에셋($25/$100) 정확성 유지. 배포.
4. [x] ✅ `holdem-starting-hands-chart` — 起手牌. EN 재저작+대만 실측(起手牌·口袋對·同花/不同花·投機牌·跛入limp·GTO翻前圖·劫機位·堅果 용어, 명사형 H2·질문 FAQ격리). 링크=hand-rankings+probability+rules(3편 존재)+/hand-chart·/quiz 도구. :::rangechart:::·:::quiz::: 디렉티브 유지. 적대적 대만 네이티브 검수: §13 전 수치 통과(169=13+78+78·AA85%·AK五五開·위치범위·set11.8%·同花6.5%·7-2). 🟠 HJ→MP 정합·랭킹 면책문구 추가. "1比8.5"는 확률형(=11.8%) 유지(검수관 배당형 착오). 배포.
5. [x] ✅ `holdem-position-play` — 位置. EN 재저작+대만 실측(有利位置IP/不利位置OOP·勝率實現·偷盲·反偷·過牌加注·領打·擠壓·阻擋牌·抓詐牌·關煞位·低/高劫持位 용어, 짧은훅/명사형 H2·질문 FAQ격리). 링크=starting-hands-chart+probability+hand-rankings+rules(4편 존재). 적대적 대만 네이티브 검수: **§13 전 수치·牌例 통과**(K♥Q♥ 2핸드·8♥7♥ 9補·A♦9♦ 건조보드·실현율·개牌범위 遞增·c-bet빈도·SB/BB 구분·偷盲2.2-2.5x·SB 4x). 🟠 數據庫→資料庫·對映→對應(대만 현지어). 배포.
6. [x] ✅ `holdem-pot-odds` — 底池賠率. EN 재저작+대만 실측(rakko headline + **WebSearch 실제 문구 겹침 반영**: 比率 3 比 1·翻牌圈/轉牌圈·反補牌/髒補牌·抓詐·四二法則·隱含賠率/反向隱含賠率·有效籌碼 용어). 명사형/짧은훅 H2·질문 FAQ격리. 링크=probability+starting-hands-chart+position-play+hand-rankings(4편). 적대적 대만 네이티브 검수: **§13 전 수치 통과**(비율표·下注尺寸표·聽牌표·四二·실전핸드 A♥K♥). 🟠 실전핸드 $100/$150 프레이밍 명시화. 배포.
7. [ ] ⬜ `holdem-glossary` — 術語(TW 高수요)
8. [ ] ⬜ `holdem-strategy` — 策略 로드맵
9. [ ] ⬜ `holdem-tournament` — 錦標賽

### 클러스터 (필라 후, 이어서)
- [ ] ⬜ `holdem-betting-actions` / `holdem-blind-meaning` / `holdem-all-in-rules` / `holdem-showdown-rules` / `holdem-tiebreak-rules` / `holdem-kicker` / `holdem-split-pot-rules` (룰 클러스터)
- [ ] ⬜ `holdem-outs` / `holdem-drawing-odds` / `holdem-equity` / `holdem-implied-odds` / `holdem-reading-the-board` / `holdem-flush-vs-straight` (확률 클러스터)
- [ ] ⬜ `holdem-3bet` / `holdem-continuation-bet` / `holdem-limping` / `holdem-when-to-fold` / `holdem-game-order` (전략 클러스터)
- [ ] ⬜ `holdem-tournament-vs-cash-game` / `holdem-bubble` / `holdem-icm` / `holdem-short-stack` (토너먼트 클러스터)
- [ ] ⬜ `holdem-bad-beat` / `holdem-cooler` / `holdem-fish` / `holdem-rake` / `holdem-straddle` / `holdem-card-counting` (용어/문화 클러스터)
- ※ 신규 winnable 후보: `梭哈 vs 德州撲克 差別`, `德州撲克 台灣 合法嗎`(익지경기 판결) — rakko/SERP 확인 후 편입.
- ※ pub(`holdem-pub-guide`)은 KO 특화 → 번체는 撲克室 앵글로 재구성할지 별도 판단.

## 6. 참조
- 리서치 원본: 2026-07-22 6에이전트(지형/도구/검색행태/포커니치/기술SEO/유통GEO) — 요지는 [[chinese-seo-traditional-taiwan-first]].
- 도구: rakko(번체/간체 언어 + 대만/홍콩/싱가포르 지역 지원. `德州撲克`=652 롱테일 검증). lowfruits는 중국어 미지원.
- 관련 메모: [[translation-is-contextual-reposting]] [[translation-h2-localization-strategy]] [[ja-term-notation-search-match]] [[low-volume-longtail-aggregation]] [[images-shared-18-languages]] [[internal-link-thumbnail-readnext]] [[max-detail-never-skip]].
