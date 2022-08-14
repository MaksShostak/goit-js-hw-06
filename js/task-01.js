const categoriesListEL = document.querySelector('#categories')
const itemEL = document.querySelectorAll(".item")
const titleEL = document.querySelectorAll("h2")


// console.log(categoriesListEL.lastElementChild);
console.log(`Number of categories: ${ itemEL.length }`);

// console.log(titleEL);
// console.log(listEL.lastElementChild);

console.dir(`Category: ${itemEL[0].firstElementChild.textContent}`);
// console.log(itemEL[0].firstElementChild.textContent);
console.log(`Elements: ${itemEL[0].querySelectorAll("li").length}`);

console.dir(`Category: ${itemEL[1].firstElementChild.textContent}`);
console.log(`Elements: ${itemEL[1].querySelectorAll("li").length}`);

console.dir(`Category: ${itemEL[2].firstElementChild.textContent}`);
console.log(`Elements: ${itemEL[2].querySelectorAll("li").length}`);