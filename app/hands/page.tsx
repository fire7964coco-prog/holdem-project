import type { Metadata } from "next";
import HandsClient from "./hands-client";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function Page() {
  return <HandsClient />;
}
