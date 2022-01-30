import { React, useState, useEffect } from 'react';
import Flashcard from '../../Flashcard';
// import Flashcard from '../Flashcard';


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
    deck.map((deck) => {
      return <Flashcard key={deck.id} deck={deck}/>
    })
    }
  </div>
)}

export default Home;