import setupHsimp from "hsimp-purescript";
import language from "hsimp-purescript/language/english.json";
import characterSets from "hsimp-purescript/data/character-sets.json";
import common from "hsimp-purescript/data/common/top10k.json";
import patterns from "hsimp-purescript/data/patterns.json";

const ja = {
  ...language,
  periods: [
    ...language.periods,
    {
      singular: "ピコ秒",
      plural: "ピコ秒",
      seconds: 1e-12,
    },
    {
      singular: "ナノ秒",
      plural: "ナノ秒",
      seconds: 1e-9,
    },
    {
      singular: "マイクロ秒",
      plural: "マイクロ秒",
      seconds: 0.000001,
    },
    {
      singular: "ミリ秒",
      plural: "ミリ秒",
      seconds: 0.001,
    },
    {
      singular: "秒",
      plural: "秒",
      seconds: 1,
    },
    {
      singular: "分",
      plural: "分",
      seconds: 60,
    },
    {
      singular: "時間",
      plural: "時間",
      seconds: 3600,
    },
    {
      singular: "日",
      plural: "日",
      seconds: 86400,
    },
    {
      singular: "週間",
      plural: "週間",
      seconds: 604800,
    },
    {
      singular: "ヶ月",
      plural: "ヶ月",
      seconds: 2626560,
    },
    {
      singular: "年",
      plural: "年",
      seconds: 31557600,
    },
  ],
  numbers: [
    ...language.numbers,
    {
      name: "00",
      value: 2,
    },
    {
      name: "000",
      value: 3,
    },
    {
      name: "000000",
      value: 6,
    },
  ],
};

const hsimp = setupHsimp({
  // the number of calculations per second a computer can do
  calculationsPerSecond: 40e9,

  // whether to display named numbers
  namedNumbers: true,

  // a language file
  language: ja,

  // different checks
  checks: {
    // character sets to check
    characterSets,

    // common passwords to check
    common,

    // patterns to check
    patterns,
  },
});

export interface HsimpResult {
  // https://www.npmjs.com/package/hsimp-purescript#levels
  level:
    | "insecure" // a really bad password, probably very common
    | "warning" //might be ok, but things to be aware of
    | "easter-egg" //they've found something silly
    | "notice" //nothing major
    | "achievement"; // something to be proud of
  estimatedTime: string;
}

export const calculatePasswordStrength = (text: string): HsimpResult => {
  const result = hsimp(text);
  return {
    level: result.level,
    estimatedTime: result.time
      // replace white space
      .replace(/\s+/g, ""),
  };
};
