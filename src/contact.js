import HelperMng from './ultils/helper'
class ContactManager {
    constructor({ root }) {
        this.$root = $(root);

        this.helper = new HelperMng()
        this.helper.setMobileMenu()
        $('footer').prop('hidden', true)
    }
}

const contactMng = new ContactManager({
    root: '#main'
});