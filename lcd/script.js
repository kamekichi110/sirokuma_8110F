function setScroll() {
  const scroll = document.getElementById("scroll-msg");
  const scrollText = document.getElementById("msg-text").value;
  scroll.innerHTML = scrollText;
}
function changeNumStyle() {
  var selected = document.getElementById("num-style").value;
  var Target = document.getElementById("output-numArea");
  Target.setAttribute("type", selected);
}
function autoResize() {
  const textElem = document.getElementById("output-next-sta");
  var wordCount = textElem.textContent.length;
  console.log("wordCount=" + wordCount);
  var fontSizeValue = 84 / wordCount;
  if (fontSizeValue > 24) {
    fontSizeValue = 24;
  }
  textElem.style.top = 42 / 2 - fontSizeValue / 2 + "px";
  textElem.style.lineHeight = fontSizeValue + "px";
  textElem.style.fontSize = fontSizeValue + "px";
}

function apply(targetID, inputID, type) {
  var targetElement = document.getElementById(targetID);
  var inputs = document.getElementById(inputID).value;
  if (type === "text") {
    targetElement.innerHTML = inputs;
    targetElement.style.opacity = 1;
    if (inputs === "next") {
      targetElement.innerHTML = "次は";
    } else if (inputs === "end") {
      targetElement.innerHTML = '次は<br><span style="color:red;">終点</span>';
    } else if (inputs === "now") {
      targetElement.innerHTML = "";
    }
  } else if (type === "color") {
    targetElement.style.background = inputs;
  } else if (type === "line") {
    targetElement.style.outlineColor = inputs;
  } else if (type === "num") {
    var num = inputs.match(/.{2}/g);
    if (inputs === "Lnull") {
      targetElement.style.opacity = 0;
    } else {
      targetElement.style.opacity = 1;
    }
    targetElement.innerHTML = num[0] + "<br>" + num[1];
  }
  autoResize();
}
function showPrompt(trg, ctx, type) {
  var targetElem = document.getElementById(trg);
  var promptElem = window.prompt(ctx);
  var info = {
    value: promptElem,
    type: type,
    output: targetElem
  };
  console.log(info);
  return info;
}
function allApply() {
  const lcdElem = {
    outputs: {
      patern: ["output-patern", "text"],
      paternColor: ["output-patern", "color"],
      for: ["output-for", "text"],
      cars: ["output-cars", "text"],
      num: ["output-numArea", "num"],
      numColor: ["output-numArea", "line"],
      status: ["output-status", "text"],
      nextSta: ["output-next-sta", "text"]
    },
    inputs: {
      patern: "input-patern",
      paternColor: "input-patern-color",
      for: "input-for",
      cars: "input-cars",
      num: "input-number",
      numColor: "input-number-color",
      status: "input-status",
      nextSta: "input-sta"
    }
  };
  apply(
    lcdElem.outputs.patern[0],
    lcdElem.inputs.patern,
    lcdElem.outputs.patern[1]
  );
  apply(
    lcdElem.outputs.paternColor[0],
    lcdElem.inputs.paternColor,
    lcdElem.outputs.paternColor[1]
  );
  apply(lcdElem.outputs.for[0], lcdElem.inputs.for, lcdElem.outputs.for[1]);
  apply(lcdElem.outputs.cars[0], lcdElem.inputs.cars, lcdElem.outputs.cars[1]);
  apply(lcdElem.outputs.num[0], lcdElem.inputs.num, lcdElem.outputs.num[1]);
  apply(
    lcdElem.outputs.numColor[0],
    lcdElem.inputs.numColor,
    lcdElem.outputs.numColor[1]
  );
  apply(
    lcdElem.outputs.status[0],
    lcdElem.inputs.status,
    lcdElem.outputs.status[1]
  );
  apply(
    lcdElem.outputs.nextSta[0],
    lcdElem.inputs.nextSta,
    lcdElem.outputs.nextSta[1]
  );
  autoResize();
  setScroll();
  changeNumStyle();
}
document.addEventListener("DOMContentLoaded", () => {
  autoResize();
  var prompts = {
    patern: {
      text: document.getElementById("prompt-patern"),
      color: document.getElementById("prompt-patern-color")
    },
    cars: document.getElementById("prompt-cars"),
    for: document.getElementById("prompt-for"),
    status: document.getElementById("prompt-status"),
    station: document.getElementById("prompt-sta")
  };
  prompts.patern.text.addEventListener("click", () => {
    var type = "text";
    autoResize();
    var ctx = `種別を入力[${type}]`;
    var promptResult = showPrompt("output-patern", ctx, type);
    if (promptResult) {
      if (promptResult.type === "text") {
        promptResult.output.innerHTML = promptResult.value;
      } else if (promptResult.type === "color") {
        promptResult.output.style.background = promptResult.value;
      }
    }
  });
  prompts.patern.color.addEventListener("click", () => {
    var type = "color";
    autoResize();
    var ctx = `種別色を入力[${type}/16進数]`;
    var promptResult = showPrompt("output-patern", ctx, type);
    if (promptResult) {
      if (promptResult.type === "text") {
        promptResult.output.innerHTML = promptResult.value;
      } else if (promptResult.type === "color") {
        promptResult.output.style.background = promptResult.value;
      }
    }
  });
  prompts.cars.addEventListener("click", () => {
    var type = "text";
    autoResize();
    var ctx = `両数を入力[${type}]`;
    var promptResult = showPrompt("output-cars", ctx, type);
    if (promptResult) {
      if (promptResult.type === "text") {
        promptResult.output.innerHTML = promptResult.value;
      } else if (promptResult.type === "color") {
        promptResult.output.style.background = promptResult.value;
      }
    }
  });
  prompts.for.addEventListener("click", () => {
    var type = "text";
    autoResize();
    var ctx = `行先を入力[${type}]`;
    var promptResult = showPrompt("output-for", ctx, type);
    if (promptResult) {
      if (promptResult.type === "text") {
        promptResult.output.innerHTML = promptResult.value;
      } else if (promptResult.type === "color") {
        promptResult.output.style.background = promptResult.value;
      }
    }
  });
  prompts.status.addEventListener("click", () => {
    var type = "text";
    autoResize();
    var ctx = `ステータスを入力[next/end/now]`;
    var promptResult = showPrompt("output-status", ctx, type);
    if (promptResult) {
      if (promptResult.type === "text") {
        if (promptResult.value === "next") {
          promptResult.output.innerHTML = "次は";
        } else if (promptResult.value === "end") {
          promptResult.output.innerHTML =
            '次は<br><span style="color: red">終点</span>';
        } else if (promptResult.value === "now") {
          promptResult.output.innerHTML = "";
        }
      } else if (promptResult.type === "color") {
        promptResult.output.style.background = promptResult.value;
      }
    }
  });
  prompts.station.addEventListener("click", () => {
    var type = "text";
    autoResize();
    var ctx = `駅名を入力[${type}]`;
    var promptResult = showPrompt("output-next-sta", ctx, type);
    if (promptResult) {
      if (promptResult.type === "text") {
        promptResult.output.innerHTML = promptResult.value;
      } else if (promptResult.type === "color") {
        promptResult.output.style.background = promptResult.value;
      }
    }
  });
});