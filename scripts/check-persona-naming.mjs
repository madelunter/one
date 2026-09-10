#!/usr/bin/env node
// Operationalizes product-development-lifecycle-framework.md Section 14's
// warning sign: components must stay persona-agnostic (Button + persona
// prop), never forked as BaseButton/PersonaB2BButton/PersonaB2CModal etc.
import { readdirSync } from "node:fs";

const FORBIDDEN = /^(Base|PersonaB2B|PersonaB2C)[A-Z]/;
const ROOTS = ["packages/ui/src/components", "packages/ui/src/primitives"];

const violations = [];

for (const root of ROOTS) {
  let entries;
  try {
    entries = readdirSync(root);
  } catch {
    continue;
  }
  for (const entry of entries) {
    if (FORBIDDEN.test(entry)) {
      violations.push(`${root}/${entry}`);
    }
  }
}

if (violations.length > 0) {
  console.error(
    "Persona-prefixed component names found — components must stay persona-agnostic " +
      "(shared component + `persona` prop, not a per-persona fork). " +
      "See product-development-lifecycle-framework.md, Section 7.5 and Section 14:"
  );
  for (const violation of violations) {
    console.error(`  ${violation}`);
  }
  process.exit(1);
}

console.log("No persona-prefixed component names found.");
