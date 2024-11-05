let vistCounter = document.getElementById("counter");

fetchCounterApi();

function fetchCounterApi() {
  fetch('https://api.countapi.xyz/update/erfy/erfyDev/?amount=1')
//  fetch('https://api.countapi.xyz/hit/danielpnascimento.github.io/visits')
      .then(res => res.json())
    .then(res => {
      vistCounter.innerHTML = res.value;
    });
}