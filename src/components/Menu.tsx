import { Fragment, FC, useState, useEffect } from "react";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Collapse from "@material-ui/core/Collapse";

import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import { appLinks, externalLinks, refsList } from "@/resources/links";

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

  const [expandedRefsLinkListIndex, setExpandedRefsLinkListIndex] = useState<
    number | null
  >(null);

  const handleRefsListExpand = (index: number) => () => {
    if (expandedRefsLinkListIndex === index) {
      setExpandedRefsLinkListIndex(null);
    } else {
      setExpandedRefsLinkListIndex(index);
    }
  };

  useEffect(() => {
    if (!open) {
      setExpandedRefsLinkListIndex(null);
    }
  }, [open]);

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <List subheader={<ListSubheader>引用・参照元</ListSubheader>}>
        {refsList.map((refs, i) => {
          const open = expandedRefsLinkListIndex === i;
          return (
            <Fragment key={i}>
              <ListItem button onClick={handleRefsListExpand(i)}>
                <ListItemText primary={refs.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {refs.items.map((item, j) => (
                    <ListItemLink
                      key={j}
                      href={item.url}
                      target="_blank"
                      rel="noopener"
                    >
                      <ListItemText primary={item.label} />
                    </ListItemLink>
                  ))}
                </List>
              </Collapse>
            </Fragment>
          );
        })}
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
