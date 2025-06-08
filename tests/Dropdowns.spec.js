import{test,expect} from '@playwright/test';

test('Dropdowns', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    //multiple ways to select an option
    //await page.locator('#country').selectOption({label:'India'})//label
    //await page.locator('#country').selectOption({index:1})//index number
    //await page.locator('#country').selectOption({value:'uk'})//using value attribute
    //await page.selectOption('#country','India')//by select option with loacator and visible Text
    //await page.locator('#country').selectOption('India')//Visible Text
    
    //Assertions
    //1.Check number of options in dropdowns-approach-1
    // const options = page.locator('#country option')
    // await expect(options).toHaveCount(10)

    //2.Check number of options in dropdowns-approach-2
    // const options1 = await page.$$('#country option')
    // console.log("Number of options:", options1.length)
    // await expect(options1.length).toBe(10)

    //3.Check presence of value in the dropdown--approach-1
    // const content = await page.locator('#country').textContent()
    // await expect(content.includes('India')).toBeTruthy()

    //4 Check presence of value in the dropdown--approach-2
    const options = await page.$$('#country option')
    let status = false
    for(const option of options)
        {
            console.log(await option.textContent())
            let value = await option.textContent()
            if(value.includes('India'))
            {
                status = true
                break
            }
        }
    expect(status).toBeTruthy()

   //5.Select option from dropdown using loop
//    const options = await page.$$('#country option')
//    for(const option of options)
//    {
//     let value = await option.textContent()
//     if(value.includes('India'))
//     {
//         await page.selectOption("#country", value)
//         break   
//     }
//     }
    await page.waitForTimeout(5000)
})
