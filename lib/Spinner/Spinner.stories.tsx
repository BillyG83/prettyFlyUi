import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta = {
  title: "State/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initial: Story = {
  args: {},
};
Initial.name = "Spinner";

export const Color: Story = {
  args: {
    color: "green",
  },
};

export const Size: Story = {
  args: {
    size: "40px",
  },
};

export const Text: Story = {
  args: {
    text: "fetching",
  },
};

export const Demo: Story = {
  args: {
    color: "var(--color-grass-70)",
    size: "calc(var(--size) * 8)",
    text: "fetching",
  },
};
