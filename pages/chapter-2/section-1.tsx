import { NextPage } from "next";

import AppLayout from "@/components/AppLayout";
import LinesTextbox from "@/components/LinesTextbox";
import styles from "@/styles/chapter-1.module.scss";

import { section1 } from "@/resources/script/chapter1";
import PasswordCheckForm from "@/components/PaswordCheckForm";
import { HsimpResult } from "@/helpers/howSecureIsMyPassword";
import useScript from "@/components/hooks/useScript";

const Chapter2Section1: NextPage = () => {
  const { linesSource, moveForward } = useScript(section1);

  const onClick = () => {
    moveForward();
  };

  const onPasswordCheckResult = (result: HsimpResult) => {
    console.log(result);
  };

  return (
    <AppLayout onClick={onClick}>
      <PasswordCheckForm onResult={onPasswordCheckResult} />
      <LinesTextbox className={styles.textbox} source={linesSource} />
    </AppLayout>
  );
};

export default Chapter2Section1;
