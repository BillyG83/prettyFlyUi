import clsx from "clsx";
import { ButtonBase } from "../ButtonBase";
import { IButtonProps } from "../types";
import styles from "./styles.module.css";

const ButtonPrimary = (props: IButtonProps) => {
  return (
    <ButtonBase
      {...props}
      className={clsx(styles.buttonPrimary, "pf-button-primary")}
    />
  );
};

export default ButtonPrimary;
