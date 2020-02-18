class page  {
    /**
     * open the specific url, if you only include the path, this will extend the base url with the path.
     * @param {x (url/path)} pageUrl 
     */
    open (pageUrl){
        browser.url(pageUrl);
    };
    /**
     * waits for element to be visible, default wait is 10000ms
     */
    elementVisible(element,timeout,falsecase) {
        element.waitForDisplayed(timeout||10000,falsecase)
    };
    
    /**
     * get text from element
     * @param {string} element 
     */
    getText(element) {
         var text = element.getText();
        return text;
    }

}

module.exports = page;