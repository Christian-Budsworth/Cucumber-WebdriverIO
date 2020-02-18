const { When } = require('cucumber');
const customers = require('../data/customers');
const login = require('../pages/login')

When(/^I attempt to login$/, ()=> {
    const user = customers[browser.customer]

    login.login(user.username,user.password);
})