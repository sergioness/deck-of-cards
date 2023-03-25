
function isCardLessSignificantThanAnother(card1, card2) {
    return card1.value > card2.value;
}

export function insertCardIntoDeck(card, deck) {
    const position = 0;
    if (!deck[position]) {
        deck.splice(position, 0, card);
    } else {
        isCardLessSignificantThanAnother(deck[position], card) ?
            insertCardIntoDeck(card, deck.slice(0, position)) :
            insertCardIntoDeck(card, deck.slice(position + 1));
    }
}