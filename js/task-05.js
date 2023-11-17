function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color'),
  spanColor = document.querySelector('.color');

btn.addEventListener('click', e => {
  const newColor = getRandomHexColor();

  spanColor.textContent = newColor;
  document.body.style.backgroundColor = newColor;
});
