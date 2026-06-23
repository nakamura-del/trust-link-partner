import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageCTA from "@/components/PageCTA";
import { SERVICES } from "@/lib/services";

const siteUrl = "https://trust-link-ptnr.com";

export const metadata: Metadata = {
  title: "会社案内",
  description:
    "トラストリンクパートナー株式会社の会社案内。代表挨拶、理念、会社概要、沿革、事業内容をご紹介します。業界知識とAIで、企業の変革を支援します。",
  alternates: { canonical: `${siteUrl}/about` },
};

const COMPANY_ROWS = [
  { label: "会社名", value: "トラストリンクパートナー株式会社" },
  { label: "代表", value: "中村 湖太郎" },
  {
    label: "所在地",
    value: "〒164-0001\n東京都中野区中野5丁目67番7号\nプラザ中野801",
  },
  { label: "TEL", value: "050-8893-4488" },
  { label: "FAX", value: "03-4496-4499" },
  { label: "MAIL", value: "info@trust-link-ptnr.com" },
];

const HISTORY = [
  {
    year: "2023",
    title: "設立",
    body: "トラストリンクパートナー株式会社を設立。業界知識とテクノロジーを掛け合わせ、中小企業の変革に伴走することを目指して始動。",
  },
  {
    year: "2024",
    title: "各事業を展開",
    body: "AI・DX支援、クラウドシステム販売保守、事業承継支援、業態変更支援、不動産DX支援など、各事業を順次展開。現場に定着する実践型の支援を広げる。",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteUrl}/about#about`,
  name: "会社案内",
  url: `${siteUrl}/about`,
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "会社案内", item: `${siteUrl}/about` },
    ],
  },
};

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

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero / 理念 */}
        <section className="relative overflow-hidden bg-white px-6 pb-12 pt-40">
          <div className="grid-overlay absolute inset-0 mask-fade-y" />
          <div className="container-tlp relative z-10 max-w-4xl">
            <Label>About</Label>
            <h1 className="mt-7 text-[clamp(32px,4.6vw,60px)] font-medium leading-[1.3] tracking-[-0.01em] text-ink">
              業界知識とAIで、
              <br />
              企業の変革を支援する。
            </h1>
            <p className="mt-8 max-w-2xl text-[clamp(16px,1.5vw,19px)] font-light leading-[1.95] text-[#404040]">
              私たちは、現場の業務を深く理解した上でテクノロジーを届ける、伴走型のパートナーです。流行を追うのではなく、本当に成果につながる変革を、無理のない形で実現します。
            </p>
          </div>
        </section>

        {/* 代表挨拶 */}
        <section className="section bg-white pt-10">
          <div className="container-tlp max-w-3xl">
            <Label>Message</Label>
            <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
              代表挨拶
            </h2>
            <div className="mt-8 space-y-6 text-[clamp(15px,1.3vw,17px)] font-light leading-[2] text-subtle">
              <p>
                テクノロジーの進化は、これまで一部の大企業だけが享受できた変革の力を、すべての企業に開きました。一方で、ツールは増えても「現場で使われ、成果につながる」ところまで到達できている企業は多くありません。導入が目的化し、せっかくの投資が形骸化してしまう——そうした場面を、私たちは数多く見てきました。
              </p>
              <p>
                トラストリンクパートナーは、その差を埋めるために生まれました。私たちの役割は、最新のツールを売ることではありません。現場の業務を理解し、どこを変えれば成果が出るかを見極め、導入から定着・改善まで伴走することです。小さく始め、確実に積み上げ、現場が自走できる状態へ。地に足のついた変革を、誠実に支えていきます。
              </p>
              <p className="pt-2 text-ink">
                トラストリンクパートナー株式会社
                <br />
                代表　中村 湖太郎
              </p>
            </div>
          </div>
        </section>

        {/* 沿革 */}
        <section className="section bg-surface">
          <div className="container-tlp max-w-3xl">
            <Label>History</Label>
            <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
              沿革
            </h2>
            <div className="mt-12 border-t border-ink/[0.08]">
              {HISTORY.map((h) => (
                <div
                  key={h.year}
                  className="grid grid-cols-1 gap-3 border-b border-ink/[0.08] py-9 md:grid-cols-[160px_1fr] md:gap-12"
                >
                  <span className="font-display text-[clamp(26px,3vw,40px)] font-light leading-none tabular-nums text-ink/30">
                    {h.year}
                  </span>
                  <div>
                    <h3 className="text-[clamp(17px,1.8vw,22px)] font-medium tracking-luxe text-ink">
                      {h.title}
                    </h3>
                    <p className="mt-3 text-[clamp(14px,1.2vw,16px)] font-light leading-[1.9] text-subtle">
                      {h.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 事業内容 */}
        <section className="section bg-white">
          <div className="container-tlp max-w-4xl">
            <Label>Business</Label>
            <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
              事業内容
            </h2>
            <div className="mt-12 border-t border-ink/[0.08]">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center gap-6 border-b border-ink/[0.08] py-7 md:gap-10"
                >
                  <span className="font-display text-[clamp(20px,2.4vw,30px)] font-light tabular-nums text-ink/25">
                    {s.no}
                  </span>
                  <h3 className="flex-1 text-[clamp(17px,2vw,24px)] font-medium tracking-luxe text-ink transition-colors group-hover:text-primary">
                    {s.title}
                  </h3>
                  <ArrowRight className="h-4 w-4 text-ink/40 transition-colors group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 会社概要 */}
        <section className="section bg-surface">
          <div className="container-tlp max-w-4xl">
            <Label>Company</Label>
            <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
              会社概要
            </h2>
            <dl className="mt-12 border-t border-ink/[0.08]">
              {COMPANY_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-2 border-b border-ink/[0.08] py-6 sm:grid-cols-[160px_1fr] sm:gap-8"
                >
                  <dt
                    className="font-display text-[12px] font-medium uppercase text-subtle"
                    style={{ letterSpacing: "0.16em" }}
                  >
                    {row.label}
                  </dt>
                  <dd className="whitespace-pre-line text-[clamp(16px,1.5vw,20px)] font-light leading-[1.7] text-ink">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
