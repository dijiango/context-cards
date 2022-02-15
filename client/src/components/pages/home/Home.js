import { React, useState, useEffect } from 'react';
import Deck from '../../deck/Deck';
import { DivStyle, TitleBar } from './Home.styled';



function Home( props ) {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    fetch("/decks")
    .then(r => r.json())
    .then(data => setDecks(data))
  }, [])

  function deckToDelete(deck) {
    fetch(`/decks/${deck}`, {
        method: "DELETE"
    })
    .then((r) => {
      decks.filter((item) => item !== deck)
    })

    window.location.reload();
  }


  // function handleDeckId(cards) {
  //   props.handleDeckId(cards);
  //   // console.log("flashcards in home.js", cards)
  // }
  
  return (
    <div>
      <DivStyle>
        <TitleBar>First bar</TitleBar>
        <TitleBar>Second bar</TitleBar>
      </DivStyle>
      
      {decks.length > 0 ? (
        decks.map((item) => (
          <>
          <Deck 
            key={item.id} 
            deck={item} 
            deckToDelete={deckToDelete} 
            // handleDeckId={handleDeckId}
          />
          </>
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