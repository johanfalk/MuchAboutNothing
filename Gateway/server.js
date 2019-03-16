const express = require('express');
//const router = require('./app/router');
const server = express();
const port = 1336;
const Router = express.Router();
const axios = require('axios');

Router.get('/DeckService/*', (req, res) => {
  const newUrl = 'http://deck_service/' + req.url.replace('/DeckService/', '');
  console.log(newUrl);

  axios.get(newUrl).then((response) => {
    res.status(response.status).send(response.data);
  });
});


Router.get('/stuff/:id', (req, res) => {
  try {
    console.log(req.params.id);

    res.send('OK');
  } catch (error) {
    console.log(error);
    res.status(500).send('error');
  }
})

server.use(Router);

server.listen(port, () => {
  console.log('server listening on port ' + port);
});
