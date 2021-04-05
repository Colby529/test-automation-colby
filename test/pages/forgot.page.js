import selectors from '../selectors/forgot.sel';
import expected from '../expected/forgot.exp';
import creds from '../data/credentials';
import Base from './base.page';

class Forgot extends Base {

    openPage() {
        browser.url(selectors.URL)
    }

    checkURL() {
        expect(browser).toHaveUrl(expected.URL);
    }

    emptyEmailError() {
        this.openPage();
        $(selectors.btnRemind).click();
        expect($(selectors.error)).toBeDisplayed();
        expect($(selectors.error)).toHaveText(expected.errorEmpty);
    }

    incorrectEmailError() {
        this.openPage();
        $(selectors.emailField).setValue(creds.player.email + 'a'); //Enter invalid email into email field
        $(selectors.btnRemind).click();
        expect($(selectors.error)).toBeDisplayed();
        expect($(selectors.error)).toHaveText(expected.errorEmail);
    }

    successMessage() {
        this.openPage();
        $(selectors.emailField).setValue(creds.player.email); //Enter valid email into email field
        $(selectors.btnRemind).click();
        expect($(selectors.success)).toBeDisplayed();
        expect($(selectors.success)).toHaveText(expected.success);
    }

}

export default new Forgot;