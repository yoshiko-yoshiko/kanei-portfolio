import { PageHeader } from '@/app/components/portfolio/PageHeader';
import { PageFooter } from '@/app/components/portfolio/PageFooter';
import { AboutSection } from '@/app/components/portfolio/top/AboutSection';
import { WorksSection } from '@/app/components/portfolio/top/WorksSection';
import { NowSection } from '@/app/components/portfolio/top/NowSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="max-w-[720px] mx-auto px-6 md:px-12">
        <PageHeader pageTitle="Portfolio" />
        <AboutSection />
        <WorksSection />
        <NowSection />
        <PageFooter />
      </div>
    </main>
  );
}
