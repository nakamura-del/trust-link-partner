"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { FAQ_CATEGORIES } from "@/lib/faqs";

export default function FaqList() {
  const [active, setActive] = useState<string>("all");
  const [open, setOpen] = useState<string | null>(null);

  const tabs = useMemo(
    () => [
      { id: "all", label: "すべて" },
      ...FAQ_CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
    ],
    []
  );

  const groups = useMemo(
    () =>
      active === "all"
        ? FAQ_CATEGORIES
        : FAQ_CATEGORIES.filter((c) => c.id === active),
    [active]
  );

  return (
    <div>
      {/* カテゴリーフィルター */}
      <div className="flex flex-wrap gap-2.5">
        {tabs.map((t) => {
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setActive(t.id);
                setOpen(null);
              }}
              aria-pressed={isActive}
              className={`rounded-full border px-5 py-2 text-[13px] font-medium tracking-luxe transition-all ${
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-ink/[0.12] text-ink/70 hover:border-ink/30 hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Q&A（カテゴリーごと） */}
      <div className="mt-16 space-y-16">
        {groups.map((cat) => (
          <section key={cat.id}>
            <h2
              className="font-display text-[12px] font-medium uppercase text-primary/80"
              style={{ letterSpacing: "0.18em" }}
            >
              {cat.label}
            </h2>
            <dl className="mt-6 border-t border-ink/[0.08]">
              {cat.faqs.map((f, i) => {
                const key = `${cat.id}-${i}`;
                const isOpen = open === key;
                return (
                  <div key={key} className="border-b border-ink/[0.08]">
                    <dt>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : key)}
                        aria-expanded={isOpen}
                        className="flex w-full items-start justify-between gap-6 py-6 text-left"
                      >
                        <span className="flex gap-4 text-[clamp(15px,1.5vw,18px)] font-medium leading-relaxed text-ink">
                          <span className="text-primary/70">Q.</span>
                          <span>{f.q}</span>
                        </span>
                        <span
                          className={`mt-1 shrink-0 text-ink/40 transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          <Plus className="h-5 w-5" />
                        </span>
                      </button>
                    </dt>
                    <dd
                      className={`grid overflow-hidden transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0">
                        <p className="flex gap-4 pb-7 pr-10 text-[clamp(14px,1.3vw,16px)] font-light leading-[1.9] text-subtle">
                          <span className="text-primary/40">A.</span>
                          <span>{f.a}</span>
                        </p>
                      </div>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
