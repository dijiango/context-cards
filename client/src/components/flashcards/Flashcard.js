import React, { useEffect, useState } from 'react';
import { CardContainer, CarouselWrapper, Hint, Meaning, NameText, Term, TitleDiv, TitleText,  } from './Flashcard.styled';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Stack, Paper, IconButton } from '@mui/material';
import { useParams } from 'react-router-dom';
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
  fontSize: '20px',
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
  const { deckID } = useParams();
  const [deckName, setDeckName] = useState();
  const [flashcards, setFlashcards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    getFlashcards();
  }, [deckID])

  function getFlashcards() {
    fetch(`/decks/${deckID}`)
    .then(r => r.json())
    .then((deck) => {
      console.log("the deck data", deck);
      if (deck) {
        setDeckName(deck.subject);
        setFlashcards(deck.flashcards);
      }
    })
  }

  function previousCard(current) {
    if (current === 0) {
      setCurrentCard(flashcards.length - 1);
    } else {
      setCurrentCard(current - 1)
    }
    console.log(currentCard);
  }

  function nextCard(current) {
    if (current === flashcards.length - 1) {
      setCurrentCard(0);
    } else {
      setCurrentCard(current + 1);
    }
    console.log(currentCard);
  }

  function chooseCard(index) {
    setCurrentCard(index);
  }


  return (flashcards && flashcards.length > 0) ? (
  <div>
    <TitleDiv>
      <TitleText>Deck:</TitleText>
      <NameText>{deckName}</NameText>

      <TitleText>current:</TitleText>
      <NameText>{currentCard + 1}/{flashcards.length}</NameText>
    </TitleDiv>
    <CardContainer>
        <ArrowBackIosNewIcon sx={ArrowAnimated} onClick={() => previousCard(currentCard)}/> 

      <Flippy style={FlippyStyle}>
          <FrontSide style={CardFace}>
            <Term>{flashcards[currentCard].term}</Term>
            <Hint>Click to reveal answer!</Hint>
          </FrontSide>
          <BackSide style={CardFace}>
            <Meaning>{flashcards[currentCard].meaning}</Meaning>
            <Hint>Click to see what this term is!</Hint> 
          </BackSide>
      </Flippy>

      <ArrowForwardIosIcon sx={ArrowAnimated} onClick={() => nextCard(currentCard)}/> 

    </CardContainer>

    <CarouselWrapper>
      <Stack direction="row" spacing={2} justifyContent='center'>
        {
          flashcards.map((card, index) => <IconButton onClick={()=> chooseCard(index)}><Paper sx={CardPreview}>{card.term}</Paper></IconButton>)
        }
      </Stack>
    </CarouselWrapper>
  </div>
  ): <div><h2>You haven't added any flashcards yet!</h2></div> 
}

export default Flashcard;


