import clsx from "clsx";
import { Spinner } from "../../Spinner";
import { IButtonProps } from "../types";
import styles from "./styles.module.css";
import inputStyles from "../../styles/input.module.css";

const ButtonBase = ({ children, isLoading, ...props }: IButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        styles.buttonBase,
        inputStyles.focus,
        { [inputStyles.disabled]: Boolean(props.disabled) },
        props.className,
        "pf-button-base"
      )}
      data-loading={String(isLoading)}
      type={props.type || "button"}
    >
      {children}
      {isLoading && <Spinner />}
    </button>
  );
};

export default ButtonBase;
