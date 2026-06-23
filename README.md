# トラストリンクパートナー株式会社 コーポレートサイト

「Trust × Technology × Transformation」をコンセプトにした、上場企業レベルの高級感を持つコーポレートサイト。
PKSHA Technology（70%）/ Laboro.AI（30%）の世界観を参照し、Apple・OpenAI・BCG のような知的で洗練された余白設計を採用。

## 技術構成

- **Next.js 15** App Router / TypeScript
- **TailwindCSS**（カスタムカラー・ガラスモーフィズム・グリッド）
- **GSAP**（Timeline / ScrollTrigger / SplitText / TextPlugin）
- **Framer Motion**（スクロールリビール・スタッガー）
- **Lucide React**（アイコン）
- レスポンシブ対応 / SEO（metadata + JSON-LD）/ Vercel デプロイ前提

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開く。

```bash
npm run build   # 本番ビルド
npm start       # 本番起動
```

## ディレクトリ構成

```
app/
  layout.tsx        … フォント / SEO metadata / JSON-LD
  page.tsx          … セクション構成
  globals.css       … Tailwind + ガラス・グラデーション等のユーティリティ
components/
  Header.tsx        … スクロールでガラス化するヘッダー
  Hero.tsx          … GSAPイントロ（TLP→光のライン→タイプライター→SplitText）
  HiddenLiabilities.tsx … ダークセクション「見えない負債」
  Service.tsx       … サービス5枚カード
  Flow.tsx          … 6ステップ（ScrollTrigger順次表示）
  Company.tsx       … 会社概要
  Contact.tsx       … 問い合わせフォーム
  Footer.tsx        … フッター
  ui/
    Particles.tsx   … Canvasパーティクル（マウス追従・線結合）
    Reveal.tsx      … Framer Motionリビール共通部品
public/
  favicon.svg
```

## カラーパレット

| 用途 | 値 |
| --- | --- |
| Primary | `#238BCB` |
| Secondary | `#59C6FF` |
| Gray | `#727272` |
| Text | `#0F172A` |
| Background | `#FFFFFF` |
| SubBackground | `#F7FAFC` |
| Dark（Liabilities/Footer） | `#07111f` |

## カスタマイズのポイント

- **問い合わせフォーム送信**：`components/Contact.tsx` の `onSubmit` は現状フロントのみ（送信完了表示）。
  メール送信や API 連携を行う場合はこの handler を差し替える（例：`/app/api/contact/route.ts` を追加して fetch）。
- **GSAP SplitText / TextPlugin**：GSAP 3.13 以降で標準パッケージに同梱（追加ライセンス不要）。
- **アニメーション無効化**：`prefers-reduced-motion` に対応済み。

## Vercel デプロイ

1. このディレクトリを Git リポジトリ化し、GitHub 等へ push
2. Vercel で New Project → リポジトリを選択
3. フレームワークは自動検出（Next.js）。そのまま Deploy
