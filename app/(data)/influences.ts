export type Influence = {
  name: string;
  description: string;
};

export const INFLUENCES: Influence[] = [
  {
    name: "Linear",
    description: "派手にせず機能で語る UI 設計。自分の UI 判断の基準になっています。",
  },
  {
    name: "Vercel / Next.js",
    description: "DX とパフォーマンスのバランスの取り方。RSC は実プロダクトで試しています。",
  },
  {
    name: "Anthropic (Claude)",
    description: "MCP の RPC スキーマがそのまま型になる設計が好きです。自分のサーバーで参考にしました。",
  },
  {
    name: "rauchg / leerob",
    description: "個人サイトを仕事の延長として書ける人たちです。",
  },
  {
    name: "kentcdodds",
    description: "教える側と書く側を行き来する人。研修リーダーをやるときに参考にしました。",
  },
];
