// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function inplement(event) {
  event.preventDefault();
  if (event.key === 'a') {
    event.target.value += 'a';
  }
} 

HREF_LINK.addEventListener('click', inplement);
INPUT_CHECKBOX.addEventListener('click', inplement);
INPUT_TEXT.addEventListener('keypress', inplement);