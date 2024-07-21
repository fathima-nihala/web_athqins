
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3.5,
    // loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
delay: 2500,
disableOnInteraction: false,
},
});