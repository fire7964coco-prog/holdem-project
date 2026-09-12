# 검색엔진 등록 — 구글·네이버 밖 (Bing · Yahoo · DuckDuckGo · Ecosia · Yandex · IndexNow)

> 신설 2026-09-12 · 사장님 지시 「현재 구글과 네이버만 등록돼 있는데 야후·얀덱스·빙 등 할 수 있는 건 하고 싶어」.
> 🔴 구글 색인 요청은 여기 대상이 아니다 — GSC에서 사장님이 손으로 한다(`settled-decisions` 「GSC 색인 생성 요청 보류」 · 대량 API는 채용공고·라이브방송 전용이라 우리 글엔 못 쓴다).

## 0. 어디에 뭘 하면 되나 — 한 장

| 검색엔진 | 우리가 할 것 | 덤으로 먹는 곳 | 상태 |
|---|---|---|---|
| **Bing** | Bing Webmaster Tools 등록(GSC 가져오기 원클릭) + 사이트맵 제출 | **Yahoo · DuckDuckGo · Ecosia · AOL**은 전부 Bing 인덱스를 쓴다 — 따로 등록할 곳이 없다 | ⬜ 사장님 로그인 필요 |
| **Yandex** | Yandex Webmaster 등록(메타 태그) + 사이트맵 | 러시아어권 · 우리 언어엔 값이 작지만 비용 0 | ⬜ 사장님 로그인 필요 |
| **IndexNow** | 키 파일 `public/<key>.txt` + `npm run indexnow` | Bing · Yandex · **Naver** · Seznam · Yep 이 같은 푸시를 받는다 | ✅ 구현 완료(09-12) |
| Yahoo Japan | 없음 — 구글 인덱스를 쓴다 | ja 글은 구글 색인이 곧 Yahoo Japan | — |
| Baidu | 하지 않는다 | zh 독자는 신마 화교(구글 사용) · 본토는 대상 밖(`hardening-protocol` §7-B) | ⛔ |
| Naver | 이미 등록(서치어드바이저 · www/non-www 둘) | IndexNow 로 «요청(수집)»을 자동화할 수 있다 | ✅ |

## 1. Bing Webmaster Tools (5분 · 사장님)

> ✅ **2026-09-12 진행**: GSC 가져오기 목록엔 **non-www 구 속성**(`https://holdemmaster.com/` · 사이트맵 0)만 떠서 가져오지 않았다(정본 호스트 = www). 대신 `https://www.holdemmaster.com`을 **수동 추가** → 메타 태그 코드 `743DA88A92…`를 `app/layout.tsx`에 직접 박아 배포(네이버 방식과 동일 · env는 교체용). 남은 것 = Bing 화면 「확인」 + 사이트맵 제출.

1. https://www.bing.com/webmasters → Microsoft 계정 로그인(개인 계정이면 된다).
2. 「사이트 추가」에서 **「Google Search Console에서 가져오기」**를 고른다 → 구글 계정 승인 → `sc-domain:holdemmaster.com`(도메인 속성)을 선택.
   → 소유확인·사이트맵(`https://www.holdemmaster.com/sitemap.xml`)이 **같이 넘어온다**. 메타 태그 불필요.
3. 가져오기가 안 되면 「수동 추가」 → 「메타 태그」 값(`<meta name="msvalidate.01" content="…">`)의 content를 복사해
   Vercel → Settings → Environment Variables → **`BING_SITE_VERIFICATION`** 에 넣고 Redeploy → Bing에서 「확인」.
4. 등록 뒤 「사이트맵」 메뉴에 `https://www.holdemmaster.com/sitemap.xml` 이 보이는지 확인. 없으면 제출.
5. (선택) 「IndexNow」 메뉴에 우리 키가 잡히는지 확인 — 아래 §3의 첫 푸시 뒤 며칠 내에 나타난다.

## 2. Yandex Webmaster (5분 · 사장님)

1. https://webmaster.yandex.com → Yandex 계정(이메일로 만들 수 있다).
2. 「Add site」 → `https://www.holdemmaster.com` → 확인 방법 **「Meta tag」** 의 content 값을 복사.
3. Vercel 환경변수 **`YANDEX_SITE_VERIFICATION`** 에 넣고 Redeploy → Yandex에서 「Check」.
4. 「Sitemap files」에 `https://www.holdemmaster.com/sitemap.xml` 제출.
5. 「Indexing → Reindex pages」는 하루 20~30 URL 한도가 있다 — 쓰지 말고 §3 IndexNow 로 대신한다.

🪶 두 환경변수는 `app/layout.tsx` `metadata.verification` 이 읽는다. 비어 있으면 meta 를 안 그린다(구글·네이버 값은 코드에 그대로 있다).

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
