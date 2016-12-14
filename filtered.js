var fs = require('fs');
var path = require('path');

var filePath = process.argv[2].toString();
var filterBy = process.argv[3]
var res = [];
//console.log(filterBy);
fs.readdir(filePath, function(err, list){
  if (err){
    console.log('error ' + err);
  } else {
    for (var i = 0; i < list.length; i++){
      var ext = path.extname(list[i]);
      if (ext.slice(1) == filterBy){
        console.log(list[i]);
      }
    }
  }
});
