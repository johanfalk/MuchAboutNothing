const express = require('express');
const deckServiceRouter = require('./app/deckServiceRouter');
const server = express();
const port = 1336;

server.use(deckServiceRouter);

server.listen(port, () => {
  console.log('server listening on port ' + port);
});
