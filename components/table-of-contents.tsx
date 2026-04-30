"use client";

import { motion } from "framer-motion";

export interface TocSection {
  id: string;
  title: string;
  level?: 2 | 3;
}

interface TableOfContentsProps {
  sections: TocSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  if (sections.length < 2) return null;

  let h2Count = 0;

  return (
    <motion.nav
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 }}
      className="bg-card border border-border rounded-2xl p-6 mb-8"
      aria-label="목차"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">목차</p>
      <ol className="space-y-1.5">
        {sections.map((s) => {
          const isH3 = s.level === 3;
          if (!isH3) h2Count++;
          return (
            <li key={s.id} className={`flex items-start gap-3 ${isH3 ? "ml-7" : ""}`}>
              {isH3 ? (
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
              ) : (
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
                  {h2Count}
                </span>
              )}
              <a
                href={`#${s.id}`}
                className={`hover:text-primary transition-colors leading-snug ${
                  isH3 ? "text-xs text-muted-foreground/70" : "text-sm text-muted-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {s.title}
              </a>
            </li>
          );
        })}
      </ol>
    </motion.nav>
  );
}
