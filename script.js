$(document).ready(function () {


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 60) {
            //clearHeader, not clearheader - caps H
            $(".navbar").addClass("nav-color-change");
            $(".nav-link").addClass("nav-link-white");
            $(".hero-text").addClass("nav-link-white");
        } else {
            $(".navbar").removeClass("nav-color-change");
            $(".nav-link").removeClass("nav-link-white");
            $(".hero-text").removeClass("nav-link-white");
        }
    }); //missing );






    // document ready  
});