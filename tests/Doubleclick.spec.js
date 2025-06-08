import{test,expect} from '@playwright/test';

test('double click', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    const btncopy = await page.locator("button[ondblclick='myFunction1()']")

    //double click on button
    await btncopy.dblclick()

    //verifying the text on the input box 2
    const inputbox2 = await page.locator("#field2")
    await expect(inputbox2).toHaveValue("Hello World!")

    await page.waitForTimeout(5000)


})