import Head from "next/head";
import { useRouter } from "next/router";

import styles from "../src/styles/Home.module.css";

import useAlert from "../src/components/hooks/useAlert";
import Button from "@material-ui/core/Button";

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
          <a
            target="_blank"
            href="https://twitter.com/search?q=%23%E3%82%B5%E3%82%A4%E3%83%90%E3%83%BC%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%81%AF%E5%85%A8%E5%93%A1%E5%8F%82%E5%8A%A0"
          >
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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>復習！サイバーセキュリティ</h1>
        <p className={styles.description}>REVIEW LOVELIVE CYBER SECURITY</p>
        <Button onClick={onClickStartButton}>開始！</Button>
      </main>
    </div>
  );
}
