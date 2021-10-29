module.exports = rawRequest => {
  //   console.log(rawRequest);
  const byLine = rawRequest.split('\r\n');
  //   console.log(byLine);
  const [method, path] = byLine[0].split(' ');

  return method === 'POST' ? { method, path, body: byLine[byLine.length - 1] } : { method, path };
};
