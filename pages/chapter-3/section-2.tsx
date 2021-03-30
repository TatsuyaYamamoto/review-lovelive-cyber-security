import { useEffect } from "react";
import { NextPage } from "next";
import { useDispatch } from "react-redux";

import AppLayout from "@/components/AppLayout";
import TwitterTimelineDemo from "@/components/TwitterTimelineDemo/TwitterTimelineDemo";
import LinesTextbox from "@/components/LinesTextbox";
import useScript from "@/components/hooks/useScript";

import styles from "@/styles/chapter-1.module.scss";

import { section2 as script } from "@/resources/script/chapter3";
import displaySlice from "@/redux/slices/display";

const Chapter3Section2: NextPage = () => {
  const dispatch = useDispatch();
  const { linesSource, isFinished, moveForward } = useScript(script);

  const onClick = () => {
    moveForward();
  };

  useEffect(() => {
    if (isFinished) {
      dispatch(displaySlice.actions.handleChapterStepper(true));
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
