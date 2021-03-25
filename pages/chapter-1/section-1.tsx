import { useState } from "react";
import { NextPage } from "next";
import AppLayout from "@/components/AppLayout";
import Textbox from "@/components/Textbox";

import script from "@/script/chapter1";
import styles from "@/styles/chapter-1.module.scss";

const Chapter1Section1: NextPage = () => {
  const [scriptIndex, setScriptIndex] = useState(0);

  const onClick = () => {
    setScriptIndex((value) => value + 1);
  };

  const currentScript = script[scriptIndex];

  return (
      <AppLayout onClick={onClick}>
        <div className={styles.root}>
          <div>Chapter1</div>

          <Textbox className={styles.textbox} script={currentScript} />
        </div>
      </AppLayout>
  );
};

export default Chapter1Section1;
