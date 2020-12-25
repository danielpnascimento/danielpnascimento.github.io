
function openNav() {
//    220 e o tamanho da largura do header lateral
    document.getElementById("mySidenav").style.width = "220px";
 //Sobrepoem o main
//  document.getElementById("main").style.marginLeft = "220px";
//  document.getElementById("Sidenav").style.marginLeft = "200px";
//Faz um fundo escurecido ao abrir o menu lateral
//    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
//    document.getElementById("main").style.marginLeft = "0";
    //Desloca somente a classe desejada
//    document.getElementById("bt_menulateral").style.marginLeft = "0";
//volta com o fundo branco ao abrir o menu lateral
//    document.body.style.backgroundColor = "white";

}


