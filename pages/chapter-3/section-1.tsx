import { useState } from "react";
import { NextPage } from "next";

import AppLayout from "@/components/AppLayout";
import TwitterTimelineDemo from "@/components/TwitterTimelineDemo/TwitterTimelineDemo";
import Textbox from "@/components/Textbox";
import styles from "@/styles/chapter-1.module.scss";

import script from "@/script/chapter1";

const Chapter3Section1: NextPage = () => {
  const [scriptIndex, setScriptIndex] = useState(0);

  const onClick = () => {
    setScriptIndex((value) => value + 1);
  };

  const currentScript = script[scriptIndex];

  return (
    <AppLayout onClick={onClick}>
      <TwitterTimelineDemo />
      <Textbox className={styles.textbox} script={currentScript} />
    </AppLayout>
  );
};

export default Chapter3Section1;
