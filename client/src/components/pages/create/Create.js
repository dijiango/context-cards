import { Paper } from '@mui/material';
import React from 'react';
import { CreateMenu, CreateOption, OptionHeader, OptionImg, WrapperDiv } from './Create.styled';
import DeckImg from '../../images/cardDeck.png';
import CardImg from '../../images/flashcard.png';
import { NavLink } from 'react-router-dom';

const PaperStyle = {
  marginTop: '25px',
  padding: '25px',
  fontSize: '40px',
  fontFamily: 'Brush Script MT, cursive',
  fontWeight: 'normal',
  color: '#392d59',
  '&:hover':{
    transform: 'scale(1.2)'
  },
  '&:active':{
    transform: 'scale(1.1)'
  }
}

const LinkStyle = {
  textDecoration: 'none'
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
                <NavLink to='/create/deck' style={LinkStyle}>
                <Paper elevation={3} sx={PaperStyle} onClick={deckForm}>
                  Create New Deck
                  <OptionImg src={DeckImg} alt='Deck of Cards'/>
                </Paper>
                </NavLink>
              </OptionHeader>

              <OptionHeader>
                <NavLink to='/create/card' style={LinkStyle}>
                <Paper elevation={3} sx={PaperStyle} onClick={cardForm}>
                  Add to Existing Deck
                  <OptionImg src={CardImg} alt='Flashcard' />
                </Paper>
                </NavLink>
              </OptionHeader>
            </CreateOption>
          </CreateMenu>
        </WrapperDiv>
    </div>
)};

export default Create;
