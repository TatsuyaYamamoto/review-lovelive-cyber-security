import { NextPage } from "next";

import AppLayout from "@/components/AppLayout";
import LinesTextbox from "@/components/LinesTextbox";
import styles from "@/styles/chapter-1.module.scss";

import { section1 } from "@/resources/script/chapter2";
import useScript from "@/components/hooks/useScript";

const Chapter2Section1: NextPage = () => {
  const { linesSource, moveForward } = useScript(section1);

  const onClick = () => {
    moveForward();
  };

  return (
    <AppLayout onClick={onClick}>
      <LinesTextbox className={styles.textbox} source={linesSource} />
    </AppLayout>
  );
};

export default Chapter2Section1;
