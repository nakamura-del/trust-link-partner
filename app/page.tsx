import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HiddenLiabilities from "@/components/HiddenLiabilities";
import Service from "@/components/Service";
import Flow from "@/components/Flow";
import Company from "@/components/Company";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const siteUrl = "https://trust-link-ptnr.com";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/#webpage`,
  url: `${siteUrl}/`,
  name: "トラストリンクパートナー株式会社｜AI導入支援・DX推進・事業承継支援",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${siteUrl}/` },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <HiddenLiabilities />
        <Service />
        <Flow />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
