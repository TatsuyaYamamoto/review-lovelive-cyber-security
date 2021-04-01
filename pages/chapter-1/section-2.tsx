import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import AppLayout from "@/components/AppLayout";
import LinesTextbox from "@/components/LinesTextbox";

import { section2 as script } from "@/resources/script/chapter1";

import useScript from "@/components/hooks/useScript";
import PasswordCheckForm from "@/components/PaswordCheckForm";
import { HsimpResult } from "@/helpers/howSecureIsMyPassword";

import styles from "@/styles/chapter-1.module.scss";
import useGa from "@/components/hooks/useGa";

const Chapter1Section2: NextPage = () => {
  const router = useRouter();
  const ga = useGa();
  const {
    linesSource,
    isFinished,
    focusId,
    isUserActionRequired,
    moveForward,
    resolveUserAction,
  } = useScript(script);

  const onClick = () => {
    if (isUserActionRequired) {
      return;
    }
    moveForward();
  };

  const onPasswordCheckResult = (result: HsimpResult) => {
    const { estimatedTime } = result;

    ga.event({
      action: "user_action",
      category: "password_checke",
      value: estimatedTime,
    });

    if (!estimatedTime.endsWith("年")) {
      return;
    }
    const estimatedYears = parseInt(estimatedTime.replace("年", ""));
    if (estimatedYears < 400) {
      return;
    }

    resolveUserAction();
  };

  useEffect(() => {
    if (isFinished) {
      router.push(`/chapter-1/section-3`);
    }
  }, [isFinished]);

  return (
    <AppLayout onClick={onClick}>
      <div className={styles.root}>
        <PasswordCheckForm
          focusId={focusId}
          className={styles.form}
          onResult={onPasswordCheckResult}
        />
        <LinesTextbox className={styles.textbox} source={linesSource} />
      </div>
    </AppLayout>
  );
};

export default Chapter1Section2;
