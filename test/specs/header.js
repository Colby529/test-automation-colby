import selectors from '../selectors/header.sel';
import expected from '../expected/header.exp';
import header from '../../pages/header.page';
import users from '../../pages/users.page';
import login from '../../pages/login.page';


describe('Header', () => {

    describe('Elements-Displayed', () => {

        it('Header', () => {
            browser.url('/')
            expect($(selectors.header)).toBeDisplayed()
        })

        it('Rating-button', () => {
            expect($(selectors.ratingButton)).toBeDisplayed()
        })

        it('Public-game', () => {
            expect($(selectors.publicGameButton)).toBeDisplayed()
        })
    })

    describe('Functionality', () => {

        it('Ratings-Button-Redirect', () => {
            $(selectors.ratingButton).click()
            expect(browser).toHaveUrl(expected.usersURL);
        })

        it('Ratings-Page-Displayed', () => {
            expect($(selectors.ratingsPage)).toBeDisplayed()
        })

        it('Back-to-Login-Button-Displayed', () => {
            expect($(selectors.logBtn)).toBeDisplayed()
        })

        it('Back-to-Login-Button-Redirect', () => {
            $(selectors.logBtn).click()
            expect(browser).toHaveUrl(expected.loginURL);
        })

        it('Login-Page-Displayed', () => {
            expect($(selectors.loginPage)).toBeDisplayed()
        })

        it('New-Game-Button-Redirect', () => {
            $(selectors.publicGameButton).click()
            expect(browser).toHaveUrl(expected.publicGameURL);
        })

        it('Public-Game-Page-Displayed', () => {
            expect($(selectors.publicGamePage)).toBeDisplayed()
        })

    })

})