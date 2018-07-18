var connection = require("../config/connection.js");

var orm = {
  selectAll: function (callback) {
    var queryString = "SELECT * FROM dungeons";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  insertOne: function (value, completed, callback) {
    var queryString = "INSERT INTO dungeons SET ?";
    connection.query(queryString,
      {
        dungeon_name: value,
        completed
      },
      function (err, result) {
        if (err) throw err;
        callback(result);
      });
  },
  updateOne: function (id, callback) {
    var queryString = "UPDATE dungeons SET ? WHERE ?";
    console.log(id);
    connection.query(queryString,
      [
        {
          completed: true
        },
        {
          id: id
        }
      ],
      function (err, result) {
        if (err) throw err;
        callback(result);
      })
  }
};

module.exports = orm;