var image = document.getElementById("preview");
var output = document.getElementById("output");
var input = document.getElementById("input");
var list = document.getElementById("list").value;
var sound = document.getElementById(list);
var happy = "./img/happy.png";
var def = "./img/def.png";
var guruguru = "./img/guruguru.png";
function SE() {
    sound.play();
}
function entityReset() {
    image.src = def;
    image.alt = "default";
    output.innerHTML = "";
}
function entityHappy() {
    image.src = happy;
    output.innerHTML = input.value;
    image.alt = "happy";
    input.value = "";
    SE();
}
function entityGuruguru() {
    image.src = guruguru;
    output.innerHTML = input.value;
    image.alt = "guruguru";
    input.value = "";
    SE();
}
function dialog0() {
    entityHappy();
    input.focus();
    setTimeout(() => {
        entityReset();
    },5200);
}