const boot = document.getElementById("boot");
const msg = document.getElementById("msg");
const cmd = document.getElementById("cmd");
const bat = document.getElementById("bat");

document.addEventListener("DOMContentLoaded", function () {
 setTimeout(() => {
  msg.style.display = "block";
  setTimeout(() => {
   cmd.style.display = "block";
   setTimeout(() => {
    bat.style.display = "block";
   }, 1500);
  }, 1280);
 }, 1500);
});
