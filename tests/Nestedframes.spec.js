import{test,expect} from '@playwright/test';

test('Nestedframes', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const frame3= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})//get the frame by frame url
    //frame3.locator("input[name='mytext3']").fill('welcome')//interact with element inside frame
    //await page.waitForTimeout(5000)

    //nested frame
    const childFrames = await frame3.childFrames();//get frame and element inside frame
    await childFrames[0].locator("frame[src='frame_3.html'] ").check()//switching to frame3 child frame and doing actions
    await page.waitForTimeout(5000)
})