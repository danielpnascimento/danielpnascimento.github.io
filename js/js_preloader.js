//Função para inicialização e desativação do loader para que ele não fique rodando
//em segundo plano
//var preloader = document.getElementById('loading');
var preloader = document.getElementById('loader');
//function myFunction() {
//renomado para não conflitar com o mesmo nome da função do leia mais do sobre
function preFunction() {
    preloader.style.display = 'none';

}

//to make the loader stop after loading page completely 
//$(document).ready(function () {
////Preloader
//    $(window).load(function () {
//        preloaderFadeOutTime = 500;
//        function hidePreloader() {
//            var preloader = $('.spinner-wrapper');
//            preloader.fadeOut(preloaderFadeOutTime);
//        }
//        hidePreloader();
//    });
//});

