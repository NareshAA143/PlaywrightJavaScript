# Test info

- Name: Particular element screenshot
- Location: D:\PlayWright_Automation\tests\Screenshot.spec.js:17:6

# Error details

```
Error: locator.screenshot: Unexpected token "/" while parsing css selector "/html[1]/body[1]/main[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]". Did you mean to CSS.escape it?
Call log:
  - waiting for /html[1]/body[1]/main[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]

    at D:\PlayWright_Automation\tests\Screenshot.spec.js:19:94
```

# Page snapshot

```yaml
- main:
  - heading "demo.opencart.com" [level=1]
  - paragraph: Verifying you are human. This may take a few seconds.
  - text: demo.opencart.com needs to review the security of your connection before proceeding.
- contentinfo:
  - text: "Ray ID:"
  - code: 94c7628b1fe2ff7b
  - text: Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=l
```

# Test source

```ts
   1 | import{test,expect} from '@playwright/test';
   2 |
   3 | //1.page screenshot
   4 | test('page screenshot',async ({page}) => {
   5 |     await page.goto("https://demo.opencart.com/")
   6 |     await page.screenshot({path:"tests/screenshots"+Date.now()+"HomePage.png"})
   7 |
   8 | })
   9 |
  10 | //2.fullpage screenshot
  11 | test('fullpage screenshot',async ({page}) => {
  12 |     await page.goto("https://demo.opencart.com/")
  13 |     await page.screenshot({path:"tests/screenshots"+Date.now()+"FullPage.png",fullPage:true})
  14 | })
  15 |
  16 | //3.Particular element screenshot
  17 | test.only('Particular element screenshot',async ({page}) => {
  18 |     await page.goto("https://demo.opencart.com/")
> 19 |     await page.locator("/html[1]/body[1]/main[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]").screenshot({path:"tests/screenshots"+Date.now()+"ParticularElement.png"})
     |                                                                                              ^ Error: locator.screenshot: Unexpected token "/" while parsing css selector "/html[1]/body[1]/main[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]". Did you mean to CSS.escape it?
  20 | })
```