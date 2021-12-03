import { exportAllDeclaration } from "@babel/types";
import puppetteer from "puppeteer";

jest.setTimeout(60000); // default puppeteer timeout
describe("test", () => {
  let browser = null;
  let page = null;
  const baseUrl = "http://localhost:8888";

  beforeAll(async () => {
    browser = await puppetteer.launch();
    /* {//во всем виновата безголовость
      headless: false,
      slowMo: 100,
      devtools: true,
    }); */

    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("Открытие страницы", async () => {
    await page.goto(baseUrl);
  });

  test("start__btn onClick", async () => {
    await page.goto(baseUrl);

    const button = await page.$(".start__btn");
    button.click().catch((e) => e);
    await page.waitForSelector(".modal-active");
  });
});
