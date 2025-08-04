import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 600_000,
  testDir: './src',
  testMatch: 'playwright-script.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 40,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'desktop-chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
