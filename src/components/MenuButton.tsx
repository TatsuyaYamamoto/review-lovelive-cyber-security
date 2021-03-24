import { FC, MouseEvent } from "react";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

export interface MenuButtonProps {
  onClick: (e: MouseEvent) => void;
}

const MenuButton: FC<MenuButtonProps> = (props) => {
  const { onClick } = props;

  return (
    <Button
      onClick={onClick}
      variant="contained"
      color="primary"
      startIcon={<MenuIcon />}
    >
      メニュー
    </Button>
  );
};

export default MenuButton;
