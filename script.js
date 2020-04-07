const result = document.querySelector("#result")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const body = document.querySelector("#gradient")
const generateBtn = document.querySelector("#generateBtn")

loadEventListeners();
// Group up eventListeners
function loadEventListeners() {
  color1.addEventListener("input", updateColor)
  color2.addEventListener("input", updateColor)
  window.addEventListener("load", updateColor)
  generateBtn.addEventListener("click", generateColors)
}

function updateColor(){
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;

  result.textContent = body.style.background + ";";
}

function generateColors() {
  color1.value = randomColor();
  color2.value = randomColor();

  updateColor();

}

function randomColor(){
  return "#" + (Math.random().toString(16).slice(2, 8));
};