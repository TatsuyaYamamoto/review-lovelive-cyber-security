import { FC } from "react";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ListSubheader } from "@material-ui/core";

// https://material-ui.com/ja/components/lists/
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export interface MenuProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Menu: FC<MenuProps> = (props) => {
  const { open, onClose, onOpen } = props;

  const externalLinks = [
    {
      label: "NISC | サイバーセキュリティ月間",
      url: "https://www.nisc.go.jp/security-site/month/lovelive.html",
    },
    {
      label: "NISC | 「インターネットの安全・安心ハンドブック」について",
      url: "https://www.nisc.go.jp/security-site/handbook/index.html",
    },
  ];

  const appLinks = [
    { label: "このアプリについて", url: "" },
    { label: "ソースコード", url: "" },
  ];

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <List subheader={<ListSubheader>外部リンク</ListSubheader>}>
        {externalLinks.map(({ label, url }, index) => (
          <ListItemLink key={index} href={url} target="_blank">
            <ListItemText primary={label} />
          </ListItemLink>
        ))}
      </List>
      <Divider />
      <List subheader={<ListSubheader>アプリについて</ListSubheader>}>
        {appLinks.map(({ label, url }, index) => (
          <ListItemLink key={index} href={url} target="_blank">
            <ListItemText primary={label} />
          </ListItemLink>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

export default Menu;
