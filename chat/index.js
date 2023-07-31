  var text = document.getElementById("input");
  var result = document.getElementById("output");
  var image = document.getElementById("preview");
  var def = "./img/def.png";
  var happy = "./img/happy.png";
  var guruguru = "./img/guruguru.png";
  var sound = document.getElementById("sound");
  function preview() {
    var text = document.getElementById("input");
    var result = document.getElementById("output");
    var image = document.getElementById("preview");
    var def = "./img/def.png";
    var happy = "./img/happy.png";
    var sound = document.getElementById("sound");
    var btn = document.getElementById("send");
    var btn0 = document.getElementById("send0");
  result.innerHTML = text.value;
  image.src = happy;
  image.alt = "happy";
  btn.disabled = "disabled";
  btn0.disabled = "disabled";
  setTimeout(() => {
    sound.play();
    text.value = "";
  }, 250);
  setTimeout(() => {
    image.src = def;
    image.alt = "def";
    result.innerHTML = "";
    btn.disabled = null;
    btn0.disabled = null;
  }, 5200);
}
function preview_guruguru() {
  var text = document.getElementById("input");
  var result = document.getElementById("output");
  var image = document.getElementById("preview");
  var def = "./img/def.png";
  var guruguru = "./img/guruguru.png";
  var sound = document.getElementById("sound");
  var btn = document.getElementById("send");
  var btn0 = document.getElementById("send0");
  result.innerHTML = text.value;
  image.src = guruguru;
  image.alt = "guruguru";
  btn.disabled = "disabled";
  btn0.disabled = "disabled";
  setTimeout(() => {
    sound.play();
    text.value = "";
  }, 250);
  setTimeout(() => {
    image.src = def;
    image.alt = "def";
    result.innerHTML = "";
    btn.disabled = null;
    btn0.disabled = null;
  }, 5200);
}