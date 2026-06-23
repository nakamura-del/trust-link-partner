"use client";

import { motion } from "framer-motion";

export default function HiddenLiabilities() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#07111f] px-6 py-28 text-white">
      <div className="container-tlp">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <p
            className="font-display text-[12px] font-medium uppercase text-secondary"
            style={{ letterSpacing: "0.18em" }}
          >
            The Cost of Waiting
          </p>

          <h2 className="mt-10 text-[clamp(45px,8vw,108px)] font-bold leading-[1.14] tracking-[-0.01em]">
            AI未活用という、
            <br />
            見えない負債。
          </h2>

          <p className="mt-12 max-w-4xl text-[clamp(16px,1.6vw,20px)] font-light leading-[1.9] text-white/55">
            本来削減できるはずのコスト、創出できるはずの時間、価値を生み出すべき人材。変化を先送りするコストは、日々静かに積み重なっています。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
