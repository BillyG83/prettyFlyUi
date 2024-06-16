import { SelectHTMLAttributes } from "react";

type BaseSelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export interface ISelectProps extends BaseSelectProps {
  children:
    | React.ReactElement<typeof Option>
    | React.ReactElement<typeof Option>[];
  isLoading?: boolean;
}
