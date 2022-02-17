import React, { useState, useEffect } from 'react';
import { Stack, TextField, Button, Container, Box, Paper, IconButton } from '@mui/material';
import { Form, Label, Title } from './Create.styled';
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
  const [term, setTerm] = useState();
  const [meaning, setMeaning] = useState();
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
      fetch(`/flashcards/${updateDeck.id}`, {
        method: "POST",
        headers:  {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            term, meaning
        }),
    })
    .then(r => r.json())
    .then(setTerm(''), setMeaning(''))
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
          <Label>Front</Label>
          <TextField
            placeholder="What term or question are you learning?"
            variant='outlined'
            color='secondary'
            sx={{width:'75%'}}
            multiline
            rows={4}
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </Paper>
        <Paper sx={cardStyle}>
          <Label>Back</Label>
          <TextField
            placeholder="And the answer to that is..."
            variant='outlined'
            color='secondary'
            sx={{width:'75%'}}
            multiline
            rows={4}
            onChange={(e) => setMeaning(e.target.value)}
            value={meaning}
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
