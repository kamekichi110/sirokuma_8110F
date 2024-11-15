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
  var logs = `CHANGE-ASPECT-SIZE: canvas and control area aspect = 4:3, screen area aspect = 16:9.`
}

document.addEventListener('DOMContentLoaded', () => {
    // スタイルを適用する関数
    function applyStyles() {
        const fullscreenItem = document.getElementById('fullscreenItem');
        const fullscreenButtons = document.getElementById('fullscreenButtons');
        const canvas = document.querySelector('canvas.emscripten');
        const buttons = fullscreenButtons.querySelectorAll('input');

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

            // ボタンのスタイルを設定
            buttons.forEach(button => {
                button.style.position = 'absolute';
                button.style.width = '64px';
                button.style.height = '32px';
                button.style.fontSize = '18px';
                button.style.fontWeight = '900';
                button.style.borderRadius = '48px';
                button.style.padding = '0';
                button.style.margin = '0';
                button.style.border = 'none';
                button.style.background = 'gray';
                button.style.color = 'white';
            });

            // 各ボタンの位置を調整
            buttons.forEach(button => {
                const value = button.value;
                switch (value) {
                    case '^':
                        button.style.bottom = '10%';
                        button.style.left = '10%';
                        button.style.width = '48px';
                        button.style.height = '48px';
                        button.style.textAlign = 'center';
                        break;
                    case 'v':
                        button.style.bottom = '10%';
                        button.style.left = '10%';
                        button.style.width = '48px';
                        button.style.height = '48px';
                        button.style.textAlign = 'center';
                        break;
                    case '<':
                        button.style.bottom = '20%';
                        button.style.left = '4%';
                        button.style.width = '48px';
                        button.style.height = '48px';
                        button.style.textAlign = 'center';
                        break;
                    case '>':
                        button.style.bottom = '20%';
                        button.style.left = '20%';
                        button.style.width = '48px';
                        button.style.height = '48px';
                        button.style.textAlign = 'center';
                        break;
                    case 'Esc':
                        button.style.bottom = '72px';
                        button.style.right = '24px';
                        button.style.width = '48px';
                        button.style.height = '24px';
                        button.style.textAlign = 'center';
                        button.style.fontSize = '12px';
                        break;
                    case 'Return':
                        button.style.bottom = '72px';
                        button.style.right = '74px';
                        button.style.width = '48px';
                        button.style.height = '24px';
                        button.style.textAlign = 'center';
                        button.style.fontSize = '12px';
                        break;
                    case 'Shift':
                        button.style.bottom = '192px';
                        button.style.right = '24px';
                        button.style.width = '48px';
                        button.style.height = '24px';
                        button.style.textAlign = 'center';
                        button.style.fontSize = '12px';
                        break;
                    case 'Space':
                        button.style.top = '12px';
                        button.style.right = '12px';
                        button.style.width = '48px';
                        button.style.height = '24px';
                        button.style.textAlign = 'center';
                        button.style.fontSize = '12px';
                        break;
                    case 'Z':
                        button.style.bottom = '32px';
                        button.style.right = '24px';
                        button.style.width = '48px';
                        button.style.height = '24px';
                        button.style.textAlign = 'center';
                        button.style.fontSize = '12px';
                        break;
                    case 'X':
                        button.style.bottom = '32px';
                        button.style.right = '74px';
                        button.style.width = '48px';
                        button.style.height = '24px';
                        button.style.textAlign = 'center';
                        button.style.fontSize = '12px';
                        break;
                }
            });
        }
    }

    // ページ読み込み後にスタイルを適用
    setTimeout(applyStyles, 2000); // 2秒待機

    // 画面サイズ変更時や向き変更時にスタイルを適用
    window.addEventListener('resize', applyStyles);
    window.addEventListener('orientationchange', applyStyles);
  window.addEventListener('fullscreenchange', applyStyles);
});

