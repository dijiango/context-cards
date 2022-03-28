import React, { useState, useEffect } from 'react';
import { Stack, TextField, Button, Container, Box, Paper, IconButton } from '@mui/material';
import { Form, Label, Title } from './Create.styled';
import { Autocomplete } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import { ErrorMessage, LinkMessage} from './New.styled';


const boxStyle = {
  margin: 4,
  paddingTop: 2,
  paddingBottom: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const stackStyle = {
  display: 'inline-block',
  textAlign: 'center'
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
  const [updateDeck, setUpdateDeck] = useState("");
  const [decks, setDecks] = useState([]);
  const [linkToReview, setLinkToReview] = useState(false)
  const [cardError, setCardError] = useState('');
  const [deckError, setDeckError] = useState('');

  const navigate = useNavigate();

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
      if (updateDeck.id !== undefined && term !== undefined && meaning !== undefined) {
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
        .then(setTerm(''), setMeaning(''), setCardError(''), setDeckError(''), setLinkToReview(true))
      } else {
        if (term === undefined && meaning === undefined) {
          setCardError("Flashcards can't be blank. Fill out the front and back before adding to a deck.");
          if (updateDeck.id === undefined) {
            setDeckError("Which deck should this flashcard be added to?");
          } else setDeckError('');
        }
        else if (term !== undefined && meaning === undefined) {
          setCardError("Write on the backside of your card before adding to a deck.");
          if (updateDeck.id === undefined) {
            setDeckError("Which deck should this flashcard be added to?");
          } else setDeckError('');
        }
        else if (term === undefined && meaning !== undefined) {
          setCardError("Write on the frontside of your card before adding to a deck.");
          if (updateDeck.id === undefined) {
            setDeckError("Which deck should this flashcard be added to?");
          } else setDeckError('');
        }
      }
  }

  // function afterAddingCard() {
  //   if (updateDeck.id !== undefined) {
  //     setDeckError('');
  //     setLinkToReview(true);
  //   }
    // if (updateDeck.id === undefined) {
    //   if (term === undefined && meaning === undefined) {
    //     setCardError("Flashcards can't be blank. Fill out the front and back before adding to a deck.");
    //   }
    //   else if (term !== undefined && meaning === undefined) {
    //     setCardError("Write on the backside of your card before adding to a deck.");
    //   }
    //   else if (term === undefined && meaning !== undefined) {
    //     setCardError("Write on the frontside of your card before adding to a deck.");
    //   }
    //   setDeckError("Which deck should this flashcard be added to?");
    // } else {
    //   if (term === undefined && meaning === undefined) {
    //     setCardError("Flashcards can't be blank. Fill out the front and back before adding to a deck.");
    //   }
    //   else if (term !== undefined && meaning === undefined) {
    //     setCardError("Write on the backside of your card before adding to a deck.");
    //   }
    //   else if (term === undefined && meaning !== undefined) {
    //     setCardError("Write on the frontside of your card before adding to a deck.");
    //   }
    //   setDeckError('');
    //   setLinkToReview(true);
    // }
  // }

  return( 
  <div>
    <Container component='main' maxWidth='md'>
    <Box sx={boxStyle}>
      <Title>Create Your Flashcard</Title>
      <Form onSubmit={handleSubmit}>
      <Stack sx={stackStyle}>
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
        { linkToReview ? <LinkMessage onClick={() => {navigate(`/deck/${updateDeck.id}`);}}>Review this deck</LinkMessage> : <article /> }
        { deckError !== '' ? <ErrorMessage>{deckError}</ErrorMessage> : <article /> }
        { cardError !== '' ? <ErrorMessage>{cardError}</ErrorMessage> : <article /> }
      </Stack>
      </Form>
    </Box>
    </Container>
  </div>
  )
}

export default NewCard;
