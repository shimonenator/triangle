'use strict';

var fs = require('fs'),
    readline = require('readline'),
    i = 0, sum = 0;

readline.createInterface({
  input: fs.createReadStream('./triangle.txt'),
  output: process.stdout,
  terminal: false
})
.on('line', function (line) {
  line = line.split(' ');

  var left = parseInt(line[i]),
      right = parseInt(line[i+1]);
  
  if (right > left) {
    sum += right;
    i++;
  } else {
    sum += left;
  }
})
.on('close', function () {
  console.log('sum', sum);
});
