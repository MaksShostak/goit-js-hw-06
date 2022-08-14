const ingredientsListEL = document.querySelector("#ingredients")
ingredientsListEL.style.listStyle = ("square")

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1 варіант

// const elements = ingredients.map (element => {
//   // console.log(element);
//   const itemEL = document.createElement("li");
//   itemEL.textContent = `${element}`;
//   itemEL.classList.add("item");
//   return itemEL;
// })

// ingredientsListEL.prepend(...elements);

// console.log(ingredientsListEL);

// 2 варіант
const makeList = ((elements) => {
  return elements.map (element => {
  // console.log(element);
  const itemEL = document.createElement("li");
  itemEL.textContent = `${element}`;
  itemEL.classList.add("item");
  
  
  
  return itemEL;
})
})
const items = makeList(ingredients)
ingredientsListEL.prepend(...items);
console.log(ingredientsListEL);