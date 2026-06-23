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
app/api/
  contact/route.ts … 問い合わせフォーム送信（Resend でメール送信）
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

- **問い合わせフォーム送信**：`components/Contact.tsx` の `onSubmit` から `/app/api/contact/route.ts` に POST し、[Resend](https://resend.com) でメール送信する（詳細は下記「お問い合わせメール送信（Resend）」）。
- **GSAP SplitText / TextPlugin**：GSAP 3.13 以降で標準パッケージに同梱（追加ライセンス不要）。
- **アニメーション無効化**：`prefers-reduced-motion` に対応済み。

## お問い合わせメール送信（Resend）

問い合わせフォームの送信は [Resend](https://resend.com) を利用してメール配信する。

| 項目 | 値 |
| --- | --- |
| 送信先 | `info@trust-link-ptnr.com` |
| 送信元 | `onboarding@resend.dev`（ドメイン認証前の仮アドレス） |
| 件名 | `【お問い合わせ】{会社名}様より` |
| API キー | 環境変数 `RESEND_API_KEY` で管理 |

> 送信先・送信元・件名は `app/api/contact/route.ts` の冒頭定数で変更できる。
> 独自ドメインからの送信に切り替える場合は、Resend のダッシュボードで `trust-link-ptnr.com` のドメイン認証（DNS レコード設定）を行い、`FROM_EMAIL` を `info@trust-link-ptnr.com` 等に更新する。

### API キーの取得

1. [Resend](https://resend.com) にサインアップ／ログイン
2. ダッシュボードの **API Keys** → **Create API Key** でキーを発行（`re_` から始まる文字列）

### ローカル開発での設定

プロジェクトルートに `.env.local` を作成し、API キーを記載する（`.env*.local` は `.gitignore` 済みなのでコミットされない）。

```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
```

設定後、`npm run dev` を再起動すると反映される。

### Vercel への環境変数設定

**方法 A：ダッシュボード**

1. Vercel のプロジェクト → **Settings** → **Environment Variables**
2. 以下を追加して **Save**
   - **Key**：`RESEND_API_KEY`
   - **Value**：`re_` から始まる API キー
   - **Environments**：`Production` / `Preview` / `Development` を必要に応じてチェック
3. 既存デプロイに反映するには **Redeploy**（環境変数は次回デプロイ以降に有効）

**方法 B：Vercel CLI**

```bash
# 対話形式で値を入力（環境ごとに実行）
vercel env add RESEND_API_KEY production
vercel env add RESEND_API_KEY preview
vercel env add RESEND_API_KEY development

# ローカルへ取り込む場合
vercel env pull .env.local
```

## Vercel デプロイ

1. このディレクトリを Git リポジトリ化し、GitHub 等へ push
2. Vercel で New Project → リポジトリを選択
3. フレームワークは自動検出（Next.js）。そのまま Deploy
