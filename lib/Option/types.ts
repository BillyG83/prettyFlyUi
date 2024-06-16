import { OptionHTMLAttributes } from "react";

type BaseOptionProps = OptionHTMLAttributes<HTMLOptionElement>;

export interface IOptionProps extends BaseOptionProps {
  value: string;
}
