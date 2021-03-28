import { NextPage } from "next";

import CharacterRenderer from "@/components/CharacterRenderer";
import AppLayout from "@/components/AppLayout";
import LinesTextbox from "@/components/LinesTextbox";

import { section3 as script } from "@/resources/script/intro";

import styles from "@/styles/chapter-1.module.scss";
import useScript from "@/components/hooks/useScript";

const IntroSection3: NextPage = () => {
  const { characterRendererSource, linesSource, moveForward } = useScript(
    script
  );

  const onClick = () => {
    moveForward();
  };

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
