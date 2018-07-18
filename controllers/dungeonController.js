var express = require("express");

var router = express.Router();

var dungeon = require("../models/dungeon.js");

router.get("/", function(req, res) {
  dungeon.selectAll(function(data) {
    var dungeonObject = {
      dungeons: data
    };
    console.log(dungeonObject);
    res.render("index", dungeonObject);
  });
});

router.post("/api/dungeons", function(req, res) {
  console.log("hi\n" + req.body);
  dungeon.insertOne(req.body.dungeon_name, req.body.completed, function(result) {
    res.json({ result });
  });
});

router.put("/api/dungeons/:id", function(req, res) {
  dungeon.updateOne(req.params.id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
