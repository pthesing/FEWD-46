var form = document.querySelector("#new-item-form");
var input = document.querySelector("#new-item-input");
var list = document.querySelector("#todo-list");

form.addEventListener("submit", formSubmitted);
loadPage();

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

  saveItem();
}

// WHEN the page loads
function loadPage() {
// - Look in localStorage to see if the HTML for the list is there
// - IF the HTML is there
//   - Set the HTML of the list to the HTML in localStorage
  list.innerHTML = localStorage.getItem("listHTML");
}
// WHEN the user adds an item
function saveItem() {
// - Do all the normal stuff
// - Once the item is added to the list
// - Save the HTML of the list to localStorage
  localStorage.setItem("list.HTML", list.innerHTML);
}
