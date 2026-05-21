import Image from 'next/image';
import aiconImg from '@/app/_assets/images/projects/aicon-1.jpg';

export function AiconHero() {
  return (
    <div className="relative w-full aspect-[16/10] bg-[#E8E5DD] overflow-hidden">
      <Image
        src={aiconImg}
        alt="AiCON メイン画面"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
