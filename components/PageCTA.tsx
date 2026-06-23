import Link from "next/link";

type PageCTAProps = {
  title?: string;
  body?: string;
};

/** 各下層ページ共通の問い合わせ導線 */
export default function PageCTA({
  title = "まずはお気軽に、ご相談ください。",
  body = "現状の課題整理から最適なご提案まで、伴走型でサポートいたします。",
}: PageCTAProps) {
  return (
    <section className="section bg-surface">
      <div className="container-tlp max-w-3xl">
        <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium leading-[1.35] tracking-[-0.01em] text-ink">
          {title}
        </h2>
        <p className="mt-7 text-[clamp(16px,1.4vw,18px)] font-light leading-[1.9] text-subtle">
          {body}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="/#contact" className="cta-primary">
            相談する
          </Link>
          <Link href="/services" className="cta-secondary">
            サービス一覧へ
          </Link>
        </div>
        <div className="mt-12 space-y-2 text-[15px] font-light text-subtle">
          <p>info@trust-link-ptnr.com</p>
          <p>050-8893-4488</p>
        </div>
      </div>
    </section>
  );
}
