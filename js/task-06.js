function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInp = document.querySelector('input'),
  btnC = document.querySelector('[data-create]'),
  btnD = document.querySelector('[data-destroy]'),
  box = document.querySelector('#boxes');

function createBoxes(amount) {
  box.replaceChildren();

  let boxSize = 30;

  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${boxSize}px`;
    newBox.style.height = `${boxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    box.appendChild(newBox);
    boxSize += 10;
  }
}

btnC.addEventListener('click', () => {
  const amount = numberInp.value;

  if (amount < 1 || amount > 100) {
    return null;
  }

  createBoxes(amount);

  numberInp.value = '';
});

function destroyBoxes() {
  box.replaceChildren();
}

btnD.addEventListener('click', destroyBoxes);
