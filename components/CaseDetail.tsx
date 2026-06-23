import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/lib/cases";
import PageCTA from "@/components/PageCTA";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-display text-[11px] font-medium uppercase text-primary/80"
      style={{ letterSpacing: "0.18em" }}
    >
      {children}
    </p>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 border-t border-ink/[0.08]">
      {items.map((t, i) => (
        <li
          key={i}
          className="flex gap-5 border-b border-ink/[0.08] py-6 text-[clamp(15px,1.3vw,17px)] font-light leading-relaxed text-subtle"
        >
          <span className="font-display text-[14px] font-medium tabular-nums text-primary/50">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** 個別導入事例ページの本文（課題→支援→導入→結果→お客様の声） */
export default function CaseDetail({ data }: { data: CaseStudy }) {
  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-14 pt-40">
        <div className="grid-overlay absolute inset-0 mask-fade-y" />
        <div className="container-tlp relative z-10 max-w-4xl">
          <p
            className="font-display text-[12px] font-medium uppercase text-primary/80"
            style={{ letterSpacing: "0.18em" }}
          >
            Case {data.no}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-ink/[0.12] px-4 py-1.5 text-[12px] font-medium tracking-luxe text-subtle">
              {data.industry}
            </span>
            <span className="rounded-full border border-primary/30 px-4 py-1.5 text-[12px] font-medium tracking-luxe text-primary">
              {data.service}
            </span>
          </div>
          <h1 className="mt-8 text-[clamp(28px,4vw,52px)] font-medium leading-[1.3] tracking-[-0.01em] text-ink">
            {data.title}
          </h1>
          <p className="mt-8 max-w-2xl text-[clamp(16px,1.5vw,19px)] font-light leading-[1.9] text-[#404040]">
            {data.lead}
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-white px-6 pb-8">
        <div className="container-tlp">
          <div className="grid grid-cols-1 gap-px overflow-hidden border-y border-ink/[0.08] sm:grid-cols-3">
            {data.metrics.map((m) => (
              <div key={m.label} className="bg-white px-2 py-8 sm:px-8">
                <p
                  className="font-display text-[11px] font-medium uppercase text-subtle"
                  style={{ letterSpacing: "0.16em" }}
                >
                  {m.label}
                </p>
                <p className="mt-3 text-[clamp(26px,3vw,40px)] font-medium tracking-tight2 text-primary">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1. 課題 */}
      <section className="section bg-white pt-8 md:pt-12">
        <div className="container-tlp max-w-3xl">
          <Label>Challenge</Label>
          <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
            課題
          </h2>
          <List items={data.challenge} />
        </div>
      </section>

      {/* 2. 支援内容 */}
      <section className="section bg-surface">
        <div className="container-tlp max-w-3xl">
          <Label>Support</Label>
          <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
            支援内容
          </h2>
          <List items={data.support} />
        </div>
      </section>

      {/* 3. 導入内容 */}
      <section className="section bg-white">
        <div className="container-tlp max-w-3xl">
          <Label>Implementation</Label>
          <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
            導入内容
          </h2>
          <List items={data.implementation} />
        </div>
      </section>

      {/* 4. 結果 */}
      <section className="section bg-surface">
        <div className="container-tlp max-w-3xl">
          <Label>Results</Label>
          <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
            結果
          </h2>
          <p className="mt-5 text-[14px] font-light tracking-luxe text-subtle">
            導入期間：{data.period}
          </p>
          <List items={data.results} />
        </div>
      </section>

      {/* 5. お客様の声 */}
      <section className="section bg-white">
        <div className="container-tlp max-w-3xl">
          <Label>Voice</Label>
          <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
            お客様の声
          </h2>
          <blockquote className="mt-10 border-l-2 border-primary/40 pl-8">
            <p className="text-[clamp(18px,2vw,26px)] font-light leading-[1.85] text-ink">
              「{data.voice}」
            </p>
            <footer className="mt-6 text-[14px] font-light tracking-luxe text-subtle">
              — {data.industry}　{data.voiceRole}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <PageCTA
        title="同じような課題を、お持ちではありませんか？"
        body="貴社の状況に合わせて、最適な進め方をご提案します。まずはお気軽にご相談ください。"
      />

      {/* 戻る */}
      <div className="bg-surface px-6 pb-24">
        <div className="container-tlp">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-[14px] font-medium tracking-luxe text-primary transition-colors hover:text-primary-deep"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            導入事例一覧へ戻る
          </Link>
        </div>
      </div>
    </article>
  );
}
