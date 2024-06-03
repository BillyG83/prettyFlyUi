import { ReactNode, SelectHTMLAttributes } from "react";

type BaseSelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export interface ISelectProps extends BaseSelectProps {
  children: ReactNode;
  isLoading?: boolean;
}
