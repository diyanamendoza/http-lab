const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    // console.log(request);

    if(request.method === 'GET' && request.path === '/') {
      socket.write(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
    } 
    else if(request.method === 'POST' && request.path === '/echo') {
      socket.write(createResponse({ body: request.body, status: '200 OK', contentType: 'text/plain' }));
    }
    else if(request.method === 'GET' && request.path === '/red') {
      const redHTML = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Red</title>
      </head>
      <h1>red
      </h1>
      </html>`;
      socket.write(createResponse({ body: redHTML, status: '200 OK', contentType:'text/html' }));
    }
    else if(request.method === 'GET' && request.path === '/green') {
      const greenHTML = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Green</title>
      </head>
      <h1>green
      </h1>
      </html>`;
      socket.write(createResponse({ body: greenHTML, status: '200 OK', contentType:'text/html' }));
    }
    else if(request.method === 'GET' && request.path === '/blue') {
      const blueHTML = `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Blue</title>
      </head>
      <h1>blue
      </h1>
      </html>`;
      socket.write(createResponse({ body: blueHTML, status: '200 OK', contentType:'text/html' }));
    }


    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));

  });
});

module.exports = app;
