import { FC, HTMLAttributes, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import JsxParser from "react-jsx-parser";
import clsx from "clsx";

import footnoteSlice from "@/redux/slices/footnote";
import { Speaker, Speakers } from "@/resources/script/Script";

import styles from "./LinesTextbox.module.scss";
import { FootnoteId } from "@/resources/footnote";

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
  const dispatch = useDispatch();

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

  const clickLink = (footnoteId: FootnoteId) => (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch(footnoteSlice.actions.openFootnoteWindow(footnoteId));
  };

  const { speaker, text } = source;
  const { icon, name } = Speakers[speaker];

  return (
    <div className={clsx(styles.textbox, className)}>
      <div className={styles.speakerName}>
        <span>{icon}</span>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.speakerLines}>
        <JsxParser
          // https://github.com/TroyAlford/react-jsx-parser#basic-usage---injecting-jsx-as-a-string
          blacklistedAttrs={[]}
          bindings={{ clickLink }}
          jsx={text}
        />
      </div>
    </div>
  );
};

export default LinesTextbox;
