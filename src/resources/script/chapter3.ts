import { ScriptType } from "./Script";

export const section1: ScriptType[][] = [
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "kanashi", position: 0.25 }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text:
        "今更だけど、そのハンドブックって安心できるものなわけ？どこで手に入れたの？",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "kanashi", position: 0.75 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "え...えっと...ネットのどこ...か...？",
    },
  ],
  [
    {
      type: "lines",
      speaker: "hanamaru",
      text: "まる、どこでダウンロードしたかなぁ...。",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "ruby", type: "uyuyu", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "ruby",
      text: "えぇ！ルビィたち、変な情報でお勉強しちゃったかなぁ...。",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "kanashi", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text:
        "お...落ち着くずら...！たしか、このハンドブックには奥付があって...そこには...",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "odoroki", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `<span>そう！NISC！<a href="#" onClick={clickLink("nisc")}>内閣サイバーセキュリティセンター</a>のホームページからダウンロードしたんだった！</span>`,
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "daten", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text:
        "どんな悪魔を召喚しているか把握するのは、堕天使の基本よ！リトルデーモン！",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "kanashi", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text:
        "あわわ...。よしこちゃんが言ってる意味は分からないけれど、返す言葉もないずら...。",
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
        "自分が参考にしている情報が正しいのか、正しくないのか、どこから出たものかなんて、常に気にしておくべきものだわ！",
    },
  ],
];

export const section2: ScriptType[][] = [
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "ruby", type: "futsu", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "ruby",
      text:
        "よかったぁ〜これでルビィたちのサイバーセキュリティも、一歩安心に近づい...え？！！！",
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
      text: "なんなのよ！いきなり大きな声出して！",
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
      text: "SNSを見て！SaintSnow のライブだって！",
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
      text: "SaintSnow さんが？！それは大ニュースずらぁ...！",
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
      text:
        "ここの URL に詳細が書いてあるんだって、急いで ex(イーカケル)の先行抽選の準備しなくちゃ...！",
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
      text: "いやいや、待ちなさいよ！どう考えたって怪しいじゃない！",
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
        "なによ、saint-sn0w.com って！訳の分からないドメインのページなんて見に行っていいわけないでしょう！",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "fuman", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "(よしこちゃん、怪しいリンクをちゃんと見分けられたんだね...）",
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
      text: "そういえば、SaintSnow さんって公式サイトなんてあったっけ...。",
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
      text: "たしかに...ちょっと落ち着かないと駄目だね。",
    },
  ],
];

export const section3: ScriptType[][] = [
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "fuman", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text:
        "この情報をリツイートとかで拡散してみんなで勝手に盛り上げるなんて、色んな人を傷つけるわ！",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "daten", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text:
        "混沌と交錯する情報...そのカオスから！始祖の名に相応しい光、光源を見つけるのよ！！",
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
      text: "公式の情報や一次情報を確認しろってことずらね。",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "fuman", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text:
        "よしこちゃんの言う通り、反射的に信じたり拡散したりすることは危険ずら。",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "ruby", type: "uyuyu", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "ruby",
      text:
        "たしかに、拡散されているから正しいってことでもないし、気をつけなくっちゃ。",
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
      text: "スクールアイドルに夢中なルビィだからこそ、ね",
    },
  ],
];
