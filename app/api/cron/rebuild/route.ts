import { NextResponse } from "next/server";

/**
 * 매일 15:20 UTC(00:20 KST) Vercel Cron이 호출 → Deploy Hook으로 전체 재배포.
 *
 * ★ 왜 필요한가
 *   /tournaments 의 기준일과 예정/진행중/종료 배지는 `lib/tournaments.ts`의
 *   computeStatus(t, todayISO)로 **계산**되는데, todayISO가 **빌드 시점**에 확정돼
 *   HTML에 문자열로 박힌다(ISR 아님 · prerender-manifest의 initialRevalidateSeconds=false).
 *   즉 계산은 자동인데 **다시 계산시킬 방아쇠가 없어서**, 푸시가 없으면 상태가 얼어붙는다.
 *   실제로 2026-07-28에 "WSOP 진행중"이 13일간 노출된 사고가 있었다
 *   (app/tournaments/layout.tsx 주석 참조).
 *   이 크론이 그 방아쇠다. 하루 한 번 리빌드하면 기준일·배지·메타·JSON-LD가 함께 갱신된다.
 *
 * ★ 자정 직후에 도는 이유
 *   기준일이 KST로 계산되므로(page.tsx: UTC+9), 00:20 KST에 돌리면 그날 하루 내내
 *   화면의 기준일이 실제 날짜와 일치한다.
 *
 * ★ 설정 (Vercel 대시보드)
 *   1) Settings → Git → Deploy Hooks 에서 main 브랜치용 훅 생성
 *   2) 그 URL을 환경변수 `DEPLOY_HOOK_URL` 로 등록 (Production)
 *   3) `CRON_SECRET` 은 draw-event 크론이 이미 쓰고 있는 값을 그대로 공유한다
 *   설정이 안 돼 있으면 500과 함께 이유를 돌려준다 — 조용히 실패하지 않게 한 것이다.
 */
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  // Vercel Cron 인증 헤더 확인 (draw-event와 동일 규약)
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const hook = process.env.DEPLOY_HOOK_URL;
  if (!hook) {
    return NextResponse.json(
      {
        error: "DEPLOY_HOOK_URL 미설정",
        hint: "Vercel → Settings → Git → Deploy Hooks 에서 main 훅을 만들고 환경변수로 등록하세요.",
      },
      { status: 500 },
    );
  }

  // KST 기준 오늘 — 로그에서 어느 날짜로 리빌드했는지 바로 보이게 함께 반환한다.
  const kstToday = new Date(Date.now() + 9 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  try {
    const res = await fetch(hook, { method: "POST" });
    if (!res.ok) {
      return NextResponse.json(
        { error: `Deploy Hook 응답 ${res.status}`, kstToday },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true, triggered: kstToday });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Deploy Hook 호출 실패", kstToday },
      { status: 502 },
    );
  }
}
