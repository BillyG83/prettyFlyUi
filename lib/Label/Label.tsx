import { ILabelProps } from "./types";
import styles from "./styles.module.css";

const Input = (props: ILabelProps) => {
  return <label className={styles.label}>{props.children}</label>;
};

export default Input;
