var stop = document.querySelector(".stop");
var slow = document.querySelector(".slow");
var go = document.querySelector(".go");
var caution = document.querySelector(".caution");

var red = document.querySelector("#red");
var yellow = document.querySelector("#yellow");
var green = document.querySelector("#green");

stop.addEventListener("click", enableStop);
slow.addEventListener("click", enableSlow);
go.addEventListener("click", enableGo);
caution.addEventListener("click", enableCaution);

function enableStop(event) {
  event.preventDefault();

  red.classList.add("stop-on");
  yellow.classList.remove("slow-on");
  green.classList.remove("go-on");
}

function enableSlow(event) {
  event.preventDefault();

  yellow.classList.add("slow-on");
  red.classList.remove("stop-on");
  green.classList.remove("go-on");
}

function enableGo(event) {
  event.preventDefault();

  green.classList.add("go-on");
  yellow.classList.remove("slow-on");
  red.classList.remove("stop-on");
}
