import HelperMng from './ultils/helper'
import 'bootstrap/js/dist/carousel'

class PartnerManager {
    constructor({ root }) {
        this.$root = $(root);

        this.helper = new HelperMng()
        this.helper.setMobileMenu()

        this.$carousel = $('.carousel', this.$root)

        this.handleEvent()
    }

    handleEvent() {
        let self = this

        self.$carousel.carousel({
            interval: false
        })

        self.$carousel.on('slid.bs.carousel', function () {
            let targetTab = $(this).find('.carousel-item.active').data('target')

            $(targetTab).addClass('active show').siblings().removeClass('active show');
        })
    }

}

const partnerMng = new PartnerManager({
    root: '#main'
});