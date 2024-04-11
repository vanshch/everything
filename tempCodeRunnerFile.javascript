// function scheduleLongIntervalCheck(callback, intervalInMonths) {
//   if (!callback || typeof callback !== 'function' || !Number.isInteger(intervalInMonths) || intervalInMonths <= 0) {
//     throw new Error('Invalid arguments: callback must be a function and intervalInMonths must be a positive integer');
//   }

//   const msInMonth = 1000 * 60 * 60 * 24 * 30; // Approximate milliseconds in a month (adjust for leap years if needed)
//   const intervalInMs = msInMonth * intervalInMonths;

//   let timer = null;

//   function runCheck() {
//     callback();
//     clearTimeout(timer);
//     timer = setTimeout(runCheck, intervalInMs);
//   }

//   // Start the initial check
//   timer = setTimeout(runCheck, intervalInMs);

//   return function stopChecking() {
//     clearTimeout(timer);
//     timer = null;
//   };
// }

// main function goes here
// const myCallback = () => {
//     console.log('Checking for something... (every 3 months)');
//     // Your actual logic here (e.g., database queries, API calls)
// };
// // scheduleLongIntervalCheck(myCallback, 3)

// const stopChecking = scheduleLongIntervalCheck(myCallback, 3);

// // You can later stop the checks if needed
// // stopChecking();
const { Builder, By } = require('webdriverio');

async function simpleScript() {
  // Replace with the URL of the website you want to visit
  const targetUrl = "https://www.google.com";

  //suppose there is an array of target url's
  // Launch a new Chrome browser session
  const driver = await Builder.forBrowser('chrome').launch();

  // Navigate to the target website
  await driver.url(targetUrl);

  // Find the element with ID "search-box"
  const searchBox = await driver.$('#search-box');

  // You can interact with the element here (optional)
  // For example, enter text into a search box
  await searchBox.setValue('Selenium tutorial');

  // Print the text of the element (optional)
  const elementText = await searchBox.getText();
  console.log('Element text:', elementText);

  // Close the browser window
  await driver.quit();
}

simpleScript();
