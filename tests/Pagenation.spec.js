import{expect, test} from '@playwright/test';

test('Pagenation', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/")
  const table= await page.locator("#productTable")
 
  //find total number of rows & columns
   const columns = await table.locator('thead tr th')//get columns
   console.log('Number of columns', await columns.count())
   expect(await columns.count()).toBe(4)//validate number of columns

   const rows = await table.locator('tbody tr')//get rows
   console.log('Number of rows', await rows.count())
   expect(await rows.count()).toBe(5)//validate number of rows

// 1).select single product 
//   getting particular row with anyone of the cell text in that row
//    async function selectProduct(rows, page, name){
//        const matchedRow = rows.filter({
//        has: page.locator('td'),
//        hasText: '4'
//    })
//    //perform action on any cell of matchedRow
//    await matchedRow.locator("(//input[@type='checkbox'])[11]").check()
//    await matchedRow.locator("input").check()


//2).select multiple products by re-usable function
// await selectProduct(rows, page, 'Smartphone')
// await selectProduct(rows, page, 'Laptop')
// await selectProduct(rows, page, 'Tablet') 
// await selectProduct(rows, page, 'Wireless Earbuds')
// await selectProduct(rows, page, 'Smartwatch')

//getting particular row with anyone of the cell text in that row
//    async function selectProduct(rows, page, name){
//        const matchedRow = rows.filter({
//        has: page.locator('td'),
//        hasText: name
//        })
//perform action on any cell of matchedRow individually
// await matchedRow.locator("(//input[@type='checkbox'])[11]").check()
// await matchedRow.locator("(//input[@type='checkbox'])[8]").check()
// await matchedRow.locator("(//input[@type='checkbox'])[9]").check()
// await matchedRow.locator("(//input[@type='checkbox'])[10]").check()
// await matchedRow.locator("(//input[@type='checkbox'])[12]").check()
//await matchedRow.locator("input").check()//clicking on check all together
//await page.waitForTimeout(5000)
//}
//})

//4).read data from all the pages in the table
const pages = await page.locator('.pagination li a')
console.log('Number of pages', await pages.count())
for(let p=0;p<await pages.count();p++)
{
    if(p>0)
        {
            await pages.nth(p).click()
        }
    
}

// print all product details using loop
for (let i=0; i<await rows.count(); i++)
{
        const row = rows.nth(i);
        const tds= row.locator('td')
    for(let j=0;j<await tds.count()-1;j++)
    {
      console.log(await tds.nth(j).textContent())
    }
}
await page.waitForTimeout(5000)
})
