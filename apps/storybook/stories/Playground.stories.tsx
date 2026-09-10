import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import { Box, Checkbox, Flex, Heading, Section, Separator, Switch, ThemePanel } from "@oneds/ui";
import * as ButtonStories from "./Button.stories";
import * as Themes from "./Themes.stories";
import * as Primitives from "./Primitives.stories";

/**
 * A single continuous page rendering every component @oneds/ui exports,
 * grouped by category — mirroring https://www.radix-ui.com/themes/playground.
 * The floating ThemePanel (bottom-right) lets you live-tweak accent color,
 * gray color, radius, and scaling and see every section update at once.
 *
 * Each demo below is the same `render` already defined for that component's
 * own dedicated story (Button.stories.tsx, Themes.stories.tsx, etc.) — this
 * page doesn't duplicate the JSX, it just re-composes it into one showcase.
 */
const meta: Meta = {
  title: "Playground/All Components",
};

export default meta;
type Story = StoryObj;

// Permissive on purpose: CSF Story objects type `render` against Storybook's
// own (args, context) signature, but none of ours read either — this just
// lets us invoke them here without re-deriving that internal type.
function show(story: { render?: (...args: never[]) => ReactNode }): ReactNode {
  return story.render?.();
}

interface Item {
  name: string;
  node: ReactNode;
}

interface Group {
  title: string;
  items: Item[];
}

const groups: Group[] = [
  {
    title: "Buttons & controls",
    items: [
      { name: "Button", node: show(ButtonStories.Variants) },
      { name: "IconButton", node: show(Themes.IconButtonStory) },
      { name: "Switch", node: <Switch defaultChecked /> },
      { name: "Checkbox", node: <Checkbox defaultChecked /> },
      { name: "Radio", node: show(Themes.RadioStory) },
      { name: "RadioGroup", node: show(Themes.RadioGroupStory) },
      { name: "CheckboxGroup", node: show(Themes.CheckboxGroupStory) },
      { name: "CheckboxCards", node: show(Themes.CheckboxCardsStory) },
      { name: "RadioCards", node: show(Themes.RadioCardsStory) },
      { name: "SegmentedControl", node: show(Themes.SegmentedControlStory) },
      { name: "Slider", node: show(Themes.SliderStory) },
      { name: "TextField", node: show(Themes.TextFieldStory) },
      { name: "TextArea", node: show(Themes.TextAreaStory) },
      { name: "Select", node: show(Themes.SelectStory) }
    ]
  },
  {
    title: "Typography",
    items: [
      { name: "Text", node: show(Themes.TextStory) },
      { name: "Heading", node: show(Themes.HeadingStory) },
      { name: "Blockquote", node: show(Themes.BlockquoteStory) },
      { name: "Code", node: show(Themes.CodeStory) },
      { name: "Em", node: show(Themes.EmStory) },
      { name: "Kbd", node: show(Themes.KbdStory) },
      { name: "Link", node: show(Themes.LinkStory) },
      { name: "Quote", node: show(Themes.QuoteStory) },
      { name: "Strong", node: show(Themes.StrongStory) }
    ]
  },
  {
    title: "Layout",
    items: [
      { name: "Box", node: show(Themes.BoxStory) },
      { name: "Container", node: show(Themes.ContainerStory) },
      { name: "Flex", node: show(Themes.FlexStory) },
      { name: "Grid", node: show(Themes.GridStory) },
      { name: "Section", node: show(Themes.SectionStory) },
      { name: "Inset", node: show(Themes.InsetStory) },
      { name: "AspectRatio", node: show(Themes.AspectRatioStory) },
      { name: "ScrollArea", node: show(Themes.ScrollAreaStory) },
      { name: "Separator", node: show(Themes.SeparatorStory) }
    ]
  },
  {
    title: "Data display",
    items: [
      { name: "Avatar", node: show(Themes.AvatarStory) },
      { name: "Badge", node: show(Themes.BadgeStory) },
      { name: "Card", node: show(Themes.CardStory) },
      { name: "DataList", node: show(Themes.DataListStory) },
      { name: "Table", node: show(Themes.TableStory) },
      { name: "Callout", node: show(Themes.CalloutStory) }
    ]
  },
  {
    title: "Feedback",
    items: [
      { name: "Progress", node: show(Themes.ProgressStory) },
      { name: "Spinner", node: show(Themes.SpinnerStory) },
      { name: "Skeleton", node: show(Themes.SkeletonStory) },
      { name: "Toast (primitive)", node: show(Primitives.ToastStory) }
    ]
  },
  {
    title: "Overlays",
    items: [
      { name: "AlertDialog", node: show(Themes.AlertDialogStory) },
      { name: "Dialog", node: show(Themes.DialogStory) },
      { name: "DropdownMenu", node: show(Themes.DropdownMenuStory) },
      { name: "ContextMenu", node: show(Themes.ContextMenuStory) },
      { name: "HoverCard", node: show(Themes.HoverCardStory) },
      { name: "Popover", node: show(Themes.PopoverStory) },
      { name: "Tooltip", node: show(Themes.TooltipStory) }
    ]
  },
  {
    title: "Navigation",
    items: [
      { name: "Tabs", node: show(Themes.TabsStory) },
      { name: "TabNav", node: show(Themes.TabNavStory) }
    ]
  },
  {
    title: "Utilities",
    items: [
      { name: "VisuallyHidden", node: show(Themes.VisuallyHiddenStory) },
      { name: "AccessibleIcon", node: show(Themes.AccessibleIconStory) },
      { name: "Portal", node: show(Themes.PortalStory) },
      { name: "Slot", node: show(Themes.SlotStory) },
      { name: "Theme (scoped override)", node: show(Themes.ThemeStory) },
      { name: "Reset", node: show(Themes.ResetStory) },
      { name: "Icons", node: show(Themes.IconsStory) }
    ]
  },
  {
    title: "Unstyled primitives (@oneds/ui/primitives)",
    items: [
      { name: "Accordion", node: show(Primitives.AccordionStory) },
      { name: "Collapsible", node: show(Primitives.CollapsibleStory) },
      { name: "Direction", node: show(Primitives.DirectionStory) },
      { name: "Form", node: show(Primitives.FormStory) },
      { name: "Label", node: show(Primitives.LabelStory) },
      { name: "Menubar", node: show(Primitives.MenubarStory) },
      { name: "NavigationMenu", node: show(Primitives.NavigationMenuStory) }
    ]
  }
];

export const AllComponents: Story = {
  render: () => (
    <Box>
      {groups.map((group, groupIndex) => (
        <Section key={group.title} size={groupIndex === 0 ? "1" : "2"} pt={groupIndex === 0 ? "0" : undefined}>
          <Heading size="6" mb="5">
            {group.title}
          </Heading>
          <Flex direction="column" gap="6">
            {group.items.map((item) => (
              <Box key={item.name}>
                <Heading size="3" mb="3" color="gray">
                  {item.name}
                </Heading>
                <Box>{item.node}</Box>
              </Box>
            ))}
          </Flex>
          {groupIndex < groups.length - 1 && <Separator size="4" mt="6" />}
        </Section>
      ))}
      <ThemePanel defaultOpen={false} />
    </Box>
  )
};
