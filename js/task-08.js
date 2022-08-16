const form = document.querySelector(".login-form");

// 1 варіант
const onLoginFormSubmission = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені.");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
};

form.addEventListener("submit", onLoginFormSubmission);

// 2 варіант
// const onLoginFormSubmission = (event) => {
//     event.preventDefault()
//     const formData = new FormData(event.currentTarget);
//     formData.forEach((value, name) => {
//         if (value === "" ) {
//     return  alert("Всі поля повинні бути заповнені.");
//   }
//         console.log(value);
//         console.log(name);
//     });
//      event.currentTarget.reset();
// }

// form.addEventListener("submit", onLoginFormSubmission)
