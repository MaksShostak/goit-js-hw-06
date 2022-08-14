const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// 1 варіант
const galleryListEL = document.querySelector(".gallery")
galleryListEL.style.listStyle=("none")


const makeGalleryListMarkup = ({ url, alt }) => {
  return `<li class="gallery__item"><img src=${url} alt=${alt} width = 480 class="gallery__img" ></li>`
}

const makeGalleryList = images.map(makeGalleryListMarkup).join("")

galleryListEL.insertAdjacentHTML("afterbegin", makeGalleryList)
console.log(galleryListEL);

// 2 варіант

// const galleryListEL = document.querySelector(".gallery")
// galleryListEL.style.listStyle = ("none")

// const makeGalleryList = ({ url, alt }) => {
//   const itemEL = document.createElement("li")
//   itemEL.classList.add("gallery__item")
//   itemEL.style.borderRadius = " 45px "

//   const imgEL = document.createElement("img")
//   imgEL.classList.add("gallery__img")
//   imgEL.setAttribute("src", url)
//   imgEL.setAttribute("alt", alt)

//   itemEL.prepend(imgEL)
//   return itemEL
   
// }

// const galleryList = images.map(makeGalleryList)
// galleryListEL.prepend(...galleryList)