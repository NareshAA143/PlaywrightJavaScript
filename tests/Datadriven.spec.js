import {test,expect} from '@playwright/test';

const testdata = JSON.parse(JSON.stringify(require("../testlogin.json")))

test.describe("Data Driven login test",function()
{
    for(const data of testdata)
    {
        test.describe(`Login with users ${data.id}`,function()
        {
            test("Login to application",async ({page}) => {
                await page.goto("https://freelance-learn-automation.vercel.app/login")
                await page.locator("#email1").fill(data.username)
                await page.locator("#password1").fill(data.password)

        })

        })
    }
})