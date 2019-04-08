//user interface
function player(name)  {
  this.jina = name;
}
var nameOne = new player("")
var nameTwo = new player("")

$("input:text").ready(function () {
  $("#START").click(() => {
    var nameOne = $("input:text#playerOne").val();
    $("#player1").text("PLAYER ONE: " + nameOne);

    var nameTwo = $("input:text#playerTwo").val();
    $("#player2").text("PLAYER TWO: " + nameTwo);

    $("#rollTwo").hide();
    $("#holdTwo").hide();
  });
});

//business logic
var round1Total = 0
var round2Total = 0
var totalScore1 = 0
var totalScore2 = 0
var hold1 = 0
var hold2 = 0


$(document).ready(function () {
  $("#rollOne").click(() => {
    var random1 = Math.floor((Math.random() * 6) + 1);
    $("#outputOne").text("DICE ROLL: " + random1);

    if (random1 === 1) {
      round1Total = 0;
      alert("OOPS!YOU GOT ONE")
      $("#roundOne").text("ROUND TOTAL: " + round1Total);
      $("#rollOne").hide();
      $("#holdOne").hide();
      $("#rollTwo").show();
      $("#holdTwo").show();
    } else {
      round1Total = random1 + round1Total;
      $("#roundOne").text("ROUND TOTAL: " + round1Total);
    }
  });
});

$(document).ready(function () {
  $("#holdOne").click(() => {
    hold1 = round1Total + totalScore1 + hold1;
    round1Total = 0;
    $("#total1Score").text("Total score: " + hold1);
    $("#rollOne").hide();
    $("#holdOne").hide();
    $("#rollTwo").show();
    $("#holdTwo").show();
    if (totalScore1 === 100)  {
      alert( "YOU WON!")
    }
  });
});


$(document).ready(function () {
  $("#rollTwo").click(() => {
    var random2 = Math.floor((Math.random() * 6) + 1);
    $("#outputTwo").text("DICE ROLL: " + random2);

    if (random2 === 1) {
      round2Total = 0;
      alert("OOPS!YOU GOT ONE")
      $("#roundTwo").text("ROUND TOTAL: " + round2Total);
      $("#rollTwo").hide();
      $("#holdTwo").hide();
      $("#rollOne").show();
      $("#holdOne").show();
    } else {
      round2Total = random2 + round2Total;
      $("#roundTwo").text("ROUND TOTAL: " + round2Total);
    }
  });
});

$(document).ready(function () {
  $("#holdTwo").click(() => {
    hold2 = round2Total + totalScore2 + hold2;
    round2Total = 0;
    $("#total2Score").text("Total score: " + hold2);
    $("#rollTwo").hide();
    $("#holdTwo").hide();
    $("#rollOne").show();
    $("#holdOne").show();
    if (totalScore2 === 100)  {
      alert("YOU WON!")
    }
  });
});

