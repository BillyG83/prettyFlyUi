import { InputHTMLAttributes } from "react";

type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;

interface AdditionalInputProps {}

export type TInputProps = BaseInputProps & AdditionalInputProps;
