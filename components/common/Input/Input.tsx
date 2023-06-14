import { ChangeEvent, HTMLAttributes } from "react";
import styles from "./Input.module.css";
import { StyledInput } from "./Input.styles";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  inputType: keyof typeof INPUT_TYPE;
  inputSize?: keyof typeof INPUT_SIZE;
}

/**
 * 공통 Input
 */

const Input = ({
  placeholder,
  inputType = "PRIMARY",
  inputSize = "SMALL",
  ...props
}: InputProps) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      inputType={inputType}
      inputSize={inputSize}
      {...props}
    />
  );
};

export default Input;

const INPUT_TYPE = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
};

const INPUT_SIZE = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
};
