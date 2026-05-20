import { PageHeader } from "@/app/components/layout/PageHeader";
import { PageFooter } from "@/app/components/layout/PageFooter";
import { TimelineSection } from "./_components/TimelineSection";
import { ToolsSection } from "./_components/ToolsSection";
import { InfluencesSection } from "./_components/InfluencesSection";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="max-w-[720px] mx-auto px-6 md:px-12">
        <PageHeader pageTitle="Profile" backLink="/" />
        <div className="pt-[64px]">
          <section className="pb-[88px]">
            <p className="text-[12px] text-muted font-mono tracking-[0.24px] mb-8">
              Profile · この人について
            </p>
            <h1 className="text-[40px] md:text-[44px] font-jp font-medium leading-[1.3] tracking-tight">
              つくる時間の中身を、<br />もう少し。
            </h1>
          </section>

          <section className="pb-[88px] space-y-4 font-jp text-[15px] leading-relaxed">
            <p>
              React と NestJS で Web アプリを作っています。最初の仕事は学生時代に10人チームで作った Next.js の地域企業紹介サービス（10ヶ月）。その後 DynamoDB の電子カルテ、新卒研修の講師リーダー（50人）、医療系オンラインアプリのフロント・バックエンドと、毎年違うものを触ってきました。
            </p>
            <p>
              直近の関心は AI で開発を速くすること。Claude Desktop 向けの MCP サーバーを自分で書いて、何を AI に任せるかを試している最中です。
            </p>
          </section>

          <TimelineSection />
          <ToolsSection />
          <InfluencesSection />

          <section className="pb-[64px] space-y-3">
            <p className="font-jp text-[15px]">
              話してみたい / 一緒にやりたい — どちらも歓迎です。
            </p>
            <p className="text-[14px]">
              <a
                href="mailto:iamkaneisanda@gmail.com"
                className="text-text underline underline-offset-4 decoration-border hover:decoration-text"
              >
                iamkaneisanda@gmail.com
              </a>
              <span className="text-muted"> · </span>
              <a href="/" className="text-text hover:text-accent">
                <span className="font-jp">もどる</span>{" "}
                <span className="text-muted italic">/ Back to home</span> →
              </a>
            </p>
          </section>
        </div>
        <PageFooter />
      </div>
    </main>
  );
}
