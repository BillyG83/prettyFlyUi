import type { Meta, StoryObj } from "@storybook/react";
import Option from "./Option";

const meta = {
  title: "Form/Select/Option",
  component: Option,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Option>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initial: Story = {
  args: {
    id: "hello-world",
    value: "hello world",
  },
};
Initial.storyName = "Option";

export const Disabled: Story = {
  args: {
    disabled: true,
    id: "hello-world",
    value: "hello world",
  },
};
