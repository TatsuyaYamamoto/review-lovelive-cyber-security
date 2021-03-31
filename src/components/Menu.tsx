import { Fragment, FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import { appLinks, externalLinks, refsList } from "@/resources/links";
import chapterStepperSlice from "@/redux/slices/chapterStepper";
import { getCurrentChapterStepperIndex } from "@/helpers/utiles";

// https://material-ui.com/ja/components/lists/
function ListItemLink(props: any) {
  return <ListItem button component="a" {...props} />;
}

export interface MenuProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Menu: FC<MenuProps> = (props) => {
  const { open, onClose, onOpen } = props;
  const dispatch = useDispatch();

  const onClickChapterSelect = () => {
    const currentStepperIndex = getCurrentChapterStepperIndex();
    dispatch(
      chapterStepperSlice.actions.openChapterStepper({
        index: currentStepperIndex,
      })
    );
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <List subheader={<ListSubheader>アプリ操作</ListSubheader>}>
        <ListItem button onClick={onClickChapterSelect}>
          <ListItemText primary="チャプター選択" />
        </ListItem>
      </List>
      <Divider />
      <List subheader={<ListSubheader>外部リンク</ListSubheader>}>
        {externalLinks.map(({ label, url }, index) => (
          <ListItemLink key={index} href={url} target="_blank" rel="noopener">
            <ListItemText primary={label} />
          </ListItemLink>
        ))}
      </List>
      <Divider />
      <List subheader={<ListSubheader>アプリについて</ListSubheader>}>
        {appLinks.map(({ label, url }, index) => (
          <ListItemLink key={index} href={url} target="_blank" rel="noopener">
            <ListItemText primary={label} />
          </ListItemLink>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

export default Menu;
