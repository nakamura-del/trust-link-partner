"use client";

import { motion } from "framer-motion";

const STEPS = [
  { no: "01", title: "相談", en: "Consult" },
  { no: "02", title: "課題整理", en: "Analyze" },
  { no: "03", title: "提案", en: "Propose" },
  { no: "04", title: "導入", en: "Deploy" },
  { no: "05", title: "定着", en: "Establish" },
  { no: "06", title: "改善", en: "Improve" },
];

export default function Flow() {
  return (
    <section id="flow" className="section bg-white">
      <div className="container-tlp">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Flow</p>
          <h2 className="mt-8 text-[clamp(30px,4.4vw,56px)] font-medium leading-[1.3] tracking-[-0.01em] text-ink">
            導入して終わりではなく、
            <br className="hidden sm:block" />
            成果が出るまで伴走する。
          </h2>
        </motion.header>

        <div className="mt-12 h-px w-[58%] bg-ink/[0.08]" />
        <div>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.no}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex items-baseline gap-8 py-4 after:absolute after:bottom-0 after:left-0 after:h-px after:w-[58%] after:bg-ink/[0.08] md:gap-16"
            >
              <span className="block w-[1.6em] shrink-0 whitespace-nowrap font-display text-[60px] font-light leading-none tracking-tight2 text-ink/45 tabular-nums transition-colors duration-500 group-hover:text-primary/60 md:text-[88px]">
                {step.no}
              </span>
              <h3 className="text-[clamp(24px,2.8vw,38px)] font-medium tracking-luxe text-ink">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
