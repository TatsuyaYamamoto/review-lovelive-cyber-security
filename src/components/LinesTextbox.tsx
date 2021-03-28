import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

import { LinesScript, Speakers } from "@/resources/script/Script";

import styles from "./LinesTextbox.module.scss";

export interface TextboxProps extends HTMLAttributes<HTMLDivElement> {
  script: LinesScript | null;
}

const LinesTextbox: FC<TextboxProps> = (props) => {
  const { script, className } = props;

  return (
    <div className={clsx(styles.textbox, className)}>
      {script?.type === "lines" && script?.speaker !== "monologue" && (
        <div className={styles.speakerName}>
          <span>{Speakers[script.speaker].icon}</span>
          <span className={styles.name}>{Speakers[script.speaker].name}</span>
        </div>
      )}
      <div className={styles.speakerLines}>{script?.text}</div>
    </div>
  );
};

export default LinesTextbox;
