import { useState } from "react";
import { NextPage } from "next";

import AppLayout from "../src/components/AppLayout";
import TwitterTimelineDemo from "../src/components/TwitterTimelineDemo/TwitterTimelineDemo";
import Textbox from "../src/components/Textbox";
import styles from "../src/styles/chapter-1.module.scss";

import script from "../src/script/chapter1";

const Chapter2: NextPage = () => {
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

export default Chapter2;
