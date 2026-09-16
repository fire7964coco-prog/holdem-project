export type BlogFilters = { query: string; category: string; tag: string | null };

export function readBlogFilters(search: string, categories: readonly string[]): BlogFilters {
  const params = new URLSearchParams(search);
  const category = params.get("category") ?? "전체";
  return {
    query: params.get("q") ?? "",
    category: categories.includes(category) ? category : "전체",
    tag: params.get("tag") || null,
  };
}

export function blogFilterHref({ query, category, tag }: BlogFilters): string {
  const params = new URLSearchParams();
  if (query.trim()) params.set("q", query.trim());
  if (category !== "전체") params.set("category", category);
  if (tag) params.set("tag", tag);
  const search = params.toString();
  return search ? `/blog?${search}` : "/blog";
}
