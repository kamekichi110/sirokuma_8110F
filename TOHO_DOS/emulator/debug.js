// debug.js

// コンソールのログを捕まえて div#logs に出力
(function() {
  const originalConsoleLog = console.log;
  console.log = function(message) {
    originalConsoleLog(message);
    const logElement = document.getElementById('logs');
    const logMessage = document.createElement('div');
    logMessage.textContent = message;
    logElement.appendChild(logMessage);
  };
})();

// デバッグ情報をdiv#debugに表示
function displayDebugInfo(info) {
  const debugElement = document.getElementById('debug');
  const debugMessage = document.createElement('div');
  debugMessage.textContent = info;
  debugElement.appendChild(debugMessage);
}

// エミュレータの状態などをデバッグ用に表示
function emulatorDebugInfo() {
  // ここにエミュレータの状態や重要な情報を表示する処理を追加
  displayDebugInfo('エミュレータ起動中...');
}

// 初期デバッグ表示
emulatorDebugInfo();
