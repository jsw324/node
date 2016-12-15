/* Write a program that performs an HTTP GET request to a URL provided to you
 as the first command-line argument. Collect all data from the server (not
 just the first "data" event) and then write two lines to the console
 (stdout).

 The first line you write should just be an integer representing the number
 of characters received from the server. The second line should contain the
*/

var http = require('http');
var res = "";
//get supplied url
var url = process.argv[2];

http.get(url, function(response){
  response.setEncoding('utf8');
  response.on("data", function(data){
    res += data.toString();
    })
    response.on('end', function(){
      console.log(res.length);
      console.log(res);
  })
})
