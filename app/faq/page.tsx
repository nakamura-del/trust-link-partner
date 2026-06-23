import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageCTA from "@/components/PageCTA";
import FaqList from "@/components/FaqList";
import { ALL_FAQS } from "@/lib/faqs";

const siteUrl = "https://trust-link-ptnr.com";

export const metadata: Metadata = {
  title: "よくある質問（FAQ）",
  description:
    "トラストリンクパートナーへのよくある質問100問。AI導入、Claude、Claude Code、DX推進、事業承継について、費用・期間・進め方などを分かりやすくお答えします。",
  alternates: { canonical: `${siteUrl}/faq` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/faq#faq`,
      url: `${siteUrl}/faq`,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: ALL_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/faq#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "よくある質問", item: `${siteUrl}/faq` },
      ],
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-white px-6 pb-10 pt-40">
          <div className="grid-overlay absolute inset-0 mask-fade-y" />
          <div className="container-tlp relative z-10 max-w-4xl">
            <p
              className="font-display text-[11px] font-medium uppercase text-primary/80"
              style={{ letterSpacing: "0.18em" }}
            >
              FAQ
            </p>
            <h1 className="mt-7 text-[clamp(32px,4.6vw,60px)] font-medium leading-[1.3] tracking-[-0.01em] text-ink">
              よくある質問
            </h1>
            <p className="mt-8 max-w-2xl text-[clamp(16px,1.5vw,19px)] font-light leading-[1.9] text-[#404040]">
              AI導入・Claude・Claude Code・DX推進・事業承継について、よくいただくご質問をまとめました。気になるカテゴリーから絞り込んでご覧ください。
            </p>
          </div>
        </section>

        {/* FAQ list */}
        <section className="section bg-white pt-10">
          <div className="container-tlp max-w-3xl">
            <FaqList />
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
