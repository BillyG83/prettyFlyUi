import type { Meta, StoryObj } from "@storybook/react";
import { default as LabelComponent } from "./Label";

const meta = {
  title: "Form/Label",
  component: LabelComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof LabelComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    children: "Hello World!",
  },
};
