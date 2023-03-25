function deepCopyCard(card) {
    return { ...card };
}

export function deepCopyDeck(deck) {
    return Array.from(deck, deepCopyCard);
}

export function compareCards(card1, card2) {
    return card1.id.suit === card2.id.suit ?
                card1.id.value < card2.id.value ? -1 : 1 :
            card1.id.suit < card2.id.suit ? -1 : 1
}