function create(index) {
  return function(e) {
    e.preventDefault();
    $("#question" + index).hide("slide", null, 1000, function() {
      if (index < 5) {
        $("#question" + (index+1)).show("slide", null, 1000, null);
      } else {
        $("#title").empty().append("<h1>Results</h1>");
        $("#results").show("slide", null, 1000, null);
      }
    });
  }
}

for (i = 1; i < 6; i++) {
  $("#next" + i).click(create(i));
}
