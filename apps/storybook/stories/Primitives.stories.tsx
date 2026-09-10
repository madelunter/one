import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, type CSSProperties, type ComponentPropsWithoutRef } from "react";
import {
  Accordion,
  AccessibleIcon,
  AlertDialog,
  AspectRatio,
  Avatar,
  Checkbox,
  Collapsible,
  ContextMenu,
  Dialog,
  Direction,
  DropdownMenu,
  Form,
  HoverCard,
  Label,
  Menubar,
  NavigationMenu,
  Popover,
  Portal,
  Progress,
  RadioGroup,
  ScrollArea,
  Select,
  Separator,
  Slider,
  Slot,
  Switch,
  Tabs,
  Toast,
} from "@oneds/ui/primitives";

/**
 * Raw, unstyled Radix Primitives from `@oneds/ui/primitives` — the behavioral
 * building blocks Radix Themes' own styled components are built on. These are
 * deliberately given only minimal inline styling (just enough to see their
 * structure/state), since primitives ship with zero visual styling by design.
 */
const meta: Meta = {
  title: "Primitives/Overview",
};

export default meta;
type Story = StoryObj;

const overlayStyle: CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "var(--gray-a8)",
};

const contentStyle: CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "var(--color-panel-solid)",
  border: "1px solid var(--gray-6)",
  borderRadius: 6,
  padding: 16,
  minWidth: 240,
  boxShadow: "0 4px 24px var(--gray-a6)",
};

const menuContentStyle: CSSProperties = {
  background: "var(--color-panel-solid)",
  border: "1px solid var(--gray-6)",
  borderRadius: 6,
  padding: 4,
  minWidth: 160,
  boxShadow: "0 4px 24px var(--gray-a6)",
};

const menuItemStyle: CSSProperties = {
  padding: "6px 10px",
  borderRadius: 4,
  fontSize: 14,
  cursor: "default",
  outline: "none",
};

const menuTriggerStyle: CSSProperties = {
  padding: "6px 10px",
  borderRadius: 4,
  fontSize: 14,
  border: "none",
  background: "transparent",
  cursor: "pointer",
};

const inputStyle: CSSProperties = {
  border: "1px solid var(--gray-7)",
  borderRadius: 4,
  padding: "6px 8px",
  fontSize: 14,
};

const buttonStyle: CSSProperties = {
  border: "1px solid var(--gray-7)",
  borderRadius: 4,
  padding: "6px 12px",
  fontSize: 14,
  background: "var(--gray-2)",
  cursor: "pointer",
};

export const AccordionStory: Story = {
  name: "Accordion",
  render: () => (
    <Accordion.Root type="single" collapsible defaultValue="item-1" style={{ width: 320 }}>
      {["item-1", "item-2", "item-3"].map((value, i) => (
        <Accordion.Item
          key={value}
          value={value}
          style={{ borderBottom: "1px solid var(--gray-6)" }}
        >
          <Accordion.Header>
            <Accordion.Trigger style={{ ...menuTriggerStyle, width: "100%", textAlign: "left" }}>
              Section {i + 1}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content style={{ padding: "0 10px 10px", fontSize: 14 }}>
            Content for section {i + 1}.
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};

export const AccessibleIconStory: Story = {
  name: "AccessibleIcon",
  render: () => (
    <AccessibleIcon.Root label="Notifications">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <circle cx="10" cy="10" r="8" />
      </svg>
    </AccessibleIcon.Root>
  ),
};

export const AlertDialogStory: Story = {
  name: "AlertDialog",
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button style={buttonStyle}>Delete account</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay style={overlayStyle} />
        <AlertDialog.Content style={contentStyle}>
          <AlertDialog.Title style={{ margin: 0 }}>Are you sure?</AlertDialog.Title>
          <AlertDialog.Description style={{ fontSize: 14, margin: "8px 0 16px" }}>
            This action cannot be undone.
          </AlertDialog.Description>
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
            <AlertDialog.Cancel asChild>
              <button style={buttonStyle}>Cancel</button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button style={{ ...buttonStyle, background: "var(--accent-9)", color: "white" }}>
                Confirm
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  ),
};

export const AspectRatioStory: Story = {
  name: "AspectRatio",
  render: () => (
    <div style={{ width: 300 }}>
      <AspectRatio.Root ratio={16 / 9}>
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "var(--accent-9)",
            borderRadius: 4,
          }}
        />
      </AspectRatio.Root>
    </div>
  ),
};

export const AvatarStory: Story = {
  name: "Avatar",
  render: () => (
    <Avatar.Root
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "var(--accent-4)",
        color: "var(--accent-11)",
        fontSize: 14,
        overflow: "hidden",
      }}
    >
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar.Root>
  ),
};

export const CheckboxStory: Story = {
  name: "Checkbox",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <Checkbox.Root
        id="primitive-checkbox"
        defaultChecked
        style={{
          width: 20,
          height: 20,
          border: "1px solid var(--gray-8)",
          borderRadius: 4,
          background: "var(--accent-9)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Checkbox.Indicator style={{ color: "white", fontSize: 12 }}>✓</Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor="primitive-checkbox" style={{ fontSize: 14 }}>
        Accept terms
      </label>
    </div>
  ),
};

export const CollapsibleStory: Story = {
  name: "Collapsible",
  render: () => (
    <Collapsible.Root style={{ width: 300 }}>
      <Collapsible.Trigger asChild>
        <button style={buttonStyle}>Toggle details</button>
      </Collapsible.Trigger>
      <Collapsible.Content style={{ paddingTop: 8, fontSize: 14 }}>
        Additional details revealed by the trigger.
      </Collapsible.Content>
    </Collapsible.Root>
  ),
};

export const ContextMenuStory: Story = {
  name: "ContextMenu",
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger
        style={{
          border: "1px dashed var(--gray-8)",
          borderRadius: 4,
          padding: 24,
          textAlign: "center",
          fontSize: 14,
          width: 300,
        }}
      >
        Right-click here
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content style={menuContentStyle}>
          <ContextMenu.Item style={menuItemStyle}>Copy</ContextMenu.Item>
          <ContextMenu.Item style={menuItemStyle}>Paste</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  ),
};

export const DialogStory: Story = {
  name: "Dialog",
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button style={buttonStyle}>Open dialog</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay style={overlayStyle} />
        <Dialog.Content style={contentStyle}>
          <Dialog.Title style={{ margin: 0 }}>Dialog title</Dialog.Title>
          <Dialog.Description style={{ fontSize: 14, margin: "8px 0 16px" }}>
            Raw Dialog primitive with no default styling.
          </Dialog.Description>
          <Dialog.Close asChild>
            <button style={buttonStyle}>Close</button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};

export const DirectionStory: Story = {
  name: "Direction",
  render: () => (
    <Direction.Provider dir="rtl">
      <p style={{ fontSize: 12, color: "var(--gray-11)", marginTop: 0 }}>
        dir=&quot;rtl&quot; propagated to descendant primitives (Tabs below reads right-to-left):
      </p>
      <Tabs.Root defaultValue="tab1" style={{ width: 300 }}>
        <Tabs.List style={{ display: "flex", borderBottom: "1px solid var(--gray-6)" }}>
          <Tabs.Trigger value="tab1" style={menuTriggerStyle}>
            Tab 1
          </Tabs.Trigger>
          <Tabs.Trigger value="tab2" style={menuTriggerStyle}>
            Tab 2
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1" style={{ padding: 12, fontSize: 14 }}>
          Content 1
        </Tabs.Content>
        <Tabs.Content value="tab2" style={{ padding: 12, fontSize: 14 }}>
          Content 2
        </Tabs.Content>
      </Tabs.Root>
    </Direction.Provider>
  ),
};

export const DropdownMenuStory: Story = {
  name: "DropdownMenu",
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button style={buttonStyle}>Open menu</button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content style={menuContentStyle}>
          <DropdownMenu.Item style={menuItemStyle}>Profile</DropdownMenu.Item>
          <DropdownMenu.Item style={menuItemStyle}>Settings</DropdownMenu.Item>
          <DropdownMenu.Separator style={{ height: 1, background: "var(--gray-6)", margin: 4 }} />
          <DropdownMenu.Item style={menuItemStyle}>Log out</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  ),
};

export const FormStory: Story = {
  name: "Form",
  render: () => (
    <Form.Root
      style={{ display: "flex", flexDirection: "column", gap: 8, width: 300 }}
      onSubmit={(e) => e.preventDefault()}
    >
      <Form.Field name="email">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Form.Label style={{ fontSize: 14 }}>Email</Form.Label>
          <Form.Message match="valueMissing" style={{ fontSize: 12, color: "var(--red-11)" }}>
            Please enter your email
          </Form.Message>
          <Form.Message match="typeMismatch" style={{ fontSize: 12, color: "var(--red-11)" }}>
            Please enter a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input type="email" required style={{ ...inputStyle, width: "100%" }} />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button style={buttonStyle}>Submit</button>
      </Form.Submit>
    </Form.Root>
  ),
};

export const HoverCardStory: Story = {
  name: "HoverCard",
  render: () => (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--accent-11)" }}>
          @username
        </a>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content style={contentStyle}>
          <p style={{ margin: 0, fontSize: 14 }}>Profile preview content.</p>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  ),
};

export const LabelStory: Story = {
  name: "Label",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, width: 220 }}>
      <Label.Root htmlFor="primitive-label-input" style={{ fontSize: 14 }}>
        Name
      </Label.Root>
      <input id="primitive-label-input" style={inputStyle} />
    </div>
  ),
};

export const MenubarStory: Story = {
  name: "Menubar",
  render: () => (
    <Menubar.Root
      style={{
        display: "flex",
        border: "1px solid var(--gray-6)",
        borderRadius: 4,
        padding: 4,
        width: "fit-content",
      }}
    >
      <Menubar.Menu>
        <Menubar.Trigger style={menuTriggerStyle}>File</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content style={menuContentStyle}>
            <Menubar.Item style={menuItemStyle}>New</Menubar.Item>
            <Menubar.Item style={menuItemStyle}>Open</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger style={menuTriggerStyle}>Edit</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content style={menuContentStyle}>
            <Menubar.Item style={menuItemStyle}>Undo</Menubar.Item>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  ),
};

export const NavigationMenuStory: Story = {
  name: "NavigationMenu",
  render: () => (
    <NavigationMenu.Root style={{ position: "relative" }}>
      <NavigationMenu.List
        style={{ display: "flex", gap: 8, listStyle: "none", padding: 0, margin: 0 }}
      >
        <NavigationMenu.Item>
          <NavigationMenu.Trigger style={menuTriggerStyle}>Products</NavigationMenu.Trigger>
          <NavigationMenu.Content style={{ ...menuContentStyle, position: "absolute" }}>
            Product links go here.
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="#"
            onClick={(e) => e.preventDefault()}
            style={menuTriggerStyle}
          >
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
      <NavigationMenu.Viewport style={{ position: "absolute" }} />
    </NavigationMenu.Root>
  ),
};

export const PopoverStory: Story = {
  name: "Popover",
  render: () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button style={buttonStyle}>Open popover</button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content style={contentStyle}>
          <p style={{ margin: 0, fontSize: 14 }}>Popover content.</p>
          <Popover.Arrow style={{ fill: "var(--color-panel-solid)" }} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  ),
};

export const PortalStory: Story = {
  name: "Portal",
  render: () => (
    <div>
      <p style={{ fontSize: 14, margin: 0 }}>This text renders in place.</p>
      <Portal.Root>
        <p style={{ fontSize: 14, color: "var(--accent-11)" }}>
          This text is teleported to document.body via Portal.Root.
        </p>
      </Portal.Root>
    </div>
  ),
};

export const ProgressStory: Story = {
  name: "Progress",
  render: () => (
    <Progress.Root
      value={60}
      style={{
        width: 300,
        height: 8,
        background: "var(--gray-4)",
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      <Progress.Indicator
        style={{
          width: "60%",
          height: "100%",
          background: "var(--accent-9)",
          transition: "width 200ms",
        }}
      />
    </Progress.Root>
  ),
};

export const RadioGroupStory: Story = {
  name: "RadioGroup",
  render: () => (
    <RadioGroup.Root defaultValue="1" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {["1", "2"].map((value) => (
        <div key={value} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <RadioGroup.Item
            value={value}
            id={`primitive-radio-${value}`}
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              border: "1px solid var(--gray-8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RadioGroup.Indicator
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent-9)",
              }}
            />
          </RadioGroup.Item>
          <label htmlFor={`primitive-radio-${value}`} style={{ fontSize: 14 }}>
            Option {value}
          </label>
        </div>
      ))}
    </RadioGroup.Root>
  ),
};

export const ScrollAreaStory: Story = {
  name: "ScrollArea",
  render: () => (
    <ScrollArea.Root
      style={{ width: 300, height: 120, border: "1px solid var(--gray-6)", borderRadius: 4 }}
    >
      <ScrollArea.Viewport style={{ width: "100%", height: "100%" }}>
        <div style={{ padding: 12, fontSize: 14 }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i} style={{ margin: "4px 0" }}>
              Row {i + 1}
            </p>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical" style={{ width: 8, padding: 2 }}>
        <ScrollArea.Thumb style={{ background: "var(--gray-8)", borderRadius: 4 }} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  ),
};

export const SelectStory: Story = {
  name: "Select",
  render: () => (
    <Select.Root defaultValue="apple">
      <Select.Trigger
        style={{
          ...buttonStyle,
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: 160,
          justifyContent: "space-between",
        }}
      >
        <Select.Value />
        <Select.Icon>▾</Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content style={menuContentStyle}>
          <Select.Viewport>
            {["apple", "banana", "cherry"].map((fruit) => (
              <Select.Item key={fruit} value={fruit} style={menuItemStyle}>
                <Select.ItemText>{fruit[0].toUpperCase() + fruit.slice(1)}</Select.ItemText>
                <Select.ItemIndicator style={{ marginLeft: 8 }}>✓</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  ),
};

export const SeparatorStory: Story = {
  name: "Separator",
  render: () => (
    <div style={{ width: 300, fontSize: 14 }}>
      <p style={{ margin: 0 }}>Above</p>
      <Separator.Root style={{ height: 1, background: "var(--gray-6)", margin: "8px 0" }} />
      <p style={{ margin: 0 }}>Below</p>
    </div>
  ),
};

export const SliderStory: Story = {
  name: "Slider",
  render: () => (
    <Slider.Root
      defaultValue={[40]}
      max={100}
      step={1}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: 300,
        height: 20,
      }}
    >
      <Slider.Track
        style={{
          position: "relative",
          flexGrow: 1,
          height: 4,
          background: "var(--gray-5)",
          borderRadius: 2,
        }}
      >
        <Slider.Range
          style={{
            position: "absolute",
            height: "100%",
            background: "var(--accent-9)",
            borderRadius: 2,
          }}
        />
      </Slider.Track>
      <Slider.Thumb
        style={{
          display: "block",
          width: 16,
          height: 16,
          background: "var(--accent-9)",
          borderRadius: "50%",
        }}
      />
    </Slider.Root>
  ),
};

function SlotDemoLink({
  asChild,
  ...props
}: { asChild?: boolean } & ComponentPropsWithoutRef<"a">) {
  const Comp = asChild ? Slot.Root : "a";
  return <Comp {...props} />;
}

export const SlotStory: Story = {
  name: "Slot",
  render: () => (
    <SlotDemoLink asChild style={{ color: "var(--accent-11)" }}>
      <a href="#" onClick={(e) => e.preventDefault()}>
        Composed onto a real &lt;a&gt; via Slot
      </a>
    </SlotDemoLink>
  ),
};

export const SwitchStory: Story = {
  name: "Switch",
  render: () => (
    <Switch.Root
      defaultChecked
      style={{
        width: 36,
        height: 20,
        borderRadius: 999,
        background: "var(--accent-9)",
        position: "relative",
        padding: 2,
      }}
    >
      <Switch.Thumb
        style={{
          display: "block",
          width: 16,
          height: 16,
          borderRadius: "50%",
          background: "white",
          transition: "transform 150ms",
          transform: "translateX(16px)",
        }}
      />
    </Switch.Root>
  ),
};

export const TabsStory: Story = {
  name: "Tabs",
  render: () => (
    <Tabs.Root defaultValue="tab1" style={{ width: 300 }}>
      <Tabs.List style={{ display: "flex", borderBottom: "1px solid var(--gray-6)" }}>
        <Tabs.Trigger value="tab1" style={menuTriggerStyle}>
          Tab 1
        </Tabs.Trigger>
        <Tabs.Trigger value="tab2" style={menuTriggerStyle}>
          Tab 2
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1" style={{ padding: 12, fontSize: 14 }}>
        Content 1
      </Tabs.Content>
      <Tabs.Content value="tab2" style={{ padding: 12, fontSize: 14 }}>
        Content 2
      </Tabs.Content>
    </Tabs.Root>
  ),
};

function ToastDemo() {
  const [open, setOpen] = useState(false);
  return (
    <Toast.Provider swipeDirection="right">
      <button style={buttonStyle} onClick={() => setOpen(true)}>
        Show toast
      </button>
      <Toast.Root
        open={open}
        onOpenChange={setOpen}
        style={{
          ...contentStyle,
          position: "fixed",
          top: 16,
          right: 16,
          transform: "none",
          minWidth: 200,
        }}
      >
        <Toast.Title style={{ fontWeight: 600, fontSize: 14 }}>Saved</Toast.Title>
        <Toast.Description style={{ fontSize: 14 }}>
          Your changes have been saved.
        </Toast.Description>
        <Toast.Close aria-label="Close" style={{ position: "absolute", top: 8, right: 8 }}>
          ✕
        </Toast.Close>
      </Toast.Root>
      <Toast.Viewport style={{ position: "fixed", top: 0, right: 0 }} />
    </Toast.Provider>
  );
}

export const ToastStory: Story = {
  name: "Toast",
  render: () => <ToastDemo />,
};
