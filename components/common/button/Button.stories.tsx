import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'Common/Button',
    component: Button,
    tags: ["autodocs"]
} 

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        text: 'Primary Button',
        buttonType: "PRIMARY_FILLED"
    }
}