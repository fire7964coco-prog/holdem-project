import { avatarCharacterSrc } from "@/lib/solver-feedback-config";

/**
 * 후기 프로필 이미지 — 기본 = 이니셜 원형(설계 §3-1). 서버·클라이언트 공용(훅 없음).
 * 올린 이미지·구글/카카오 사진은 256px 정사각이라 next/image 를 거치지 않는다(작은 원형 하나).
 */
export type AvatarValue = { kind: "char"; id: string } | { kind: "url"; url: string } | null;

const INITIAL_COLORS = [
  "bg-primary/15 text-primary",
  "bg-emerald-600/15 text-emerald-700 dark:text-emerald-300",
  "bg-stone-500/15 text-stone-700 dark:text-stone-300",
  "bg-amber-600/15 text-amber-800 dark:text-amber-300",
];

function hashOf(s: string): number {
  let h = 0;
  for (const ch of s) h = (h * 31 + ch.codePointAt(0)!) >>> 0;
  return h;
}

export default function ReviewAvatar({ nickname, avatar, size = 36 }: { nickname: string; avatar: AvatarValue; size?: number }) {
  const style = { width: size, height: size };
  if (avatar?.kind === "char") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={avatarCharacterSrc(avatar.id)} alt="" width={size} height={size} loading="lazy" className="rounded-full shrink-0 bg-muted" style={style} />;
  }
  if (avatar?.kind === "url") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={avatar.url} alt="" width={size} height={size} loading="lazy" referrerPolicy="no-referrer" className="rounded-full shrink-0 object-cover bg-muted" style={style} />;
  }
  const initial = [...(nickname.trim() || "?")][0].toUpperCase();
  return (
    <span aria-hidden="true" style={{ ...style, fontSize: Math.round(size * 0.42) }}
      className={`rounded-full shrink-0 inline-flex items-center justify-center font-bold ${INITIAL_COLORS[hashOf(nickname) % INITIAL_COLORS.length]}`}>
      {initial}
    </span>
  );
}
