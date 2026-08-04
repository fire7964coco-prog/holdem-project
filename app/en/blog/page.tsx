import type { Metadata } from "next";
import { intlBlogIndexMetadata, IntlBlogIndex } from "@/lib/intl-blog-index";
import HubPage from "@/components/hub-page";

export const metadata: Metadata = intlBlogIndexMetadata("en");

export default function Page() {
  return (
    <HubPage title="Blog" locale="en">
      <IntlBlogIndex locale="en" inShell />
    </HubPage>
  );
}
