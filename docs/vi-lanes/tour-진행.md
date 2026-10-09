# vi-tour 진행 — 🅴 토너먼트

> 정본 = `docs/vi-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 치환표 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `b57cb658`(10-09 diff 0 확인 · fr 기준 `a54b5f3d`와도 0).
> SERP 입력 = `docs/keyword-bank/vi-serp/L-E-tour.md` + `00-brief.md` + `vi-core-volumes.md`(§2 오염 표기 · §4 판정) — 다시 조사하지 않는다(계획 §2-①).
> 브리프 = **`docs/vi-lanes/tour-brief.md`**(A 산출 · 120KB · B의 유일한 입력 + EN 마스터 읽기 전용 + 틀 `lib/posts-vi/holdem-blind-meaning.ts` 필드 모양만).

> tournament-vs-cash-game은 **기존 편 재작업**(import는 이미 [vi-tour] 칸 안 · 파일만 · «Tournament/Cash Game» 대문자 → giải đấu/cash game). tournament EN FAQ «Is it legal to host…» 삭제 · 카지노 바이인·운영사명 삭제 · tour ≠ tournament 한 줄 · ICM 정의 H2는 holdem-icm만(⑧) · short-stack «push fold là gì» H2 + 도구 링크(⑨) · «bubble là gì»·«short stack»·«icm là gì»·«mtt là gì» 단독 = 오염.

## 상태 — A ✅(10-09 · 브리프 + Fable 카피 1회 · Opus 조정 1) / B ☐ / C ☐ · 커밋 —

## A 결과 (10-09 · 14:05~15:05 · AUTONOMY 90분 안)
- 입력 통독: HARDEN · 계획 §1~§5 · ms §3~§9 · fr §5 · L-E 전문 · 00-brief · vi-core-volumes · EN 5편 전문 · 현 vi vs판 · fr tour 브리프(형식·EN L## 승계) · 계산기 vi 사전(M 존·ICM 라벨) · EN glossary L207(GTD).
- EN 해부 5편(L## 구조·링크·원시 HTML·§13·경험담) · §13 수치 전건 재계산(스크래치 `icm.mjs`: ICM 38,39/32,75/28,86 · 리더 2위 33,93% · deal 617,9/485,0/397,1 · BF 표 · 52,94/42,86 · 43,90 · Seminole 4.592.000/12,54%/14,42%) — EN 오류 0.
- 카피: Fable 서브 1회(Agent model fable · 5편) → Opus 재측정(초과 0) · 조정 1(short-stack H2 4 «first-in») · Fable 판정 채택 3 · 브리프 §1-I.
- 모델: 본체 Opus 5.5 · Fable 서브 1(카피) · 자식 프로세스 0(node 스크립트만).

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-tournament | ✅ | ☐ | ☐ | 링크 편차 2 · FAQ 합법성 → «Buy in poker là gì?» 교체 · 🆕 FAQ GTD·MTT · H3 Option A 카지노 삭제 · L179·L185·L302 운영사명 삭제 · H2 1 끝 tour≠tournament 1문장(현지 추가) |
| holdem-icm | ✅ | ☐ | ☐ | 🆕 FAQ «ICM là viết tắt của từ gì?» |
| holdem-bubble | ✅ | ☐ | ☐ | 🆕 FAQ «Out bubble trong poker là gì?» |
| holdem-short-stack | ✅ | ☐ | ☐ | H2 2 = «push fold là gì» 정의(§3-C ⑨) + 끝 «máy tính push/fold» 앵커 1문장(현지 추가) · 🆕 FAQ «Stack trong poker là gì?» · FAQ L174 운영사명 삭제 · EN 태그 «push fold chart» 버림 |
| holdem-tournament-vs-cash-game | ✅ | ☐ | ☐ | 기존 편 EN 1:1 재집필(`date` 2026-06-11 유지 · readTime 18) · FAQ 세금 → «Có thể rời bàn cash game bất cứ lúc nào không?» 교체 · EN 태그 «ICM poker» 버림 · 구판 본문 이미지 3장·«3 điều cần nhớ» 폐기 |

## 신규 용어 (브리프 §1-B 🆕 · 헤드 머지 때 다른 레인과 대조)
| EN | 채택 vi | 근거 |
|---|---|---|
| MTT | MTT (첫 등장 «Multi-Table Tournament — giải nhiều bàn») | mtt poker là gì 10 · EN L127 |
| prize pool · payout structure · pay jump · min-cash | prize pool (quỹ thưởng) · cơ cấu trả thưởng · pay jump (bậc thưởng) · min-cash (mức thưởng thấp nhất) | 계산기 «quỹ thưởng» 축어 · L-E §7-2 · «cơ cấu giải» = 복권 오염 회피 |
| fee | phí (fee) — rake는 §3-A ④ «rake (phí sòng)» | EN «$100+$9» 자리 |
| GTD | GTD (guaranteed — quỹ thưởng đảm bảo) · «đảm bảo» 1회 | §3-A ④ · EN glossary L207 |
| starting / big / medium / short / avg stack | stack khởi điểm · big stack · medium stack · short stack (stack ngắn 1회) · avg stack (stack trung bình) | wikipoker H2 축어 · L-E 69:9 |
| effective stack | stack hiệu dụng (effective stack — stack ngắn hơn trong hai stack) | 계산기 사전 축어 · §3-A ④ |
| first-in | first-in (người đầu tiên vào pot) | 영어 보존 |
| blind level · structure sheet · clock | level blind (mức blind) → «level» · bảng cấu trúc (structure sheet) · đồng hồ giải (clock) | wikipoker «Cấu trúc tăng blind» |
| late reg · reg end · re-entry · rebuy · add-on | late reg (đăng ký muộn) · reg end (hết hạn đăng ký) · re-entry · rebuy · add-on | AC «reg end trong poker là gì» |
| freezeout · bounty · PKO · mystery bounty · satellite · deepstack · turbo | 영어 원어 + 풀이 · satellite (giải vệ tinh) · PKO (Progressive Knockout — bounty tăng dần) | GG «Đóng băng» 오역 회피 |
| final table · bag · dinner break · seat card · tournament director | bàn chung kết (final table) · đóng túi chip (bag) · giờ nghỉ ăn tối · thẻ chỗ ngồi (seat card) · tournament director (giám đốc giải) | wikipoker H4 «Bàn chung kết (Final Table)» |
| burst · pay the bubble · stone/soft bubble · money/FT/satellite bubble · bust on the bubble | bubble vỡ · trả tiền cho bubble · stone bubble (bubble cứng) · soft bubble · money bubble · bubble bàn chung kết · bubble vệ tinh · «out bubble»(구어) | AC «out bubble trong poker là gì» · pokerbold «out tour» |
| hand-for-hand · stalling · time bank | hand-for-hand (mọi bàn chơi từng ván cùng lúc) · stalling (câu giờ) · time bank | 🆕 · «bubble time» 동치 단정 금지 |
| bubble factor · risk premium · ICM tax | bubble factor · risk premium (phần bù rủi ro) · "thuế ICM" (ICM tax) | 경쟁 코퍼스 0 |
| M zones · orbit | 🟢 Vùng xanh · 🟡 Vùng vàng · 🟠 Vùng cam · ⚠ Vùng đỏ · ⚫ Vùng chết(이름 = 계산기 · 이모지 = EN) · orbit = «vòng (orbit)» — «vòng cược»(street)과 구별 | 계산기 m.zones 축어 |
| bb/100 · hourly · cash rate · low/micro stakes | bb/100 · win rate theo giờ · tỷ lệ vào tiền (ITM) · mức cược nhỏ | 현 vi vs판 축어 |
| reload · rack up · cage · rathole · hit-and-run | reload (mua thêm chip) · xếp chip vào khay · quầy đổi chip (cage) · ratholing (rút chip khỏi bàn) · hit and run | 🆕 |
| pocket jacks · ace-ten · ace-jack · pocket aces | đôi J · A-10 · A-J · đôi Át | §3-A ② |
| 카드 라벨 | Strategy → Chiến thuật · Free Tool → Công cụ miễn phí · Short Stack → Short stack · Blinds → Blind · Positions → Vị trí | §3-A ⑥ 미등재 5 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| holdem-tournament | L191 `/en/blog/apt-incheon-2026-guide`(본문) | 문장 대체 → `/vi/tournaments`(«lịch giải poker» · 계획 §3-C ⑩ 보드 링크 1회) |
| holdem-tournament | L321 `/en/blog/apt-incheon-2026-guide`(readnext) | 대체 → `/vi/blog/holdem-icm`(readnext 3장 유지 · fr·ms 선례) |

## 현지 추가 (B가 집필 후 확인)
- tournament H2 1 직답 끝 tour≠tournament 1문장(브리프 §1-G ②) · 고정문 «đánh tour»(§1-G ① · tournament·vs-cash 1회씩) · 🆕 FAQ 5(tournament 2 · icm 1 · bubble 1 · short-stack 1) · short-stack H2 2 끝 «máy tính push/fold» 앵커 1문장.

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- holdem-icm.ts:L183·L238 | readnext·그리드 카드 제목 «Texas Hold'em Tournament Strategy» ≠ 대상 글 title «How Poker Tournaments Work…» | ms·fr 선례 승계 · vi는 대상 vi title로 씀

## 헤드 요청
- (없음 — 머지 때 신규 용어 표 대조만)

## 미결
- B: 다른 레인 글 카드 제목은 **임시**(브리프 §1-D 목록) → C에서 머지된 vi 파일 title로 교체.
- 신규 4편 `date`는 B 집필일 → 헤드가 배포 회차에 배포일로(계획 §4-C ④).
- short-stack FAQ L174 운영사명(GGPoker «All-in or Fold») 삭제 = 레인 판단(§3-C 운영사명 삭제 원칙 확대 적용) — 헤드가 머지 때 다른 레인 처리와 맞춘다.
