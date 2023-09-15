function start_stream() {
const cameraSize = { w: 1600, h: 900 };
const canvasSize = { w: 16, h: 9 };
const resolution = { w: 1600, h: 900 };
let video;
let media;
let canvas;
let canvasCtx;

// video要素をつくる
video          = document.createElement('video');
video.id       = 'video';
video.width    = cameraSize.w;
video.height   = cameraSize.h;
video.autoplay = true;
document.getElementById('videoPreview').appendChild(video);

// video要素にWebカメラの映像を表示させる
media = navigator.mediaDevices.getUserMedia({
  audio: false,
  video: {
    width: { ideal: resolution.w },
    height: { ideal: resolution.h }
  }
}).then(function(stream) {
  video.srcObject = stream;
});

// canvas要素をつくる
canvas        = document.createElement('canvas');
canvas.id     = 'canvas';
canvas.width  = canvasSize.w;
canvas.height = canvasSize.h;
document.getElementById('canvasPreview').appendChild(canvas);

// コンテキストを取得する
canvasCtx = canvas.getContext('2d');
canvasCtx.scale(10,10);

// video要素の映像をcanvasに描画する
_canvasUpdate();
setInterval(function(){
  canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);
  requestAnimationFrame(_canvasUpdate);
}, 1000/30);
}

function _canvasUpdate() {
  canvasCtx.drawImage(video, 0, 0, canvas.width, canvas.height);
  requestAnimationFrame(_canvasUpdate);
};
