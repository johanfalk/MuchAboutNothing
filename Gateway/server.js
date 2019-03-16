const express = require('express');
const deckServiceRouter = require('./src/deckServiceRouter');
const userServiceRouter = require('./src/userServiceRouter');
const server = express();
const port = 1336;

server.use(deckServiceRouter);
server.use(userServiceRouter);

server.listen(port, () => {
  console.log('server listening on port ' + port);
});
