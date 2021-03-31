import { Fragment, FC, useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import HomeIcon from "@material-ui/icons/Home";

import { appLinks, externalLinks } from "@/resources/links";
import chapterStepperSlice from "@/redux/slices/chapterStepper";
import {
  getCurrentChapterStepperIndex,
  openTweetIntent,
} from "@/helpers/utiles";
import TwitterIconSvg from "@/assets/svg/TwitterIcon.svg";

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
        canClose: true,
      })
    );
  };

  const onClickTwitterShare = () => {
    openTweetIntent();
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <List>
        <Link href={`/`}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"トップに戻る"} />
          </ListItem>
        </Link>
        <ListItem button onClick={onClickChapterSelect}>
          <ListItemIcon>
            <PlaylistPlayIcon />
          </ListItemIcon>
          <ListItemText primary="チャプター選択" />
        </ListItem>
        <ListItem button onClick={onClickTwitterShare}>
          <ListItemIcon>
            <TwitterIconSvg />
          </ListItemIcon>
          <ListItemText primary="Twitterシェア" />
        </ListItem>
      </List>
      <Divider />
      <List>
        {externalLinks.map(({ label, url, Icon }, index) => (
          <ListItemLink key={index} href={url} target="_blank" rel="noopener">
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItemLink>
        ))}
      </List>
      <Divider />
      <List>
        {appLinks.map(({ label, url, Icon }, index) => (
          <ListItemLink key={index} href={url} target="_blank" rel="noopener">
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
          </ListItemLink>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

export default Menu;
