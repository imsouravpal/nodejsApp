const http = require('http');

const routes = require('./routes.js');

const server = http.createServer(routes);
/*// this is when we export as object
const server = http.createServer(routes.handler); 
 console.log(routes.someText);*/

server.listen(3000);
