/Create variable for form and add event listener
var form = document.querySelector("form");
form.addEventListener("submit", lookUpMovie);

//Create variables for inputted value and append it to base URL
function lookUpMovie(event){
 event.preventDefault()
 var input = document.querySelector("#new-item-input");
 var url = ("http://omdbapi.com/?s=") + input.value;
//This won't do anything till the function gets called, which needs following step

//Calls get function with arguments of url variable  that we just defined and showMovieInfo function
 get(url, showMovieInfo);
}

results.Search.forEach function showMovieInfo(results){
//Assign variable for all parsed JSON data to turn it into an object
 var movieResults = JSON.parse(results);
//Create the list element that will be populated with the movie data
 var movieListLi = document.createElement("li");
 var movieListDiv = document.createElement("div");
 var movieTitle = movieResults.title;
 var movieYear = movieResults.year;
}
 //var MovieList = []
 //var ul = document.querySelector("ul").appendChild(movieDetails);
//movieList.textContent = movieResults;
//Create the loop
//movieDetails.forEach(showMovieInfo);
}


//Get function executing HTTP request
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
//End get function`
