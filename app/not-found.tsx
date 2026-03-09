'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="text-[150px] sm:text-[200px] font-bold text-[#1a1a1a]/5 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-16 h-16 sm:w-20 sm:h-20 text-[#10b981] animate-pulse" />
          </div>
        </div>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] mb-3">
          Page Not Found
        </h1>
        <p className="text-[#1a1a1a]/60 mb-8 leading-relaxed">
          お探しのページは見つかりませんでした。
          <br />
          URLが間違っているか、ページが移動した可能性があります。
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#10b981] text-white font-medium rounded-lg hover:bg-[#059669] transition-colors"
          >
            <Home className="w-4 h-4" />
            ホームへ戻る
          </Link>
          <button
            onClick={() => typeof window !== 'undefined' && window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#1a1a1a]/10 text-[#1a1a1a]/70 font-medium rounded-lg hover:border-[#10b981] hover:text-[#10b981] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            前のページへ
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-[#1a1a1a]/5">
          <p className="text-sm text-[#1a1a1a]/40 mb-4">または、以下のページをご覧ください</p>
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
                className="px-4 py-2 text-sm text-[#1a1a1a]/60 bg-[#1a1a1a]/5 rounded-full hover:bg-[#10b981]/10 hover:text-[#10b981] transition-colors"
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
