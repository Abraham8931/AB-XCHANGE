//script to use the footer across every page
fetch('footer.html')
.then(response => response.text())
.then(footer => {
    document.getElementById('footer-container').innerHTML=footer;
});