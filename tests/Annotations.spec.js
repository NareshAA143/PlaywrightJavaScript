import{test,expect} from '@playwright/test';

//only-run this test on chrome
// test.only('test1', async ({ page }) => {
//     console.log('this is test1')

// })

//skip-this test on chrome
// test.skip('test2', async ({ page }) => {
//     console.log('this is test2')

// })

//skip-test on certain conditions
// test('test3', async ({ page,browserName }) => {
//     console.log('this is test3')
//     if(browserName === 'firefox')
//         {
//             test.skip()
//         }

// })


//fixme-if test is having bugs, issues to skip this test we use fixme
// test('test4', async ({ page }) => {
//     test.fixme()
//     console.log('this is test4')

// })

//fail-
// test('test5', async ({ page }) => {
//     test.fail()//expectation is fail
//     console.log('this is test5')
//     expect(1).toBe(1)//actual is pass

// })


//fail-based on certain conditions
// test('test6', async ({ page }) => {
//     console.log('this is test6')
//     if(browserName === 'firefox')
//         {
//             test.fail()//expectation is fail
//         }
//     console.log('this is test6')

// })

//slow-page load timeouts we use this annotation
test('test7', async ({ page }) => {
   //test.slow()//it increases the timeout
   test.setTimeout(50000)//for specific test
    await page.goto("https://www.demoblaze.com/index.html")
     console.log('this is test7')



})
