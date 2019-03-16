const express = require('express');
const Router = express.Router();
const axios = require('axios');

Router.use(express.json());

Router.get('/UserService/*', (req, res) => {
    const newUrl = 'http://user_service/' + req.url.replace('/UserService/', '');
    console.log(newUrl);

    axios.get(newUrl).then((response) => {
        res.status(response.status).send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).send({ message: 'Unexpected error in API gateway' });
    });
});

Router.post('/UserService/*', (req, res) => {
    const newUrl = 'http://user_service/' + req.url.replace('/UserService/', '');
    console.log(newUrl);

    axios.post(newUrl, req.body).then((response) => {
        res.status(response.status).send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).send({ message: 'Unexpected error in API gateway' });
    });
});

Router.put('/UserService/*', (req, res) => {
    const newUrl = 'http://user_service/' + req.url.replace('/UserService/', '');
    console.log(newUrl);

    axios.put(newUrl, req.body).then((response) => {
        res.status(response.status).send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).send({ message: 'Unexpected error in API gateway' });
    });
});

Router.delete('/UserService/*', (req, res) => {
    const newUrl = 'http://user_service/' + req.url.replace('/UserService/', '');
    console.log(newUrl);

    axios.delete(newUrl).then((response) => {
        res.status(response.status).send(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).send({ message: 'Unexpected error in API gateway' });
    });
});

module.exports = Router;