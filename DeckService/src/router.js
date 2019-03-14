const express = require('express');
const Router = express.Router();
const controller = require('./controller');

Router.use(express.json());

Router.put(
    '/:ownerId',
    controller.createDeck
);

Router.post(
    '/deck/save',
    controller.saveDeck
);

Router.get(
    '/',
    controller.getAllDecks
);

Router.get(
    '/deck/:id',
    controller.getDeck
);

Router.get(
    '/decks/:ownerId',
    controller.getUsersDeck
);

module.exports = Router;