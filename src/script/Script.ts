export const Speakers = {
  chika: {
    icon: "🍊",
    name: "高海千歌",
  },
  riko: {
    icon: "🎹",
    name: "桜内梨子",
  },
  you: {
    icon: "⛵",
    name: "渡辺曜",
  },
  hanamaru: {
    icon: "💮",
    name: "国木田花丸",
  },
  ruby: {
    icon: "🍭",
    name: "黒澤ルビィ",
  },
  yoshiko: {
    icon: "😈",
    name: "津島善子",
  },
  dia: {
    icon: "💎",
    name: "黒澤ダイア",
  },
  mari: {
    icon: "✨",
    name: "小原",
  },
  kanan: {
    icon: "🐬",
    name: "松浦果南",
  },
} as const;

export type Speaker = keyof typeof Speakers;

export type ScriptItem =
  | {
      type: "lines";
      speaker: Speaker;
      text: string;
    }
  | {
      type: "monologue";
      text: string;
    };
