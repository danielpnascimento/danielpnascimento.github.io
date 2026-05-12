fetch('./version.json?v=' + new Date().getTime())
  .then(response => response.json())
  .then(data => {
    document.getElementById('app-version').innerText = `v${data.version}`;
  });



