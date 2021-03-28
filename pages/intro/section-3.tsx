import { useEffect, useState } from "react";
import { NextPage } from "next";

import CharacterRenderer from "@/components/CharacterRenderer";
import AppLayout from "@/components/AppLayout";
import LinesTextbox from "@/components/LinesTextbox";
import useScript from "@/components/hooks/useScript";

import { section3 as script } from "@/resources/script/intro";

import styles from "@/styles/chapter-1.module.scss";
import displaySlice from "@/redux/slices/display";
import { useAppDispatch } from "@/redux/hooks";

const IntroSection3: NextPage = () => {
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
      dispatch(displaySlice.actions.handleChapterStepper(true));
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

export default IntroSection3;
