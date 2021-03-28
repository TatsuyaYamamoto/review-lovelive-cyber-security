import { NextPage } from "next";

import AppLayout from "../src/components/AppLayout";
import TwitterTimelineDemo from "../src/components/TwitterTimelineDemo/TwitterTimelineDemo";
import LinesTextbox from "../src/components/LinesTextbox";
import styles from "../src/styles/chapter-1.module.scss";

import { section1 } from "@/resources/script/chapter1";
import useScript from "@/components/hooks/useScript";

const Chapter2: NextPage = () => {
  const { linesSource, moveForward } = useScript(section1);

  const onClick = () => {
    moveForward();
  };

  return (
    <AppLayout onClick={onClick}>
      <TwitterTimelineDemo />
      <LinesTextbox className={styles.textbox} source={linesSource} />
    </AppLayout>
  );
};

export default Chapter2;
