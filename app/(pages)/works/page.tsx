"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { WORKS } from "@/app/(data)/works";
import { PageHeader } from "@/app/components/portfolio/PageHeader";
import { WorksFilter } from "@/app/components/portfolio/works/WorksFilter";
import { WorksTimeline } from "@/app/components/portfolio/works/WorksTimeline";

export default function WorksPage() {
  const [selected, setSelected] = useState("all");

  const filtered = useMemo(() => {
    if (selected === "all") return WORKS;
    return WORKS.filter((w) => w.category === selected);
  }, [selected]);

  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="max-w-[720px] mx-auto px-6 md:px-12">
        <PageHeader pageTitle="Works" />
        <div className="space-y-10 py-12">
          {/* Hero */}
          <section className="space-y-4">
            <p className="text-xs text-muted font-mono uppercase tracking-widest">
              Works · 全アーカイブ
            </p>
            <h1 className="text-5xl font-medium font-jp leading-tight">
              つくってきたものの
              <br />
              全部。
            </h1>
            <div className="space-y-1">
              <p className="text-sm text-muted font-jp leading-relaxed">
                主要 4 件のケーススタディに加えて、小さな試作・社内プログラム・登壇・記事など、これまでの取り組みを年表で並べています。
              </p>
              <p className="text-sm text-muted font-jp">
                ★ 印は詳しいケーススタディあり。
              </p>
            </div>
          </section>

          {/* Filter */}
          <section>
            <WorksFilter
              selected={selected}
              onChange={setSelected}
              totalCount={WORKS.length}
            />
          </section>

          {/* Timeline */}
          <section>
            <WorksTimeline entries={filtered} />
          </section>

          {/* Links */}
          <section>
            <p className="text-sm text-muted font-jp leading-relaxed">
              技術記事は{" "}
              <a
                href="https://zenn.dev/aiueo700"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-accent underline underline-offset-2 transition-colors"
              >
                Zenn @aiueo700
              </a>
              {" "}に継続的に書いています。OSS への小さな PR は{" "}
              <a
                href="https://github.com/yoshiko-yoshiko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-accent underline underline-offset-2 transition-colors"
              >
                GitHub
              </a>
              {" "}から。
            </p>
          </section>

          {/* Back link */}
          <section>
            <Link
              href="/"
              className="text-sm text-muted hover:text-text transition-colors"
            >
              ← もどる / Back to home
            </Link>
          </section>

          {/* Footer */}
          <footer className="border-t border-border pt-4 flex items-center justify-between">
            <span className="text-xs text-muted">© 2026 Kanei Nakashima</span>
            <span className="text-xs text-muted font-mono">
              /works · {WORKS.length} entries
            </span>
          </footer>
        </div>
      </div>
    </main>
  );
}
