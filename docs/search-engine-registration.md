# 검색엔진 등록 — 구글·네이버 밖 (Bing · Yahoo · DuckDuckGo · Ecosia · Yandex · IndexNow)

> 신설 2026-09-12 · 사장님 지시 「현재 구글과 네이버만 등록돼 있는데 야후·얀덱스·빙 등 할 수 있는 건 하고 싶어」.
> 🔴 구글 색인 요청은 여기 대상이 아니다 — GSC에서 사장님이 손으로 한다(`settled-decisions` 「GSC 색인 생성 요청 보류」 · 대량 API는 채용공고·라이브방송 전용이라 우리 글엔 못 쓴다).

## 0. 어디에 뭘 하면 되나 — 한 장

| 검색엔진 | 우리가 할 것 | 덤으로 먹는 곳 | 상태 |
|---|---|---|---|
| **Bing** | Bing Webmaster Tools 등록 + 사이트맵 제출 | **Yahoo · DuckDuckGo · Ecosia · AOL**은 전부 Bing 인덱스를 쓴다 — 따로 등록할 곳이 없다 | ✅ **완료 09-12**(소유확인 + 사이트맵 695 · 오류 0) |
| **Yandex** | Yandex Webmaster 등록(**HTML 파일**) + 사이트맵 | 러시아어권 · 우리 언어엔 값이 작지만 비용 0 | ✅ **완료 09-12**(Owner + 사이트맵 접수 · 처리 1~2주) |
| **IndexNow** | 키 파일 `public/<key>.txt` + `npm run indexnow` | Bing · Yandex · **Naver** · Seznam · Yep 이 같은 푸시를 받는다 | ✅ 구현 완료(09-12) |
| **Daum** | — | (Nate 동반) | ⛔ **하지 않는다**(09-12 사장님 결재 · 개인정보 입력 요구) |
| **ZUM** | — | 국내 포털 잔여 점유 | ⛔ **하지 않는다**(09-12 사장님 결재 · 전용 등록 메뉴 소멸) |
| Yahoo Japan | 없음 — 구글 인덱스를 쓴다 | ja 글은 구글 색인이 곧 Yahoo Japan | — |
| Baidu | 하지 않는다 | zh 독자는 신마 화교(구글 사용) · 본토는 대상 밖(`hardening-protocol` §7-B) | ⛔ |
| Naver | 이미 등록(서치어드바이저 · www/non-www 둘) | IndexNow 로 «요청(수집)»을 자동화할 수 있다 | ✅ |

## 1. Bing Webmaster Tools (5분 · 사장님)

> ✅ **2026-09-12 완료(소유확인)**: GSC 가져오기 목록엔 **non-www 구 속성**(`https://holdemmaster.com/` · 사이트맵 0)만 떠서 가져오지 않았다(정본 호스트 = www).
> 대신 `https://www.holdemmaster.com`을 **수동 추가** → 메타 태그 `743DA88A92…`를 `app/layout.tsx`에 직접 박아 배포(네이버 방식과 동일 · env는 교체용) → **Bing 「확인」 통과 · 대시보드 진입 확인**(사장님 화면 09-12).
> ✅ **사이트맵도 완료(09-12)**: 「사이트맵」 메뉴 = 알려진 사이트맵 **1** · 오류 **0** · 경고 **0** · **발견된 총 URL 695** · 상태 「성공」.
> 🪶 695는 우리 라이브 `sitemap.xml` 실측 loc 수와 **정확히 일치**한다 — 이게 «제출이 제대로 먹혔나»의 교차검증이다.
>
> 🪶 **라이브 실측 09-12**(Playwright · `res.text()`): 홈 200 · `msvalidate.01` **1개** · `naver-site-verification` **2개**(둘 다 보존) ·
> `yandex-verification` **없음**(미등록이라 정상) · IndexNow 키 파일 200(내용=파일명) · `robots.txt` 200(Sitemap 행 있음) · `sitemap.xml` 200 **695 loc**(max lastmod 2026-09-11).


1. https://www.bing.com/webmasters → Microsoft 계정 로그인(개인 계정이면 된다).
2. 「사이트 추가」에서 **「Google Search Console에서 가져오기」**를 고른다 → 구글 계정 승인 → `sc-domain:holdemmaster.com`(도메인 속성)을 선택.
   → 소유확인·사이트맵(`https://www.holdemmaster.com/sitemap.xml`)이 **같이 넘어온다**. 메타 태그 불필요.
3. 가져오기가 안 되면 「수동 추가」 → 「메타 태그」 값(`<meta name="msvalidate.01" content="…">`)의 content를 복사해
   Vercel → Settings → Environment Variables → **`BING_SITE_VERIFICATION`** 에 넣고 Redeploy → Bing에서 「확인」.
4. 등록 뒤 「사이트맵」 메뉴에 `https://www.holdemmaster.com/sitemap.xml` 이 보이는지 확인. 없으면 제출.
5. (선택) 「IndexNow」 메뉴에 우리 키가 잡히는지 확인 — 아래 §3의 첫 푸시 뒤 며칠 내에 나타난다.

## 2. Yandex Webmaster — ✅ 2026-09-12 소유확인 완료

> ✅ **결과**: `https://www.holdemmaster.com` · 계정 `holdem7964@gmail.com` · **Role = Owner** · 확인 방법 **「File in root directory」** `7cf430b9ee058a0d` · 확인일 09/12/2026.
> 🔴 **발급 화면이 「Meta tag」가 아니라 「HTML file」이었다** — 그래서 메타 env(`YANDEX_SITE_VERIFICATION`)가 아니라
> `public/yandex_7cf430b9ee058a0d.html`을 화면 축어 그대로 만들어 배포했다(커밋 `3f5fd0ef`).
> **이 파일을 지우면 소유확인이 풀린다** — Yandex는 주기적으로 재검사한다.
> 🪶 라이브 확인은 Playwright 폴링으로 했다(배포 전 4회 404 → 5회째 200 · 본문 `Verification: 7cf430b9ee058a0d` 일치).

1. https://webmaster.yandex.com → Yandex 계정.
2. 「Add site」 → `https://www.holdemmaster.com` → 확인 방법 선택.
   - **HTML file**(이번에 쓴 길): 화면의 코드를 `public/yandex_<hash>.html`로 그대로 저장 → 배포 → 「Verify」.
   - Meta tag: content 값을 Vercel 환경변수 **`YANDEX_SITE_VERIFICATION`** 에 넣고 Redeploy(`app/layout.tsx`가 읽는다 · 지금은 비어 있어 meta를 안 그린다).
3. 「Indexing → Sitemap files」에 `https://www.holdemmaster.com/sitemap.xml` 제출.
   ✅ **09-12 접수 완료** — 화면 축어: 「The Sitemap was added to the processing queue. … This can take up to 1-2 weeks.」
   🪶 **Yandex는 Bing과 달리 즉시 URL 수를 안 보여준다**(처리 대기열). 「Indexed」가 안 보여도 실패가 아니다.
4. 🔴 「Indexing → Reindex pages」는 하루 20~30 URL 한도다 — 쓰지 말고 §3 IndexNow 로 대신한다.

🪶 `app/layout.tsx` `metadata.verification`이 읽는 값: 네이버 2개·Bing 1개는 **코드에 직접** 박혀 있고, Yandex는 env 경로만 열려 있다(현재 미사용 · HTML 파일 방식이라 필요 없다).

## 2-B. 국내 포털(Daum · ZUM) — ⛔ 하지 않는다 (2026-09-12 사장님 결재)

> 사장님 지시 축어: **「얀덱스와 빙까지만 하자」**. 아래는 «왜 안 하는지»를 남기는 것이다 — **재제안 금지.**
> 🔴 조사분은 블로그 요약이 아니라 라이브 실측이다(Playwright · §12-B) — 떠도는 주소 3개는 **전부 죽어 있었다.**

| 어디 | 실측(2026-09-12) | 안 하는 이유 |
|---|---|---|
| **Daum**(= Nate) | https://register.search.daum.net/index.daum 살아 있음 · 무료(공식 축어 「사이트 검색을 무료로 등록할 수 있는 서비스입니다.」) · 유형 「사이트」 | **신청서가 개인정보 입력을 요구한다**(사장님 판단으로 중단) |
| **ZUM** | 전용 등록 메뉴가 **없어졌다** — `search/site/register`·`search/blog/register`·`search/site/process` **셋 다 「요청하신 페이지를 찾을 수 없습니다」**. 현재 「검색 서비스」 하위는 **쇼핑·기타문의 둘뿐** | 남은 길이 「기타문의」 폼(https://help.zum.com/search/inquiry · 이메일·제목·URL·내용)뿐이라 **사람이 심사하는 문의**다. 국내 잔여 점유라 값이 작다 |

재론 조건: ① Daum이 개인정보 없이 접수하도록 바뀌거나 ② ZUM이 전용 등록 메뉴를 되살릴 때.

## 3. IndexNow — 한 번에 700 URL (구현 완료 · 헤드가 돌린다)

- 키 = `public/7966fb5cebb48fca1febb6d9af6ae3d8.txt`(파일 내용 = 파일명). 배포돼 있어야 검색엔진이 소유를 확인한다.
- 명령(Holdem_Project 루트):
  ```bash
  npm run indexnow -- --all                 # 사이트맵 전체 — 첫 등록 때 한 번
  npm run indexnow -- --since 2026-09-12    # 그날 이후 lastmod 만 — 배포 뒤 루틴
  npm run indexnow -- --urls /blog/x,/en/blog/y
  npm run indexnow -- --all --dry           # 목록만
  ```
- **첫 푸시 이력**: 2026-09-12 14:36 ✅ 200 접수(695 URL). 배포 직후 첫 시도는 403 `SiteVerificationNotCompleted`였다 — 새 키는 라이브 뒤 몇 분간 IndexNow 쪽 소유확인이 늦는다. 재시도는 «첫 접수에서 멈추는» 루프로.
- 응답 200/202 = **접수**. 🔴 접수 ≠ 색인. 크롤 큐에 넣을 뿐이고, 색인 판정은 각 엔진의 몫이다.
- 🔴 같은 URL 을 하루에 여러 번 보내지 마라(429 · 신뢰도 하락). 루틴은 **배포마다 `--since <오늘>` 한 번**.
- 프로토콜 §6(헤드 머지 절차)에 «push 뒤 `npm run indexnow -- --since <오늘>`» 한 줄이 들어간다(2026-09-12).

## 4. 하지 않는 것 · 이유

- **Google Indexing API** — JobPosting·BroadcastEvent 전용. 블로그 글 제출은 약관 위반이고 구글이 무시·쿼터 회수. 사용 금지.
- **Baidu** — 본토 독자 없음. 등록하면 본토 크롤러가 트래픽만 만든다.
- **IndexNow 를 빌드 훅에 자동으로 넣기** — Vercel `buildCommand` 는 npm 훅을 건너뛰고(메모리 `vercel-buildcommand-skips-npm-hooks`) 256자 한도가 있다. 헤드 머지 절차의 수동 한 줄이 더 안전하다.
