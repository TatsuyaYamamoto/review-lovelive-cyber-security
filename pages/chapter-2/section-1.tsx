import { useState } from "react";
import { NextPage } from "next";

import AppLayout from "@/components/AppLayout";
import Textbox from "@/components/Textbox";
import styles from "@/styles/chapter-1.module.scss";

import script from "@/resources/script/chapter1";
import PasswordCheckForm from "@/components/PaswordCheckForm";
import { HsimpResult } from "@/helpers/howSecureIsMyPassword";

const Chapter2Section1: NextPage = () => {
  const [scriptIndex, setScriptIndex] = useState(0);

  const onClick = () => {
    setScriptIndex((value) => value + 1);
  };

  const currentScript = script[scriptIndex];

  const onPasswordCheckResult = (result: HsimpResult) => {
    console.log(result);
  };

  return (
    <AppLayout onClick={onClick}>
      <PasswordCheckForm onResult={onPasswordCheckResult} />
      <Textbox className={styles.textbox} script={currentScript} />
    </AppLayout>
  );
};

export default Chapter2Section1;
