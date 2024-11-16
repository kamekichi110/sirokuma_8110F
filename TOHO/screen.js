document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
  var OUT = document.getElementById('canvas');
  OUT.style.margin = "0px auto";
  OUT.style.width = "100%";
  OUT.style.aspectRatio = "4 / 3";
  OUT.style.imageRendering = 'pixelated';
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
