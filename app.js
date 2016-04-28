var currentQuestion = 1;

$("#next1").click(function(e) {
  e.preventDefault();
  $("#question1").hide("slide", null, 1000, function() {
      $("#question2").show("slide", null, 1000, null);
  });
});

$("#next2").click(function(e) {
  e.preventDefault();
  $("#question2").hide("slide", null, 1000, function() {
      $("#question3").show("slide", null, 1000, null);
  });
});

$("#next3").click(function(e) {
  e.preventDefault();
  $("#question3").hide("slide", null, 1000, function() {
      $("#question4").show("slide", null, 1000, null);
  });
});

$("#next4").click(function(e) {
  e.preventDefault();
  $("#question4").hide("slide", null, 1000, function() {
      $("#question5").show("slide", null, 1000, null);
  });
});

$("#next5").click(function(e) {
  e.preventDefault();
  $("#question5").hide("slide", null, 1000, function() {
      $("#title").empty().append("<h1>Results</h1>");
      $("#results").show("slide", null, 1000, null);
  });
});
