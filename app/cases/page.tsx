import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageCTA from "@/components/PageCTA";
import { CASES } from "@/lib/cases";

const siteUrl = "https://trust-link-ptnr.com";

export const metadata: Metadata = {
  title: "導入事例",
  description:
    "トラストリンクパートナーの導入事例。AI導入、Claude/Claude Code、DX推進、クラウドシステム、事業承継、業態変更など、工数削減・コスト削減などの具体的な成果をご紹介します。",
  alternates: { canonical: `${siteUrl}/cases` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${siteUrl}/cases#collection`,
      name: "導入事例",
      url: `${siteUrl}/cases`,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      hasPart: CASES.map((c) => ({
        "@type": "Article",
        headline: c.title,
        url: `${siteUrl}/cases/${c.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/cases#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "導入事例", item: `${siteUrl}/cases` },
      ],
    },
  ],
};

export default function CasesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-white px-6 pb-12 pt-40">
          <div className="grid-overlay absolute inset-0 mask-fade-y" />
          <div className="container-tlp relative z-10 max-w-4xl">
            <p
              className="font-display text-[11px] font-medium uppercase text-primary/80"
              style={{ letterSpacing: "0.18em" }}
            >
              Case Studies
            </p>
            <h1 className="mt-7 text-[clamp(34px,5vw,64px)] font-medium leading-[1.25] tracking-[-0.01em] text-ink">
              導入事例
            </h1>
            <p className="mt-8 max-w-2xl text-[clamp(16px,1.5vw,19px)] font-light leading-[1.9] text-[#404040]">
              現場に定着し、数値で語れる成果を。業種・テーマごとの導入事例をご紹介します。
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="section bg-white pt-10">
          <div className="container-tlp">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {CASES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  className="card group flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[clamp(28px,3vw,40px)] font-light leading-none tracking-tight2 tabular-nums text-ink/20 transition-colors duration-500 group-hover:text-primary/40">
                      {c.no}
                    </span>
                    <span className="rounded-full border border-primary/30 px-3.5 py-1.5 text-[11px] font-medium tracking-luxe text-primary">
                      {c.service}
                    </span>
                  </div>
                  <p className="mt-6 text-[12px] font-medium tracking-luxe text-subtle">
                    {c.industry}
                  </p>
                  <h2 className="mt-3 text-[clamp(18px,1.9vw,23px)] font-medium leading-[1.5] tracking-luxe text-ink">
                    {c.title}
                  </h2>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {c.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="text-[13px] font-light text-subtle"
                      >
                        <span className="text-primary">{m.value}</span> {m.label}
                      </span>
                    ))}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-1.5 text-[13px] font-medium tracking-luxe text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    詳しく見る
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
