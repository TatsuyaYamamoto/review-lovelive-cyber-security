import { FC } from "react";

import IconButton from "@material-ui/core/IconButton";
import RtIcon from "@material-ui/icons/Repeat";
import FavIcon from "@material-ui/icons/Favorite";

import styles from "./TweetItem.module.scss";

export interface TweetDatum {
  imgUrl: string;
  displayName: string;
  screenName: string;
  text: string;
  rt: number;
  fav: number;
}

export interface TweetItemProps {
  datum: TweetDatum;
}

const TweetItem: FC<TweetItemProps> = (props) => {
  const { imgUrl, displayName, screenName, text, rt, fav } = props.datum;

  return (
    <li className={styles.tweet}>
      <img src={imgUrl} className={styles.icon} />
      <div>
        <div className={styles.names}>
          <span className={styles.displayName}>{displayName}</span>
          <span className={styles.screenName}>{screenName}</span>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <div className={styles.footer}>
          <div>
            <IconButton>
              <RtIcon />
            </IconButton>
            <span>{rt}</span>
          </div>
          <div>
            <IconButton>
              <FavIcon />
            </IconButton>
            <span>{fav}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TweetItem;
