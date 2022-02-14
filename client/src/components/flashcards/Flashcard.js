import React, { useEffect, useState } from 'react';
import { CardContainer, CarouselWrapper, Hint, Meaning, Term,  } from './Flashcard.styled';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Stack, Paper } from '@mui/material';

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
  fontFamily: 'Brush Script MT, cursive',
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
  color: '#5c33cc',
  fontFamily: 'Brush Script MT, cursive',
  overflow: 'hidden',
  padding: '10px',
  minHeight: '120px',
  minWidth: '200px',
  maxHeight: '120px',
  maxWidth: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover':{
    transform: 'scale(1.2)'
  }
}

function Flashcard( props ) {
  const [currentCard, setCurrentCard] = useState(0);

  console.log("flashcard array", props.flashcards);
  // useEffect(()=>{
  //   fetch(`/decks/${props.viewedDeck}`)
  //   .then((r) => {
  //     if (r.ok) {
  //       r.json().then((cards) => {
  //         setFlashcards(cards.flashcards);
  //       });
  //     }
  //   });
  // }, []);

  // console.log("Flashcards", flashcards.length);
  // console.log("Flashcard", flashcards[currentCard].term);

  function previousCard(current) {
    console.log("previous card");
    if (current == 0) {
      setCurrentCard(props.flashcards.length);
    } else {
      setCurrentCard(current -= 1)
    }
    // console.log(currentCard);
  }

  function nextCard(current) {
    console.log("next card");
    if (current == props.flashcards.length) {
      setCurrentCard(0);
    } else {
      setCurrentCard(current += 1);
    }
    // console.log(currentCard);
  }

  // console.log(flashcards);
  return (
  <div>
    
    <CardContainer>
        <ArrowBackIosNewIcon sx={ArrowAnimated} onClick={() => previousCard(currentCard)}/> 

      <Flippy style={FlippyStyle}>
          <FrontSide style={CardFace}>
            <Term>{props.flashcards[currentCard].term}</Term>
            <Hint>Click to reveal answer!</Hint>
          </FrontSide>
          <BackSide style={CardFace}>
            <Meaning>{props.flashcards[currentCard].meaning}</Meaning>
            <Hint>Click to see what this term is!</Hint>
          </BackSide>
      </Flippy>

      <ArrowForwardIosIcon sx={ArrowAnimated} onClick={() => nextCard(currentCard)}/> 

    </CardContainer>

    <CarouselWrapper>
      <Stack direction="row" spacing={2} justifyContent='center'>
        {
          props.flashcards.map((card) => <Paper sx={CardPreview}>{card.term}</Paper>)
        }
      </Stack>
    </CarouselWrapper>
  </div>
  )
}

export default Flashcard;


