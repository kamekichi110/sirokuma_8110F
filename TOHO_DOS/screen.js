document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
  var OUT = document.getElementById('canvas');
  OUT.style.margin = "0px auto";
  OUT.style.height = "100%";
  OUT.style.aspectRatio = "4 / 3";
  OUT.style.imageRendering = 'pixelated';
  changeAspect(4, 3);
  },2560);
});
    
      // 無音の音声を生成して再生する関数
      function playSilentAudio() {
        try {
          const audioContext = new (window.AudioContext || window.webkitAudioContext)();
          
          // 1秒間の無音のバッファを生成
          const buffer = audioContext.createBuffer(1, audioContext.sampleRate, audioContext.sampleRate);
          const source = audioContext.createBufferSource();
          source.buffer = buffer;
          source.connect(audioContext.destination);
          gainNode.connect(audioCtx.destination);
          gainNode.gain.value = 20;

          // 無音の音声を再生
          source.start(0);
          console.log("無音の音声を再生しました。");
        } catch (error) {
          console.error("音声の再生中にエラーが発生しました:", error);
        }
      }

      // アラートを表示し、無音の音声を再生
      console.log("東方旧作エミュレーターです。\n音声が流れるため、注意してください。");
      playSilentAudio();
  
function changeAspect(w, h) {
  const canvas = document.getElementById('canvas');
  const control = document.getElementById('fullscreenItem');
  const buttons = document.getElementById('fullscreenButtons');
  canvas.style.width = "auto";
  canvas.style.height = "100%";
  canvas.style.margin = "0 auto";
  canvas.style.aspectRatio = "4 / 3";
  buttons.style.width = "100%";
  buttons.style.height = "calc(100vw * 3 / 4)";
  buttons.style.margin = "0 auto";
  control.style.width = "100%";
  control.style.height = "calc(100vw * " + h + " / " + w + ")";
  control.style.margin = "0 auto";
  var logs = `CHANGE-ASPECT-SIZE: canvas and control area aspect = 4:3, screen area aspect = 16:9.`
}
