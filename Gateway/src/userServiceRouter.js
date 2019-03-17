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
        res.status(error.response.status).send(error.response.data);
    });
});

Router.post('/UserService/*', (req, res) => {
    const newUrl = 'http://user_service/' + req.url.replace('/UserService/', '');
    console.log(newUrl);

    axios.post(newUrl, req.body).then((response) => {
        res.status(response.status).send(response.data);
    }).catch((error) => {
        res.status(error.response.status).send(error.response.data);
    });
});

Router.put('/UserService/*', (req, res) => {
    const newUrl = 'http://user_service/' + req.url.replace('/UserService/', '');
    console.log(newUrl);

    axios.put(newUrl, req.body).then((response) => {
        res.status(response.status).send(response.data);
    }).catch((error) => {
        res.status(error.response.status).send(error.response.data);
    });
});

Router.delete('/UserService/*', (req, res) => {
    const newUrl = 'http://user_service/' + req.url.replace('/UserService/', '');
    console.log(newUrl);

    axios.delete(newUrl).then((response) => {
        res.status(response.status).send(response.data);
    }).catch((error) => {
        res.status(error.response.status).send(error.response.data);
    });
});

module.exports = Router;