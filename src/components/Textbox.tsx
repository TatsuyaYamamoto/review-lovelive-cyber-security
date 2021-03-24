import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Textbox.module.scss";
import { ScriptItem, Speaker, Speakers } from "../script/Script";

export interface TextboxProps extends HTMLAttributes<HTMLDivElement> {
  script: ScriptItem;
}

const Textbox: FC<TextboxProps> = (props) => {
  const { script, className } = props;

  return (
    <div className={clsx(styles.textbox, className)}>
      {script.type === "lines" && (
        <div className={styles.speakerName}>
          <span>{Speakers[script.speaker].icon}</span>
          <span className={styles.name}>{Speakers[script.speaker].name}</span>
        </div>
      )}
      <div className={styles.speakerLines}>{script.text}</div>
    </div>
  );
};

export default Textbox;
