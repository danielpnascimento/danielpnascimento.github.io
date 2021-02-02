// Modo - Portfólio

// Executa a função e mostra todas as colunas
filterSelection("todos");
function filterSelection(c) {
    var x, y;
    x = document.getElementsByClassName("columnPort");
    if (c === "todos")
        c = "";

    // Adicione a classe "show" (display: block) aos elementos filtrados
    //  e remova a classe "show" dos elementos que não estão selecionados
    for (y = 0; y < x.length; y++) {
        filtraRemovClass(x[y], "showPort");
        if (x[y].className.indexOf(c) > -1)
            filtraMostraClass(x[y], "showPort");
    }
}

// Mostrar elementos filtrados
function filtraMostraClass(element, name) {
    var y, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (y = 0; y < arr2.length; y++) {
        if (arr1.indexOf(arr2[y]) === -1) {
            element.className += " " + arr2[y];
        }
    }
}

//Ocultar elementos que não estão selecionados
function filtraRemovClass(element, name) {
    var y, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (y = 0; y < arr2.length; y++) {
        while (arr1.indexOf(arr2[y]) > -1) {
            arr1.splice(arr1.indexOf(arr2[y]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Adicionar classe ativa ao botão atual (realce)
var btnContainerFilt = document.getElementById("btnFiltroPort");
var btnsRealce = btnContainerFilt.getElementsByClassName("btn_filtro");
for (var y = 0; y < btnsRealce.length; y++) {
    btnsRealce[y].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

