import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  plugins: ["prettier-plugin-astro"],
  overrides: [{
    files: "*.astro",
    options: {
      parser: "astro"
    }
  }]
});