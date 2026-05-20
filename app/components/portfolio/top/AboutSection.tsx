import Link from 'next/link';

function BilingualText({ jp, en }: { jp: string; en: string }) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-text">{jp}</p>
      <p className="text-sm text-muted italic">{en}</p>
    </div>
  );
}

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
      <p className="text-xs text-muted font-mono mb-4">About me</p>

      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#E8E5DD] flex items-center justify-center flex-shrink-0">
          <span className="font-mono text-sm text-[#8C8678]">kn</span>
        </div>
        <div>
          <p className="text-lg font-semibold text-text leading-tight">Kanei Nakashima</p>
          <p className="text-sm text-muted mt-0.5">中島 寛瑛 · Fullstack Engineer · Tokyo</p>
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
          jp="React と NestJS で Web アプリを作っているフルスタックエンジニアです。最近は AI でどこまで開発を加速できるかに興味があり、MCP サーバーや AI エージェント並列開発に取り組んでいます。"
          en="A fullstack engineer building web apps with React and NestJS. Lately curious about how far AI can accelerate development — tinkering with MCP servers and parallel agent workflows."
        />
      </div>

      <ExploreLink href="/profile" jp="もっと知りたい" en="Explore further" />
    </section>
  );
}
