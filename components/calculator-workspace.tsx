"use client";

import { useEffect, useState, type KeyboardEvent, type ReactNode } from "react";

type CalculatorTab = { id: string; label: string; sub: string; icon: ReactNode; component: ReactNode };

/** Chrome strings. When given they replace the built-in ko/en pair (used by the dictionary-driven intl calculator). */
export type CalculatorWorkspaceLabels = {
  tablist: string;
  reset: string;
  resetAria: (tabLabel: string) => string;
  resetMessage: (tabLabel: string) => string;
};

const BUILTIN_LABELS: Record<"ko" | "en", CalculatorWorkspaceLabels> = {
  ko: {
    tablist: "계산기 선택",
    reset: "입력 초기화",
    resetAria: (l) => `${l} 초기화`,
    resetMessage: (l) => `${l} 입력값을 초기화했습니다.`,
  },
  en: {
    tablist: "Choose a calculator",
    reset: "Reset inputs",
    resetAria: (l) => `Reset ${l}`,
    resetMessage: (l) => `${l} inputs reset.`,
  },
};

/** Mount a tool on its first visit, then keep its inputs while another tool is open. */
export function CalculatorWorkspace({ tabs, locale = "ko", labels }: { tabs: readonly CalculatorTab[]; locale?: "ko" | "en"; labels?: CalculatorWorkspaceLabels }) {
  const L = labels ?? BUILTIN_LABELS[locale];
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const [active, setActive] = useState(tabs[0].id);
  const [visited, setVisited] = useState([tabs[0].id]);
  const [versions, setVersions] = useState<Record<string, number>>({});
  const [resetMessage, setResetMessage] = useState("");
  const tab = tabs.find(t => t.id === active)!;

  function select(id: string) {
    setActive(id);
    setVisited(current => current.includes(id) ? current : [...current, id]);
    setResetMessage("");
  }

  function moveTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % tabs.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = tabs.length - 1;
    else return;
    event.preventDefault();
    select(tabs[next].id);
    document.getElementById(`calculator-tab-${tabs[next].id}`)?.focus();
  }

  function reset() {
    setVersions(current => ({ ...current, [active]: (current[active] ?? 0) + 1 }));
    setResetMessage(L.resetMessage(tab.label));
  }

  return (
    <>
      <div role="tablist" aria-busy={!ready} aria-label={L.tablist}
        className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
        {tabs.map((t, index) => (
          <button key={t.id} type="button" role="tab" id={`calculator-tab-${t.id}`} disabled={!ready}
            aria-controls={`calculator-panel-${t.id}`} aria-selected={active === t.id} tabIndex={active === t.id ? 0 : -1}
            onClick={() => select(t.id)} onKeyDown={event => moveTab(event, index)}
            className={`flex flex-col items-center justify-center gap-1 sm:gap-1.5 w-[72px] sm:w-auto sm:flex-1 sm:basis-0 min-h-[50px] sm:min-h-[62px] px-1 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold border transition-all ${active === t.id
              ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
              : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"}`}>
            {t.icon}
            <span className="leading-tight text-center">{t.label}</span>
          </button>
        ))}
      </div>
      <div className="calc-console rounded-2xl overflow-hidden">
        <div className="flex px-4 py-2 sm:px-6 sm:py-5 border-b border-primary/20 items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-primary/20 items-center justify-center text-primary flex-shrink-0">{tab.icon}</div>
          <div className="hidden sm:block">
            <h2 className="text-lg font-black text-foreground leading-tight">{tab.label}</h2>
            <p className="text-xs text-muted-foreground">{tab.sub}</p>
          </div>
          <button type="button" onClick={reset} disabled={!ready}
            aria-label={L.resetAria(tab.label)}
            className="ml-auto min-h-9 px-3 py-1.5 rounded-lg border border-border text-xs font-bold text-foreground hover:border-primary hover:bg-primary/10">
            {L.reset}
          </button>
          <span role="status" className="sr-only">{resetMessage}</span>
        </div>
        {tabs.map(t => (
          <div key={`${t.id}-${versions[t.id] ?? 0}`} role="tabpanel" id={`calculator-panel-${t.id}`}
            aria-labelledby={`calculator-tab-${t.id}`} hidden={active !== t.id} tabIndex={0} className="p-4 sm:p-6">
            {visited.includes(t.id) ? t.component : null}
          </div>
        ))}
      </div>
    </>
  );
}
