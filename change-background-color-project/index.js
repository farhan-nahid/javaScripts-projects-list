const color = [
  "#00ffff80",
  "#dc143c80",
  "#ffd90080",
  "#ff8c0080",
  "#0000ff80",
  "#a52a2a80",
  "#00640080",
  "#ff7f5080",
  "#ff149180",
  "#892be280",
  "#bdb76b80",
  "#5f9ea080",
];

// style body with js

document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.backgroundColor = "#00ffff80";

// change the body background
document.getElementById("button").addEventListener("click", function () {
  console.log("click");
  const colorIndex = parseInt(Math.random() * color.length);
  console.log(colorIndex);
  document.body.style.backgroundColor = color[colorIndex];
});
