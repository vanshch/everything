const { Builder, By, Browser } = require("selenium-webdriver");
const fs = require("fs");

async function simpleSearch() {
  // Launch a new Chrome browser session
  const driver = await new Builder().forBrowser(Browser.CHROME).build();
  let j = 0;
  // Making a set to store unique stock links
  const stock_links = new Set();

  // Navigate to the page

  // Getting the names of the stocks
  await driver.quit()
}

simpleSearch();
