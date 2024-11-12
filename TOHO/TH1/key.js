const keyCodeMap = {
  "1": 49, "2": 50, "3": 51, "4": 52, "5": 53, "6": 54, "7": 55, "8": 56, "9": 57, "0": 48,
  "a": 65, "b": 66, "c": 67, "d": 68, "e": 69, "f": 70, "g": 71, "h": 72, "i": 73, "j": 74,
  "k": 75, "l": 76, "m": 77, "n": 78, "o": 79, "p": 80, "q": 81, "r": 82, "s": 83, "t": 84,
  "u": 85, "v": 86, "w": 87, "x": 88, "y": 89, "z": 90,
  "F1": 112, "F2": 113, "F3": 114, "F4": 115, "F5": 116, "F6": 117, "F7": 118, "F8": 119,
  "F9": 120, "F10": 121, "F11": 122, "F12": 123,
  "ArrowUp": 38, "ArrowDown": 40, "ArrowLeft": 37, "ArrowRight": 39,
  "Shift": 16, "Control": 17, "Alt": 18, "Delete": 46
};

let keyState = {
  Shift: false,
  Control: false,
  Alt: false
};

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.getAttribute('data-key');
    
    // 修飾キー（Shift, Ctrl, Alt）の状態を更新
    if (keyValue === "Shift") {
      keyState.Shift = !keyState.Shift;
    }
    if (keyValue === "Control") {
      keyState.Control = !keyState.Control;
    }
    if (keyValue === "Alt") {
      keyState.Alt = !keyState.Alt;
    }

    // キーイベントをシミュレートする
    simulateKeyEvent(keyValue, true); // keydown
    simulateKeyEvent(keyValue, false); // keyup
  });
});

// キーイベントをシミュレートする関数
function simulateKeyEvent(keyValue, isKeyDown) {
  const eventType = isKeyDown ? 'keydown' : 'keyup';
  const keyCode = keyCodeMap[keyValue];

  let eventInit = {
    key: keyValue,
    code: keyValue,
    keyCode: keyCode,
    which: keyCode,
    bubbles: true,
    ctrlKey: keyState.Control,
    altKey: keyState.Alt,
    shiftKey: keyState.Shift,
  };

  const keyEvent = new KeyboardEvent(eventType, eventInit);
  document.dispatchEvent(keyEvent);
}

document.addEventListener('keydown', (event) => {
  console.log(`Keydown event: ${event.key}, Code: ${event.code}, KeyCode: ${event.keyCode}`);
});

document.addEventListener('keyup', (event) => {
  console.log(`Keyup event: ${event.key}, Code: ${event.code}, KeyCode: ${event.keyCode}`);
});