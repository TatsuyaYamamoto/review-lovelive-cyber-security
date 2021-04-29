import { FC, useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./ChapterFrontispiece.module.scss";

export interface ChapterFrontispieceProps {
  chapterNumber: number;
  chapterTitle: string;
}
const ChapterFrontispiece: FC<ChapterFrontispieceProps> = (props) => {
  const router = useRouter();
  const { chapterNumber, chapterTitle } = props;

  useEffect(() => {
    setTimeout(() => {
      router.push(`/chapter-${chapterNumber}/section-1`);
    }, 2000);
  }, []);

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
