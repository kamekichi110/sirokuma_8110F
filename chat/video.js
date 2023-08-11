function BGM_start() {
  var BGM = document.getElementById("BGM");
  BGM.play();
}
function BGM_stop() {
  var BGM = document.getElementById("BGM");
  BGM.pause();
  BGM.currentTime = 0;
}