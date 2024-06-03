import { ButtonBase } from "../ButtonBase";
import { IButtonProps } from "../types";
import styles from "./styles.module.css";

const ButtonPrimary = (props: IButtonProps) => {
  return <ButtonBase {...props} className={styles.buttonPrimary} />;
};

export default ButtonPrimary;
