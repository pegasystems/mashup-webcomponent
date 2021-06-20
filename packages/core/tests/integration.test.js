import puppeteer from 'puppeteer';

const { AxePuppeteer } = require('axe-puppeteer');

const bDebug = false;
const bHeadless = true;
const dir = process.cwd();
const URL = `file://${dir}/docs/index.html`;
// const URL = 'https://pegasystems.github.io/mashup-webcomponent/index.html';
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
      expect(title).toBe('Pega Mashup Web Component');
    }, timeout);

    it('Check if the worklist correctly renders', async () => {
      if (bDebug) {
        console.log(`generate screenshot test${iTestCount}.jpg`);
        await page.screenshot({
          path: `./test-results/test${iTestCount++}.jpg`,
          fullpage: true,
          type: 'jpeg',
        });
      }
      const title = await page.$eval('pega-mashup-light h2', (el) => el.innerText);
      expect(title).toContain('My worklist');
      const cases = await page.evaluate(() => {
        const caseslist = Array.from(document.querySelectorAll('pega-mashup-light table button'));
        return caseslist.map((el) => el.getAttribute('data-id'));
      });
      console.log(`Number of opened cases ${cases.length}`);
      if (cases.length > 0) {
        console.log(`opening case ${cases[0]}`);
        await page.click('pega-mashup-light table button:nth-child(1)', { waitUntil: 'networkidle0' });
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
      }
    }, timeout);

    it('Create a new case', async () => {
      await page.evaluate(() => {
        document.querySelector('#show-settings').click();
      });
      await page.waitForSelector('#action', { visible: true });
      await page.select('#action', 'createNewWork');
      await page.waitForSelector('#casetype', { visible: true });
      await page.evaluate(() => {
        document.querySelector('#casetype').value = '';
      });
      await page.type('#casetype', 'OPGO8L-CarInsur-Work-CarInsuranceQuote');
      await page.click('#submit', { waitUntil: 'networkidle0' });
      await page.evaluate(() => {
        document.querySelector('#show-settings').click();
      });
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
      const title = await page.$eval('pega-mashup-light h2', (el) => el.innerText);
      expect(title).toContain('Car Insurance quote (C-');
      await page.type('#case-data #Obj-0-2', 'john');
      await page.type('#case-data #Obj-0-3', 'smith');
      if (bDebug) {
        console.log(`generate screenshot test${iTestCount}.jpg`);
        await page.screenshot({
          path: `./test-results/test${iTestCount++}.jpg`,
          fullpage: true,
          type: 'jpeg',
        });
      }
      const results = await new AxePuppeteer(page).analyze();
      if (results.violations.length > 0) {
        console.log('Axe violations:');
        for (let i = 0; i < results.violations.length; i++) {
          console.log(results.violations[i]);
        }
      } else {
        console.log('All accessibility tests have passed!');
      }
      await page.click('.action-button-area > .Strong', { waitUntil: 'networkidle0' });
      await page.waitForSelector('#case-data', { visible: true });
      await page.waitForTimeout(1000);
    }, timeout);

    it('Process the case - step1', async () => {
      let title = await page.$eval('pega-mashup-light h3', (el) => el.innerText);
      expect(title).toBe('Personal details');
      await page.type('#case-data #Obj-0-0-0-2', '03/03/2000');
      await page.type('#case-data #Obj-0-0-0-5', '567892345');
      await page.click("pega-mashup-light button[data-submit='submit']", { waitUntil: 'networkidle0' });
      await page.waitForTimeout(1500);
      await page.waitForSelector('#case-data', { visible: true });

      title = await page.$eval('pega-mashup-light h3', (el) => el.innerText);
      expect(title).toBe('Drivers');
      await page.click("pega-mashup-light button[data-submit='submit']", { waitUntil: 'networkidle0' });
      await page.waitForTimeout(1500);
      await page.waitForSelector('#case-data', { visible: true });

      title = await page.$eval('pega-mashup-light h3', (el) => el.innerText);
      expect(title).toBe('Cars');
      await page.type('#case-data #Obj-0-row0-0-0-0', 'Omega');
      await page.click("pega-mashup-light button[data-submit='submit']", { waitUntil: 'networkidle0' });
      await page.waitForTimeout(1500);
      await page.waitForSelector('#case-data', { visible: true });

      title = await page.$eval('pega-mashup-light h3', (el) => el.innerText);
      expect(title).toBe('Select coverage');
      await page.click("pega-mashup-light button[data-submit='submit']", { waitUntil: 'networkidle0' });
      await page.waitForTimeout(1500);
      await page.waitForSelector('#case-data', { visible: true });

      title = await page.$eval('pega-mashup-light h3', (el) => el.innerText);
      expect(title).toBe('Review');
      await page.click("pega-mashup-light button[data-submit='submit']", { waitUntil: 'networkidle0' });
      await page.waitForTimeout(1500);
      await page.waitForSelector('#case-data', { visible: true });

      title = await page.$eval('pega-mashup-light h3', (el) => el.innerText);
      expect(title).toBe('Case information');
      if (bDebug) {
        console.log(`generate screenshot test${iTestCount}.jpg`);
        await page.screenshot({
          path: `./test-results/test${iTestCount++}.jpg`,
          fullpage: true,
          type: 'jpeg',
        });
      }
    }, timeout);

    it('Check if the shadow DOM component correctly renders', async () => {
      await page.evaluate(() => {
        document.querySelector('#show-settings').click();
      });
      await page.waitForSelector('#action', { visible: true });
      await page.select('#action', 'workList');
      await page.evaluate(() => {
        document.getElementById('switch-shadowDOM').click();
      });
      await page.click('#submit', { waitUntil: 'networkidle0' });
      await page.evaluate(() => {
        document.querySelector('#show-settings').click();
      });
      if (bDebug) {
        console.log(`generate screenshot test${iTestCount}.jpg`);
        await page.screenshot({
          path: `./test-results/test${iTestCount++}.jpg`,
          fullpage: true,
          type: 'jpeg',
        });
      }
      const title = await page.evaluate(() => document.querySelector('pega-mashup').shadowRoot.querySelector('h2').innerText);
      expect(title).toContain('My worklist');
    }, timeout);
  },
  timeout,
);
