import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NextPage } from "next";

import AppLayout from "@/components/AppLayout";
import LinesTextbox from "@/components/LinesTextbox";
import CharacterRenderer from "@/components/CharacterRenderer";
import useScript from "@/components/hooks/useScript";

import { section2 as script } from "@/resources/script/chapter2";
import { moveStep } from "@/redux/slices/chapterStepper";

import styles from "@/styles/chapter-1.module.scss";

const Chapter2Section1: NextPage = () => {
  const dispatch = useDispatch();
  const {
    linesSource,
    characterRendererSource,
    isFinished,
    moveForward,
  } = useScript(script);

  const onClick = () => {
    moveForward();
  };

  useEffect(() => {
    if (isFinished) {
      dispatch(moveStep(2, 3));
    }
  }, [isFinished]);

  return (
    <AppLayout onClick={onClick}>
      <CharacterRenderer source={characterRendererSource} />
      <LinesTextbox className={styles.textbox} source={linesSource} />
    </AppLayout>
  );
};

export default Chapter2Section1;
