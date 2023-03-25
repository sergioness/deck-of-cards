import { useMemo, useState } from "react";
import { getNewDeck } from "./api";
import { compareCards, deepCopyDeck } from './utils';

function getShuffleDeck(deck, setDeck) {
    return function () {
        const newDeck = deepCopyDeck(deck);
        for (let m = newDeck.length, i = Number.parseInt(Math.random() * m--);
            m;
            m--, i = Math.floor(Math.random() * m)
        ) {
            [newDeck[m], newDeck[i]] = [newDeck[i], newDeck[m]];
        }
        setDeck(newDeck);
    };
}

function getSortDeck(deck, setDeck) {
    return function () {
        const newDeck = deepCopyDeck(deck);
        newDeck.sort(compareCards);
        setDeck(newDeck);
    };
}

export function useDeck() {
    const memoizedDeck = useMemo(() => getNewDeck(), []);
    const [deck, setDeck] = useState(memoizedDeck);
    return [deck, setDeck, getShuffleDeck(deck, setDeck), getSortDeck(deck, setDeck)];
}