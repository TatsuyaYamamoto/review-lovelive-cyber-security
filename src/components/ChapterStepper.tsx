import { FC, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { StepIconProps } from "@material-ui/core/StepIcon";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import { chapters } from "@/resources/chapters";
import { useAppSelector } from "@/redux/hooks";
import chapterStepperSlice from "@/redux/slices/chapterStepper";

import styles from "./ChapterStepper.module.scss";
import TwitterIconSvg from "@/assets/svg/TwitterIcon.svg";

const StepIcon: FC<StepIconProps> = (props) => {
  const { icon } = props;
  const label =
    icon === 1
      ? "プロローグ"
      : icon === 2
      ? "チャプター1"
      : icon === 3
      ? "チャプター2"
      : icon === 4
      ? "チャプター3"
      : "エピローグ";
  return <div>{label}</div>;
};

export interface ChapterStepperProps {}

const ChapterStepper: FC<ChapterStepperProps> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const chapterList = [
    chapters["prologue"],
    chapters["1"],
    chapters["2"],
    chapters["3"],
    chapters["epilogue"],
  ];

  const { open, index, canClose } = useAppSelector((s) => s.chapterStepper);

  const onStartChapter = (initPath: string) => () => {
    dispatch(chapterStepperSlice.actions.closeChapterStepper());
    router.push(initPath);
  };

  const onStepClicked = (stepIndex: number) => () => {
    dispatch(
      chapterStepperSlice.actions.changeStepperIndex({ index: stepIndex })
    );
  };

  const handleClose = () => {
    dispatch(chapterStepperSlice.actions.closeChapterStepper());
  };

  return (
    <Dialog open={open}>
      <DialogTitle>
        {"チャプター選択"}
        <div className={styles.closeButton}>
          <IconButton onClick={handleClose}>
            <TwitterIconSvg />
          </IconButton>
          {canClose && (
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          )}
        </div>
      </DialogTitle>
      <DialogContent>
        <Stepper
          activeStep={index}
          orientation="vertical"
          nonLinear={true}
          style={{ padding: 0 }}
        >
          {chapterList.map(({ initPath, title }, index) => (
            <Step key={index}>
              <StepButton
                onClick={onStepClicked(index)}
                style={{ textAlign: "left" }}
              >
                <StepLabel StepIconComponent={StepIcon}>
                  {index === 0 || index === 4 ? "" : title}
                </StepLabel>
              </StepButton>

              <StepContent>
                <div>
                  <Button
                    variant="outlined"
                    fullWidth={true}
                    onClick={onStartChapter(initPath)}
                  >
                    始める！
                  </Button>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </DialogContent>
    </Dialog>
  );
};

export default ChapterStepper;
