import TweetItem from "./TweetItem";

import styles from "./TwitterTimelineDemo.module.scss";

const TwitterTimelineDemo = () => {
  const data = [
    {
      imgUrl: "https://pbs.twimg.com/profile_images/3144229927/1ebde74324e5fb5d91ec6aa9bc3024fa_reasonably_small.gif",
      displayName: "name1",
      screenName: "name1",
      text: "hogehogehoge",
      rt: 0,
      fav: 0,
    },
    {
      imgUrl: "https://pbs.twimg.com/profile_images/3144229927/1ebde74324e5fb5d91ec6aa9bc3024fa_reasonably_small.gif",
      displayName: "name1",
      screenName: "name1",
      text: "hogehogehoge",
      rt: 0,
      fav: 0,
    },
    {
      imgUrl: "https://pbs.twimg.com/profile_images/3144229927/1ebde74324e5fb5d91ec6aa9bc3024fa_reasonably_small.gif",
      displayName: "name1",
      screenName: "name1",
      text: "hogehogehoge",
      rt: 0,
      fav: 0,
    },
    {
      imgUrl: "https://pbs.twimg.com/profile_images/3144229927/1ebde74324e5fb5d91ec6aa9bc3024fa_reasonably_small.gif",
      displayName: "name1",
      screenName: "name1",
      text: "hogehogehoge",
      rt: 0,
      fav: 0,
    },
    {
      imgUrl: "https://pbs.twimg.com/profile_images/3144229927/1ebde74324e5fb5d91ec6aa9bc3024fa_reasonably_small.gif",
      displayName: "name1",
      screenName: "name1",
      text: "hogehogehoge",
      rt: 0,
      fav: 0,
    },
    {
      imgUrl: "https://pbs.twimg.com/profile_images/3144229927/1ebde74324e5fb5d91ec6aa9bc3024fa_reasonably_small.gif",
      displayName: "name1",
      screenName: "name1",
      text: "hogehogehoge",
      rt: 0,
      fav: 0,
    },
    {
      imgUrl: "https://pbs.twimg.com/profile_images/3144229927/1ebde74324e5fb5d91ec6aa9bc3024fa_reasonably_small.gif",
      displayName: "name1",
      screenName: "name1",
      text: "hogehogehoge",
      rt: 0,
      fav: 0,
    },
    {
      imgUrl: "https://pbs.twimg.com/profile_images/3144229927/1ebde74324e5fb5d91ec6aa9bc3024fa_reasonably_small.gif",
      displayName: "name1",
      screenName: "name1",
      text: "hogehogehoge",
      rt: 0,
      fav: 0,
    },
    {
      imgUrl: "https://pbs.twimg.com/profile_images/3144229927/1ebde74324e5fb5d91ec6aa9bc3024fa_reasonably_small.gif",
      displayName: "name1",
      screenName: "name1",
      text: "hogehogehoge",
      rt: 0,
      fav: 0,
    },
    {
      imgUrl: "https://pbs.twimg.com/profile_images/3144229927/1ebde74324e5fb5d91ec6aa9bc3024fa_reasonably_small.gif",
      displayName: "name1",
      screenName: "name1",
      text: "hogehogehoge",
      rt: 0,
      fav: 0,
    },
    {
      imgUrl: "https://pbs.twimg.com/profile_images/3144229927/1ebde74324e5fb5d91ec6aa9bc3024fa_reasonably_small.gif",
      displayName: "name1",
      screenName: "name1",
      text: "hogehogehoge",
      rt: 0,
      fav: 0,
    },
    {
      imgUrl: "https://pbs.twimg.com/profile_images/3144229927/1ebde74324e5fb5d91ec6aa9bc3024fa_reasonably_small.gif",
      displayName: "name1",
      screenName: "name1",
      text: "hogehogehoge",
      rt: 0,
      fav: 0,
    },
  ];

  return (
    <div className={styles.timelineWrapper}>
      <ul className={styles.timeline}>
        {data.map((datum, index) => (
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
