'use strict';

var fs = require('fs');

fs.readFile('./triangle.txt', {encoding: 'utf8'}, function (err, lines) {
  var i = 0, sum = 0;

  if (err) throw err;

  sum = lines.split(/\n/).reduce(function (sum, line) {
    line = line.split(' ');

    var left = parseInt(line[i]),
        right = parseInt(line[i+1]);

    if (right > left) {
      sum += right;
      i++;
    } else {
      sum += left;
    }

    return sum;
  }, 0);

  console.log('sum', sum);
});
