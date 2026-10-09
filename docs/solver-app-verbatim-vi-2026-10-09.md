# 솔버 앱 베트남어 화면 축어 — `solver.holdemmaster.com/?lang=vi` (2026-10-09 라이브 실측)

> 추출 = 2026-10-09 본체 세션 · Playwright(레포 `playwright` · 1440×1000 · `locale: vi-VN`) 2회 — ① 홈·Spot mẫu·Trainer·Hướng dẫn `innerText` ② Spot mẫu 첫 스팟 «⚡ Xem kết quả» 뒤 결과 화면 `innerText`.
> 대조 = 솔버 소스 `../클로드-프로그램만들기/solver/src/presets.ts`(titleVi·categoryVi·oopLabelVi·ipLabelVi) + `components/{SideBar,NavBar,PresetsPage,TrainerPage,GuidePage,ResultTable,ResultMiddle,BoardSelector,RunSolver,AboutPage}.vue` vi 블록 → **전부 일치**.
> 용도 = `/vi/solver` 랜딩 라벨(이 날 신설) · vi 클러스터 🅶 GTO 13편 레인(«Spot mẫu → <titleVi> → [⚡ Xem kết quả]» 꼴 · 계획 `docs/vi-cluster-plan.md` §5 «🅶 A 앞» 행).
> 🔴 **S-043(vi 928 문구 판정 · 검수장 진행 중)으로 라벨이 바뀌면 이 파일과 랜딩을 같이 고친다.** 라벨은 앱 축어가 정본(플레이북 §4-8) — 해설 수치는 스펙 §4-B.
> 선례 = tr 10-09 (4)(WORKLOG) · `docs/solver-app-verbatim-5langs-2026-08-24.md`.

## 1. 탭·사이드바

| 자리 | EN | vi 축어 |
|---|---|---|
| 앱 title | HoldemMaster GTO Trainer — … | **HoldemMaster Trainer GTO — Solver và trainer GTO miễn phí cho Texas Hold'em** |
| 상단 탭 | Solver · Results · Community | **Solver · Kết quả · Cộng đồng HoldemMaster**(Results 비활성 힌트 «Mở khi ⑤ Chạy solver xong») |
| 사이드바 머리 | Explore & Learn | **KHÁM PHÁ & HỌC** |
| About · Guide | About · How to Use | **Giới thiệu · Hướng dẫn** |
| Study Spots(배지) | Study Spots ⚡ Instant | **Spot mẫu ⚡ Tức thì** |
| GTO Trainer(배지) | GTO Trainer · EV grading | **Trainer GTO · Chấm EV** |
| Preflop chart(배지) | Preflop Chart · Range | **Bảng preflop · Range** |
| Equity(배지) | Equity · Win % | **Equity · % thắng** |
| Custom Spot 머리 | Custom Spot | **SPOT TÙY CHỈNH**(산문 «Spot tùy chỉnh») |
| 5단계 | ① OOP Range ② IP Range ③ Board ④ Bet Sizes ⑤ Run Solver | **① Range OOP ② Range IP ③ Board ④ Cỡ cược(부제 Cài đặt cây) ⑤ Chạy solver** |
| 단계 상태 | ✓ Done · ○ Not yet | «✓ Xong · ○ Chưa làm · Chấm vàng = bước tiếp theo» |
| Random flop | Random flop | **Flop ngẫu nhiên** |
| Build tree · Share | Build Tree · 🔗 Share spot | **Tạo cây · 🔗 Chia sẻ spot** |
| 완료 상태 | Solver finished! | **Solver đã xong!** |

## 2. 홈(Giới thiệu) 히어로·CTA

- 히어로: **«Chiến lược GTO, / ngay trên trình duyệt.»** · 부제 «Không cần cài đặt, không mất phí. Nhập range và board, chiến lược tối ưu sẽ được tính ngay trên thiết bị của bạn.»
- CTA: **Xem spot mẫu · Trainer GTO · Thử thách hôm nay(Daily Challenge) · Hướng dẫn · Thêm vào màn hình chính**
- 4 특징 카드: Miễn phí / Học ngoại tuyến / Giải nhanh / Trainer GTO · 노드락 카드 «Khóa chiến lược (node lock)»
- «Mới bắt đầu?» 5단계 중 1: «Mở một spot bất kỳ trong Spot mẫu rồi nhấn [Xem kết quả] — lời giải hiện ra ngay»
- AGPL 고지: «Ứng dụng này dựa trên WASM Postflop (của Wataru Inariba, AGPL-3.0), được HoldemMaster bản địa hóa và cải tiến. Toàn bộ mã nguồn đã sửa được công bố trên GitHub theo cùng giấy phép.»

## 3. Spot mẫu — 그룹 3 · 스팟 13 (`presets.ts` categoryVi / titleVi 와 일치)

머리: **«Spot mẫu — ví dụ một chạm»** · 안내 «[⚡ Xem kết quả] hiện ngay chiến lược của solver. Chỉ dùng [Tự giải] khi bạn muốn chỉnh range hoặc xem tiếp turn và river.» · 버튼 **«⚡ Xem kết quả» · «Tự giải»** · 꼬리 «Range là bản xấp xỉ lối chơi online 100bb tiêu chuẩn. …»

| key | 보드 | titleVi(축어) | 그룹 categoryVi · cond 줄(축어) |
|---|---|---|---|
| srp-dry-ace | A♥7♦2♣ | **Board A-high khô** | **Single raised pot — BTN vs BB (cơ bản)** · «OOP: BB (bên call) · IP: BTN (bên open) · Pot 5,5bb · Stack 97,5bb» |
| srp-dry-king | K♠8♦3♣ | **Board K-high khô** | 〃 |
| srp-broadway | Q♠J♦T♠ | **Board broadway liền nhau, hai chất** | 〃 |
| srp-middle-connected | 9♥8♥7♣ | **Board tầm trung liền nhau, hai chất** | 〃 |
| srp-monotone | Q♠9♠2♠ | **Board monotone (cả 3 lá cùng chất)** | 〃 |
| srp-paired | 6♣6♦3♥ | **Board có đôi** | 〃 |
| srp-low-rainbow | 6♠5♥2♦ | **Board thấp rainbow (3 lá khác chất)** | 〃 |
| 3bp-ace-king | A♦K♠2♥ | **Board A-high, lợi thế của bên 3-bet** | **Pot 3-bet — BB 3-bet, BTN call (SPR thấp)** · «OOP: BB (bên 3-bet) · IP: BTN (bên call) · Pot 22,5bb · Stack 89bb» |
| 3bp-dynamic | Q♥T♥7♠ | **Board động, hai chất** | 〃 |
| 3bp-low | 8♦5♣2♠ | **Board thấp khô** | 〃 |
| sb-king-mid | K♥T♦6♠ | **Board K-high có lá 10** | **Blind vs blind — SB vs BB (range rộng)** · «OOP: SB (bên open) · IP: BB (bên call) · Pot 6bb · Stack 97bb» |
| sb-connected | 7♦6♦5♣ | **Board thấp liền nhau, hai chất** | 〃 |
| sb-paired-ace | A♠A♥6♦ | **Board đôi A** | 〃 |

🔴 앱 스팟 해설 문장(예: 9♥8♥7♣ «“luôn c-bet” là sai» · A♠A♥6♦ «Xám không hiếm»)은 **라벨이 아니라 해설**이다 — 랜딩·글 해설은 스펙 §4-B 정정본(EN 랜딩 note)에서 가져온다(플레이북 §4-8). 앱 해설은 인용하지 않는다.

## 4. 결과 화면 (srp-dry-ace · OOP 첫 액션)

- 머리: «← Quay lại» · Pot **5,5 bb** · Stack **97,5 bb** · «Chỉ có chiến lược flop. Muốn xem tiếp turn và river? →» · **«Tự giải spot này»**
- 플레이어 선택: «Người chơi:» **OOP (BB (bên call))** / **IP (BTN (bên open))** · 안내 «Đây là chiến lược của người hành động trước (OOP). Để xem đối thủ (IP), đổi “Người chơi” ở trên sang IP.»
- 액션 카드(축어): **Bet 4,1bb (75% pot) 0,9% 3,9 combo · Bet 1,8bb (33% pot) 1,0% 4,5 combo · Check 98,2% 455,5 combo**(% 뒤붙임 · tr «(%33 pot)»과 다름)
- 핸드 분류 머리 **«Tay bài»**: Xám 1,3% · Hai Đôi 3,9% · Top pair 20,7% · Second pair 5,2% · Đôi yếu 1,3% · Underpair 9,1% · K-high 17,2% · Chưa thành bài 41,4% · **«Draw»**: Gutshot 0,9% · Backdoor FD 27,8% · Không draw 71,3%
- 표: **Tóm tắt** · Độ rộng thanh: Chuẩn hóa / Tuyệt đối / Đầy đủ · Hiển thị: **% hành động · EV hành động** · 열 **Tay bài · Chiến lược · Trọng số · EQ · EV (bb) · EQR** · 액션 열 B 4,1bb · B 1,8bb · Check · 요약 행 **Tất cả 464,0 · 45,1% · 2,09 · 84,0%** — EN 랜딩 수치(464.0 combos · EQ 45.1% · EV 2.09 · EQR 84.0% · Check 98.2% 455.5)와 일치
- 중간 패널 모드: Cơ bản · Biểu đồ · So sánh · Turn · River

## 5. Trainer GTO · Hướng dẫn 핵심 축어

- 트레이너 꼬리: «13 spot mẫu · N node quyết định · exploitability mục tiêu 0,5%» · 리뷰 «Xem lại (n)» · 일일 «Thử thách hôm nay» · «Chuỗi» · «Tổng EV mất» · «EV mất trung bình» · «Tỷ lệ chơi tốt» · «Tìm điểm yếu» · «Spot của tôi» · «Luyện tập spot này» · «Khóa chiến lược node này»
- 채점 기준(Hướng dẫn 축어): «tối đa 0,35% pot = Nước đi tốt nhất · tối đa 1% = Chấp nhận được · vượt quá = Xem lại spot này» · «single raised pot (SRP) 5,5bb … 0,02bb và 0,06bb; pot 3-bet 22,5bb … 0,08bb và 0,23bb» · 사다리 «Các ngưỡng có mức sàn (0,02bb / 0,05bb)» · 변경일 «(15/08/2026)»
- 결과 화면 구역(Hướng dẫn «Đọc màn hình kết quả»): **Thanh trên cùng · Ma trận 13×13 (bên trái) · Khung (trên bên phải) · Nhóm tay bài (giữa bên phải) · Bảng (dưới bên phải)**
- 초심자 레인지(복사용 · 좌석 라벨): **OOP (BB, bên call)** `TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o` · **IP (BTN, bên open)** `22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o`
- 칩 환산: «10 chip = 1bb (ví dụ: pot 55 = 5,5bb)»
- 4 용어(앱 정의): Range «(dải bài) là tập hợp các tay bài…» · OOP/IP · Equity «Phần pot thuộc về bạn nếu all-in ngay lúc này — % thắng cộng một nửa % hòa» · EV
- ⚠ 앱 Hướng dẫn는 raise를 «tố», range를 «(dải bài)»로 풀어 쓴다 — **본체 산문 금지어**(계획 §3-A · «tố»는 bet·raise 겸용 혼동 · «dải bài» 폐기). 라벨 축어로 인용할 때만 그대로.

## 6. 커버리지

| 자리 | 상태 |
|---|---|
| 홈 · 사이드바 · Spot mẫu 13 · Hướng dẫn · Trainer 머리 | ✅ 라이브 innerText |
| 결과 화면(srp-dry-ace OOP) | ✅ 라이브 innerText(액션 카드·분류·표 머리·요약 행) |
| 트레이너 문제 화면 · Equity 탭 · Bảng preflop 탭 | ✗ 미추출(소스 vi 블록만 확인 · 랜딩이 인용하지 않는다) |
| Samsung Internet 경고 문구 | ✗ 기기 실측 불가 → 랜딩 FAQ는 설명으로만 |
