import React, { useEffect, useState } from 'react';
import { CardContainer, CarouselWrapper, Meaning, Term,  } from './Flashcard.styled';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Stack, Paper } from '@mui/material';
import Home from '../pages/home/Home';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CardFace = {
  backgroundColor:'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}

const FlippyStyle = {
  width: '1000px',
  height: '600px',
  textAlign: 'center',
  fontFamily: 'sans-serif',
  fontSize: '30px',
  justifyContent: 'center'
}

const ArrowAnimated = {
  color: '#4b3c73',
  fontSize: 100,
  padding: '50px',
  '&:hover':{
    transform:'scale(1.2)',
    color:'#5c33cc'
  }
}

const CardPreview = {
  padding: '10px',
  height: '60px',
  width: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover':{
    transform: 'scale(1.2)'
  }
}

function Flashcard( props ) {
  const[flashcards, setFlashcards] = useState([]);

  // useEffect(()=>{
  //   fetch(`/decks/${props.deck.id}`)
  // },[])

  function previousCard() {
    console.log("previous card");
  }

  function nextCard() {
    console.log("next card");
  }

  console.log(props.flashcards);
  return (
  <div>
    
    <CardContainer>
        <ArrowBackIosNewIcon sx={ArrowAnimated} onClick={previousCard}/> 

      <Flippy style={FlippyStyle}>
          <FrontSide style={CardFace}>
            <Term>Term</Term>
            <p>Click to reveal answer!</p>
          </FrontSide>
          <BackSide style={CardFace}>
            <Meaning>Lorem Ipsum</Meaning>
            <p>Click to see what this term is!</p>
          </BackSide>
      </Flippy>

      <ArrowForwardIosIcon sx={ArrowAnimated} onClick={nextCard}/> 

    </CardContainer>

    <CarouselWrapper>
      <Stack direction="row" spacing={2} justifyContent='center'>
        <Paper sx={CardPreview}>Card 1</Paper>
        <Paper sx={CardPreview}>Card 2</Paper>
        <Paper sx={CardPreview}>Card 3</Paper>
      </Stack>
    </CarouselWrapper>
  </div>
  )
}

export default Flashcard;


