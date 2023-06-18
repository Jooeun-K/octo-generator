import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryFilled: Story = {
  args: {
    children: "Primary Button",
    buttonType: "PRIMARY_FILLED",
  },
};

export const PrimaryOutlined: Story = {
  args: {
    children: "Primary Button",
    buttonType: "PRIMARY_OUTLINED",
  },
};

export const SecondaryFilled: Story = {
  args: {
    children: "Secondary Button",
    buttonType: "SECONDARY_FILLED",
  },
};

export const SecondaryOutlined: Story = {
  args: {
    children: "Secondary Button",
    buttonType: "SECONDARY_OUTLINED",
  },
};

export const MonoFilled: Story = {
  args: {
    children: "Mono Button",
    buttonType: "MONO_FILLED",
  },
};

export const MonoOutlined: Story = {
  args: {
    children: "Mono Button",
    buttonType: "MONO_OUTLINED",
  },
};

export const DangerFilled: Story = {
  args: {
    children: "Danger Button",
    buttonType: "DANGER_FILLED",
  },
};

export const DangerOutlined: Story = {
  args: {
    children: "Danger Button",
    buttonType: "DANGER_OUTLINED",
  },
};
