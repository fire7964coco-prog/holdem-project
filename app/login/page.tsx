"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Mode = "login" | "signup";

const GOLD = "#d4af37";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const detectLanguage = () => {
    if (typeof navigator === "undefined") return "ko";
    const lang = navigator.language.slice(0, 2);
    return ["ko", "en", "ja", "zh"].includes(lang) ? lang : "en";
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);
    setMsg(null);

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: nickname || email.split("@")[0],
            language: detectLanguage(),
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) {
        setErr(error.message);
      } else {
        setMsg("확인 메일을 보냈습니다. 메일함을 확인해주세요.");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setErr(error.message);
      } else {
        router.push("/");
        router.refresh();
      }
    }
    setLoading(false);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#0b1120", fontFamily: "'Inter', 'Pretendard', sans-serif" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-7"
        style={{ background: "#0f1a2e", border: "1px solid rgba(212,175,55,0.2)" }}
      >
        <div className="flex flex-col items-center mb-6">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
            style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)" }}
          >
            <span className="font-black text-sm" style={{ color: "#0b1120" }}>HM</span>
          </div>
          <h1 className="text-lg font-bold" style={{ color: "#f0e8c8" }}>
            {mode === "login" ? "로그인" : "회원가입"}
          </h1>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
            HoldemMaster Community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === "signup" && (
            <input
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none"
              style={{ background: "rgba(255,255,255,0.06)", color: "#f0e8c8", border: "1px solid rgba(255,255,255,0.1)" }}
            />
          )}
          <input
            type="email"
            required
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
            style={{ background: "rgba(255,255,255,0.06)", color: "#f0e8c8", border: "1px solid rgba(255,255,255,0.1)" }}
          />
          <input
            type="password"
            required
            minLength={6}
            placeholder="비밀번호 (6자 이상)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none"
            style={{ background: "rgba(255,255,255,0.06)", color: "#f0e8c8", border: "1px solid rgba(255,255,255,0.1)" }}
          />

          {err && <p className="text-xs" style={{ color: "#f87171" }}>{err}</p>}
          {msg && <p className="text-xs" style={{ color: "#34d399" }}>{msg}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-sm active:scale-[0.98] transition-transform disabled:opacity-50"
            style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: "#0b1120" }}
          >
            {loading ? "처리 중..." : mode === "login" ? "로그인" : "가입하기"}
          </button>
        </form>

        <div className="mt-5 text-center">
          <button
            onClick={() => { setMode(mode === "login" ? "signup" : "login"); setErr(null); setMsg(null); }}
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {mode === "login" ? (
              <>계정이 없으신가요? <span style={{ color: GOLD, fontWeight: 600 }}>회원가입</span></>
            ) : (
              <>이미 계정이 있으신가요? <span style={{ color: GOLD, fontWeight: 600 }}>로그인</span></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
