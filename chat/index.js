function preview() {
  var text = document.getElementById("input").value;
  var result = document.getElementById("output");
  var image = document.getElementById("preview");
  var def = "./img/def.png";
  var happy = "./img/happy.png";
  var sound = document.getElementById("sound");
  result.innerHTML = text;
  image.src = happy;
  image.alt = "happy";
  sound.play();
  setTimeout(() => {
    image.src = def;
    image.alt = "def";
    result.innerHTML = "";
  }, 4200);
}