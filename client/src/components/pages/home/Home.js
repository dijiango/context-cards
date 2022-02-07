import { React, useState, useEffect } from 'react';
import Deck from '../../Deck';

function Home() {

  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch("/decks")
    .then(r => r.json())
    .then(data => setDecks(data))
  }, [])

  console.log(decks);
return (
  <div>
    {decks.length > 0 ? (
      decks.map((item) => (
        <Deck key={item.id} deck={item}/>
      ))
    ) : (
      <>
        <h2>You haven't added any decks yet.</h2>
      </>
    )
    
    }
  </div>
)}

export default Home;