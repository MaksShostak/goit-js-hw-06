const inputEL = document.querySelector("input");
const visitorNameEL = document.querySelector("span");
console.log(inputEL);
console.log(visitorNameEL);

// 1 варіант
const onInputName = (event) => {
  event.preventDefault();
  if (event.currentTarget.value.length > 0) {
    return (visitorNameEL.textContent = event.currentTarget.value);
  }
  return (visitorNameEL.textContent = "Anonymous");
};
inputEL.addEventListener("input", onInputName);

// 2 варіант
// inputEL.addEventListener("input", (event) => {
//     if (event.currentTarget.value.length > 0) {
//         return visitorNameEL.textContent = event.currentTarget.value;
//     }
//     return visitorNameEL.textContent = "Anonymous"
//     event.preventDefault()
// })
