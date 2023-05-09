import type { Meta, Story, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Common/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
// type Story = StoryObj<typeof Input>;

const Template = args => (
    <div style={{width: "100%"}}>
      <Input {...args} />
    </div>
  )

export const Default = Template.bind({});
Default.args = {
  placeholder: "내용을 입력해주세요.",
  inputType: "DEFAULT"
}