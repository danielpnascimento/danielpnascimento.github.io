
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("mais");
  var btnText = document.getElementById("myBtnLeia");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Mais sobre mim"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Fechar"; 
    moreText.style.display = "inline";
  }
}