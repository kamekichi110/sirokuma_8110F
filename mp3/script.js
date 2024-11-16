const fileInput = document.getElementById("file-input");
const fileList = document.getElementById("file-list");
const audioPlayer = document.getElementById("audio-player");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const playShuffle = document.getElementById("play-shuffle");
const loopToggle = document.getElementById("loop-toggle");

let files = [];
let currentIndex = 0;
let isShuffle = false;
let isLoop = false;

// ファイルが選択されたとき
fileInput.addEventListener("change", (event) => {
 files = Array.from(event.target.files);
 displayFileList();
 if (files.length > 0) {
  loadFile(files[0]);
 }
});
// ファイルリストを表示
function displayFileList() {
 fileList.innerHTML = files
  .map(
   (file, index) =>
    `<div data-index="${index}" style="cursor:pointer;" class="file-list-name">${file.name.replace(
     /\.mp3$/,
     ""
    )}</div>`
  )
  .join("");
 // 各ファイルをクリック可能に
 Array.from(fileList.children).forEach((child) => {
  child.addEventListener("click", (e) => {
   const index = e.target.dataset.index;
   currentIndex = parseInt(index, 10);
   loadFile(files[currentIndex]);
   audioPlayer.play();
  });
 });
}
// ファイルをロード
function loadFile(file) {
 const url = URL.createObjectURL(file);
 audioPlayer.src = url;

 // ID3タグを読み込む
 jsmediatags.read(file, {
  onSuccess: (tag) => {
   const tags = tag.tags;
   title.textContent = tags.title || file.name.replace(/\.mp3$/, "");
   if (tags.picture) {
    const { data, format } = tags.picture;
    const blob = new Blob([new Uint8Array(data)], { type: format });
    cover.src = URL.createObjectURL(blob);
   } else {
    cover.src = "";
   }
  },
  onError: (error) => {
   console.error("ID3タグ読み込みエラー:", error);
   title.textContent = file.name.replace(/\.mp3$/, "");
   cover.src = "";
  }
 });
}
// 再生終了時の動作
audioPlayer.addEventListener("ended", () => {
 if (isLoop) {
  audioPlayer.play();
 } else if (isShuffle) {
  currentIndex = Math.floor(Math.random() * files.length);
  loadFile(files[currentIndex]);
  audioPlayer.play();
 } else {
  currentIndex = (currentIndex + 1) % files.length;
  loadFile(files[currentIndex]);
  audioPlayer.play();
 }
});

// シャッフル再生
playShuffle.addEventListener("click", () => {
 isShuffle = true;
 currentIndex = Math.floor(Math.random() * files.length);
 loadFile(files[currentIndex]);
 audioPlayer.play();
});

// ループ再生切り替え
loopToggle.addEventListener("click", () => {
 isLoop = !isLoop;
 loopToggle.textContent = `ループ再生: ${isLoop ? "ON" : "OFF"}`;
});
document.addEventListener("DOMContentLoaded", function () {
 document.title = "MP3 PLAYER";
});