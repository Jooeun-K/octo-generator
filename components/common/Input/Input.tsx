import {
  ChangeEvent,
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
} from "react";
import { StyledInput, StyledLabel } from "./Input.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder?: string;
  inputType?: keyof typeof INPUT_TYPE;
  inputSize?: keyof typeof INPUT_SIZE;
  showLabel?: boolean;
}

/**
 * 공통 Input
 */

const Input = (
  {
    placeholder,
    label,
    inputType = "PRIMARY",
    inputSize = "SMALL",
    type = "text",
    showLabel = false,
    onChange,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <>
      <StyledLabel htmlFor={props.id} show={showLabel}>
        {label}
      </StyledLabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        inputType={inputType}
        inputSize={inputSize}
        onChange={onChange}
        ref={ref}
        {...props}
      />
    </>
  );
};

export default forwardRef(Input);

const INPUT_TYPE = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
};

const INPUT_SIZE = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
};
