import { useRouter } from "next/router";

import useAlert from "@/components/hooks/useAlert";

import styles from "@/styles/pages_index.module.scss";
import Fab from "@material-ui/core/Fab";
import HelpIcon from "@material-ui/icons/Help";
import TwitterIconSvg from "@/assets/svg/TwitterIcon.svg";
import { openTweetIntent } from "@/helpers/utiles";

const aprilFool2021 = new Date(2021, 4 - 1, 1, 0, 0, 0);
const today = new Date();
const diffMs = new Date(today.getTime() - aprilFool2021.getTime()).getTime();
const diffDate = Math.floor(diffMs / (1000 * 60 * 60 * 24)) % 365;
const title =
  diffDate === 0
    ? "今日はエイプリルフールです！"
    : `${String(diffDate)}日前はエイプリルフールでした！`;

export default function Home() {
  const router = useRouter();
  const alert = useAlert();

  const startGame = async () => {
    const { isConfirmed } = await alert.show({
      title,
      icon: "warning",
      html: (
        <div>
          サイバーセキュリティ月間で学んだことを一緒に復習しましょう！
          <br /> <br />
          なおこのアプリは、
          <a
            href="https://twitter.com/T28_tatsuya"
            target="_blank"
            className={styles.link}
          >
            とあるラブライバー
          </a>
          が自分でサイバーセキュリティを復習するために作成したものであり、ラブライブ公式・内閣サイバーセキュリティセンターとは
          <span className={styles.red}>一切関係がありません</span>。
          <br /> <br />
          #サイバーセキュリティは全員参加 ！
        </div>
      ),
      customClass: {
        icon: styles.alertIcon,
        confirmButton: styles.confirmButton,
      },
      confirmButtonText: "復習開始！",
      showCancelButton: true,
      cancelButtonText: "始めません...",
      allowOutsideClick: false,
    });

    if (isConfirmed) {
      await router.push(`/prologue/section-1`);
    }
  };

  const onClickStartButton = () => {
    startGame();
  };

  const onClickTwitterShare = () => {
    openTweetIntent();
  };

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <Fab className={styles.helpAction} onClick={onClickStartButton}>
          <HelpIcon />
        </Fab>
        <Fab className={styles.shareAction} onClick={onClickTwitterShare}>
          <TwitterIconSvg />
        </Fab>

        <div className={styles.tieUpKeyword}>
          <span className={styles.tieUpKeywordInner}>
            <span className={styles.inlineBlock}>みんなで叶える</span>
            <span className={styles.inlineBlock}>セキュリティ！</span>
          </span>
        </div>

        <div className={styles.title}>
          <span className={styles.inlineBlock}>復習！</span>
          <span className={styles.inlineBlock}>サイバーセキュリティ月間</span>
        </div>
        <div className={styles.subtitle}>REVIEW LOVELIVE CYBER SECURITY</div>

        <div className={styles.hashtag}>
          <span className={styles.inlineBlock}>#サイバーセキュリティは</span>
          <span className={styles.inlineBlock}>全員参加</span>
        </div>

        <div className={styles.startButtonWrapper}>
          <button className={styles.startButton} onClick={onClickStartButton}>
            復習を始める 😈💮🍭
          </button>
        </div>
      </div>
    </div>
  );
}
