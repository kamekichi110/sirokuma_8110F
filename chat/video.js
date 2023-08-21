function BGM_start() {
  var BGM = document.getElementById("BGM");
  BGM.play();
}
function BGM_stop() {
  var BGM = document.getElementById("BGM");
  BGM.pause();
  BGM.currentTime = 0;
}


const camera1 = () => {
  const video = document.getElementById("camera");

  const cameraSetting = {
    audio: false,
    video: {
      width: 90,
      height: 160,
      facingMode: "environment",
    },
  };

  navigator.mediaDevices
    .getUserMedia(cameraSetting)
    .then((mediaStream) => {
      video.srcObject = mediaStream;
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

const camera0 = () => {
  const video = document.getElementById("camera");

  const cameraSetting = {
    audio: false,
    video: {
      width: 160,
      height: 90,
      facingMode: "environment",
    },
  };

  navigator.mediaDevices
    .getUserMedia(cameraSetting)
    .then((mediaStream) => {
      video.srcObject = mediaStream;
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

function hide() {
  document.getElementById("cam").style.display = "none";
}
function display() {
  document.getElementById("cam").style.display = "block";
}





function ImageReset() {
  document.getElementById("topicImage").src = "./topic.png";
}
function inputImage() {
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
                    }