import type { Metadata } from "next";
import { intlBlogIndexMetadata, IntlBlogIndex } from "@/lib/intl-blog-index";

export const metadata: Metadata = intlBlogIndexMetadata("ro");

export default function Page() {
  return <IntlBlogIndex locale="ro" />;
}
