// const categoriesListEL = document.querySelector('#categories')
// const itemEL = document.querySelectorAll(".item")
// const titleEL = document.querySelectorAll("h2")

// // console.log(categoriesListEL.lastElementChild);
// console.log(`Number of categories: ${ itemEL.length }`);

// // console.log(titleEL);
// // console.log(listEL.lastElementChild);

// console.dir(`Category: ${itemEL[0].firstElementChild.textContent}`);

// console.log(`Elements: ${itemEL[0].querySelectorAll("li").length}`);

// console.dir(`Category: ${itemEL[1].firstElementChild.textContent}`);
// console.log(`Elements: ${itemEL[1].querySelectorAll("li").length}`);

// console.dir(`Category: ${itemEL[2].firstElementChild.textContent}`);
// console.log(`Elements: ${itemEL[2].querySelectorAll("li").length}`);
// console.log(categoriesListEL)

const categoriesListEL = document.querySelector("#categories");
const itemsListEL = [...categoriesListEL.children];
console.log(`Number of categories: ${itemsListEL.length}`);
// console.log(itemsListEL);
itemsListEL.forEach((item) => {
  // console.log(item.children);
  const titleListEL = item.querySelector("h2");
  const items = item.querySelectorAll("li");
  // const titleListEL = item.children[0];
  // const items = item.children[1].children;
  //  const titleListEL = item.firstElementChild
  // const items = item.lastElementChild.children;
  //
  console.log(`Category: ${titleListEL.textContent}`);
  console.log(`Elements: ${items.length}`);
});
