// $(document).ready(function () {

// // full screen tellow backgroud on scroll:
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();

//         //>=, not <=
//         if (scroll >= 60 && window.innerWidth > 575) {
//             //clearHeader, not clearheader - caps H
//             $(".navbar").addClass("nav-color-change");

//             // $(".hero-text").hide();
//         } else {
//             $(".navbar").removeClass("nav-color-change");
//             // $(".hero-text").show();

//         }
//     }); //missing );


// // side-nav-close button



//     // document ready  
// });


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
});



