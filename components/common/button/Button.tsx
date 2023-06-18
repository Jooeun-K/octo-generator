import { HTMLAttributes, PropsWithChildren } from "react";
import { StyledButton } from "./Button.styles";
import { CSS } from "@stitches/react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonType: keyof typeof BUTTON_TYPE;
  buttonSize?: keyof typeof BUTTON_SIZE;
  type?: "button" | "submit" | "reset";
  css?: CSS;
}

/**
 * 공통 Button
 */

const Button = ({
  buttonType,
  type = "button",
  buttonSize = "MEDIUM",
  children,
  css,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <StyledButton
      buttonType={buttonType}
      buttonSize={buttonSize}
      css={{ ...css }}
      {...props}
    >
      {children}
    </StyledButton>
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

const BUTTON_SIZE = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE",
};
