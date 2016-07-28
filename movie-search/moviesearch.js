var form = document.querySelector("#movie-search-form");
form.on("submit", whenSubmitted);

function whenSubmitted(event) {
  event.preventDefault;

  var input = document.querySelector("#movie-title-input");
  var url = "http://www.omdbapi.com/?s=" + input;

  $.get(url, movieResults);

  form.reset();
}
