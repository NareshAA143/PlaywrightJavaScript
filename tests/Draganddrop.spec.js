import {test,expect} from '@playwright/test';

test('drag and drop', async ({ page }) => {
    await page.goto("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")

    //capture source element
    const rome = await page.locator("#box6")
    const washington = await page.locator("#box3")

    //capture target element
    const italy = await page.locator("#box106")
    const usa = await page.locator("#box103")

    //approach 1--mouse hover on source element and clicking mouse and hovering on target element and relasing mouse
   /* await rome.hover()
    await page.mouse.down()

    await italy.hover()
    await page.mouse.up()*/

    //approach 2
    await rome.dragTo(italy)
    await washington.dragTo(usa)

    await page.waitForTimeout(5000)

})