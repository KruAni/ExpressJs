// PIPING AND CHAINING STREAMS
var fs = require('fs');
var zlib = require('zlib');

var readStream = fs.createReadStream('input.txt');
var text = '';

readStream.on('data', function(chunk) {
text+=chunk;
});

readStream.on('end', function() {
 console.log(text);
});

var fs = require('fs');
var readStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('file2.txt');

readStream.pipe(writeStream);

var readStream = fs.createReadStream('input.txt');
var zlib = zlib.createGzip();
var writeStream = fs.createWriteStream('input.txt.gz');
readStream.pipe(zlib).pipe(writeStream);