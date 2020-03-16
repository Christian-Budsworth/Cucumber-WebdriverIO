const { When } = require('cucumber');
const customers = require('../data/customers');

When(/^I attempt to login$/, () => {
    const login = require('../pages/login')
    const user = customers[browser.customer]

    login.login(user.username, user.password);
});


When(/^I click on the "([^"]*)?" element(?: (\d+) times)?$/, (element, numberOfClicks) => {
    const page = require(`../pages/${browser.page}`);
    numberOfClicks = numberOfClicks || 1;
    //loops through number of clicks requested, default 1
    for (i = 0; i < numberOfClicks; i++) {
        page.clickElement(page[element]);
    }
}) 