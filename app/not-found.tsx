'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { OUTLINE_HOVER } from './lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="text-[150px] sm:text-[200px] font-bold text-foreground/5 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-16 h-16 sm:w-20 sm:h-20 text-primary animate-pulse" />
          </div>
        </div>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
          Page Not Found
        </h1>
        <p className="text-foreground/60 mb-8 leading-relaxed">
          お探しのページは見つかりませんでした。
          <br />
          URLが間違っているか、ページが移動した可能性があります。
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
          >
            <Home className="w-4 h-4" />
            ホームへ戻る
          </Link>
          <button
            onClick={() => typeof window !== 'undefined' && window.history.back()}
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-foreground/70 font-medium rounded-lg ${OUTLINE_HOVER}`}
          >
            <ArrowLeft className="w-4 h-4" />
            前のページへ
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-foreground/5">
          <p className="text-sm text-foreground/40 mb-4">または、以下のページをご覧ください</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Projects', href: '/projects' },
              { name: 'Skills', href: '/skills' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-foreground/60 bg-foreground/5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
