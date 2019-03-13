const mongoose = require('mongoose');
const express = require('express');
const router = require('./app/router');
const server = express();
const port = 1337;

mongoose.connect('mongodb://mongodb:27017/users');

server.use(router);

server.listen(port, () => {
  console.log('server listening on port ' + port);
});
