import { React, useState, useEffect } from 'react';
import Deck from '../../Deck';

function Home() {

  const [deck, setDeck] = useState([]);

  useEffect(() => {
    fetch('/decks')
    .then(r => r.json())
    .then(data => setDeck(data))
  }, [])

  console.log(deck);
return (
  <div>
    {
    deck.map((item) => {
      return <Deck key={item.id} deck={item}/>
    })
    }
  </div>
)}

export default Home;