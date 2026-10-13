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
- 🔴 브랜드 위험: 우리 랭킹 글이 «텔레그램으로만 운영» 을 사기 사이트 신호로 적고 있다(`app/en/ranking/ranking-client.tsx:40`). 텔레그램은 «알림 수단»으로만 쓰고, 사이트 자체를 대체하지 않는다.
- 우선순위 제안(승인 대기): ⓐ 언어별 로그인 → ⓒ 텔레그램 로그인+봇(문의 중계 포함). ⓑ 사이트 1:1 문의함은 사장님 «봇이면 굳이 필요 없다»(10-13)로 뺌 — 텔레그램 안 쓰는 회원은 `/contact` 이메일 유지. 봇 문의 = 회원→봇 메시지를 사장님 텔레그램으로 전달, 사장님이 «답장»하면 봇이 그 회원에게 전달(관리자 화면 불필요). 솔버 후기창 등에 «문의는 여기» 안내 링크 추가.
