function BilingualText({ jp, en }: { jp: string; en: string }) {
  return (
    <div className="space-y-3">
      <p className="text-[15px] leading-relaxed text-text font-jp">{jp}</p>
      <p className="text-[15px] leading-relaxed text-muted italic">{en}</p>
    </div>
  );
}

export function NowSection() {
  return (
    <section className="pb-[88px]">
      <p className="text-[12px] text-muted font-mono tracking-[0.24px] mb-8">Now</p>
      <BilingualText
        jp="医療系 Web アプリのフロント・バックエンドを担当しています。"
        en="Working on medical web apps — fullstack."
      />
    </section>
  );
}
