import clsx from "clsx";
import { ISelectProps } from "./types";
import styles from "./styles.module.css";

const Select = ({ children, ...props }: ISelectProps) => {
  return (
    <select {...props} className={clsx(styles.select)}>
      {children}
    </select>
  );
};

export default Select;
