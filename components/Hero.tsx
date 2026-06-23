"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, TextPlugin, SplitText);
}

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const revealAll = () => {
        gsap.set(
          [
            ".hero-letter",
            ".hero-line",
            ".hero-brand-wrap",
            ".hero-copy",
            ".hero-sub",
            ".hero-cta",
          ],
          { opacity: 1, x: 0, y: 0, scaleX: 1 }
        );
        // 分割された文字（チェーン途中で止まっても確実に表示）
        gsap.set(".hero-copy *", { opacity: 1, y: 0, yPercent: 0 });
        const typeEl = document.querySelector<HTMLElement>(".hero-brand");
        if (typeEl && !typeEl.textContent) {
          typeEl.textContent = "Trust Link Partner";
        }
      };

      try {
        const prefersReduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReduced) {
          revealAll();
          return;
        }

        // 要素は初期CSSで opacity:0（完成状態を一瞬も見せない）。
        // ここから fromTo / to で「非表示 → 表示」へアニメーションする。
        let chars: Element[] | null = null;
        let splitInstance: SplitText | null = null;
        try {
          splitInstance = new SplitText(".hero-copy", { type: "chars" });
          chars = splitInstance.chars;
        } catch {
          chars = null;
        }

        // メインコピーは「コンテナを表示 → 文字を初期非表示」にしてから1文字ずつ出す
        gsap.set(".hero-copy", { opacity: 1 });
        if (chars && chars.length) {
          gsap.set(chars, { opacity: 0, yPercent: 40 });
        }

        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

        // 1) T / L / P を順番にフェード＋translateY
        tl.fromTo(
          ".hero-letter",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          0
        );

        // 4) 下線が左から伸びる
        tl.fromTo(
          ".hero-line",
          { opacity: 0, scaleX: 0 },
          {
            opacity: 1,
            scaleX: 1,
            transformOrigin: "left center",
            duration: 0.7,
            ease: "power2.inOut",
          },
          ">-0.05"
        );

        // 5) TRUST LINK PARTNER を左からタイプライター表示
        tl.set(".hero-brand-wrap", { opacity: 1 }, "<0.05");
        tl.to(".hero-brand", { text: "Trust", duration: 0.3 }, ">");
        tl.to(".hero-brand", { text: "Trust Link", duration: 0.35 }, ">0.04");
        tl.to(
          ".hero-brand",
          { text: "Trust Link Partner", duration: 0.45 },
          ">0.04"
        );

        // 6) メインコピーを下からフェードイン（1文字ずつ）
        if (chars && chars.length) {
          tl.to(
            chars,
            { opacity: 1, yPercent: 0, duration: 0.5, stagger: 0.016 },
            ">0.12"
          );
        } else {
          tl.fromTo(
            ".hero-copy",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            ">0.12"
          );
        }

        // 7) サブコピー → 8) CTA
        tl.fromTo(
          ".hero-sub",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.1"
        );
        tl.fromTo(
          ".hero-cta",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.1 },
          "-=0.3"
        );

        const safety = window.setTimeout(revealAll, 3000);
        return () => {
          window.clearTimeout(safety);
          splitInstance?.revert();
        };
      } catch {
        revealAll();
      }
    },
    { scope: root }
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[70vh] w-full items-center overflow-hidden bg-white pt-12 pb-12"
    >
      {/* 背景：ほぼ知覚できない極薄グリッド + ごく弱いノイズのみ（存在を感じないレベル） */}
      <div className="grid-overlay absolute inset-0 mask-fade-y" />
      <div className="noise pointer-events-none absolute inset-0 opacity-[0.015]" />

      {/* コンテンツ：左寄せ・重心は画面左寄り（左端に張り付けない） */}
      <div className="container-tlp relative z-10 px-6">
        <div className="max-w-4xl text-left md:ml-[7%] lg:ml-[16%]">
          {/* ブランド標（主役ではない・+5%） */}
          <div className="hero-letters flex items-center font-display text-[clamp(2.45rem,5.5vw,3.75rem)] font-bold leading-none tracking-[0.18em] text-primary-deep">
            {["T", "L", "P"].map((c) => (
              <span key={c} className="hero-letter inline-block">
                {c}
              </span>
            ))}
          </div>

          {/* 細い青ライン */}
          <div className="hero-line mt-6 h-px w-16 origin-left bg-primary/50" />

          {/* Trust Link Partner（主張させない・1.15倍 / opacity 0.75 / TLPとの間隔を少し縮める） */}
          <div className="hero-brand-wrap mt-8 h-5 opacity-0">
            <span className="hero-brand font-display text-[14px] font-medium uppercase tracking-[0.18em] text-primary opacity-75" />
          </div>

          {/* 主役：メインコピー（必ず2行 / line-height 1.35 / letter-spacing 0.03em / weight 700） */}
          <h1 className="hero-copy mt-7 text-[clamp(37px,5.4vw,78px)] font-bold leading-[1.35] tracking-[0.03em] text-ink">
            <span className="block">業界知識とAIで、</span>
            <span className="block">企業の変革を支援する。</span>
          </h1>

          {/* サブコピー（少し濃く・読みやすさ優先・2行） */}
          <p className="hero-sub mt-6 max-w-xl text-[15px] font-medium leading-[1.8] text-[#333333]">
            AI導入支援、DX推進、事業承継支援まで。
            <br />
            現場に寄り添う伴走型で、企業の成長を支えます。
          </p>

          {/* CTA：必ず2つ（主ボタン=相談する / 副ボタン=サービスを見る）・間隔16px */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="hero-cta cta-primary">
              相談する
            </a>
            <a href="#service" className="hero-cta cta-secondary">
              サービスを見る
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
