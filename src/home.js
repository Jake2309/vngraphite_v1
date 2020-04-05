import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/carousel'
import HelperMng from './ultils/helper'
class HomeManager {
    constructor({ root }) {
        this.$root = $(root);

        this.helper = new HelperMng()

        this.helper.setMobileMenu()

        this.$btnViewVideo = $('#btnViewVideo', this.$root)
        
        this.$modal = $('#myModal', this.$root)
        this.$carousel = $('#carouselHome', this.$root)
        this.bindingEvent()
    }

    bindingEvent() {
        let self = this

        let $videoSrc = 'https://www.youtube.com/embed/0K0iSVWIctE?autoplay=1&amp;modestbranding=1&amp;showinfo=0'

        // when the modal is opened autoplay it  
        self.$modal.on('shown.bs.modal', function (e) {
            // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
            $("#video").attr('src', $videoSrc);
        })

        // stop playing the youtube video when I close the modal
        self.$modal.on('hidden.bs.modal', function (e) {
            // a poor man's stop video
            $("#video").removeAttr('src', $videoSrc);
        }) 

        self.$carousel.on('slid.bs.carousel', function () {
            let textColor = $(this).find('.carousel-item.active img').data('text-color')
            
            let h3Tag = $(this).find('.carousel-caption h3')
            let h1Tag = $(this).find('.carousel-caption h1')

            if (textColor == 'text-white') {
                if (h3Tag.hasClass('graphite-font-color'))
                    h3Tag.removeClass('graphite-font-color')

                if (h1Tag.hasClass('graphite-font-color'))
                    h1Tag.removeClass('graphite-font-color')
            }

            if (textColor == 'graphite-font-color') {
                if (h3Tag.hasClass('text-white'))
                    h3Tag.removeClass('text-white')

                if (h1Tag.hasClass('text-white'))
                    h1Tag.removeClass('text-white')
            }

            h3Tag.addClass(textColor)
            h1Tag.addClass(textColor)
        })
    }
}

const homeMng = new HomeManager({
    root: '#main'
});