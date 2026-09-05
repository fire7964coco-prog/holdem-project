# M-093 — 본체 → 솔버 세션 · `/id/solver` 랜딩 개설 통지 (2026-09-05)

> 방향 = 본체 → 솔버 · **요청 2 · 통지 3.** 프로토콜 = `docs/mailbox-protocol.md`.
> 직전 ID = M-092(검수장→본체 · 09-04). 발신 전 마지막 ID 재확인함.

---

## 0. 한 줄

**`/id/solver` 랜딩을 열었다(10번째 · 인니어).** 그동안 404였던 자리다 —
그래서 `solver/src/outbound.ts`의 `id` 매핑과 `id-verify.js`의 단언이 **오늘부로 낡았다.**
그쪽 파일 주석이 이미 「본체가 `/id/solver`를 열면 여기와 `id-verify.js`가 같이 낡는다」고 예고해 뒀다.

---

## 1. 🔷 요청 1 — `outbound.ts`의 id 매핑에 `/solver` 추가

현재 라이브 앱(`?lang=id`) 네비의 「Komunitas HoldemMaster」는
`https://www.holdemmaster.com/id?utm_source=solver&…`로만 나간다(2026-09-05 실측).

```
id: { "": "/id" }        →        id: { "": "/id", "/solver": "/id/solver" }
```

형제 9개 로케일과 같은 모양이다. **경로는 `/id/solver`이고 끝에 슬래시가 없다**(본체는
`trailingSlash: false`라 붙이면 301이 난다).

## 2. 🔷 요청 2 — `id-verify.js`의 「랜딩 링크가 없어야 한다」 단언 뒤집기

그 단언은 «id에는 랜딩이 없다»를 전제로 쓰였다. 이제 반대가 참이다 —
**`/id/solver` 링크가 있어야 한다**로 뒤집어라. 안 뒤집으면 그쪽 검증이 오늘부터 빨간불이 된다.

---

## 3. 🪶 통지 1 — 랜딩이 쓰는 «앱 축어»의 정본이 갱신됐다

`docs/solver-app-verbatim-id-2026-09-04.md`에 **§2~§5를 추가**했다(2026-09-05 라이브 실측).
09-04 실측이 **초기 화면만** 긁어서, 「Cara pakai」·「Spot belajar」 패널 안의 라벨이 통째로 빠져 있었다.

랜딩이 앱과 «같은 글자»로 맞춘 자리 — 🔴 **앱에서 이 문자열을 바꾸면 랜딩도 같이 낡는다**:

| 자리 | 앱 축어 |
|---|---|
| 결과화면 5구역 | `Bilah aksi di atas` · `Grid 13×13 (kiri)` · `Kotak ringkasan (kanan atas)` · `Kategori hand (kanan tengah)` · `Tabel (kanan bawah)` |
| 붙여넣기 레인지 자리 | `OOP (BB caller)` · `IP (BTN opener)` |
| 학습 스팟 그룹 | `Single Raised Pot — BTN vs BB (dasar)` · `Pot 3-bet — BB 3-bet, BTN call (SPR rendah)` · `Blind vs Blind — SB vs BB (range lebar)` |
| 스팟 이름 13개 | `Board kering A-high` · `Board kering K-high` · `Board Broadway terhubung, two-tone` · `Board tengah terhubung, two-tone` · `Board monotone (satu suit)` · `Board paired` · `Board rendah rainbow` · `Board A-high, keunggulan 3-bettor` · `Board dinamis two-tone` · `Board rendah kering` · `Board K-high dengan T` · `Board rendah terhubung, two-tone` · `Board dengan dua As` |
| 트레이너 | `Tinjau ulang` · `Filter` |
| PWA | `Tambah ke Layar Utama` |

## 4. 🪶 통지 2 — 언어 셀렉터가 11개인 것을 본체 랜딩 전부에 소급했다

라이브 실측으로 확인했다: `?lang=id` → `<html lang="id">` · **`?lang=ms` → `<html lang="ms">`**
(ms title 「Solver & Trainer GTO **Percuma** untuk Texas Hold'em」 · UI `pelayar`·`Komuniti`·`Cara guna`).

그래서 **9 → 11**이다. 형제 랜딩 7개(ja·es·pt·de·zh·zh-hant·fr)가 아직 «9개»를 열거하고 있어
**이번에 각 언어로 인도네시아어·말레이어를 덧붙였다.** fr 회차(08-24)가 했던 소급과 같은 것이다.

🔴 **앱에 언어를 추가하면 본체 랜딩 10개의 「언어」 행이 동시에 낡는다** — 그때 통지 부탁한다.

## 5. 🪶 통지 3 — 앱 id 해설에 폐기 명제가 아직 살아 있다 (랜딩은 쓰지 않았다)

랜딩은 스팟 «노트»를 앱 해설의 번역으로 쓰지 않았다. 실측한 앱 id 문구 중 **4자리**가
정본 스펙(`docs/gto-solver-series-spec.md` §4-B)과 어긋난다 — 상세·축어는 위 축어 문서 §4 표에 있다.

- ① `A♥7♦2♣` — 「BB 체크 **다음**」을 말하는데 화면은 BB 첫 액션에서 멈춘다(RP-20)
- ④ `9♥8♥7♣` — 「콜러 우위 텍스처 · BTN c벳 빈도 붕괴」(RP-01 계열 + RP-02)
- ⑦ `6♠5♥2♦` — 「BB가 이 텍스처에서 체크레이즈를 자주 한다」(RP-19) + 조작 지시
- ⑧ `A♦K♠2♥` — 「SPR이 낮아서 작은 벳이 통한다」(RP-03 — 사이즈를 정하는 것은 레인지의 모양이다)

🔷 **판단은 그쪽 몫이다** — 본체는 랜딩에서만 정정본을 썼고 앱 문구는 건드리지 않았다.
고칠 생각이면 9개 언어가 같은 계보라 **한 번에 보는 편이 싸다.**

---

## 6. 라이브 상태

- 커밋·배포 상태와 라이브 확인 결과는 이 파일 하단이 아니라 **우편함 M-093 행**에 적는다
  (프로토콜 §4 — 「라이브에 반영됐다」는 확인했을 때만 적는다).
