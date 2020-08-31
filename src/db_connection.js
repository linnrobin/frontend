var mysql = require("mysql");

var con = mysql.createConnection({
  host: "http://34.101.74.27",
  user: "root",
  password: "oB80jJvIdz2w8Ohn",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
