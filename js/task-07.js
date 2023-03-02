const rangeInput = document.querySelector('#font-size-control');
const changeText = document.querySelector('#text');

const textResize = () => {
  changeText.style.fontSize = `${rangeInput.value}px`;
};

// rangeInput.addEventListener('change', textResize);
rangeInput.addEventListener('input', textResize);


