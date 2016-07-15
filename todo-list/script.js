var form = document.querySelector("#new-item-form");
var input = document.querySelector("#new-item-input");
var list = document.querySelector("#todo-list");


function createItem(todo) {

  var li = document.createElement("li");
  var label = document.createElement("label");
  var checkbox = document.createElement("input");
  var span = document.createElement("span");

  checkbox.setAttribute("type", "checkbox");
  span.textContent = todo;

  label.appendChild(checkbox);
  label.appendChild(span);
  li.appendChild(label);
  list.appendChild(li);

}

function formSubmitted(event) {
  event.preventDefault();

  input.value.split(", ").forEach(createItem);

  form.reset();
}

form.addEventListener("submit", formSubmitted);
