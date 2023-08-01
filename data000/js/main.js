function start() {
  var load = document.getElementById("load");
  load.style.display = "none";
  var img = document.getElementById("entity");
  img.src = "./img/def.png";
  img.alt = "default";
  var display = document.getElementById("content");
  var text =
    "どうもこんにちは。<br>8000系と申します。<br>下のNEXTボタンを押すと<br>問題が始まるよ！";
  display.innerHTML = text;
  var btn = document.getElementById("btn");
  btn.innerHTML = "<button onclick='next0()'>NEXT</button>";
}
function next0() {
  var text = document.getElementById("content");
  var inner =
    "東武8000系は〇〇の103系<br>と呼ばれている。<br>〇〇に入る文字を以下の<br>ボタンを押して選択してください。";
  text.innerHTML = inner;
  var btn = document.getElementById("btn");
  var sec0 = "<button onclick='sec11()'>国鉄</button>";
  var sec1 = "<button onclick='sec10()'>私鉄</button>";
  var sec2 = "<button onclick='sec11()'>日本</button>";
  var sec3 = "<button onclick='sec11()'>関東</button>";
  var br = "<br>";
  btn.innerHTML = sec0 + br + sec1 + br + sec2 + br + sec3;
}
function sec10() {
  alert("正解！");
  var img = document.getElementById("entity");
  img.src = "./img/happy.png";
  img.alt = "happy";
  var comment = document.getElementById("comment");
  comment.innerHTML = "すごい！<br>よくわかったね！";
  setTimeout(() => {
    img.src = "./img/def.png";
    img.alt = "default";
    var btn = document.getElementById("btn");
    btn.innerHTML = "<button onclick='end()'>NEXT</button>";
  }, 2000);
}
function sec11() {
  alert("不正解…答えは「私鉄」でした！");
  var img = document.getElementById("entity");
  img.src = "./img/happy.png";
  img.alt = "happy";
  var comment = document.getElementById("comment");
  comment.innerHTML = "残念…<br>次の問題は正解できるように<br>頑張ろう！";
  setTimeout(() => {
    img.src = "./img/def.png";
    img.alt = "default";
    var btn = document.getElementById("btn");
    btn.innerHTML = "<button onclick='end()'>NEXT</button>";
  }, 2000);
}
function end() {
  var text = document.getElementById("content");
  var inner = "遊んでくれてありがとう！<br>また来てね！";
  text.innerHTML = inner;
  document.getElementById("entity").src = "./img/happy.png";
  var btn = document.getElementById("btn");
  btn.innerHTML = "<button onclick='reset()'>プログラムリセット</button>";
}
function reset() {
  document.getElementById("content").innerHTML = "";
  document.getElementById("entity").src = "./img/happy.png";
  document.getElementById("entity").alt = "happy";
  document.getElementById("load").style.display = "block";
  document.getElementById("comment") = "";
}