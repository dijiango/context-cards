import React, { useState, useEffect } from 'react';
import { TextField, Stack, Button, Paper } from '@mui/material';
import Deck from '../../deck/Deck';
import { DivStyle } from './Discover.styled';


const buttonStyle = {
  float: 'right',
  margin: '20px 0px 10px'
}

function Discover() {
  const [publicDecks, setPublicDecks] = useState([]);
  const hideFromView = "true";
  useEffect(() => {
    fetch("/public")
    .then(r => r.json())
    .then(decks => setPublicDecks(decks))
  }, []);

  console.log(publicDecks);
  return (
    <div>
      <DivStyle>Public Decks</DivStyle>
      {
        publicDecks.length > 0 ? (
          publicDecks.map((deck) => (
            <>
            <Deck
              key={deck.id}
              deck={deck}
              hideFromView={hideFromView}
            />
            </>
          ))
        ) : (
          <>
            <h2>No one has added any decks yet.</h2>
          </>
        )
      }
    </div>
)};

export default Discover;