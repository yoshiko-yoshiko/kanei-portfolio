export type Influence = {
  name: string;
  description: string;
};

export const INFLUENCES: Influence[] = [
  {
    name: "Linear",
    description: "プロダクト全体に貫かれた抑制 — 派手にせず、機能で語る姿勢",
  },
  {
    name: "Vercel / Next.js",
    description: "DX とパフォーマンスを両立させる思想。Edge と RSC は試し続けている",
  },
  {
    name: "Anthropic (Claude)",
    description: "AI を「相棒」として扱う製品設計。MCP の設計思想に影響を受けた",
  },
  {
    name: "rauchg / leerob",
    description: "個人サイトとプロダクトの間にある「個」の表現の仕方",
  },
  {
    name: "kentcdodds",
    description: "教育 × エンジニアリングの組み合わせ方。研修リーダー時の参考に",
  },
];
