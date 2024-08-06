class LoginPage {
    get parentProduct() {
        return $('//span[normalize-space()="Product"]')
    }

    get productItems() {
        return $$('//div[@class="layout menu-one-col-products"]//li')
    }

    getProductItemsByName(name) {
        return $(`//div[@class='layout menu-one-col-products']//li/a[text()='${name}']`)
    }


}

module.exports = new LoginPage()