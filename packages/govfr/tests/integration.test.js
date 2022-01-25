import puppeteer from 'puppeteer';

const { AxePuppeteer } = require('axe-puppeteer');

const bDebug = false;
const bHeadless = true;
const dir = process.cwd();
const URL = `file://${dir}/docs/demos/frgov/main.html`;
const timeout = 20000;
let iTestCount = 1;

describe(
  '/ (Home Page)',
  () => {
    let page;
    let browser;

    beforeAll(async () => {
      browser = await puppeteer.launch({
        args: ['--disable-web-security'],
        headless: bHeadless,
        devtools: bDebug,
        slowMo: 10,
      });
      page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 800, deviceScaleFactor: 1 });
      await page.goto(URL, { waitUntil: 'networkidle0' });
    }, timeout);

    afterAll(async () => {
      await page.close();
      await browser.close();
    });

    it('should load without error', async () => {
      const title = await page.title();
      expect(title).toBe('Pega GovFR');
    }, timeout);

    it('Check if the mashup loads', async () => {
      if (bDebug) {
        console.log(`generate screenshot test${iTestCount}.jpg`);
        await page.screenshot({
          path: `./test-results/test${iTestCount++}.jpg`,
          fullpage: true,
          type: 'jpeg',
        });
      }
      await page.click('.guide-renovation__content a', { waitUntil: 'networkidle0' });
      await page.waitForSelector('#case-data', { visible: true });
      await page.waitForFunction(() => !document.querySelector('.loading'), { polling: 'mutation' });
      if (bDebug) {
        console.log(`generate screenshot test${iTestCount}.jpg`);
        await page.screenshot({
          path: `./test-results/test${iTestCount++}.jpg`,
          fullpage: true,
          type: 'jpeg',
        });
      }
    }, timeout);
  },
  timeout,
);
