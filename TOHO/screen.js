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
  
(function() {
  try {
    const findCanvas = () => {
      const canvases = document.getElementsByTagName('canvas');
      if (canvases.length === 0) {
        alert('Canvasが見つかりません。Phina.jsのcanvasが生成されるまでお待ちください。');
        return null;
      }
      return canvases[0];
    };

    const canvas = findCanvas();
    if (!canvas) return;

    const modal = document.createElement('div');
    modal.id = 'modal';
    document.body.appendChild(modal);

    const recordBtn = document.createElement('button');
    recordBtn.id = 'recordBtn';
    recordBtn.innerText = '録画開始';
    modal.appendChild(recordBtn);

    const stopBtn = document.createElement('button');
    stopBtn.id = 'stopBtn';
    stopBtn.innerText = '録画停止';
    stopBtn.style.display = 'none';
    modal.appendChild(stopBtn);

    modal.style.position = 'fixed';
    modal.style.top = '10px';
    modal.style.left = '10px';
    modal.style.backgroundColor = 'rgba(255,255,255,0.8)';
    modal.style.padding = '10px';
    modal.style.borderRadius = '8px';
    modal.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.1)';
    
    recordBtn.style.display = 'block';
    recordBtn.style.marginBottom = '10px';
    recordBtn.style.padding = '10px';
    recordBtn.style.backgroundColor = '#4CAF50';
    recordBtn.style.color = 'white';
    recordBtn.style.border = 'none';
    recordBtn.style.borderRadius = '5px';
    recordBtn.style.cursor = 'pointer';
    
    stopBtn.style.padding = '10px';
    stopBtn.style.backgroundColor = '#f44336';
    stopBtn.style.color = 'white';
    stopBtn.style.border = 'none';
    stopBtn.style.borderRadius = '5px';
    stopBtn.style.cursor = 'pointer';

    let mediaRecorder;
    let recordedChunks = [];

    const getSupportedMimeType = () => {
      const types = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm', 'video/mp4', 'video/x-matroska;codecs=avc1'];
      for (let type of types) {
        if (MediaRecorder.isTypeSupported(type)) {
          return type;
        }
      }
      alert('対応するビデオフォーマットが見つかりませんでした。');
      return null;
    };

    const mimeType = getSupportedMimeType();
    if (!mimeType) return;

    recordBtn.addEventListener('click', () => {
      try {
        const stream = canvas.captureStream(60);
        mediaRecorder = new MediaRecorder(stream, { mimeType });
        recordedChunks = [];
        
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            recordedChunks.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          try {
            const blob = new Blob(recordedChunks, { type: mimeType });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'canvas_recording.' + (mimeType.includes('mp4') ? 'mp4' : 'webm');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          } catch (downloadError) {
            console.error('ダウンロード中にエラーが発生しました:', downloadError);
            alert('ダウンロードに失敗しました。');
          }
        };

        mediaRecorder.start();
        recordBtn.style.display = 'none';
        stopBtn.style.display = 'block';
      } catch (recordError) {
        console.error('録画開始中にエラーが発生しました:', recordError);
        alert('録画を開始できませんでした。');
      }
    });

    stopBtn.addEventListener('click', () => {
      try {
        mediaRecorder.stop();
        recordBtn.style.display = 'block';
        stopBtn.style.display = 'none';
      } catch (stopError) {
        console.error('録画停止中にエラーが発生しました:', stopError);
        alert('録画を停止できませんでした。');
      }
    });
  } catch (error) {
    console.error('エラーが発生しました:', error);
    alert('エラーが発生しました。詳細はコンソールを確認してください。');
  }
})();
