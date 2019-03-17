const express = require('express');
const server = express();
const deckServiceRouter = require('./src/deckServiceRouter');
const userServiceRouter = require('./src/userServiceRouter');
const port = 80;

server.use(deckServiceRouter);
server.use(userServiceRouter);

server.listen(port, () => {
  console.log('server listening on port ' + port);
});
