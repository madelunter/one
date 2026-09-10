import type { Meta, StoryObj } from "@storybook/react-vite";
import { type ComponentPropsWithoutRef } from "react";
import {
  AccessibleIcon,
  AlertDialog,
  AspectRatio,
  Avatar,
  Badge,
  Blockquote,
  Box,
  Button,
  Callout,
  Card,
  ChevronDownIcon,
  Code,
  Container,
  ContextMenu,
  DataList,
  Dialog,
  DropdownMenu,
  Em,
  Flex,
  FlexGrid,
  Grid,
  Heading,
  HoverCard,
  IconButton,
  Inset,
  Kbd,
  Link,
  Popover,
  Portal,
  Progress,
  Quote,
  Radio,
  RadioCards,
  RadioGroup,
  CheckboxCards,
  CheckboxGroup,
  Reset,
  ScrollArea,
  Section,
  SegmentedControl,
  Select,
  Separator,
  Skeleton,
  Slider,
  Slot,
  Spinner,
  Strong,
  TabNav,
  Table,
  Tabs,
  Text,
  TextArea,
  TextField,
  Theme,
  ThemePanel,
  ThickCheckIcon,
  ThickChevronRightIcon,
  ThickDividerHorizontalIcon,
  Tooltip,
  VisuallyHidden,
} from "@oneds/ui";

/**
 * Every Radix Themes-styled component from `@oneds/ui` not already covered by
 * a dedicated story file (Button/Switch/Checkbox live in their own files).
 * These render with the library's actual theming — no custom CSS needed.
 */
const meta: Meta = {
  title: "Themes/Overview",
};

export default meta;
type Story = StoryObj;

const swatchStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  borderRadius: 4,
  background: "var(--accent-4)",
  color: "var(--accent-11)",
};

// --- Typography ---

export const TextStory: Story = {
  name: "Text",
  render: () => <Text>The quick brown fox jumps over the lazy dog.</Text>,
};

export const HeadingStory: Story = {
  name: "Heading",
  render: () => <Heading>Section heading</Heading>,
};

export const BlockquoteStory: Story = {
  name: "Blockquote",
  render: () => (
    <Blockquote>Perfect typography is certainly one of the most important elements.</Blockquote>
  ),
};

export const CodeStory: Story = {
  name: "Code",
  render: () => <Code>console.log(&quot;hello&quot;)</Code>,
};

export const EmStory: Story = {
  name: "Em",
  render: () => (
    <Text>
      This is <Em>emphasized</Em> text.
    </Text>
  ),
};

export const KbdStory: Story = {
  name: "Kbd",
  render: () => <Kbd>⌘ + C</Kbd>,
};

export const LinkStory: Story = {
  name: "Link",
  render: () => (
    <Link href="#" onClick={(e) => e.preventDefault()}>
      Learn more
    </Link>
  ),
};

export const QuoteStory: Story = {
  name: "Quote",
  render: () => (
    <Text>
      She said <Quote>hello there</Quote> as she walked by.
    </Text>
  ),
};

export const StrongStory: Story = {
  name: "Strong",
  render: () => (
    <Text>
      This is <Strong>strong</Strong> text.
    </Text>
  ),
};

// --- Layout ---

export const BoxStory: Story = {
  name: "Box",
  render: () => (
    <Box p="4" style={{ background: "var(--gray-3)", borderRadius: 4 }}>
      Box content
    </Box>
  ),
};

export const ContainerStory: Story = {
  name: "Container",
  render: () => (
    <Container size="1">
      <Box p="4" style={{ background: "var(--gray-3)", borderRadius: 4 }}>
        Constrained-width container
      </Box>
    </Container>
  ),
};

export const FlexStory: Story = {
  name: "Flex",
  render: () => (
    // direction flips from stacked (mobile) to a row once the viewport
    // reaches Radix's "sm" breakpoint — resize the canvas to see it change.
    <Flex direction={{ initial: "column", sm: "row" }} gap="3">
      <Box style={swatchStyle}>1</Box>
      <Box style={swatchStyle}>2</Box>
      <Box style={swatchStyle}>3</Box>
    </Flex>
  ),
};

export const GridStory: Story = {
  name: "Grid",
  render: () => (
    // 1 column on mobile, 2 at "sm", 3 at "md" — Radix Themes' responsive
    // breakpoint-object syntax, no custom media queries needed.
    <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="3" width="100%" maxWidth="220px">
      {[1, 2, 3].map((n) => (
        <Box key={n} style={swatchStyle}>
          {n}
        </Box>
      ))}
    </Grid>
  ),
};

export const FlexGridStory: Story = {
  name: "FlexGrid",
  render: () => (
    // Auto-wraps purely from available width — no columns/breakpoint props
    // to set. Try resizing the canvas (or the Storybook viewport toolbar):
    // items reflow continuously instead of snapping at fixed breakpoints.
    <FlexGrid minItemWidth="120px" gap="3" style={{ width: "100%", maxWidth: 500 }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <Box
          key={n}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 48,
            borderRadius: 4,
            background: "var(--accent-4)",
            color: "var(--accent-11)"
          }}
        >
          {n}
        </Box>
      ))}
    </FlexGrid>
  ),
};

export const SectionStory: Story = {
  name: "Section",
  render: () => (
    <Section size="1" style={{ background: "var(--gray-2)" }}>
      <Text>Section content</Text>
    </Section>
  ),
};

export const InsetStory: Story = {
  name: "Inset",
  render: () => (
    <Card style={{ width: "100%", maxWidth: 260 }}>
      <Inset side="top" pb="current">
        <div style={{ height: 80, background: "var(--accent-4)" }} />
      </Inset>
      <Text as="p" mt="3">
        Card with an inset media area.
      </Text>
    </Card>
  ),
};

export const AspectRatioStory: Story = {
  name: "AspectRatio",
  render: () => (
    <Box width="100%" maxWidth="240px">
      <AspectRatio ratio={16 / 9}>
        <div style={{ width: "100%", height: "100%", background: "var(--accent-9)", borderRadius: 4 }} />
      </AspectRatio>
    </Box>
  ),
};

export const ScrollAreaStory: Story = {
  name: "ScrollArea",
  render: () => (
    <ScrollArea type="always" style={{ height: 120, width: "100%", maxWidth: 300 }}>
      <Box p="3">
        {Array.from({ length: 20 }).map((_, i) => (
          <Text as="p" key={i}>
            Row {i + 1}
          </Text>
        ))}
      </Box>
    </ScrollArea>
  ),
};

export const SeparatorStory: Story = {
  name: "Separator",
  render: () => (
    <Flex direction="column">
      <Text>Above</Text>
      <Separator my="3" size="4" />
      <Text>Below</Text>
    </Flex>
  ),
};

// --- Data display ---

export const AvatarStory: Story = {
  name: "Avatar",
  render: () => <Avatar fallback="JD" radius="full" />,
};

export const BadgeStory: Story = {
  name: "Badge",
  render: () => <Badge color="green">New</Badge>,
};

export const CardStory: Story = {
  name: "Card",
  render: () => (
    <Card style={{ width: "100%", maxWidth: 260 }}>
      <Text as="p">Card content goes here.</Text>
    </Card>
  ),
};

export const DataListStory: Story = {
  name: "DataList",
  render: () => (
    <DataList.Root>
      <DataList.Item>
        <DataList.Label minWidth="88px">Name</DataList.Label>
        <DataList.Value>Jane Doe</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label minWidth="88px">Email</DataList.Label>
        <DataList.Value>jane@example.com</DataList.Value>
      </DataList.Item>
    </DataList.Root>
  ),
};

export const TableStory: Story = {
  name: "Table",
  render: () => (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.RowHeaderCell>Jane</Table.RowHeaderCell>
          <Table.Cell>Engineer</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.RowHeaderCell>John</Table.RowHeaderCell>
          <Table.Cell>Designer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};

export const CheckboxCardsStory: Story = {
  name: "CheckboxCards",
  render: () => (
    <CheckboxCards.Root defaultValue={["1"]} columns="2" style={{ width: "100%", maxWidth: 300 }}>
      <CheckboxCards.Item value="1">Option 1</CheckboxCards.Item>
      <CheckboxCards.Item value="2">Option 2</CheckboxCards.Item>
    </CheckboxCards.Root>
  ),
};

export const RadioCardsStory: Story = {
  name: "RadioCards",
  render: () => (
    <RadioCards.Root defaultValue="1" columns="2" style={{ width: "100%", maxWidth: 300 }}>
      <RadioCards.Item value="1">Option 1</RadioCards.Item>
      <RadioCards.Item value="2">Option 2</RadioCards.Item>
    </RadioCards.Root>
  ),
};

export const CalloutStory: Story = {
  name: "Callout",
  render: () => (
    <Callout.Root>
      <Callout.Icon>ℹ️</Callout.Icon>
      <Callout.Text>This is a callout message.</Callout.Text>
    </Callout.Root>
  ),
};

// --- Forms ---

export const TextFieldStory: Story = {
  name: "TextField",
  render: () => <TextField.Root placeholder="Search…" style={{ width: "100%", maxWidth: 220 }} />,
};

export const TextAreaStory: Story = {
  name: "TextArea",
  render: () => <TextArea placeholder="Write a comment…" style={{ width: "100%", maxWidth: 260 }} />,
};

export const RadioStory: Story = {
  name: "Radio",
  render: () => (
    <Flex gap="3">
      <Radio name="primitive-radio-demo" value="1" defaultChecked />
      <Radio name="primitive-radio-demo" value="2" />
    </Flex>
  ),
};

export const RadioGroupStory: Story = {
  name: "RadioGroup",
  render: () => (
    <RadioGroup.Root defaultValue="1">
      <RadioGroup.Item value="1">Default</RadioGroup.Item>
      <RadioGroup.Item value="2">Comfortable</RadioGroup.Item>
    </RadioGroup.Root>
  ),
};

export const CheckboxGroupStory: Story = {
  name: "CheckboxGroup",
  render: () => (
    <CheckboxGroup.Root defaultValue={["1"]}>
      <CheckboxGroup.Item value="1">Option 1</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">Option 2</CheckboxGroup.Item>
    </CheckboxGroup.Root>
  ),
};

export const SelectStory: Story = {
  name: "Select",
  render: () => (
    <Select.Root defaultValue="apple">
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="cherry">Cherry</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  ),
};

export const SegmentedControlStory: Story = {
  name: "SegmentedControl",
  render: () => (
    <SegmentedControl.Root defaultValue="inbox">
      <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
      <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
      <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
    </SegmentedControl.Root>
  ),
};

export const SliderStory: Story = {
  name: "Slider",
  render: () => <Slider defaultValue={[40]} style={{ width: "100%", maxWidth: 260 }} />,
};

export const ProgressStory: Story = {
  name: "Progress",
  render: () => <Progress value={60} style={{ width: "100%", maxWidth: 260 }} />,
};

export const SpinnerStory: Story = {
  name: "Spinner",
  render: () => <Spinner />,
};

export const SkeletonStory: Story = {
  name: "Skeleton",
  render: () => (
    <Skeleton>
      <Text as="p">Loading placeholder text that will be skeletonized.</Text>
    </Skeleton>
  ),
};

export const IconButtonStory: Story = {
  name: "IconButton",
  render: () => (
    <IconButton variant="soft">
      <ChevronDownIcon />
    </IconButton>
  ),
};

// --- Overlays ---

export const AlertDialogStory: Story = {
  name: "AlertDialog",
  render: () => (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete account</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Are you sure?</AlertDialog.Title>
        <AlertDialog.Description size="2">
          This action cannot be undone.
        </AlertDialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button color="red">Confirm</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  ),
};

export const DialogStory: Story = {
  name: "Dialog",
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Edit profile</Button>
      </Dialog.Trigger>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your profile.
        </Dialog.Description>
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  ),
};

export const DropdownMenuStory: Story = {
  name: "DropdownMenu",
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft">Options</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item color="red">Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

export const ContextMenuStory: Story = {
  name: "ContextMenu",
  render: () => (
    <ContextMenu.Root>
      <ContextMenu.Trigger>
        <Box
          style={{
            border: "1px dashed var(--gray-8)",
            borderRadius: 4,
            padding: 24,
            textAlign: "center",
            width: "100%",
            maxWidth: 300,
          }}
        >
          Right-click here
        </Box>
      </ContextMenu.Trigger>
      <ContextMenu.Content>
        <ContextMenu.Item>Copy</ContextMenu.Item>
        <ContextMenu.Item>Paste</ContextMenu.Item>
      </ContextMenu.Content>
    </ContextMenu.Root>
  ),
};

export const HoverCardStory: Story = {
  name: "HoverCard",
  render: () => (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <Link href="#" onClick={(e) => e.preventDefault()}>
          @username
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Content>
        <Text as="p" size="2">
          Profile preview content.
        </Text>
      </HoverCard.Content>
    </HoverCard.Root>
  ),
};

export const PopoverStory: Story = {
  name: "Popover",
  render: () => (
    <Popover.Root>
      <Popover.Trigger>
        <Button variant="soft">Comment</Button>
      </Popover.Trigger>
      <Popover.Content width="260px">
        <TextArea placeholder="Write a comment…" />
      </Popover.Content>
    </Popover.Root>
  ),
};

export const TooltipStory: Story = {
  name: "Tooltip",
  render: () => (
    <Tooltip content="This is a tooltip">
      <Button variant="soft">Hover me</Button>
    </Tooltip>
  ),
};

// --- Navigation ---

export const TabsStory: Story = {
  name: "Tabs",
  render: () => (
    <Tabs.Root defaultValue="account" style={{ width: "100%", maxWidth: 300 }}>
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <Text size="2">Account content.</Text>
      </Tabs.Content>
      <Tabs.Content value="documents">
        <Text size="2">Documents content.</Text>
      </Tabs.Content>
    </Tabs.Root>
  ),
};

export const TabNavStory: Story = {
  name: "TabNav",
  render: () => (
    <TabNav.Root>
      <TabNav.Link href="#" active onClick={(e) => e.preventDefault()}>
        Overview
      </TabNav.Link>
      <TabNav.Link href="#" onClick={(e) => e.preventDefault()}>
        Settings
      </TabNav.Link>
    </TabNav.Root>
  ),
};

// --- Utilities ---

export const VisuallyHiddenStory: Story = {
  name: "VisuallyHidden",
  render: () => (
    <IconButton variant="soft">
      <ChevronDownIcon />
      <VisuallyHidden>Expand section</VisuallyHidden>
    </IconButton>
  ),
};

export const AccessibleIconStory: Story = {
  name: "AccessibleIcon",
  render: () => (
    <AccessibleIcon label="Notifications">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <circle cx="10" cy="10" r="8" />
      </svg>
    </AccessibleIcon>
  ),
};

export const PortalStory: Story = {
  name: "Portal",
  render: () => (
    <div>
      <Text as="p">This text renders in place.</Text>
      <Portal>
        <Text as="p" style={{ color: "var(--accent-11)" }}>
          This text is teleported to document.body via Portal.
        </Text>
      </Portal>
    </div>
  ),
};

function SlotDemoLink({
  asChild,
  ...props
}: { asChild?: boolean } & ComponentPropsWithoutRef<"a">) {
  const Comp = asChild ? Slot : "a";
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

export const SlottableStory: Story = {
  name: "Slottable",
  render: () => (
    <Text as="p" size="2">
      Slottable marks which child of a Slot-composed element is the "real" slotted
      child when there's more than one — used internally by components like Button
      when composing icon + label via <Code>asChild</Code>.
    </Text>
  ),
};

export const ThemeStory: Story = {
  name: "Theme",
  render: () => (
    <Theme
      accentColor="crimson"
      style={{ padding: 16, borderRadius: 8, border: "1px solid var(--gray-6)" }}
    >
      <Button>Scoped crimson theme</Button>
    </Theme>
  ),
};

export const ThemePanelStory: Story = {
  name: "ThemePanel",
  render: () => (
    <>
      <Text as="p" size="2">
        ThemePanel renders Radix Themes' floating live theme-editor overlay (fixed
        position) — look for it at the edge of the canvas.
      </Text>
      <ThemePanel defaultOpen={false} />
    </>
  ),
};

export const ResetStory: Story = {
  name: "Reset",
  render: () => (
    <Reset>
      <button
        style={{
          padding: 8,
          background: "var(--accent-9)",
          color: "white",
          borderRadius: 4,
          border: "none",
        }}
      >
        Custom button via Reset
      </button>
    </Reset>
  ),
};

export const IconsStory: Story = {
  name: "Icons",
  render: () => (
    <Flex gap="4" align="center">
      <ChevronDownIcon />
      <ThickCheckIcon />
      <ThickChevronRightIcon />
      <ThickDividerHorizontalIcon />
    </Flex>
  ),
};
