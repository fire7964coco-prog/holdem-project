import type { Metadata } from "next";
import { intlBlogIndexMetadata, IntlBlogIndex } from "@/lib/intl-blog-index";
import HubPage from "@/components/hub-page";

export const metadata: Metadata = intlBlogIndexMetadata("es");

export default function Page() {
  return (
    // title은 마스트헤드의 「지금 여기」 표시(h1 아님). CHROME.es.blogLabel과 같은 값이다.
    <HubPage title="Blog" locale="es">
      <IntlBlogIndex locale="es" inShell />
    </HubPage>
  );
}
