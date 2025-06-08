import {test,expect, chromium} from '@playwright/test';

test('test1', async ({ page }) => {

    //launch browser
    const browser = await chromium.launch();

    //inside browser create a context
    const context = await browser.newContext();

    //create pages inside context
    const page1 = await context.newPage();
    const page2 = await context.newPage();

    const allpages = await context.pages();
    console.log("No of pages:" +allpages.length);

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://orangehrm.com/")
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")    



})