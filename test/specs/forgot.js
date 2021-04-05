import selectors from '../selectors/forgot.sel';
import expected from '../expected/forgot.exp';
import forgot from '../../pages/forgot.page';
import login from '../../pages/login.page';

describe('Forgot', () => {

    describe('App-data', () => {

        before(() => {
            forgot.openPage();
        })

        it('Page-URL-is-correct', () => {
            expect(browser).toHaveUrl(expected.URL);
        })

    })

    describe('Elements-displayed', () => {

        it('Logo', () => {
            expect($(selectors.logo)).toBeDisplayed()
        })

        it('Email-field', () => {
            expect($(selectors.emailField)).toBeDisplayed()
        })

        it('Remind-button', () => {
            expect($(selectors.btnRemind)).toBeDisplayed()
        })

    })

    describe('Elements-values', () => {

        it('Email-placeholder', () => {
            forgot.checkPlaceholder(selectors.emailField, expected.emailPlaceholder)
        })

        it('Remind-button', () => {
            expect($(selectors.btnRemind)).toHaveText(expected.btnRemind)
        })

    })

    describe('Functionality', () => {

        it('Link-on-Login-redirects-to-Forgot-page', () => {
            login.openPage();
            login.remindClick();
            forgot.checkURL();
        })

        it('Remind-page-displayed', () => {
            expect($(selectors.page)).toBeDisplayed()
        })

        it('Error-appears-email-is-empty', () => {
            forgot.emptyEmailError();
        })

        it('Error-dissapears-on-input-in-email', () => {
            forgot.errorMessageDisappears(selectors.emailField, selectors.error)
        })

        it('Error-appears-email-is-incorrect', () => {
            forgot.incorrectEmailError();
        })

        it('Success-appears-email-is-correct', () => {
            forgot.successMessage();
        })

        it('Redirect-to-Login-page-in-3-sec', () => {
            login.successRedirect(expected.redirect);
        })

    })

})