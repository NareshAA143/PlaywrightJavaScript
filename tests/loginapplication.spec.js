import {test,expect} from '@playwright/test';
const LoginPage=require('../Pages1/loginpage')
const HomePage=require('../Pages1/HomePage')
const testdata=require('../loginapplicationTestData.json')

test('Login to application using POM', async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    //create an object of LoginPage class
    const loginPage=new LoginPage(page)

    //call methods of LoginPage class
    await loginPage.loginToApplication(testdata.username,testdata.password)


    //create an object of HomePage class
    const homePage=new HomePage(page)
    
    //call methods of HomePage class
    await homePage.verifyManageOption()
    await homePage.logoutFromApplication()
    await loginPage.verifySignIn()

})