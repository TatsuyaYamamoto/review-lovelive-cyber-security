import { ScriptType } from "./Script";

export const section1: ScriptType[] = [
  {
    type: "lines",
    speaker: "monologue",
    text: "サイバーセキュリティ月間が終わって数日後...",
    waitSeconds: 0,
  },
  { type: "click" },
  {
    type: "character",
    character: [{ speaker: "hanamaru", position: 0.25, type: "futsu" }],
    waitSeconds: 0,
  },
  {
    type: "lines",
    speaker: "hanamaru",
    text: "はぁ〜なるほど、なるほどずらぁ...",
    waitSeconds: 0,
  },
  { type: "click" },
  {
    type: "character",
    character: [{ speaker: "yoshiko", position: 0.75, type: "futsu" }],
    waitSeconds: 0,
  },
  {
    type: "lines",
    speaker: "yoshiko",
    text: "パソコンで読書？をしているなんて、珍しいわね",
    waitSeconds: 0,
  },
  {
    type: "character_clear",
  },
  {
    type: "character",
    character: [
      { speaker: "yoshiko", position: 0.15, type: "futsu" },
      { speaker: "hanamaru", position: 0.5, type: "futsu" },
      { speaker: "ruby", position: 0.85, type: "futsu" },
    ],
    waitSeconds: 0,
  },
  { type: "click" },
  {
    type: "lines",
    speaker: "hanamaru",
    text: "知識の宝庫、インターネットから見つけたんだ！",
    waitSeconds: 0,
  },
  { type: "click" },
  {
    type: "lines",
    speaker: "ruby",
    text: "わぁ電子書籍だ！はなまるちゃん、すごい！",
    waitSeconds: 0,
  },
  { type: "click" },
  {
    type: "lines",
    speaker: "hanamaru",
    text: "えへへ！「インターネットの安全・安心ハンドブック」って言うんだ！",
    waitSeconds: 0,
  },
];
