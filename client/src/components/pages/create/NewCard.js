import React, { useState, useEffect } from 'react';
import { Stack, TextField, Button, Container, Box, Paper, IconButton } from '@mui/material';
import { Form, Title } from './Create.styled';
import AddIcon from '@mui/icons-material/Add';
import { Autocomplete } from '@mui/material';

const buttonStyle = {
  float: 'right',
  margin: '20px 0px 10px'
}

const boxStyle = {
  margin: 4,
  paddingTop: 2,
  paddingBottom: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const cardStyle = {
  height: '300px',
  width: '500px',
  padding: '25px',
  margin: '25px 50px 25px',
  textAlign: 'center'
}

const AddButton = {
  fontSize: '50px',
  color: '#4b3c73',
  '&:hover':{
    transform:'scale(1.2)',
    color:'#5c33cc'
  }
}

function NewCard() {
  const [frontTerm, setFrontTerm] = useState();
  const [backMeaning, setBackMeaning] = useState();
  const [deckID, setDeckID] = useState();
  const [updateDeck, setUpdateDeck] = useState("");

  const [decks, setDecks] = useState([]);

  function getDecks() {
    fetch("/decks")
    .then(r => r.json())
    .then(data => setDecks(data))
  }
  useEffect(() => {
    getDecks();
  }, [])

  function handleSubmit(e) {
      e.preventDefault();
      fetch(`/decks/${updateDeck.id}`, {
        method: "PATCH",
        headers:  {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            frontTerm, backMeaning
        }),
    })
    .then(r => r.json())
    .then(setFrontTerm(''), setBackMeaning(''))
  }

  return( 
  <div>
    <Container component='main' maxWidth='md'>
    <Box sx={boxStyle}>
      <Title>Create Your Flashcard</Title>
      <Form onSubmit={handleSubmit}>
      <Stack sx={{display:'inline-block', textAlign:'center'}}>
        <Autocomplete
          id='update deck'
          options={decks}
          renderInput={params => (
            <TextField {...params} label="Choose a deck to update" variant='standard' />
            )}
            getOptionLabel={option => option.subject ? option.subject : ""}
            onChange={(event, value) => setUpdateDeck(value)}
            value={updateDeck}
            />
        <Paper sx={cardStyle}>
          <h1>F</h1>
          <TextField
            placeholder="What term or question are you learning?"
            variant='outlined'
            color='secondary'
            sx={{width:'75%'}}
            multiline
            rows={4}
            onChange={(e) => setFrontTerm(e.target.value)}
            value={frontTerm}
          />
        </Paper>
        <Paper sx={cardStyle}>
          <h1>B</h1>
          <TextField
            placeholder="And the answer to that is..."
            variant='outlined'
            color='secondary'
            sx={{width:'75%'}}
            multiline
            rows={4}
            onChange={(e) => setBackMeaning(e.target.value)}
            value={backMeaning}
          />
        </Paper>
        <IconButton type='submit'><AddIcon sx={AddButton}/></IconButton>
        
      </Stack>
      </Form>
    </Box>
    </Container>
  </div>
  )
}

export default NewCard;
