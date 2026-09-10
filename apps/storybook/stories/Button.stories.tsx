import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { Button, ThemeProvider } from "@oneds/ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "soft", "outline", "ghost", "surface", "classic"]
    },
    size: { control: "select", options: ["1", "2", "3", "4"] },
    color: { control: "select", options: ["indigo", "crimson", "green", "amber", "gray"] },
    disabled: { control: "boolean" }
  },
  args: {
    children: "Button",
    variant: "solid",
    size: "2"
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  play: async ({ canvas, args }) => {
    await expect(canvas.getByRole("button", { name: args.children as string })).toBeVisible();
  }
};

// The only CssCheck in the project (per convention, exactly one) — proves
// the shared preview actually loaded @oneds/ui's compiled stylesheet,
// specifically the custom-colors.css override, not just Radix's stock
// "blue" scale. toBeVisible() alone can't tell the two apart; this can.
export const CssCheck: Story = {
  args: { variant: "solid" },
  play: async ({ canvas, args }) => {
    const button = canvas.getByRole("button", { name: args.children as string });
    // custom-colors.css sets --blue-9 (accent-9) to #0B49EA = rgb(11, 73, 234)
    await expect(getComputedStyle(button).backgroundColor).toBe("rgb(11, 73, 234)");
  }
};

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12 }}>
      <Button {...args} variant="solid">
        Solid
      </Button>
      <Button {...args} variant="soft">
        Soft
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
    </div>
  )
};

export const BothAppearances: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 24 }}>
      <ThemeProvider appearance="light">
        <div style={{ padding: 24 }}>
          <Button {...args} />
        </div>
      </ThemeProvider>
      <ThemeProvider appearance="dark">
        <div style={{ padding: 24 }}>
          <Button {...args} />
        </div>
      </ThemeProvider>
    </div>
  )
};
