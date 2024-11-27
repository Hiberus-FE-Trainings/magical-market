/// <reference types="vitest" />
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

// we need to create this file because at this time in Remix v2.8.1 vitest doesnt work well in the vite.config.ts
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: "jsdom",
    setupFiles: ["./test/setup-test-env.ts"],
  },
});
