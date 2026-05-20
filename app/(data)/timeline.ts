export type TimelineEntry = {
  date: string;
  title: string;
  body: string;
};

export const TIMELINE: TimelineEntry[] = [
  {
    date: "2023",
    title: "学生エンジニアとして開発を始める",
    body: "10人チームで Next.js の地域企業紹介サービスを10ヶ月で作りました。React の基礎はここで身につきました。",
  },
  {
    date: "2024",
    title: "電子カルテシステムの設計とサポート",
    body: "DynamoDB のテーブル設計、API 仕様書の作成、病院ヘルプデスクまで全部やりました。要件と運用がどれだけ遠いか分かった年です。",
  },
  {
    date: "2025.5",
    title: "新卒技術研修の講師リーダー",
    body: "50人の新卒研修を設計・運営しました。離脱ゼロで全員デプロイまで持っていきました。",
  },
  {
    date: "2025.8",
    title: "医療系 Web アプリの担当",
    body: "オンライン服薬指導のプラットフォームを React + NestJS で書いています。フロントもバックも自分で触っています。",
  },
  {
    date: "2025 冬",
    title: "MCP / AI エージェントを触り始める",
    body: "Claude Desktop 向けの MCP サーバーを自分で書きました。並列に AI を動かす実験中です。",
  },
  {
    date: "2026",
    title: "進行中",
    body: "デザインシステム、AI 並列開発、医療系プロダクトの改善を進めています。",
  },
];
