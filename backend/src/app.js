const http = require( 'http' );
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {

  if (req.url === '/favicon.ico') {
    res.writeHead(200, { 'Content-Type': 'image/x-icon' });
    res.end();
    return;
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Node.js server online. ${new Date().toLocaleTimeString()}`);
  }

});

server.listen(port, hostname, () => {
  console.log(`Node server is listening on http://${hostname}:${port}/`);
});