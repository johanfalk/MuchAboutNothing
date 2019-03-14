const queries = require('./queries');

exports.createDeck = async (req, res) => {
    try {
        const deck = await queries.createDeck(req.params.ownerId);
        res.status(200).send(deck);
    } catch (error) {
        res.status(500).send({ message: 'Something went wrong: ' + error });
    }
}