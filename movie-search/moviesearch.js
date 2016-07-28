var form = document.querySelector("#movie-search-form");
var input = document.querySelector("#movie-title-input");
form.addEventListener("submit", whenSubmitted);

function whenSubmitted(event) {
  event.preventDefault;

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

  function showMovie(moviedata) {
    var movie = JSON.parse(moviedata)
    var movieTitle = movie.Title;
    var movieYear = movie.Year;
    var list = document.querySelector("#movie-list");
    var holder = document.createElement("li");
    var name = document.createElement("div");
    var hyperLink = document.createElement ("a");
    var year = document.createElement("div");

    hyperLink.textContent = movieTitle;
    var url2 = "http://www.imdb.com/title/" + movie.imdbID;
    hyperLink.setAttribute("href", url2);
    year.textContent = movieYear;

    list.appendChild(holder);
    holder.appendChild(name);
    name.appendChild(year);

    holder.classList.add("movie-list");
  }
}
