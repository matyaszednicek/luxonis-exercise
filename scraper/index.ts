import { writeFile } from 'fs';
import { parse } from 'json2csv';
import puppeteer, { Browser, Page } from 'puppeteer';

interface FlatInfo {
  title: string;
  locality: string;
  price: string;
  url: string;
  image: string;
}

const DEFAULT_URL = 'https://www.sreality.cz/en/search/for-sale/apartments';
const PAGES_TO_SCRAPE = 25;
const JSON_FILE_NAME = 'data.json';
const CSV_FILE_NAME = 'flats.csv';

const scrapeFlatsInfo = async (page: Page) => {
  const flats = await page.evaluate(() => {
    const flatsElements: Element[] = Array.from(document.querySelectorAll('.property'));

    const flats: FlatInfo[] = flatsElements.map((flatElement) => {
      const title = flatElement.querySelector('span.name').textContent.replace(/\u00A0/g, ' ');
      const locality = flatElement.querySelector('span.locality').textContent.replace(/\u00A0/g, ' ');
      const price = flatElement.querySelector('span.norm-price').textContent.replace(/\u00A0/g, ' ');
      const url = `https://sreality.cz${flatElement.querySelector('a.title').getAttribute('href')}`;
      const image = flatElement.querySelector('preact > div > div > a > img').getAttribute('src');

      return { title, locality, price, url, image };
    });

    return flats;
  });

  return flats;
};

const getFormattedUrl = (pageNum: number) => {
  const url = new URL(DEFAULT_URL);
  url.searchParams.append('page', pageNum.toString());

  return url;
};

const main = async () => {
  const browser: Browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  let flatsData: FlatInfo[] = [];

  for (let pageNum = 1; pageNum <= PAGES_TO_SCRAPE; pageNum++) {
    const url = getFormattedUrl(pageNum);
    await page.goto(url.toString(), { waitUntil: 'networkidle0' });

    const flatsInfoToAdd = await scrapeFlatsInfo(page);
    flatsData = flatsData.concat(flatsInfoToAdd);
  }

  await browser.close();

  writeFile(JSON_FILE_NAME, JSON.stringify({ flats: flatsData }), (error: NodeJS.ErrnoException) => {
    if (error) throw error;
  });

  writeFile(CSV_FILE_NAME, parse(flatsData), (error: NodeJS.ErrnoException) => {
    if (error) throw error;
  });
};

main();
