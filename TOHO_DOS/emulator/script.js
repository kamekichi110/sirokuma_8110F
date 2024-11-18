// script.js
"use strict";
// エラーハンドリングのための関数
function handleError(error) {
  console.error(error.message || error);
  const logElement = document.getElementById('logs');
  const errorMessage = document.createElement('div');
  errorMessage.style.color = 'red';
  errorMessage.textContent = `Error: ${error.message || error}`;
  logElement.appendChild(errorMessage);
}

// v86エミュレータの設定
let emulator;
try {
window.onload = function() {
    var emulator = window.emulator = new V86Starter({
        wasm_path: "../build/v86.wasm", 
        memory_size: 256 * 1024 * 1024, 
        vga_memory_size: 2 * 1024 * 1024, 
        screen_container: document.getElementById("screen_container"),
        bios: {
            url: "./seabios.bin",
        },
        vga_bios: {
            url: "./vgabios.bin",
        },
        hda: {
            url: "https://sirokuma.cloudfree.jp/data/win98.img",
        },
        autostart: true, 
        acpi: true,
    });

    emulator.on("ready", function() {
        console.log("Emulator is ready");
        console.log(emulator.config); // 初期化後にアクセス
    });
}
} catch (error) {
  handleError(error);  // エラー発生時の処理
}

// エミュレータのデバッグ情報を表示
function displayEmulatorStatus() {
  try {
    const statusMessage = `エミュレータステータス: メモリサイズ: ${emulator.config.memory_size / (1024 * 1024)}MB`;
    displayDebugInfo(statusMessage);
  } catch (error) {
    handleError(error);
  }
}

// エミュレータの状態を表示する
setInterval(displayEmulatorStatus, 5000);

// ソフトキーボードの処理
try {
  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('mousedown', (event) => {
      try {
        event.preventDefault();
        keyPressHandler(event.target.id);
        sendKeyInputToV86(event.target.id);
      } catch (error) {
        handleError(error);
      }
    });

    key.addEventListener('mouseup', () => {
      try {
        keyReleaseHandler();
      } catch (error) {
        handleError(error);
      }
    });
  });
} catch (error) {
  handleError(error);
}

// v86エミュレータへのキー入力情報を送信
function sendKeyInputToV86(keyId) {
  try {
    const keycode = mapKeyToCode(keyId);
    emulator.key_press(keycode, 0); // 0: キーを押す
  } catch (error) {
    handleError(error);
  }
}

// キーコードをマッピング
function mapKeyToCode(keyId) {
  try {
    const keyMap = {
      'key_esc': 27,
      'key_f1': 112,
      'key_f2': 113,
      'key_f3': 114,
      'key_f4': 115,
      'key_f5': 116,
      'key_f6': 117,
      'key_f7': 118,
      'key_f8': 119,
      'key_f9': 120,
      'key_f10': 121,
      'key_1': 49,
      'key_2': 50,
      'key_3': 51,
      'key_4': 52,
      'key_5': 53,
      'key_6': 54,
      'key_7': 55,
      'key_8': 56,
      'key_9': 57,
      'key_0': 48,
      'key_minus': 189,
      'key_equals': 187,
      'key_q': 81,
      'key_w': 87,
      'key_e': 69,
      'key_r': 82,
      'key_t': 84,
      'key_y': 89,
      'key_u': 85,
      'key_i': 73,
      'key_o': 79,
      'key_p': 80,
      'key_left_bracket': 219,
      'key_right_bracket': 221,
      'key_a': 65,
      'key_s': 83,
      'key_d': 68,
      'key_f': 70,
      'key_g': 71,
      'key_h': 72,
      'key_j': 74,
      'key_k': 75,
      'key_l': 76,
      'key_semicolon': 186,
      'key_apostrophe': 222,
      'key_enter': 13,
      'key_shift': 16,
      'key_z': 90,
      'key_x': 88,
      'key_c': 67,
      'key_v': 86,
      'key_b': 66,
      'key_n': 78,
      'key_m': 77,
      'key_comma': 188,
      'key_period': 190,
      'key_slash': 191,
      'key_ctrl_left': 17,
      'key_win': 91,
      'key_alt_left': 18,
      'key_space': 32,
      'key_alt_right': 18,
      'key_win_right': 92,
      'key_ctrl_right': 17,
    };

    return keyMap[keyId];
  } catch (error) {
    handleError(error);
  }
}
