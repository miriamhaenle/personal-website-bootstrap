const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const url = request.url;

  if (url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    const index = fs.readFileSync('./index.html');
    response.end(index);
  }

  if (url === '/img/github.png') {
    response.writeHead(200, { 'Content-Type': 'image/png' });
    const img = fs.readFileSync('./img/github.png');
    response.end(img);
  }

  if (url === '/img/linkedin-icon-2.svg') {
    response.writeHead(200, { 'Content-Type': 'image/svg' });
    const svg = fs.readFileSync('./img/linkedin-icon-2.svg');
    response.end(svg);
  }

  if (url === '/img/227-2271566_codepen-logo.png') {
    response.writeHead(200, { 'Content-Type': 'image/png' });
    const png = fs.readFileSync('./img/227-2271566_codepen-logo.png');
    response.end(png);
  }

  if (url === '/img/PH9A4352.jpg') {
    response.writeHead(200, { 'Content-Type': 'image/png' });
    const mh = fs.readFileSync('./img/PH9A4352.jpg');
    response.end(mh);
  }

  response.writeHead(404, { 'Content-Type': 'text/html' });
  const notFoundPage = fs.readFileSync('./errorPage.html');
  response.end(notFoundPage);
});

server.listen('8083', () => console.log('This server listens to 8083'));
