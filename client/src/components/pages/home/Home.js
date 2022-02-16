import { React, useState, useEffect } from 'react';
import Deck from '../../deck/Deck';
import { DivStyle, TitleBar } from './Home.styled';



function Home( props ) {
  const [decks, setDecks] = useState([]);

  function getDecks() {
    fetch("/decks")
    .then(r => r.json())
    .then(data => setDecks(data))
  }
  useEffect(() => {
    getDecks();
  }, [])


  function handleDeckId(id) {
    props.handleDeckId(id);
    // console.log("flashcards in home.js", cards)
  }
  
  return (
    <div>
      <DivStyle>
        Your Decks
        {/* <TitleBar>First bar</TitleBar> */}
        {/* <TitleBar>Second bar</TitleBar> */}
      </DivStyle>
      
      {decks.length > 0 ? (
        decks.map((item) => (
          <>
          <Deck 
            key={item.id} 
            deck={item}
            getDecks={getDecks}
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