import HelperMng from './ultils/helper'
class GeneralInfoManager {
    constructor({ root }) {
        this.$root = $(root);

        this.helper = new HelperMng()
        this.helper.setMobileMenu()

        this.$mnIntroParent = $('#mnuIntro').parent()

        this.$factory = $('#graphite-factory', this.$root)
        this.$company = $('#graphite-company', this.$root)
        this.$building = $('#building-intro', this.$root)
        this.$geo = $('#graphite-map', this.$root)
        this.$contentBelow = $('#content-below', this.$root)

        let urlPath = window.location.pathname;
        let pathArr = urlPath.split('/')

        if (pathArr.length > 2) {
            this.moveToModuleActive(pathArr[2])
        }

        this.eventHandler()
    }

    eventHandler() {
        let self = this
        
        self.$mnIntroParent.find('a.dropdown-item').on('click', function (e) {
            let linkId = $(this).data('link')
            
            if (linkId != undefined && linkId.trim() != '') {
                e.preventDefault()
                self.moveToModuleActive(linkId, e)
            }
        })

        $(window).scroll(function () {
            let isBuildingActive = self.helper.isInViewport(self.$building)
            let animateBuildingText = self.$building.find('.text-animate')
            self.helper.restartAnimate(isBuildingActive, animateBuildingText, 'focus-in-expand')

            let isGEOActive = self.helper.isInViewport(self.$geo)
            let animateGEOText = self.$geo.find('.text-animate')
            self.helper.restartAnimate(isGEOActive, animateGEOText, 'focus-in-expand')

            let isFactoryActive = self.helper.isInViewport(self.$factory)
            let animateFactoryText = self.$factory.find('.text-animate')
            self.helper.restartAnimate(isFactoryActive, animateFactoryText, 'focus-in-expand')

            let isCompanyActive = self.helper.isInViewport(self.$company)
            let animateCompanyText = self.$company.find('.text-animate')
            self.helper.restartAnimate(isCompanyActive, animateCompanyText, 'focus-in-expand')

            if (isFactoryActive) {
                $('.hexagon-inner-text h1 span').each(function () {
                    let $spanCalculate = $(this)

                    if ($spanCalculate.hasClass('need-calculate') == false) {
                        $spanCalculate.addClass('need-calculate')

                        setTimeout(function () {
                            $spanCalculate.prop('Counter', 0).animate({
                                Counter: $spanCalculate.text()
                            }, {
                                duration: 2000,
                                easing: 'swing',
                                step: function (now) {
                                    let calcVal = Math.ceil(now)

                                    if (calcVal < 10)
                                        $spanCalculate.text('0' + calcVal)
                                    else
                                        $spanCalculate.text(calcVal)
                                }
                            });
                        }, 100)
                    }
                });
            } else {
                $('.hexagon-inner-text h1 span').each(function () {
                    let $spanCalculate = $(this)
                    $spanCalculate.removeClass('need-calculate')
                });
            }

            //let isContentBelowActive = self.helper.isInViewport(self.$contentBelow)

            //if (isContentBelowActive) {
            //    $('#content-below h3 span').each(function () {
            //        let $spanCalculate = $(this)

            //        if ($spanCalculate.hasClass('need-calculate') == false) {
            //            $spanCalculate.addClass('need-calculate')

            //            setTimeout(function () {
            //                $spanCalculate.prop('Counter', 0).animate({
            //                    Counter: $spanCalculate.text()
            //                }, {
            //                    duration: 5000,
            //                    easing: 'swing',
            //                    step: function (now) {
            //                        let calcVal = Math.ceil(now)

            //                        if (calcVal < 10)
            //                            $spanCalculate.text('0' + calcVal)
            //                        else
            //                            $spanCalculate.text(calcVal)
            //                    }
            //                });
            //            }, 200)
            //        }
            //    });
            //} else {
            //    $('#content-below h3 span').each(function () {
            //        let $spanCalculate = $(this)
            //        $spanCalculate.removeClass('need-calculate')
            //    });
            //}
        });
    }

    moveToModuleActive(moduleId) {
        var target = $('#' + moduleId)
        if (target.length) {
            let targetTop = target.offset().top;
            let menuHeight = $('nav').outerHeight();
            let srollPosition = targetTop - menuHeight;

            $('html, body').stop().animate({
                scrollTop: srollPosition
            }, 1000);
        }
    }
}

const generalMng = new GeneralInfoManager({
    root: '#main'
});