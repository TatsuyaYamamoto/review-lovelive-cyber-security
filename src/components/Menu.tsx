import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import HomeIcon from "@material-ui/icons/Home";
import AppIcon from "@material-ui/icons/Apps";
import SecurityIcon from "@material-ui/icons/Security";

import chapterStepperSlice from "@/redux/slices/chapterStepper";
import {
  getCurrentChapterStepperIndex,
  openTweetIntent,
} from "@/helpers/utiles";
import TwitterIconSvg from "@/assets/svg/TwitterIcon.svg";
import GitHubIcon from "@/assets/svg/GitHubIcon.svg";
import AboutAppDialog from "@/components/AboutAppDialog";

// https://material-ui.com/ja/components/lists/
function ListItemLink(props: { href: string; label: string; icon: any }) {
  return (
    <ListItem
      button
      component="a"
      href={props.href}
      target="_blank"
      rel="noopener"
    >
      <ListItemIcon>
        <props.icon />
      </ListItemIcon>
      <ListItemText primary={props.label} />
    </ListItem>
  );
}

export interface MenuProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Menu: FC<MenuProps> = (props) => {
  const { open, onClose, onOpen } = props;
  const dispatch = useDispatch();
  const [isOpenAppAbout, handleOpenAppAbout] = useState(false);

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

  const onClickAboutApp = () => {
    handleOpenAppAbout(true);
  };

  const closeAboutAppDialog = () => {
    handleOpenAppAbout(false);
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
            <ListItemText primary={"??????????????????"} />
          </ListItem>
        </Link>
        <ListItem button onClick={onClickChapterSelect}>
          <ListItemIcon>
            <PlaylistPlayIcon />
          </ListItemIcon>
          <ListItemText primary="?????????????????????" />
        </ListItem>
        <ListItem button onClick={onClickTwitterShare}>
          <ListItemIcon>
            <TwitterIconSvg />
          </ListItemIcon>
          <ListItemText primary="Twitter?????????" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItemLink
          href={"https://www.nisc.go.jp/security-site/month/lovelive.html"}
          label={"NISC | ????????????????????????????????????"}
          icon={SecurityIcon}
        />
      </List>
      <Divider />
      <List>
        <ListItem button onClick={onClickAboutApp}>
          <ListItemIcon>
            <AppIcon />
          </ListItemIcon>
          <ListItemText primary={"???????????????????????????"} />
        </ListItem>
        <ListItemLink
          href={
            "https://github.com/TatsuyaYamamoto/review-lovelive-cyber-security"
          }
          label={"??????????????????"}
          icon={GitHubIcon}
        />
      </List>
      <AboutAppDialog open={isOpenAppAbout} handleClose={closeAboutAppDialog} />
    </SwipeableDrawer>
  );
};

export default Menu;
