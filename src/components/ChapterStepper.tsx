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
import Typography from "@material-ui/core/Typography";

import { chapters } from "@/resources/chapters";
import displaySlice from "@/redux/slices/display";

export interface ChapterStepperProps {
  open: boolean;
}

const ChapterStepper: FC<ChapterStepperProps> = (props) => {
  const { open } = props;

  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedStepIndex, setSelectStepIndex] = useState(0);
  const chapterList = [
    chapters["intro"],
    chapters["1"],
    chapters["2"],
    chapters["3"],
  ];

  const onStepClicked = (stepIndex: number) => () => {
    setSelectStepIndex(stepIndex);
  };

  const onStartChapter = (initPath: string) => () => {
    dispatch(displaySlice.actions.handleChapterStepper(false));
    router.push(initPath);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>{"チャプター選択"}</DialogTitle>
      <DialogContent>
        <Stepper
          activeStep={selectedStepIndex}
          orientation="vertical"
          nonLinear={true}
        >
          {chapterList.map(({ initPath, title, description }, index) => (
            <Step key={index}>
              <StepButton onClick={onStepClicked(index)}>
                <StepLabel>{title}</StepLabel>
              </StepButton>

              <StepContent>
                <Typography>{description}</Typography>
                <div>
                  <div>
                    <Button onClick={onStartChapter(initPath)}>始める！</Button>
                  </div>
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
