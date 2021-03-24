import { FC, HTMLAttributes } from "react";

import styles from "./AppLayout.module.scss";

export interface AppLayoutProps extends HTMLAttributes<HTMLDivElement> {}

const AppLayout: FC<AppLayoutProps> = (props) => {
  const { children, ...others } = props;

  return (
    <div className={styles.root} {...others}>
      <div className={styles.appLayout}>{children}</div>
    </div>
  );
};

export default AppLayout;
