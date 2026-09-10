import { Theme, type ThemeProps } from "@radix-ui/themes";
import type { CSSProperties } from "react";
import { personaThemeConfig } from "./persona/config";
import type { Persona } from "./persona/types";

export interface OneDsThemeProps extends ThemeProps {
  /**
   * base is the shared foundation; personaB2B/personaB2C override it.
   * Resolves a preset accentColor/grayColor/radius/scaling (passed through
   * to Radix's own <Theme> props) plus a set of component tokens Radix
   * doesn't cover (--control-padding-y, --table-row-height,
   * --motion-standard). Explicit accentColor/grayColor/radius/scaling props
   * below still win over the persona preset — that's the governed
   * "override" escape hatch, not the default path.
   */
  persona?: Persona;
}

export function ThemeProvider({
  appearance = "light",
  persona = "base",
  accentColor,
  grayColor,
  radius,
  scaling,
  style,
  ...props
}: OneDsThemeProps) {
  const config = personaThemeConfig[persona];

  return (
    <Theme
      appearance={appearance}
      accentColor={accentColor ?? config.accentColor}
      grayColor={grayColor ?? config.grayColor}
      radius={radius ?? config.radius}
      scaling={scaling ?? config.scaling}
      data-persona={persona}
      style={
        {
          "--control-padding-y": config.controlPaddingY,
          "--table-row-height": config.tableRowHeight,
          "--motion-standard": config.motionStandard,
          ...style,
        } as CSSProperties
      }
      {...props}
    />
  );
}
