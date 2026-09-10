import type { Persona, PersonaThemeConfig } from "./types";

// accentColor is intentionally identical across every persona (brand blue,
// #0B49EA via custom-colors.css) — personas vary density/radius/scaling, not
// brand color.
const base: PersonaThemeConfig = {
  accentColor: "blue",
  grayColor: "gray",
  radius: "medium",
  scaling: "100%",
  panelBackground: "translucent",
  controlPaddingY: "12px",
  tableRowHeight: "40px",
  motionStandard: "200ms",
};

// Only the values that differ from `base` are listed here — everything else
// inherits, mirroring the Extended Collections "deltas only" model this is
// built from (see product-development-lifecycle-framework.md, Section 15.1).
const deltas: Record<Exclude<Persona, "base">, Partial<PersonaThemeConfig>> = {
  personaB2B: {
    // Compact density, square corners: <Theme panelBackground="solid" radius="none" scaling="90%">
    radius: "none",
    scaling: "90%",
    panelBackground: "solid",
    controlPaddingY: "8px",
    tableRowHeight: "32px",
    motionStandard: "100ms",
  },
  personaB2C: {
    // Spaced density, rounded corners: <Theme radius="large" scaling="110%">
    radius: "large",
    scaling: "110%",
    controlPaddingY: "16px",
    tableRowHeight: "48px",
    motionStandard: "350ms",
  },
};

export const personaThemeConfig: Record<Persona, PersonaThemeConfig> = {
  base,
  personaB2B: { ...base, ...deltas.personaB2B },
  personaB2C: { ...base, ...deltas.personaB2C },
};
