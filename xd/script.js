
$("form").on("submit", function (e) {
  e.preventDefault();

  var newtask = $("#task").val();
  var task_elem = $("<div>")
    .append('<input type="checkbox">')
    .addClass("task")
    .append(newtask);
  $("#tasks").append(task_elem);

  $.ajax({
    url: "/",
    method: "post",
    dataType: "json",
    data: {
      task: newtask,
    },
    success: function (response) {
      console.log(response);
      console.log(JSON.stringify(response));
    },
  });
});

$("body").on("click", 'input[type="checkbox"]', function () {
  var task = $(this).parents(".task");

  if (task.hasClass("strikeout")) {
    task.removeClass("strikeout");
    task.appendTo($("#tasks"));
  } else {
    task.addClass("strikeout");
    task.appendTo($("#done"));
  }
});
