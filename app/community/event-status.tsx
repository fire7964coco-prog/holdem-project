"use client";

import { useEffect, useState } from "react";
import { EVENT_CONDITION, getEventLabels, getEventState } from "@/lib/event-config";

export function useEventState() {
  const [state, setState] = useState<ReturnType<typeof getEventState> | null>(null);
  useEffect(() => {
    const update = () => setState(getEventState(new Date()));
    update();
    const timer = window.setInterval(update, 30_000);
    window.addEventListener("focus", update);
    return () => { window.clearInterval(timer); window.removeEventListener("focus", update); };
  }, []);
  return state;
}

export function EventStatusBadge({ lang = "ko" }: { lang?: string }) {
  const state = useEventState();
  const labels = getEventLabels(lang);
  return <span>{state ? state.isPaused ? labels.paused : state.isOpen ? labels.open : labels.closed : "…"}</span>;
}

export default function EventStatus({ lang = "ko" }: { lang?: string }) {
  const state = useEventState();
  const labels = getEventLabels(lang);
  const formatDate = (date: string) => new Intl.DateTimeFormat(lang === "ko" ? "ko-KR" : lang, {
    month: "short", day: "numeric", weekday: "short", hour: "numeric", minute: "2-digit", timeZone: "Asia/Seoul",
  }).format(new Date(date));
  return <div className="space-y-1 text-xs leading-relaxed text-muted-foreground">
    <p className="font-semibold text-foreground">{state ? `${labels.round} ${state.eventId} · ${state.isPaused ? labels.paused : state.isOpen ? labels.open : labels.closed}` : "…"}</p>
    {state && !state.isPaused && <p>{state.isOpen ? labels.draw : labels.next}: {formatDate(state.isOpen ? state.drawAt : state.nextOpenAt)} (KST)</p>}
    <p>{labels.conditions(EVENT_CONDITION.minPosts, EVENT_CONDITION.minLikes)}</p>
  </div>;
}
