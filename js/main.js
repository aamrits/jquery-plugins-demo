(function($) {
    $(document).ready(function() {
        //owl Carousel 
        $('.basic-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:3
                }
            }
        });

        //owl Carousel vertical slider
        $(".vertical-carousel").owlCarousel({
            loop: true,
            autoplay: true,
            items: 1,           //put "1" to work 
            nav: true,
            autoplayHoverPause: true,
            animateOut: 'slideOutUp',
            animateIn: 'slideInUp'
        });

        //flexslider.js
        $('.flexslider').flexslider({
            animation: "slide"
        });

        //bxslider.js
        $('.slider').bxSlider({
            hideControlOnEnd: true,    //to show prev, next arrow
            minSlides: 3               // shows 3slides
        });

        //initialize swiper when document ready
        var mySwiper = new Swiper ('.swiper-container', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            }
                             
        });

        //typed.js
        var options = {
            strings: ["This is an example of <b>typed.js</b>", "This is the second sentence", "It will continue typing as <b>loop: true</b>"],
            typeSpeed: 40,
            loop: true
        }
        var options1 = {
            strings: ["Sliders", "Filters", "Lighboxes", "Typed"],
            typeSpeed: 60,
            loop: true
        }          
        var typed = new Typed("#typed", options);
        var plugins = new Typed("#plugins", options1);

        //roundslider.js
        $("#type").roundSlider({
            value: 45,
        });
        $("#shape").roundSlider({
            value: 60,
            sliderType: "min-range"
        });    

        //timeline.js
        $('.js-timeline').Timeline();

        //magnific popup        
        $('.parent-gallery').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled:true
                }
            });
        });
    
        //headroom.js
        $('.navbar').headroom();

        //highlight.js
        hljs.initHighlightingOnLoad();

        //clipboard.js
        var clipboard = new Clipboard('.btn');
    
        clipboard.on('success', function(e) {
            console.log(e);
        });
    
        clipboard.on('error', function(e) {
            console.log(e);
        });

    });
})(jQuery);

/*
*********************************************
Window scroll
*********************************************
*/
$(window).scroll(function() {
    if ($(document).scrollTop() > 300) {
        $("nav").addClass('shrink');
    }
    else {
        $("nav").removeClass('shrink');
    }
})


