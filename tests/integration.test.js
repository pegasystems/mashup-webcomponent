import puppeteer from 'puppeteer';

const dir = process.cwd();
const URL = `file://${dir}/docs/index.html`;
//const URL = 'https://pegasystems.github.io/mashup-webcomponent/index.html';
let browser;
let page;

describe('Integration testing of the Mashup Web Component', () => {
  test(
    'Open the main test page',
    async () => {
      browser = await puppeteer.launch({
        args: ['--disable-web-security'],
        headless: true,
      });
      page = await browser.newPage();

      await page.goto(URL, { waitUntil: 'domcontentloaded' });

      const title = await page.title();
      expect(title).toBe('Pega Mashup Web Component');
    },
    process.env.PAGETIMEOUT,
  );

  test(
    'Take screenshot of home page',
    async () => {
      await page.setViewport({ width: 1920, height: 1080 });
      await page.screenshot({
        path: './test-results/home.jpg',
        fullpage: true,
        type: 'jpeg',
      });
    },
    process.env.PAGETIMEOUT,
  );

  test(
    'Close the browser when done',
    async () => {
      browser.close();
    },
    process.env.PAGETIMEOUT,
  );
});
