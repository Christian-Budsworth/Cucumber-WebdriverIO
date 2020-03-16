const { When } = require('cucumber');
const customers = require('../data/customers');

When(/^I attempt to login$/, ()=> {
    const login = require('../pages/login')
    const user = customers[browser.customer]
    
    login.login(user.username,user.password);
});

When(/^I click on the "([^"]*)?" element$/, (element) => {
    const page = require(`../pages/${browser.page}`);

    page.clickElement(page[element]);
}) 