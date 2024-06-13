import type { Meta, StoryObj } from "@storybook/react";
import { default as SpinnerComponent } from "./Spinner";

const meta = {
  title: "State/Spinner",
  component: SpinnerComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SpinnerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spinner: Story = {
  args: {},
};

export const Color: Story = {
  args: {
    color: "var(--color-grass-50)",
  },
};
