import { computeStatus, type Tournament } from "./tournaments";

export type ScheduleStatus = "active" | "ongoing" | "upcoming" | "ended" | "all";
export type ScheduleFilters = {
  region: "all" | "domestic" | "international";
  status: ScheduleStatus;
  month: string;
};
export const DEFAULT_SCHEDULE_FILTERS: ScheduleFilters = { region: "all", status: "active", month: "" };

export function readScheduleFilters(search: string): ScheduleFilters {
  const p = new URLSearchParams(search);
  const region = p.get("region");
  const status = p.get("status");
  const month = p.get("month") ?? "";
  return {
    region: region === "domestic" || region === "international" ? region : "all",
    status: ["ongoing", "upcoming", "ended", "all"].includes(status ?? "") ? status as ScheduleStatus : "active",
    month: /^\d{4}-(0[1-9]|1[0-2])$/.test(month) ? month : "",
  };
}

export function scheduleFilterHref(filters: ScheduleFilters, hash = "tournament-schedule"): string {
  const p = new URLSearchParams();
  if (filters.region !== "all") p.set("region", filters.region);
  if (filters.status !== "active") p.set("status", filters.status);
  if (filters.month) p.set("month", filters.month);
  const query = p.toString();
  return `/tournaments${query ? `?${query}` : ""}#${hash}`;
}

export function matchesSchedule(t: Tournament, today: string, filters: ScheduleFilters): boolean {
  if (filters.region !== "all" && t.type !== filters.region) return false;
  const status = computeStatus(t, today);
  if (filters.status === "active" && status === "ended") return false;
  if (filters.status !== "active" && filters.status !== "all" && status !== filters.status) return false;
  if (filters.month) {
    if (!t.startDate) return false;
    // 시작 월뿐 아니라 선택한 달에 걸쳐 진행되는 대회도 포함한다.
    if (t.startDate > `${filters.month}-31` || (t.endDate ?? t.startDate) < `${filters.month}-01`) return false;
  }
  return true;
}

export function orderSchedule(tournaments: readonly Tournament[], today: string): Tournament[] {
  const order = { ongoing: 0, upcoming: 1, ended: 2 };
  return [...tournaments].sort((a, b) => {
    const statusA = computeStatus(a, today), statusB = computeStatus(b, today);
    const statusOrder = order[statusA] - order[statusB];
    if (statusOrder) return statusOrder;
    if (statusA === "ended") return (b.endDate ?? "").localeCompare(a.endDate ?? "");
    return (a.startDate ?? "9999").localeCompare(b.startDate ?? "9999");
  });
}

export function scheduleMonths(tournaments: readonly Tournament[]): string[] {
  const months = new Set<string>();
  for (const t of tournaments) {
    if (!t.startDate) continue;
    const end = (t.endDate ?? t.startDate).slice(0, 7);
    let cursor = t.startDate.slice(0, 7);
    while (cursor <= end) {
      months.add(cursor);
      const [year, month] = cursor.split("-").map(Number);
      cursor = `${month === 12 ? year + 1 : year}-${String(month === 12 ? 1 : month + 1).padStart(2, "0")}`;
    }
  }
  return [...months].sort();
}
