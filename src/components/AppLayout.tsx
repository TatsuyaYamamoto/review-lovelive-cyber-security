import { FC, MouseEvent, HTMLAttributes, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/redux/hooks";

import styles from "./AppLayout.module.scss";
import Menu from "./Menu";
import MenuButton from "./MenuButton";

import ChapterStepper from "@/components/ChapterStepper";
import FootnoteWindow from "@/components/FootnoteWindow";
import footnoteSlice from "@/redux/slices/footnote";

export interface AppLayoutProps extends HTMLAttributes<HTMLDivElement> {
  hideMenu?: boolean;
}

const AppLayout: FC<AppLayoutProps> = (props) => {
  const { hideMenu = false, children, ...others } = props;

  const dispatch = useDispatch();
  const { renderingFootnoteId } = useAppSelector((s) => s.footnote);
  const [isOpenMenu, handleOpenMenu] = useState(false);

  const onMenuOpen = () => {};

  const onMenuClose = () => {
    handleOpenMenu(false);
  };

  const onMenuButtonClicked = (e: MouseEvent) => {
    e.stopPropagation();
    handleOpenMenu(true);
  };

  const handleFootnoteWindowClose = () => {
    dispatch(footnoteSlice.actions.closeFootnoteWindow());
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
      <ChapterStepper />
      <FootnoteWindow
        renderingFootnoteId={renderingFootnoteId}
        handleClose={handleFootnoteWindowClose}
      />
    </>
  );
};

export default AppLayout;
