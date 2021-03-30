import { FC, MouseEvent, useState, ChangeEvent } from "react";
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
  const [hasPasswordCharError, handlePasswordCharError] = useState(false);

  const onSubmit = (data: any) => {
    const hsimpResult = calculatePasswordStrength(data.password);
    setEstimatedCrackTime(hsimpResult.estimatedTime);
    onResult(hsimpResult);
  };

  // react-hook-form で実装して...
  const onChange = (e: ChangeEvent<{ value: string }>) => {
    const inputValue: string = e.target.value;
    // https://support.google.com/accounts/answer/32040?hl=ja
    // 半角英数字、記号(ASCII 標準文字)
    // https://tools.m-bsys.com/data/charlist_ascii.php
    // !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
    const regex = /[^!-~]/g;
    const found = inputValue.match(regex);

    handlePasswordCharError(!!found);
  };

  const stopPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const isFormValid = formState.isValid && !hasPasswordCharError;

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
            onChange={onChange}
            className={clsx({
              [styles.focus]: focusId === "password_text",
            })}
            error={hasPasswordCharError}
            {...(hasPasswordCharError && {
              helperText: "半角英数字、記号のみを使用して下さい。",
            })}
          />
        </div>
        <Button
          fullWidth={true}
          variant="outlined"
          onClick={stopPropagation}
          type="submit"
          disabled={!isFormValid}
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
