/*////////////MODAL\\\\\\\\\\\\*/

let imagens = document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal = "";

for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', function () {

        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        //Chama o modal que esta oculto
        modal.classList.toggle('modal_active');
    });
}
//Função para o botão fechar
btClose.addEventListener('click', function () {
    modal.classList.toggle('modal_active');
});

