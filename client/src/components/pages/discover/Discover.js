import React, { useState, useEffect } from 'react';
import { TextField, Stack, Button, Paper } from '@mui/material';


const buttonStyle = {
  float: 'right',
  margin: '20px 0px 10px'
}

function Discover() {
  const [publicDecks, setPublicDecks] = useState();

  useEffect(() => {
    fetch("/public")
    .then(r => r.json())
    .then(decks => setPublicDecks(decks))
  }, []);

  console.log(publicDecks);
  return (
    <div>
      
    </div>
)};

export default Discover;