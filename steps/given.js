const { Given } = require('cucumber');
const customers = require('../data/customers')

//go to a specific page. Journeys to get to the specific page are defined inside the page object.
Given(/^I am on the "([^"]*)?" page$/, (page) => {
    const url = require(`../pages/${page}`);
    browser.page = page;
    url.open();
})

//define specific characteristics user completing the journey needs to have, and selects a random user with those requirements.
Given(/^I am( not)*$/, (falseCase,table) => {
    var tableData = table.raw();
    var customerList = Object.keys(customers);
    var acceptableCustomer = [];
    //function to check if criteria is true of false
    function checkCriteria(bool) {
        if (falseCase) {
            return bool == true;
        } else { 
        return bool == false;
        }
    }
    //goes through customer list and finds customer with requirements
    customerList.forEach(customer => {
        var customerCheck = tableData.map((trait) => customers[customer][trait]);
        if (!customerCheck.some(checkCriteria)) {
            acceptableCustomer.push(customer)
        };
    });
    //chooses a random customer from list of acceptable customers to be used for this journey.
    browser.customer = acceptableCustomer[Math.floor(Math.random() * acceptableCustomer.length)];
})