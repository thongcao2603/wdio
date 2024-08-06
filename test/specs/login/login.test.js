const { expect } = require('@wdio/globals')
const loginPage = require('../../pages/login.page')


describe('Test1', () => {
    it('move mouse', async () => {
        browser.url('/')
        const ele = await $('div=SpiceClub')
        await ele.moveTo()
        await browser.pause(5000)
    })
})

