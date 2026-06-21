"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Mode = "login" | "signup";

const GOLD = "#d4af37";
const BG = "#0b1120";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<"google" | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const detectLanguage = () => {
    if (typeof navigator === "undefined") return "ko";
    const lang = navigator.language.slice(0, 2);
    return ["ko", "en", "ja", "zh"].includes(lang) ? lang : "en";
  };

  async function handleSocialLogin(provider: "google" | "kakao") {
    setSocialLoading(provider);
    setErr(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams:
          provider === "google"
            ? { access_type: "offline", prompt: "consent" }
            : undefined,
      },
    });
    if (error) {
      setErr(error.message);
      setSocialLoading(null);
    }
    // 성공 시 Supabase가 자동으로 provider 페이지로 리다이렉트
  }

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
      style={{ background: BG, fontFamily: "'Inter', 'Pretendard', sans-serif" }}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-7"
        style={{ background: "#0f1a2e", border: "1px solid rgba(212,175,55,0.2)" }}
      >
        {/* 로고 */}
        <div className="flex flex-col items-center mb-6">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
            style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)" }}
          >
            <span className="font-black text-sm" style={{ color: BG }}>HM</span>
          </div>
          <h1 className="text-lg font-bold" style={{ color: "#f0e8c8" }}>
            {mode === "login" ? "로그인" : "회원가입"}
          </h1>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>
            HoldemMaster Community
          </p>
        </div>

        {/* 소셜 로그인 버튼 */}
        <div className="space-y-2.5 mb-5">
          <button
            onClick={() => handleSocialLogin("google")}
            disabled={!!socialLoading}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl text-sm font-semibold transition-opacity disabled:opacity-50 active:scale-[0.98]"
            style={{ background: "#fff", color: "#1f1f1f" }}
          >
            {socialLoading === "google" ? (
              <span>처리 중...</span>
            ) : (
              <>
                {/* Google SVG */}
                <svg width="18" height="18" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                Google로 계속하기
              </>
            )}
          </button>

        </div>

        {/* 구분선 */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>또는 이메일로</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />
        </div>

        {/* 이메일/비밀번호 폼 */}
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
            style={{ background: "linear-gradient(135deg,#d4af37,#f0d060)", color: BG }}
          >
            {loading ? "처리 중..." : mode === "login" ? "로그인" : "가입하기"}
          </button>
        </form>

        <div className="mt-5 text-center">
          <button
            onClick={() => {
              setMode(mode === "login" ? "signup" : "login");
              setErr(null);
              setMsg(null);
            }}
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
