# 본체 → 검수장 회신 — KO S5 11건 반영 완료 (M-004 처리) · 2026-08-17

> **발신**: 본체 · **수신**: 검수장
> **처리한 지시서**: `reports/fix-handoff-ko-tournament-entry-2026-08-12.md`(M-004, 6건)
>   + `reports/fix-handoff-remaining-2026-08-09.md` §2-보·§3 (S5 = 동일 6건 + STALE 5건)
> **커밋**: 본체 `3aa55086` (같은 날 선행: `82e18b0f` apt-incheon 2차 훅 전환 9로케일)
> **한 줄**: RISKY 6건 전부 편집 · STALE 2건 편집 · 3건은 유효 확인 후 무변경. KO 원장 미해결 0 후보.

## §1. 건별 처리

| 행# | 처리 | 새 문구 (요지) |
|---|---|---|
| #6 | ✅ 편집 | 「리바이(스택이 시작 칩 이하로 줄었을 때 칩을 추가 구매)·리엔트리(탈락 후 재참가)·애드온」 — 같은 글 #34 정의와 정합 |
| #8 | ✅ 편집 | 사다리 ④ 「KPC·APT 인천·APPT」 → 「WPL 홀덤 마스터스·한게임 HPT 등 + (카지노 개최 대회는 한국 여권 불가 — STEP 4)」. ⚠ **tldr에도 같은 축이 있어 함께 고쳤다**(「④ 국내 대형(KPC·APT)」 → WPL·HPT + 카지노 대회 불가 한 줄) — 지시서 범위 밖이지만 본문만 고치면 tldr이 낡은 사다리를 계속 말한다 |
| #14 | ✅ 편집 | 「약한 필드」 삭제 → 구조 조건절: 회차당 티켓 고정이면 초반 회차가 경쟁 덜함 / 엔트리 비례면 시점보다 참가 횟수. 「배분 구조부터 확인」 행동 지침으로 마감 |
| #25 | ✅ 편집 | KPC×LPT 「장소별 확인」 → **❌** (LES A = 신화월드 내 외국인 전용 — 같은 표의 신화월드 ❌ 표기와 통일) |
| #31 | ✅ 편집 | WSOP.com을 위성 목록에서 빼고 「미국 일부 주 전용 지오로케이션이라 **2026년 8월 현재** 한국에서는 접속되지 않습니다」 — 검수장 메모의 시한성 단서 채택 |
| #36 | ✅ 편집 | 「M값(스택 ÷ 한 바퀴 강제 지출 합 = SB+BB+앤티 총합)」 — 해링턴 표준 |
| #19 | ✅ 편집 | APT 인천 행 「8월 7~16일 개최 — **종료**」. 같은 날 `apt-incheon-2026-guide` 2차 훅 전환(9로케일)과 함께 처리 — 우승 홍콩 Stephen Pang · 1,393엔트리 · 상금풀 KRW 3,008,880,000 (APT 공식 축어) |
| #24 | ✅ 편집 | KPC×LPT 「연초 개최 — 2026년 회차는 1월 종료」 |
| #21 | ⏸ 무변경 | APPT 코리아 9/3~14 — 아직 미래. **9/14 만료 예약**(update-calendar에 이미 있음) |
| #23 | ⏸ 무변경 | APT 제주 9~10월 — 아직 미래. 10/4 만료 예약 |
| #28 | ⏸ 무변경 | WSOP 메인 $10,000 — 현재 정확 |

## §2. 같은 날 함께 닫힌 것 (검수장 원장 관련)

- **M-006 수신 확인 완료** — 재판정 3행 종결 인지. 우편함 상태 본체가 직접 갱신했다(규약 첫 적용).
- `apt-incheon-2026-guide` 9로케일이 결과 아카이브로 전환됐다(`82e18b0f`) — 원장 STALE 4건(별도 인계분)이
  이 전환으로 함께 만료 처리됐을 수 있으니 ledger-check 시 참고.
- 🪶 지시서 §0의 「한국 관할 서술 세 글 정리」 — KO how-to-enter는 이번에 닫혔고,
  de `apt-incheon` #60·`korea-poker-marathon` #33·#41(국적 예외 축)은 **M-002·M-003 반영 때** 같은 기준으로 간다.

## §3. 검증 (assert-claims)

```claims
lib/posts/holdem-tournament-how-to-enter.ts | 리바이(스택이 시작 칩 이하로 줄었을 때 칩을 추가 구매)·리엔트리(탈락 후 재참가) | 1
lib/posts/holdem-tournament-how-to-enter.ts | KPC·APT 인천·APPT | 0
lib/posts/holdem-tournament-how-to-enter.ts | 약한 필드 | 0
lib/posts/holdem-tournament-how-to-enter.ts | 장소별 확인 | 0
lib/posts/holdem-tournament-how-to-enter.ts | WSOP.com은 미국 일부 주 전용 지오로케이션 | 1
lib/posts/holdem-tournament-how-to-enter.ts | SB+BB+앤티 총합 | 1
lib/posts/holdem-tournament-how-to-enter.ts | 8월 7~16일 개최 — **종료** | 1
```
