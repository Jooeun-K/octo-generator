import type { Meta, StoryObj } from '@storybook/react'
import Input, { InputProps } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Common/Input',
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const PRIMARY: Story = {
  args: {
    placeholder: '내용을 입력해주세요.',
    inputType: 'PRIMARY',
  },
}

export const SECONDARY: Story = {
  args: {
    placeholder: '내용을 입력해주세요.',
    inputType: 'SECONDARY',
  },
}
