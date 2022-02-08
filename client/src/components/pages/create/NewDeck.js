import React, { useState } from 'react';
import { Stack, TextField, Button, Container, Box } from '@mui/material';
import { Form, Title } from './Create.styled';

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
    const [deckSubject, setDeckSubject] = useState();
    const [deckSummary, setDeckSummary] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        console.log("User submitted this form");
    }

  return( 
  <div>
    <Container component='main' maxWidth='md'>
    
    <Box sx={boxStyle}>

    <Form onSubmit={handleSubmit}>
        <Title>Tell Us About Your Deck</Title>
                <Stack spacing={5}>
                    <TextField
                        label="Subject"
                        variant='standard'
                        color='secondary'
                        onChange={(e) => setDeckSubject(e.target.value)}
                        // value={subject}
                    />
                    <TextField
                        label="Summary"
                        placeholder="Give this deck a little context..."
                        variant='outlined'
                        color='secondary'
                        multiline
                        rows={4}
                        onChange={(e) => setDeckSummary(e.target.value)}
                        // value={summary}
                    />
                </Stack>
                <Button variant='outlined' size='large' color='secondary' type='submit' sx={buttonStyle}>Submit</Button>
    </Form>
    </Box>
    </Container>
  </div>
  )
}

export default NewDeck;
