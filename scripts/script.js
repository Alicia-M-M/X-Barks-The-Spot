// navbar
$(document).ready(function () {

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 60 && window.innerWidth > 575) {
            $(".navbar").addClass("nav-color-change ul");
        } else {
            $(".navbar").removeClass("nav-color-change ul");
        };

        if (scroll >= 20 && window.innerWidth <= 575) {
            $(".navbar").addClass("navbar-mobile");
        } else {
            $(".navbar").removeClass("navbar-mobile");
        };

    });

    // welcome-area-parallax
    function parallax(element, distance, speed) {
        const item = document.querySelector(element);
        item.style.transform = `translateY(${distance * speed}px)`;
    }

    window.addEventListener('scroll', function () {


        parallax('.tea-cup', window.scrollY, 0.1);
        parallax('.bone-singular-3-v1', window.scrollY, 0.2);
        parallax('.bone-singular-2', window.scrollY, 0.1);
        parallax('.singular-bone-v1', window.scrollY, 0.1);

    });

    // modal-menu modal-subscribe
    $("#menuModalLongButton").click(function () {
        $("#menuModalLong").modal("show")
    });
    $("#subscribeModalButton").click(function () {
        $("#subscribeModal").modal("show")
    });

    // sort-cart
    $('.list').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.itemBox').show('1000');
        } else if (value == 'dog') {
            $('.dogs').show('1000');
            $('.humans').hide('1000');
        } else if (value == 'human') {
            $('.humans').show('1000');
            $('.dogs').hide('1000');
        } else {
            $('.itemBox').not('.' + value).hide('1000');
            $('.itemBox').filter('.' + value).show('1000');
        }
    })

    $('.list').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
});



