import{test,expect} from '@playwright/test';

test('singlefile', async ({page}) => {

    await page.goto("https://www.foundit.in/")

    //click on upload file button
    await page.waitForSelector('.mqfihd-upload')//wait for the upload button to appear
    await page.locator('.mqfihd-upload').click()

    await page.locator('#file-upload').setInputFiles('tests/uploadFiles/testfile1.pdf')//uplaod the file
    await page.waitForTimeout(5000)

})

test.only('multiplefiles', async ({page}) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator("#filesToUpload").setInputFiles('tests/uploadFiles/BDL Application.pdf', 'tests/uploadFiles/SSC Memo.pdf')
    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("BDL Application.pdf")
    expect(await page.locator("div[class='main'] li:nth-child(2)")).toHaveText("SSC Memo.pdf")
    await page.waitForTimeout(5000)

    //removing files
     await page.locator("#filesToUpload").setInputFiles([])
    expect(await page.locator("ul[id='fileList'] li")).toHaveText("No Files Selected")

    await page.waitForTimeout(5000)

})

test("fileupload", async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("tests/uploadFiles/BDL Application.pdf")
    await page.locator("#file-submit").click()

     expect(await page.locator("div[class='example'] h3")).toHaveText("File Uploaded!")
     expect(await page.locator("#uploaded-files")).toHaveText("BDL Application.pdf")

    await page.waitForTimeout(5000)



})