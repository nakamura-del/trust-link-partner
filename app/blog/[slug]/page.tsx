import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageCTA from "@/components/PageCTA";
import { POSTS, getPost } from "@/lib/blog";

const siteUrl = "https://trust-link-ptnr.com";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  const url = `${siteUrl}/blog/${p.slug}`;
  return {
    title: p.title,
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${p.title}｜トラストリンクパートナー株式会社`,
      description: p.description,
      publishedTime: p.published,
      modifiedTime: p.updated,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const url = `${siteUrl}/blog/${p.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: p.title,
        description: p.description,
        url,
        datePublished: p.published,
        dateModified: p.updated,
        inLanguage: "ja",
        articleSection: p.categoryLabel,
        keywords: p.keywords.join(", "),
        author: { "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "ブログ", item: `${siteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: p.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <article>
          {/* Hero */}
          <section className="relative overflow-hidden bg-white px-6 pb-12 pt-40">
            <div className="grid-overlay absolute inset-0 mask-fade-y" />
            <div className="container-tlp relative z-10 max-w-3xl">
              <div className="flex flex-wrap items-center gap-4">
                <span className="rounded-full border border-primary/30 px-4 py-1.5 text-[12px] font-medium tracking-luxe text-primary">
                  {p.categoryLabel}
                </span>
                <span className="text-[13px] font-light tabular-nums text-subtle">
                  公開：{p.published}
                </span>
                <span className="text-[13px] font-light tabular-nums text-subtle">
                  更新：{p.updated}
                </span>
                <span className="text-[13px] font-light text-subtle">
                  約{p.readingMin}分
                </span>
              </div>
              <h1 className="mt-7 text-[clamp(26px,3.6vw,46px)] font-medium leading-[1.4] tracking-[-0.01em] text-ink">
                {p.title}
              </h1>
              <p className="mt-7 text-[clamp(15px,1.4vw,18px)] font-light leading-[1.9] text-[#404040]">
                {p.description}
              </p>
            </div>
          </section>

          {/* Body */}
          <section className="bg-white px-6 pb-24">
            <div className="container-tlp max-w-3xl">
              <div className="border-t border-ink/[0.08] pt-12">
                {p.body.map((s) => (
                  <div key={s.heading} className="mb-12">
                    <h2 className="text-[clamp(20px,2.4vw,28px)] font-medium tracking-[-0.01em] text-ink">
                      {s.heading}
                    </h2>
                    <div className="mt-6 space-y-6">
                      {s.paragraphs.map((para, i) => (
                        <p
                          key={i}
                          className="text-[clamp(15px,1.3vw,17px)] font-light leading-[2] text-subtle"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[14px] font-medium tracking-luxe text-primary transition-colors hover:text-primary-deep"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  ブログ一覧へ戻る
                </Link>
              </div>
            </div>
          </section>

          <PageCTA />
        </article>
      </main>
      <Footer />
    </>
  );
}
