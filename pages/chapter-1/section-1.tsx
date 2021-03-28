import { useEffect, useState } from "react";
import { NextPage } from "next";

import CharacterRenderer from "@/components/CharacterRenderer";
import AppLayout from "@/components/AppLayout";
import LinesTextbox from "@/components/LinesTextbox";

import { section1 as section1Script } from "@/resources/script/chapter1";

import styles from "@/styles/chapter-1.module.scss";
import useScript from "@/components/hooks/useScript";

const Chapter1Section1: NextPage = () => {
  const { currentCharacterScript, currentLinesScript, moveForward } = useScript(
    section1Script
  );

  const onClick = () => {
    moveForward();
  };

  return (
    <AppLayout onClick={onClick}>
      <div className={styles.root}>
        <CharacterRenderer script={currentCharacterScript} />
        <LinesTextbox className={styles.textbox} script={currentLinesScript} />
      </div>
    </AppLayout>
  );
};

export default Chapter1Section1;
