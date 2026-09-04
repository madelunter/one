import { Theme, type ThemeProps } from "@radix-ui/themes";

export function ThemeProvider({
  appearance = "light",
  accentColor = "blue",
  grayColor = "gray",
  radius = "medium",
  scaling = "100%",
  ...props
}: ThemeProps) {
  return (
    <Theme
      appearance={appearance}
      accentColor={accentColor}
      grayColor={grayColor}
      radius={radius}
      scaling={scaling}
      {...props}
    />
  );
}
