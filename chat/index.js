  var text = document.getElementById("input").value;
  var result = document.getElementById("output");
  var image = document.getElementById("preview");
  var def = "./img/def.png";
  var happy = "./img/happy.png";
  var guruguru = "./img/guruguru.png";
  var sound = document.getElementById("sound");
  function preview() {
    var text = document.getElementById("input").value;
    var result = document.getElementById("output");
    var image = document.getElementById("preview");
    var def = "./img/def.png";
    var happy = "./img/happy.png";
    var sound = document.getElementById("sound");
    var btn = document.getElementById("send");
  result.innerHTML = text;
  image.src = happy;
  image.alt = "happy";
  btn.setAttribute("disabled", true);
  setTimeout(() => {
    sound.play();
  }, 250);
  setTimeout(() => {
    image.src = def;
    image.alt = "def";
    result.innerHTML = "";
    btn.removeAttribute("disabled");
  }, 5200);
}
function preview_guruguru() {
  var text = document.getElementById("input").value;
  var result = document.getElementById("output");
  var image = document.getElementById("preview");
  var def = "./img/def.png";
  var guruguru = "./img/guruguru.png";
  var sound = document.getElementById("sound");
  var btn = document.getElementById("send");
  result.innerHTML = text;
  image.src = guruguru;
  image.alt = "guruguru";
  btn.setAttribute("disabled", true);
  setTimeout(() => {
    sound.play();
  }, 250);
  setTimeout(() => {
    image.src = def;
    image.alt = "def";
    result.innerHTML = "";
    btn.removeAttribute("disabled");
  }, 5200);
}