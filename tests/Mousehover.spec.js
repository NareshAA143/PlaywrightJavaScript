import{expect, test} from '@playwright/test';
test('Mousehover', async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  await page.locator("#email1").fill("admin@email.com");
  await page.locator("#password1").fill("admin@123");
  await page.locator("button[type='submit']").click();


    //mouse hover
    await page.locator("//span[normalize-space()='Manage']").hover();
    await page.locator("//a[normalize-space()='Manage Courses']").click();
  
    await page.waitForTimeout(5000)


})