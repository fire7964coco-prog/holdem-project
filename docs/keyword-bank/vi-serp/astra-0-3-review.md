# 아스트라 0-3 교차 보고 (2026-10-08 · codex gpt-6-astra read-only · 입력 = vi-cluster-plan.md §3 초안 사본 · 판정·반영 = 계획 §3-E)

> 아스트라 출력 원문 그대로. 본체 판정(채택·기각)은 `docs/vi-cluster-plan.md` §3-E가 정본이다. 인용 URL은 본체가 7건 중 5건을 직접 열어 축어를 확인했다(ggpoker equity · wikipoker spr 2건은 페이지 텍스트에서 해당 구를 못 찾았고 표준 정의로 판정).

행 번호는 `DRAFT-sec3.md` 기준입니다. **표기 통일이라는 편집 선택과, 현장 용례·개념에 관한 사실 오류를 구분했습니다.** 직접 열린 원문만 인용했으며, 검색량·사용 빈도와 하노이·호치민의 구어 우세는 별도로 입증하지 않았습니다.

## A. 반박 (틀렸다고 확신)

| # | 초안 자리(§·행) | 초안 표기 | 문제 | 근거(축어 + URL) | 대안 |
|---|---|---|---|---|---|
| 1 | §3-A ④·56행 | 산문 동사 `theo` 금지 — 전치사와 섞여 오독 | **동사 용법 자체를 부자연스럽다고 배제하는 근거가 틀렸다.** 목적어·조건절이 있는 문장에서 포커 동사임이 분명하다. `call`과 `theo cược`만 비교하면 `theo`, `theo bài`를 놓친다. | “Nếu họ không dám theo vì số tiền khá lớn, họ sẽ Bỏ Bài.” — [Thế Giới Poker](https://thegioipoker.vn/choi-poker-nhu-nao/) | 정본은 `call`로 두더라도 산문에서 `theo`, `theo cược`, `theo bài` 허용. 빈도는 문맥을 읽어 재집계. |
| 2 | §3-A ②·29행; §3-C·147행 | `xì tố`·`xì phé`는 다른 게임, 곧 5장 게임 | **명칭과 변형을 일대일 대응시키면 안 된다.** 베트남어 포커 원문에서도 Hold’em을 `xì tố`의 변형으로 부른다. 뒤의 별칭 설명과 앞의 단정도 충돌한다. | “Poker No Limit Hold’em là một biến thể xì tố phổ biến” — [Wiki Poker](https://wikipoker.net/luat-choi-poker/) | `Tên gọi xì tố/xì phé được dùng không thống nhất; bài này chỉ nói về Texas Hold’em, mỗi người nhận hai lá bài tẩy.` 5장 변형은 별도로 명시. |
| 3 | §3-A ③·41행 | `bộ ba`는 set/trips를 못 가르므로 풀이 1회만 | **상위 족보명에 하위 구성 방식의 구별을 요구한 논리 오류다.** `sám cô` 역시 그 자체로 set/trips를 구분하지 않는다. | “Trip và Set đều là bộ ba” — [Wiki Poker, Trip와 Set 비교](https://wikipoker.net/cach-choi-trip/) | `sám cô` 정본 선택과 `bộ ba`의 산문 허용을 분리. set은 포켓페어+보드 한 장, trips는 홀카드 한 장+보드 페어라고 정확히 정의. |
| 4 | §3-A ④·82행 | `equity (tỷ lệ thắng)` | **무승부 지분이 빠진다.** 항상 둘이 나눠 먹는 상황은 단독 승리 확률 0%여도 equity는 50%다. 계산기와 연결하는 정본에서는 특히 위험하다. | “equity cũng bao gồm xác suất thắng một phần chia” — [GGPoker 공식 용어집, Equity](https://ggpoker.com/vi/poker-basics/poker-terms/) | `equity (phần pot kỳ vọng được hưởng, tính cả trường hợp chia pot)`; `tỷ lệ thắng`는 win probability에 사용. |
| 5 | §3-A ④·85행 | `SPR (tỷ lệ stack/pot)` | 정의로는 **effective가 빠졌다.** 자신의 전체 스택을 분자로 넣는 오독을 만든다. | “effective stack size chia cho size của pot” — [Wiki Poker, SPR](https://wikipoker.net/spr-la-gi/) | `SPR (tỷ lệ stack hiệu dụng trên pot)`; 해당 시점의 남은 유효 스택을 쓴다고 설명. |
| 6 | §3-A ④·87행 | `người cược cuối cùng (last aggressor)` | 마지막 bet만 가리키거나 마지막으로 돈을 넣은 사람까지 포함한다고 읽힐 수 있다. **마지막 bet 또는 raise를 한 사람**이라는 핵심을 고정문에서 밝혀야 한다. | “người cuối cùng đặt cược hoặc tố” — [GGPoker, showdown 설명](https://ggpoker.com/vi/poker-basics/how-to-play-omaha-poker/) | `người bet hoặc raise cuối cùng`; 쇼다운 순서 설명이면 `ở vòng cược cuối` 등 적용 범위도 명시. |
| 7 | §3-A ⑥·101행 | Tiebreaker → `Luật hòa bài` | **동급 족보 사이에서 승자를 가르는 규칙을 무승부 규칙으로 바꿨다.** 같은 trips라도 kicker로 승패가 갈린다. | “QJ của bạn (với kicker Q) sẽ thua bài KJ (kicker K)” — [Wiki Poker](https://wikipoker.net/cach-choi-trip/) | 짧게 `So bài cùng hạng`; 설명형은 `Cách phân định thắng thua khi cùng hạng bài`. 실제 무승부·팟 분배는 `Hòa bài và chia pot`. |
| 8 | §3-A ⑤·99행 ↔ §3-C ⑥′·127행 | 글 링크·카드 제목에 `bảng` 전면 금지 | **`bảng`는 도구 전용 표지가 아니다.** 정적 표를 포함한 해설에도 쓰인다. 초안 자체도 `bảng xếp hạng bài`를 족보 글에 배정했다. | “Bảng xác suất xuất hiện các thứ hạng bài trong Poker” — [Wiki Poker의 족보 해설](https://wikipoker.net/thu-hang-poker-hand/) | 단어 금지 대신 **경쟁하는 검색 의도**를 제한. 족보표·확률표를 실제로 제공하는 글은 `bảng` 허용. |

## B. 보류 (근거 부족 · 본체가 재확인할 것)

| # | 초안 자리(§·행) | 초안 표기 | 문제 | 근거(축어 + URL) | 대안 |
|---|---|---|---|---|---|
| 1 | §3-A ③·41행 | `xám` 폐기, `sám cô` 정본 | `xám`은 실제 포커 용어다. 다만 용례가 있다는 사실만으로 `sám cô`로 통일하는 편집 결정을 틀렸다고 할 수는 없다. **오자 판정인지 스타일 통일인지** 구분해야 한다. | “Xám (bộ 3)” — [Wiki Poker의 전용 해설](https://wikipoker.net/sanh-thang-xam/) | 정본은 유지하되 `xám`을 인정 별칭으로 기록. `xám cô`의 철자 우열은 별도 검증. |
| 2 | §3-A ③·35행; §3-D·158행 | `sảnh rồng`·`sảnh chúa` 별칭; `Sảnh Thượng` 폐기 | `sảnh rồng`·`sảnh chúa`에는 **홀덤 royal 용례가 있다.** 다른 게임에서도 쓰인다는 이유만으로 홀덤 비표준이라고 할 수 없다. 반면 확인된 `thùng phá sảnh thượng`은 단독 `Sảnh Thượng`의 증거가 아니다. | “Royal Flush – Sảnh Rồng”, “thùng phá sảnh thượng, sảnh chúa” — [Wiki Poker](https://wikipoker.net/thu-hang-poker-hand/). 다른 카드게임 설명에는 “Sảnh rồng (sảnh 10 lá)” — [ZingPlay](https://play.zing.vn/detail-games/chi-tiet.crazy-tien-len.84.html) | 별칭 뒤에 **10–J–Q–K–A cùng chất**를 붙여 의미 고정. 단독 검색어 소유 여부와 용어의 유효성을 분리. |
| 3 | §3-A ④·57·64·65행 | `tố` 금지; blind/SB/BB 영어 우선 | `tố`의 bet/raise 혼용은 확인된다. 그렇다고 모든 산문에서 제거해야 한다는 결론은 나오지 않는다. 블라인드도 두 계열의 실제 사용 비율은 이번 조사로 확정 불가. | 같은 원문의 “tố (bet)”, “tố thêm (raise)” — [Wiki Poker](https://wikipoker.net/luat-choi-poker/); “mù nhỏ và mù lớn” — [GGPoker](https://ggpoker.com/vi/poker-basics/how-to-play-omaha-poker/) | 액션 구분이 중요한 예제는 bet/raise 유지. 산문 `tố`, `tố thêm`은 의미가 명확할 때 허용. blind는 영어 정본+설명형 `cược bắt buộc`가 가능하지만 구어 우세라고 단정하지 말 것. |
| 4 | §3-A ④·62행; §3-C ⑫·133행 | `hồi mã thương` 금지 — 오염 | **포커 밖에서만 쓰는 말이라는 취급은 반증된다.** 다만 전략 정본으로 채택해야 한다는 증거까지는 아니다. | “Check raise (Hồi mã thương)” — [Wiki Poker](https://wikipoker.net/check-raise/) | `check-raise` 정본 유지. 금지 이유를 검색 오염·문체 선택으로 한정하고, 포커 용례 자체를 부정하지 말 것. |
| 5 | §3-A ④·81행 | `sảnh hở hai đầu`, `sảnh hở giữa`; `cửa chờ` 폐기 | 의미는 전달되지만 계산기 번역을 현장 정본으로 확장할 근거가 약하다. 다른 해설에는 더 짧은 표현이 나온다. 어느 쪽이 우세한지는 미확인. | “draw sảnh hai đầu và sảnh khe” — [Wiki Poker](https://wikipoker.net/do-phu-mat-bai-trong-poker/) | `draw sảnh hai đầu (OESD)`, `gutshot (chờ sảnh khe)`를 후보로 비교. `bài chờ`는 핸드, `mua/chờ`는 동작이라는 차이도 기록. |
| 6 | §3-A ④·82행 | `tỷ lệ pot`, `tỷ lệ cược ngầm` | 틀린 번역이라고 확정할 자료는 부족하다. 다만 초보자에게 무엇과 무엇의 비율인지 설명하지 못한다. **번역어보다 계산 정의가 우선**이다. | “Phương pháp tỷ lệ”, “Phương pháp phần trăm” — [Wiki Poker, Pot odds](https://wikipoker.net/pot-odd/) | 영어를 유지하고 pot odds는 팟·콜 비용의 관계, implied odds는 이후 추가로 얻을 수 있는 금액을 고려한 개념이라고 풀이. |
| 7 | §3-A ④·85행 | `range … tuyến tính (merged)` | linear/merged를 무조건 오역이라고 지적하면 오탐 위험이 있다. 현지 원문에도 같은 대응이 있다. 다만 솔버 글에서 두 개념을 엄밀히 구분할지 확인해야 한다. | “Merged Range: Range tuyến tính” — [Wiki Boardgame](https://wikiboardgame.net/thuat-ngu-poker/) | 원문 EN이 linear면 `range tuyến tính (linear)`, merged면 우선 `merged range`로 보존하고 정의를 붙일 것. |
| 8 | §3-A ④·85행 | `size bet lũy tiến (geometric sizing)` | `size bet lũy tiến`이라는 실제 용례는 있다. 그러나 그것만으로 **매 스트리트 같은 팟 비율을 사용하는 geometric sizing**과 정확히 일치한다고 입증되지는 않는다. | “nguyên tắc về size bet lũy tiến” — [Wiki Poker, Bet sizing](https://wikipoker.net/bet-sizing/) | 원문의 sizing 정의를 확인. 필요한 경우 `geometric sizing — giữ cùng tỷ lệ cược so với pot qua các vòng`처럼 원리를 풀어 쓸 것. |
| 9 | §3-A ④·70·85행 | hand=`tay bài`; check-back=`check lại` | 일괄 치환하면 문맥이 사라진다. hand는 한 판을 뜻할 수도 있고, check-back은 단순히 “다시 check”한다는 뜻보다 구체적이다. 실제 치환 대상 문장이 없어 오류 확정은 보류. | Hand history 설명의 “ván bài đã chơi” — [GGPoker](https://ggpoker.com/vi/poker-basics/poker-terms/); “Bạn check. BU check.” — [Wiki Poker의 check-back 예제](https://wikipoker.net/check-back-probe-bet/) | 패·조합은 `tay bài/hand`, 한 판은 `ván bài`. check-back은 영어 유지+`check sau khi đối thủ đã check`로 설명. |
| 10 | §3-A ②·23·25행 | `1.326`, `43,8%`, `2,5 BB`; `đôi Át`; 무늬 명칭 | 숫자 형식이 틀렸다는 반박 근거는 없다. 다만 **베트남 포커의 단일 조판 관행**이라고 주장할 수는 없다. 원문에는 소수점 마침표도 있다. 카드 명칭의 남북 구어 우열도 미확인. | “54.912”, “4,83%” — [Wiki Poker](https://wikipoker.net/sanh-thang-xam/); “BU raise 2.25BB.” — [다른 Wiki Poker 글](https://wikipoker.net/check-back-probe-bet/) | 사이트 조판 규칙으로 명시. 코드·앱 입력값·원본 핸드 기록까지 기계적으로 현지화하지 말 것. |
| 11 | §3-A ①·13–19행; ⑥·101행 | 고정문, `tôi/bạn`, `Bài nền tảng`, `Tỷ lệ & toán` 등 | 기본 고정문을 오류로 볼 근거는 없다. 문제 후보는 `Tỷ lệ & toán`의 의미가 넓고 생략이 많다는 점, `Bài nền tảng`가 독자에게 무엇을 약속하는지 불명확하다는 점이다. **교열 선호 수준**이므로 보류. | “Toán học trong poker” — [Wiki Poker](https://wikipoker.net/pot-odd/); “Câu hỏi thường gặp”, “Bài viết liên quan” — [Wiki Poker](https://wikipoker.net/spr-la-gi/) | 후보: `Xác suất & toán poker`, `Kiến thức nền tảng`, `Hướng dẫn cho người mới`. 나머지 고정문을 억지로 교체할 이유는 없음. |
| 12 | §3-A ⑤·94–97행 | `máy tính xác suất poker`, `bảng bài khởi đầu theo vị trí`, `lịch giải poker` | 자연스러움의 확실한 오류는 못 찾았다. 다만 핸드차트가 단순 시작패 목록인지, 액션 빈도까지 보여주는 range chart인지에 따라 앵커가 달라져야 한다. | “Bảng range 100bb” — [GTO Gecko의 베트남어 해설](https://gtogecko.com/vi/blog/gto-preflop-strategy) | 액션·빈도 차트라면 `bảng range preflop theo vị trí`도 검토. 실제 도구 기능 확인 전 정본 변경은 보류. |
| 13 | §3-C 원칙·117행, ①·121행 | `thuật ngữ poker`는 도구가 주인 | **용어집 수요와 도구 수요를 동일시할 근거가 부족하다.** 해설형 A–Z 글도 같은 표현을 쓴다. 도구 배정은 사이트 정책일 수 있지만 베트남 검색 관습에서 필연적으로 나오지는 않는다. | “Thuật ngữ Poker” — [Wiki Poker의 A–Z 해설](https://wikipoker.net/thuat-ngu-poker/) | 검색·필터가 있는 사전 허브로 통합할지는 콘텐츠 설계로 결정. 단지 도구라는 이유로 해설 페이지에서 핵심어를 제거하지 말 것. |
| 14 | §3-C ④·124행 | nuts → `holdem-reading-the-board` | 이 배정이 틀렸다는 반박은 **보류**한다. 실제 정의가 보드와 연결된다. 사전으로 옮겨야 한다는 주장도 별도 검색 의도 증거가 필요하다. | “hand khỏe nhất có thể có trên mặt bài” — [Wiki Poker, Nuts](https://wikipoker.net/thuat-ngu-poker/) | 정의·nuts 찾기·보드 변화 예제가 해당 글에 있으면 유지 가능. 용어집에서 바로 그 절로 연결. |
| 15 | §3-C ⑪–⑬·132–134행 | GTO·range 정의까지 solver 소유; check-raise·SPR은 특정 보드/팟 글 소유 | 정보형 정의와 도구 사용형 의도가 섞여 있다. 특히 low-board, 3-bet-pot은 개념 전체보다 좁다. 다만 열린 글 사례만으로 최적 소유 페이지를 확정할 수는 없다. | “Chiến thuật GTO là gì?” — [Wiki Poker](https://wikipoker.net/gto-la-gi/); “Định nghĩa SPR trong Poker” — [Wiki Poker](https://wikipoker.net/spr-la-gi/) | 정의형과 도구형을 분리해 재검토. 특정 전략 글을 임시 주인으로 삼으면 일반 정의·적용 범위·다른 상황 링크를 먼저 갖출 것. |
| 16 | §3-A ④·78행; §3-C·144행 | `đánh tour` 허용, 동시에 `tour ≠ tournament` 한 줄 | 공식 대회 시리즈명 Tour와 구어 `đánh tour`를 구별해야 한다. 단순 부등호 문장은 초안이 허용한 구어를 다시 틀렸다고 가르칠 수 있다. | “Kinh nghiệm đánh tour poker”, “một poker tournament” — [Wiki Poker의 같은 글](https://wikipoker.net/kinh-nghiem-danh-tour-poker/) | `Trong cách nói thông thường, đánh tour nghĩa là chơi giải đấu.` 공식 고유명 Tour의 의미는 해당 문맥에서만 설명. |
| 17 | §3 서두·4–5행 | 공식 /vi·해설 코퍼스로 현장 우세 판단 | 공식 사이트라는 이유만으로 자연스러운 베트남어 표본이 되지는 않는다. 명백한 직역도 섞여 있다. 원문별 번역 품질·중복·문장 용법을 확인하지 않은 합산은 재검증 대상이다. | “một người mù nhỏ”, “Một bộ đồ thẳng của cùng một bộ đồ.” — [Natural8 공식 베트남어 용어집](https://www.natural8.com/vi/poker-terms-definitions) | 자연스러운 용례와 번역 오류를 구분한 뒤 재집계. Facebook·라이브 대화·자동 번역된 Reddit을 같은 층위의 표본으로 취급하지 말 것. |

## C. 초안에 없는데 51편에 필요한 용어 (베트남 현장 관용 표현)

아래는 **원문에서 확인된 추가 표기**이며, 전국적 사용 빈도 순위는 아닙니다.

| 용어(EN) | 현장 표기 | 근거(축어 + URL) |
|---|---|---|
| Effective stack | `stack hiệu dụng` | “Stack hiệu dụng hay Effective stack size” — [Wiki Poker](https://wikipoker.net/stack-hieu-dung/) |
| Value bet / thin value | `value bet`, `bet lấy value`, `thin value` | “muốn đối thủ call với bài yếu hơn” — [Wiki Poker, Thin value](https://wikipoker.net/thin-value/); “bet lấy value” — [Wiki Poker](https://wikipoker.net/do-phu-mat-bai-trong-poker/) |
| Set mining | `mua set` | “mua set với các hand đôi” — [Wiki Poker](https://wikipoker.net/mua-set-poker/) |
| Flush draw — 추가 동사·구어 | `mua thùng`, `draw thùng` | “bài mua thùng (hay draw thùng)” — [Wiki Poker](https://wikipoker.net/pot-odd/) |
| Combination / combo | `combo`, `tổ hợp bài` | “Combo: Tổ hợp bài.” — [Wiki Poker 용어집](https://wikipoker.net/thuat-ngu-poker/) |
| Board pairs — 추가 동사·구어 | `chập mặt`, `turn chập mặt` | “khi turn chập mặt” — [Wiki Poker](https://wikipoker.net/check-back-probe-bet/) |
| Capped range | `capped range`, `range bị giới hạn` | “Capped Range: Range bị giới hạn” — [Wiki Boardgame](https://wikiboardgame.net/thuat-ngu-poker/) |
| Board coverage | `độ phủ mặt bài` | “Độ phủ mặt bài” — [Wiki Poker의 전용 해설](https://wikipoker.net/do-phu-mat-bai-trong-poker/) |
| Exploit / exploitative strategy | `exploit`, `khai thác đối thủ`, `chiến lược khai thác` | “Exploit (khai thác đối thủ)” — [Wiki Poker](https://wikipoker.net/gto-la-gi/) |
| Bankroll | `bankroll`, `quỹ tiền chơi poker` | “Bankroll (Quỹ tiền chơi poker)” — [Wiki Boardgame](https://wikiboardgame.net/thuat-ngu-poker/) |
| Suited connectors | `suited connectors`, `hai lá bài liên tiếp cùng chất` | “Hai lá bài liên tiếp cùng chất” — [Wiki Boardgame](https://wikiboardgame.net/thuat-ngu-poker/) |

## D. 한 줄 총평

**가장 먼저 고칠 것은 베트남어 동사 금지의 근거와 equity·SPR·last aggressor·tiebreaker의 정의이며, 검색어 소유권은 차용어 빈도나 ‘도구’라는 분류만으로 확정하면 안 됩니다.**
