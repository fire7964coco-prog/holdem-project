"use client";

import { useState } from "react";

/**
 * 유튜브 lite-facade — 썸네일만 그리고, 클릭해야 iframe을 붙인다(CWV 보호 · docs/video-embed-playbook.md §4).
 * 블로그 렌더러의 `:::youtube[ID]:::`(lib/render-markdown.ts)와 같은 방식을 React로 옮긴 것.
 * 🔴 자체 채널(홀덤마스터) 영상만 쓴다.
 * 썸네일 = sddefault(640×480 · 4:3 레터박스) → 16:9 상자에서 object-cover로 위아래 검은 띠만 잘린다.
 */
export function YouTubeLite({
  id,
  title,
  caption,
  playLabel = "영상 재생",
}: {
  id: string;
  title: string;
  caption?: string;
  /** 재생 버튼 aria-label 꼬리 — 로케일 랜딩은 자기 언어로 넘긴다 (EN = "Play video") */
  playLabel?: string;
}) {
  const [playing, setPlaying] = useState(false);
  return (
    <figure className="mt-6">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-black shadow-md">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer"
            aria-label={`${title} — ${playLabel}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi_webp/${id}/sddefault.webp`}
              alt={title}
              loading="lazy"
              width={640}
              height={480}
              className="h-full w-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/10">
              <span className="flex h-12 w-[68px] items-center justify-center rounded-xl bg-red-600 opacity-90 transition-opacity group-hover:opacity-100">
                <span className="ml-1 h-0 w-0 border-y-[11px] border-l-[19px] border-y-transparent border-l-white" />
              </span>
            </span>
          </button>
        )}
      </div>
      {caption && <figcaption className="mt-2 text-xs text-muted-foreground">{caption}</figcaption>}
    </figure>
  );
}
