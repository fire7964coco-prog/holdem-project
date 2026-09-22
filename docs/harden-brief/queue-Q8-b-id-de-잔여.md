# Q8-b — ID/DE 기존 표현 잔여 마감

2026-09-22 사용자 승인 실행판의 Q8-a 다음 묶음. Q14와 core/AR 규칙 패치가 main에 들어온 뒤 착수한다. 새 전면 검수나 SEO 재조준이 아니다.

## 정본·보존

- ID: docs/keyword-bank/id-posting-reference.md §5/5-A가 옛 translation-terms-id보다 우선한다. 액션 check / 확인 cek, 판 hand / 손·보유패 tangan, 커뮤니티 카드 board / 테이블 meja를 뜻별로 구별한다. Anda와 현지 숫자 형식 유지.
- DE: docs/translation-terms-de.md 및 local-voice/de-dach.md. du, Denglisch, 명사 성·대문자, 기존 통화 판정·소수 쉼표 유지.
- 숫자값·카드·포지션·명제·slug·링크 목적지·이미지·FAQ 개수·SEO 조준 불변. updated는 실제 수정 글만, masterUpdated는 용어 수정만으로 올리지 않는다.
- 일괄 문자열 치환 금지. 의미별 문장 처방. Q14의 EQR/MDF/토너먼트 한정과 이번 core의 live-straddle 조건을 보존한다.

## ID 고정 앵커(09-22 읽기전용 실사, 줄번호는 재검색)

- 액션 cek: 3bet47; blind59/169/171; equity95/98/99; game-order47/96/110/121/138/213/221/226/246/255/264/266/313/355/361/363; positions160/167/214; showdown8/32/43/68/70/72/167; strategy67/68/118/199/201. cek(check)는 중복 병기 없이 check, 접두 어형은 문장 안에서 처리.
- 확인 의미 cek 유지: blind109, strategy156, pot-odds112, reading76–78 등. 사전 실사 액션46 vs 확인37은 참고이지 목표 수량이 아니다.
- 판 뜻 tangan: bad-beat101/157/159/192/210; bubble138–141/203; card-counting8/48/51/67–68/131/144/152/156/178/180; cooler103/138; drawing-odds166; equity42; glossary209; position-play102; positions8/32/37/43/63/94/98/100/104/167/220/222/226/232/234/247; rake22/57/73/79/165/177/181; starting-hands-chart132/176/180/216; straddle39/104/107; strategy22/29/41/193/229/249; tournament-vs-cash-game86/127/303; tournament96/281/315; beginners59/93/449/451. 보유패·신체 손은 유지.
- board 뜻 meja: flush-vs-straight81–139/209/229; hand-rankings21–25/77/104/134–135/197–223/249–261/349/353/392/395; kicker20/106/116–119/129/140/171/179/183/236–237; outs40/54–58/158–170/191/195/215/223/243–244; pot-odds143/168/260/261; tiebreak76/101/146/164–168/199/203/215/227/246. 물리 테이블 유지; cooler70은 모호해 강제 치환하지 않는다. papan7은 실제 표지판 뜻이라 유지.
- variance/leak 정본은 재판정하지 않는다. 현행 다수파 숫자를 다시 세어 판정을 뒤집지 않는다. 이번 고정 범위는 위 3종.

## DE 고정 앵커

- Rabatt15: outs170/175/180/221/229/245(아웃 할인: nicht voll anrechnen/Abschlag); limping54/100/165, position-play120/236/309/329, strategy106/116(가격 문맥 그대로 자연스럽게). 27% 등 수치·전제 불변.
- Lecks8 + leckst1: implied-odds128은 손실 요인=Verluste/Nachteile,160은 전략결함=Leaks; position-play247/292; strategy165/185/199/229와22의 wo du leckst는 wo dein Spiel Schwächen hat.
- 드로 라벨5: equity61, implied-odds107/109, outs76, pot-odds124. Gutshot-Straßendraw / Open-Ended-Straßendraw 등 뜻 유지.
- Side Pot/Nebenpot, outs19,1/19,6의 서로 다른 스트리트는 정상: 재수정 금지. WSOP96.a는 현재 부재라 재작업하지 않는다.

## 별도 소품(용어 본체 뒤)

- DE short-stack88–90/212: M10–20/6–10 경계 중복. 실수 M에 대해 10≤M<20,6≤M<10,1≤M<6로 연속 구간. 정수 계산기 라벨을 복사하지 않는다.
- DE equity FAQ197–199는 range equity 일반 설명이다. 우리 도구가 전체 range equity를 계산한다고 오해시키지 않는 범위로 계산기 링크 보강. ICM223도 /de/calculator로 실제 링크. DE 계산기→bubble 링크는 related8 EN 패리티를 깨지 않는 기존 본문 자리로만, 코드 소유자와 조율 후.
- FR 계산기 앵커는 e897bae4에서 이미 종결. ES 숫자 혼용2편은 본체 별도 소품.

## 검증·인계

시작/종료 audit:hard locale별 결과와 uncovered를 읽고, FAQ/카드/숫자/링크 보존 비교·answer-echo·structure·hygiene·number-format·seo-sync·DE style·diff --check를 확인한다. 외부 심사자를 사용했다고 꾸미지 않는다. 독립 diff 검수 후 실제 파일 목록과 전후 처방을 인계한다. build·배포·IndexNow·메일박스·대기열 마감은 본체 소유.
