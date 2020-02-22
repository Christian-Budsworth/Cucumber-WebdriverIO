const { Then } = require('cucumber');
const login = require('../pages/login');
const url = require('../data/pageUrl')

Then(/^I expect to (un)*sucessfully login$/,falsecase => {
    let textCheck = login.checkFlashElement();
    if (falsecase) {
        expect(browser.getUrl()).to.contain(url.login,'incorrect page loaded')
        expect(textCheck).to.contain('Your username is invalid!')
    } else{
        expect(browser.getUrl()).to.contain(url.secure,'incorrect page loaded')
        expect(textCheck).to.contain('You logged into a secure area!')
    }
})