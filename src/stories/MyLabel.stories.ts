import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyLabel } from "../components/MyLabel";

const meta: Meta = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "inline-radio",
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic",
  },
};

export const AllCaps: Story = {
  args: {
    label: "ALL CAPS",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom Color",
    fontColor: "#5517ac",
  },
};

export const BackgroundColor: Story = {
  args: {
    label: "Background Color",
    backgroundColor: "#5517ac",
  },
};
