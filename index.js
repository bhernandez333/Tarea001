var http  = require("http");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'prueba',
    user     : 'BismHern',
    password : 'ist-2020',
  });

  http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    connection.connect();
    connection.query('SELECT * From ejemplo1', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
      });
    //response.end(results[0].solution);
    connection.end();
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');