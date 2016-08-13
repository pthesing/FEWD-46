//When yes is checked
  //display appropriate vote
  //put data in table at the bottom

//When no is checked
  //display appropriate vote
  //put data in table at the bottom

//click to enlarge

$(".back").toggle(function(){
    $(this).animate({"height": "400px"}, {"width": "700px"}, 100);
}, function(){
    $(this).animate({"height": "260px"}, {"width": "300px;"}, 100);
});
