import { FC, MouseEvent, HTMLAttributes, useState, useEffect } from "react";

import { useAppSelector } from "@/redux/hooks";

import styles from "./AppLayout.module.scss";
import Menu from "./Menu";
import MenuButton from "./MenuButton";
import ChapterStepper from "@/components/ChapterStepper";

export interface AppLayoutProps extends HTMLAttributes<HTMLDivElement> {
  hideMenu?: boolean;
}

const AppLayout: FC<AppLayoutProps> = (props) => {
  const { hideMenu = false, children, ...others } = props;
  const { openChapterStepper } = useAppSelector((s) => s.display);
  const [isOpenMenu, handleOpenMenu] = useState(false);

  const onMenuOpen = () => {};

  const onMenuClose = () => {
    handleOpenMenu(false);
  };

  const onMenuButtonClicked = (e: MouseEvent) => {
    e.stopPropagation();
    handleOpenMenu(true);
  };

  return (
    <>
      <div className={styles.root} {...others}>
        <div className={styles.appLayout}>
          {children}
          {!hideMenu && (
            <div className={styles.menuButtonArea}>
              <MenuButton onClick={onMenuButtonClicked} />
            </div>
          )}
        </div>
      </div>
      <Menu open={isOpenMenu} onOpen={onMenuOpen} onClose={onMenuClose} />
      <ChapterStepper open={openChapterStepper} />
    </>
  );
};

export default AppLayout;
