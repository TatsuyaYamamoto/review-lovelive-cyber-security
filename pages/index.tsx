import { useRouter } from "next/router";

import Button from "@material-ui/core/Button";

import useAlert from "@/components/hooks/useAlert";
import { officialTwitterHashtag } from "@/resources/urls";

import styles from "@/styles/pages_index.module.scss";
import AppLayout from "@/components/AppLayout";

export default function Home() {
  const router = useRouter();
  const alert = useAlert();

  const startGame = async () => {
    const { isConfirmed } = await alert.show({
      title: "今日はエイプリルフールです！",
      icon: "warning",
      html: (
        <div>
          サイバーセキュリティ月間で学んだことを一緒に復習しましょう！
          <br /> <br />
          なお、このアプリはとあるラブライバーが自分でサイバーセキュリティを復習するために作成したものであり、ラブライブ公式・内閣サイバーセキュリティセンターとは一切関係がありません。
          <br /> <br />
          <a target="_blank" href={officialTwitterHashtag}>
            #サイバーセキュリティは全員参加
          </a>
          ！
        </div>
      ),
      confirmButtonText: "復習開始！",
      showCancelButton: true,
      cancelButtonText: "始めません...",
      allowOutsideClick: false,
    });

    if (isConfirmed) {
      await router.push(`/prorogue/section-1`);
    }
  };

  const onClickStartButton = () => {
    startGame();
  };

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
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
