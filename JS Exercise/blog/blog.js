var link = document.querySelector(".like-link");
var form = document.querySelector("#new-comment");

link.addEventListener("click", buttonClick());
form.addEventListener("submit", comment);

function like(event) {
  event.preventDefault();
  var link = 0;
  function buttonClick() {
    document.getElementByID("link").value = ++;
    }
  };

function comment(event) {
  event.preventDefault();

  // Your code for comments goes here
}
