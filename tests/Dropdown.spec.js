import{test, expect} from '@playwright/test';
 
test('dropdown', async ({ page }) => {
    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    //select tag is present
    await page.locator("#state").selectOption("Goa")//we can give index, visible text or value attribute value



})
    