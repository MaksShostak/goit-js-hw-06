const inputEL = document.querySelector("input")
console.log(inputEL);


const onInputValue = (event) => {
    event.preventDefault();
    if (Number(event.currentTarget.value.length)
        !== Number(inputEL.getAttribute("data-length")))
    { inputEL.classList.add("invalid"); inputEL.classList.remove("valid") }
    else { inputEL.classList.add("valid"); inputEL.classList.remove("invalid")  }
        return
     } 

inputEL.addEventListener("blur", onInputValue)