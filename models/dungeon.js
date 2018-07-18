var orm = require("../config/orm.js");

var dungeon = {
  selectAll: function(callback) {
    orm.selectAll(function(result) {
      callback(result);
    });
  },
  insertOne: function(value, completed, callback) {
    orm.insertOne(value, completed, function(result) {
      callback(result);
    });
  },
  updateOne: function(id, callback) {
    orm.updateOne(id, function(result) {
      callback(result);
    });
  },
};

module.exports = dungeon;