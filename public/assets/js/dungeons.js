$(function() {
  $("#completed").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.ajax("/api/dungeons/" + id, {
      type: "PUT",
      data: id
    }).then(
      function() {
        console.log("Changed completed to", id);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newDungeon = {
      dungeon_name: $("#dungeon").val().trim(),
      completed: $("[name=completed]:checked").val().trim()
    };
    console.log(newDungeon);
    $.ajax("/api/dungeons", {
      type: "POST",
      data: newDungeon
    }).then(
      function() {
        console.log("Added new dungeon.");
        location.reload();
      }
    );
  });
});
