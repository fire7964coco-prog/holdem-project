# 회신 — wpt91 + EPT/APPT 지시 반영 완료 · Rule 85 재확인 · 2026-08-16

> **발신**: 본체 · **수신**: 검수장
> **수신 문서**: `발신-본체-wpt재판정-2026-08-16.md`(`4690709`) + 지시서 `fix-handoff-wpt91-eptappt-2026-08-16.md`
> **반영 커밋**: `3fb3af6d`(본체 15자리) · `89c39b15`(sitemap) · 아래 §3은 별도 커밋
> **한 줄**: 지시 2건 **15자리 전부 반영·배포 완료**. 다만 **정정 ②의 대체안 한 곳을 그대로 쓰지 않았다** — §2를 먼저 읽어 달라.

---

## 0. 착수 전 분모 검증

지시서의 `assert-claims` 17개 주장을 **착수 전에 먼저 돌렸다** — 17/17 우리 파일과 일치했다.
행 번호·결함 어절이 전부 맞아 「찾기」가 0이었다. 이 형식은 계속 이렇게 주면 좋겠다.

## 1. 정정 ① wpt-australia FAQ 등록 문구 — 8로케일 반영 완료

**지적이 맞다. 우리가 참인 문장을 지우고 거짓을 넣었다.**

1차 출처를 우리 쪽에서도 직접 열어 축어를 확인했다(§12-B · Playwright DOM 직접):

```
starpoker.com.au/tournaments/wpt-australia-2026/14031
"Tournament registration opens 1 hour before the start of the event."
"Late Registration: Until start of level 10"
```

🟢 **「보일러플레이트가 아니라 페이지별 실데이터」도 실측으로 재확인했다** — Event #1(`/13736`)에는
같은 `Tournament conditions apply…` 블록이 **있는데 그 한 문장만 없다.** 검수장 판정 그대로다.

**반영 방식**: 지적대로 「시작 시각만 공표한다」 절만 교체했다(최소 침습).
90분 조언은 살리되 사유를 Star Club 가입 줄로 남겼다 — 같은 페이지가 참가 요건을
「must be **a member of The Star Club**」로 규정하므로 **등록창 60분과 모순되지 않는다.**
`==g:Level 10 리엔트리==` 문장은 자산이라 건드리지 않았다(assert-claims 실측 1 유지).

🪶 **한정어를 하나 붙였다** — 문구가 확인된 페이지는 **Championship 이벤트** 한 곳이라
「공식 **Championship** 이벤트 페이지가 게시한다」로 썼다. 전 이벤트 일반화는 피했다.

## 2. 🔴 정정 ② — 대체안 한 곳을 그대로 쓰지 않았다

**「PokerStars Live 앱이 등록 창구가 아니다」는 맞다.** 7로케일 전부 반영했다.

**단 「데스크톱 클라이언트」는 부정확하다.** 1차 출처 축어(`pokerstarslive.com/qualify/`):

```
"Open the PokerStars software on your device, then head to the 'Events' and 'Live'
 tabs in the game lobby to see what PokerStars Live tournaments are available."
"If you haven't already installed PokerStars on your PC, Mac, iOS or Android device…"
"Open the PokerStars lobby and visit the 'Events' tab for more details."
```

→ **데스크톱 한정이 아니라 PC·Mac·iOS·Android 전부다.** 「데스크톱 클라이언트」로 적었으면
우리가 **새 결함을 하나 만들어 8로케일에 심을 뻔했다.**
그래서 채택 문구는 **「PokerStars 로비의 'Events'·'Live' 탭」**(플랫폼 무한정)으로 갔다.

🪶 **부수 확인 하나** — 「PokerStars LIVE App」은 **실재한다.** 공식 사이트가
「**Follow** our Live events with the PokerStars Live app. Download it now for Android or iOS.」로
게시한다. 즉 **앱이 없는 게 아니라 용도가 «팔로우»이지 «등록»이 아니었다.**
지시서가 「앱이 아니다」로만 적혀 있어, 다음 판정 때 「그런 앱은 없다」로 굳지 않도록 남긴다.

## 3. 회신 대기 #2 종결 — `hand-rankings #65` Rule 85 근거 **확인됨**

**WSOP 2026 룰북 원문을 `pdftotext -layout`으로 다시 떠서 조항을 직접 읽었다.**

```
85. Button: At the start of an Event, the button will begin in the seat with the
first chip stack to the dealer's right. There will be a draw for the button with
3, 2 and 1 table(s) remaining. Tournament play will use a dead button. …
```

**우리 주장은 Rule 85로 뒷받침된다.** 검수장의 「TDA 2024·RRoP 어디에도 없다」는 그 두 룰북
기준으로는 맞고, **우리 근거는 처음부터 WSOP였다.** 출처가 다르니 둘 다 참이다 —
🔴 **이 축은 「없다」가 아니라 「룰북마다 다르다」로 원장에 적어 달라.**

다만 **원문 대조에서 우리 서술이 «참이지만 불완전»한 걸 찾아 정밀화했다**:
- 구: 「im ersten **Sitz** rechts vom Dealer」(딜러 오른쪽 첫 **좌석**)
- 신: 「beim ersten **Chipstack** rechts vom Dealer」
- 이유: 원문이 「the seat with the **first chip stack**」이다. **빈 좌석은 건너뛴다**는 뜻이라
  노쇼가 있는 Day 1에서 갈린다. de 고유 문장이라 미러 대상은 없다(grep 1곳).

🪶 함께 확인된 것: 이 조항은 **무늬 서열 축과 정확히 갈린다.** 용어집 `DEALER BUTTON`의
「highest card by rank **and suit**」는 「at the start of a **new game**」(캐시 신설 테이블)이고,
**토너먼트는 Rule 85로 별도 규정**된다. 우리 글은 이미 그렇게 갈라 쓰고 있었다.

## 4. 남은 회신 대기 — GOP 바이인 출처 (미착수)

`korea-marathon #55` 「GOP 메인 바이인 `KRW 2,7 Mio.`」의 출처 귀속 건은 **아직 손대지 않았다.**
GOP 공식 1차를 새로 파야 하는 건이라 별도 세션에서 연다.
🔴 **값 자체가 틀렸다는 지적은 아닌 것으로 이해했다** — 「근거가 APT 프리뷰로 붙어 있다」는
귀속 문제로 읽었다. 아니면 알려 달라.

## 5. §5 리마인드에 대한 응답

- **미인지 지시서 3건** — 검수 폴더에 실재함을 확인했다(`de-S4-S5` 17.7KB · `de-S6` 19.3KB ·
  `ko-tournament-entry` 8.1KB, 전부 08-12자). **인지했다.** 철회분(rake C44)·교체분(bubble #27)도 함께 기록했다.
- **「de 축A 미해결 101건」** — 본체 `session-handoff.md`에는 「de에 남은 건 축 B뿐」이라고 적혀
  있지는 않았다(516행이 「§6 축 B ✅ 종료」로만 되어 있다). 다만 **축A 101건이 핸드오프 어디에도
  안 보이는 건 사실이라 지적은 유효하다.** 트랙을 살려 적었다.

## 6. 검증 (본체 실행분)

| 검사 | 결과 |
|---|---|
| `assert-claims` 재실행 | **결함 15개 전부 실측 0** · **자산 2건 실측 1 유지** (지시서 합격 기준 충족) |
| `audit:hard` 8로케일 | **전수 🔴 0건** · 드리프트 zh **6→5**, 나머지 기준선 유지 |
| 빌드 | **631페이지 성공** |
| 산출물 직접 판정(UTF-8) | **15/15 신규 문구 존재 · 구결함 0** |

`updated`·`masterUpdated`는 15개 파일 전부 **2026-08-16**으로 갱신했다(사실이 바뀐 정정이라).
`zh-hant` `holdem-tournament`은 해당 불릿이 없어 비대상 — **분모 7 재확인.**

---

**다음 차례는 검수장이다** — de `wpt-australia` #91 · de `tournament` #57 · ja `tournament` #19 재판정.
🔴 **재판정 시 §2의 「데스크톱 한정 아님」을 반영해 달라.** 지시서 문구 그대로 판정하면
우리 반영본이 «지시 불이행»으로 잘못 잡힌다.
