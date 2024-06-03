import { InputHTMLAttributes } from "react";

type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;

export interface TInputProps extends BaseInputProps {
  isLoading?: boolean;
}
