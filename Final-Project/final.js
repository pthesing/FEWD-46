//When yes is checked
  //display appropriate vote
  //put data in table at the bottom

var yes51 = document.querySelector("#yes51");
yes51.addEventListener("click", voteYes);

function voteYes () {
  var voteYes51 = document.createElement("div");
  voteYes51.setAttribute("class", "voteYes");

  var yesText = document.createTextNode("You should vote YES");
  voteYes51.appendChild(yesText);

  var prop51 = document.querySelector(".prop51");
  prop51.appendChild(voteYes51);

}


//When no is checked
  //display appropriate vote
  //put data in table at the bottom


//click to enlarge
