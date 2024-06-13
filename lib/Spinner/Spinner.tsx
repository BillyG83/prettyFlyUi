import { ISpinnerProps } from "./types";
import styles from "./styles.module.css";

const Spinner = ({
  color = "var(--color-water-30)",
  size = "16px",
  text,
}: ISpinnerProps) => {
  return (
    <div aria-busy="true" className={styles.wrap} role="alert">
      <span
        className={styles.spinner}
        style={{ borderTopColor: color, height: size, width: size }}
      />
      {text && text}
    </div>
  );
};

export default Spinner;
