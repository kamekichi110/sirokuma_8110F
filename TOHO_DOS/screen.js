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
  console.log(w,h);
  var logs = `CHANGE-ASPECT-SIZE: canvas and control area aspect = 4:3, screen area aspect = 16:9.`
}

document.addEventListener('DOMContentLoaded', () => {
    // スタイルを適用する関数
    function applyStyles() {
        const fullscreenItem = document.getElementById('fullscreenItem');
        const fullscreenButtons = document.getElementById('fullscreenButtons');
        const canvas = document.querySelector('canvas.emscripten');
      if (document.getElementById('fullscreenItem')) {
    document.querySelectorAll('.softkbd, .keyboard').forEach(function(element) {
        element.style.display = 'none';
    });
}

        // 全画面表示スタイルを適用
        fullscreenItem.style.position = 'relative';
        fullscreenItem.style.display = 'block';
        fullscreenItem.style.background = 'gray';
        fullscreenItem.style.width = '100vw';
        fullscreenItem.style.height = '100vh';

        // 横画面時のスタイルを適用
        if (window.matchMedia('(orientation: landscape)').matches) {
            // canvasのスタイルを変更
            canvas.style.position = 'absolute';
            canvas.style.top = '50%';
            canvas.style.left = '50%';
            canvas.style.transform = 'translate(-50%, -50%)';
            canvas.style.width = 'auto';
            canvas.style.height = '100%';
            canvas.style.maxWidth = '133.33%'; // 4:3比率の最大幅
            canvas.style.aspectRatio = '4 / 3';

            // コントローラーのスタイルを変更
            fullscreenButtons.style.position = 'absolute';
            fullscreenButtons.style.top = '0';
            fullscreenButtons.style.left = '0';
            fullscreenButtons.style.width = '100vw';
            fullscreenButtons.style.height = '100vh';
            fullscreenButtons.style.background = 'none';
            fullscreenButtons.style.opacity = '1';
            fullscreenButtons.style.display = 'block';
        }
    }

    // ページ読み込み後にスタイルを適用
    setTimeout(applyStyles, 2000); // 2秒待機

    // 画面サイズ変更時や向き変更時にスタイルを適用
    window.addEventListener('resize', applyStyles);
    window.addEventListener('orientationchange', applyStyles);

    // 全画面開始時にスタイルを適用
    document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
            applyStyles(); // 全画面モードに入った時にスタイルを適用
        }
    });

    // 2秒後にスタイルを適用
    setTimeout(applyStyles, 1);
});
