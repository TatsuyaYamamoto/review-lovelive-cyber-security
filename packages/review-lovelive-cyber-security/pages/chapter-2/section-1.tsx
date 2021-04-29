import { NextPage } from "next";

import AppLayout from "@/components/AppLayout";
import LinesTextbox from "@/components/LinesTextbox";
import CharacterRenderer from "@/components/CharacterRenderer";
import useScript from "@/components/hooks/useScript";

import { section1 as script } from "@/resources/script/chapter2";

import styles from "@/styles/chapter-1.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Chapter2Section1: NextPage = () => {
  const router = useRouter();
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
      router.push(`/chapter-2/section-2`);
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
