function start() {
  // 対象となるID名
  var id = "sounds";

  // 初回以外だったら音声ファイルを巻き戻す
  if (typeof document.getElementById(id).currentTime != "undefined") {
    document.getElementById(id).currentTime = 0;
  }

  // [ID:sound-file]の音声ファイルを再生[play()]する
  document.getElementById(id).play();
}

function reset() {
  // 対象となるID名
  var id = "sounds";
  var id2 = "vocal";

  document.getElementById(id).pause();
  document.getElementById(id).currentTime = 0;
  document.getElementById(id2).play();
  document.getElementById(id2).currentTime = 0;
}