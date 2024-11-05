const elementsToAnimate = document.querySelectorAll('[data-animation]');
const classOfAnimation = 'complete';

function animationOnScroll() {
    const currentPositionY = window.pageYOffset + ((window.innerHeight * 3) / 4);
    elementsToAnimate.forEach(function (element) {
        if (currentPositionY > element.offsetTop) {
            element.classList.add('complete');
        } else {
// Faz o efeito ser reiniciado
            element.classList.remove('complete');
        }
    });
}

window.addEventListener('scroll', function () {
    animationOnScroll();
});

