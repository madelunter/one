import type { Persona, PersonaThemeConfig } from "./types";

const base: PersonaThemeConfig = {
  accentColor: "blue",
  grayColor: "gray",
  radius: "medium",
  scaling: "100%",
  controlPaddingY: "12px",
  tableRowHeight: "40px",
  motionStandard: "200ms",
};

// Only the values that differ from `base` are listed here — everything else
// inherits, mirroring the Extended Collections "deltas only" model this is
// built from (see product-development-lifecycle-framework.md, Section 15.1).
const deltas: Record<Exclude<Persona, "base">, Partial<PersonaThemeConfig>> = {
  personaB2B: {
    accentColor: "green",
    radius: "small",
    scaling: "95%",
    controlPaddingY: "8px",
    tableRowHeight: "32px",
    motionStandard: "100ms",
  },
  personaB2C: {
    accentColor: "orange",
    radius: "large",
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
