# 경화(hardening) 프로토콜 — 로케일 전담 레인의 회차 정본 (2026-09-06 신설)

> **누가 읽나**: `Holdem-<locale>` 경화 레인 창(🇨🇳 `Holdem-zh` · 🇹🇼 `Holdem-zh-hant`). 창의 신분증 `HARDEN.md`가 이 파일을 가리킨다.
> **왜 생겼나**: 경화 절차가 WORKLOG 회차 기록(es 07-24 · de 08-11 · pt 08-25~26 · id 08-27~28)에 흩어져 있어
> 레인이 «§14-A를 따르라» 한 줄로 시작했다(사장님 지적 *「경화 워크플로우 짜야지..그냥 시작하냐」*). 이 파일이 그 정본이다.
> **무엇이 아닌가**: 포스팅 규격·검수 3층·§13·§14-A의 **본체를 복사하지 않는다** — 그건 각 정본에 있다(§0-B 라우팅).
> 여기엔 «경화 회차가 어떤 순서로 무엇을 하고 어디서 멈추나»만 있다.
>
> 🔴 **헤드 = 본체 main 창**(`Holdem_Project`). 레인은 글을 고치고, 헤드가 머지·빌드·배포·공용 파일 승격을 한다. **머지가 곧 승인이다.**

---

## 0. 경화란 무엇인가

**경화 = 재작성이 아니다.** 옛 기준(2026-07-23·24)으로 완결된 글을 **현행 기준으로 올리는 것**이다. 구조(H2 골격·링크·이미지·slug)는 그대로 두고 아래 **8요소**만 넣는다.

| # | 요소 | 무엇을 | 정본 |
|---|---|---|---|
| ① | **EN 드리프트 소급** | EN 마스터가 그 뒤 고친 **사실·수치·FAQ·경험담**을 가져온다 | §3-③ (diff 실물) |
| ② | **직답 블록** | 각 H2 직후 40~75단어 자기완결 직답 + 라벨 통일 | `CLAUDE.md` §14-A · 라벨은 §7 로케일 부록 |
| ③ | **tldr 2~3줄** | 상단 요약을 1문장 강박에서 풀어 자기완결 직답 단락으로 | `posting.mdc` 「tldr」 |
| ④ | **롱테일 재조준** | 실측한 winnable 키워드를 H2·FAQ·태그에 흡수 · 태그 카니발 해소 | `docs/rakko-playbook.md` · §7 부록 도구 |
| ⑤ | **GEO 직답** | 인용당하는 패시지 구조(질문→직답→근거·표) | `posting.mdc` 「AI 인용 구조」 |
| ⑥ | **경험담 델타** | EN 07-19 이후 추가된 1인칭 경험담을 현지 맥락으로 이식 | `posting.mdc` 「EN 마스터 경화」 |
| ⑦ | **현지 톤** | 직역투·타지역 표기 제거(zh=신마 변이 · zh-hant=대만) | `docs/translation-terms-<locale>.md` · `docs/local-voice/<locale>*.md` |
| ⑧ | **거울쌍 사실 대조** | zh↔zh-hant 같은 슬러그의 수치·카드·날짜가 갈리면 결함 | §5-④ · `npm run check:mirror-pair` |

🔴 **불변**: `slug` · 이미지 파일 · 카드·확률·계산(§13은 언어 불변 — EN 축어) · 백틱 금지(§12-A) · desc 160자.
🔴 **EN에도 같은 결함이 있으면 로케일에서 고치지 않는다** — «EN-먼저»로 진행 파일에 등재하고 헤드가 EN을 먼저 고친다(임의 소급 금지 · id 세션 4 규율).

### 0-B. 라우팅 — 본체는 여기서 읽는다

| 무엇 | 정본 |
|---|---|
| 포스팅 규격 전부(형식·이미지·다국어·readnext) | `.cursor/rules/posting.mdc` |
| 핸드 검산(7장→베스트5) | `CLAUDE.md` §13 |
| 직답·질문형 H2·`> **바로 답**` 라벨 | `CLAUDE.md` §14-A |
| 검수 3층(게이트→미판정 손검산→렌즈 4종) · 렌즈 프롬프트 장치 4개 | `REVIEW-PROTOCOL.md` 1층·2층·3층 |
| 서치 규율(요약 금지·원문 직접) | `CLAUDE.md` §12-B |
| 키워드 도구 3종 분업·로케일 함정 | `docs/rakko-playbook.md` |
| 모델 분담(집필 Fable · 실행·렌즈 Opus) | `docs/settled-decisions.md` §5-A-3 · §5-A-4 |
| 경화 6단계·키워드 실측 전제·언어별 재사용 파일 | `docs/settled-decisions.md` §5 |
| 레인 공통 규율(공용 파일 금지·머지 절차) | `docs/audit-lanes.md` §3~§5 (검수 레인용이지만 원리가 같다) |
| «없는 게 맞다» 판정 로그 | `docs/locale-intentional-diffs.md` |

---

## 1. 레인 규율 (검수 레인과 다른 점만)

| 자리 | 규율 |
|---|---|
| **쓰는 파일** | `lib/posts-<locale>/` · `docs/harden-<locale>-진행.md` · `docs/keyword-bank/<locale>-*.md` · `docs/local-voice/<locale>*.md` · `docs/translation-terms-<locale>.md` · 회차 브리프 `docs/harden-brief/<locale>-<클러스터>.md` |
| **안 쓰는 파일** | 다른 로케일 포스트 · `public/images/`(18언어 공용 — 교체는 헤드) · `WORKLOG.md` · `session-handoff.md` · `CLAUDE.md` · `docs/settled-decisions.md` · `docs/locale-intentional-diffs.md` · `mailbox/` · `scripts/`(게이트 수정은 헤드) |
| **공용 파일에 넣을 것이 생기면** | 진행 파일 «헤드 요청» 절에 적는다. 헤드가 머지 때 승격한다 |
| **git** | 🔴 `git push` 금지 · `main` 체크아웃 금지 · 머지는 헤드. 회차 시작은 `git merge main`(헤드가 넣은 정본·게이트를 받는다) |
| **빌드·배포** | `npm run build`는 돌려도 된다(확인용). 배포는 헤드 |
| **세션** | 🔴 `/clear` 1회 = 회차 1개. 하나만 하고 **보고하고 멈춘다** |

---

## 2. 회차의 모양 — 세션 하나 · 구간 3개

`docs/settled-decisions.md` §5-A-4가 정한 대로 **도구를 왕복하는 구간은 Opus, 사람이 읽는 문장을 쓰는 구간은 Fable**이다. 한 세션 안에서 `/model`로 가른다(Fable 잔량이 없으면 전 구간 Opus — §5-A-2).

| 구간 | 모델 | 입력 | 출력 |
|---|---|---|---|
| **A 준비** | Opus | 진행 파일 · EN diff 실물 · 키워드 실측 · 현지 상위 글 | **브리프 1파일** |
| **B 재저작** | Fable | 브리프 **하나만** | 편집된 포스트 N편 |
| **C 마감** | Opus (렌즈는 Opus 서브 `model` 명시) | 편집본 · `git diff` | 게이트 0 · 렌즈 판정 · 커밋 · 진행 파일 · 보고 |

🔴 **B 구간에 도구 왕복을 넣지 마라** — 실측이 더 필요하면 A로 돌아가 브리프를 고친다. B가 브리프 밖의 사실을 «기억으로» 쓰는 순간 §12-B 위반이다.

---

## 3. A 준비 (Opus)

① `git merge main` → `docs/harden-<locale>-진행.md` 통독 — **«미결»·«되돌리지 마라»·«헤드 요청 답변»을 먼저**.
② **이번 회차 클러스터** = 진행 파일 회차 표의 다음 행. 🔴 임의 편수 금지 — 클러스터는 07-23 경화 커밋 경계(§7 부록 표)다.
③ 🔴 **드리프트는 날짜 필드가 아니라 diff 실물로 잰다**(id 세션 4 실증: `masterUpdated`가 «동기»라 적혀 있는데 EN 내용이 안 와 있었다). 편마다:

```bash
# 그 편의 masterUpdated 이후 EN이 무엇을 고쳤나 — 실물
git log --format="%h %ad %s" --date=short --since=<masterUpdated> -- lib/posts-en/<slug>.ts
git diff <그 날짜 직전 커밋> HEAD -- lib/posts-en/<slug>.ts
```
   diff의 **의미 단위마다** 셋 중 하나로 분류해 브리프에 적는다:
   **미반영**(가져온다) · **이미 반영**(08-27 세션 2/9가 15편을 먼저 소급했다 — 문자열로 실측) · **의도적 편차**(`locale-intentional-diffs.md`에 있는 것만. 없으면 «아직 판정 안 함»이다).
④ **키워드 실측**(§5 전제 — *«mcp있는데 안쓰고 추측해서 작성하면 그건 경화작업이 아니지»*): 도구·명령은 §7 부록. 산출 = `docs/keyword-bank/<locale>-<클러스터>.md`(뱅크가 이미 있으면 그 파일에 절 추가). 편마다 **winnable 후보 · 자릿수 함정 · 태그 카니발 후보**를 적는다.
⑤ **현지 상위 글 실측**: 편마다 현지어 검색 상위 3편의 H2 골격·FAQ·용어를 원문으로 본다(§12-B — 요약 금지). 경쟁사가 «무엇을 주는지»는 볼륨표에 안 나온다.
⑥ **브리프 작성** `docs/harden-brief/<locale>-<클러스터>.md` — 편마다 한 절:

```
## <slug> — 현행 masterUpdated <날짜> · updated <날짜>
### 드리프트 (EN diff 실물)
- [미반영] <EN 문장 축어> → 넣을 자리 <L##> · 형식(FAQ/본문/표)
- [이미 반영] <근거 grep 문자열>
- [편차] <locale-intentional-diffs 행 인용>
### 키워드 (실측치 · 도구 · 날짜)
- winnable: <키워드> <볼륨/SD> → H2/FAQ/태그 어디에
- 함정: <키워드> = <다른 뜻>
### 직답·tldr·경험담 델타 — 넣을 자리(L##)와 EN 원문 축어
### §13 자리 — 카드·수치 나오는 문단 L## 목록(마감 구간 손검산 대상)
### 이 편에서 하지 말 것 — «되돌리지 마라» 해당분 · EN-먼저 후보
```
🔴 브리프에 **EN 원문은 축어로** 넣는다. B 구간이 EN 파일을 다시 열지 않게 하기 위해서다.

---

## 4. B 재저작 (Fable)

브리프 하나만 읽고 편마다 편집한다. 순서는 **드리프트 → 직답·라벨 → tldr → 키워드 흡수 → 경험담 → 톤**.

- **직답**: 각 H2 직후 40~75단어(중문은 **60~110자**) 자기완결 단락. 라벨은 §7 부록의 로케일 정본 **하나로 통일**(현재 zh 2종·zh-hant 3종으로 갈려 있다).
- **H2 형태**: §7 부록의 로케일 판정을 따른다. 🔴 EN 질문형을 직역하지 않는다 — H2는 **현지 실검색 형태소**다(정본 = 메모리 «translation-h2-localization-strategy» · `posting.mdc` 다국어 절).
- **키워드 흡수**: 얇은 글 신설 금지 — winnable은 **기존 글의 H2·FAQ·태그로 흡수**한다. 태그 카니발은 한쪽에 양보하고 브리프에 근거를 남긴다.
- **경험담**: EN 1인칭을 **현지 맥락으로 재저작**(홀덤펍·카지노·화폐·대회명). 없는 사실을 만들지 않는다 — EN에 있는 경험만.
- **§13 자리**: 카드·수치·계산은 **EN 축어 복사**. 번역하다 카드가 바뀌는 사고(2026-09-06 A5s 「AA 和 KK」 오역 · 3bet «T8s→108s»)는 전부 여기서 났다.
- **금지**: 백틱 · slug · 이미지 경로 · readnext 대상 변경 · 새 출처 창작 · 「완벽 정리/총정리」류 제목(§17).
- 편집이 끝나면 **자기 배치 기계 게이트**만 돌린다(`npm run audit:hard -- --locale=<locale>`) — 렌즈는 C 구간이다.

---

## 5. C 마감 (Opus)

① **게이트 전건** — 🔴 0건까지. 출력 맨 아래 **커버리지**를 읽는다(«시나리오 못 잡은 글»의 0건은 미검사다).
```bash
npm run audit:hard -- --locale=<locale>
npm run check:cjk
npm run check:seo-sync
npm run check:meta
npm run check:drift -- --locale=<locale>     # 이번 클러스터 편은 ✅로 바뀌어야 한다
npm run check:mirror-pair -- --slug=<slug>   # 거울쌍(zh↔zh-hant) 언어 불변 항목 대조
```
② **2층 손검산** — 커버리지에 «못 잡은 글»로 뜬 편은 브리프 §13 자리 목록대로 **7장 나열 → 베스트5 → 비교**(`CLAUDE.md` §13). 표·비율은 산수 재검산.
③ **렌즈 4종 병렬**(Agent · `model: opus` 명시 · 한 메시지에 4개) — 프롬프트 장치 4개는 `REVIEW-PROTOCOL.md` 3층 그대로. **경화 회차 특유 추가 항목**:
   - 딜러/TD + 수학: §13 재산 · 룰 번호(WSOP/TDA) 원문 대조 · **D유형(실전 유해 조언)**
   - **현지 네이티브**(zh=신마 화교 현역 · zh-hant=대만 현역): 직역투 · 타지역 표기 · 용어 정본 대조
   - SEO/GEO 편집자: 태그 카니발 · FAQ 정형(`**Q.`+빈줄+`A.`) · desc ≤160 · 링크 실존
   - **교열자에게는 `git diff`를 준다**: «내 편집이 무엇을 깨뜨렸나» + 지적마다 **①원본 유래 / ②이번 편집 유래** 표기
   - 공통: 「문제없으면 없다고 써라 · **오탐보다 오통과가 나쁘다**」(정본 문구 — 반대로 쓰지 마라) · 확신도 필수 · «EN에도 같은 문장이 있으면 EN-먼저로 표기»
④ **전건 원문 판정** — 렌즈 지적을 그대로 반영하지 않는다. 1차 출처·직접 계산으로 채택/기각. **EN 동형은 기각이 아니라 «EN-먼저» 등재**다.
⑤ **2차 교열 패스** — 반영이 새 모순을 만든다(GTO 시리즈에서 두 번). 반영 후 diff를 교열 렌즈 1개에 다시 준다.
⑥ **거울쌍 대조** — `check:mirror-pair` 출력에서 **갈린 언어 불변 항목**을 전건 판정: 내 쪽이 틀렸으면 고치고, 상대 쪽이 틀렸으면 진행 파일 «거울쌍 갈림» 절에 적는다(상대 레인이 다음 회차 A에서 받는다). 용어 차이(概率/機率 · 弃牌/蓋牌)는 정상이다.
⑦ **`masterUpdated`** = 이번에 대조한 EN `updated` 날짜로 올린다. 🔴 **일괄치환 금지** — id 세션 4에서 정규식이 다른 필드를 물었다. 편마다 Edit.
⑧ **커밋**(push 금지):
```bash
git add lib/posts-<locale> docs/harden-<locale>-진행.md docs/harden-brief docs/keyword-bank docs/local-voice docs/translation-terms-<locale>.md
git commit -F commit-msg.txt   # "harden(<locale>): <클러스터> N편 — 회차 K · 렌즈 4종 X건/반영 Y · EN-먼저 Z"
```
⑨ **진행 파일 갱신**(§8 규격) → **보고하고 멈춘다.** 보고 양식:
```
회차 K · <클러스터> N편 · 커밋 <hash>
드리프트: 미반영 a → 반영 a / 이미 반영 b / 편차 c
키워드: winnable d건 흡수 · 카니발 e건 양보 · 함정 f건 기록
렌즈 4종: 지적 X · 반영 Y · 기각 Z(EN-먼저 W)
§13 손검산: g편 h자리 전건 일치
거울쌍: 갈림 i건(내 쪽 j 수정 · 상대 쪽 k 등재)
게이트: audit 🔴 0 · cjk 0 · seo-sync 0 · meta 0 · drift ✅ N/N
헤드 요청: <공용 파일 승격·이미지·EN-먼저>
```

---

## 6. 헤드(본체 main)가 하는 것 — 레인은 읽기만

1. `git merge harden-zh` → `git merge harden-zh-hant`(conflict가 나면 레인이 공용 파일을 건드린 것 — §1로 되돌린다).
2. `npm run build`(N blog posts 확인) → `git push` → 배포 도착 폴링 → **라이브 확인은 `page.content()`**(innerText는 접힌 FAQ를 못 본다 · 앵커는 원문 표기).
3. 진행 파일 «헤드 요청» 절 처리: `locale-intentional-diffs.md` 등재 · EN-먼저 묶음을 EN에 먼저 정정 후 전 로케일 전파 · 이미지 교체 · 게이트 수정.
4. `WORKLOG.md`·`session-handoff.md` 기록. 검수장 lane-zh에 **머지 커밋 해시**를 우편함으로 통보(검수는 해시 기준 판정).
5. 트랙 종결(6/6) 시: 검수장 원장 편입 요청 + GPT 교차검수 팩(`docs/mailbox-protocol.md` §5).

---

## 7. 로케일 부록

### 7-A. 클러스터 (두 레인 공통 · zh 07-23 경화 커밋 경계 · 42편)

| 회차 | 클러스터 | 슬러그 | 편수 |
|---|---|---|---:|
| 1 | 규칙 | texas-holdem-rules-for-beginners · holdem-game-order · holdem-betting-actions · holdem-blind-meaning · holdem-all-in-rules · holdem-showdown-rules | 6 |
| 2 | 족보 | holdem-hand-rankings · holdem-flush-vs-straight · holdem-kicker · holdem-tiebreak-rules · holdem-split-pot-rules · holdem-reading-the-board | 6 |
| 3 | 확률 | holdem-probability · holdem-pot-odds · holdem-outs · holdem-drawing-odds · holdem-implied-odds · holdem-equity · holdem-card-counting | 7 |
| 4 | 전략 | holdem-strategy · holdem-positions · holdem-position-play · holdem-starting-hands-chart · holdem-limping · holdem-3bet · holdem-continuation-bet · holdem-when-to-fold | 8 |
| 5 | 토너먼트 | holdem-tournament · holdem-tournament-vs-cash-game · holdem-icm · holdem-bubble · holdem-short-stack · apt-incheon-2026-guide · ept-barcelona-2026-guide · wpt-australia-2026-guide · korea-poker-marathon-2026 | 9 |
| 6 | 용어 | holdem-glossary · holdem-bad-beat · holdem-cooler · holdem-fish · holdem-rake · holdem-straddle | 6 |

🔴 **대상 밖**(현행 기준으로 났다 — 2026-09-06 표본 실측: 질문형 H2 88~90% · 직답 · readnext 전부 있음): GTO 솔버 13편(09-03) · `wsop-2026-tournament-guide`(07-29) · zh-hant `taiwan-poker-clubs-guide`(08-31). 손대지 마라.
🔴 두 레인은 **같은 회차 번호 = 같은 클러스터**로 간다. 거울쌍 대조(§5-⑥)가 같은 클러스터를 전제한다. 한쪽이 앞서면 갈림을 진행 파일에 적어 두고, 뒤쪽이 받는다.

### 7-B. 🇨🇳 zh (간체) — 독자 = 신마(싱가포르·말레이) 화교 (본토는 구글 미사용)

| 항목 | 정본·도구 |
|---|---|
| 자산 | `docs/translation-terms-zh.md`(§0.5 신마 변이 · §7 검색 습관 · §8 편당 리서치 축적) · `docs/market-profile/zh.md` · `docs/keyword-bank/zh-tag-volumes.md`(살아 있는 태그 47종) |
| 🔴 없는 것 | `docs/local-voice/zh*.md` — **회차 1 A 구간에서 신설**(§0.5·§6·§7을 옮기지 말고 **판정과 실측만** 쌓는다) |
| 키워드 발굴 | 구글 자동완성 `hl=zh-CN&gl=SG`(+`gl=MY`) · 라쿠 `question-search`(질문문) · `suggest-keywords` |
| 볼륨 | 🔴 **본토 데이터 없음** — 라쿠/DFS `location=Singapore`는 **상대 비교 전용 참고치**. 절대값을 글·문서에 쓰지 마라(`rakko-playbook.md` 2026-08-27 절 ③) |
| H2 형태 | **질문형 강함**(§7 실측: PAA 직대응 「葫芦和四条哪个大?」) → §14-A 질문형 70% 적용 |
| 직답 라벨 | **`> **快速回答**`** 하나로 통일(현재 快速回答 19 · 快速答案 4) |
| 톤 | 대륙 표준 간체 + 신마 실사용 변이는 **괄호 병기**(§0.5) · 粤语 변체는 注로만 |
| 드리프트(09-06 실측) | 13편: 3bet · betting-actions · continuation-bet · fish · game-order · glossary · kicker · limping 외 5 · 🟠 card-counting은 `masterUpdated` 없음(추적불가 — 회차 3에서 필드 신설) |

### 7-C. 🇹🇼 zh-hant (번체) — 독자 = 대만 (중문 SEO 본진)

| 항목 | 정본·도구 |
|---|---|
| 자산 | `docs/translation-terms-zh-hant.md`(§7 편당 리서치 7-A~7-G) · `docs/zh-hant-search-behavior-report.md` · `docs/zh-hant-plan.md` · `docs/market-profile/zh-hant.md` · `docs/keyword-bank/zh-hant-tag-volumes.md`(§1 `德州撲克規則` 4,400 주인 확정) · `zh-hant-tournament.md` §0(측정법 정본) |
| 🔴 없는 것 | `docs/local-voice/zh-tw.md` — **회차 1 A 구간에서 신설**(search-behavior-report §3·§4의 제목·H2 공식 + terms §4 톤을 **포인터로**, 실측 판정만 축적) |
| 키워드 발굴 | 구글 자동완성 `hl=zh-TW&gl=TW` · 라쿠 `question-search`(`德州撲克` 질문 0건이 실측 — 명사형 시드로) |
| 볼륨 | **DFS `keywords_data/google_ads/search_volume`** + `location_code:2158` · 🔴 **`language_code`를 빼라**(넣으면 40501) · SERP는 반대로 `language_code:"zh-TW"` 필수(하이픈) · 라쿠 Taiwan은 죽은 소스(전부 0 오측) |
| H2 형태 | 🔴 **명사형 유지**(search-behavior-report §1·§6 실측: 키워드·명사형 지배, 질문은 FAQ 블록에 격리, `怎麼~` 훅만 제한적). **§14-A의 «직답 블록»만 적용하고 «질문형 70%»는 적용하지 않는다** — 헤드 판정 2026-09-06, `locale-intentional-diffs.md` 등재. 질문은 FAQ로 |
| 직답 라벨 | **`> **快速解答**`** 하나로 통일(현재 快速解答 18 · 快速回答 2 · 重點速覽 1) |
| 톤 | 대만 현지(彩池·蓋牌·機率·籌碼) · 홍콩 광둥어 어휘는 별도 확인 전 금지(report §7) |
| 드리프트(09-06 실측) | 14편: 3bet · betting-actions · card-counting · continuation-bet · fish · game-order · glossary · kicker 외 6 |

### 7-D. 거울쌍 규칙 (zh ↔ zh-hant)

- 슬러그 42편 완전 일치 → **언어 불변 항목**(카드 토큰 · % · 화폐+숫자 · bb · 날짜 · 룰 번호)이 갈리면 **하나는 틀렸다.** 🔴 **간체↔번체 기계 변환 금지**(용어가 다르다 — 求解器/解算器 · 弃牌/蓋牌).
- 게이트 `npm run check:mirror-pair -- --locale-pair=zh,zh-hant [--slug=<slug>]`: 첫 실행 결과는 **전건 원문 판정**(게이트 튜닝 규율 — 오탐이면 헤드에 «게이트 수정» 요청).
- 실례: 2026-09-06 둘 다 A5s 블로커를 「AA 和 KK」로 잘못 적고 있었다(본체 `1c0dc8dc`) — **둘이 똑같이 틀린 건 교차검증이 아니다.** 판정은 EN 원문.

---

## 8. 진행 파일 규격 — `docs/harden-<locale>-진행.md`

절 6개, 순서 고정. 회차마다 갱신하고 커밋에 포함한다.

1. **회차 표** — 회차 · 클러스터 · 편수 · 상태(⏳/✅) · 커밋 · 렌즈 지적/반영 · 날짜
2. **미결** — 해결될 때까지 유지(지우지 않는다)
3. **되돌리지 마라** — «일부러 그렇게 둔 것» + 근거
4. **거울쌍 갈림** — 상대 레인이 받을 것(슬러그 · 자리 · 내 값 · 상대 값 · EN 원문)
5. **헤드 요청** — 공용 파일 승격 · EN-먼저 · 이미지 · 게이트 수정(헤드가 처리하면 ✅ 표시)
6. **자산 축적 체크**(매 회차 마감 3종 — `settled-decisions` §5): ① 키워드뱅크 ② 편차 판정(헤드 요청으로) ③ voice/판정 정본

🔴 진행 파일은 **다른 세션의 판정 근거**다 — 미검증 문장·«~인 것 같다»를 쓰지 마라. 실측치엔 도구·날짜를 붙인다.
