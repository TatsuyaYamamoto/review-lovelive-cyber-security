import { NextPage } from "next";

import AppLayout from "@/components/AppLayout";
import TwitterTimelineDemo from "@/components/TwitterTimelineDemo/TwitterTimelineDemo";
import LinesTextbox from "@/components/LinesTextbox";
import useScript from "@/components/hooks/useScript";

import styles from "@/styles/chapter-1.module.scss";

import { section1 } from "@/resources/script/chapter1";

const Chapter3Section1: NextPage = () => {
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

export default Chapter3Section1;
