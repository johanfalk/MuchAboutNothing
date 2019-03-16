const Deck = require('./models/deck');

exports.createDeck = async (ownerId) => {
    return new Deck({
        ownerId: ownerId,
        name: 'New deck',
        cards: []
    }).save();
}

exports.updateDeck = async (deck) => {
    return await Deck.findByIdAndUpdate(deck._id, deck).exec();
}

exports.deleteDeck = async (deck) => {
    return await Deck.findByIdAndDelete(deck._id).exec();
}

exports.getDecksByUser = async (userId) => {
    return await Deck.find({ ownerId: userId }).exec();
}

exports.getDeck = async (id) => {
    return await Deck.findById(id).exec();
}

exports.getAllDecks = async () => {
    return Deck.find({}).exec();
}

exports.findUsedCards = async (userId) => {
    const decks = await Deck.find({ ownerId: userId }).exec();
    let cardAndCount = [];

    decks.forEach(cardId => {
        cardAndCount[cardId] = cardAndCount[cardId] || 0;
        cardAndCount[cardId]++;
    });

    return cardAndCount;
}