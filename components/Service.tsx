"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    no: "01",
    title: "AI・DX支援",
    items: ["Claude導入支援", "Claude Code導入支援", "社内AI定着支援"],
  },
  {
    no: "02",
    title: "クラウドシステム販売保守",
    items: ["CRM", "クラウドシステム", "保守運用"],
  },
  {
    no: "03",
    title: "事業承継支援",
    items: ["パチンコ店運営企業の事業承継マッチング及び支援"],
  },
  {
    no: "04",
    title: "業態変更支援",
    items: ["ホール施設の新たな価値創造"],
  },
  {
    no: "05",
    title: "不動産DX支援",
    items: ["CRM提供", "DX化支援"],
  },
];

export default function Service() {
  return (
    <section id="service" className="section bg-white">
      <div className="container-tlp">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Service</p>
          <h2 className="mt-8 text-[clamp(30px,4.4vw,56px)] font-medium leading-[1.3] tracking-[-0.01em] text-ink">
            現場に定着する、
            <br className="hidden sm:block" />
            実践型ソリューション。
          </h2>
        </motion.header>

        <div className="mt-14 h-px w-[58%] bg-ink/[0.08]" />
        <div>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative grid grid-cols-1 gap-4 py-5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-[58%] after:bg-ink/[0.08] md:grid-cols-[220px_1fr] md:items-baseline md:gap-16"
            >
              <span className="block whitespace-nowrap font-display text-[78px] font-light leading-none tracking-tight2 text-ink/55 tabular-nums transition-colors duration-500 group-hover:text-primary/60">
                {s.no}
              </span>

              <div>
                <h3 className="text-[clamp(22px,2.4vw,32px)] font-medium tracking-luxe text-ink">
                  {s.title}
                </h3>
                <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="text-[clamp(16px,1.3vw,18px)] font-light text-subtle"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
