'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, FolderOpen, Code2, User, Mail } from 'lucide-react';
import { ZennIcon } from '../../components/icons/ZennIcon';

// 内部ページリンク
const INTERNAL_LINKS = [
  { name: 'Projects', href: '/projects', icon: FolderOpen, description: 'Works' },
  { name: 'Skills', href: '/skills', icon: Code2, description: 'Tech Stack' },
  { name: 'About', href: '/about', icon: User, description: 'Profile' },
  { name: 'Contact', href: '/contact', icon: Mail, description: 'Get in touch' },
];

// 外部リンク
const EXTERNAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/yoshiko-yoshiko', icon: Github },
  { name: 'Zenn', url: 'https://zenn.dev/aiueo700', icon: ZennIcon },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kanei-nakashima-571257344/', icon: Linkedin },
];

export function HeroSection() {
  return (
    <section className="fixed inset-0 z-10 flex items-center justify-center bg-white px-4 sm:px-6">
      <div className="w-full max-w-[600px]">
        {/* Profile Section */}
        <div className="text-center mb-10">
          {/* Profile Image */}
          <div className="w-[100px] h-[100px] mx-auto mb-5 rounded-full overflow-hidden border-4 border-[#10b981]/20">
            <Image
              src="/profile.jpg"
              alt="Kanei Nakashima"
              width={100}
              height={100}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Name */}
          <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
            Kanei Nakashima
          </h1>

          {/* Bio */}
          <p className="text-[#1a1a1a]/60 text-sm">
            Engineer
          </p>
        </div>

        {/* Internal Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {INTERNAL_LINKS.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 p-4 rounded-lg border border-[#1a1a1a]/10 hover:border-[#10b981] hover:bg-[#10b981]/5 transition-colors group"
              >
                <IconComponent className="h-5 w-5 text-[#1a1a1a]/50 group-hover:text-[#10b981] transition-colors" />
                <div className="text-left">
                  <div className="text-sm font-medium text-[#1a1a1a]">{link.name}</div>
                  <div className="text-xs text-[#1a1a1a]/40">{link.description}</div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* External Links */}
        <div className="flex justify-center gap-4">
          {EXTERNAL_LINKS.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[44px] min-h-[44px] p-3 rounded-full border border-[#1a1a1a]/10 hover:border-[#10b981] hover:bg-[#10b981]/5 transition-colors group flex items-center justify-center"
                aria-label={link.name}
              >
                <IconComponent className="h-5 w-5 text-[#1a1a1a]/50 group-hover:text-[#10b981] transition-colors" />
              </a>
            );
          })}
        </div>

        {/* Footer */}
        <p className="text-center text-[#1a1a1a]/30 text-xs mt-10">
          © 2026 Kanei Nakashima
        </p>
      </div>
    </section>
  );
}
