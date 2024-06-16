import { ICardProps } from "./types";
import styles from "./styles.module.css";
import inputStyles from "../styles/input.module.css";
import clsx from "clsx";

const Card = ({ children, ...props }: ICardProps) => {
  const hasOnClick = Boolean(props.onClick);
  return (
    <article
      aria-label="card"
      className={clsx(
        styles.card,
        { [styles.hover]: hasOnClick, [inputStyles.focus]: hasOnClick },
        "pf-card"
      )}
      role={hasOnClick ? "button" : "article"}
      tabIndex={hasOnClick ? 0 : -1}
      {...props}
    >
      {children}
    </article>
  );
};

export default Card;
