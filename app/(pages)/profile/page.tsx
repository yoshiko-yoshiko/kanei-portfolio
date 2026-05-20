import { PageHeader } from "@/app/components/portfolio/PageHeader";
import { PageFooter } from "@/app/components/portfolio/PageFooter";
import { TimelineSection } from "@/app/components/portfolio/profile/TimelineSection";
import { PhilosophySection } from "@/app/components/portfolio/profile/PhilosophySection";
import { ToolsSection } from "@/app/components/portfolio/profile/ToolsSection";
import { InfluencesSection } from "@/app/components/portfolio/profile/InfluencesSection";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <PageHeader pageTitle="Profile" />
      <div className="max-w-[720px] mx-auto px-6 md:px-12 space-y-16">
        <section>
          <p className="text-xs text-muted font-mono mb-4">Profile · この人について</p>
          <h1 className="text-4xl md:text-5xl font-jp leading-tight">
            つくる時間の中身を、<br />もう少し。
          </h1>
        </section>
        <section className="space-y-4 font-jp text-sm leading-relaxed">
          <p>React と NestJS で Web アプリを作っているフルスタックエンジニアです。学生時代に10人チームでNext.jsの地域企業紹介サービスを10ヶ月かけて作ったのが開発の原点。今は医療系Webアプリのフロント・バックエンドを担当しつつ、新卒技術研修で約50名の講師リーダーも務めました。</p>
          <p>最近は AI で開発をどこまで加速できるかに関心があり、Claude Desktop 向け MCP サーバーの自作や、AI エージェントによる並列開発の仕組みづくりに取り組んでいます。</p>
        </section>
        <TimelineSection />
        <PhilosophySection />
        <ToolsSection />
        <InfluencesSection />
        <section className="space-y-2 pb-8">
          <p className="font-jp text-sm">話してみたい / 一緒にやりたい — どちらも歓迎です。</p>
          <p className="text-sm">
            <a href="mailto:iamkaneisanda@gmail.com" className="hover:text-accent">
              iamkaneisanda@gmail.com
            </a>
            <span className="text-muted"> · </span>
            <a href="/" className="hover:text-accent">
              <span className="font-jp">もどる</span> / Back to home →
            </a>
          </p>
        </section>
      </div>
      <PageFooter />
    </main>
  );
}
