  var text = document.getElementById("input").value;
  var result = document.getElementById("output");
  var image = document.getElementById("preview");
  var def = "./img/def.png";
  var happy = "./img/happy.png";
  var guruguru = "./img/guruguru.png";
  var sound = document.getElementById("sound");
  function preview() {
  result.innerHTML = text;
  image.src = happy;
  image.alt = "happy";
  setTimeout(() => {
    sound.play();
  }, 250);
  setTimeout(() => {
    image.src = def;
    image.alt = "def";
    result.innerHTML = "";
  }, 5200);
}
function preview_guruguru() {
  result.innerHTML = text;
  image.src = guruguru;
  image.alt = "guruguru";
  setTimeout(() => {
    sound.play();
  }, 250);
  setTimeout(() => {
    image.src = def;
    image.alt = "def";
    result.innerHTML = "";
  }, 5200);
}