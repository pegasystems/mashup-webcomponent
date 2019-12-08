const { AxePuppeteer } = require('axe-puppeteer');
import puppeteer from 'puppeteer';

const bDebug = false;
let iTestCount = 1;
const dir = process.cwd();
const URL = `file://${dir}/docs/index.html`;
//const URL = 'https://pegasystems.github.io/mashup-webcomponent/index.html';
let browser;
let page;

describe('Integration testing of the Mashup Web Component', () => {
  beforeEach(() => {
    jest.setTimeout(10000);
  });

  test(
    'Open the main test page',
    async () => {
      browser = await puppeteer.launch({
        args: ['--disable-web-security'],
        headless: bDebug ? false : true,
        devtools: bDebug ? true : false,
      });
      page = await browser.newPage();
      if (bDebug) {
        page.on('console', (msg) => console.log(msg.text()));
      }
      await page.setViewport({ width: 1400, height: 1200 });
      await page.goto(URL, { waitUntil: 'networkidle0' });
      const title = await page.title();
      expect(title).toBe('Pega Mashup Web Component');
    },
    process.env.PAGETIMEOUT,
  );

  test(
    'Check if the worklist correctly renders',
    async () => {
      /* Switch the case type to create */
      await page.evaluate(function() {
        document.querySelector('#casetype').value = '';
      });
      await page.type('#casetype', 'Eas-BobsServ-Work-TestCase');
      await page.click('#update', { waitUntil: 'networkidle0' });
      await page.waitFor(2000);
      const title = await page.$eval('pega-mashup-light h2', (el) => el.innerText);
      expect(title).toContain('My worklist');

      const cases = await page.evaluate(() => {
        const caseslist = Array.from(document.querySelectorAll('pega-mashup-light table button'));
        return caseslist.map((el) => el.getAttribute('data-id'));
      });
      console.log('Number of opened cases ' + cases.length);
      if (cases.length > 0) {
        console.log('opening case ' + cases[0]);
        await page.click('pega-mashup-light table button:nth-child(1)');
        await page.waitForSelector('#case-data');
        await page.waitFor(2000);
        await page.screenshot({
          path: `./test-results/test${iTestCount++}.jpg`,
          fullpage: true,
          type: 'jpeg',
        });
        await page.click("pega-mashup-light button[data-submit='submit']");
      }

      await page.screenshot({
        path: `./test-results/test${iTestCount++}.jpg`,
        fullpage: true,
        type: 'jpeg',
      });
    },
    process.env.PAGETIMEOUT,
  );

  test(
    'Create a new case',
    async () => {
      await page.click('#create', { waitUntil: 'networkidle0' });
      await page.waitFor(1000);
      await page.waitForSelector('#case-data');
      const title = await page.$eval('pega-mashup-light h2', (el) => el.innerText);
      expect(title).toBe('New');

      await page.click('.action-button-area > .Strong', { waitUntil: 'networkidle0' });
      await page.waitForSelector('#case-data');
      await page.waitFor(1000);

      const results = await new AxePuppeteer(page).analyze();
      if (results.violations.length > 0) {
        console.log('Axe violations:');
        for (let i = 0; i < results.violations.length; i++) {
          console.log(results.violations[i]);
        }
      } else {
        console.log('All accessibility tests have passed!');
      }
    },
    process.env.PAGETIMEOUT,
  );

  test(
    'Process the case',
    async () => {
      await page.type('#case-data #Obj-0-3', 'this is a test');
      await page.click('#case-data #rb-Obj-0-4-0');
      await page.type('#case-data #Obj-0-5', '22');
      await page.type('#case-data #Obj-0-6', '150');
      await page.type('#case-data #Obj-0-8', '12344');
      await page.waitFor(1000);
      await page.type('#case-data #Obj-0-9', '02/02/2020');
      await page.click("pega-mashup-light button[data-submit='submit']");
      await page.screenshot({
        path: `./test-results/test${iTestCount++}.jpg`,
        fullpage: true,
        type: 'jpeg',
      });
      await page.waitFor(1000);
    },
    process.env.PAGETIMEOUT,
  );

  test(
    'Process the case',
    async () => {
      await page.click("pega-mashup-light button[data-submit='submit']");
      await page.screenshot({
        path: `./test-results/test${iTestCount++}.jpg`,
        fullpage: true,
        type: 'jpeg',
      });
      await page.waitFor(1000);
      await page.click("pega-mashup-light button[data-submit='submit']");
      await page.screenshot({
        path: `./test-results/test${iTestCount++}.jpg`,
        fullpage: true,
        type: 'jpeg',
      });
    },
    process.env.PAGETIMEOUT,
  );

  test(
    'Check if the shadow DOM component correctly renders',
    async () => {
      await page.evaluate(() => {
        document.getElementById('switch-shadowDOM').click();
      });

      await page.click('#update');
      const title = await page.evaluate(function() {
        return document.querySelector('pega-mashup').shadowRoot.querySelector('h2').innerText;
      });
      expect(title).toContain('My worklist');

      await page.screenshot({
        path: `./test-results/test${iTestCount++}.jpg`,
        fullpage: true,
        type: 'jpeg',
      });
    },
    process.env.PAGETIMEOUT,
  );

  test(
    'Close the browser when done',
    async () => {
      if (bDebug) await browser.waitForTarget(() => false);
      await page.close();
      await browser.close();
    },
    process.env.PAGETIMEOUT,
  );
});
