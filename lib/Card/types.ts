import { HTMLAttributes, ReactNode } from "react";

export interface ICardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}
