export type TimelineEntry = {
  date: string;
  title: string;
  body: string;
};

export const TIMELINE: TimelineEntry[] = [
  {
    date: "2023",
    title: "学生エンジニアとして開発を始める",
    body: "10人チームでNext.jsの地域企業紹介サービスを10ヶ月で構築。フロント担当として React の基礎をここで固めた。",
  },
  {
    date: "2024",
    title: "電子カルテシステムの設計・サポートへ",
    body: "DynamoDB のテーブル設計、API 仕様書作成、病院向けヘルプデスクまで広く担当。要件と運用の距離感を学んだ年。",
  },
  {
    date: "2025.5",
    title: "新卒技術研修 講師リーダー",
    body: "約 50 名の新卒エンジニアの研修を設計・運営。離脱者ゼロで全員が成果物デプロイまで完了。",
  },
  {
    date: "2025.8",
    title: "医療系 Web アプリの担当へ",
    body: "オンライン服薬指導プラットフォームを React + NestJS で開発。フロント・バックエンド両方を担当中。",
  },
  {
    date: "2025.冬",
    title: "MCP / AI エージェント探索を開始",
    body: "Claude Desktop 向け MCP サーバーを自作。AI エージェントによる並列開発の仕組みづくりに着手。",
  },
  {
    date: "2026",
    title: "進行中",
    body: "デザインシステム、AI 並列開発、医療系プロダクト改善 — 三本立てで走り続けている。",
  },
];
