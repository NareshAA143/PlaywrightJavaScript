import{test,expect} from '@playwright/test';

test('Autosuggestdropdown', async ({page}) => {
    await page.goto('https://www.redbus.in/')
    await page.locator("div[class='inputAndSwapWrapper___396030'] div[class='label___201428 ']").click()
    await page.locator("div[class='inputAndSwapWrapper___396030'] div[class='label___201428 ']").fill('Delhi')
    await page.waitForSelector("//li[contains(@class,'src-iwsKbI')]/div/text[1]")//auto suggestions
    const fromCityOptions = await page.$$("//li[contains(@class,'src-iwsKbI')]/div/text[1]")//storing in variable
    for(let option of fromCityOptions)
    {
        const value = await option.textContent()
        console.log("value is:",value)
        if(value.includes('Delhi'))
        {
            await option.click()
            break

        }
    
    }

    await page.waitForTimeout(5000)

})