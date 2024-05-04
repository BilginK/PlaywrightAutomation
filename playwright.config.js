// @ts-check
const {devices } = require('@playwright/test');

const config ={
  testDir: './tests',

  //Maximum time one test can run for
  timeOut: 30 * 1000,
  expect:{
    timeOut:5000
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    
    browserName : 'chromium',
    headless : false,
    viewport: { width: 1920, height: 1080 },
    fullPage : true,
    screenshot : 'on',
    trace :'retain-on-failure', //off, on
  }
};

module.exports = config;
  