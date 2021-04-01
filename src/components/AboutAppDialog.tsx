import { FC } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import styles from "./AboutAppDialog.module.scss";

export interface AboutAppDialogProps {
  open: boolean;
  handleClose: () => void;
}

const AboutAppDialog: FC<AboutAppDialogProps> = (props) => {
  const { open, handleClose } = props;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {"このアプリ(復習！サイバーセキュリティ月間)について"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div>
            このアプリは、
            <a
              href="https://twitter.com/T28_tatsuya"
              target="_blank"
              className={styles.link}
            >
              とあるラブライバー
            </a>
            が自分でサイバーセキュリティを復習するために作成したものです。
          </div>
          <div>
            ラブライブ公式・内閣サイバーセキュリティセンターとは
            <span className={styles.red}>一切関係がありません</span>。
          </div>
          <br />
          <div>#サイバーセキュリティは全員参加 ！</div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>閉じる</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AboutAppDialog;
