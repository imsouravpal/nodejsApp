const http = require("http");

const assignmentRoutes = require('./assignmentRoutes');

const server = http.createServer(assignmentRoutes);

server.listen(3001);