var fs = require('fs')

var filePath = process.argv[2];

var buf = fs.readFileSync(filePath);

var res = buf.toString().split('\n');

console.log(res.length - 1);
