$(document).ready(function(){
    $('.slick-slider').slick({
        dots: false,
        slidesToShow: 3, 
        slidesToScroll: 1, 
        prevArrow: '<button class="slick-prev">&#9665;</button>',
        nextArrow: '<button class="slick-next">&#9655;</button>',
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
