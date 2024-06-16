import clsx from "clsx";
import { ILabelProps } from "./types";
import styles from "./styles.module.css";

const Input = (props: ILabelProps) => {
  return (
    <label className={clsx(styles.label, props.className, "pf-label")}>
      {props.children}
    </label>
  );
};

export default Input;
