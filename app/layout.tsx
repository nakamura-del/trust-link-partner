import type { Metadata, Viewport } from "next";
import { Inter_Tight, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

// 英字（静かで知的なグロテスク） weight: 300 / 500 / 700 のみ
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["300", "500", "700"],
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
});

// 日本語 weight: 300 / 500 / 700 のみ
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
  weight: ["300", "500", "700"],
  fallback: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "Meiryo", "sans-serif"],
});

const siteUrl = "https://trust-link-ptnr.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "トラストリンクパートナー株式会社｜AI導入支援・DX推進・事業承継支援",
    template: "%s｜トラストリンクパートナー株式会社",
  },
  description:
    "トラストリンクパートナー株式会社は、中小企業向けAI導入支援、Claude Code導入支援、DX推進、クラウドシステム販売保守、パチンコホール事業承継支援、不動産DX支援を提供する伴走型パートナーです。",
  keywords: [
    "AI導入支援",
    "Claude導入支援",
    "Claude Code導入支援",
    "DX推進",
    "クラウドシステム",
    "CRM",
    "事業承継支援",
    "パチンコホール",
    "業態変更支援",
    "不動産DX",
    "トラストリンクパートナー",
  ],
  authors: [{ name: "トラストリンクパートナー株式会社" }],
  creator: "トラストリンクパートナー株式会社",
  publisher: "トラストリンクパートナー株式会社",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "トラストリンクパートナー株式会社",
    title:
      "トラストリンクパートナー株式会社｜AI導入支援・DX推進・事業承継支援",
    description:
      "業界知識とAIで、企業の変革を支援する。AI導入支援、DX推進、事業承継支援まで、現場に寄り添う伴走型パートナー。",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "トラストリンクパートナー株式会社｜AI導入支援・DX推進・事業承継支援",
    description:
      "業界知識とAIで、企業の変革を支援する。現場に寄り添う伴走型パートナー。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "vAqJepqWDQchK6b3qXKoeUDjMIQNh7rUhj6_l2HJLUs",
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#238BCB",
  width: "device-width",
  initialScale: 1,
};

const postalAddress = {
  "@type": "PostalAddress",
  postalCode: "164-0001",
  addressRegion: "東京都",
  addressLocality: "中野区",
  streetAddress: "中野5丁目67番7号 プラザ中野801",
  addressCountry: "JP",
};

const orgDescription =
  "中小企業向けAI導入支援、Claude／Claude Code導入支援、DX推進、クラウドシステム販売保守、事業承継支援、業態変更支援、不動産DX支援を提供する伴走型パートナー。";

const serviceList = [
  "AI導入支援",
  "Claude導入支援",
  "Claude Code導入支援",
  "DX推進支援",
  "クラウドシステム販売保守",
  "事業承継支援",
  "業態変更支援",
  "不動産DX支援",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "トラストリンクパートナー株式会社",
      alternateName: "Trust Link Partner Co., Ltd.",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/TLP_Main_Logo.png`,
      },
      image: `${siteUrl}/TLP_Main_Logo.png`,
      email: "info@trust-link-ptnr.com",
      telephone: "+81-50-8893-4488",
      faxNumber: "+81-3-4496-4499",
      address: postalAddress,
      founder: { "@type": "Person", name: "中村 湖太郎" },
      description: orgDescription,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "トラストリンクパートナー株式会社",
      image: `${siteUrl}/TLP_Main_Logo.png`,
      url: siteUrl,
      telephone: "+81-50-8893-4488",
      faxNumber: "+81-3-4496-4499",
      email: "info@trust-link-ptnr.com",
      address: postalAddress,
      areaServed: { "@type": "Country", name: "日本" },
      parentOrganization: { "@id": `${siteUrl}/#organization` },
      description: orgDescription,
      makesOffer: serviceList.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "トラストリンクパートナー株式会社",
      description: orgDescription,
      inLanguage: "ja",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${interTight.variable} ${notoSansJP.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
