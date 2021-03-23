import { FC } from "react";

import styles from "./AppLayout.module.scss";

const AppLayout: FC = (props) => {
  const { children } = props;
  console.log(styles);


  return (
    <div className={styles.root}>
      <div className={styles.appLayout}>{children}</div>
    </div>
  );
};

export default AppLayout;
