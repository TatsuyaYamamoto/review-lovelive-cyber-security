import { FC, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./Textbox.module.scss";
import { Speaker, Speakers } from "../script/Script";

export interface TextboxProps extends HTMLAttributes<HTMLDivElement> {
  speaker: Speaker;
  text: string;
}

const Textbox: FC<TextboxProps> = (props) => {
  const { speaker: _speaker, text, className } = props;
  const speaker = Speakers[_speaker];

  return (
    <div className={clsx(styles.textbox, className)}>
      <div className={styles.speakerName}>
        <span>{speaker.icon}</span>
        <span className={styles.name}>{speaker.name}</span>
      </div>
      <div className={styles.speakerLines}>{text}</div>
    </div>
  );
};

export default Textbox;
