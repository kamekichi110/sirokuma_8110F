function preview() {
    var text = document.getElementById("input");
    var result = document.getElementById("output");
    var image = document.getElementById("preview");
    var def = "./img/def.png";
    var happy = "./img/happy.png";
    var list = document.getElementById("list").value;
    var sound = document.getElementById(list);
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
    image.alt = "default";
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
  var list = document.getElementById("list").value;
  var sound = document.getElementById(list);
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
    image.alt = "default";
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
  var list = document.getElementById("list").value;
  var sound = document.getElementById(list);
  var btn1 = document.getElementById("btn1");
  output.innerHTML = input;
  image.src = guruguru;
  image.alt = "guruguru";
  textarea.focus();
  sound.play();
  setTimeout(() => {
    output.innerHTML = "";
    btn1.disabled = null;
    image.src = def;
    image.alt = "default";
  }, 5200);
}
function end() {
  var img = document.getElementById("preview");
  var input = document.getElementById("input");
  var output = document.getElementById("output");
  var def = "./img/def.png";
  var happy = "./img/happy.png";
  var text = "ご視聴、ありがとう<br>ございました！！";
  var select = document.getElementById("list").value;
  var sound = document.getElementById(select);
  output.innerHTML = text;
  img.src = happy;
  img.alt = "happy";
  input.focus();
  sound.play();
  setTimeout(() => {
    img.src = def;
    img.alt = "default";
    output.innerHTML = "";
  }, 5200)
}
function bgChange() {
  var data = document.getElementById("bg_img").value;
  var change = document.getElementById("bg");
  change.style.backgroundImage = `url(${data})`;
}
function header() {
  var header = document.getElementById("header");
  var ct_header = document.getElementById("ct_header");
  header.innerHTML = ct_header.value;
}
function topic() {
  var topic = document.getElementById("topic");
  var ct_topic = document.getElementById("ct_topic");
  topic.innerHTML = ct_topic.value;
}