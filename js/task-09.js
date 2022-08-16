const btnEL = document.querySelector(".change-color");
const spanColorEL = document.querySelector(".color");
const bodyEL = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onChangeBackgroundColor = (event) => {
  event.preventDefault();
  bodyEL.style.backgroundColor = getRandomHexColor();
  spanColorEL.textContent = bodyEL.style.backgroundColor;
};

btnEL.addEventListener("click", onChangeBackgroundColor);
