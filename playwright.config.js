module.exports = {
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: 'https://dev.profteam.su',
    headless: true,
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
  ],
};