function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  destroyBtn: document.querySelector("button[data-destroy]"),
  createBtn: document.querySelector("button[data-create]"),
  input: document.querySelector("input"),
  divBoxes: document.querySelector("#boxes"),
};

let amount = 0;
const createBoxes = (event) => {
  event.preventDefault();
  const inputValues = refs.input.value;
  const arrayEL = [];
  for (let i = 0; i < inputValues; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${30 + 10 * amount}px`;
    div.style.height = `${30 + 10 * amount}px`;
    amount += 1;
    div.style.backgroundColor = getRandomHexColor();
    arrayEL.push(div);
  }

  refs.divBoxes.append(...arrayEL);
};

const destroyBoxes = () => {
  refs.divBoxes.innerHTML = "";
};

refs.destroyBtn.addEventListener("click", destroyBoxes);
refs.createBtn.addEventListener("click", createBoxes);
