import type { Preview } from "@storybook/react-vite";
import React from "react";
import { ThemeProvider } from "@oneds/ui";
import "@oneds/ui/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },

  globalTypes: {
    appearance: {
      description: "Global theme appearance for components",
      toolbar: {
        title: "Appearance",
        icon: "paintbrush",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" }
        ],
        dynamicTitle: true
      }
    },
    persona: {
      description: "Persona mode: base (shared foundation), personaB2B, personaB2C",
      toolbar: {
        title: "Persona",
        icon: "user",
        items: [
          { value: "base", title: "Base" },
          { value: "personaB2B", title: "Persona B2B" },
          { value: "personaB2C", title: "Persona B2C" }
        ],
        dynamicTitle: true
      }
    }
  },

  initialGlobals: { appearance: "light", persona: "base" },

  decorators: [
    (Story, context) => (
      <ThemeProvider appearance={context.globals.appearance} persona={context.globals.persona}>
        <div style={{ padding: 24 }}>
          <Story />
        </div>
      </ThemeProvider>
    )
  ]
};

export default preview;
