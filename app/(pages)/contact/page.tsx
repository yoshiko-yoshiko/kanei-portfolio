import type { Metadata } from 'next';
import { Mail, Github, Linkedin } from 'lucide-react';
import { ZennIcon } from '../../components/icons/ZennIcon';
import { SITE_CONFIG, CARD_HOVER } from '../../lib/constants';
import { generateBreadcrumbJsonLd } from '../../lib/utils';
import { PageHeader } from '../../components/PageHeader';

const breadcrumbJsonLd = generateBreadcrumbJsonLd(
  [{ name: 'Home' }, { name: 'Contact', path: '/contact' }],
  SITE_CONFIG.url
);

export const metadata: Metadata = {
  title: 'Contact',
  description: 'お仕事のご依頼、技術的な質問など、お気軽にご連絡ください。GitHub, LinkedIn, Zenn, Emailでコンタクト可能です。',
  openGraph: {
    title: `Contact | ${SITE_CONFIG.author}`,
    description: 'お仕事のご依頼、技術的な質問など、お気軽にご連絡ください。',
  },
};

const CONTACT_LINKS = [
  { name: 'Email', url: 'mailto:iamkaneisanda@gmail.com', icon: Mail, description: 'iamkaneisanda@gmail.com' },
  { name: 'GitHub', url: 'https://github.com/yoshiko-yoshiko', icon: Github, description: '@yoshiko-yoshiko' },
  { name: 'Zenn', url: 'https://zenn.dev/aiueo700', icon: ZennIcon, description: '@aiueo700' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kanei-nakashima-571257344/', icon: Linkedin, description: SITE_CONFIG.author },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageHeader />

      {/* Content */}
      <main className="pt-20 pb-16 px-6">
        <div className="max-w-[600px] mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold font-heading text-foreground mb-2">Contact</h1>
            <p className="text-text-secondary">Get in touch with me</p>
          </div>

          {/* Contact Links */}
          <div className="space-y-3">
            {CONTACT_LINKS.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                  rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={`flex items-center gap-4 p-4 rounded-lg ${CARD_HOVER} group`}
                >
                  <div className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                    <IconComponent className="h-5 w-5 text-text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{link.name}</div>
                    <div className="text-sm text-text-secondary">{link.description}</div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Message */}
          <div className="mt-12 p-6 rounded-xl bg-surface border border-border text-center">
            <p className="text-sm text-text-secondary leading-relaxed">
              プロジェクトのご相談、転職のお話、技術的な質問など、
              <br />
              お気軽にご連絡ください。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
