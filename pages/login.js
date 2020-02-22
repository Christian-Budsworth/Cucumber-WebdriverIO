const page = require('./page');
const url = require('../data/pageUrl')

class login extends page {
    open() {
        super.open(url.login);
    };
    login(username, password) {
        console.log(this.username)
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
    };
    checkFlashElement() {
        super.elementVisible(this.flashElement);
        return super.getText(this.flashElement);
    }
    
    get username() { return $("#username"); };
    get password() { return $("#password"); };
    get submit() { return $('[type="submit"]'); };
    get flashElement () { return $('#flash'); }; 

}
module.exports = new login();