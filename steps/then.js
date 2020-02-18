const { Then } = require('cucumber');
const login = require('../pages/login')

Then(/^I expect to (un)*sucessfully login$/,falsecase => {
    let textCheck = login.checkFlashElement();
    if (falsecase) {
        expect(textcheck).to.equal('Your username is invalid!')
    } else{
        expect(textCheck).to.equal ('You logged into a secure area!')
    }
})