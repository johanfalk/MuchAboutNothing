const Cookies = require('js-cookie');
const requestUtil = require('../utils/requestUtil');

export async function getDecks() {
    try {
        const response = await requestUtil.get('/DeckService/decks/' + Cookies.get('userId'));
        return response.data;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export async function createDeck() {
    try {
        const response = await requestUtil.put('/DeckService/' + Cookies.get('userId'));
        return response.data;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export async function deleteDeck(id) {
    try {
        const response = await requestUtil.deleteHttp('/DeckService/decks/' + id);
        return response.data;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}