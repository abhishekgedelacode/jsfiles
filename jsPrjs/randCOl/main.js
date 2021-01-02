const btn = document.getElementById("btn");
const body = document.querySelector("body");
const code = document.getElementById("code");
const chars = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

btn.addEventListener("click", setColor);

function setColor() {
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * chars.length);
    hex += chars[index];
  }

  code.innerHTML = hex;
  body.style.backgroundColor = hex;
}
