/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//function openNav() {
//  document.getElementById("mySidenav").style.width = "250px";
//  document.getElementById("mySidenav").style.width = "220px";
//  document.getElementById("main").style.marginLeft = "250px";
//  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//}

//function closeNav() {
//  document.getElementById("mySidenav").style.width = "0";
//  document.getElementById("main").style.marginLeft= "0";
//  document.body.style.backgroundColor = "white";
//}

var _status = document.getElementById("nav-toggle");
var _contIn = document.getElementById("mySidenav");

function openNav() {
    if (!_status.checked) {
        _contIn.style.transition = "all 0.5s";
        _contIn.style.width = "220px";
    } else {
        _contIn.style.transition = "all 0.5s";
        _contIn.style.width = "0px";
    }
    console.log("function: openNav");

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    console.log("function: closeNav");
}

//  Fecha o menu ao clicar fora
document.addEventListener("click", function(event) {
    // verifica se clicou fora do menu e fora do botão
    if (!_contIn.contains(event.target) && !event.target.closest("label[for='nav-toggle']")) {
        closeNav();
        _status.checked = false; // garante que o checkbox volte pro estado fechado
    }
});
