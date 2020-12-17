$(".create-form").on("submit", function (event) {
    event.preventDefault();
    var burgerObj = {
        burger_name: $("#new-name").val().trim(),
        devoured: 0
    }
  
    $.ajax("/api/burgers", {
      type: "POST",
      data: burgerObj,
    }).then(function () {
      location.reload();
    });
  });
  
  $(".devour-it").on("click", function (event) {
    var id = $(this).data("id");
   
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(function () {
      location.reload();
    });
  });
  
  $(".delete-it").on("click", function (event) {
    var id = $(this).data("id");
  

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      location.reload();
    });
  });