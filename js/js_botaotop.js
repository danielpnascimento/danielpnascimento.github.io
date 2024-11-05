//Get the button:
mybutton = document.getElementById("myBtnTopo");

// Quando o usuário rolar 20px da parte superior do documento, mostre o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Quando o usuário clicar no botão, role para a parte superior do documento
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}


