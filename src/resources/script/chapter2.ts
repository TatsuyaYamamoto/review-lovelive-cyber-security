import { ScriptType } from "./Script";

export const section1: ScriptType[][] = [
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "daten", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "これでヨハネの情報処理結界はより強固なものになったわね。",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "(がさごそ...)",
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
      text: "サイバーセキュリティは完璧っと！",
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "egao", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "monologue",
      text: "(パシャッ 📷✨)",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "odoroki", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: "よしこちゃん！自撮り投稿もいいけれど、一緒に色々映ってるずらぁ！",
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
        "ツールが完璧でも、人間が大事な情報を漏らしちゃったら、元も子もないよぅ...。",
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "kanashi", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: "うぐ...。ヨハネの結界にもまだ脆弱性が残っていたかしら...。",
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
      text: `<span><a href="#" onClick={clickLink("human_security_hall")}>「人間は最大のセキュリティホール」</a>なんて言われているってハンドブックにも書いてあるずら。</span>`,
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "kanashi", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `<span>個人情報はそれ自体も大切な情報だけれど、<a href="#" onClick={clickLink("abuse_personal_infomation")}>他のサービスのアカウント情報やパスワード情報も推測できるかもしれない</a>から、大事に扱わないと駄目ずらぁ...。</span>`,
    },
  ],
  [
    {
      type: "lines",
      speaker: "hanamaru",
      text: `<span>まさに<a href="#" onClick={clickLink("kokoro_no_suki")}>心の隙</a>！自分のことは自分で守るずらぁ！</span>`,
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
        "他の人の情報まで発信しちゃうと、もっと大変だね...。ルビィも気をつけなくちゃ。",
    },
  ],
];

export const section2: ScriptType[][] = [
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "futsu", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `対策バッチリなパスワードを作って、アプリを最新版にしても、まる達が自分で情報を漏らしちゃったら、攻撃者の手間をまるが解消してるも同然ずら`,
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
      text: `どんなときに漏れちゃうんだろう？`,
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
      text: `<span>例えば、メールに書かれている<a href="#" onClick={clickLink("link_and_attachement")}>リンクや添付ファイル</a>、あと<a href="#" onClick={clickLink("phishing_site")}>フィッシングサイト</a>にも注意！</span>`,
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "egao", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `<span>...って<a href="#" onClick={clickLink("cyber_security_awareness_month")}>サイバーセキュリティ月間</a>でもやっていたずら。</span>`,
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
      text: `怪しいリンクってどうやって見分けるの？`,
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
      text: `ヨハネ・アイ！！！`,
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
      text: `少し難しいんだけれど、「ドメイン」というものに注目するずら。`,
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
      text: `どめいん？`,
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
      text: `ドメインはインターネット上の住所のことで、サイトがどこにあるかを表しているずら。`,
    },
  ],
  [
    {
      type: "lines",
      speaker: "hanamaru",
      text: `例えば、このURL 「https://lovelive-anime.jp/」`,
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
      text: `知ってるわ。みんなで叶えるあれよね。`,
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "egao", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `これの "lovelive-anime.jp" に注目するずら！これがドメイン！`,
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [{ speaker: "yoshiko", type: "egao", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "yoshiko",
      text: `"jp" は、"日本"を表しているのよね。`,
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
      text: `ドメインが「怪しい」か「怪しくない」かは、結局自分で判断するしかないずら...。`,
    },
  ],
  [
    {
      type: "character",
      character: [{ speaker: "hanamaru", type: "futsu", position: 0.5 }],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `でも、いつも使っているサイトのドメインを見ておくと、いつか偽物のサイトに間違えてアクセスしちゃったときも気づくことが出来るかもしれないよ！`,
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
      text: `もし「https://lovelive.net」なんてURLがあったら...`,
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
      text: `うゆゆ...`,
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
      text: `少なくとも、公式のホームページではないわね。信頼に値するかは、自分で判断するしかないわ。`,
    },
  ],
  [
    { type: "character_clear" },
    {
      type: "character",
      character: [
        { speaker: "yoshiko", type: "daten", position: 0.25 },
        { speaker: "hanamaru", type: "kanashi", position: 0.75 },
      ],
    },
    {
      type: "lines",
      speaker: "hanamaru",
      text: `まるの台詞！！`,
    },
  ],
];

export const section3: ScriptType[][] = [];
