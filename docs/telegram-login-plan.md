# 텔레그램 로그인 — 계획표 (2026-10-13 작성 · 승인 대기)

> 목적: 가입자의 텔레그램 ID 확보 → 봇 1:1 메시지 · 단톡방/채널 초대 링크 발송.
> 상태: **계획만. 사장님 승인 전 구현 착수 금지.**

## 0. 사양 확인 결과 (공식 문서 원문 · 10-13 열람)

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| 🔴 로그인 방식이 바뀌었다 | 현행 = **OpenID Connect**. 예전 iframe 위젯(hash·`auth_date` 검증)은 `/widgets/login-legacy`로 «보관(archived)» | core.telegram.org/widgets/login |
| OIDC 엔드포인트 | issuer `https://oauth.telegram.org` · discovery `/.well-known/openid-configuration` · PKCE S256 «권장» | 같은 문서 |
| 클라이언트 키 | @BotFather → Login Widget 메뉴에서 **Client ID·Client Secret** 발급 · 허용 URL·redirect URI도 거기 등록 | 같은 문서 |
| 스코프 | `openid`(필수) · `profile`(→ `id` 숫자 ID·`name`·`preferred_username`·`picture`) · `phone`(동의 필요) · **`telegram:bot_access`(로그인 뒤 봇이 DM 보낼 수 있게 허용)** | 같은 문서 |
| 발송 한도 | 한 채팅 초당 1통 · 그룹 분당 20통 · 일괄 발송 초당 약 30통(유료 브로드캐스트 켜면 초당 1000통 · 30 초과분 0.1 Stars) | core.telegram.org/bots/faq |
| Supabase | 기본 공급자 목록에 텔레그램 없음. 대신 **Custom OAuth/OIDC Providers** — 식별자 `custom:…` · OIDC 자동 탐지 · PKCE 기본 켜짐 · **이메일 필수가 기본 → `email_optional: true` 필요** · Free 플랜 3개까지 | supabase.com/docs/guides/auth/custom-oauth-providers |

**결론**: 핸드오프의 «서버에서 봇 토큰으로 hash 검증 후 회원 연결» 설계는 낡았다.
Supabase 커스텀 OIDC 공급자로 붙이면 **Google·카카오와 같은 `signInWithOAuth` 경로**를 그대로 탄다
→ 자체 서명 검증·세션 발급 코드를 쓰지 않는다(보안 부채 최소).

### 아직 확인 안 된 것 (구현 ①단계에서 실측으로 닫는다 · 추측 금지)
- U1. Supabase가 OIDC `id`·`preferred_username` 클레임을 `raw_user_meta_data`/`identities.identity_data`에 담는가, `sub`가 숫자 ID와 같은가
- U2. 커스텀 공급자에 `linkIdentity`(기존 Google·카카오 회원에 텔레그램 연결)가 되는가 · 수동 연결 설정 필요 여부
- U3. 정보통신망법 §50 원문(광고성 정보 사전 동의 · 야간 21~08시 별도 동의 · 수신 동의 주기 확인) — 법령 원문에서 조항 인용 후 동의 문구 확정

- U4. 텔레그램 토큰 엔드포인트는 «Basic 인증(Client ID·Secret)»만 명시(`client_secret_basic`). Supabase 커스텀 공급자가 Basic으로 보내는지 → ③ 실측에서 실패하면 여기부터 본다.

### ✅ 진행 기록 (10-15)
- 🔁 10-15 (10): Supabase 커스텀 도메인 활성 → BotFather Redirect URI에 `https://auth.holdemmaster.com/auth/v1/callback` 추가(옛 supabase.co 줄 유지) · Supabase가 알리는 콜백은 이제 새 주소.
- ① 완료 — 운영용 새 계정 · 봇 `@HoldemMasterBot`(사진 = `public/favicon-512.png`) · BotFather 미니 앱 Login Widget에서 «Switch to OpenID Connect Login» → Client ID `8640330216`(공개 값) · Redirect URI `https://idikicmooauorjurdkzh.supabase.co/auth/v1/callback` · Trusted Origin `https://www.holdemmaster.com/`(텔레그램이 끝 `/` 자동 부착) · 구형 위젯 도메인 칸에도 `www.holdemmaster.com`(무해). Secret·봇 토큰은 텔레그램 안에만(대화·파일에 없음).
- ② 완료 — Supabase Auth Providers → Custom Providers → `custom:telegram` · Display Name Telegram · Auto-discovery · Issuer `https://oauth.telegram.org` · Discovery 비움 · Scopes `openid, profile, telegram:bot_access` · Allow users without email ON · Callback 일치 확인 · **ENABLED**. 🔴 크롬 자동완성이 Client ID·Secret 칸에 구글 OAuth 키를 채웠던 것을 지우고 넣음 — 공급자 수정 때 같은 함정.
- ③ 실측 (10-15 13:01 KST · 사이트 코드 무수정 · 스크래치 Playwright로 authorize → 사장님 폰 승인 · 저장값은 사장님 허락 받아 service role 읽기 전용 조회)
  - ✅ **종단 성공** — 텔레그램 승인 → Supabase 콜백 → 회원 생성. 토큰 교환이 통과했으니 **U4(Basic 인증) 닫힘**.
  - Supabase가 텔레그램에 보내는 값(authorize 302 실측): `scope=openid profile telegram:bot_access` · PKCE S256 · `redirect_uri=…supabase.co/auth/v1/callback` — 설정대로.
  - 생성된 회원: `auth.users.id 1d194faa-…` · email·phone 빈 값 · `app_metadata.provider = custom:telegram` · `profiles` 행 자동 생성(nickname = 텔레그램 이름 «HoldemMaster» · language ko).
  - 🔴 **U1 결과 — 숫자 텔레그램 ID가 없다.** `identity_data`·`user_metadata`에 들어온 클레임 = `sub`·`name`·`given_name`·`iss`·`aud`·`iat`·`exp`·`email_verified`·`phone_verified` **뿐**. `profile` 스코프의 `id`·`preferred_username`·`picture`는 **없음**. `sub = 11184368554172094806`(20자리 · int64 상한 초과) = 텔레그램 user id가 아니다(공식 문서 예시도 `sub`와 `id`가 다른 값 · 둘의 관계는 문서에 설명 없음). 원인(텔레그램이 안 보냈나 / Supabase가 버렸나)은 **미판정** — ID 토큰 원문은 Supabase를 거치면 볼 수 없다.
  - 영향: 봇 DM은 `chat_id`(숫자 ID)가 있어야 한다 → **로그인만으로는 발송 대상이 안 생긴다.** 후보 = ⓐ 봇 딥링크 `t.me/HoldemMasterBot?start=<1회용 토큰>` — 회원이 Start를 누르면 봇이 받은 업데이트의 `from.id`로 연결(OIDC와 무관 · 표준 방식) ⓑ ID 토큰 원문 확인(Client Secret 필요 = 사장님 몫)으로 `id` 클레임이 오는지 판정. 
  - 부수 관찰: `redirect_to=http://localhost:…`는 허용 목록 밖이라 사이트 URL 루트(`/?code=`)로 떨어진다(로컬 시험 시 허용 목록 추가 필요). 라이브 `/auth/callback`은 verifier 없는 code를 받으면 `/login?error=auth` — 정상 동작.
  - U2(기존 회원에 연결)는 미시험.
- ✅ 사장님 결정(10-15): **ⓐ 봇 Start 딥링크로 숫자 ID 확보** · 시험 회원 `1d194faa`(운영 계정) **그대로 둔다**.
### ④ 설계 수정안 (10-15 · SQL 초안 = `supabase/telegram-links.sql`)
- **연결은 로그인 수단과 무관하다.** 로그인한 회원이면 Google·카카오·이메일·텔레그램 누구나 «텔레그램 연결» → 1회용 토큰 → `t.me/HoldemMasterBot?start=<토큰>` → Start → 웹훅이 `from.id`를 그 회원에 붙인다. → **U2(기존 회원 linkIdentity)는 알림 목적엔 불필요**해졌다(텔레그램 로그인은 «가입 편의»로만 남음).
- 핸드오프의 «`sub` 열»은 **뺐다** — `sub`는 이미 `auth.identities`(provider `custom:telegram`)에 있다. 두 곳에 두면 갈라진다. 필요하면 조인.
- 테이블 `telegram_links`(회원 1행): `chat_id`(bigint unique · Start 뒤) · `tg_username`·`tg_name`(문의 중계 표시) · `link_token_hash`(sha256 hex · 원문 저장 안 함)+`link_token_expires_at`(15분) · `linked_at` · `bot_blocked_at` · ⑥용 `marketing_consent_at`·`night_consent_at`·`consent_withdrawn_at`(null = 미동의 · 문구는 U3 뒤). RLS on + 정책 0(participation.sql 원칙).
- 함수 `telegram_link_consume(hash, chat_id, username, name)` — security definer · service_role만 실행. 토큰 행 `for update` 잠금 → 웹훅 재전송으로 같은 토큰 두 번 소비 불가 · 같은 텔레그램 계정이 다른 회원에 붙어 있으면 그쪽을 비우고 옮김(마지막 Start가 이김).
- 시험(10-15 · PGlite 0.2.17 스크래치 · 두 번 실행 안전): 소비 ✅ · 재전송 null ✅ · 만료 null ✅ · 다른 회원으로 이동 + 옛 행 이름 비움 ✅ · 해시 형식·야간⊂광고 동의·음수 chat_id 거부 ✅ · RLS true · 실행 권한 = postgres·service_role.
- 서버 라우트(⑤에서 작성): ⓐ `POST /api/telegram/link`(로그인 필수 · 토큰 32바이트 base64url = 43자 · 원문 사양 «A-Z, a-z, 0-9, _ and -» · «up to 64 characters») ⓑ `POST /api/telegram/webhook` — 헤더 `X-Telegram-Bot-Api-Secret-Token` 상수 시간 비교 · `chat.type = private`만 · `/start <토큰>` → rpc · `my_chat_member`(원문 «received only when the bot is blocked or unblocked») → `bot_blocked_at`. 미들웨어 matcher(`/`·`/login`·`/post`·`/auth`)에 `/api` 없음 = 웹훅이 미들웨어를 안 탄다.
- 🔴 «kicked» 상태 이름은 원문 미열람(API 문서 10만 자 뒤) → ⑤ 실측(봇 차단·해제 1회)으로 확인.
- 🪶 스코프 `telegram:bot_access`는 Start 방식에선 불필요 — 지워도 되는지는 ⑤ 뒤 판단(동의 화면 문구가 줄어듦).
- **사장님 몫(⑤ 전 선행)**: ① 이 SQL을 SQL Editor에서 RUN + 파일 끝 확인 3줄 ② Vercel env `TELEGRAM_BOT_TOKEN`·`TELEGRAM_WEBHOOK_SECRET`(A-Z a-z 0-9 _ - 1~256자 · 제가 만들어 드릴 수 있음) ③ 배포 뒤 브라우저 주소창으로 `setWebhook` 1회(토큰이 대화에 안 나오게 — 주소 틀은 ⑤에서 드림).

### 채널 (10-15 사장님 결정)
- 메인 공개 채널 = **`@HoldemMasterOfficial`**(t.me/HoldemMasterOfficial). 역할 = 퍼뜨리기(새 글·대회·이벤트·퀴즈 투표) → 글마다 «봇 연결» 버튼으로 명단(봇)에 넘긴다. 구독자 명단은 우리 자산이 아니다.
- 그룹(단톡방)은 보류(관리자 사칭 DM 사기·모더레이션 부담) · 언어별 채널은 GA 국가 분포 뒤(이름 규칙 `HoldemMasterKR` 등 · 선점 권장).
- 🪶 «가입 신청 승인제» 채널에서 봇이 신청자 ID를 받는 기능 = 원문 미확인 → 채널 운영 회차에서 확인.
- 봇을 채널 관리자로 넣기(자동 게시용)는 ⑤ 뒤.
- 언어별 채널 선점(10-15 · 빈 공개 채널 · 설명은 «준비 중 → Official 안내») — 주소·이름·설명 정본 = 이 문서 «부록 A». 실제로 잡힌 주소(10-15 t.me 공개 페이지 실측): ✅ Official·KR·JP·ZH·RU·ES·PT·VN·ID 9개(각 구독자 1) · ❌ TR·AR 미생성(TR 저장 버튼 안 눌림 — 공개 주소 개수 한도 추정 · 원문 미확인) → 필요할 때 다른 관리자 계정 또는 기존 채널 주소 정리로. 🪶 Official 설명이 한국어(«HoldemMaster 공식 채널 — …») → 영어 설명으로 교체 권장.

### 부록 A. 채널 주소·이름·설명 (10-15 · 설명 ≤255자)
| 주소 | 채널명 | 설명 |
|---|---|---|
| HoldemMasterOfficial | HoldemMaster Official | Official HoldemMaster channel — new strategy guides, poker tournament schedules, quizzes and events. Bot: @HoldemMasterBot · holdemmaster.com |
| HoldemMasterKR | 홀덤마스터 HoldemMaster | 홀덤마스터 공식 한국어 채널(준비 중) — 새 글·대회 일정·이벤트 소식을 전해 드립니다. 지금은 공식 채널 @HoldemMasterOfficial · holdemmaster.com |
| HoldemMasterJP | HoldemMaster テキサスホールデム | HoldemMaster 公式日本語チャンネル（準備中）— 新着記事・大会スケジュール・イベント情報をお届けします。公式チャンネル：@HoldemMasterOfficial · holdemmaster.com/ja |
| HoldemMasterZH | HoldemMaster 德州撲克 | HoldemMaster 官方中文頻道（籌備中）— 最新攻略文章、賽事日程與活動消息。官方頻道：@HoldemMasterOfficial · holdemmaster.com/zh-hant |
| HoldemMasterRU | HoldemMaster Холдем | Официальный русскоязычный канал HoldemMaster (скоро запуск) — новые статьи, расписание турниров и события. Основной канал: @HoldemMasterOfficial · holdemmaster.com/ru |
| HoldemMasterES | HoldemMaster Póker | Canal oficial de HoldemMaster en español (próximamente): nuevas guías, calendario de torneos y eventos. Canal principal: @HoldemMasterOfficial · holdemmaster.com/es |
| HoldemMasterPT | HoldemMaster Pôquer | Canal oficial do HoldemMaster em português (em breve): novos guias, agenda de torneios e eventos. Canal principal: @HoldemMasterOfficial · holdemmaster.com/pt |
| HoldemMasterVN | HoldemMaster Poker | Kênh chính thức tiếng Việt của HoldemMaster (sắp ra mắt) — bài viết mới, lịch giải đấu và sự kiện. Kênh chính: @HoldemMasterOfficial · holdemmaster.com/vi |
| HoldemMasterID | HoldemMaster Poker | Kanal resmi HoldemMaster berbahasa Indonesia (segera hadir) — artikel baru, jadwal turnamen, dan event. Kanal utama: @HoldemMasterOfficial · holdemmaster.com/id |
| HoldemMasterTR | HoldemMaster Poker | HoldemMaster resmi Türkçe kanalı (yakında) — yeni yazılar, turnuva takvimi ve etkinlikler. Ana kanal: @HoldemMasterOfficial · holdemmaster.com/tr |
| HoldemMasterAR | HoldemMaster بوكر | القناة الرسمية لـ HoldemMaster باللغة العربية (قريبًا) — مقالات جديدة وجدول البطولات والفعاليات. القناة الرئيسية: @HoldemMasterOfficial · holdemmaster.com/ar |

### ① 사장님 준비 안내 (공식 문서 문장 기준 · 10-13)
1. 텔레그램에서 **@BotFather** → `/newbot` → 봇 이름(예: HoldemMaster) · 아이디(…bot으로 끝나야 함) → **봇 토큰**이 나온다(비밀 · 채팅에 붙이지 말고 저에게 «받았다»만).
2. 봇 프로필 사진 = 사이트 로고 권장(공식 «strongly recommend»).
3. **@BotFather 미니 앱**을 열고 → 그 봇 선택 → **Login Widget** → 허용 URL에 `https://www.holdemmaster.com` 과 redirect URI `https://idikicmooauorjurdkzh.supabase.co/auth/v1/callback` 추가.
4. 같은 화면의 **Client ID · Client Secret** 보관.
5. 키 3종은 대화창이 아니라 Supabase 대시보드(②)·Vercel 환경변수(⑧)에 사장님이 직접 넣는 것이 원칙.

## 1. 단계표

| 단계 | 내용 | 주체 | 산출 / 완료 조건 |
|---|---|---|---|
| ① 준비 | 봇 생성(@BotFather) → Login Widget에서 허용 URL `https://www.holdemmaster.com` + redirect URI `https://idikicmooauorjurdkzh.supabase.co/auth/v1/callback` 등록 → Client ID·Secret 확보 · 봇 토큰 | **사장님** | 키 3종(Client ID·Secret·봇 토큰) |
| ② 공급자 등록 | Supabase Auth Providers → New Provider → Auto-discovery(OIDC) · 식별자 `custom:telegram` · issuer `https://oauth.telegram.org` · 스코프 `profile telegram:bot_access` · `email_optional` 켜기 | 사장님(대시보드) 또는 본체(관리 API · service role 사용 허락 필요) | 공급자 목록에 표시 |
| ③ 실측 | 테스트 로그인 1회 → `auth.users`·`identities`에 무엇이 저장되는지 확인 → U1·U2 닫기 | 본체 + 사장님(텔레그램 승인 1회) | 저장 필드 표 |
| ④ DB | `telegram_links` 테이블(회원 ID · 텔레그램 숫자 ID · username · bot_access 허용 여부 · 수신 동의 시각 · 야간 동의 · 차단/해지 시각) + RLS(본인 읽기·동의 수정만, 발송 목록은 service role) | 본체가 SQL 작성 → **사장님 SQL Editor 실행** | 테이블 + 정책 |
| ⑤ 로그인 UI | `/login`에 «텔레그램으로 계속하기» 버튼(Google·카카오 옆) · 콜백에서 텔레그램 신원이면 `telegram_links` 갱신 · 기존 회원은 내 정보에서 «텔레그램 연결»(U2 결과에 따라) | 본체 | 로컬 로그인 성공 |
| ⑥ 수신 동의 | 체크박스(기본 해제) — 광고성 수신 동의 · 야간 수신 동의 분리 · 철회 버튼 · 문구는 U3 원문 인용 뒤 확정 | 본체 | 동의 없이는 발송 목록에서 빠짐 |
| ⑦ 봇 발송 | 서버 라우트: 1:1 메시지 · 단톡방/채널 초대 링크(`createChatInviteLink` 1인용·만료) · 초당 30통 미만 스로틀 · 403(봇 차단) 오면 해지 처리 · 봇을 단톡방/채널 관리자로 넣기는 사장님 | 본체(+사장님 관리자 지정) | 테스트 계정 수신 확인 |
| ⑧ 배포 | Vercel env(`TELEGRAM_BOT_TOKEN` 등) 등록(사장님) → 빌드·푸시 → MB 통지 | 본체 | 라이브 로그인 1회 |

한 실행에 ①~⑧ 전부가 아니다. **이번 승인 범위는 ②~⑤(로그인까지)** 를 제안 — ⑥⑦은 U3와 사장님 답(아래 Q1·Q4) 뒤 별도 회차.

## 2. 사장님께 여쭐 것

- **Q1. 보낼 메시지 성격** — 대회·이벤트 홍보(광고성 → 사전 동의 필수) / 가입·당첨 알림만(정보성) / 둘 다?
- **Q2. 버튼 노출** — 한국어 `/login`만? (현재 로그인 화면은 한국어 하나뿐)
- **Q3. 전화번호(`phone`) 스코프** — 제안: **받지 않는다**(최소 수집 · 목적에 불필요)
- **Q4. 초대 대상** — 단톡방(그룹)인가 채널인가, 몇 개인가 · 언어별로 나누나

### 사장님 답 (10-13)
- Q1 = 대회 홍보(광고성) + 당첨 알림 + **문의 답변**. 계기: 회원이 솔버 제안을 «어디 문의할지 몰라» 솔버 후기창에 남김 → **관리자↔회원 소통 수단이 없다**(현재 `/contact`는 이메일 하나뿐).
- Q2 = **언어별 로그인 페이지가 있어야 한다.** 실측: `/login`·`/login/reset-password` 한국어 하나뿐, 비-KO 페이지 로그인 링크 19곳이 전부 이 한국어 화면으로 간다 → 텔레그램과 별개 결함.
- Q3 = 전화번호 받지 않음(다국어 운영).
- Q4 = 미정 — 채널·그룹 설명 후 결정. 개인 텔레그램 ID 공개·친구 추가 방식 문의 → 비권장(개인 계정 노출·발송 기록 없음·대량 응대 불가)으로 답함.
- ✅ 사장님 결정(10-15): ⑤ 첫 가동 = **자동 알림 + 버튼 FAQ만 · 문의 중계(사장님 직접 답변)는 끔** — 버튼 밖 질문엔 «커뮤니티에 남겨 주세요» 자동 안내. 사장님 답변 시간·지식 부담 없음이 조건. 중계는 나중에 켤 수 있게만.
- 🔴 브랜드 위험: 우리 랭킹 글이 «텔레그램으로만 운영» 을 사기 사이트 신호로 적고 있다(`app/en/ranking/ranking-client.tsx:40`). 텔레그램은 «알림 수단»으로만 쓰고, 사이트 자체를 대체하지 않는다.
- 우선순위 제안(승인 대기): ⓐ 언어별 로그인 → ⓒ 텔레그램 로그인+봇(문의 중계 포함). ⓑ 사이트 1:1 문의함은 사장님 «봇이면 굳이 필요 없다»(10-13)로 뺌 — 텔레그램 안 쓰는 회원은 `/contact` 이메일 유지. 봇 문의 = 회원→봇 메시지를 사장님 텔레그램으로 전달, 사장님이 «답장»하면 봇이 그 회원에게 전달(관리자 화면 불필요). 솔버 후기창 등에 «문의는 여기» 안내 링크 추가.
