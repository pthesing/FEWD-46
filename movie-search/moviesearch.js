var form = document.querySelector("#movie-search-form");
var input = document.querySelector("#movie-title-input");
form.addEventListener("submit", whenSubmitted);

function whenSubmitted(event) {
  event.preventDefault();

  var url = ("http://www.omdbapi.com/?s=" + input.value);

  get(url, movieResults);

  function get(url, callback) {
    var request = new XMLHttpRequest();

    request.open("GET", url, true);

    request.addEventListener("readystatechange", handleReadyStateChange)

    function handleReadyStateChange() {
      if (request.readyState == 4 && request.status == 200) {
        callback(request.responseText);
      }
    };

    request.send();
  }

  function movieResults(moviedata) {
    var movie = JSON.parse(moviedata)
    var list = document.querySelector("#movie-list");
    var li = document.createElement("li");
    var titlePlace = document.createElement("div");
    var yearPlace = document.createElement("div");

    yearPlace.textContent = movie.Year;
    titlePlace.textContent = movie.Title;

    list.appendChild(li);
    li.appendChild(titlePlace);
    li.appendChild(yearPlace);

    li.classList.add("movie-list");
  }

  form.reset;
}
