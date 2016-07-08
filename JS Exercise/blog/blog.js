var link = document.querySelector(".like-link");
var likeCount = document.querySelector(".like-count");
var form = document.querySelector("#new-comment");

link.addEventListener("click", like);
form.addEventListener("submit", comment);

function like(event) {
  event.preventDefault();

  var count = parseInt(likeCount.textContent);
  likeCount.textContent = count + 1;
  };

function comment(event) {
  event.preventDefault();

}
