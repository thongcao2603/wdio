class LogoutPage {

    get loginMessage() {
        return $('#flash')
    }


    async checkMessage(msg) {
        await expect(this.loginMessage).toHaveText(msg)
    }
}

module.exports = new LogoutPage()