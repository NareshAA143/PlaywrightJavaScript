//const{test,expect}=required('@playwright/test')
import {test,expect} from '@playwright/test'

test('Locators',async({page})=>{
 
    await page.goto('https://www.demoblaze.com/index.html')
    //await page.locator('id=login2').click()
        await page.click('id=login2')
        await page.fill('#loginusername','pavanol')
        await page.fill('#loginpassword','test@123')
        await page.click("button[onclick='logIn()']")
        const logoutLink= page.locator("#logout2")
        await expect(logoutLink).toBeVisible()
        await page.close()

})