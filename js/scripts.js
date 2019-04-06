$(document).ready(function () {
  $("#rollOne").click(() => {
    var randomNO1 = Math.floor((Math.random() * 6) + 1);
    $("#outputOne").text("DICE ROLL: " + randomNO1);
  });
});
$(document).ready(function () {
  $("#rollTwo").click(() => {
    var randomNO2 = Math.floor((Math.random() * 6) + 1);
    $("#outputTwo").text("DICE ROLL: " + randomNO2);
  });
});





$(document).ready(function () {
  $("#names").click(() => {
    var nameOne = document.getElementById(playerOne);
    $("#player1").text("PLAYER ONE: " + nameOne);
  });
});