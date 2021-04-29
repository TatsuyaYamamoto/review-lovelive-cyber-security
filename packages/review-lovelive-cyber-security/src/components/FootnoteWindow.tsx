import { VFC, FC, useEffect, useState } from "react";

import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import styles from "./FootnoteWindow.module.scss";

import footnote, { FootnoteId } from "@/resources/footnote";

export interface FootnoteWindowProps {
  renderingFootnoteId: FootnoteId | null;
  handleClose: () => void;
}

const FootnoteWindow: FC<FootnoteWindowProps> = (props) => {
  const { renderingFootnoteId, handleClose } = props;
  const ContentComponent: VFC | undefined =
    // @ts-ignore TODO
    footnote[renderingFootnoteId];
  const isOpenDrawer = !!ContentComponent;

  return (
    <Drawer
      className={styles.drawer}
      anchor="right"
      open={isOpenDrawer}
      classes={{
        paper: styles.drawerPaper,
      }}
      onClose={handleClose}
    >
      <div className={styles.drawerHeader}>
        <IconButton onClick={handleClose}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <div className={styles.content}>
        {ContentComponent && <ContentComponent />}
      </div>
    </Drawer>
  );
};

export default FootnoteWindow;
