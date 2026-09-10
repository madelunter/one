import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  CopyIcon,
  Cross2Icon,
  DotsHorizontalIcon,
  DrawingPinFilledIcon,
  DrawingPinIcon,
  OpenInNewWindowIcon,
  PlusIcon,
  Share2Icon
} from "@radix-ui/react-icons";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  DropdownMenu,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Separator,
  Strong,
  Switch,
  Text,
  TextField,
  Theme
} from "@oneds/ui";

/**
 * A faithful adaptation of https://www.radix-ui.com/themes/example-dashboard
 * (source: github.com/radix-ui/website/blob/main/components/example-themes-dashboard.tsx),
 * rebuilt on @oneds/ui instead of @radix-ui/themes directly. Two deliberate
 * departures from the original: avatars use initials-only fallbacks instead
 * of real photos (no external image dependency), and dropdown/menu content
 * portals to document.body by default instead of a same-tree container ref
 * (matches how every other overlay story in this project already works).
 */
const meta: Meta = {
  title: "Examples/Dashboard"
};

export default meta;
type Story = StoryObj;

const people = [
  "Emmeline Labrie",
  "Zac Wight",
  "Poppy Nicholls",
  "Da-Xia Wu",
  "Marisa Palermo",
  "Travis Ross",
  "Danilo Sousa",
  "Sophie Johnson",
  "Kelly Ng",
  "Jasper Eriksson",
  "Nadia Fontaine",
  "Owen Bianchi",
  "Priya Anand",
  "Callum Reyes",
  "Freya Lindqvist",
  "Marcus Aduba",
  "Isla Fitzgerald",
  "Tomasz Kowalski",
  "Amara Okafor",
  "Lukas Mercer",
  "Rosalind Chen",
  "Hugo Alvear",
  "Eliza Whitfield",
  "Dmitri Volkov",
  "Ingrid Solberg",
  "Miriam Castillo",
  "Felix Novak",
  "Saoirse Malone",
  "Anton Berg"
] as const;

function initials(name: string) {
  return name[0]?.toUpperCase() ?? "?";
}

function Marker({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <Flex
      align="center"
      justify="center"
      width="16px"
      height="16px"
      style={{
        color: "var(--teal-11)",
        backgroundColor: "var(--teal-a4)",
        borderRadius: "100%",
        ...style
      }}
    >
      {children}
    </Flex>
  );
}

interface ToDoItem {
  id: string;
  completed: boolean;
}

const todoContent: Record<string, ReactNode> = {
  a: (
    <span>
      Respond to comment{" "}
      <Link href="#" underline="hover" onClick={(e) => e.preventDefault()}>
        #384
      </Link>{" "}
      from Travis Ross
    </span>
  ),
  b: (
    <span>
      Invite{" "}
      <Link href="#" underline="hover" onClick={(e) => e.preventDefault()}>
        Acme Co.
      </Link>{" "}
      team to Slack
    </span>
  ),
  c: (
    <span>
      Create a report{" "}
      <Link href="#" underline="hover" onClick={(e) => e.preventDefault()}>
        requested
      </Link>{" "}
      by Danilo Sousa
    </span>
  ),
  d: (
    <span>
      Review support request{" "}
      <Link href="#" underline="hover" onClick={(e) => e.preventDefault()}>
        #85
      </Link>
    </span>
  ),
  e: <span>Close Q2 finances</span>,
  f: (
    <span>
      Review invoice{" "}
      <Link href="#" underline="hover" onClick={(e) => e.preventDefault()}>
        #3456
      </Link>
    </span>
  )
};

function ToDoList({
  items,
  onItemsChange
}: {
  items: ToDoItem[];
  onItemsChange: (items: ToDoItem[]) => void;
}) {
  return (
    <Flex gap="2" direction="column">
      {items.map((item) => (
        <Text as="label" size="2" key={item.id}>
          <Flex asChild gap="2">
            <span>
              <Checkbox
                checked={item.completed}
                onCheckedChange={(checked) => {
                  onItemsChange(
                    items.map((candidate) =>
                      candidate.id === item.id ? { ...candidate, completed: !!checked } : candidate
                    )
                  );
                }}
              />
              <Text
                color={item.completed ? "gray" : undefined}
                style={{ textDecoration: item.completed ? "line-through" : undefined }}
              >
                {todoContent[item.id]}
              </Text>
            </span>
          </Flex>
        </Text>
      ))}
    </Flex>
  );
}

const notificationGroups = [
  {
    title: "Comments",
    description:
      "Receive notifications when someone comments on your documents or mentions you.",
    push: true,
    email: true
  },
  {
    title: "Favorites",
    description: "Receive notifications when there is activity related to your favorited items.",
    push: true,
    email: true
  },
  {
    title: "New documents",
    description: "Receive notifications whenever people on your team create new documents.",
    push: true,
    email: true
  }
];

const pricingTiers = [
  {
    name: "Basic",
    seats: "3 team members",
    price: "$0",
    features: [
      "Expense tracking",
      "Invoicing",
      "Payment tracking",
      "Transaction recording",
      "Basic reports",
      "Email support"
    ],
    cta: "Downgrade",
    variant: "outline" as const
  },
  {
    name: "Growth",
    seats: "10 team members",
    price: "$49",
    features: [
      "Online payments",
      "Recurring invoices",
      "Bill management",
      "Inventory tracking",
      "Detailed reports",
      "Phone support"
    ],
    cta: "Go to Billing",
    variant: "outline" as const
  },
  {
    name: "Pro",
    seats: "Unlimited team members",
    price: "$99",
    features: [
      "Custom invoices",
      "Multi-business",
      "Team collaboration",
      "App integrations",
      "Advanced security",
      "Priority support"
    ],
    cta: "Upgrade",
    variant: "solid" as const
  }
];

const kpis = [
  { label: "MRR", value: "$350K", trend: "up", change: "3.2%", color: "teal" as const },
  { label: "OpEx", value: "$211K", trend: "up", change: "12.8%", color: "red" as const },
  { label: "CapEx", value: "$94K", trend: "down", change: "8.8%", color: "teal" as const },
  { label: "GPM", value: "44.6%", trend: "down", change: "1.2%", color: "red" as const },
  { label: "NPM", value: "9.1%", trend: null, change: "0.0%", color: "gray" as const },
  { label: "EBITDA", value: "$443K", trend: "up", change: "4.1%", color: "teal" as const },
  { label: "CAC", value: "$146", trend: "down", change: "11.0%", color: "teal" as const },
  { label: "LTV", value: "$1,849", trend: "up", change: "3%", color: "teal" as const },
  { label: "Churn", value: "12.4%", trend: "up", change: "1.1%", color: "red" as const }
];

const activity = [
  { person: people[5], action: <>Approved invoice <Link href="#" onClick={(e) => e.preventDefault()}>#3461</Link></>, time: "June 21, 11:34 am" },
  { person: people[7], action: <>Purchased <Link href="#" onClick={(e) => e.preventDefault()}>15 office chairs</Link> and <Link href="#" onClick={(e) => e.preventDefault()}>2 drum sets</Link></>, time: "June 21, 9:43 am" },
  { person: people[7], action: <>Responded to your comment <Link href="#" onClick={(e) => e.preventDefault()}>#7514</Link></>, time: "June 21, 9:41 am" },
  { person: people[27], action: <>Created <Link href="#" onClick={(e) => e.preventDefault()}>4 invoices</Link></>, time: "June 20, 4:55 pm" },
  { person: people[25], action: <>Updated client details for <Link href="#" onClick={(e) => e.preventDefault()}>Acme Co.</Link></>, time: "June 20, 3:30 pm" },
  { person: people[24], action: <>Created <Link href="#" onClick={(e) => e.preventDefault()}>a new report</Link></>, time: "June 20, 3:22 pm" },
  { person: people[24], action: <>Deleted report <Link href="#" onClick={(e) => e.preventDefault()}>#34</Link></>, time: "June 20, 1:00 pm" },
  { person: people[19], action: <>Joined the team</>, time: "June 20, 12:47 pm" }
];

export const Dashboard: Story = {
  render: () => {
    const [todo, setTodo] = useState<ToDoItem[]>([
      { id: "a", completed: false },
      { id: "b", completed: false },
      { id: "c", completed: false },
      { id: "d", completed: false },
      { id: "e", completed: true },
      { id: "f", completed: true }
    ]);
    const [activityPinned, setActivityPinned] = useState(true);
    const [financePinned, setFinancePinned] = useState(false);

    return (
      // Stacks to a single column below Radix's "xl" breakpoint, so the
      // dashboard doesn't force horizontal overflow on tablet/mobile
      // viewports; each column-stack still caps at its original width once
      // there's room for all three side by side.
      <Grid columns={{ initial: "1", xl: "3" }} gap="6" width="100%">
        {/* Column 1 */}
        <Flex gap="6" direction="column" width="100%" maxWidth="640px">
          <Card size="4">
            <Heading as="h3" size="6" trim="start" mb="2">
              Your team
            </Heading>
            <Text as="p" size="2" mb="5" color="gray">
              Invite and manage your team members.
            </Text>
            <Flex gap="3" mb="5">
              <Box flexGrow="1">
                <TextField.Root size="2" placeholder="Email address" />
              </Box>
              <Button size="2">Invite</Button>
            </Flex>
            <Flex direction="column">
              {[4, 2, 12, 20, 16].map((index, i, arr) => (
                <Box key={index}>
                  <Flex gap="4" align="center">
                    <Flex gap="3" align="center" width="200px">
                      <Avatar fallback={initials(people[index])} />
                      <Link href="#" size="2" wrap="nowrap" onClick={(e) => e.preventDefault()}>
                        {people[index]}
                      </Link>
                    </Flex>
                    <Text size="2" color="gray">
                      {people[index].toLowerCase().replace(" ", ".")}@example.com
                    </Text>
                    <Flex flexGrow="1" justify="end">
                      <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                          <IconButton color="gray" variant="ghost">
                            <DotsHorizontalIcon />
                          </IconButton>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content variant="soft">
                          <DropdownMenu.Item>View profile</DropdownMenu.Item>
                          <DropdownMenu.Item>Change role</DropdownMenu.Item>
                          <DropdownMenu.Separator />
                          <DropdownMenu.Item color="red">Remove</DropdownMenu.Item>
                        </DropdownMenu.Content>
                      </DropdownMenu.Root>
                    </Flex>
                  </Flex>
                  {i !== arr.length - 1 && (
                    <Box>
                      <Separator size="4" my="3" />
                    </Box>
                  )}
                </Box>
              ))}
            </Flex>
          </Card>

          <Card size="4">
            <Heading as="h3" size="6" trim="start" mb="2">
              Notifications
            </Heading>
            <Text as="p" size="2" mb="6" color="gray">
              Manage your notification settings.
            </Text>
            <Box>
              <Separator size="4" my="5" />
            </Box>
            <Flex direction="column">
              {notificationGroups.map((group, i) => (
                <Box key={group.title}>
                  <Flex gap="9" align="start" justify="between">
                    <Box>
                      <Heading as="h4" size="3" mb="1">
                        {group.title}
                      </Heading>
                      <Text as="p" size="2" color="gray">
                        {group.description}
                      </Text>
                    </Box>
                    <Flex direction="column" gap="4" mt="1">
                      <Flex asChild gap="2">
                        <Text as="label" size="2" weight="bold">
                          <Switch defaultChecked={group.push} />
                          <Text>Push</Text>
                        </Text>
                      </Flex>
                      <Flex asChild gap="2">
                        <Text as="label" size="2" weight="bold">
                          <Switch defaultChecked={group.email} />
                          <Text>Email</Text>
                        </Text>
                      </Flex>
                      <Flex asChild gap="2">
                        <Text as="label" size="2" weight="bold">
                          <Switch />
                          <Text>Slack</Text>
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  {i !== notificationGroups.length - 1 && (
                    <Box>
                      <Separator size="4" my="5" />
                    </Box>
                  )}
                </Box>
              ))}
            </Flex>
          </Card>

          <Card size="4">
            <Heading as="h3" size="6" trim="start" mb="2">
              Pricing
            </Heading>
            <Text as="p" size="2" mb="5" color="gray">
              No credit card required. Every plan includes a 30-day trial of all Pro features.
            </Text>
            <Grid columns="3" gap="6">
              {pricingTiers.map((tier) => (
                <Flex direction="column" key={tier.name}>
                  <Text weight="bold" size="5" mb="1">
                    {tier.name}
                  </Text>
                  <Text color="gray" size="2" mb="4">
                    {tier.seats}
                  </Text>
                  <Text weight="bold" size="5" mb="4">
                    {tier.price}
                    <Text size="5" weight="bold" style={{ color: "var(--gray-a8)" }}>
                      {" / mo"}
                    </Text>
                  </Text>
                  <Flex direction="column" gap="2">
                    {tier.features.map((feature) => (
                      <Flex gap="2" align="center" key={feature}>
                        <Marker>
                          <CheckIcon width="14" height="14" />
                        </Marker>
                        <Text size="2">{feature}</Text>
                      </Flex>
                    ))}
                    <Button mt="3" variant={tier.variant}>
                      {tier.cta}
                    </Button>
                  </Flex>
                </Flex>
              ))}
            </Grid>
          </Card>
        </Flex>

        {/* Column 2 */}
        <Flex gap="6" direction="column" width="100%" maxWidth="416px">
          <Card size="4">
            <Heading as="h3" size="6" trim="start" mb="5">
              Sign up
            </Heading>
            <Box mb="5">
              <Flex mb="1">
                <Text as="label" htmlFor="example-email-field" size="2" weight="bold">
                  Email address
                </Text>
              </Flex>
              <TextField.Root placeholder="Enter your email" id="example-email-field" />
            </Box>
            <Box mb="5" position="relative">
              <Flex align="baseline" justify="between" mb="1">
                <Text as="label" size="2" weight="bold" htmlFor="example-password-field">
                  Password
                </Text>
                <Link href="#" size="2" onClick={(e) => e.preventDefault()}>
                  Forgot password?
                </Link>
              </Flex>
              <TextField.Root placeholder="Enter your password" id="example-password-field" />
            </Box>
            <Flex mt="6" justify="end" gap="3">
              <Button variant="outline">Create an account</Button>
              <Button>Sign in</Button>
            </Flex>
          </Card>

          <Card size="4" style={{ position: "relative" }}>
            <Box position="absolute" top="0" right="0" m="3">
              <IconButton variant="ghost" color="gray" highContrast>
                <Cross2Icon width="20" height="20" />
              </IconButton>
            </Box>
            <Heading as="h3" size="6" trim="start" mb="2">
              Your company card
            </Heading>
            <Text as="p" size="2" mb="6" color="gray">
              View and manage your corporate card.
            </Text>
            <Box p="6" style={{ backgroundColor: "var(--gray-a3)", borderRadius: "var(--radius-4)" }}>
              <Theme appearance="dark" asChild>
                <Flex
                  direction="column"
                  justify="between"
                  height="168px"
                  style={
                    {
                      background: "linear-gradient(to top right, var(--accent-9), #E18BFF)",
                      boxShadow: "0 1px 20px -5px #7971E9AA",
                      borderRadius: "var(--radius-3)",
                      "--gray-12": "white"
                    } as CSSProperties
                  }
                >
                  <Text weight="medium" mt="3" mx="3" size="2">
                    Sophie Johnson
                  </Text>
                  <Box>
                    <Flex align="center" gap="3" mb="1" mx="3">
                      <Text size="2">
                        4929 3849<span> </span>5027 1846
                      </Text>
                      <IconButton variant="ghost" color="gray" size="1" highContrast>
                        <CopyIcon />
                      </IconButton>
                    </Flex>
                    <Flex gap="3" mb="2" mx="3">
                      <Text size="2">01 / 27</Text>
                      <Text size="2">999</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Theme>
            </Box>
            <Flex mt="6" justify="end" gap="3">
              <Button variant="outline" color="red">
                Freeze
              </Button>
              <Button>Done</Button>
            </Flex>
          </Card>

          <Card size="4" style={{ position: "relative" }}>
            <Box position="absolute" top="0" right="0" m="3">
              <IconButton variant="ghost" color="gray" highContrast>
                <Cross2Icon width="20" height="20" />
              </IconButton>
            </Box>
            <Flex gap="3" direction="column" align="center">
              <Marker style={{ height: 48, width: 48 }}>
                <CheckIcon width="32" height="32" />
              </Marker>
              <Heading as="h3" size="6" mb="2">
                Invoice paid
              </Heading>
            </Flex>
            <Text as="p" size="3" align="center" mb="5">
              You paid $17,975.30. A receipt copy was sent to <Strong>accounting@example.com</Strong>
            </Text>
            <Flex direction="column" gap="3" align="stretch">
              <Button>Next invoice</Button>
              <Button variant="outline">Done</Button>
            </Flex>
          </Card>

          <Card size="4" style={{ position: "relative" }}>
            <Box position="absolute" top="0" right="0" m="3">
              <IconButton variant="ghost" color="gray" highContrast>
                <Cross2Icon width="20" height="20" />
              </IconButton>
            </Box>
            <Heading as="h3" size="6" trim="start" mb="5">
              Invoice{" "}
              <Link href="#" weight="bold" onClick={(e) => e.preventDefault()}>
                #3463
              </Link>
            </Heading>
            <Grid columns="2" gapX="4" gapY="5">
              <Box>
                <Text as="div" size="2" mb="1" color="gray">
                  Issued
                </Text>
                <Text as="div" size="3" weight="bold">
                  June 21, 2023
                </Text>
              </Box>
              <Box>
                <Text as="div" size="2" mb="1" color="gray">
                  Due
                </Text>
                <Text as="div" size="3" weight="bold">
                  July 21, 2023
                </Text>
              </Box>
              <Box>
                <Text as="div" size="2" mb="1" color="gray">
                  To
                </Text>
                <Text as="div" size="3" mb="1" weight="bold">
                  Paradise Ventures
                </Text>
                <Text as="div" size="2">
                  742 Evergreen Terrace, Springfield, IL 62704
                </Text>
              </Box>
              <Box>
                <Text as="div" size="2" mb="1" color="gray">
                  From
                </Text>
                <Text as="div" size="3" mb="1" weight="bold">
                  Rogue Widgets
                </Text>
                <Text as="div" size="2">
                  1600 Baker Street NW, Washington, DC 20500
                </Text>
              </Box>
              <Flex direction="column" gap="1" gridColumn="1 / -1">
                <Flex justify="between">
                  <Text size="2" mb="1" color="gray">
                    Services
                  </Text>
                  <Text size="2" mb="1" color="gray">
                    Price
                  </Text>
                </Flex>
                <Flex justify="between">
                  <Text size="3" mb="1" weight="bold">
                    Branding
                  </Text>
                  <Text size="2">$20,000</Text>
                </Flex>
                <Flex justify="between">
                  <Text size="3" mb="1" weight="bold">
                    Marketing website
                  </Text>
                  <Text size="2">$17,500</Text>
                </Flex>
                <Box>
                  <Separator size="4" mt="1" mb="2" />
                </Box>
                <Flex justify="between">
                  <Text size="2">Total</Text>
                  <Text size="2">$38,500</Text>
                </Flex>
              </Flex>
            </Grid>
            <Flex mt="6" justify="end" gap="3">
              <Button variant="outline" color="red">
                Reject
              </Button>
              <Button>Approve</Button>
            </Flex>
          </Card>
        </Flex>

        {/* Column 3 */}
        <Flex gap="6" direction="column" width="100%" maxWidth="640px">
          <Card size="4" style={{ position: "relative" }}>
            <Heading as="h3" size="6" trim="start" mb="2">
              Financial performance
            </Heading>
            <Flex position="absolute" top="0" right="0" m="3">
              <IconButton variant="ghost" color="gray" highContrast style={{ margin: 0 }}>
                <OpenInNewWindowIcon width="20" height="20" />
              </IconButton>
              <IconButton
                variant={financePinned ? "soft" : "ghost"}
                color="gray"
                highContrast
                style={{ margin: 0 }}
                onClick={() => setFinancePinned((v) => !v)}
              >
                {financePinned ? (
                  <DrawingPinFilledIcon width="20" height="20" />
                ) : (
                  <DrawingPinIcon width="20" height="20" />
                )}
              </IconButton>
            </Flex>
            <Text as="p" size="2" mb="6" color="gray">
              Review your company&rsquo;s KPIs compared to the month before.
            </Text>
            <Grid columns="3" gap="5">
              {kpis.map((kpi) => (
                <Box key={kpi.label}>
                  <Flex gap="2" mb="2" align="center">
                    <Text size="2" color="gray">
                      {kpi.label}
                    </Text>
                    <Badge color={kpi.color} variant={kpi.trend ? "solid" : "surface"} radius="full">
                      {kpi.trend === "up" && <ArrowUpIcon width="12" height="12" style={{ marginLeft: -2 }} />}
                      {kpi.trend === "down" && <ArrowDownIcon width="12" height="12" style={{ marginLeft: -2 }} />}
                      {kpi.change}
                    </Badge>
                  </Flex>
                  <Text as="div" mb="2" size="8" weight="bold">
                    {kpi.value}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Card>

          <Card size="4" style={{ position: "relative" }}>
            <Heading as="h3" size="6" trim="start" mb="2">
              Recent activity
            </Heading>
            <Flex position="absolute" top="0" right="0" m="3">
              <IconButton variant="ghost" color="gray" highContrast style={{ margin: 0 }}>
                <OpenInNewWindowIcon width="20" height="20" />
              </IconButton>
              <IconButton
                variant={activityPinned ? "soft" : "ghost"}
                color="gray"
                highContrast
                style={{ margin: 0 }}
                onClick={() => setActivityPinned((v) => !v)}
              >
                {activityPinned ? (
                  <DrawingPinFilledIcon width="20" height="20" />
                ) : (
                  <DrawingPinIcon width="20" height="20" />
                )}
              </IconButton>
            </Flex>
            <Text as="p" size="2" mb="7" color="gray">
              Review what has happened over the past days.
            </Text>
            <Flex direction="column">
              {activity.map((entry, i) => (
                <Box key={i}>
                  <Flex direction="column" gap="3" my={i === 0 ? undefined : "5"} mb={i === 0 ? "5" : undefined}>
                    <Flex justify="between" align="center">
                      <Flex gap="3" align="center">
                        <Avatar size="3" fallback={initials(entry.person)} />
                        <Box>
                          <Text as="div" size="2" weight="bold">
                            {entry.person}
                          </Text>
                          <Text as="div" size="2" color="gray">
                            {entry.action}
                          </Text>
                        </Box>
                      </Flex>
                      <Text size="2" color="gray">
                        {entry.time}
                      </Text>
                    </Flex>
                  </Flex>
                  {i !== activity.length - 1 && (
                    <Box>
                      <Separator size="4" />
                    </Box>
                  )}
                </Box>
              ))}
            </Flex>
          </Card>

          <Card size="4" style={{ position: "relative" }}>
            <Heading as="h3" size="6" trim="start" mb="2">
              To-do
            </Heading>
            <Flex gap="3" position="absolute" top="0" right="0" m="3">
              <IconButton variant="ghost" color="gray" highContrast>
                <Share2Icon width="20" height="20" />
              </IconButton>
              <IconButton variant="ghost" color="gray" highContrast>
                <PlusIcon width="20" height="20" />
              </IconButton>
            </Flex>
            <Text as="p" size="2" mb="5" color="gray">
              Stay on top of your daily tasks.
            </Text>
            <ToDoList items={todo} onItemsChange={setTodo} />
          </Card>
        </Flex>
      </Grid>
    );
  }
};
