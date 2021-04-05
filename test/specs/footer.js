import selectors from '../selectors/footer.sel';
import expected from '../expected/footer.exp';
import forgot from '../../pages/forgot.page';
import login from '../../pages/login.page';

describe('Footer', () => {

    describe('Elements-displayed', () => {

        before(() => {
            login.openPage();
        })

        it('Footer', () => {
            expect($(selectors.footer)).toBeDisplayed()
        })

        it('Footer-links', () => {
            expect($(selectors.links)).toBeDisplayed()
        })

        it('Copyright', () => {
            expect($(selectors.copyright)).toBeDisplayed()
        })

        it('Version', () => {
            expect($(selectors.version)).toBeDisplayed()
        })

    })

    describe('Elements-values', () => {

        it('Copyright', () => {
            expect($(selectors.copyright)).toHaveText(expected.copyright)
        })

        it('Version', () => {
            expect($(selectors.version)).toHaveTextContaining(expected.version)
        })

        it('Developer', () => {
            expect($(selectors.version)).toHaveTextContaining(expected.websiteBy)
        })

    })

})