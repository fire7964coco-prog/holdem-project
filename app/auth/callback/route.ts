import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { loginHref, resetPasswordHref, safeAuthNext } from "@/lib/auth-navigation";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = safeAuthNext(searchParams.get("next"));
  const recovery = searchParams.get("flow") === "recovery";

  if (code) {
    try {
      const supabase = await createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) return NextResponse.redirect(new URL(recovery ? resetPasswordHref(next) : next, origin));
    } catch {
      // Expired codes or connectivity failures return to a retryable form.
    }
  }

  return NextResponse.redirect(new URL(loginHref(next, {
    error: recovery ? "recovery" : "auth",
    ...(recovery ? { mode: "recovery" as const } : {}),
  }), origin));
}
