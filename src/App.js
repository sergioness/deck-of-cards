import { useState } from 'react';
import './App.css';
import { Card } from './Card';
import { useDeck } from './useDeck';

function App() {
  const [needDisplayDeck, setNeedDisplayDeck] = useState(false);
  const [deck, setDeck, shuffleDeck, sortDeck] = useDeck();
  const [drawnCard, setDrawnCard] = useState();

  function displayDeck() {
    setNeedDisplayDeck(!needDisplayDeck);
  }

  function drawCard() {
    const [newDrawnCard, ...newDeck] = deck;
    setDeck(newDeck);
    setDrawnCard(newDrawnCard);
  }

  return (
    <div className="App">
      <section>
        <button onClick={displayDeck}>{needDisplayDeck ? 'Hide' : 'Display'} the deck</button>
        <button onClick={shuffleDeck}>Shuffle the deck</button>
        <button onClick={drawCard}>Draw a card</button>
        <button onClick={sortDeck}>Sort the deck</button>
      </section>
      <main>
        <section>
          <h3>The drawn card:</h3>
          {drawnCard ? (<p>{drawnCard.label}</p>) : 'N/A'}
        </section>
        <section>
          <h3>The deck:</h3>
          {needDisplayDeck ?? deck?.length > 0 ? deck.map(({ value, label }) => (<Card key={value} value={value} label={label} />)) : 'N/A'}
        </section>
      </main>
    </div>
  );
}

export default App;
