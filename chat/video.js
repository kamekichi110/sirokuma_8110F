function BGM_start() {
  var BGM = document.getElementById("BGM");
  BGM.play();
}
function BGM_stop() {
  var BGM = document.getElementById("BGM");
  BGM.pause();
  BGM.currentTime = 0;
}
function ImageReset() {
  document.getElementById("topicImage").src = "./topic.png";
}
$("#myImage").on("change", function (e) {
  var reader = new FileReader();
  reader.onload = function (e) {
    $("#topicImage").attr("src", e.target.result);
  };
  reader.readAsDataURL(e.target.files[0]);
});