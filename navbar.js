//script to use the navbar across every page
fetch('navbar.html')
.then(response => response.text())
.then(navbar => {
    document.getElementById('navbar-container').innerHTML=navbar;
});