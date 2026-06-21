"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { CURRENT_EVENT_ID, EVENT_CONDITION } from "@/lib/event-config";

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

export async function addComment(postId: string, content: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "로그인이 필요합니다." };
  }

  const text = content.trim();
  if (!text) {
    return { error: "내용을 입력해주세요." };
  }

  const { error } = await supabase.from("comments").insert({
    post_id: postId,
    author_id: user.id,
    content: text,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath(`/community/post/${postId}`);
  revalidatePath("/community");
  return { success: true };
}

export async function deleteComment(commentId: string, postId: string) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "로그인이 필요합니다." };
  }

  const { error } = await supabase
    .from("comments")
    .delete()
    .eq("id", commentId)
    .eq("author_id", user.id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath(`/community/post/${postId}`);
  revalidatePath("/community");
  return { success: true };
}

// ── 이벤트 ─────────────────────────────────────────────────

/** 현재 유저의 이벤트 참여 데이터 조회 */
export async function getEventData() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return { myEntry: null, myPostCount: 0, myLikeCount: 0 };
  }

  const [entryRes, postsRes] = await Promise.all([
    supabase
      .from("event_entries")
      .select("numbers")
      .eq("user_id", user.id)
      .eq("event_id", CURRENT_EVENT_ID)
      .maybeSingle(),
    supabase
      .from("posts")
      .select("like_count")
      .eq("author_id", user.id)
      .eq("type", "community"),
  ]);

  const myPostCount = postsRes.data?.length ?? 0;
  const myLikeCount = postsRes.data?.reduce((s, p) => s + (p.like_count ?? 0), 0) ?? 0;

  return {
    myEntry: entryRes.data ?? null,
    myPostCount,
    myLikeCount,
  };
}

/** 이벤트 번호 제출 */
export async function submitEventEntry(numbers: number[]) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { error: "로그인이 필요합니다." };
  if (numbers.length !== 6) return { error: "번호 6개를 선택해주세요." };

  // 참여 조건 체크
  const { data: posts } = await supabase
    .from("posts")
    .select("like_count")
    .eq("author_id", user.id)
    .eq("type", "community");

  const myPostCount = posts?.length ?? 0;
  const myLikeCount = posts?.reduce((s, p) => s + (p.like_count ?? 0), 0) ?? 0;

  const isEligible =
    myPostCount >= EVENT_CONDITION.minPosts &&
    myLikeCount >= EVENT_CONDITION.minLikes;

  if (!isEligible) {
    return {
      error: `참여 조건 미충족 (글 ${EVENT_CONDITION.minPosts}개, 좋아요 ${EVENT_CONDITION.minLikes}개 필요)`,
    };
  }

  const { error } = await supabase.from("event_entries").insert({
    user_id: user.id,
    event_id: CURRENT_EVENT_ID,
    numbers: numbers.sort((a, b) => a - b),
    is_eligible: true,
  });

  if (error) {
    if (error.code === "23505") return { error: "이미 참여하셨습니다." };
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
