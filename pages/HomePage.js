exports.HomePage = class HomePage{
    constructor(page){
        //write all locators here
        this.page=page;
        this.productList='//*[@id="tbodyid"]/div/div/div/h4/a'
        this.addToCartbtn='.btn.btn-success.btn-lg'
        this.cart='#cartur'
    }

    //write all methods here

    async addProductToCart(productName)
    {
        const productList = await this.page.$$(this.productList)
        for(const product of productList)
        {
            if(productName==await product.textContent())
            {
                await product.click()
                break
            }
        }
        await this.page.on('dailog',async dialog=>{
            if(dialog.message().includes("added"))
            {
                await dialog.accept()

            }  
        })
        await this.page.locator(this.addToCartbtn).click()
    }
    async gotoCart()
    {
        await this.page.locator(this.cart).click()
    }

}