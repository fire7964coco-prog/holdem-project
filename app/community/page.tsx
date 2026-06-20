"use client";

export default function CommunityPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "#0b1120", fontFamily: "'Inter', 'Pretendard', sans-serif" }}
    >
      <div
        className="rounded-2xl p-8 text-center max-w-sm w-full mx-4"
        style={{ background: "#0f1a2e", border: "1px solid rgba(212,175,55,0.2)" }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
          style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)" }}
        >
          <span className="font-black text-sm" style={{ color: "#0b1120" }}>HM</span>
        </div>
        <h1 className="text-lg font-bold mb-2" style={{ color: "#f0e8c8" }}>
          Community
        </h1>
        <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
          Phase 0 — 연결 확인 완료
        </p>
        <p className="text-xs" style={{ color: "rgba(212,175,55,0.5)" }}>
          /community 라우트 정상 동작
        </p>
      </div>
    </div>
  );
}
