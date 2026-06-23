"use client";

import { motion } from "framer-motion";

const ROWS = [
  { label: "会社名", value: "トラストリンクパートナー株式会社" },
  { label: "代表", value: "中村 湖太郎" },
  {
    label: "所在地",
    value: "〒164-0001\n\n東京都中野区中野5丁目67番7号\nプラザ中野801",
  },
  { label: "TEL", value: "050-8893-4488" },
  { label: "FAX", value: "03-4496-4499" },
  { label: "MAIL", value: "info@trust-link-ptnr.com" },
];

export default function Company() {
  return (
    <section id="company" className="section bg-white">
      <div className="container-tlp max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow"
        >
          Company
        </motion.p>

        <dl className="mt-12 border-t border-ink/[0.08]">
          {ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-b border-ink/[0.08] py-[18px]"
            >
              <dt
                className="font-display text-[13px] font-medium uppercase text-subtle"
                style={{ letterSpacing: "0.18em" }}
              >
                {row.label}
              </dt>
              <dd className="mt-2.5 whitespace-pre-line text-[clamp(30px,3.3vw,46px)] font-light leading-[1.2] text-ink">
                {row.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
