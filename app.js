function randomResult() {
  var goats =  [{"text": "You are a Maris Piper Potato.", "img": "potato.jpeg"},
                {"text": "You are a baby goat!", "img": "baby-goat.jpg"},
                {"text": "You are a beardy goat!", "img": "beardy-goat.jpg"},
                {"text": "You are a horny goat!", "img": "horny-goat.jpg"},
                {"text": "You are an extreme goat!", "img": "extreme-goat.jpg"}];
  return goats[Math.round(Math.random() * (goats.length - 1))];
}

function create(index) {
  return function(e) {
    e.preventDefault();
    $("#question" + index).hide("slide", null, 1000, function() {
      if (index < 5) {
        $("#question" + (index+1)).show("slide", null, 1000, null);
      } else {
        $("#title").empty().append("<h1>Results</h1>");
        var goat = randomResult();
        $("#resultText").empty().append(goat.text);
        $("#resultImg").attr("src", goat.img);
        $("#results").show("slide", null, 1000, null);
      }
    });
  }
}

for (i = 1; i < 6; i++) {
  $("#next" + i).click(create(i));
}
