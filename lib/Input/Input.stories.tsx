import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "Form/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initial: Story = {
  args: {
    placeholder: "enter text",
  },
};
Initial.storyName = "Input";

export const Disabled: Story = {
  args: {
    placeholder: "enter text",
    disabled: true,
  },
};
