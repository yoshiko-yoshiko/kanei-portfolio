import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack安定化設定
  // 参考: https://github.com/vercel/next.js/issues/76766
  // 参考: https://nextjs.org/docs/app/api-reference/turbopack

  // 画像最適化設定（404エラー対策）
  images: {
    unoptimized: process.env.NODE_ENV === 'development',
  },

  // 開発時のソースマップ最適化
  productionBrowserSourceMaps: false,
};

export default nextConfig;
