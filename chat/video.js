function start() {
    setInterval(() => {
html2canvas(document.getElementById("bg"), {
  // オプション
  width: 320, // 幅を設定
  height: 180, // 高さを設定
  windowWidth: 320, // html2canvas の幅
}).then(function (canvas) {
  document.getElementById("result").src = canvas.toDataURL();
});
    },500);
    var canvas = document.getElementById("result");
    const stream = canvas.captureStream();
    recorder = new MediaRecorder(stream, { mimeType: "video/webm;codecs=vp9" });
    recorder.start();
}
function stop() {
    recorder.stop();
}
