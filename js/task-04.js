const counterValue = document.querySelector("#value");
const counterEL = document.querySelector("#counter");
const decrementBtnEL = counterEL.firstElementChild;
const incrementBtnEL = counterEL.lastElementChild;
let initialValue = Number(counterValue.textContent);
console.log(decrementBtnEL);

// // 1 варіант
// decrementBtnEL.addEventListener('click', (event) => {
//     initialValue -= 1;
//     counterValue.textContent = initialValue
//     event.preventDefault()
//    return
// })

// incrementBtnEL.addEventListener("click", (event) => {
//     initialValue += 1;
//     counterValue.textContent = initialValue
//     event.preventDefault()
//    return
// })

// 2 варіант

const onButtonClickDown = (event) => {
  initialValue -= 1;
  counterValue.textContent = initialValue;
  event.preventDefault();
  return;
};
const onButtonClickUp = (event) => {
  initialValue += 1;
  counterValue.textContent = initialValue;
  event.preventDefault();
  return;
};
decrementBtnEL.addEventListener("click", onButtonClickDown);

incrementBtnEL.addEventListener("click", onButtonClickUp);

// const updateCounter =()=>{ initialValue +=1}
