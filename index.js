const http = require('http'); 

const hostname = '127.0.0.1'; 
const port = 3000; 

const server = http.createServer((req, res) => {

  const url = req.url; 

  if (url === "/") {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
  } else if (url === "/about") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: red">Hello There!</h1>');
    res.write('<p>I wonder what else we can send...</p>');
    res.end();
  } else if (url === "/info") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style="color: purple">Hello! This is the info page.</h1>');
    res.write('<p>This is pretty cool.</p>');
    res.end();
  }

});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



