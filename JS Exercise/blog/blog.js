var link = document.querySelector(".like-link");
var likeCount = document.querySelector(".like-count");
var commentForm = document.querySelector("#new-comment");
var commentBody = document.querySelector("#new-comment-body")
var comments = document.querySelector("#comments");

link.addEventListener("click", like);
form.addEventListener("submit", comment);

function like(event) {
  event.preventDefault();

  var count = parseInt(likeCount.textContent);
  likeCount.textContent = count + 1;
  };

function comment(event) {
  event.preventDefault();

  var comment = document.createElement("div");
  comment.setAttribute("class", "comment");
  comment.textContent = commentBody.value;
  comments.appendChild(comment);
  commentForm.reset();
};
