const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  // const readStream = fs.createReadStream('./index.html')
  // res.writeHead(200, {'Content-type': 'text/html'});

  const readStream = fs.createReadStream('./examples.json')
  res.writeHead(200, {'Content-type': 'application/json'});
  readStream.pipe(res);
  // if(req.url === '/'){
  //   res.write('Hello world from nodejs');
  //   res.end();
  // }else {
  //   res.write('using some other domain');
  //   res.end();
  // }
}).listen('3000');