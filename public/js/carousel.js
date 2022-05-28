const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});
