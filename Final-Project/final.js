//When yes is checked
  //display appropriate vote

//51
var yes51 = document.querySelector("#yes51");
yes51.addEventListener("click", voteYes51);

function voteYes51 () {
  var voteYes51 = document.createElement("div");
  voteYes51.setAttribute("class", "voteYes");

  var yesText = document.createTextNode("You should vote YES");
  voteYes51.appendChild(yesText);

  var prop51 = document.querySelector(".prop51");
  prop51.appendChild(voteYes51);

}

var no51 = document.querySelector("#no51");
no51.addEventListener("click", voteNo51);

function voteNo51 () {
  var voteNo51 = document.createElement("div");
  voteNo51.setAttribute("class", "voteNo");

  var noText = document.createTextNode("You should vote NO");
  voteNo51.appendChild(noText);

  var prop51 = document.querySelector(".prop51");
  prop51.appendChild(voteNo51);
}

//52

//53

//54

//55

//56

//57

//58

//59

//60

//61

//62

//63

//64

//65

//66

//67



//When no is checked
  //display appropriate vote
  //put data in table at the bottom


//click to enlarge
