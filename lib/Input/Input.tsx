import clsx from "clsx";
import { TInputProps } from "./types";
import styles from "./styles.module.css";
import focusStyles from "../styles/focus.module.css";

const Input = (props: TInputProps) => {
  return (
    <input
      {...props}
      className={clsx(
        styles.input,
        focusStyles.focus,
        props.className,
        "pf-input"
      )}
      disabled={props.isLoading || props.disabled}
      type={props.type || "text"}
    />
  );
};

export default Input;
