// Inline BilingualText — swap for: import { BilingualText } from '@/app/components/ui/BilingualText'
function BilingualText({ jp, en }: { jp: string; en: string }) {
  return (
    <div className="space-y-1">
      <p className="text-sm text-text">{jp}</p>
      <p className="text-sm text-muted italic">{en}</p>
    </div>
  );
}

export function NowSection() {
  return (
    <section className="border-b border-border pb-8">
      <p className="text-xs text-muted font-mono uppercase tracking-widest mb-4">Now</p>
      <BilingualText
        jp="医療系 Web アプリのフロント・バックエンドを担当中。"
        en="Working on medical web apps — fullstack."
      />
    </section>
  );
}
