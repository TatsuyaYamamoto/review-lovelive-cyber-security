import { FC, MouseEvent } from "react";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

import styles from "./MenuButton.module.scss";

export interface MenuButtonProps {
  onClick: (e: MouseEvent) => void;
}

const MenuButton: FC<MenuButtonProps> = (props) => {
  const { onClick } = props;

  return (
    <Button
      onClick={onClick}
      variant="outlined"
      color="primary"
      startIcon={<MenuIcon />}
      classes={{ root: styles.buttonRoot }}
    >
      メニュー
    </Button>
  );
};

export default MenuButton;
