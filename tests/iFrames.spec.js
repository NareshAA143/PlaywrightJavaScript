import{test,expect} from '@playwright/test';

test('iFrames', async ({ page }) => {
await page.goto('https://ui.vision/demo/webtest/frames/');

//total iframes
const allframes = await page.frames()
console.log("Number of iframes:", allframes.length);

//approach 1: By using frame object-name of frame or URL of frame

// const frame1= await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
// await frame1.fill("input[name='mytext1']",'Hello');//interact with element inside 
// await page.waitForTimeout(5000);

//approach 2: using frameLoactor

const frame1 = await page.frameLocator("frame[src='frame_1.html']")//get frame by frameLocator
await frame1.locator("[name='mytext1']").fill("Hello");//perform action on element inside frame
await page.waitForTimeout(5000)

})


