# Test info

- Name: alerts3
- Location: D:\PlayWright_Automation\tests\Alerts.spec.js:35:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\WINDOWS\system32\config\systemprofile\AppData\Local\ms-playwright\chromium-1169\chrome-win\chrome.exe
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import{test,expect} from '@playwright/test';
   2 |
   3 | test('alerts',async({page})=>{
   4 |     await page.goto('https://testautomationpractice.blogspot.com/')
   5 |
   6 |     //1.Alert with Ok button
   7 |     //Enabling alert handling before clicking on alert button
   8 |     page.on('dialog',async dialog=>{
   9 |     expect(dialog.type()).toContain('alert')//type of alert
  10 |     expect(dialog.message()).toContain('I am an alert box!')//validating message in alert
  11 |     await dialog.accept()//accepting alert
  12 |     })
  13 |
  14 |     await page.click('#alertBtn')//clicking on alert button
  15 |     await page.waitForTimeout(3000)
  16 |
  17 | })
  18 |
  19 |  //2.Alert with Ok, Cancel button
  20 | test('alerts2',async ({page})=>{
  21 |     await page.goto('https://testautomationpractice.blogspot.com/')
  22 |     page.on('dialog',async dialog=>{
  23 |         expect(dialog.type()).toContain('confirm')//type of alert
  24 |         expect(dialog.message()).toContain('Press a button!')//validating message in alert
  25 |         await dialog.accept()//accepting alert
  26 |         //await dialog.dismiss()//dismissing alert
  27 |         })
  28 |     
  29 |         await page.click('#confirmBtn')//clicking on alert button
  30 |         await expect(page.locator('#demo')).toHaveText('You pressed OK!')//validating text
  31 |         await page.waitForTimeout(3000)
  32 | })
  33 |
  34 | //3.Alert with input box, Ok &Cancel button
> 35 | test('alerts3',async ({page})=>{
     |     ^ Error: browserType.launch: Executable doesn't exist at C:\WINDOWS\system32\config\systemprofile\AppData\Local\ms-playwright\chromium-1169\chrome-win\chrome.exe
  36 |     await page.goto('https://testautomationpractice.blogspot.com/')
  37 |     page.on('dialog',async dialog=>{
  38 |         expect(dialog.type()).toContain('prompt')//type of alert
  39 |         expect(dialog.message()).toContain('Please enter your name:')//validating message in alert
  40 |         expect (dialog.defaultValue()).toContain('Harry Potter')//validating default value in input box
  41 |         await dialog.accept('Tom')//accepting alert with input value
  42 |         })
  43 |     
  44 |         await page.click('#promptBtn')//clicking on alert button
  45 |         await expect(page.locator('#demo')).toHaveText('Hello Tom! How are you today?')//validating text
  46 |         await page.waitForTimeout(3000)
  47 |
  48 |
  49 | })
```