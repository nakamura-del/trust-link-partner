"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "About", href: "/about" },
  { label: "サービス", href: "/services" },
  { label: "事例", href: "/cases" },
  { label: "ブログ", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/[0.06] bg-white/65 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-tlp flex h-[76px] items-center justify-between px-6">
        {/* Logo（縮小・控えめ） */}
        <a
          href="/"
          className="group flex items-center"
          aria-label="トラストリンクパートナー株式会社"
        >
          <Image
            src="/TLP_Main_Logo.png"
            alt="トラストリンクパートナー株式会社"
            width={1586}
            height={462}
            priority
            className="h-[30px] w-auto opacity-95 transition-opacity duration-300 group-hover:opacity-100 sm:h-[34px]"
          />
        </a>

        {/* Desktop nav（11px / letter-spacing 0.12em / 透明度低め / 余白広め） */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative font-display text-[11px] font-medium uppercase text-ink/55 transition-colors hover:text-ink"
              style={{ letterSpacing: "0.12em" }}
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary/60 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="/#contact"
            className="btn-primary !py-2 !px-5 text-[11px]"
            style={{ letterSpacing: "0.12em" }}
          >
            お問い合わせ
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          aria-label="メニューを開く"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/[0.06] bg-white/90 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-display text-sm font-medium uppercase text-ink/70 transition-colors hover:text-ink"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-full"
              >
                お問い合わせ
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
