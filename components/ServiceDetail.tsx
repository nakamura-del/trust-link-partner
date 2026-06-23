import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceContent } from "@/lib/services";
import PageCTA from "@/components/PageCTA";

/** 個別サービスページの本文テンプレート（概要〜FAQ〜CTA） */
export default function ServiceDetail({ data }: { data: ServiceContent }) {
  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white px-6 pb-16 pt-40">
        <div className="grid-overlay absolute inset-0 mask-fade-y" />
        <div className="container-tlp relative z-10 max-w-4xl">
          <p
            className="font-display text-[12px] font-medium uppercase text-primary/80"
            style={{ letterSpacing: "0.18em" }}
          >
            Service {data.no}
          </p>
          <h1 className="mt-7 text-[clamp(34px,5vw,62px)] font-bold leading-[1.25] tracking-[0.02em] text-ink">
            {data.title}
          </h1>
          <p className="mt-3 font-display text-[13px] uppercase tracking-[0.18em] text-subtle/70">
            {data.titleEn}
          </p>
          <p className="mt-10 max-w-2xl text-[clamp(16px,1.6vw,20px)] font-light leading-[1.9] text-[#404040]">
            {data.lead}
          </p>
        </div>
      </section>

      {/* 1. 概要 */}
      <section className="section bg-white pt-8 md:pt-10">
        <div className="container-tlp max-w-3xl">
          <SectionLabel>Overview</SectionLabel>
          <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
            概要
          </h2>
          <div className="mt-8 space-y-6 text-[clamp(15px,1.3vw,17px)] font-light leading-[1.95] text-subtle">
            {data.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 2. こんなお悩みありませんか？ */}
      <section className="section bg-surface">
        <div className="container-tlp max-w-3xl">
          <SectionLabel>Issues</SectionLabel>
          <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
            こんなお悩みありませんか？
          </h2>
          <ul className="mt-10 border-t border-ink/[0.08]">
            {data.problems.map((p, i) => (
              <li
                key={i}
                className="flex gap-5 border-b border-ink/[0.08] py-6 text-[clamp(15px,1.4vw,18px)] font-light leading-relaxed text-ink"
              >
                <span className="font-display text-[15px] font-medium tabular-nums text-primary/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. サービス内容 */}
      <section className="section bg-white">
        <div className="container-tlp max-w-4xl">
          <SectionLabel>Details</SectionLabel>
          <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
            サービス内容
          </h2>
          <div className="mt-12 border-t border-ink/[0.08]">
            {data.details.map((d, i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-3 border-b border-ink/[0.08] py-10 md:grid-cols-[280px_1fr] md:gap-12"
              >
                <h3 className="text-[clamp(18px,2vw,24px)] font-medium tracking-luxe text-ink">
                  {d.heading}
                </h3>
                <p className="text-[clamp(15px,1.3vw,17px)] font-light leading-[1.9] text-subtle">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 導入メリット */}
      <section className="section bg-surface">
        <div className="container-tlp">
          <SectionLabel>Benefits</SectionLabel>
          <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
            導入メリット
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border-y border-ink/[0.08] sm:grid-cols-2">
            {data.benefits.map((b, i) => (
              <div key={i} className="bg-surface px-2 py-8 sm:px-8">
                <h3 className="text-[clamp(17px,1.8vw,21px)] font-medium tracking-luxe text-ink">
                  {b.heading}
                </h3>
                <p className="mt-4 text-[clamp(14px,1.2vw,16px)] font-light leading-[1.9] text-subtle">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 導入フロー */}
      <section className="section bg-white">
        <div className="container-tlp max-w-4xl">
          <SectionLabel>Flow</SectionLabel>
          <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
            導入フロー
          </h2>
          <div className="mt-12 border-t border-ink/[0.08]">
            {data.flow.map((f) => (
              <div
                key={f.step}
                className="flex items-baseline gap-6 border-b border-ink/[0.08] py-7 md:gap-12"
              >
                <span className="font-display text-[clamp(28px,4vw,48px)] font-light leading-none tracking-tight2 tabular-nums text-ink/25">
                  {f.step}
                </span>
                <div>
                  <h3 className="text-[clamp(17px,1.8vw,22px)] font-medium tracking-luxe text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[clamp(14px,1.2vw,16px)] font-light leading-[1.8] text-subtle">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. よくある質問 */}
      <section className="section bg-surface">
        <div className="container-tlp max-w-3xl">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
            よくある質問
          </h2>
          <dl className="mt-10 border-t border-ink/[0.08]">
            {data.faqs.map((f, i) => (
              <div key={i} className="border-b border-ink/[0.08] py-8">
                <dt className="flex gap-4 text-[clamp(16px,1.5vw,19px)] font-medium leading-relaxed text-ink">
                  <span className="text-primary/70">Q.</span>
                  <span>{f.q}</span>
                </dt>
                <dd className="mt-4 flex gap-4 text-[clamp(14px,1.3vw,16px)] font-light leading-[1.9] text-subtle">
                  <span className="text-primary/40">A.</span>
                  <span>{f.a}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 7. お問い合わせCTA */}
      <PageCTA
        title={`${data.title}について、ご相談ください。`}
        body="現状の課題整理から最適なご提案まで、伴走型でサポートいたします。お気軽にお問い合わせください。"
      />

      {/* 戻る導線 */}
      <div className="bg-surface px-6 pb-24">
        <div className="container-tlp">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[14px] font-medium tracking-luxe text-primary transition-colors hover:text-primary-deep"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            サービス一覧へ戻る
          </Link>
        </div>
      </div>
    </article>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-display text-[11px] font-medium uppercase text-primary/80"
      style={{ letterSpacing: "0.18em" }}
    >
      {children}
    </p>
  );
}
