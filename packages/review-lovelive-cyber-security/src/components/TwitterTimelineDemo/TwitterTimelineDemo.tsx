import { MouseEvent } from "react";
import { timelineData } from "@/resources/timeline";

import TweetItem from "./TweetItem";
import styles from "./TwitterTimelineDemo.module.scss";

const TwitterTimelineDemo = () => {
  const onClickTimeline = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.timelineWrapper} onClick={onClickTimeline}>
      <ul className={styles.timeline}>
        {timelineData.map((datum, index) => (
          <TweetItem key={index} datum={datum} />
        ))}
        <li className={styles.lastTweet}>
          <span>.</span>
        </li>
      </ul>
    </div>
  );
};

export default TwitterTimelineDemo;
