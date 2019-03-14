const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    ownerId: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true,
    },
    cards: [{
        type: String
    }]
});

const Deck = mongoose.model('Deck', schema);

module.exports = Deck;
