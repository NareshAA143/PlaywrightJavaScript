import{test,expect} from '@playwright/test';

test('multiselect', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    //select multiple options from multiselect dropdown
    //await page.selectOption('#colors',['Blue','Red','Yellow'])

    //assertions
    //1.check number of options in multiselect dropdown
    // const options = await page.locator('#colors option')
    // await expect(options).toHaveCount(7)

    //2.check number of options in multiselect dropdown using jS array
    // const options1 = await page.$$('#colors option')
    // console.log("Number of options:", options1.length)
    // await expect(options1.length).toBe(7)

    //3. presence of value in multiselect dropdown
    const content = await page.locator('#colors').textContent()
    await expect(content.includes('Blue')).toBeTruthy()

    await page.waitForTimeout(5000) 
})