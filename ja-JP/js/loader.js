window.onload = setTimeout(loader,5000);
function loader() {
    var loader = document.getElementById("loader");
    var html = document.getElementById("html");
    loader.style.display = "none";
    html.style.display = "block";
}