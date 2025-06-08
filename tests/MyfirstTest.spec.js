const{test,expect}=require('@playwright/test');//import test and expect from playwright

test('my first test',async ({page})=>{

await page.goto('https://www.demoblaze.com/index.html');
const pagetitle=await page.title();
await expect(page).toHaveTitle('STORE');
const pageURL = page.url();
console.log('page url is',pageURL);
await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
await page.close();
})