import type { Metadata } from "next";
import { intlBlogIndexMetadata, IntlBlogIndex } from "@/lib/intl-blog-index";
import HubPage from "@/components/hub-page";

export const metadata: Metadata = intlBlogIndexMetadata("ja");

export default function Page() {
  return (
    // title은 마스트헤드의 「지금 여기」 표시(h1 아님). CHROME.ja.blogLabel과 같은 값이다.
    <HubPage title="ブログ" locale="ja">
      <IntlBlogIndex locale="ja" inShell />
    </HubPage>
  );
}
