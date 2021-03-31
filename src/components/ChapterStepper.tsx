import { FC, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { StepIconProps } from "@material-ui/core/StepIcon";

import { chapters } from "@/resources/chapters";
import chapterStepperSlice from "@/redux/slices/chapterStepper";

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

export interface ChapterStepperProps {
  open: boolean;
  stepIndex: number;
  onStepSelected: (stepIndex: number) => void;
}

const ChapterStepper: FC<ChapterStepperProps> = (props) => {
  const { open, stepIndex, onStepSelected } = props;

  const router = useRouter();
  const dispatch = useDispatch();
  const chapterList = [
    chapters["prologue"],
    chapters["1"],
    chapters["2"],
    chapters["3"],
    chapters["epilogue"],
  ];

  const onStartChapter = (initPath: string) => () => {
    dispatch(chapterStepperSlice.actions.closeChapterStepper());
    router.push(initPath);
  };

  const onStepClicked = (stepIndex: number) => () => {
    onStepSelected(stepIndex);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>{"チャプター選択"}</DialogTitle>
      <DialogContent>
        <Stepper
          activeStep={stepIndex}
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
