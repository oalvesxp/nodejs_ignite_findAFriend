import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    dir: '__test__/unit/',
    environmentMatchGlobs: [
      ['__test__/integration/integration/**/*.spec.ts', 'prisma'],
    ],
    globals: true,
  },
})
