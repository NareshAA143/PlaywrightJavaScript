import{test, expect} from '@playwright/test';
test('checkboxes', async ({ page }) => {
    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    //single checkbox
    await page.locator("//input[@id='monday' and @type='checkbox']").check()//cekecks the checkbox
    expect (page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked()// verifies whether it is checked or not
    expect (page.locator("//input[@id='monday' and @type='checkbox']")).isChecked().toBeTruthy()//returns true
    expect (page.locator("//input[@id='sunday' and @type='checkbox']")).isChecked().toBeFalsy()//returns true, sunday is unchecked


    //Handle multiple checkboxes
    const checkboxlocators = [
                        "//input[@id='monday' and @type='checkbox']",
                        "//input[@id='saturday' and @type='checkbox']",
                        "//input[@id='sunday' and @type='checkbox']"
                       ];
    //select multiple checkboxes
    for(const locator of checkboxlocators)
    {
        await page.locator(locator).check()
    }

    //uncheck above selected checkboxes
    for(const locator of checkboxlocators)
    {
        //if checkbox is checked
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck()//uncheck the checkbox
        }
        
    }
    await page.waitForTimeout(5000)

})