import{test, expect} from '@playwright/test';

test('radioButton', async ({ page }) => {

    await page.goto('https://itera-qa.azurewebsites.net/home/automation')
    //RadioButton--male
   // await page.check("//input(@value='option2')")
    await page.locator("//input(@value='option2')").check()//ticks the radio button
    await expect(page.locator("//input(@value='option2')")).toBeChecked()//checks whether it is checked or not
    await expect(page.locator("//input(@value='option2')")).isChecked().toBeTruthy()//returs true

    //RadioButton--female
    await expect(page.locator("//input(@value='option1')")).isChecked().toBeFalsy()//returs true
   
    await page.waitForTimeout(5000)
    
}) 