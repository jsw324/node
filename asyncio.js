var fs = require('fs');
var filePath = process.argv[2];
var res = 0;

fs.readFile(filePath, function(err, data){
  if (err) {
    console.log(err);
    return;
  } else {
    var info = data.toString().split('\n');
    console.log(info.length - 1);
  }
})
