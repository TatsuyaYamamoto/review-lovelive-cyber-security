import { FC, useState } from "react";
import { useRouter } from "next/router";

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

export interface ChapterStepperProps {
  open: boolean;
}

const ChapterStepper: FC<ChapterStepperProps> = (props) => {
  const { open } = props;

  const router = useRouter();
  const [selectedStepIndex, setSelectStepIndex] = useState(0);
  const chapters = [
    {
      number: 1,
      name: "ツールのセキュリティホールを作らない",
      description: "hogehogehogehoge",
    },
    {
      number: 2,
      name: "人間のセキュリティホールを作らない",
      description: "hogehogehogehoge",
    },
    {
      number: 3,
      name: "被害の種を作らない、被害を広げない",
      description: "hogehogehogehoge",
    },
  ];

  const onStepClicked = (stepIndex) => () => {
    setSelectStepIndex(stepIndex);
  };

  const onStartChapter = (chapterNumber) => () => {
    router.push(`/chapter-${chapterNumber}/intro`);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>{"チャプター選択"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>

        <Stepper
          activeStep={selectedStepIndex}
          orientation="vertical"
          nonLinear={true}
        >
          {chapters.map(({ number, name, description }, index) => (
            <Step key={number}>
              <StepButton onClick={onStepClicked(index)}>
                <StepLabel>{name}</StepLabel>
              </StepButton>

              <StepContent>
                <Typography>{description}</Typography>
                <div>
                  <div>
                    <Button onClick={onStartChapter(number)}>始める！</Button>
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
