import type { Meta, StoryObj } from "@storybook/react";
import { default as InputComponent } from "./Input";

const meta = {
  title: "Form/Input",
  component: InputComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    id: "input",
    placeholder: "enter text",
  },
};
