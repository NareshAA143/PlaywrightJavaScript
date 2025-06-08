import{expect, test} from '@playwright/test';

test('Datepicker', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.fill("#datepicker","01/01/2026")

    //date picker
    const year ="2024"
    const month ="March"
    const date ="01"
    await page.click("#datepicker")//opens calendar

    while(true)
        {
            const CurrentYear = await page.locator(".ui-datepicker-year").textContent()
            const Currentmonth = await page.locator(".ui-datepicker-month").textContent()
            if(CurrentYear==year && Currentmonth==month)
            {
                break
            }
           // await page.locator(".ui-icon.ui-icon-circle-triangle-e").click()//clicks on next till it matches
            await page.locator(".ui-icon.ui-icon-circle-triangle-w").click()//clicks on previous till it matches
    
        }


       const dates = await page.$$(".ui-state-default")
       for(const dt of dates)
       {
           if(await dt.textContent()==date)
           {
               await dt.click()
               break
           }
        }
       
        // //date selection without loop
        // await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
        // await page.waitForTimeout(5000)


})