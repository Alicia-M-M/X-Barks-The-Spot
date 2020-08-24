
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


    // const el = document.getElementByClass("btn-link");
    // el.addEventListener("click", showImage);

    // function showImage(){
    //     $("card-header").addClass("red")
    // }

});



