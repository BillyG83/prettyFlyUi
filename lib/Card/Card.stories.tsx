import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { ButtonPrimary } from "../Button";
import { Label } from "../Label";
import { Select } from "../Select";
import { Option } from "../Option";
import { Input } from "../Input";

const meta = {
  title: "Display/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <>
    <h2>Card Title</h2>
    <p>If the card should be a link wrap it in an anchor or link.</p>
    <p>Alternatively add an onClick event and role="button"</p>

    <div>
      <Label htmlFor="card-input">Enter a value</Label>
      <Input id="card-input" placeholder="text here" />
    </div>

    <div>
      <Label htmlFor="card-select">Pick an option</Label>
      <Select id="card-select" defaultValue={"choose"}>
        <Option disabled={true} value={"choose"}>
          Choose One
        </Option>
        <Option value={"option 1"}>Option 1</Option>
        <Option value={"option 2"}>Option 2</Option>
      </Select>
    </div>

    <ButtonPrimary>Click me</ButtonPrimary>
  </>
);

export const Initial: Story = {
  args: {
    children: <SampleContent />,
  },
};
Initial.storyName = "Card";

export const onClick: Story = {
  args: {
    children: (
      <>
        <h2>On Click Event</h2>
        <p>You can click, hover and focus on me</p>
      </>
    ),
    onClick: () => alert("Card was clicked!"),
    role: "button",
  },
};
