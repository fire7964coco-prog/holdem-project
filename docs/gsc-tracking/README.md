# GSC 주간 추세 추적

> 목적: **성장 추세(trajectory)** 를 매주 기록해 "제대로 올라가고 있나"를 확인.
> 최종 목표: 타깃 쿼리 **구글 1페이지 top3 안착**.

## 매주 루틴 (API 자동 — 권장)

> 2026-07-15부터 Search Console API 연동. **수동 CSV 내보내기 불필요.**

1. **사용자**: Claude에게 **"이번 주 GSC"** 라고만 함.
2. **Claude**:
   ```
   npm run gsc          # 최근 28일 (추세선)
   npm run gsc:both     # 28일 + 7일(조기신호) 둘 다
   ```
   → API가 검색어/페이지 데이터를 받아 `docs/gsc-tracking/data/<날짜>-28d/`에 CSV 저장 후, 곧바로 `gsc-analyze.mjs` 실행 → 총계 + 타깃 쿼리 순위/노출/클릭 출력.
3. **Claude**: `kpi-log.md`에 **새 열(주차) 추가** → **지난주 대비 델타** 분석 + 다음 액션 제안.

### 최초 1회 설정 (서비스계정)
`.env.local`에 아래를 넣고, Google Cloud에서 서비스계정 키를 발급받아 GSC 속성에 읽기 권한 부여:
```
GSC_SITE_URL=sc-domain:holdemmaster.com        # 도메인 속성 (또는 https://holdemmaster.com/)
GSC_SA_KEY_PATH=C:/Users/하봄/.secrets/gsc-key.json   # 서비스계정 JSON 경로 (repo 밖)
# GSC_LAG_DAYS=3  (선택, 기본 3 — GSC 데이터 확정 지연 보정)
```
상세 절차는 `scripts/gsc-fetch.mjs` 상단 주석 참조. 키 파일은 절대 커밋 금지(`.gitignore`에 패턴 등록됨).

## 매주 루틴 (수동 CSV — API 미설정 시 폴백)

1. **사용자**: GSC → 성능 → 기간 **"지난 28일"** → **내보내기 → CSV** → zip 저장.
2. **사용자**: "이번 주 GSC" + zip/폴더 경로.
3. **Claude**: `node scripts/gsc-analyze.mjs "<압축푼폴더>"` → 스냅샷.
4. **Claude**: `kpi-log.md` 갱신·분석.

## 추적 창(window) 원칙
- **주 지표 = 28일 롤링**. 매주 뽑으면 겹침이 크지만(27/28일 공유) 그래서 **성장 곡선이 매끄럽게** 보임 = "성장 중인가" 질문에 최적.
- **노출 20 미만 쿼리는 순위가 튐**(표본 작음) → 단주 변동에 일희일비 X, 4주 흐름으로 판단.
- 순위(position)와 CTR 추세가 클릭 수보다 중요(클릭은 색인·계절성에 흔들림).

## 판정 기준 (top3 로드맵)
- 🏆 **top3** (r≤3): 목표 달성 — 방어 모드
- ✅ **1페이지** (r4~10): 밀어올리기 대상 (CTR·내부링크·신선도)
- ⬆ **2페이지** (r11~20): 콘텐츠 정확매칭·권위 필요
- 미노출: 아직 순위 밖 or 미색인

## 파일
- `kpi-log.md` — 주차별 총계 + 타깃 쿼리 순위 추세 (여기가 성장 곡선)
- `scripts/gsc-analyze.mjs` — CSV 폴더 → 스냅샷 출력기 (파일명 깨져도 헤더로 자동판별)
- 워치리스트(타깃 쿼리)는 스크립트 상단 `WATCH` 배열에서 관리 (새 타깃 생기면 추가)
