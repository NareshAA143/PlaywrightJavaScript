import{test, expect} from '@playwright/test';

test('inputbox', async ({ page }) => {

    await page.goto('https://itera-qa.azurewebsites.net/home/automation')

    //inputbox-firstname
    await expect(page.locator("//input[@id='name']")).toBeVisible()
    await expect(page.locator("//input[@id='name']")).toBeEmpty()
    await expect(page.locator("//input[@id='name']")).toBeEditable()
    await expec(page.locator("//input[@id='name']")).toBeEnabled()

    await page.fill("//input[@id='name']", "Jhon")
    await page.waitForTimeout(5000)


})