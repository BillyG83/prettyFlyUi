import clsx from "clsx";
import { TButtonProps } from "../types";
import styles from "./styles.module.css";

const ButtonBase = ({ children, isLoading, ...props }: TButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(styles.buttonBase, props.className)}
      data-loading={String(isLoading)}
      type={props.type || "button"}
    >
      {children}
    </button>
  );
};

export default ButtonBase;
