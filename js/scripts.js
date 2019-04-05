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