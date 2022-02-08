import React, { useState } from 'react';
import { Stack, TextField, Button, Container, Box, Paper } from '@mui/material';
import { Form, Title } from './Create.styled';
import AddIcon from '@mui/icons-material/Add';

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
  alignItems: 'center',
  backgroundColor: 'lightblue'
}

const cardStyle = {
  height: '300px',
  width: '500px',
  padding: '25px',
  margin: '25px 50px 25px',
  textAlign: 'center'
}

const AddButton = {
  display: 'block',
  float: 'right'
}

function NewCard() {
  const [frontTerm, setFrontTerm] = useState();
  const [backMeaning, setBackMeaning] = useState();
  const [deckID, setDeckID] = useState();

  function handleSubmit(e) {
      e.preventDefault();
      console.log("User submitted this form");
  }

  return( 
  <div>
    <Container component='main' maxWidth='md'>
    <Box sx={boxStyle}>
      <Title>Create Your Flashcard</Title>
      <Form onSubmit={handleSubmit} style={{marginLeft:'-50px'}}>
        <Paper sx={cardStyle}>
        </Paper>
        <div>
        <AddIcon sx={AddButton}/>
        </div>
        <Paper sx={cardStyle}>
        </Paper>
      </Form>
    </Box>
    </Container>
    
  </div>
  )
}

export default NewCard;
