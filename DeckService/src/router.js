const express = require('express');
const Router = express.Router();
const controller = require('./controller');

Router.use(express.json());

Router.post(
    '/:ownerId',
    controller.createDeck
);

module.exports = Router;