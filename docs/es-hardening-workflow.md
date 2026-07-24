# ES 42편 재경화 — 워크플로우 & 지역편차 그라디언트 (작업용 화면 참조)

> 화면에 띄워놓고 lowfruits 돌리면서 보는 파일. 상세 방법론은 `session-handoff.md` 최상단 블록 + `docs/translation-terms-es.md`(용어은행 Wave 1~5) 참조.
> **Language = 전부 Spanish 고정. Country만 아래 그라디언트대로 바꿈. (브라질=포르투갈어라 제외.)**

---

## 🌎 지역편차 그라디언트 (클러스터별 돌릴 나라)

| 순서 | 클러스터 | 성격 | **돌릴 나라** | 근거 |
|:---:|---------|------|--------------|------|
| 1 | **규칙6** | 룰 용어 대체로 공통 | 🇪🇸 ES + 🇲🇽 MX (+🇦🇷 AR 옵션) | 큰 편차 없음. 아르헨은 여유 시 |
| 2 | **족보6** | false-friend 트랩 有, 대체로 공통 | 🇪🇸 ES + 🇲🇽 MX + 🇦🇷 AR | Color/Escalera/Póker 지역 확인 |
| 3 | **확률6** | 수학·만국공통 | 🇪🇸 ES + 🇲🇽 MX | outs·equity·regla del 2 y 4 = 지역차 ≈0 |
| 4 | **전략8** | spanglish·슬랭 풍부 | 🇪🇸 ES + 🇲🇽 MX + 🇦🇷 AR + 🇨🇴 CO | limpear·foldear·farolear 동사변형 편차 큼 |
| 5 | **토너먼트9** | 라이브이벤트 + LATAM 토너문화 | 🇪🇸 ES + 🇲🇽 MX + 🇦🇷 AR | EPT(스페인) + LATAM 토너 슬랭 |
| 6 | **용어6** | 슬랭·속어 최대 편차 | 🇪🇸 ES + 🇲🇽 MX + 🇦🇷 AR + 🇨🇴 CO | fish/pez·cooler·straddle 지역색 최강 |

> **수학=2나라, 슬랭=4나라.** 득템 기대값 ÷ 클릭비용 최적점. 원하면 어느 클러스터든 나라 추가 가능(확률6도 아르헨 한 번은 부담 적음).

### 나라별 위치변형 규칙
- **Core 듀오(ES·MX)**: 트레일링 `키워드 *` + 리딩 `* 키워드` **둘 다**
- **Depth 듀오(AR·CO)**: 트레일링 위주(중복 많아 효율)
- **모든 나라: Questions/PAA 탭 export 필수** ← 지역 편차가 제일 잘 드러남, 앞* 노이즈 회피

### ★ SERP Extr 몇 번 돌릴까 (2026-07-24 실전 확정 — 블라인드 사례)
- **1차 결과가 얇으면(~30개 미만/분석 몇 개) → 2회차 SERP Extr로 확장.** 관련어·PAA가 딸려나오며 숨은 금맥 발굴(블라인드: 13개/1분석 → 2차 90개+금맥). 얇을수록 더 깊게.
- **1차가 이미 풍부하면(수백 개) → 1회로 충분.** 2회차는 중복만 늘어남(diminishing).
- 규칙 한 줄: **"얇으면 더 깊게, 풍부하면 멈춤."**
- 시드 표현이 안 맞아 얇을 수도 있음 → 네이티브 표현으로 바꿔 재시도(쇼다운 `showdown`→`quien gana` 금맥). 스페인어는 영어보다 작은 우주라 얇은 게 정상.

---

## 🔁 3단계 워크플로우 (클러스터마다 반복)

### Phase 1 — 리서치 (내가 중앙, 위임 X)
편 하나당 **3신호 조합** (건너뛰기 금지):
1. **lowfruits** export 파싱 (나라별 winnable 난이도·볼륨·weak-spot) ← 정량
2. **WebSearch PAA** (스페인+LATAM SERP 질문) ← 정성
3. **현지 구글 상위 3편 정독** (WebFetch: 888.es·PokerNews ES·EducaPoker·PokerStars LATAM·GGPoker ES 등) ← 용어·H2 구조·경쟁사 약점
→ **편별 브리프**: winnable 롱테일(+나라태그) · es 실사용 용어 · 경쟁사 공백 · **EN 대비 누락분**(§14 전수 대조)

### Phase 2 — 병렬 (작가 + 적대적 스페인 네이티브 QA 짝)
- 작가 에이전트: EN 마스터 + 기존 es본(스타일) + 브리프 → `lib/posts-es/<slug>.ts` 경화 편집
- QA 에이전트: §13 베스트5장+산수 전수 재검산 + false-friend(Color/Escalera/Póker) + GEO H2 + 누락분 이식 확인
- ⚠️ 작가엔 **"index·빌드·git 금지"** 명시

### Phase 3 — 통합 (내가, 직렬)
`npm run build`(check-intl-links 통과) → QA 수정 → 링크복원(es 슬러그 상호+필라역링크) → 빌드 → 커밋·푸시 → WORKLOG/handoff 갱신

---

## 🎯 "경화" 4대 작업 (편마다)
1. **누락분 소급 이식** — EN(07-19)엔 있는데 es본(07-05~13)에 없는 것: 도입부 링크+thumb·FAQ·GEO H2·표·§13 수정
2. **1인칭 경험담 현지 재저작** — 스페인/LATAM 맥락, 없는 사실 창작 금지, 중간 톤
3. **GEO** — 명사형 H2(질문은 FAQ 블록에만)·Q-A-E·**tldr 2~3줄** 자기완결 직답
4. **§13 불변** — 카드·확률·칩 산수 EN 그대로, 재계산 금지. 카드 `10`(T금지)·♠♥♦♣

---

## ⛓️ 철칙
- §13 = EN에서 그대로 이식·재계산 금지 (QA가 편마다 재검산)
- 직역 아님 = 스페인/LATAM 현지 재저작. 전문어 과번역 금지(ICM·bubble·bankroll·short stack 영어 유지)
- 용어 = `docs/translation-terms-es.md`(Wave 1~5) 준수
- **"Brazalete"는 WSOP 전용** — WPT/EPT/APT는 título/trofeo
- 숫자 포맷 EN 그대로(`1,326`·`2.5`·`0.0032%`), 유럽식(`2,5`) 변환 금지
- 커밋/빌드 직렬. 클러스터 완주마다 자동배포+보고

---

## 📦 클러스터 순서
규칙6 → 족보6 → 확률6 → 전략8 → 토너먼트9(라이브이벤트4=§14 EN verbatim) → 용어6

## 🗂️ export 파일명 규칙
`<클러스터>_<나라코드>.xlsx` (예: `rules_ES.xlsx`, `rules_MX.xlsx`) — Analysed only. 파일명에 나라 넣으면 파싱 때 자동 태깅.
