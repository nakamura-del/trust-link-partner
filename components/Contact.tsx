"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type ContactFields = {
  name: string;
  company: string;
  email: string;
  tel: string;
  message: string;
};

const TOPICS = [
  "AI導入支援",
  "Claude Code導入支援",
  "DX支援",
  "クラウドシステム販売保守",
  "事業承継支援",
  "業態変更支援",
  "不動産DX支援",
  "その他",
];

export default function Contact() {
  const [topics, setTopics] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleTopic = (t: string) =>
    setTopics((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: ((data.get("name") as string) ?? "").trim(),
      company: ((data.get("company") as string) ?? "").trim(),
      email: ((data.get("email") as string) ?? "").trim(),
      tel: ((data.get("tel") as string) ?? "").trim(),
      message: ((data.get("message") as string) ?? "").trim(),
      topics,
    } satisfies ContactFields & { topics: string[] };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "送信に失敗しました。");
      }

      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "送信に失敗しました。時間をおいて再度お試しください。"
      );
    } finally {
      setSending(false);
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-ink/[0.1] bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/30 outline-none transition focus:border-primary/60";

  return (
    <section id="contact" className="section bg-white">
      <div className="container-tlp">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[4fr_6fr] lg:items-start lg:gap-20">
          {/* copy（大きく） */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">Contact</p>
            <h2 className="mt-8 text-[clamp(36px,4.4vw,60px)] font-medium leading-[1.3] tracking-[-0.01em] text-ink">
              <span className="block whitespace-nowrap">まずはお気軽に、</span>
              <span className="block whitespace-nowrap">ご相談ください。</span>
            </h2>
            <p className="mt-8 max-w-md text-[clamp(17px,1.5vw,20px)] font-light leading-[1.85] text-subtle">
              AI導入、DX推進、事業承継など、現状の課題整理から最適なご提案まで、伴走型でサポートいたします。
            </p>
            <div className="mt-12 space-y-2 text-[15px] font-light text-subtle">
              <p>info@trust-link-ptnr.com</p>
              <p>050-8893-4488</p>
            </div>
          </motion.div>

          {/* form（幅を少し絞る） */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-ink/[0.06] bg-white p-7 shadow-subtle sm:p-10 lg:ml-auto lg:max-w-[66%]"
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 text-lg font-medium tracking-luxe text-ink">
                  送信ありがとうございます。
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-subtle">
                  内容を確認のうえ、担当者より折り返しご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium tracking-luxe text-ink/70">
                      お名前
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="山田 太郎"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium tracking-luxe text-ink/70">
                      会社名
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="株式会社〇〇"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-medium tracking-luxe text-ink/70">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="example@company.com"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium tracking-luxe text-ink/70">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      placeholder="03-0000-0000"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-xs font-medium tracking-luxe text-ink/70">
                    ご相談内容（複数選択可）
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {TOPICS.map((t) => {
                      const active = topics.includes(t);
                      return (
                        <button
                          type="button"
                          key={t}
                          onClick={() => toggleTopic(t)}
                          aria-pressed={active}
                          className={`rounded-full border px-4 py-2 text-xs font-light transition-all ${
                            active
                              ? "border-primary bg-primary text-white"
                              : "border-ink/[0.12] text-ink/70 hover:border-ink/30"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium tracking-luxe text-ink/70">
                    相談内容
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="現在の課題やご相談内容をご記入ください。"
                    className={`${fieldClass} resize-none`}
                  />
                </div>

                {error && (
                  <p className="text-sm font-light text-red-600" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary h-[52px] w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "送信中..." : "送信する"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
