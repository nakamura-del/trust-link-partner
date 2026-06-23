import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseDetail from "@/components/CaseDetail";
import { CASES, getCase } from "@/lib/cases";

const siteUrl = "https://trust-link-ptnr.com";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getCase(slug);
  if (!data) return {};
  const url = `${siteUrl}/cases/${data.slug}`;
  return {
    title: `導入事例：${data.title}`,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `導入事例：${data.title}｜トラストリンクパートナー株式会社`,
      description: data.metaDescription,
    },
  };
}

export default async function CaseSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getCase(slug);
  if (!data) notFound();

  const url = `${siteUrl}/cases/${data.slug}`;

  // schema.org に CaseStudy 型は無いため、導入事例は Article として構造化
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: data.title,
        description: data.metaDescription,
        url,
        articleSection: "導入事例",
        about: { "@type": "Service", name: data.service },
        author: { "@id": `${siteUrl}/#organization` },
        publisher: { "@id": `${siteUrl}/#organization` },
        isPartOf: { "@id": `${siteUrl}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: `${siteUrl}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "導入事例",
            item: `${siteUrl}/cases`,
          },
          { "@type": "ListItem", position: 3, name: data.title, item: url },
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
        <CaseDetail data={data} />
      </main>
      <Footer />
    </>
  );
}
