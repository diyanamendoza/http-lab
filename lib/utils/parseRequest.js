module.exports = rawRequest => {
  const parsedRequest = rawRequest.split('\r\n'); 
  const [method, path, body] = parsedRequest[0].split(' ');
  return { method, path, body };
};
