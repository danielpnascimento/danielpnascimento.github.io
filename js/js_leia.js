/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("mais");
    var btnText = document.getElementById("myBtnLeia");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Mais sobre mim";
        moreText.style.display = "none";
        document.getElementById("sobre").scrollIntoView({ behavior: 'smooth' });
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Fechar";
        moreText.style.display = "inline";
    }


}