import type { Metadata } from "next";
import { intlBlogIndexMetadata, IntlBlogIndex } from "@/lib/intl-blog-index";

export const metadata: Metadata = intlBlogIndexMetadata("zh");

export default function Page() {
  return <IntlBlogIndex locale="zh" />;
}
