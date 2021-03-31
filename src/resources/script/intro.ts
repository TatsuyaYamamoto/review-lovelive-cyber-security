import { ScriptType } from "./Script";

export const section1: ScriptType[][] = [
  [
    {
      type: "lines",
      speaker: "monologue",
      text: "サイバーセキュリティ月間が終わって数日後...",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", position: 0.25, type: "fuman" }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "はぁ〜なるほど...なるほどずらぁ...",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "yoshiko", position: 0.75, type: "futsu" }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "パソコンで...読書？なんて、珍しいわね",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", position: 0.25, type: "egao" }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "あ、よしこちゃん！",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "yoshiko", position: 0.75, type: "fuman" }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "ヨハネ。",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", position: 0.25, type: "futsu" }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "すごいでしょう！インターネットで見つけたんだ！",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", position: 0.25, type: "egao" }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "まるも知識の宝庫をしっかり活用しているずら！",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [
        { speaker: "hanamaru", position: 0.25, type: "futsu" },
        { speaker: "ruby", position: 0.75, type: "egao" },
      ],
    },
    {
      type: "lines",
      speaker: "ruby",
      text: "わぁ電子書籍だ！はなまるちゃん、すごい！",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "ruby", position: 0.75, type: "futsu" }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `<span>えへへ！「<a href='#' onClick={clickLink("handbook")}>インターネットの安全・安心ハンドブック</a>」っていう本なんだ！</span>`,
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", position: 0.25, type: "fuman" }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text:
        "サイバーセキュリティ月間も終わっちゃったけれど、まる、まだサイバーセキュリティに自信がなくて...",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", position: 0.25, type: "egao" }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text:
        "ダイヤさんも「終わりはありません！」って言ってたし、この本でサイバーセキュリティを復習してるずら！",
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
      text: "ずらまるにしては珍しく、テクノロジーの世界にのめり込んでるわね。",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "daten", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text:
        "ふっ...。まぁこのヨハネに言わせてもらえば、魔界の力に遠く及ばない科学なんてものに...。",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "ruby", type: "futsu", position: 0.25 }],
    },
    {
      type: "lines",
      speaker: "ruby",
      text: "ルビィもYouTubeの動画講座で勉強したんだ！一緒に復習しようよ！",
    },
  ],
  [
    {
      type: "character",
      character: [
        { speaker: "ruby", type: "egao", position: 0.25 },
        { speaker: "hanamaru", type: "futsu", position: 0.75 },
      ],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "やったずらー！",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "ruby", type: "futsu", position: 0.25 }],
    },
    {
      type: "lines",
      speaker: "ruby",
      text:
        "ほら、よしこちゃんも！生配信とか結構やってるでしょ？念の為、一緒にお勉強しよ！",
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
      text: "ヨハネ！仕方がないわねぇ、付き合ってあげるわ。",
    },
  ],
];

export const section2: ScriptType[][] = [
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", position: 0.5, type: "kanashi" }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "結局、サイバーセキュリティって何をすればいいのよ？",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "hanamaru", position: 0.5, type: "fufun" }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "ふっふっふ...よくぞ聞いてくれたずら！",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "ruby", position: 0.5, type: "odoroki" }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "はなまるちゃん？！",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "hanamaru", position: 0.5, type: "kiri" }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `サイバー攻撃をされにくくするには「攻撃の手間がかかる」ようにするの！攻撃者にとってサイバー攻撃は利益が目的のビジネスなんだ！`,
    },
  ],
  [
    {
      type: "lines",
      speaker: "hanamaru",
      text: `より効率的に利益を上げるためには、より攻撃の手間がかからないカモをみつけて攻撃するのが一番！`,
    },
  ],
  [
    {
      type: "lines",
      speaker: "hanamaru",
      text: `だから、まる達は攻撃者にとって手間がかかるようにすることが大事！`,
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", position: 0.5, type: "egao" }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "...らしいずら！",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "ruby", position: 0.5, type: "odoroki" }],
    },
    {
      type: "lines",
      speaker: "ruby",
      text: "そうハンドブックに書いてあったんだね...！",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", position: 0.25, type: "kanashi" }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "つまり、どういうことよ？",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", position: 0.75, type: "futsu" }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text:
        "「セキュリティホールを作らないように対策して、攻撃者の手間を増やそう！」ってこと！",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "yoshiko", position: 0.25, type: "daten" }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "セキュリティホール...。私達を守る結界の....穴...。",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [
        { speaker: "ruby", position: 0.25, type: "uyuyu" },
        { speaker: "hanamaru", position: 0.75, type: "futsu" },
      ],
    },
    {
      type: "lines",
      speaker: "ruby",
      text: "セキュリティの穴...ってどういうものがあるんだろう？",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", position: 0.75, type: "kiri" }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `これはまるの解釈なんだけれど、まる達が使う"ツール"とまる達"人間"自身それぞれにセキュリティホールが出来ちゃうみたい。`,
    },
  ],
  [
    {
      type: "character",
      character: [
        { speaker: "hanamaru", position: 0.75, type: "futsu" },
        { speaker: "ruby", position: 0.25, type: "egao" },
      ],
    },
    {
      type: "lines",
      speaker: "ruby",
      text: `じゃあ"ツール"と"人間"のセキュリティホールを分けて復習しよう！`,
    },
  ],
];

export const section3: ScriptType[][] = [
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", position: 0.5, type: "futsu" }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `<span>そうそう、<a href='#' onClick={clickLink("footnote")}>青字下線の部分</a>は参考用リンクを用意しているから見てみてね。</span>`,
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", position: 0.5, type: "kanashi" }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "...誰に言ってるのよ？",
    },
  ],
];
