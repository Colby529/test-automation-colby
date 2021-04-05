import selectors from '../selectors/login.sel';
import expected from '../expected/login.exp';
import login from '../pages/login.page';

describe('Login', () => {
    describe('App-data', () => {

        before(() => {
            login.openPage();
        })

        it('Page-title-is-correct', () => {
            login.openPage();
            expect(browser).toHaveTitle(expected.pageTitle);
        })

        it('Page-URL-is-correct', () => {
            expect(browser).toHaveUrl(expected.pageUrl)
        })
 
    })

    describe('Elements-displayed', () => {

        it('Logo', () => {
            expect($(selectors.logo)).toBeDisplayed()
        })

        it('Login-Button', () => {
            expect($(selectors.btnLogin)).toBeDisplayed()
        })

        it('Forgot-Password-Button', () => {
            expect($(selectors.btnForgot)).toBeDisplayed()
        })

        it('Email-Text-Field', () => {
            expect($(selectors.emailField)).toBeDisplayed()
        })

        it('Password-Text-Field', () => {
            expect($(selectors.passwordField)).toBeDisplayed()
        })

        it('Login-Button', () => {
            expect($(selectors.btnLogin)).toBeDisplayed()
        })
    })

    describe('Element-Values', () => {

        it('Email-Placeholder', () => {
            login.checkPlaceholder(selectors.emailField, expected.emailPlaceholder)
        })

        it('Password-Placeholder', () => {
            login.checkPlaceholder(selectors.passwordField, expected.passPlaceholder)
        })

        it('Login-Button', () => {
            expect($(selectors.btnLogin)).toHaveText(expected.btnLogin)
        })

        it('Forgot-Password-Button', () => {
            expect($(selectors.btnForgot)).toHaveText(expected.btnForgot)
        })
    })

    describe('Functionality', () => {

        it('Both-Fields-Are-Empty', () => {
            login.bothFieldsEmptyError();
        })

        it('Error-Message-Disapears-On-Input-In-Email-Field', () => {
            login.errorMessageDisappears(selectors.emailField, selectors.error);
        })
        
        it('Only-Password-Field-Is-Empty', () => {
            login.emptyPasswordError();
        })

        it('Error-Message-Disapears-On-Input-In-Password-Field', () => {
            login.errorMessageDisappears(selectors.passwordField, selectors.error);
        })

        it('Only-Email-Field-Is-Empty', () => {
            login.emptyEmailError();
        })

        it('If-Email-Is-Incorrect', () => {
            login.incorrectEmailError();
        })

        it('If-Password-Is-Incorrect', () => {
            login.incorrectPasswordError();
        })

        it('Email-Is-Correct-Password-Is-Not', () => {
            $(selectors.emailField).setValue('info@techstart.dev')
            $(selectors.passwordField).setValue('a')
            $(selectors.btnLogin).click()
            expect($(selectors.errorText)).toBeDisplayed()
            expect($(selectors.errorText)).toHaveText(expected.errorPassword)
        })

    })
})
