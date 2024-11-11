document.addEventListener("DOMContentLoaded", () => {
  // 起動メッセージとメモリチェック設定
  const bootMessages = [
    "Microsoft(R) MS-DOS(R) Version 6.22",
    "Copyright (c) Microsoft Corp 1981-1993.",
    "",
    "C:\\> Loading TOHO-DOS...",
    "C:\\> Initializing...",
    "C:\\> Ready."
  ];
  const mainMessages = [
    "Welcome to TOHO-DOS!",
    "This web site is Touhou old games emulator.",
    "The games included on this site are as follows.",
    "-------------------------------------------",
    "TH1 > Touhou Reiiden ~ Highly Responsive to Prayers",
    "TH2 > Touhou Humaroku ~ the Story of Eastern Wonderland",
    "TH3 > Touhou Yumeziku ~ Phantasmagoria of Dim.Dream",
    "TH4 > Touhou Gensokyo ~ Lotus Land Story",
    "TH5 > Touhou Kaikidan ~ Mystic Square",
    "-------------------------------------------"
  ];

  const bootElement = document.getElementById("bootText");
  const msgElement = document.getElementById("msgText");
  const cmdElement = document.getElementById("cmdText");
  let messageIndex = 0;
  let charIndex = 0;
  const typingSpeed = 50;
  let memoryCheckComplete = false;
  let memoryAmount = 0;
  const maxMemory = 256;

  function typeBootMessage() {
    if (!memoryCheckComplete) {
      performMemoryCheck();
    } else if (messageIndex < bootMessages.length) {
      const currentMessage = bootMessages[messageIndex];
      if (charIndex < currentMessage.length) {
        bootElement.innerHTML += currentMessage[charIndex];
        charIndex++;
        setTimeout(typeBootMessage, typingSpeed);
      } else {
        bootElement.innerHTML += "<br>";
        messageIndex++;
        charIndex = 0;
        setTimeout(typeBootMessage, typingSpeed);
      }
    } else {
      // ブートメッセージが終わったらメインコンテンツ表示
      messageIndex = 0;
      charIndex = 0;
      displayMainContent();
    }
  }

  function performMemoryCheck() {
    if (memoryAmount < maxMemory) {
      bootElement.innerHTML = `Memory Test : ${memoryAmount} MB OK<br>`;
      memoryAmount += 16; // 16MBずつ増加させる
      setTimeout(performMemoryCheck, 100); // メモリチェックの速度
    } else {
      bootElement.innerHTML += `Memory Test : ${maxMemory} MB OK<br>`;
      memoryCheckComplete = true;
      setTimeout(typeBootMessage, typingSpeed);
    }
  }

  function displayMainContent() {
    document.getElementById("msg").style.display = "block";
    document.getElementById("cmd").style.display = "block";
    typeMainMessage();
  }

  function typeMainMessage() {
    const allMessages = mainMessages.join("<br>") + "<br><br>C:\\>OPT.BAT<br>This is a program for selecting old Touhou game titles.<br>Click to select your favorite program.<br>-------------------------------------------<br>>TH1.BAT<br>>TH2.BAT<br>>TH3.BAT<br>>TH4.BAT<br>>TH5.BAT<br>-------------------------------------------<br>COPYRIGHT TOBU8";
    if (charIndex < allMessages.length) {
      cmdElement.innerHTML += allMessages[charIndex];
      charIndex++;
      setTimeout(typeMainMessage, typingSpeed);
    }
  }

  document.getElementById("msg").style.display = "none";
  document.getElementById("cmd").style.display = "none";

  // タイピングエフェクト開始
  typeBootMessage();
});
