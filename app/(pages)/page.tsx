import { PageHeader } from '@/app/components/layout/PageHeader';
import { PageFooter } from '@/app/components/layout/PageFooter';
import { AboutSection } from './_components/AboutSection';
import { WorksSection } from './_components/WorksSection';
import { NowSection } from './_components/NowSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="max-w-[720px] mx-auto px-6 md:px-12">
        <PageHeader pageTitle="Portfolio" />
        <div className="pt-[88px]">
          <AboutSection />
          <WorksSection />
          <NowSection />
        </div>
        <PageFooter />
      </div>
    </main>
  );
}
