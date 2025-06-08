import {test,expect} from '@playwright/test';
let page;

//Executes only once before each test
test.beforeEach(async({browser})=>{
    //create page fixture
    page=await browser.newPage()
    //login
    await page.goto('https://www.demoblaze.com/index.html')
    await page.locator('#login2').click()
    await page.fill('#loginusername', 'pavanol')
    await page.fill('#loginpassword', 'test@123')
    await page.locator("button[onclick='logIn()']").click()

})

//Executes only once after each test
test.afterEach(async()=>{
    //Logout
    await page.locator("#logout2").click()
})

test('Home page test', async () => {
    
    //Home Page
    const products= await page.$$(".hrefch") 
    expect(products).toHaveLength(9) 

    

})

test('Add Product to cart test', async () => {

    //Add Product to cart
    await page.locator("(//a[normalize-space()='Samsung galaxy s6'])[1]").click()
    await page.locator(".btn.btn-success.btn-lg").click()

    //handle alert
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain('Product added')//assert alert message
        await dialog.accept()
    })


})
