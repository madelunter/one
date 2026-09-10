import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { Switch, ThemeProvider } from "@oneds/ui";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
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
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const switchControl = canvas.getByRole("switch");
    await expect(switchControl).toHaveAttribute("aria-checked", "false");
    await userEvent.click(switchControl);
    await expect(switchControl).toHaveAttribute("aria-checked", "true");
  }
};

export const Checked: Story = {
  args: { defaultChecked: true }
};

export const Disabled: Story = {
  args: { disabled: true }
};

export const BothAppearances: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24 }}>
      <ThemeProvider appearance="light">
        <div style={{ padding: 24 }}>
          <Switch {...args} />
        </div>
      </ThemeProvider>
      <ThemeProvider appearance="dark">
        <div style={{ padding: 24 }}>
          <Switch {...args} />
        </div>
      </ThemeProvider>
    </div>
  )
};
