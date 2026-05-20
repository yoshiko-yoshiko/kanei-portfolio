import Image from 'next/image';
import Link from 'next/link';
import profileImg from '@/app/_assets/images/profile.jpg';

function BilingualText({ jp, en }: { jp: string; en: string }) {
  return (
    <div className="space-y-4">
      <p className="text-[15px] leading-relaxed text-text font-jp">{jp}</p>
      <p className="text-[15px] leading-relaxed text-muted italic">{en}</p>
    </div>
  );
}

function ExploreLink({ href, jp, en }: { href: string; jp: string; en: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-[14px] text-text hover:text-accent transition-colors"
    >
      <span className="font-jp">{jp}</span>
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
    <section className="pb-[88px]">
      <p className="text-[12px] text-muted font-mono tracking-[0.24px] mb-8">About me</p>

      <div className="w-[84px] h-[84px] rounded-full overflow-hidden bg-[#E8E5DD] mb-7">
        <Image
          src={profileImg}
          alt="Kanei Nakashima"
          width={84}
          height={84}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <h1 className="text-[26px] font-bold leading-tight text-text mb-2">Kanei Nakashima</h1>
      <p className="text-[14px] text-muted font-jp mb-6">中島 寛瑛 · Fullstack Engineer · Tokyo</p>

      <div className="flex flex-wrap gap-6 mb-10">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[14px] text-text underline underline-offset-4 decoration-border hover:decoration-text transition-colors"
            {...(link.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="mb-8">
        <BilingualText
          jp="React と NestJS で Web アプリを作っています。直近は AI で開発を速くすることに興味があって、MCP サーバーを自分で書いたり、AI を並列に動かして実装する方法を試している最中です。"
          en="I build web apps with React and NestJS. Lately I’m writing my own MCP servers and trying to figure out where AI actually speeds up development."
        />
      </div>

      <ExploreLink href="/profile" jp="もっと知りたい" en="Explore further" />
    </section>
  );
}
