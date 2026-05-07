const elementsToAnimate = document.querySelectorAll('[data-animation]');
const classOfAnimation = 'complete';

const sections = document.querySelectorAll('header[id], section[id]');
const navLinks = document.querySelectorAll('.nav a');

function animationOnScroll() {
    const currentPositionY = window.pageYOffset + ((window.innerHeight * 3) / 4);
    
    // Animação dos elementos
    elementsToAnimate.forEach(function (element) {
        if (currentPositionY > element.offsetTop) {
            element.classList.add('complete');
        } else {
            // Faz o efeito ser reiniciado
            element.classList.remove('complete');
        }
    });

    // ScrollSpy: Destacar o menu conforme a sessão ativa
    let currentSection = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener('scroll', function () {
    animationOnScroll();
});

// Executa uma vez ao carregar para definir o estado inicial
window.addEventListener('load', function () {
    animationOnScroll();
});


