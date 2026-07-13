import type { Metadata } from "next";
import { intlBlogIndexMetadata, IntlBlogIndex } from "@/lib/intl-blog-index";

export const metadata: Metadata = intlBlogIndexMetadata("bn");

export default function Page() {
  return <IntlBlogIndex locale="bn" />;
}
