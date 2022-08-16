function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  destroyBtn: document.querySelector("button[data-destroy]"),
  createBtn: document.querySelector("button[data-create]"),
  input: document.querySelector("input"),
  divBoxes:document.querySelector("#boxes"),

}




const createBoxes = (event,amount) => { 
  refs.divBoxes.insertAdjacentHTML("beforeend", "<div><h1>rfsdhgjs</h1></div>");
  // const linkBox = divBoxes.querySelectorAll("div")
 
  
  //  linkBox[0].style.height = "30px";
  // box.style.width = "30px";
  refs.divBoxes.style.backgroundColor = getRandomHexColor();
  refs.divBoxes.style.height= "300px";

  // refs.input.value = amount
  // console.log(refs.input.value);
}

const onPutAmount = (event) => {
  return event.currentTarget.value}



const destroyBoxes = (event) => {
  
}

refs.destroyBtn.addEventListener("click", destroyBoxes)
refs.createBtn.addEventListener("click", createBoxes)
refs.input.addEventListener("input", onPutAmount)
// refs.divBoxes.addEventListener("click", createBoxes)


