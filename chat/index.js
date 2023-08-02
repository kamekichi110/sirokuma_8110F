  var text = document.getElementById("input");
  var result = document.getElementById("output");
  var image = document.getElementById("preview");
  var def = "./img/def.png";
  var happy = "./img/happy.png";
  var guruguru = "./img/guruguru.png";
  var sound = document.getElementById("sound");

  window.onload = load();
  function load() {
    var screen = document.getElementById("loader");
    var loaded = document.getElementById("loaded");
    var version = document.getElementById("ver");
    var BINtext = "ver[1.2.0(w53a)]----{data_point='56d38w3a'}"
    setTimeout(() => {
      screen.style.display = "none";
      loaded.style.display = "block";
      version.innerHTML = BINtext;
      alert('プログラムデータロード完了');
    }, 5000);
  }


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
  sound.play();
  text.value = "";
  text.focus();
  btn.disabled = "disabled";
  btn0.disabled = "disabled";
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
  sound.play();
  text.value = "";
  text.focus();
  image.alt = "guruguru";
  btn.disabled = "disabled";
  btn0.disabled = "disabled";
  setTimeout(() => {
    image.src = def;
    image.alt = "def";
    result.innerHTML = "";
    btn.disabled = null;
    btn0.disabled = null;
  }, 5200);
}
function text_000() {
  var input = "こんにちは。<br>ゆっくり8000です！<br>よろしくお願いします。";
  var textarea = document.getElementById("input");
  var output = document.getElementById("output");
  var image = document.getElementById("preview");
  var def = "./img/def.png";
  var guruguru = "./img/guruguru.png"
  var sound = document.getElementById("sound");
  var btn1 = document.getElementById("btn1");
  output.innerHTML = input;
  image.src = guruguru;
  image.alt = "guruguru";
  sound.play();
  setTimeout(() => {
    output.innerHTML = "";
    btn1.disabled = null;
    image.src = def;
    image.alt = "default";
    textarea.focus();
  }, 5200);
}