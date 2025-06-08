import{test,expect}from '@playwright/test';

test('Login', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/signup');
    await page.waitForTimeout(3000)

})