const queries = require('./queries');

exports.createDeck = async (req, res) => {
    try {
        const deck = await queries.createDeck(req.params.ownerId);
        res.status(200).send(deck);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Something went wrong: ' + error });
    }
}

exports.saveDeck = async (req, res) => {
    try {
        const deck = await queries.updateDeck(req.body);
        res.status(200).send(deck);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Failed to update deck: ' + error });
    }
}

exports.getUsersDeck = async (req, res) => {
    try {
        const decks = await queries.getDecksByUser(req.params.ownerId);
        res.status(200).send(decks);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Failed to fetch decks for user: ' + error });
    }
}

exports.getDeck = async (req, res) => {
    try {
        const deck = await queries.getDeck(req.params.id);
        res.status(200).send(deck);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Failed to fetch deck: ' + error });
    }
}

exports.getAllDecks = async (req, res) => {
    try {
        const decks = await queries.getAllDecks();
        res.status(200).send(decks);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Failed to fetch all decks: ' + error });
    }
}

exports.getUsedCards = async (req, res) => {
    try {
        const cards = await queries.findUsedCards(req.params.ownerId);
        res.status(200).send(cards);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Failed to fetch all used cards for user: ' + error });
    }
}
