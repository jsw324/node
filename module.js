var fs = require('fs');
var path = require('path');

var resArray = [];

module.exports = function filtered(filePath, filterBy, callback){
    fs.readdir(filePath, function(err, data){
      if(err) {
        return callback(err, resArray);
      } else {
          for (var i = 0; i < data.length; i++){
            //sanitize extension string?
            var ext = path.extname(data[i]);
            //resArray.push(data[i]);
            if (ext.slice(1) == filterBy){
              resArray.push(data[i]);
            }
          }
        }
      callback(null, resArray);
    })
  }
