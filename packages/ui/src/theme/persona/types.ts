import type { ThemeProps } from "@radix-ui/themes";

type ThemeAccentColor = NonNullable<ThemeProps["accentColor"]>;
type ThemeGrayColor = NonNullable<ThemeProps["grayColor"]>;
type ThemeRadius = NonNullable<ThemeProps["radius"]>;
type ThemeScaling = NonNullable<ThemeProps["scaling"]>;
type ThemePanelBackground = NonNullable<ThemeProps["panelBackground"]>;

/**
 * base is the shared foundation every other persona inherits from.
 * personaB2B: dense, execution-oriented. personaB2C: friendly, self-service.
 */
export type Persona = "base" | "personaB2B" | "personaB2C";

export const personas: readonly Persona[] = ["base", "personaB2B", "personaB2C"];

export interface PersonaThemeConfig {
  /** Maps to Radix Themes' own `accentColor` prop — color.action.primary */
  accentColor: ThemeAccentColor;
  /** Maps to Radix Themes' own `grayColor` prop */
  grayColor: ThemeGrayColor;
  /** Maps to Radix Themes' own `radius` prop — radius.control */
  radius: ThemeRadius;
  /** Maps to Radix Themes' own `scaling` prop */
  scaling: ThemeScaling;
  /** Maps to Radix Themes' own `panelBackground` prop */
  panelBackground: ThemePanelBackground;
  /** Not covered by Radix Themes — exposed as --control-padding-y */
  controlPaddingY: string;
  /** Not covered by Radix Themes — exposed as --table-row-height */
  tableRowHeight: string;
  /** Not covered by Radix Themes — exposed as --motion-standard */
  motionStandard: string;
}
