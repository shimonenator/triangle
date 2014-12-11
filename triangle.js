'use strict';

var fs = require('fs');

fs.readFile('./triangle.txt', {encoding: 'utf8'}, function (err, lines) {
	if (err) throw err;
	
	console.log(
		lines.split(/\n/).map(function (str) {
			return str.trim().split(' ').map(function (str) {
				return parseInt(str, 10);
			});
		}).reduceRight(function (line, prevLine) {
			return prevLine.map(function (value, i) {
				return value + Math.max(line[i], line[i+1]||0)
			});
		})[0]
	);
});
