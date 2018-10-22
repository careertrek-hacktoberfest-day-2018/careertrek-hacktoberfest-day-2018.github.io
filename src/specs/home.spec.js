const puppeteer = require('puppeteer');
const expect = require('chai').expect;
let browser, page;

beforeScenario(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterScenario(async () => await browser.close());

step('Open the home page', async function() {
  await page.goto(
    `http://localhost:${process.env.NODE_ENV === 'production' ? 9000 : 8000}/`,
  );
});

step('<location> should show up in the home page', async location => {
  await page.waitFor('body');
  const body = await page.$eval('body', e => e.innerText);
  expect(body).to.have.string(location);
});

step('<word> should not show up in the home page', async word => {
  await page.waitFor('body');
  const body = await page.$eval('body', e => e.innerText);
  expect(body).to.not.have.string(word);
});
