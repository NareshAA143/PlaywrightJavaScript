import{test,expect} from '@playwright/test';

test('Hiddendropdown', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.locator("input[placeholder='Username']").fill("Admin")
  await page.locator("input[placeholder='Password']").fill("admin123")
  await page.locator("button[type='submit']").click()
  await page.locator("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']").click()

  await page.locator('div:nth-child(6) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) i:nth-child(1)').click()
  await page.waitForTimeout(5000)
  const options = awaitpage.locator("//div[@role='listbox']//span")
  for(let option of options)
    {
      const jobTitle = await option.textContext()
      console.log(jobTitle)
      if(jobTitle.includes('QA Engineer'))
      {
        await option.click()
        break
      }
    }
page.waitForTimeout(5000)

  })