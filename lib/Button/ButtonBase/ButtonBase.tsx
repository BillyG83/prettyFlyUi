import clsx from "clsx";
import { IButtonProps } from "../types";
import styles from "./styles.module.css";
import focusStyles from "../../styles/focus.module.css";

const ButtonBase = ({ children, isLoading, ...props }: IButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        styles.buttonBase,
        focusStyles.focus,
        props.className,
        "pf-button-base"
      )}
      data-loading={String(isLoading)}
      type={props.type || "button"}
    >
      {children}
    </button>
  );
};

export default ButtonBase;
