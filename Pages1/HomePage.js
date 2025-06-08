const { expect } = require("allure-playwright")

class HomePage
{
    constructor(page)
{
    this.page=page
 
    this.playwrightoption="//h2[normalize-space()='Playwright checkpoint+yourStudentID']"
    this.menu="//img[@alt='menu']"
    this.logoutoption ="button[class='nav-menu-item']"
}

async verifyManageOption()
{
    await expect(this.page.locator(this.playwrightoption)).toBeVisible()
}

async logoutFromApplication()
{
    await this.page.click(this.menu)
    await this.page.click(this.logoutoption)

}

}

module.exports=HomePage