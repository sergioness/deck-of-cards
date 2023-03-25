import data from './data.json';
const { suits, values } = data;

export function getNewDeck() {
    const deck = [];
    for (const suit of suits) {
        for (const value of values) {
            deck.push({ id: { suit: suit.id, value: value.id }, label: [value.label, suit.label].join(' of '), value: [value.value, suit.value].join('') });
        }
    }
    return deck;
}