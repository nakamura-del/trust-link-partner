import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // 開発モードで左下に出る Next.js のインジケーター（黒い丸）を非表示にする
  devIndicators: false,
  // 親ディレクトリの lockfile を誤検出させず、このプロジェクトをルートに固定
  outputFileTracingRoot: __dirname,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  eslint: {
    // 本番ビルドを止めないため lint はビルドと分離（`npm run lint` で個別実行）
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
