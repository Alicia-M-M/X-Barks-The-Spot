$(document).ready(function () {


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 60) {
            //clearHeader, not clearheader - caps H
            $(".navbar").addClass("nav-color-change");
            // $(".hero-text").hide();
        } else {
            $(".navbar").removeClass("nav-color-change");
            // $(".hero-text").show();
        }
    }); //missing );






    // document ready  
});

