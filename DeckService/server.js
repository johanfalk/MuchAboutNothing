const mongoose = require('mongoose');
const express = require('express');
const router = require('./src/router');
const server = express();
const port = 80;

mongoose.connect('mongodb://mongodb:27017/decks');

server.use(router);

server.listen(port, () => {
  console.log('Service listening on port ' + port);
});
