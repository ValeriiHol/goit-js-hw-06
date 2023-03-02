const rangeInput = document.querySelector('input#font-size-control');
const changeText = document.querySelector('span#text');

const textResize = () => {
  changeText.style.fontSize = `${rangeInput.value}px`;
};

// rangeInput.addEventListener('change', textResize);
rangeInput.addEventListener('input', textResize);


