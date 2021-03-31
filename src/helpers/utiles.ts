import { APP_URL } from "@/helpers/constants";

export const wait = (seconds: number = 0): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
};

export const getCurrentChapterStepperIndex = (): number => {
  const { pathname } = location;

  if (pathname.startsWith("/prologue")) {
    return 0;
  }

  if (pathname.startsWith("/chapter-1")) {
    return 1;
  }

  if (pathname.startsWith("/chapter-2")) {
    return 2;
  }

  if (pathname.startsWith("/chapter-3")) {
    return 3;
  }

  // pathname.startsWith("/epilogue")
  return 4;
};

export const openTweetIntent = (
  tweetText: string = `サイバーセキュリティを復習するよ 😈💮🍭`
) => {
  const webIntentUrl = `https://twitter.com/intent/tweet`;
  const text = `text=${encodeURIComponent(tweetText)}`;
  const url = `url=${encodeURIComponent(APP_URL)}`;
  const hashtags = `hashtags=${encodeURIComponent(
    ["そこんところ工房", "サイバーセキュリティは全員参加", "lovelive"].join(",")
  )}`;

  window.open(`${webIntentUrl}?${text}&${url}&${hashtags}`);
};
