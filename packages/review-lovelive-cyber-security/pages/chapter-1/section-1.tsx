import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import CharacterRenderer from "@/components/CharacterRenderer";
import AppLayout from "@/components/AppLayout";
import LinesTextbox from "@/components/LinesTextbox";

import { section1 as script } from "@/resources/script/chapter1";

import styles from "@/styles/chapter-1.module.scss";
import useScript from "@/components/hooks/useScript";

const Chapter1Section1: NextPage = () => {
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
      router.push(`/chapter-1/section-2`);
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

export default Chapter1Section1;
