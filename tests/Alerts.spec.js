import{test,expect} from '@playwright/test';

test('alerts',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //1.Alert with Ok button
    //Enabling alert handling before clicking on alert button
    page.on('dialog',async dialog=>{
    expect(dialog.type()).toContain('alert')//type of alert
    expect(dialog.message()).toContain('I am an alert box!')//validating message in alert
    await dialog.accept()//accepting alert
    })

    await page.click('#alertBtn')//clicking on alert button
    await page.waitForTimeout(5000)

})

 //2.Alert with Ok, Cancel button
test('alerts2',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('confirm')//type of alert
        expect(dialog.message()).toContain('Press a button!')//validating message in alert
        await dialog.accept()//accepting alert
        //await dialog.dismiss()//dismissing alert
        })
    
        await page.click('#confirmBtn')//clicking on alert button
        await expect(page.locator('#demo')).toHaveText('You pressed OK!')//validating text
        await page.waitForTimeout(5000)
})

//3.Alert with input box, Ok &Cancel button
test.only('alerts3',async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('prompt')//type of alert
        expect(dialog.message()).toContain('Please enter your name:')//validating message in alert
        expect (dialog.defaultValue()).toContain('Harry Potter')//validating default value in input box
        await dialog.accept('Tom')//accepting alert with input value
        })
    
        await page.click('#promptBtn')//clicking on alert button
        await expect(page.locator('#demo')).toHaveText('Hello Tom! How are you today?')//validating text
        await page.waitForTimeout(5000)


})