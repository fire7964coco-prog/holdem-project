# MA-542 — tr 3편 EN 재동기화 변경표 (2026-10-14)

> 요청: 검수장 MA-542 · 근거 보고 `홀덤검수-tr/reports/검수-tr-r1-rules-a-2026-10-14.md` §2·§3 (+ 같은 폴더 `<slug>/diff-en.md`·`proposal.md`).
> 기준: EN base = `git rev-list -1 --before="<masterUpdated> 23:59" HEAD -- lib/posts-en/<slug>.ts` → HEAD diff.
> beginners `ee9e7af8`(07-12) · game-order `ce948ec2`(07-02) · betting-actions `2cfd8daa`(07-11) → HEAD(EN `updated` 2026-10-13).
> 🔎 실측: tr 3편은 `masterUpdated`가 7월이었지만 본문은 이미 상당 부분 10월 EN 문면(90.a·84·100.b·47-B·«son tam»·×4 한정·TDA 16/18-B·river check-raise 등)을 담고 있었다 — 빠진 것은 아래 «남은 차이»뿐. 즉 `masterUpdated`만 낡았고 본문 일부가 덜 전파된 상태.
> 프런트매터: 3편 모두 `masterUpdated` = "2026-10-13"(EN 현행 `updated`) · `updated` = "2026-10-14".
> 분류: (a) 규칙 정정·한정 = MUST · (b) EN 추가 문장·FAQ = 이식 · (c) 카피 조정 = tr 대응문이 있고 뜻이 바뀐 경우만 · (d) 기계적 = 건너뜀 · (T) tr 고유 단정이 EN 한정과 충돌 = 정렬.

## 1. holdem-betting-actions (10자리)

| # | 위치 | 전 | 후 | EN 근거 | 검수장 행 |
|---|---|---|---|---|---|
| 1 | «ne zaman check» H2 도입 | Check'i tam olarak iki durumda | Check'i iki tür durumda | (a) «two kinds of situation» | c4 · #18 |
| 2 | 같은 H2 둘째 불릿 | big blind sensen ve kimse yükseltmediyse … | … yükseltmediyse ve straddle koymadıysa … (canlı straddle koyan oyuncu için de aynısı: ondan sonra kimse yükseltmediyse ve yeniden straddle koymadıysa) | (a) «no one raised or straddled» + 괄호 | b1 · #19/#20 |
| 3 | Check-raise H2 (tr 고유) | Tek şart, … | Temel şart, … | (T) 배타어 완화 — EN은 조건 단정 없음 | b7 · #24/#27 (낮음) |
| 4 | Check-raise H2 (tr 고유) | Check-raise yalnızca flop, turn ve river'da mümkündür | … normalde flop, turn ve river'da yapılır | (T) B 160 미스드 블라인드 라이브 BB 반례 | Astra #9 · #25 (낮음) |
| 5 | min-raise 인포그래픽 캡션 | her yükseltme, son bahsin ya da yükseltmenin … | bir yükseltme, son tam bahsin …; yalnızca all-in daha küçük olabilir | (a) «last full bet or raise; only an all-in can be smaller» | b2 · a6 (신설 RISKY) |
| 6 | 라이브 규칙 1 굵은 머리 | Çipleri hareket ettirmeden önce "raise" de. | … "raise" de — tutarıyla birlikte. | (a) «— and the amount —» (TDA 42) | b4 |
| 7 | all-in H2 둘째 문단 | (괄호 없음) | (Senden de kısa biri varsa … her all-in yalnızca kendi katmanını sınırlar.) | (b) EN #51 괄호 | b5 |
| 8 | «hangisini seçmek strateji» 끝 | yeni başlayanlara gerçek para kazandıran bir kural | yeni başlayanları boşa para kaybetmekten kurtaran pratik bir kural | (c) EN «saves beginners real money» — tr가 «돈을 벌게 해 주는»으로 강화돼 있었음 | c5 · #67/#68 (관할 정책 판단은 헤드 몫으로 남김) |
| 9 | FAQ «all-in'den sonra raise» | … re-raise yapabilirsin. | … — yeter ki elde all-in olmayan en az bir rakip daha kalsın; all-in olan oyuncuyla heads-up kaldıysan … yalnızca call ya da fold | (a) EN #69 헤즈업 단서 | b3 · #86/#87 |
| 10 | FAQ «çek ne demek» (tr 고유) | Preflop'ta bunu yalnızca big blind, kimse yükseltmediyse söyleyebilir | … ancak kendi zorunlu bahsi canlı bahis sayılan oyuncu, kimse yükseltmediyse — normalde kimse straddle koymadıysa big blind, koyduysa canlı straddle'ı koyan oyuncu | (T) EN L201 일반형(B 159·165) | b6 · #17/#100/#101 · #115 |

건너뜀: category·`hsl(var(--…))` 스타일(이미 반영) · EN 링크 `/en/blog/holdem-split-pot-rules` ↔ tr `/tr/blog/holdem-showdown-rules`(tr에 split-pot 글 없음 · tr-cluster-plan §3 tiebreak/showdown 위임) · 나머지 EN 정정(90.a/90.b.1/90.d/97/103/84/100.b/47-B/«son tam»/«($10'dan az)»/BB·straddler preflop FAQ)은 tr에 이미 반영돼 있었다.

## 2. holdem-game-order (20자리)

| # | 위치 | 전 | 후 | EN 근거 | 검수장 행 |
|---|---|---|---|---|---|
| 1 | tldr | Bir Texas Hold'em eli şöyle ilerler … toplam 4 bahis turuyla. | (앞에) Preflop'ta ilk bahsi big blind'ın solundaki oyuncu yapar; flop·turn·river'da butonun solunda elde kalan ilk oyuncu — genellikle small blind (heads-up'ta tersine döner). + … en fazla 4 bahis turuyla. | (a)+(c) EN tldr «who bets first» + «up to four» | ⓑ1 · i0 |
| 2 | «Bir el nasıl ilerler» (tr 고유 직답) | her açılışın ardından yeni bir bahis turu gelir | … elde hâlâ bahis yapabilecek oyuncular varsa yeni bir bahis turu gelir | (T) «up to four» · 올인 런아웃 | §3 «Dört» 축 |
| 3 | 버튼 정의 | buton her elden sonra … kayar | buton normalde her elden sonra … kayar (istisnası dead button kuralıdır) | (a) «normally … (the dead-button rule is the exception)» · A 85 | ⓑ4 · i5 |
| 4 | 블라인드 표 아래 | (없음) | Yalnızca iki oyuncu varsa small blind'ı butonun kendisi koyar — aşağıdaki tam el örneğinde kullanılan düzen budur. | (b) EN 신규 문장 | — |
| 5 | Preflop nedir | Kimse yükseltmediyse big blind check ile turu kapatabilir. | Kimse yükseltmediyse ve straddle koymadıysa … | (T) EN L258 «raised or straddled» | ⓑ6 |
| 6 | Flop nedir 끝 | preflop'ta bu hak yalnızca big blind'ındı, o da kimse yükseltmediyse | preflop'ta ise check'i yalnızca kendi blind'ı ya da straddle'ı o anki canlı bahis olan oyuncu yapabilirdi | (a) «only a player whose own blind or straddle is the live bet can check» | ⓑ6 · i19 · #23 |
| 7 | Turn 정의 | **Turn**, … | **Turn** (*fourth street*, yani dördüncü sokak da denir), … | (c) EN «(also called fourth street)» | — |
| 8 | River 정의 | **River**, … | **River** (*fifth street*, yani beşinci sokak da denir), … | (c) EN «(also called fifth street)» | — |
| 9 | «Pokerde sıra kimde?» 직답 | Tek istisna heads-up'tır: | Heads-up bu düzeni tersine çevirir: | (T) 배타어 — EN은 straddle도 별도 예외로 둔다 | ⓑ7 · i41 · #47 |
| 10 | heads-up 문단 뒤 | (없음) | 캐시 게임 canlı straddle 문단(UTG 시작이 스트래들러 왼쪽으로 · 스트래들러가 preflop 마지막 · WSOP Live Action 165 · flop 이후 평소대로) | (b) EN 신규 문단 | ⓑ7 |
| 11 | 7 hamle 표 Fold | Her zaman | Her sokakta — sıra sendeyken | (a) «Any street — in turn» · A 90.d | ⓑ5 · i66 · #72 |
| 12 | «Önemli» 상자 | Preflop'ta check diyemezsin — tek bir istisna dışında. … Yalnızca big blind, kimse yükseltmediyse check diyebilir | … kendi zorunlu bahsin zaten canlı bahis değilse … Kimse yükseltmediyse ve straddle koymadıysa big blind … canlı straddle'ı yükseltilmemiş … oyuncu da öyle … (WSOP Live Action Kural 159 · 165); diğer herkes için check flop'ta başlar. | (a) EN 상자 전면 개정 | ⓒ8·ⓒ9 · i70·i72 · #76·#78 |
| 13 | 족보 표 머리 | (없음) | (Sıklık sütunu … yüksek kartın iki çiftten daha seyrek görünmesinin nedeni bu.) | (b) EN 괄호(표 칸은 이미 «Sık – ama iki çiftten daha seyrek») | — |
| 14 | 5 hata 도입 | (없음) | Her birinin … gözümle gördüm — çoğu zaman tek bir seansta birden fazla kez. | (b) EN 경험담 | — |
| 15 | Hata 1 | … uzun vadede kesin zarardır. | … — yeni bir oyuncunun ilk masasında en sık gördüğüm sızıntı budur. | (b) EN 경험담 | — |
| 16 | Hata 5 | (없음) | Kent olduğundan emin oldukları eli … pot öbür tarafa kayar. | (b) EN 경험담 | — |
| 17 | FAQ 신설 ×2 | (없음) | «Pokerde ilk kim başlar?» · «Flop'tan sonra ilk kim bahis yapar?» | (b) EN FAQ «Who goes first in poker?» · «Who bets first after the flop?» | — |
| 18 | FAQ preflop 첫 액션 | kimse yükseltmediyse big blind check … | kimse yükseltmediyse ve straddle koymadıysa … | (T) 같은 한정 | ⓑ6 |
| 19 | FAQ heads-up (tr 고유) | Butonun blind ödediği tek durum budur. | Normal bir oyunda butonun zorunlu blind ödediği tek durum budur. | (T) 버튼 straddle(B 165) 반례 회피 | — |
| 20 | FAQ 신설 ×2 + 3자리 | (없음) / Stack'ler farklı olduğunda … / A. Dört: … / ==dört bahis turuyla== | «Showdown'da kartları ilk kim açar?»(TDA 16 «all-in olup bahis tamamlandığında» · 18-B) · «Krupiye neden kart yakar?» 신설 · all-in FAQ «ve senin all-in'inden sonra iki ya da daha fazla oyuncu bahse devam ederse» · «En fazla dört … daha az olur» · 결론 «en fazla dört» | (a)+(b) EN FAQ 3종 신설 · «up to four» · 사이드팟 조건 | ⓑ2·ⓑ3 · i95·i96·i97 · #106·#107·#108 |

건너뜀: EN seoTitle/desc/tags «who bets first» 재조준(tr SERP 카피 «Pokerde sıra kimde?» 유지 — MB-187~190 · tr-serp brief) · EN H2 «Who Bets First in Texas Hold'em?»+굵은 도입 문단(tr H2·직답이 같은 사실을 이미 담음, 위 #9로 배타어만 정렬) · EN «7 Moves You Can Make» H2 문구 · 표 정렬 기호·hsl 스타일·readnext(이미 반영) · 손 목록·pot odds·river check-raise·showdown 예외·이미지 캡션(이미 반영).
남김(헤드 판단): game-order «(preflop'ta bu big blind kadardır)» = EN L78 동문(EN-먼저 후보 · 검수장 #11) · «pokerdeki en pahalı alışkanlık» = EN L82 동문(최상급 잣대 · #15) · «En küçük bahisle başla» = EN L341 동문(T1 관할 · #91).

## 3. texas-holdem-rules-for-beginners (17자리)

| # | 위치 | 전 | 후 | EN 근거 | 검수장 행 |
|---|---|---|---|---|---|
| 1 | desc | 4 bahis turu … yazdırılabilir kopya kâğıdı | en fazla 4 bahis turu … kopya kâğıdı (160자 한도 맞추려 «yazdırılabilir» 삭제 · 153자) | (a) «up to four» | §3 «Dört» |
| 2 | tldr | … dört bahis turunun sonunda en iyi 5 kartlık poker eli kazanır. | … En fazla dört bahis turu oynanır ve showdown'da en iyi 5 kartlık poker eli kazanır — diğer herkes daha önce fold etmezse. | (a) EN tldr | i1 · #2 |
| 3 | 도입 | (없음) | Aşağıdaki her şey yalnızca kural kitabından değil, oyunu bizzat yönetmekten geliyor … | (b) EN 경험담 | — |
| 4 | «7 adımda» 직답 (tr 고유) | her aşamadan sonra bir bahis turu oynanır | elde bahis yapabilecek oyuncular kaldıkça her aşamadan sonra … | (T) 올인 런아웃 | §3 «Dört» |
| 5 | «Aklında kalsın» 버튼 | Dağıtıcı butonu her elde döner, … her turda kayar | … normalde her elden sonra bir koltuk kayar, … onunla birlikte kayar | (a) «normally moves one seat» · A 85 | i8 · #9 |
| 6 | 기본 규칙 블라인드 | … zorunlu bahisleri koyar — | … koyar (yalnızca iki oyuncu varsa small blind'ı butonun kendisi koyar) — | (a) 헤즈업 괄호 · A 87 · B 157 | i33 · #37 |
| 7 | «İlk seansın için» 굵은 문장 | her yeni sokak açıldığında bir bahis turu daha yapılır. | … — oyuncular all-in olup karşılarında bahis yapacak kimse kalmadıysa hariç; o zaman kalan kartlar sadece açılır. | (a) EN #12 올인 꼬리 · TDA 16 | i43 · #50 |
| 8 | 인원 표 7–10 | Full ring (9-max) | Full ring (9-max ya da 10-max) | (a) «(9-max or 10-max)» | add RISKY tr L179 |
| 9 | NL 표 칸 | Tüm çiplerine kadar herhangi bir miktar | Big blind'dan tüm çiplerine kadar … | (a) A NO-LIMIT b 최소 베팅 = BB | i62 |
| 10 | NL 설명 괄호 | (istediğin kadar bahis yap) | (big blind'dan tüm stack'ine kadar istediğin miktarda bahis yap) | (a) 같은 사유 | add RISKY tr L269 |
| 11 | 프리미엄 칸 | Her pozisyon, her stack | … — pota ilk giren sensen raise, tek bir raise'e karşı re-raise | (a) «raise first in, re-raise over a single raise» | i77 · #92 |
| 12 | 흔한 실수 도입 | (없음) | Yıllardır ev oyunları düzenliyorum … | (b) EN 경험담 | — |
| 13 | Hata 2 | (없음) | Dağıttığım ilk ev oyununda … bir tur içinde kayboldu. | (b) EN 경험담 | — |
| 14 | Hata 4 | A♣4♦ yeni başlayana heyecan verici görünür ama | … görünür — yeni oyuncuların zayıf bir asla … gördüm — ama | (b) EN 경험담 | — |
| 15 | FAQ 블라인드 | … koymak zorundadır. İlk | … koymak zorundadır (yalnızca iki oyuncu varsa small blind'ı butonun kendisi koyar). İlk | (a) 헤즈업 괄호 | i116 · #136 |
| 16 | FAQ no-limit | tüm çiplerine kadar … — "all-in" hamlesi budur | big blind'dan tüm çiplerine kadar … — üst sınır "all-in" hamlesidir | (a) 최소 베팅 = BB | i121 |
| 17 | 결론 | dört bahis turu | en fazla dört bahis turu | (a) «up to four» | — |

건너뜀: EN seoTitle «Rules & Cheat Sheet» 미세 조정(tr 카피 «Poker nasıl oynanır? Kısaca …» 유지) · FAQ `###`→`**Q.**` 형식(tr 이미 Q./A.) · 링크 `/en/hand-chart`·`/en/calculator`(tr 이미 `/tr/…`) · hsl 스타일 · 이미 반영돼 있던 것(turnuva re-entry 괄호 · Fixed-Limit 한 줄 · BB «small blind'e karşı hariç» · pot odds $120/$140 · ×4 경고 · 9÷47 · 족보 표 9·10행 · 빠른 버전 FAQ · 한 핸드 30초~2분 · «(ya da … all-in)»).
남김(헤드 판단): T1 관할 3자리(i55 홈게임 바이인 · i111 FAQ · i137 «Gerçek parayla öğrenmek için en iyisi» = EN «Best for learning with real stakes» 동문) · 치트시트 «Bahis turları | Preflop, flop, turn, river» = EN L333 동문 · FAQ «Her aşamadan sonra bahis yaparsın» = EN 동문.

## 4. §13 · 숫자

카드·족보 예시(A♠K♦ vs Q♣Q♥ 7장 · 헤즈업 전체 핸드 A♠K♥ vs 9♦9♣)와 수치($10→$14→$24 · $100+$20 → $120/$140 · 9 out ×4/×2 · 9÷47 ≈ %19 · 1.326/169)는 손대지 않았다. 새로 넣은 문장에 카드·수치 없음(규칙 번호 159·165·16·18-B만 — EN 동일).

## 5. Astra 교차 검수

`codex exec -m gpt-6-astra -s read-only` (reasoning effort high · 격리 폴더 = 스크래치 `astra-ma542-tr-a-lane/`: tr 3 + EN 3 + `tr-changes.diff` + PROMPT — 이스탄불 편집자 + 북키프로스 플로어 페르소나 · «오탐이 누락보다 나쁘다, 괜찮으면 OK»). 지적 5건 → 재검증.

| # | 자리 | 지적 | 처분 | 사유 |
|---|---|---|---|---|
| 1 | betting «ne zaman check» BB 불릿 | «yükseltmediyse **ya da** straddle koymadıysa» = 부정 조건 둘을 «ya da»로 이어 하나만 충족해도 체크 허용으로 읽힌다 | **채택** → «ve» (괄호 안 «yeniden straddle»도) | 맞다. EN은 둘 다 없어야 한다. 같은 글 Hata 3·FAQ는 이미 «ve» |
| 2 | game-order «Önemli» 상자 | «yükseltilmemiş **ya da** … konmamış» 같은 논리 오류 | **채택** → «ve» | 위와 같음 |
| 3 | game-order Flop·Turn·River 정의(미변경 문장) | «ikinci/üçüncü/dördüncü bahis turu» 무조건 단정 — 올인 런아웃 | **부분 채택** — Flop 문장에만 «bahis yapabilecek en az iki oyuncu kaldıysa» | 첫 대응 자리 하나와 도입 직답(§2 #2)·FAQ(§2 #20)의 «en fazla dört … daha az»로 한정이 닫힌다. Turn·River 서수는 정상 흐름 묘사라 같은 단서 반복은 문장만 무겁게 한다 |
| 4 | beginners «İlk seansın için» 꼬리 | «-dıysa hariç» 문법 어색 | **채택** → «oyuncuların all-in olduğu ve … kimsenin kalmadığı durumlar hariç» | 자연스러운 터키어 |
| 5 | beginners Hata 4 경험담 | EN은 «잃는 신규 플레이어 수» 비교인데 tr은 «잃는 칩 양» 비교 | **채택** → «zayıf bir asla çip kaybeden yeni oyuncuları, neredeyse başka herhangi bir elle kaybedenlerden daha sık gördüm» | EN 축어 의미와 일치 |

나머지 변경: 3편 모두 «remaining changes OK».

## 6. 게이트

- `npm run audit:hard -- --locale=tr --slug=<slug>` ×3 — tr 20편 전체 🔴 0 · 🟠 0 · 클러스터 교차 대조(beginners·game-order 표 28 · 쌍 3 · 행 21 자동 대조) 통과 · 미러 드리프트: 3편 ✅(🔴 핵심 0). 커버리지 경고: beginners «카드 문단 3 · 시나리오 0» = 미검사 → 이번 회차는 카드 문단을 건드리지 않았고 7장 예시(A♠K♦ vs Q♣Q♥)는 손으로 재확인(K♦K♠A♠9♦7♣ vs Q♣Q♥K♠9♦7♣ → 원페어 K > Q, A 승).
- `npm run check:intl-links` ✓ (729편 · 25개 언어).
- `npm run build` exit 0 · «74 blog posts + 729 intl posts» → `public/sitemap.xml`·`tsconfig.tsbuildinfo` 원복.
- Astra 반영 뒤 재실행: audit:hard tr 20/20 🔴 0 · 🟠 0 · build exit 0(74 + 729) · 본문 백틱 0 · desc 153/147/158자.
- ⚠ 운영 메모: 스크래치 `astra-ma542/`는 hi 레인 세션이 같은 이름으로 쓰고 있었다(13:16 겹침). 이 레인은 tr 사본·CHANGES.diff를 즉시 지우고 `astra-ma542-tr-a-lane/`로 옮겨 돌렸다. 그 폴더의 `en/` 3파일은 HEAD EN과 같은 내용으로 덮였을 수 있다(hi 쪽 결과 해석에 영향 없음 · 같은 HEAD 사본).
