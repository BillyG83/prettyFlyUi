import clsx from "clsx";
import { IOptionProps } from "./types";

const Option = (props: IOptionProps) => {
  return (
    <option className={clsx(props.className, "pf-option")} {...props}>
      {props.value}
    </option>
  );
};

export default Option;
