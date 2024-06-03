import { ButtonHTMLAttributes } from "react";

type BaseIButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IButtonProps extends BaseIButtonProps {
  /**
   * disables button and shows loading spinner
   */
  isLoading?: boolean;
}
