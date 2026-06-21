import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

const LANG_NAME: Record<string, string> = {
  ko: "Korean", en: "English", ja: "Japanese", zh: "Simplified Chinese",
  es: "Spanish", de: "German", pt: "Portuguese (Brazil)", ar: "Arabic",
  tr: "Turkish", vi: "Vietnamese", id: "Indonesian", ms: "Malay", hi: "Hindi",
};

const SYSTEM_PROMPT = `You are a professional poker community translator.
Translate the user's message into the target language naturally, as a poker player would write it.
Keep common poker terms in their widely-used form (e.g. 3-bet, pot odds, ICM, all-in, bluff, bankroll, buy-in, GTO, short stack).
Do not add explanations, notes, or quotation marks. Output ONLY the translated text.`;

export async function POST(req: Request) {
  let body: { postId?: string; target?: string; text?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const { postId, target, text } = body;
  if (!target || !text) {
    return NextResponse.json({ error: "Missing target or text" }, { status: 400 });
  }

  const targetName = LANG_NAME[target] ?? "English";

  // 1) 캐시 조회 (public read)
  if (postId) {
    const supabase = await createClient();
    const { data: cached } = await supabase
      .from("translations")
      .select("content")
      .eq("post_id", postId)
      .eq("language", target)
      .maybeSingle();
    if (cached?.content) {
      return NextResponse.json({ translated: cached.content, cached: true });
    }
  }

  // 2) Gemini 호출
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "GEMINI_API_KEY not configured" }, { status: 503 });
  }

  let translated = "";
  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ parts: [{ text: `Target language: ${targetName}\n\n${text}` }] }],
          generationConfig: {
            temperature: 0.3,
            // 번역엔 추론 불필요 — thinking 끄면 빠르고 저렴
            thinkingConfig: { thinkingBudget: 0 },
          },
        }),
      }
    );
    if (!res.ok) {
      return NextResponse.json({ error: "Translation service error" }, { status: 502 });
    }
    const data = await res.json();
    translated = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? "";
  } catch {
    return NextResponse.json({ error: "Translation request failed" }, { status: 502 });
  }

  if (!translated) {
    return NextResponse.json({ error: "Empty translation" }, { status: 502 });
  }

  // 3) 캐시 저장 (service role 있을 때만)
  if (postId) {
    const admin = createAdminClient();
    if (admin) {
      await admin
        .from("translations")
        .upsert({ post_id: postId, language: target, content: translated }, { onConflict: "post_id,language" });
    }
  }

  return NextResponse.json({ translated, cached: false });
}
