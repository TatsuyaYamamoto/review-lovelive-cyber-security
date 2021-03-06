import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import AppLayout from "@/components/AppLayout";
import TwitterTimelineDemo from "@/components/TwitterTimelineDemo/TwitterTimelineDemo";
import LinesTextbox from "@/components/LinesTextbox";
import useScript from "@/components/hooks/useScript";

import styles from "@/styles/chapter-1.module.scss";

import { section2 as script } from "@/resources/script/chapter3";

const Chapter3Section2: NextPage = () => {
  const router = useRouter();
  const { linesSource, isFinished, moveForward } = useScript(script);

  const onClick = () => {
    moveForward();
  };

  useEffect(() => {
    if (isFinished) {
      router.push(`/chapter-3/section-3`);
    }
  }, [isFinished]);

  return (
    <AppLayout onClick={onClick}>
      <TwitterTimelineDemo />
      <LinesTextbox className={styles.textbox} source={linesSource} />
    </AppLayout>
  );
};

export default Chapter3Section2;
