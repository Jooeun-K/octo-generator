/**
 * 공통 Input
 */

import { ChangeEvent, HTMLAttributes } from "react";
import styles from "./Input.module.css";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  inputType: keyof typeof INPUT_TYPE;
  size?: "SMALL" | "MEDIUM" | "LARGE";
}

const Input = ({ placeholder, inputType = "DEFAULT", size = "SMALL", ...props }: InputProps) => {
  console.log(inputType, size)
  return (
    <input
      type="text"
      className={`${styles["common-input"]} ${styles[size]}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;

const INPUT_TYPE = {
  DEFAULT: "DEFAULT",
};

const INPUT_SIZE = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",

}