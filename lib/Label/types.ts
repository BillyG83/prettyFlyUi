import { LabelHTMLAttributes, ReactNode } from "react";

type BaseLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export interface ILabelProps extends BaseLabelProps {
  children: ReactNode;
}
