
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(window).scroll( function () {
    if ($(window).scrollTop() > 200) {
        $(".navbar").addClass("fixed");
        
    }
    else {
        $(".navbar").removeClass("fixed");
    }
}
)

let feat = Array.from($(".feat"));
console.log(typeof(feat));
let l = feat.length;
console.log(l);



new WOW().init();

//portfolio

$(document).ready(function () {

    $(".filter-button").click(function () {
        var value = $(this).attr('data-filter');

        let buttons = Array.of($(".filter-button"));
        for(i=0; i < buttons.length; i++) {
            buttons[i].removeClass("active");
        }

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
        $(this).addClass("active");
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
    $("#all-btn").addClass("active");

});

$('.menu-btn').click(()=> {
    console.log('menu')
    $(".mobmenu").toggle(300);
    //if ($(".mobmneu").hasClass(""))
})
// hididng the menu on start
$(".mobmenu").hide();

console.log("fine");