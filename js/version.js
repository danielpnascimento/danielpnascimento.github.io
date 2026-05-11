fetch('./version.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('app-version').innerText = `v${data.version}`;
  });



  