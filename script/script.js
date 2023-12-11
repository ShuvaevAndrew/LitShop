$(document).ready(function(){
    $('.slick-slider').slick({
        dots: false,
        slidesToShow: 3, 
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.slick-second').slick({
        dots: false,
        slidesToShow: 5, 
        slidesToScroll: 5, 
        autoplay: false,
        autoplaySpeed: 0,
        prevArrow: '<button class="slick-prev"></button>',
        nextArrow: '<button class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
});