$(function() {
    const swiper = new Swiper('.swiper', {
        speed: 400,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
        spaceBetween: 0,
        loop: true
    });
});