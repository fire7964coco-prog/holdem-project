"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Popup = {
  id: string;
  title: string;
  body: string | null;
  image_url: string | null;
  link_url: string | null;
  link_label: string | null;
  locale: string | null;
  priority: number;
};

const DISMISS_KEY = (id: string) => `popupDismissed:${id}`;

/**
 * 사이트 전역 팝업. 활성+기간 내 팝업만 RLS가 공개(popups_read)하므로
 * 브라우저 클라이언트로 바로 읽는다. 현재 경로 언어에 맞는 최우선 팝업 1개를
 * 표시하고, 닫으면 localStorage에 기록해 다시 뜨지 않는다.
 */
export default function SitePopup() {
  const [popup, setPopup] = useState<Popup | null>(null);

  useEffect(() => {
    // 어드민 경로에선 표시 안 함
    if (location.pathname.startsWith("/admin")) return;
    const seg = location.pathname.split("/")[1];
    const locale = /^[a-z]{2}$/.test(seg) ? seg : "ko";

    const supabase = createClient();
    supabase
      .from("popups")
      .select("id,title,body,image_url,link_url,link_label,locale,priority")
      .order("priority", { ascending: false })
      .then(({ data }) => {
        const list = (data ?? []) as Popup[];
        const match = list.find(
          (p) => (p.locale === null || p.locale === locale) && !localStorage.getItem(DISMISS_KEY(p.id))
        );
        if (match) setPopup(match);
      });
  }, []);

  if (!popup) return null;

  const dismiss = () => {
    try { localStorage.setItem(DISMISS_KEY(popup.id), "1"); } catch { /* noop */ }
    setPopup(null);
  };

  return (
    <div
      onClick={dismiss}
      style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: 400, background: "#1c1810", border: "1px solid #c9a227", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
      >
        {popup.image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={popup.image_url} alt={popup.title} style={{ width: "100%", display: "block" }} loading="lazy" />
        )}
        <div style={{ padding: 20, fontFamily: "var(--font-inter), sans-serif", color: "#f4ead2" }}>
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>{popup.title}</h3>
          {popup.body && <p style={{ margin: "10px 0 0", fontSize: 14, color: "#a8977a", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>{popup.body}</p>}
          <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
            {popup.link_url && (
              <a href={popup.link_url} onClick={dismiss}
                style={{ flex: 1, textAlign: "center", padding: "10px", borderRadius: 9, background: "#c9a227", color: "#1a1508", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
                {popup.link_label || "자세히 보기"}
              </a>
            )}
            <button onClick={dismiss}
              style={{ flex: popup.link_url ? "0 0 auto" : 1, padding: "10px 16px", borderRadius: 9, background: "transparent", border: "1px solid #2e2818", color: "#a8977a", fontSize: 14, cursor: "pointer" }}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
