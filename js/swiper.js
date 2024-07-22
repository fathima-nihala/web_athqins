
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
    breakpoints: {
        768:{
            slidesPerView: 3.5,
            // slidesPerGroup: 2,
        },
        400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        320:{
            slidesPerView: 2,
            slidesPerGroup: 2,
        }
    }
});