import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICES, getService } from "@/lib/services";

const siteUrl = "https://trust-link-ptnr.com";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getService(slug);
  if (!data) return {};
  const url = `${siteUrl}/services/${data.slug}`;
  return {
    title: data.title,
    description: data.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${data.title}｜トラストリンクパートナー株式会社`,
      description: data.metaDescription,
    },
  };
}

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getService(slug);
  if (!data) notFound();

  const url = `${siteUrl}/services/${data.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: data.title,
        alternateName: data.titleEn,
        serviceType: data.title,
        description: data.metaDescription,
        url,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "Country", name: "日本" },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: data.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: `${siteUrl}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "サービス",
            item: `${siteUrl}/services`,
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
        <ServiceDetail data={data} />
      </main>
      <Footer />
    </>
  );
}
