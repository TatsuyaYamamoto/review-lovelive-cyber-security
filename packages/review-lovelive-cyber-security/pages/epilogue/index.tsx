import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import CharacterRenderer from "@/components/CharacterRenderer";
import AppLayout from "@/components/AppLayout";
import LinesTextbox from "@/components/LinesTextbox";

import { section1 as script } from "@/resources/script/epilogue";

import styles from "@/styles/chapter-1.module.scss";
import useScript from "@/components/hooks/useScript";
import useAlert from "@/components/hooks/useAlert";
import Button from "@material-ui/core/Button";
import TwitterIconSvg from "@/assets/svg/TwitterIcon.svg";
import { openTweetIntent } from "@/helpers/utiles";

const Epilogue: NextPage = () => {
  const router = useRouter();
  const { show: showAlert } = useAlert();
  const {
    characterRendererSource,
    linesSource,
    isFinished,
    moveForward,
  } = useScript(script);

  const onClick = () => {
    moveForward();
  };

  const onClickTwitterShare = () => {
    openTweetIntent();
  };

  const showEndDialog = async () => {
    await showAlert({
      title: "復習完了！",
      icon: "success",
      customClass: {
        icon: styles.alertIcon,
        confirmButton: styles.confirmButton,
      },
      html: (
        <div>
          お疲れさまでした🍊
          <br />
          <br />
          <div>
            ハッシュタグ(#サイバーセキュリティは全員参加)と一緒にツイートしましょう！
          </div>
          <div>
            <Button
              variant="contained"
              startIcon={<TwitterIconSvg />}
              onClick={onClickTwitterShare}
              classes={{
                root: styles.shareButton,
              }}
            >
              Twitterシェア
            </Button>
          </div>
        </div>
      ),
      confirmButtonColor: "#dddddd",
      confirmButtonText: "トップへ戻ります",
      allowOutsideClick: false,
    });

    router.push(`/`);
  };

  useEffect(() => {
    if (isFinished) {
      showEndDialog();
    }
  }, [isFinished]);

  return (
    <AppLayout onClick={onClick}>
      <div className={styles.root}>
        <CharacterRenderer source={characterRendererSource} />
        <LinesTextbox className={styles.textbox} source={linesSource} />
      </div>
    </AppLayout>
  );
};

export default Epilogue;
