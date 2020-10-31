function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function randomNumber() {
  return Math.floor(Math.random() * 100)
}

function isDivisible(number) {
  return  (randomNumber() % number) === 0;
}

module.exports = { randomRgbColor, randomNumber, isDivisible };