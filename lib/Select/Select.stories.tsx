import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import Option from "../Option/Option";

const meta = {
  title: "Form/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isLoading: { control: "boolean" },
  },
  args: {
    children: [
      <Option value={"option 1"}>Option 1</Option>,
      <Option value={"option 2"}>Option 2</Option>,
      <Option value={"option 3"}>Option 3</Option>,
    ],
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initial: Story = {
  args: {},
};
Initial.storyName = "Select";

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
