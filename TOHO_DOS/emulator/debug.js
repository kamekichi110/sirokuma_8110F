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

  const originalConsoleError = console.error;
  console.error = function(message) {
    originalConsoleError(message);
    const logElement = document.getElementById('logs');
    const errorMessage = document.createElement('div');
    errorMessage.style.color = 'red';
    errorMessage.textContent = `Error: ${message}`;
    logElement.appendChild(errorMessage);
  };
})();

// デバッグ情報をdiv#debugに表示
function displayDebugInfo(info) {
  const debugElement = document.getElementById('debug');
  const debugMessage = document.createElement('div');
  debugMessage.textContent = info;
  debugElement.appendChild(debugMessage);
}

// エラーハンドリングのための関数
function handleError(error) {
  console.error(error.message || error);
  displayDebugInfo(`Error: ${error.message || error}`);
}

// 初期デバッグ表示
displayDebugInfo('デバッグ開始...');
