import { FC } from "react";

import styles from "./ChapterFrontispiece.module.scss";

export interface ChapterFrontispieceProps {
  chapterNumber: number;
  chapterTitle: string;
}
const ChapterFrontispiece: FC<ChapterFrontispieceProps> = (props) => {
  const { chapterNumber, chapterTitle } = props;

  return (
    <div className={styles.chapterFrontispiece}>
      <div className={styles.chapterFrontispieceInner}>
        <div className={styles.chapterNumber}>Chapter {chapterNumber}</div>
        <div className={styles.title}>{chapterTitle}</div>
      </div>
    </div>
  );
};

export default ChapterFrontispiece;
