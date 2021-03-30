import { ScriptType } from "./Script";

export const section1: ScriptType[][] = [
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "futsu", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "色々合ったけれど、今日のお勉強はこんなところかずらぁ",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "ruby", type: "ase", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "ruby",
      text:
        "頭では分かっていても、自分の行動にするのは意外と難しいんだね。気をつけなきゃって思ったよ。",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "futsu", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text:
        "上級魔法を使いこなす堕天使とはいえど、たまには基礎を確認する...ってことも悪くなかったわ。",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "futsu", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `<span>今日復習したことは、<a href='#' onClick={clickLink('motto')}>サイバーセキュリティ月間の標語</a> の一部だし、ハンドブック内の安心・安全のための知識の、超・一部ずらぁ。</span>`,
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "ruby", type: "futsu", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "ruby",
      text: `<span>もう一度<a href="#" onClick={clickLink('motto')}>ポスターやパンフレット</a>を見たりして、新しく勉強したことは <a href='#' onClick={clickLink('cyber_security_hashtag')}>#サイバーセキュリティは全員参加</a>でみんなに共有してもいいかも！</span>`,
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "futsu", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `<span>来年の <a href='#' onClick={clickLink('end_3_18')}>3/18(さいばー)</a>を目指して、また何かやりたいものね。</span>`,
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "lines",
      speaker: "monologue",
      text: "おしまい",
    },
    {
      type: "character",
      character: [
        { speaker: "yoshiko", type: "egao", position: 0.15 },
        { speaker: "hanamaru", type: "futsu", position: 0.5 },
        { speaker: "ruby", type: "egao", position: 0.85 },
      ],
    },
  ],
];
