import { Paper } from '@mui/material';
import React from 'react';
import { CreateMenu, CreateOption, OptionHeader, OptionImg, WrapperDiv } from './Create.styled';
import DeckImg from '../../images/cardDeck.png';
import CardImg from '../../images/flashcard.png';

const PaperStyle = {
  marginTop: '25px',
  padding: '25px',
  color: '#392d59',
  '&:hover':{
    transform: 'scale(1.2)'
  },
  '&:active':{
    transform: 'scale(1.1)'
  }
}

function Create() {

  function deckForm() {
    console.log("This will take you to the nested route: /create/deck");
  }

  function cardForm() {
    console.log("This will take you to the nested route: /create/card");
  }

  return (
    <div>
        <WrapperDiv>
          <CreateMenu>
            <CreateOption>
              <OptionHeader>
                <Paper elevation={3} sx={PaperStyle} onClick={deckForm}>
                  Create New Deck
                  <OptionImg src={DeckImg} alt='Deck of Cards'/>
                </Paper>
              </OptionHeader>

              <OptionHeader>
                <Paper elevation={3} sx={PaperStyle} onClick={cardForm}>
                  Add to Existing Deck
                  <OptionImg src={CardImg} alt='Flashcard' />
                </Paper>
              </OptionHeader>
            </CreateOption>
          </CreateMenu>
        </WrapperDiv>
    </div>
)};

export default Create;
