
var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
//Faz o card passado girar
    coverflowEffect: {
//        rotate: 20,
        rotate: 35,
        stretch: 0,
//    Efeito de profundidade
//    depth: 350,
        depth: 300,
        modifier: 1,
        slideShadows: true
    },

//  Habilita a paginação
    pagination: {
        el: ".swiper-pagination",
         clickable: true,
    },

//  Faz o slider correr sozinho e ele reinicia sozinho tbm
//    autoplay: {
//        delay: 4000
//    },

//Habilita função das setas via teclado
    keyboard: {
        enabled: true,
        onlyInViewport: false
    },

//  habilitar a função dos controles
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }

//  habiltar , no final do } caso for adcionar mais js


});
