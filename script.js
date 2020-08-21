
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
        parallax('.bone-singular-3', window.scrollY, 0.1);

    });

    // const imageDisplay = document.getElementByClass("card-header");
    // imageDisplay.addEventListener('onclick', showImage);

    // function showImage() {
    //     if (imageDisplay === "none") {
    //         imageDisplay.style.display = "block"
    //     }else{
    //         document.getElementByClass("clickimage").style.display = "none"
    //     }

    // };

    // $(function() {
    //     $(".card-header").click(function(){
    //         $(this).addClass(".card-head2");
    //         $(this).removeClass(".card-head");
    //     });
    // });

    // $('.collapse').on(shown.bs.collapse, function(){
    //     $(".btn-link").click(function(){
    //     $(".card-header").collapse("show");
    // })
});



