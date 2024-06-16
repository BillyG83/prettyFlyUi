import clsx from "clsx";
import { TInputProps } from "./types";
import styles from "./styles.module.css";
import inputStyles from "../styles/input.module.css";

const Input = (props: TInputProps) => {
  return (
    <input
      {...props}
      className={clsx(
        styles.input,
        inputStyles.focus,
        { [inputStyles.disabled]: Boolean(props.disabled) },
        props.className,
        "pf-input"
      )}
      disabled={props.isLoading || props.disabled}
      type={props.type || "text"}
    />
  );
};

export default Input;
