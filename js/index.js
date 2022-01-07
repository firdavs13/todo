let elForm = document.querySelector(".form");
let elFormName = document.querySelector(".form-name");
let elFormInput = document.querySelector(".form__input");
let elFormInputName = document.querySelector(".form-name__input");
let elFormList = document.querySelector(".form__list");
let elFormAlert = document.querySelector(".form-name__alert");

const todos = [];
let counter = 0;

elFormName.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValueName = elFormInputName.value;
  elFormAlert.textContent = `Xurmatli ${inputValueName} bizning dasturga xush kelibsiz`;
  elFormInputName.value = null;
});

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let inputValue = elFormInput.value;


  const todo = {
    name: inputValue,
    id: counter++,
  };

  todos.push(todo);
  elFormInput.value = null;
  elFormList.innerHTML = null;

  for (let item of todos) {
    const newLi = document.createElement("li");
    elFormList.appendChild(newLi);
    newLi.setAttribute("class", "form__list-item mt-2 alert alert-primary");
    newLi.setAttribute("role", "alert");
    newLi.textContent = item.name;
    const newInput = document.createElement("input");
    newLi.prepend(newInput);
    newInput.setAttribute("class", "form-check-input form__lisrt-input");
    newInput.setAttribute("type", "checkbox");
    newInput.setAttribute("id", "flexCheckIndeterminate");
  }
});
