$('.nisha').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout:7000,
    autoplaySpeed:5000,
    // stagePadding:50,
});



    // // If you want to control the embeds, you’ll need to create a Player object.
    // // You can pass either the `<div>` or the `<iframe>` created inside the div.
    // const handstickPlayer = new Vimeo.Player('handstick');
    // handstickPlayer.on('play', function() {
    //     console.log('played the handstick video!');
    // });

    // const playerTwoPlayer = new Vimeo.Player('playertwo');
    // playerTwoPlayer.on('play', function() {
    //     console.log('played the player 2.0 video!');
    // });

    
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items:4,
        margin:20,
        autoplay: true,
        autoplayTimeout:7000,
        autoplaySpeed:5000,
        responsive:{
            0:{
                items:1,
                dots:true
            },
            600:{
                items:3,
                dots:true,
            },
            1000:{
                items:4,
                dots:true,
            }
        }
    });