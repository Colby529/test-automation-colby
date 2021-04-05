import selectors from '../selectors/header.sel';
import expected from '../expected/header.exp';
import Base from './base.page';

class Header extends Base {

    headerDisplayed() {
        expect($(selectors.header)).toBeDisplayed()
    }

    logoutBtnDisplayed() {
        expect($(selectors.btnLogout)).toBeDisplayed()

    }

}

export default new Header;