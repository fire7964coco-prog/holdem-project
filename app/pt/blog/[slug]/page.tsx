import type { Metadata } from "next";
import { postsForLocale } from "@/lib/intl-posts";
import { intlBlogMetadata, IntlBlogArticle } from "@/lib/intl-blog-page";

export function generateStaticParams() {
  return postsForLocale("pt").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return intlBlogMetadata("pt", params.slug);
}

export default function Page({ params }: { params: { slug: string } }) {
  return <IntlBlogArticle locale="pt" slug={params.slug} />;
}
