const express = require('express');
const Router = express.Router();
const axios = require('axios');

Router.use(express.json());

Router.get('/DeckService/*', (req, res) => {
  const newUrl = 'http://deck_service/' + req.url.replace('/DeckService/', '');
  console.log(newUrl);

  axios.get(newUrl).then((response) => {
    res.status(response.status).send(response.data);
  }).catch((error) => {
    console.log(error);
    res.status(500).send({ message: 'Unexpected error in API gateway' });
  });
});

Router.post('/DeckService/*', (req, res) => {
  const newUrl = 'http://deck_service/' + req.url.replace('/DeckService/', '');
  console.log(newUrl);

  axios.post(newUrl, req.body).then((response) => {
    res.status(response.status).send(response.data);
  }).catch((error) => {
    console.log(error);
    res.status(500).send({ message: 'Unexpected error in API gateway' });
  });
});

Router.put('/DeckService/*', (req, res) => {
  const newUrl = 'http://deck_service/' + req.url.replace('/DeckService/', '');
  console.log(newUrl);

  axios.put(newUrl, req.body).then((response) => {
    res.status(response.status).send(response.data);
  }).catch((error) => {
    console.log(error);
    res.status(500).send({ message: 'Unexpected error in API gateway' });
  });
});

Router.delete('/DeckService/*', (req, res) => {
  const newUrl = 'http://deck_service/' + req.url.replace('/DeckService/', '');
  console.log(newUrl);

  axios.delete(newUrl).then((response) => {
    res.status(response.status).send(response.data);
  }).catch((error) => {
    console.log(error);
    res.status(500).send({ message: 'Unexpected error in API gateway' });
  });
});

module.exports = Router;