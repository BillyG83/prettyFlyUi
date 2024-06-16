import clsx from "clsx";
import { ButtonBase } from "../ButtonBase";
import { IButtonProps } from "../types";
import styles from "./styles.module.css";

const ButtonSecondary = (props: IButtonProps) => {
  return (
    <ButtonBase
      {...props}
      className={clsx(styles.buttonSecondary, "pf-button-secondary")}
    />
  );
};

export default ButtonSecondary;
