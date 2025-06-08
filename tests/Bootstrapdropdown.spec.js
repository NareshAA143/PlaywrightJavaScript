import {test,expect} from '@playwright/test';
 test('Bootstrapdropdown', async ({page}) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=6.0_2')
    await page.locator('.multiselect').click()
    //1. total number of options in bootstrap dropdown
    // const options = await page.locator('ul>li label input')
    // await expect(options).toHaveCount(11)

    //2.  total number of options in bootstrap dropdown--way 2
    // const options1 = await page.$$('ul>li label input')
    // console.log("Number of options:", options1.length)//printing them
    // await expect(options1.length).toBe(11)

    //3.Select multiple options from bootstrap dropdown
    const options2 = await page.$$('ul>li label')
    for(let option of options2)
    {
        const value = await option.textContent()
        console.log("value is:",value)
        if(value.includes('Angular')|| value.includes('Java'))
        {
            await option.click()
        }
    }
    //4.Deselect selected multiple options from bootstrap dropdown
    const options3 = await page.$$('ul>li label')
    for(let option of options3)
    {
        const value = await option.textContent()
        console.log("value is:",value)
        if(value.includes('Angular')|| value.includes('Java'))
        {
            await option.click()
        }  
    }
    await page.waitForTimeout(5000)
 })