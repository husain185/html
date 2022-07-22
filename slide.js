$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout:7000,
    nav:true,
    autoplaySpeed:5000,
    // stagePadding:50,
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});