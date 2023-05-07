/**
 * 공통 Button
 */

import { HTMLAttributes } from "react";
import styles from "./Button.module.css";
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  buttonType: keyof typeof BUTTON_TYPE;
}

const Button = ({ text, buttonType, ...props }: ButtonProps) => {
  return (
    <button
      className={`${styles["common-button"]} ${styles[buttonType]}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;

const BUTTON_TYPE = {
  PRIMARY_FILLED: "PRIMARY_FILLED",
  PRIMARY_OUTLINED: "PRIMARY_OUTLINED",
  SECONDARY_FILLED: "SECONDARY_FILLED",
  SECONDARY_OUTLINED: "SECONDARY_OUTLINED",
  MONO_FILLED: "MONO_FILLED",
  MONO_OUTLINED: "MONO_OUTLINED",
  DANGER_FILLED: "DANGER_FILLED",
  DANGER_OUTLINED: "DANGER_OUTLINED",
};
