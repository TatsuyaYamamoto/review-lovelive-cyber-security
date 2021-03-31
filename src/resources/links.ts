import AppIcon from "@material-ui/icons/Apps";
import LinkIcon from "@material-ui/icons/Link";
import SecurityIcon from "@material-ui/icons/Security";

import TwitterIcon from "@/assets/svg/TwitterIcon.svg";
import GitHubIcon from "@/assets/svg/GitHubIcon.svg";

export const externalLinks = [
  {
    label: "NISC | サイバーセキュリティ月間",
    url: "https://www.nisc.go.jp/security-site/month/lovelive.html",
    Icon: SecurityIcon,
  },
  // {
  //   label: "NISC | 「インターネットの安全・安心ハンドブック」について",
  //   url: "https://www.nisc.go.jp/security-site/handbook/index.html",
  // },
];

export const appLinks = [
  {
    label: "このアプリについて",
    url: "https://github.com/TatsuyaYamamoto/review-lovelive-cyber-security",
    Icon: AppIcon,
  },
  {
    label: "ソースコード",
    url: "https://github.com/TatsuyaYamamoto/review-lovelive-cyber-security",
    Icon: GitHubIcon,
  },
];
