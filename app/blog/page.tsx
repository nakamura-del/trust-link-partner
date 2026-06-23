import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageCTA from "@/components/PageCTA";
import BlogList from "@/components/BlogList";
import { POSTS } from "@/lib/blog";

const siteUrl = "https://trust-link-ptnr.com";

export const metadata: Metadata = {
  title: "ブログ｜AI・DX・事業承継のコラム",
  description:
    "AI導入、Claude、Claude Code、DX推進、CRM、事業承継、不動産DX、パチンコ業界の未来まで。中小企業の変革に役立つコラムを発信しています。",
  alternates: { canonical: `${siteUrl}/blog` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${siteUrl}/blog#blog`,
      name: "トラストリンクパートナー ブログ",
      url: `${siteUrl}/blog`,
      isPartOf: { "@id": `${siteUrl}/#website` },
      publisher: { "@id": `${siteUrl}/#organization` },
      blogPost: POSTS.slice(0, 30).map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${siteUrl}/blog/${p.slug}`,
        datePublished: p.published,
        dateModified: p.updated,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/blog#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "ブログ", item: `${siteUrl}/blog` },
      ],
    },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <section className="relative overflow-hidden bg-white px-6 pb-10 pt-40">
          <div className="grid-overlay absolute inset-0 mask-fade-y" />
          <div className="container-tlp relative z-10 max-w-4xl">
            <p
              className="font-display text-[11px] font-medium uppercase text-primary/80"
              style={{ letterSpacing: "0.18em" }}
            >
              Blog
            </p>
            <h1 className="mt-7 text-[clamp(34px,5vw,64px)] font-medium leading-[1.25] tracking-[-0.01em] text-ink">
              ブログ
            </h1>
            <p className="mt-8 max-w-2xl text-[clamp(16px,1.5vw,19px)] font-light leading-[1.9] text-[#404040]">
              AI・DX・事業承継など、中小企業の変革に役立つテーマを発信しています。気になるカテゴリーから絞り込んでご覧ください。
            </p>
          </div>
        </section>

        <section className="section bg-white pt-10">
          <div className="container-tlp">
            <BlogList />
          </div>
        </section>

        <PageCTA />
      </main>
      <Footer />
    </>
  );
}
