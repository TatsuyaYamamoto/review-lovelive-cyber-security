import { ScriptType } from "./Script";

export const section1: ScriptType[][] = [
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "ruby", type: "uyuyu", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "ruby",
      text: "ツール...使っている道具やサービスのセキュリティホールかぁ...",
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
      speaker: "yoshiko",
      text: "やっぱりパスワードが大定番の基本ずら",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "futsu", position: 0.25 }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "パスワードの作り方なら千歌に教わったから完璧よ",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "fuman", position: 0.75 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "えぇ...まる、いきなり御役御免？！",
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
      text: "ルビィも知ってるよ、長くて複雑なものにするんだよね！",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "egao", position: 0.75 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "さすがルビィちゃんずら！",
    },
  ],
  [
    {
      type: "lines",
      speaker: "hanamaru",
      text:
        "じゃあこの検証ツールを使って、パスワードがどれぐらいで破られちゃうか、まる達も試してみるずら！",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "fufun", position: 0.75 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text:
        "ちなみに、この検証ツールはお手持ちの端末で計算するから、保存や、サーバーに送信されてなくて安心ずら！",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "ruby", type: "ase", position: 0.25 }],
    },
    {
      type: "lines",
      speaker: "ruby",
      text: "はなまるちゃん、こんなものにまで詳しくなったんだね...！",
    },
  ],
];

export const section2: ScriptType[][] = [
  [
    {
      type: "lines",
      speaker: "yoshiko",
      text: "これはどう操作すればいいのかしら？",
    },
  ],
  [
    { type: "focus", id: "password_text" },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "ここに考えたパスワードを入力して...",
    },
  ],
  [
    { type: "focus", id: "calc_button" },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "ここのボタンを押せば、計算結果が表示されるずら",
    },
  ],
  [
    { type: "focus", id: null },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `<span>計算結果はあくまで参考値だけれど、せっかくだから<a href='#' onClick={clickLink("dia_love_password")}>400年超え</a>を目指すずら！</span>`,
    },
  ],
  [
    {
      type: "lines",
      speaker: "ruby",
      text: "おー！",
    },
  ],
  [
    {
      type: "lines",
      speaker: "monologue",
      // TODO
      text: `<span><a href='#' onClick={clickLink("dia_love_password")}>400年超え</a>の<a href="#" onClick={clickLink("secure_password")}>複雑なパスワード</a>を目指しましょう！</span>`,
    },
    {
      type: "user_action",
    },
  ],
  [
    {
      type: "lines",
      speaker: "ruby",
      text: "やったぁこれでばっちりだね！",
    },
  ],
];

export const section3: ScriptType[][] = [
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "daten", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "最高の封印術式を会得したわ。",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "egao", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "これで攻撃者共に大分手間をかけさせてやれるわ。",
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
        "でももしこのパスワードがどこかに漏れたら、ルビィのアカウント、乗っ取られちゃうのかなぁ...。",
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
      text: "ふっ...安心なさい。リトルデーモン。",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "futsu", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: `<span>そのために二要素認証というものがあるとリトルデーモン・リリィが言っていたわ。</span>`,
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [
        { speaker: "yoshiko", type: "futsu", position: 0.25 },
        { speaker: "hanamaru", type: "egao", position: 0.75 },
      ],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "さすがりこちゃんずら。",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "futsu", position: 0.75 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text:
        "パスワードは秘密の合言葉を「知ってる」ことで、本物のまるです！ってサービスに認証してもらうものずら。",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [
        { speaker: "ruby", type: "uyuyu", position: 0.25 },
        { speaker: "hanamaru", type: "futsu", position: 0.75 },
      ],
    },
    {
      type: "lines",
      speaker: "ruby",
      text:
        "パスワードが別の人に渡っちゃうと、別の人がルビィになりすましてサービスを使えるようになっちゃうってことだね...。",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "egao", position: 0.75 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text:
        "そう！だから、「本物のまるです！」って証明する手段をパスワード以外にも用意しておけば...！",
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
      text: "より、結界が強固なものなって、攻撃者を手間取らせられるわけね。",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "kiri", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `<span>それが、二要素認証ずら！</span>`,
    },
  ],
  [
    {
      type: "lines",
      speaker: "hanamaru",
      text:
        "指紋とかスマホのメッセージとか、この辺はご利用のサービスにもよりけりずら",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "ruby", type: "egao", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "ruby",
      text: "登録の案内が表示されたら、ちゃんと登録するようにしなくっちゃ！",
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
      text:
        "アプリやサービスを開発してくれている人は、まる達の情報を守るために日々開発を続けてくれているずら",
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
      text: `<span>その恩恵を受けて強力な結界を常にはっておくためにも、最新版へのアップデートを意識したいわね</span>`,
    },
  ],
];
