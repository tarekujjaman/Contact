$('.slider_1').owlCarousel({
    
    autoplay: true,
    margin:50,
    autoplayTimeout: 2000,
    loop:true,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})