import clsx from "clsx";
import { TInputProps } from "./types";
import styles from "./styles.module.css";

const Input = (props: TInputProps) => {
  return (
    <input
      {...props}
      className={clsx(styles.input, props.className)}
      disabled={props.isLoading || props.disabled}
      type={props.type || "text"}
    />
  );
};

export default Input;
