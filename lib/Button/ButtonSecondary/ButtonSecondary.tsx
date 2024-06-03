import { ButtonBase } from "../ButtonBase";
import { IButtonProps } from "../types";
import styles from "./styles.module.css";

const ButtonSecondary = (props: IButtonProps) => {
  return <ButtonBase {...props} className={styles.buttonSecondary} />;
};

export default ButtonSecondary;
