import { useRouter } from "next/router";

import Button from "@material-ui/core/Button";

import useAlert from "@/components/hooks/useAlert";
import { officialTwitterHashtag } from "@/resources/urls";

import styles from "@/styles/pages_index.module.scss";

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
      await router.push(`/intro/section-1`);
    }
  };

  const onClickStartButton = () => {
    startGame();
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.tieUpKeyword}>
          <span className={styles.tieUpKeywordInner}>
            みんなで叶えるセキュリティ！
          </span>
        </div>
        <h1 className={styles.title}>
          <span>復習！</span>
          <span>サイバーセキュリティ月間</span>
        </h1>
        <p className={styles.description}>REVIEW LOVELIVE CYBER SECURITY</p>

        <a
          href={officialTwitterHashtag}
          target="_blank"
          className={styles.hashtag}
        >
          #サイバーセキュリティは全員参加
        </a>
        <Button variant="contained" onClick={onClickStartButton}>
          開始！
        </Button>
      </div>
    </>
  );
}
