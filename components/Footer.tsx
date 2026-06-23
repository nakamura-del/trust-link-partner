"use client";

import Image from "next/image";

const SERVICE_LINKS = [
  "AI・DX支援",
  "クラウドシステム販売保守",
  "事業承継支援",
  "業態変更支援",
  "不動産DX支援",
];

export default function Footer() {
  return (
    <footer className="relative bg-white px-6 pb-44 pt-96">
      <div className="container-tlp">
        <div className="h-px w-full bg-ink/[0.22]" />

        {/* brand block */}
        <div className="grid grid-cols-1 gap-16 pt-52 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/TLP_Main_Logo.png"
              alt="トラストリンクパートナー株式会社"
              width={1586}
              height={462}
              className="h-[134px] w-auto"
            />
            <p className="mt-8 max-w-sm text-[clamp(16px,1.4vw,19px)] font-light leading-[1.8] text-subtle">
              業界知識とAIで、
              <br />
              企業の変革を支援する。
            </p>
          </div>

          <div>
            <h3 className="eyebrow">Service</h3>
            <ul className="mt-8 space-y-4">
              {SERVICE_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="/services"
                    className="text-[15px] font-light text-subtle transition-colors hover:text-ink"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">Contact</h3>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="mailto:info@trust-link-ptnr.com"
                  className="text-[15px] font-light text-subtle transition-colors hover:text-ink"
                >
                  info@trust-link-ptnr.com
                </a>
              </li>
              <li>
                <a
                  href="tel:050-8893-4488"
                  className="text-[15px] font-light text-subtle transition-colors hover:text-ink"
                >
                  050-8893-4488
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-32 flex flex-col items-start justify-between gap-3 border-t border-ink/[0.16] pt-12 sm:flex-row sm:items-center">
          <p className="text-[12px] font-light tracking-luxe text-subtle/70">
            © {new Date().getFullYear()} Trust Link Partner Co., Ltd.
          </p>
          <p className="font-display text-[11px] uppercase tracking-[0.18em] text-subtle/50">
            Trust · Technology · Transformation
          </p>
        </div>
      </div>
    </footer>
  );
}
