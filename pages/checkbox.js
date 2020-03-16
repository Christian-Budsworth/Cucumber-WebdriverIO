const page = require('./page');
const url = require('../data/pageUrl');

class checkbox extends page {
    open() {
        super.open(url.checkbox);
    };
    clickElement(element) {
        super.clickElement(element)
    };
    isElementSelected(element) {
       return super.isElementSelected(element)
    };
    get first_checkbox () {return $('#checkboxes input:nth-of-type(1)'); };
    get second_checkbox () {return $('#checkboxes input:nth-of-type(2)'); };
}
module.exports = new checkbox();