var methods = 0
var symptoms = 0
var warnings = 0
$(document).ready(function() {
  $("form#stress-test").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=warning]:checked").each(function() {
      warnings++;
    });
    $("input:checkbox[name=symptom]:checked").each(function() {
      symptoms++;
    });
    $("input:checkbox[name=method]:checked").each(function() {
      methods++;
    });
    if ((symptoms >= 4) && (warnings === 6)) {
      $("#bad").show();
      $("#good").hide();
      $("#excellent").hide();
    };
    if ((warnings === 4) && (methods === 5)) {
      $("#bad").hide();
      $("#good").show();
      $("#excellent").hide();
    };
    if ((warnings <= 1) && (methods <= 1) && (symptoms <= 1)) {
      $("#bad").hide();
      $("#good").hide();
      $("#excellent").show();
    };
  });
});
