const inputEL = document.querySelector("input")
const spanTextEL = document.querySelector("span")
console.log(inputEL);
console.log(spanTextEL);


const onInputValue = (event) => {
    event.preventDefault();
    spanTextEL.style.fontSize = `${event.currentTarget.value}px` 
  
      
     } 
 
inputEL.addEventListener("input", onInputValue)