$(document).ready(function () {

    $('#baked-treats-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 4000,
        autoplayTimeout: 4000,
        smartSpeed: 4000,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    $('#cakes-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 4000,
        autoplayTimeout: 4000,
        smartSpeed: 4000,
        slideSpeed: 0,
        rtl: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })



});