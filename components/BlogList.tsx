"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { POSTS, BLOG_CATEGORIES } from "@/lib/blog";

export default function BlogList() {
  const [active, setActive] = useState<string>("all");

  const tabs = useMemo(
    () => [
      { id: "all", label: "すべて", count: POSTS.length },
      ...BLOG_CATEGORIES.map((c) => ({
        id: c.id,
        label: c.label,
        count: POSTS.filter((p) => p.categoryId === c.id).length,
      })),
    ],
    []
  );

  const posts = useMemo(
    () =>
      active === "all" ? POSTS : POSTS.filter((p) => p.categoryId === active),
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
              onClick={() => setActive(t.id)}
              aria-pressed={isActive}
              className={`rounded-full border px-5 py-2 text-[13px] font-medium tracking-luxe transition-all ${
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-ink/[0.12] text-ink/70 hover:border-ink/30 hover:text-ink"
              }`}
            >
              {t.label}
              <span
                className={`ml-2 text-[11px] ${
                  isActive ? "text-white/70" : "text-ink/35"
                }`}
              >
                {t.count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mt-8 text-[13px] font-light tracking-luxe text-subtle">
        {posts.length}件の記事
      </p>

      {/* 記事カード */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card group flex flex-col">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-primary/30 px-3.5 py-1.5 text-[11px] font-medium tracking-luxe text-primary">
                {p.categoryLabel}
              </span>
              <time className="text-[12px] font-light tabular-nums text-subtle/70">
                {p.published}
              </time>
            </div>
            <h2 className="mt-5 flex-1 text-[clamp(16px,1.6vw,19px)] font-medium leading-[1.6] tracking-luxe text-ink">
              {p.title}
            </h2>
            <p className="mt-4 text-[13px] font-light leading-[1.8] text-subtle line-clamp-3">
              {p.description}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium tracking-luxe text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              続きを読む
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
