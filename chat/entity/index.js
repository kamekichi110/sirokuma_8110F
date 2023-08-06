function happy() {
    var img = document.getElementById("entity");
    var happy = "./asset/entity-happy.png";
    var input = document.getElementById("input");
    var text = document.getElementById("text");
    var select = document.getElementById("list").value;
    var sound = document.getElementById(select);
    var def = "./asset/entity-def.png";
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
    var guruguru = "./asset/entity-guruguru.png";
    var def = "./asset/entity-def.png";
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
function hello() {
    var img = document.getElementById("entity");
    var happy = "./asset/entity-happy.png";
    var def = "./asset/entity-def.png";
    var input = "こんにちは！<br>まどかです！";
    var output = document.getElementById("text");
    var sound = document.getElementById("SE0");
    var blank = "";
    img.src = happy;
    output.innerHTML = input;
    sound.play();
    input.focus();
    setTimeout(() => {
        img.src = def;
        output.innerHTML = blank;
        input.focus();
    }, 4200);
}