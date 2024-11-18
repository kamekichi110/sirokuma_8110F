// v86 エミュレータの設定と初期化
const emulator = new v86({
    memory_size: 192 * 1024 * 1024, // メモリ 192MB
    cpu: {
      model: 'pentium', // Pentium CPU
      speed: 600, // 600MHz
      features: ['sse'],
    },
    vga: {
      graphics_mode: 'high', // 高画質
      vga_memory: 8 * 1024 * 1024, // VRAM 8MB
    },
    display: {
      canvas: document.getElementById('emulator'),
      width: 480,
      height: 320,
      scaling: 'nearest', // 高画質スケーリング
    },
    hard_disk: {
      'hda': { url: 'https://sirokuma.cloudfree.jp/data/your_hard_disk_image.img' }, // ハードディスクイメージを指定
    },
    boot_from_hard_disk: true, // ハードディスクから起動
  });
  
  // ソフトキーボードの処理
  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('mousedown', (event) => {
      event.preventDefault();
      keyPressHandler(event.target.id);
      sendKeyInputToV86(event.target.id);
    });
  
    key.addEventListener('mouseup', () => {
      keyReleaseHandler();
    });
  });
  
  // v86エミュレータへのキー入力情報を送信
  function sendKeyInputToV86(keyId) {
    const keycode = mapKeyToCode(keyId);
    emulator.key_press(keycode, 0); // 0: キーを押す
  }
  
  // キーコードをマッピング
  function mapKeyToCode(keyId) {
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
      'key_up': 38,
      'key_left': 37,
      'key_down': 40,
      'key_right': 39,
    };
    return keyMap[keyId] || 0; // デフォルトでは0を返す
  }
  