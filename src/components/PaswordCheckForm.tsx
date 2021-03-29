import { FC, MouseEvent, useState } from "react";
import clsx from "clsx";

import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useForm } from "react-hook-form";

import styles from "./PaswordCheckForm.module.scss";
import {
  calculatePasswordStrength,
  HsimpResult,
} from "@/helpers/howSecureIsMyPassword";

interface PasswordCheckFormProps {
  className?: string;
  focusId: string | null;
  onResult: (result: HsimpResult) => void;
}
const PasswordCheckForm: FC<PasswordCheckFormProps> = (props) => {
  const { onResult, focusId, className } = props;
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const [estimatedCrackTime, setEstimatedCrackTime] = useState<string | null>(
    null
  );

  const onSubmit = (data: any) => {
    const hsimpResult = calculatePasswordStrength(data.password);
    setEstimatedCrackTime(hsimpResult.estimatedTime);
    onResult(hsimpResult);
  };

  const stopPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Card className={clsx(styles.card, className)}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            fullWidth={true}
            variant="outlined"
            placeholder={"パスワードを入力..."}
            inputProps={{ name: "password" }}
            inputRef={register({ required: true })}
            onClick={stopPropagation}
            className={clsx({
              [styles.focus]: focusId === "password_text",
            })}
          />
        </div>
        <Button
          fullWidth={true}
          variant="outlined"
          onClick={stopPropagation}
          type="submit"
          disabled={!formState.isValid}
          className={clsx({
            [styles.focus]: focusId === "calc_button",
          })}
        >
          計測開始
        </Button>
        <div className={styles.result}>
          <div className={styles.resultLabel}>パスワードが破られるまで</div>
          <div className={styles.resultValue}>{estimatedCrackTime}</div>
        </div>
      </form>
    </Card>
  );
};

export default PasswordCheckForm;
