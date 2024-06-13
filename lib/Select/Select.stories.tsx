import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initial: Story = {
  args: {
    children: (
      <>
        <option value={"option 1"}>Option 1</option>
        <option value={"option 2"}>Option 2</option>
        <option value={"option 3"}>Option 3</option>
      </>
    ),
  },
};
Initial.name = "Select";
