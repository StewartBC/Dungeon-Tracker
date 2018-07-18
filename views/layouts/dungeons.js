$(function() {
  $(".change-sleep").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");
    var newSleepState = {
      sleepy: newSleep
    };

    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
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
