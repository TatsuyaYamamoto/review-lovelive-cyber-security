import { useEffect } from "react";
import { NextPage } from "next";
import { useDispatch } from "react-redux";

import AppLayout from "@/components/AppLayout";
import TwitterTimelineDemo from "@/components/TwitterTimelineDemo/TwitterTimelineDemo";
import LinesTextbox from "@/components/LinesTextbox";
import useScript from "@/components/hooks/useScript";

import styles from "@/styles/chapter-1.module.scss";

import { section3 as script } from "@/resources/script/chapter3";
import { moveStep } from "@/redux/slices/chapterStepper";
import CharacterRenderer from "@/components/CharacterRenderer";

const Chapter3Section3: NextPage = () => {
  const dispatch = useDispatch();
  const {
    linesSource,
    isFinished,
    characterRendererSource,
    moveForward,
  } = useScript(script);

  const onClick = () => {
    moveForward();
  };

  useEffect(() => {
    if (isFinished) {
      dispatch(moveStep(3, 4));
    }
  }, [isFinished]);

  return (
    <AppLayout onClick={onClick}>
      <CharacterRenderer source={characterRendererSource} />
      <LinesTextbox className={styles.textbox} source={linesSource} />
    </AppLayout>
  );
};

export default Chapter3Section3;
