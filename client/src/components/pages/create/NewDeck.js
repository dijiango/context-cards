import React, { useState } from 'react';
import { Stack, TextField, Button, Container, Box, Paper } from '@mui/material';
import { Form, Title } from './Create.styled';
import { ErrorMessage, LinkMessage } from './New.styled';
import { useNavigate } from 'react-router-dom';


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

function NewDeck() {
    const [subject, setSubject] = useState();
    const [summary, setSummary] = useState();
    const [errors, setErrors] = useState([]);
    const [acceptedDeck, setAcceptedDeck] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/decks", {
            method: "POST",
            headers:  {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                subject, summary
            }),
        })
        .then(r => {
            if (r.ok) {
                r.json().then(setAcceptedDeck(true))
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        })
    }

  return( 
  <div>
    <Container component='main' maxWidth='md'>
    <Paper elevation={3}>
    <Box sx={boxStyle}>
    <Title>Tell Us About Your Deck</Title>
    <Form onSubmit={handleSubmit}>
        <Stack spacing={5}>
        <TextField
            label="Subject"
            variant='standard'
            color='secondary'
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
        />
        <TextField
            label="Summary"
            placeholder="Give this deck a little context..."
            variant='outlined'
            color='secondary'
            multiline
            rows={4}
            onChange={(e) => setSummary(e.target.value)}
            value={summary}
        />
        </Stack>
        <Button variant='outlined' size='large' color='secondary' type='submit' sx={buttonStyle}>Submit</Button>
    </Form>
    { 
        acceptedDeck ? (
            <div>
                <LinkMessage onClick={() => {navigate(`/create/card`);}}>Add flashcards to this deck.</LinkMessage>
                <LinkMessage onClick={() => {setSubject(''); setSummary('');}}>Or, create another deck.</LinkMessage>
            </div>
        ) : <ErrorMessage>{errors}</ErrorMessage>
    }
    </Box>      
    </Paper>
    </Container>
  </div>
  )
}

export default NewDeck;
