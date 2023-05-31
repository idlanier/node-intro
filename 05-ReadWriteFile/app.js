const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const readStream = fs.createReadStream('./example.txt');
const writeStream = fs.createWriteStream('example2.txt.gz');
// readStream.on('data', (chunk) => {
//   writeStream.write(chunk)
// })

readStream.pipe(gzip).pipe(writeStream);