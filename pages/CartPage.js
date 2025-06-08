exports.CartPage = class CartPage{
    constructor(page){
        //write all locators here
        this.page=page;
        this.noOfProducts='//tbody[@id="tbodyid"]/tr/td[2]'

    }

    async checkProductIncart(productName)
    {
        const productIncart=await this.page.$$(this.noOfProducts)
        for (const product of productIncart)
        {
            console.log(await product.textContent())
            if(productName==await product.textContent())
            {
                return true
                break
            }
        }
    }

}