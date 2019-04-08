$("input:text").ready(function () {
  $("#START").click(() => {
    var nameOne = $("input:text#playerOne").val();
    $("#player1").text("PLAYER ONE: " + nameOne);

    var nameTwo = $("input:text#playerTwo").val();
    $("#player2").text("PLAYER TWO: " + nameTwo);
  });
});



var playerOne1 = []
var playerTwo2 = []
var round1Total = 0
var round2Total = 0
var totalScore1 = 0
var totalScore2 = 0

$(document).ready(function () {
  $("#rollOne").click(() => {
    var random1 = Math.floor((Math.random() * 6) + 1);
    $("#outputOne").text("DICE ROLL: " + random1);

    if (random1 === 1) {
      round1Total = 0;
      $("#roundOne").text("ROUND TOTAL: " + round1Total);
    } else {
      round1Total = random1 + round1Total;
      $("#roundOne").text("ROUND TOTAL: " + round1Total);
    }
  });
});



$(document).ready(function () {
  $("#rollTwo").click(() => {
    var random2 = Math.floor((Math.random() * 6) + 1);
    $("#outputTwo").text("DICE ROLL: " + random2);

    if (random2 === 1) {
      round2Total = 0;
      $("#roundTwo").text("ROUND TOTAL: " + round2Total);
    } else {
      round2Total = random2 + round2Total;
      $("#roundTwo").text("ROUND TOTAL: " + round2Total);
    }
  });
});


$(document).ready(function () {
  $("#holdOne").click(() => {
    var hold1 = round1Total + totalScore1;
    round1Total = 0;
    $("#total1Score").text("Total score: " + hold1);
  });
});


$(document).ready(function () {
  $("#holdTwo").click(() => {
    var hold2 = round2Total + totalScore2;
    round2Total = 0;
    $("#total2Score").text("Total score: " + hold2);
  });
});