import { styled } from "@/styles/stitches.config";

export const StyledInput = styled("input", {
  padding: "10px 16px",
  width: "100%",
  borderRadius: "3px",
  fontSize: "0.85rem",
  border: "1px solid $colors$GRAY400",
  lineHeight: "1rem",
  background: "white",

  "&::placeholder": {
    color: "$colors$GRAY500",
  },

  variants: {
    inputType: {
      PRIMARY: {
        "&:focus": {
          outline: "1px solid $colors$PRIMARY500",
          boxShadow: "0px 2px 10px rgba(77, 110, 245, 0.2)",
        },
        "&:active": {
          outline: "1px solid $colors$PRIMARY500",
          boxShadow: "0px 2px 10px rgba(77, 110, 245, 0.2)",
        },
      },
      SECONDARY: {
        "&:focus": {
          outline: "1px solid $colors$SECONDARY500",
          boxShadow: "0px 2px 10px rgba(21, 170, 191, 0.2)",
        },
        "&:active": {
          outline: "1px solid $colors$SECONDARY500",
          boxShadow: "0px 2px 10px rgba(21, 170, 191, 0.2)",
        },
      },
    },
    inputSize: {
      SMALL: {
        padding: "8px 14px",
        fontSize: "0.8rem",
      },
      MEDIUM: {
        padding: "10px 16px",
        fontSize: "0.85rem",
      },
      LARGE: {
        padding: "12px 16px",
        fontSize: "1rem",
      },
    },
  },
});

export const StyledLabel = styled("label", {
  variants: {
    show: {
      true: {
        color: "$GRAY400",
      },
      false: {
        display: "block",
        width: 0,
        height: 0,
        overflow: "hidden",
        visibility: "hidden",
        textIndent: "-9999px",
      },
    },
  },
});
