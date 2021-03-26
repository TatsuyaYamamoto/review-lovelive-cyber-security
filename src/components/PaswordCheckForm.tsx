import { FC, MouseEvent, useState } from "react";

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
  onResult: (result: HsimpResult) => void;
}
const PasswordCheckForm: FC<PasswordCheckFormProps> = (props) => {
  const { onResult } = props;
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  const [estimatedCrackTime, setEstimatedCrackTime] = useState<string | null>(
    null
  );

  const onSubmit = (data) => {
    const hsimpResult = calculatePasswordStrength(data.password);
    setEstimatedCrackTime(hsimpResult.estimatedTime);
    onResult(hsimpResult);
  };

  const stopPropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <Card className={styles.card}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            fullWidth={true}
            placeholder={"パスワードを入力..."}
            inputProps={{ name: "password" }}
            inputRef={register({ required: true })}
            onClick={stopPropagation}
          />
        </div>
        <div className={styles.result}>
          <div className={styles.resultLabel}>パスワードが破られるまで</div>
          <div className={styles.resultValue}>{estimatedCrackTime}</div>
        </div>
        <Button
          fullWidth={true}
          onClick={stopPropagation}
          type="submit"
          disabled={!formState.isValid}
        >
          計測開始
        </Button>
      </form>
    </Card>
  );
};

export default PasswordCheckForm;
