/**
 * 공통 Input
 */

import { ChangeEvent, HTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  inputType: keyof typeof INPUT_TYPE;
}

const Input = ({ placeholder, inputType, ...props }: InputProps) => {
  return (
    <input
      type="text"
      className={`${styles["common-input"]} ${styles[inputType]}`}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;

const INPUT_TYPE = {
  DEFAULT: "DEFAULT",
};
