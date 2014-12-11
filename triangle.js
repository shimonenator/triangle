'use strict';

var fs = require('fs');
var	triangle = [
		[5],
		[9,6],
		[4,6,8],
		[0,7,1,5]
	];

fs.readFile('./triangle.txt', {encoding: 'utf8'}, function (err, lines) {
	if (err) throw err;
	
	lines = lines.split(/\n/).map(function (str) {
		return str.trim().split(' ').map(function returnInt (str) {
			return parseInt(str, 10);
		});
	})
	
	var i = lines.length, j = 0, line, prevLine;
	while (i--) {
		line = prevLine || lines[i];
		prevLine = lines[i-1];
		j = line.length;
		while (prevLine && --j) {
			prevLine[j-1] += Math.max(line[j], line[j-1] || 0);
		}
	}

	console.log(lines[0][0]);
});

