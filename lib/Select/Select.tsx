import clsx from "clsx";
import { ISelectProps } from "./types";
import styles from "./styles.module.css";
import inputStyles from "../styles/input.module.css";

const Select = ({ children, ...props }: ISelectProps) => {
  return (
    <select
      {...props}
      className={clsx(
        styles.select,
        inputStyles.focus,
        { [inputStyles.disabled]: Boolean(props.disabled) },
        "pf-select"
      )}
    >
      {children}
    </select>
  );
};

export default Select;
