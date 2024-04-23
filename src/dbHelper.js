var mysql = require('mysql2');

var con = mysql.createConnection({
        host: "localhost",
        user: "MYSQL_USER",
        password: "MYSQL_PASSWORD",
        database: "mydatabase"
      });

function seed() {
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");

        var sql = "CREATE TABLE IF NOT EXISTS users (`email` varchar(255) PRIMARY KEY, `password` varchar(225), `name` varchar(225), `authToken` varchar(225), `question` varchar(225), `answer` varchar(225), `flag` varchar(225))";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });

        var sql = "INSERT IGNORE INTO users (email, name, authToken, question, answer, flag) VALUES ('joshua@cssig.selu.edu', 'Joshua Cantu', '00IY5IlTLPaK', 'What was your first pets name?', 'Norway', 'selu{I_<3_P3ts!_P3opleSuck}');";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Joshua's User Created");
        });
        
        var sql = "INSERT IGNORE INTO users (email, name, authToken, question, answer, flag) VALUES ('kody@cssig.selu.edu', 'Kody Chabaud', '6ErN07an7S8Q', 'Whats your mothers maiden name?', 'Smith', 'selu{M0ms_@re_Th3_Besst!}');";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Kody's User Created");
        });

        var sql = "INSERT IGNORE INTO users (email, name, authToken, question, answer, flag) VALUES ('tevor@cssig.selu.edu', 'Trevor Patorno', 'xkIlCmYTnzQp', 'Whats your mothers maiden name?', 'Smith', 'selu{M0ms_@re_Th3_Besst!}');";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Trevor's User Created");
        });

        var sql = "INSERT IGNORE INTO users (email, name, authToken, question, answer, flag) VALUES ('shanna@cssig.selu.edu', 'Shanna OQuinn', 'lfBLcSxocbgh', 'Whats your mothers maiden name?', 'Smith', 'selu{M0ms_@re_Th3_Besst!}');";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Shanna's User Created");
        });

        var sql = "INSERT IGNORE INTO users (email, name, authToken, question, answer, flag) VALUES ('patrick@cssig.selu.edu', 'Patrick Theroit', 'KeDdBnYiKlLo', 'Whats your mothers maiden name?', 'Smith', 'selu{M0ms_@re_Th3_Besst!}');";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Patrick's User Created");
        });

        var sql = "INSERT IGNORE INTO users (email, name, authToken, question, answer, flag) VALUES ('caz@cssig.selu.edu', 'Caz Cheramie', 'ymlPTGDWyGoe', 'Whats your mothers maiden name?', 'Smith', 'selu{M0ms_@re_Th3_Besst!}');";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Caz's User Created");
        });

      });
    console.log("Done Seeding")
}

function getQuestion(email){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "SELECT question FROM users WHERE email = '"+email+"'";
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(sql)
      console.log(result);
      return result
    });
  


  });
}
module.exports = { seed, getQuestion };