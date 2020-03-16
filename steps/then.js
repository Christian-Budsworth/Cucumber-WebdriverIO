const { Then } = require('cucumber');
const url = require('../data/pageUrl')

Then(/^I expect to (un)*sucessfully login$/,falsecase => {
    const login = require('../pages/login');
    let textCheck = login.checkFlashElement();
    if (falsecase) {
        expect(browser.getUrl()).to.contain(url.login,'incorrect page loaded')
        expect(textCheck).to.contain('Your username is invalid!')
    } else{
        expect(browser.getUrl()).to.contain(url.secure,'incorrect page loaded')
        expect(textCheck).to.contain('You logged into a secure area!')
    }
})

Then(/^I expect the element "([^"]*)?" to (not )*be selected$/,(element, falsecase) => {
    const page = require(`../pages/${browser.page}`);
    const check = page.isElementSelected(page[element]);
    if(falsecase) {
        expect(check).to.be.equal(false,`element ${element} is selected!`)
    }
    else {
        expect(check).to.be.equal(true,`element ${element} is not selected!`)
    }
}) 