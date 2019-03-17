const express = require('express');
const Router = express.Router();
const axios = require('axios');

Router.use(express.json());

Router.use('/DeckService/*', function (req, res, next) {
  if (!req.headers['auth_token']) {
    res.status(500).send({ message: 'Unathorized' });
    return;
  }

  axios.get('http://user_service/token/validate/?access_token=' + req.headers['auth_token'], {
    headers: {
      auth_token: req.headers['auth_token']
    }
  }).then((response) => {
    if (response.data) {
      next();
    } else {
      res.status(response.status).send(response.data);
    }
  }).catch((error) => {
    console.log(error.response.data);
    res.status(401).send(error.response.data);
  });
});

Router.get('/DeckService/*', (req, res) => {
  const newUrl = 'http://deck_service/' + req.url.replace('/DeckService/', '');

  axios.get(newUrl).then((response) => {
    res.status(response.status).send(response.data);
  }).catch((error) => {
    console.log(error.data);
    res.status(error.status).send(error.data);
  });
});

Router.post('/DeckService/*', (req, res) => {
  const newUrl = 'http://deck_service/' + req.url.replace('/DeckService/', '');

  axios.post(newUrl, req.body).then((response) => {
    res.status(response.status).send(response.data);
  }).catch((error) => {
    console.log(error.data);
    res.status(error.status).send(error.data);
  });
});

Router.put('/DeckService/*', (req, res) => {
  const newUrl = 'http://deck_service/' + req.url.replace('/DeckService/', '');

  axios.put(newUrl, req.body).then((response) => {
    res.status(response.status).send(response.data);
  }).catch((error) => {
    console.log(error.data);
    res.status(error.status).send(error.data);
  });
});

Router.delete('/DeckService/*', (req, res) => {
  const newUrl = 'http://deck_service/' + req.url.replace('/DeckService/', '');

  axios.delete(newUrl).then((response) => {
    res.status(response.status).send(response.data);
  }).catch((error) => {
    console.log(error.response.data);
    res.status(error.response.status).send(error.response.data);
  });
});

module.exports = Router;