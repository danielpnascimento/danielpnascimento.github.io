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

