import Image from 'next/image';
import Link from 'next/link';
import profileImg from '@/app/_assets/images/profile.jpg';

// Inline BilingualText — swap for: import { BilingualText } from '@/app/components/ui/BilingualText'
function BilingualText({ jp, en }: { jp: string; en: string }) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-text">{jp}</p>
      <p className="text-sm text-muted italic">{en}</p>
    </div>
  );
}

// Inline ExploreLink — swap for: import { ExploreLink } from '@/app/components/ui/ExploreLink'
function ExploreLink({ href, jp, en }: { href: string; jp: string; en: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-sm text-text hover:text-accent transition-colors"
    >
      <span>{jp}</span>
      <span className="text-muted italic"> / {en}</span>
      <span className="ml-0.5">→</span>
    </Link>
  );
}

const SOCIAL_LINKS = [
  { label: 'Email', href: 'mailto:iamkaneisanda@gmail.com', external: false },
  { label: 'GitHub', href: 'https://github.com/yoshiko-yoshiko', external: true },
  { label: 'Zenn', href: 'https://zenn.dev/aiueo700', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kanei-nakashima-571257344/', external: true },
] as const;

export function AboutSection() {
  return (
    <section className="border-b border-border pb-8">
      <p className="text-xs text-muted font-mono uppercase tracking-widest mb-4">About me</p>

      <div className="flex items-start gap-4 mb-4">
        <Image
          src={profileImg}
          alt="Kanei Nakashima"
          width={48}
          height={48}
          className="rounded-full object-cover shrink-0"
        />
        <div>
          <p className="text-lg font-semibold text-text leading-tight">Kanei Nakashima</p>
          <p className="text-sm text-muted mt-0.5">中嶋 嘉永 · Fullstack Engineer · Tokyo</p>
          <div className="flex flex-wrap items-center mt-1.5">
            {SOCIAL_LINKS.map((link, i) => (
              <span key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  className="text-xs text-muted hover:text-text transition-colors"
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {link.label}
                </a>
                {i < SOCIAL_LINKS.length - 1 && (
                  <span className="text-xs text-muted mx-1.5">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <BilingualText
          jp="React と NestJS で Web アプリを作っているフルスタックエンジニアです。"
          en="A fullstack engineer building web apps with React and NestJS."
        />
      </div>

      <ExploreLink href="/profile" jp="もっと知りたい" en="Explore further" />
    </section>
  );
}
