
var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",

//  Faz o card passar e girar
    coverflowEffect: {
//        rotate: 20,
        rotate: 35,
        stretch: 0,
//  Efeito de profundidade
        depth: 300,
        modifier: 1,
        slideShadows: true
    },

//  Habilita a paginação
    pagination: {
        el: ".swiper-pagination"
    },

//  Habilita função das setas via teclado
    keyboard: {
        enabled: true,
        onlyInViewport: false
    },

//  Habilitar a função dos controles
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }

});
