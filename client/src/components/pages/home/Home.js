import { React, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Deck from '../../Deck';
import Flashcard from '../../flashcards/Flashcard';
import { DivStyle, TitleBar } from './Home.styled';



function Home( props ) {
  const [decks, setDecks] = useState([]);
  const[flashcards, setFlashcards] = useState([]);

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

  function showFlashcards(deck) {
    fetch(`/decks/${deck}`, {
      method: "GET"
    })
    .then((r) => r.json())
    .then(data => {
      console.log(data);
    })
  }

  function setDeckID(id) {
    props.clickedDeck(id);
  }
  
  console.log(decks);
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
            key={item.id} deck={item} 
            deckToDelete={deckToDelete} 
            showFlashcards={showFlashcards}
            setDeckID={setDeckID}
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