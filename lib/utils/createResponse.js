module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  return `HTTP/1.1 ${status}\r
Content-Type: ${contentType}\r
Content-Length: ${body.length}\r
\r
${body}
    `;

};
