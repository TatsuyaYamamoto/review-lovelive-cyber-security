import { useEffect } from "react";
import { NextPage } from "next";
import { useAppDispatch } from "@/redux/hooks";

import CharacterRenderer from "@/components/CharacterRenderer";
import AppLayout from "@/components/AppLayout";
import LinesTextbox from "@/components/LinesTextbox";

import { section3 as script } from "@/resources/script/chapter1";

import styles from "@/styles/chapter-1.module.scss";
import useScript from "@/components/hooks/useScript";
import chapterStepperSlice from "@/redux/slices/chapterStepper";

const Chapter1Section3: NextPage = () => {
  const dispatch = useAppDispatch();
  const {
    characterRendererSource,
    linesSource,
    isFinished,
    moveForward,
  } = useScript(script);

  const onClick = () => {
    moveForward();
  };

  useEffect(() => {
    if (isFinished) {
      dispatch(
        chapterStepperSlice.actions.openChapterStepper({
          index: 2 /* chapter 2*/,
        })
      );
    }
  }, [isFinished]);

  return (
    <AppLayout onClick={onClick}>
      <div className={styles.root}>
        <CharacterRenderer source={characterRendererSource} />
        <LinesTextbox className={styles.textbox} source={linesSource} />
      </div>
    </AppLayout>
  );
};

export default Chapter1Section3;
