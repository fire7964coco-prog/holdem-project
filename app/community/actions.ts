"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/community");
}

export async function createPost(formData: FormData) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/community/login");
  }

  const title = String(formData.get("title") || "").trim();
  const content = String(formData.get("content") || "").trim();

  if (!content) {
    return { error: "내용을 입력해주세요." };
  }

  // 작성자 언어를 글 언어로 사용
  const { data: profile } = await supabase
    .from("profiles")
    .select("language")
    .eq("id", user.id)
    .single();

  const language = profile?.language ?? "ko";

  const { error } = await supabase.from("posts").insert({
    author_id: user.id,
    type: "community",
    language,
    original_lang: language,
    title: title || content.slice(0, 40),
    content,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/community");
  return { success: true };
}

export async function toggleLike(postId: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "로그인이 필요합니다." };
  }

  const { data: existing } = await supabase
    .from("likes")
    .select("id")
    .eq("post_id", postId)
    .eq("user_id", user.id)
    .maybeSingle();

  if (existing) {
    await supabase.from("likes").delete().eq("id", existing.id);
  } else {
    await supabase.from("likes").insert({ post_id: postId, user_id: user.id });
  }

  revalidatePath("/community");
  return { success: true };
}
