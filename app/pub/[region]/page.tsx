import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PUB_REGIONS, REGION_MAP } from "@/lib/pubs";
import PubRegionClient from "./pub-region-client";

const SITE = "https://www.holdemmaster.com";

export function generateStaticParams() {
  return PUB_REGIONS.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { region: string };
}): Promise<Metadata> {
  const region = REGION_MAP[params.region];
  if (!region) return { title: "지역을 찾을 수 없습니다" };

  const url = `${SITE}/pub/${region.slug}`;
  return {
    title: region.metaTitle,
    description: region.metaDesc,
    keywords: `${region.name} 홀덤펍, ${region.name} 홀덤, ${region.name} 포커, ${region.fullName} 홀덤펍, 홀덤펍 추천`,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: region.metaTitle,
      description: region.metaDesc,
      siteName: "홀덤마스터",
      locale: "ko_KR",
      images: [{ url: `${SITE}/opengraph.jpg`, width: 1200, height: 630, alt: region.metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: region.metaTitle,
      description: region.metaDesc,
      images: [`${SITE}/opengraph.jpg`],
    },
  };
}

export default function Page({ params }: { params: { region: string } }) {
  const region = REGION_MAP[params.region];
  if (!region) notFound();
  return <PubRegionClient region={region} />;
}
