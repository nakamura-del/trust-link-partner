import type { Metadata } from "next";
import { Headphones, Mic, ShieldAlert } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://trust-link-ptnr.com";

// ★ダウンロード本体（.exe）はリポジトリに含めず、Supabase Storage に配置してその公開URLへ差し替える。
//   （このリポジトリは Public かつ 100MB 制限のため。URL 確定後にこの定数を書き換える。）
const DOWNLOAD_URL = "#";
const APP_VERSION = "v0.2.0";

// ★配布ファイル（Supabase Storage の URL）が未設定（"#"）の間は、ボタンを無効表示にする。
//   .exe 完成は数日先のため、公開しても「押しても何も起きない」状態を避ける。
//   DOWNLOAD_URL に実URLを入れれば、自動的に通常のダウンロードボタンに切り替わる。
const IS_AVAILABLE = DOWNLOAD_URL !== "#";

export const metadata: Metadata = {
  title: "WITNESS-AI ダウンロード",
  description:
    "面談記録アプリ WITNESS-AI（Windows版）のダウンロードページ。導入時のセットアップ手順とご利用上の注意をご案内します。",
  alternates: { canonical: `${siteUrl}/download` },
  // 検索結果に出す必要がないページ。base layout（app/layout.tsx）の index:true を上書きする。
  robots: { index: false, follow: false },
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-display text-[11px] font-medium uppercase text-primary/80"
      style={{ letterSpacing: "0.18em" }}
    >
      {children}
    </p>
  );
}

const SMARTSCREEN_STEPS = [
  "表示された画面で「詳細情報」をクリックします。",
  "続けて表示される「実行」をクリックすると、インストールが始まります。",
];

export default function DownloadPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero / ダウンロード */}
        <section className="relative overflow-hidden bg-white px-6 pb-12 pt-40">
          <div className="grid-overlay absolute inset-0 mask-fade-y" />
          <div className="container-tlp relative z-10 max-w-4xl">
            <Label>Download</Label>
            <h1 className="mt-7 text-[clamp(32px,4.6vw,60px)] font-medium leading-[1.3] tracking-[-0.01em] text-ink">
              WITNESS-AI ダウンロード
            </h1>
            <p className="mt-8 max-w-2xl text-[clamp(16px,1.5vw,19px)] font-light leading-[1.95] text-[#404040]">
              面談の記録・文字起こし・議事録作成を支援するデスクトップアプリです。以下のボタンから Windows 版をダウンロードいただけます。
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {IS_AVAILABLE ? (
                <a href={DOWNLOAD_URL} download className="cta-primary">
                  Windows版をダウンロード
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex h-12 min-w-[128px] cursor-not-allowed select-none items-center justify-center rounded-[24px] bg-ink/[0.07] px-7 text-[15px] font-medium tracking-[0.03em] text-ink/40"
                >
                  まもなく公開
                </span>
              )}
            </div>
            <p className="mt-4 text-[13px] font-light tracking-luxe text-subtle">
              {IS_AVAILABLE
                ? `バージョン ${APP_VERSION}（Windows 版）`
                : `バージョン ${APP_VERSION}（Windows 版）｜ダウンロードの公開まで今しばらくお待ちください。`}
            </p>
          </div>
        </section>

        {/* 動作環境 */}
        <section className="section bg-surface">
          <div className="container-tlp max-w-4xl">
            <Label>Requirements</Label>
            <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
              動作環境
            </h2>
            <dl className="mt-12 border-t border-ink/[0.08]">
              <div className="grid grid-cols-1 gap-2 border-b border-ink/[0.08] py-6 sm:grid-cols-[160px_1fr] sm:gap-8">
                <dt
                  className="font-display text-[12px] font-medium uppercase text-subtle"
                  style={{ letterSpacing: "0.16em" }}
                >
                  OS
                </dt>
                <dd className="text-[clamp(16px,1.5vw,20px)] font-light leading-[1.7] text-ink">
                  Windows 10 / 11（64bit）
                </dd>
              </div>
              <div className="grid grid-cols-1 gap-2 border-b border-ink/[0.08] py-6 sm:grid-cols-[160px_1fr] sm:gap-8">
                <dt
                  className="font-display text-[12px] font-medium uppercase text-subtle"
                  style={{ letterSpacing: "0.16em" }}
                >
                  Version
                </dt>
                <dd className="text-[clamp(16px,1.5vw,20px)] font-light leading-[1.7] text-ink">
                  {APP_VERSION}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* ★オンライン面談ご利用時の注意（重要・強調） */}
        <section className="section bg-white">
          <div className="container-tlp max-w-4xl">
            <Label>Important</Label>
            <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
              オンライン面談をご利用の場合
            </h2>
            <div className="mt-10 overflow-hidden rounded-2xl border border-primary/25 bg-primary/[0.05]">
              <div className="border-b border-primary/15 bg-primary/[0.06] px-8 py-5 md:px-10">
                <div className="flex items-center gap-3">
                  <Headphones className="h-5 w-5 shrink-0 text-primary" />
                  <span
                    className="font-display text-[12px] font-medium uppercase text-primary"
                    style={{ letterSpacing: "0.16em" }}
                  >
                    必ずお読みください
                  </span>
                </div>
              </div>
              <div className="px-8 py-8 md:px-10 md:py-9">
                <p className="text-[clamp(17px,1.7vw,22px)] font-medium leading-[1.75] text-ink">
                  面接官の方は、イヤホンまたはヘッドセットを必ずご着用ください。
                </p>
                <p className="mt-5 text-[clamp(15px,1.3vw,17px)] font-light leading-[2] text-subtle">
                  スピーカーで相手の方の音声を再生すると、ご自身の声と相手の方の声が正しく分離されず、議事録の精度が低下します。イヤホン・ヘッドセットをご利用いただくことで、双方の発言を正確に記録できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 初回セットアップ（SmartScreen / マイク権限） */}
        <section className="section bg-surface">
          <div className="container-tlp max-w-4xl">
            <Label>Setup</Label>
            <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
              初回セットアップの注意
            </h2>

            {/* SmartScreen */}
            <div className="mt-12 border-t border-ink/[0.08] pt-10">
              <div className="flex items-center gap-3">
                <ShieldAlert className="h-5 w-5 shrink-0 text-primary" />
                <h3 className="text-[clamp(17px,1.8vw,22px)] font-medium tracking-luxe text-ink">
                  「Windows によって PC が保護されました」と表示された場合
                </h3>
              </div>
              <ol className="mt-8 space-y-5">
                {SMARTSCREEN_STEPS.map((step, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-[15px] font-medium tabular-nums text-primary">
                      {i + 1}
                    </span>
                    <p className="text-[clamp(15px,1.3vw,17px)] font-light leading-[1.9] text-ink">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-7 text-[clamp(14px,1.2vw,15px)] font-light leading-[1.9] text-subtle">
                ※ 現在このアプリには電子署名を付与していないため、この警告が表示されます。動作に問題はありません。
              </p>
            </div>

            {/* マイク権限 */}
            <div className="mt-12 border-t border-ink/[0.08] pt-10">
              <div className="flex items-center gap-3">
                <Mic className="h-5 w-5 shrink-0 text-primary" />
                <h3 className="text-[clamp(17px,1.8vw,22px)] font-medium tracking-luxe text-ink">
                  マイクの権限設定
                </h3>
              </div>
              <p className="mt-8 text-[clamp(15px,1.3vw,17px)] font-light leading-[2] text-ink">
                「設定 → プライバシーとセキュリティ → マイク」をオンにしてください。
              </p>
              <p className="mt-4 text-[clamp(14px,1.2vw,15px)] font-light leading-[1.9] text-subtle">
                Windows は自動で確認画面を表示しないため、録音を始める前に、あらかじめこの設定を行っておく必要があります。
              </p>
            </div>
          </div>
        </section>

        {/* サポート窓口 */}
        <section className="section bg-white">
          <div className="container-tlp max-w-3xl">
            <Label>Support</Label>
            <h2 className="mt-6 text-[clamp(24px,3vw,38px)] font-medium tracking-[-0.01em] text-ink">
              サポート窓口
            </h2>
            <p className="mt-7 text-[clamp(15px,1.3vw,17px)] font-light leading-[1.9] text-subtle">
              ダウンロードやご利用に関してご不明な点は、下記までお気軽にお問い合わせください。
            </p>
            <div className="mt-10 space-y-2 text-[clamp(16px,1.4vw,18px)] font-light text-ink">
              <p>info@trust-link-ptnr.com</p>
              <p>050-8893-4488</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
