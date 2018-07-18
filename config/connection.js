var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: "/Applications/MAMP/tmp/mysql/mysql.sock",
  user: "root",
  password: "root",
  database: "dungeon_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;