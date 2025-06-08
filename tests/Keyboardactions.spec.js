import{test,expect} from '@playwright/test';

test('test1', async ({page}) => {
    await page.goto("https://gotranscript.com/text-compare")
    await page.fill("textarea[placeholder='Paste one version of the text here.']", "welcome to automation")//enter text 

    //select the text
    //control+A
    await page.keyboard.press("Control+A")

    //control+C
    await page.keyboard.press("Control+C")

    //Tab
    await page.keyboard.down("Tab")
    await page.keyboard.up("Tab")

    //control+V
    await page.keyboard.press("Control+V")

    await page.waitForTimeout(5000)


})