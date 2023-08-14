function BGM_start() {
  var BGM = document.getElementById("BGM");
  BGM.play();
}
function BGM_stop() {
  var BGM = document.getElementById("BGM");
  BGM.pause();
  BGM.currentTime = 0;
}
function ImageReset() {
  document.getElementById("topicImage").src = "./topic.png";
}

document.getElementById("inputImage").addEventListener('change', (event) => {
    const file = event.target.files[0]

      // fileがundefinedの時にreader.readAsDataURL(file)がエラーになるため、
        // !fileがfalseの場合にreturnする。
          if (!file) return

            const reader = new FileReader()

              reader.onload = (event) => {
                  document.querySelector('#outputImage').src = event.target.result
                    }

                      reader.readAsDataURL(file)
                      })