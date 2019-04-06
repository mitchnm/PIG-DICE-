$(document).ready(function () {
  $("#rollOne").click(() => {
    var random1 = Math.floor((Math.random() * 6) + 1);
    $("#outputOne").text("DICE ROLL: " + random1); 


    
    var round1Total=0
    $("#roundOne").text("ROUND TOTAL: " + random1 + round1Total );
  });
});

    

$(document).ready(function () {
  $("#rollTwo").click(() => {
    var random2 = Math.floor((Math.random() * 6) + 1);
    $("#outputTwo").text("DICE ROLL: " +  random2);
  });
});



