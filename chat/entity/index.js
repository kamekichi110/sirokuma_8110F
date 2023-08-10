function happy() {
    var img = document.getElementById("entity");
    var happy = "./img/smile.jpg";
    var input = document.getElementById("input");
    var text = document.getElementById("text");
    var select = document.getElementById("list").value;
    var sound = document.getElementById(select);
    var def = document.getElementById("default").value;
    var blank = "";
    img.src = happy;
    text.innerHTML = input.value;
    sound.play();
    input.focus();
    input.value = blank;
    setTimeout(() => {
        img.src = def;
        text.innerHTML = blank;
    }, 4200);
}
function guruguru() {
    var img = document.getElementById("entity");
    var guruguru = "./img/hekomu.jpg";
    var def = document.getElementById("default").value;
    var input = document.getElementById("input");
    var output = document.getElementById("text");
    var select = document.getElementById("list").value;
    var sound = document.getElementById(select);
    var blank = "";
    img.src = guruguru;
    output.innerHTML = input.value;
    sound.play();
    input.focus();
    input.value = blank;
    setTimeout(() => {
        img.src = def;
        output.innerHTML = blank;
    }, 4200);
}
function big() {
    var img = document.getElementById("entity");
    var big = "./img/big_mouse.jpg";
    var def = document.getElementById("default").value;
    var input = document.getElementById("input");
    var output = document.getElementById("text");
    var select = document.getElementById("list").value;
    var sound = document.getElementById(select);
    var blank = "";
    img.src = big;
    output.innerHTML = input.value;
    sound.play();
    input.value = blank;
    input.focus();
    setTimeout(() => {
        img.src = def;
        output.innerHTML = blank;
    },4200);
}
function small() {
    var img = document.getElementById("entity");
    var small = "./img/small_mouse.jpg";
    var def = document.getElementById("default").value;
    var input = document.getElementById("input");
    var output = document.getElementById("text");
    var select = document.getElementById("list").value;
    var sound = document.getElementById(select);
    var blank = "";
    img.src = small;
    output.innerHTML = input.value;
    sound.play();
    input.value = blank;
    input.focus();
    setTimeout(() => {
        img.src = def;
        output.innerHTML = blank;
    },4200);
}
function sad() {
    var img = document.getElementById("entity");
    var sad = "./img/sad.jpg";
    var def = document.getElementById("default").value;
    var input = document.getElementById("input");
    var output = document.getElementById("text");
    var select = document.getElementById("list").value;
    var sound = document.getElementById(select);
    var blank = "";
    img.src = sad;
    output.innerHTML = input.value;
    sound.play();
    input.value = blank;
    input.focus();
    setTimeout(() => {
        img.src = def;
        output.innerHTML = blank;
    })
}
function hello() {
    var img = document.getElementById("entity");
    var happy = "./img/smile.jpg";
    var def = document.getElementById("default").value;
    var input = "こんにちは！<br>まどかです！";
    var output = document.getElementById("text");
    var select = document.getElementById("list").value;
    var sound = document.getElementById(select);
    var blank = "";
    img.src = happy;
    output.innerHTML = input;
    sound.play();
    input.focus();
    setTimeout(() => {
        img.src = def;
        output.innerHTML = "";
        input.focus();
        reset();
    }, 4200);
}
function reset() {
    var img = document.getElementById("entity");
    var def = document.getElementById("default").value;
    document.getElementById("text").innerHTML = "";
    img.src = def;
}