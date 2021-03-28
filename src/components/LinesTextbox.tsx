import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

import { Speaker, Speakers } from "@/resources/script/Script";

import styles from "./LinesTextbox.module.scss";

export type LinesSource =
  | {
      speaker: Speaker | "monologue";
      text: string;
    }
  | { speaker: "blank" };

export interface LinesTextboxProps extends HTMLAttributes<HTMLDivElement> {
  source: LinesSource;
}

const LinesTextbox: FC<LinesTextboxProps> = (props) => {
  const { source, className } = props;

  if (source.speaker === "blank") {
    return <div className={clsx(styles.textbox, className)} />;
  }

  if (source.speaker === "monologue") {
    return (
      <div className={clsx(styles.textbox, className)}>
        <div className={styles.speakerLines}>{source.text}</div>
      </div>
    );
  }

  const { speaker, text } = source;
  const { icon, name } = Speakers[speaker];

  return (
    <div className={clsx(styles.textbox, className)}>
      <div className={styles.speakerName}>
        <span>{icon}</span>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.speakerLines}>{text}</div>
    </div>
  );
};

export default LinesTextbox;
