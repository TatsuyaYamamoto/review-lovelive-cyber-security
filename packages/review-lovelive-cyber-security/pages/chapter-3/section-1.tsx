import { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import AppLayout from "@/components/AppLayout";
import LinesTextbox from "@/components/LinesTextbox";
import useScript from "@/components/hooks/useScript";
import CharacterRenderer from "@/components/CharacterRenderer";

import styles from "@/styles/chapter-1.module.scss";

import { section1 as script } from "@/resources/script/chapter3";

const Chapter3Section1: NextPage = () => {
  const router = useRouter();
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
      router.push(`/chapter-3/section-2`);
    }
  }, [isFinished]);

  return (
    <AppLayout onClick={onClick}>
      <CharacterRenderer source={characterRendererSource} />
      <LinesTextbox className={styles.textbox} source={linesSource} />
    </AppLayout>
  );
};

export default Chapter3Section1;
