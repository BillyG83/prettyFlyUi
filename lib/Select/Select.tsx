import clsx from "clsx";
import { ISelectProps } from "./types";
import styles from "./styles.module.css";
import focusStyles from "../styles/focus.module.css";

const Select = ({ children, ...props }: ISelectProps) => {
  return (
    <select
      {...props}
      className={clsx(styles.select, focusStyles.focus, "pf-select")}
    >
      {children}
    </select>
  );
};

export default Select;
