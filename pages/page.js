class page {
    /**
     * open the specific url, if you only include the path, this will extend the base url with the path.
     * @param {x (url/path)} pageUrl 
     */
    open(pageUrl) {
        browser.url(pageUrl);
    };
    /**
     * clicks the element
     */
    clickElement(element) {
        element.click();
    }
    /**
     * waits for element to be visible, default wait is 10000ms
     */
    elementVisible(element, timeout, falsecase) {
        element.waitForDisplayed(timeout || 10000, falsecase)
    };

    /**
     * get text from element
     */
    getText(element) {
        var text = element.getText();
        return text;
    };
    /**
     * checks if an element is selected, This should be done on an input
     */
    isElementSelected(element) {
         var check = element.isSelected();
         return check;
    }

}

module.exports = page;