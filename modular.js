var mymodule = require('./module.js');


var dirName = process.argv[2].toString();
var extension = process.argv[3];

mymodule(dirName, extension, function(err, data){
  if(err){
    return err;
  } else{
    for (var i = 0; i < data.length; i++){
      console.log(data[i]);
    }
  }
})
