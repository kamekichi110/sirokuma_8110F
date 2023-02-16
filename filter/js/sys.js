var element = document.getElementById("viewer");

element.addEventListener("load", function(event) {
  let url = document.getElementById("viewer").contentWindow.location.href
  if (url = includes('youtube.com')) {
    viewer.location = "error.html"
  } //true
});