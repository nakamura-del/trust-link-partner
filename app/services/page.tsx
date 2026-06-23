import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageCTA from "@/components/PageCTA";
import { SERVICES } from "@/lib/services";

const siteUrl = "https://trust-link-ptnr.com";

export const metadata: Metadata = {
  title: "サービス一覧",
  description:
    "トラストリンクパートナーが提供するサービス一覧。AI導入支援、Claude／Claude Code導入支援、DX推進、クラウドシステム販売保守、事業承継支援、業態変更支援、不動産DX支援。",
  alternates: { canonical: `${siteUrl}/services` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${siteUrl}/services#collection`,
  name: "サービス一覧",
  url: `${siteUrl}/services`,
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  hasPart: SERVICES.map((s) => ({
    "@type": "Service",
    name: s.title,
    url: `${siteUrl}/services/${s.slug}`,
  })),
};

export default function ServicesPage() {
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
              Service
            </p>
            <h1 className="mt-7 text-[clamp(34px,5vw,64px)] font-medium leading-[1.25] tracking-[-0.01em] text-ink">
              現場に定着する、
              <br className="hidden sm:block" />
              実践型ソリューション。
            </h1>
            <p className="mt-8 max-w-2xl text-[clamp(16px,1.5vw,19px)] font-light leading-[1.9] text-[#404040]">
              単なるツール販売ではなく、導入・運用・改善まで伴走します。各サービスの詳細は以下からご覧いただけます。
            </p>
          </div>
        </section>

        {/* List */}
        <section className="section bg-white pt-10">
          <div className="container-tlp">
            <div className="border-t border-ink/[0.08]">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group grid grid-cols-1 gap-4 border-b border-ink/[0.08] py-10 md:grid-cols-[160px_1fr_auto] md:items-center md:gap-12"
                >
                  <span className="font-display text-[clamp(40px,5vw,68px)] font-light leading-none tracking-tight2 tabular-nums text-ink/20 transition-colors duration-500 group-hover:text-primary/50">
                    {s.no}
                  </span>
                  <div>
                    <h2 className="text-[clamp(20px,2.4vw,30px)] font-medium tracking-luxe text-ink">
                      {s.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-[clamp(14px,1.2vw,16px)] font-light leading-[1.8] text-subtle">
                      {s.lead}
                    </p>
                  </div>
                  <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/50 transition-all duration-300 group-hover:border-primary/50 group-hover:text-primary md:flex">
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
