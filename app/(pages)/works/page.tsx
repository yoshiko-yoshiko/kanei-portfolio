"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { WORKS } from "@/app/(data)/works";
import { PageHeader } from "@/app/components/layout/PageHeader";
import { PageFooter } from "@/app/components/layout/PageFooter";
import { WorksFilter } from "./_components/WorksFilter";
import { WorksTimeline } from "./_components/WorksTimeline";

export default function WorksPage() {
  const [selected, setSelected] = useState("all");

  const filtered = useMemo(() => {
    if (selected === "all") return WORKS;
    return WORKS.filter((w) => w.category === selected);
  }, [selected]);

  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="max-w-[720px] mx-auto px-6 md:px-12">
        <PageHeader pageTitle="Works" backLink="/" />
        <div className="pt-[64px]">
          {/* Hero */}
          <section className="pb-[64px]">
            <p className="text-[12px] text-muted font-mono tracking-[0.24px] mb-8">
              Works · 全アーカイブ
            </p>
            <h1 className="text-[40px] md:text-[44px] font-medium font-jp leading-[1.3] tracking-tight mb-8">
              つくってきたものの
              <br />
              全部。
            </h1>
            <div className="space-y-2">
              <p className="text-[15px] text-text font-jp leading-relaxed">
                主要 4 件のケーススタディに加えて、小さな試作・社内プログラム・登壇・記事など、これまでの取り組みを年表で並べています。
              </p>
              <p className="text-[14px] text-muted font-jp">
                ★ 印は詳しいケーススタディがあります。
              </p>
            </div>
          </section>

          {/* Filter */}
          <section className="pb-[64px]">
            <WorksFilter
              selected={selected}
              onChange={setSelected}
              totalCount={WORKS.length}
            />
          </section>

          {/* Timeline */}
          <section className="pb-[88px]">
            <WorksTimeline entries={filtered} />
          </section>

          {/* Links */}
          <section className="pb-[40px]">
            <p className="text-[14px] text-muted font-jp leading-relaxed">
              技術記事は{" "}
              <a
                href="https://zenn.dev/aiueo700"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-accent underline underline-offset-4 decoration-border hover:decoration-text transition-colors"
              >
                Zenn @aiueo700
              </a>
              {" "}に継続的に書いています。OSS への小さな PR は{" "}
              <a
                href="https://github.com/yoshiko-yoshiko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-accent underline underline-offset-4 decoration-border hover:decoration-text transition-colors"
              >
                GitHub
              </a>
              {" "}から。
            </p>
          </section>

          {/* Back link */}
          <section className="pb-[40px]">
            <Link
              href="/"
              className="text-[14px] text-text hover:text-accent transition-colors"
            >
              ← <span className="font-jp">もどる</span>{" "}
              <span className="text-muted italic">/ Back to home</span>
            </Link>
          </section>
        </div>
        <PageFooter rightText={`/works · ${WORKS.length} entries`} />
      </div>
    </main>
  );
}
