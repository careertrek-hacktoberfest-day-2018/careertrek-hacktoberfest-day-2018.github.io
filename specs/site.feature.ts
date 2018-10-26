import { Browser, launch, Page, ElementHandle } from 'puppeteer';
import { BeforeAll, AfterAll, When, Then } from 'cucumber';
import { expect } from 'chai';

let browser: Browser = null;
let page: Page = null;

BeforeAll({ timeout: 100 * 1000 }, async () => {
  browser = await launch({
    executablePath: process.env.CHROME_BIN || null,
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--headless',
        '--disable-gpu',
    ],
  });
  page = await browser.newPage();
  page.waitFor(2000);
});

AfterAll({ timeout: 100 * 1000 }, async () => await browser.close());

When(/^I visit homepage$/, async function() {
  console.log('NODE_ENV: ' + process.env.NODE_ENV);
  await page.goto(
    process.env.NODE_ENV === 'production' ? 'http://localhost:9000' : 'http://0.0.0.0:8000'
  );
});

Then(/^Site title name is "(.*?)"$/, async expectedSiteTitleName => {
  const body: ElementHandle<Element> = await page.waitForSelector('body');
  const siteTitleName: String = await (await body.getProperty(
    'innerText',
  )).jsonValue();

  expect(siteTitleName).to.have.string(expectedSiteTitleName);
});
