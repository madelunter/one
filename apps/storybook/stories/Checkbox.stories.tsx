import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { Checkbox, ThemeProvider } from "@oneds/ui";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["1", "2", "3"] },
    color: { control: "select", options: ["indigo", "crimson", "green", "amber", "gray"] },
    disabled: { control: "boolean" }
  },
  args: {
    size: "2",
    defaultChecked: false
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const checkbox = canvas.getByRole("checkbox");
    await expect(checkbox).toHaveAttribute("aria-checked", "false");
    await userEvent.click(checkbox);
    await expect(checkbox).toHaveAttribute("aria-checked", "true");
  }
};

export const Checked: Story = {
  args: { defaultChecked: true }
};

export const Indeterminate: Story = {
  args: { defaultChecked: "indeterminate" },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("checkbox")).toHaveAttribute("aria-checked", "mixed");
  }
};

export const Disabled: Story = {
  args: { disabled: true }
};

export const BothAppearances: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24 }}>
      <ThemeProvider appearance="light">
        <div style={{ padding: 24 }}>
          <Checkbox {...args} />
        </div>
      </ThemeProvider>
      <ThemeProvider appearance="dark">
        <div style={{ padding: 24 }}>
          <Checkbox {...args} />
        </div>
      </ThemeProvider>
    </div>
  )
};
