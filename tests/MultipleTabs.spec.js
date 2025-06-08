import {test,expect} from '@playwright/test';

test('working with multiple tabs', async ({ browser }) => {
     const context= await browser.newContext()
     const page = await context.newPage();

     await page.goto("https://freelance-learn-automation.vercel.app/login")

     const [newPage]= await Promise.all
     (
        [
            context.waitForEvent('page'),
            page.locator("(//a[contains(@href,'facebook')])[1]").click()
        ]
    )
   
    await newPage.waitForTimeout(3000)
    await newPage.locator("(//input[@name='email'])[2]").fill('mukhesh@gmail.com')
    await newPage.waitForTimeout(3000)
    
    //close the new tab
    await newPage.close()

    //perform actios on main page
    await page.locator("#email1").fill('admin@gmail.com')
    await page.waitForTimeout(3000)

})