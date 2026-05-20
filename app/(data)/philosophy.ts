export type Philosophy = {
  num: string;
  title: string;
  body: string;
};

export const PHILOSOPHY: Philosophy[] = [
  {
    num: "01",
    title: "小さく、確かに動かす",
    body: "1 リリースのスコープは絞り、最小単位で出してから磨く。スプリント単位の小さなデプロイを積み重ねるほうが、結果的に大きく動かせる。",
  },
  {
    num: "02",
    title: "AI は道具ではなく相棒",
    body: "Claude Code や MCP サーバーで日々の開発を AI に並列化させる。手で書くべきところと AI に任せるべきところの境界を、自分の中で常に更新している。",
  },
  {
    num: "03",
    title: "フロントとバックの間に線を引かない",
    body: "型・データ・UI が一気通貫で考えられないと、結局どこかで歪む。React と NestJS を両方触り続けるのはそのため。",
  },
  {
    num: "04",
    title: "速さと丁寧さは矛盾しない",
    body: "雑に速いではなく、判断を速くする。設計の意思決定を後回しにしない、レビューを溜めない、課題を見つけたらその日のうちに小さく直す。",
  },
];
