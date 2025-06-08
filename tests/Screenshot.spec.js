import{test,expect} from '@playwright/test';

//1.page screenshot
test('page screenshot',async ({page}) => {
    await page.goto("https://demo.opencart.com/")
    await page.screenshot({path:"tests/screenshots"+Date.now()+"HomePage.png"})

})

//2.fullpage screenshot
test('fullpage screenshot',async ({page}) => {
    await page.goto("https://demo.opencart.com/")
    await page.screenshot({path:"tests/screenshots"+Date.now()+"FullPage.png",fullPage:true})
})

//3.Particular element screenshot
test.only('Particular element screenshot',async ({page}) => {
    await page.goto("https://demo.opencart.com/")
    await page.locator("/html[1]/body[1]/main[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]").screenshot({path:"tests/screenshots"+Date.now()+"ParticularElement.png"})
})