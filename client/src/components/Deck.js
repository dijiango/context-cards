import { IconButton } from '@mui/material';
import React from 'react';
import { DivStyle, DeckGrid, DeckSummary, SummaryGroup, SummaryItem } from './Deck.styled';
import deckIcon from './images/deckicon.png';

const deckIconStyle = {
    height: "200px",
    padding: "40px 50px",
    marginLeft: "50px"
}

function Deck( props ) {
    console.log("This is the deck data", props);
  return (
  <div>
      <DivStyle>
        <DeckGrid>
            <IconButton>
                <img src={deckIcon} alt="Deck of Cards" style={deckIconStyle}/>
            </IconButton>
        </DeckGrid>
        <DeckSummary>
            <SummaryGroup>
                SUBJECT 
            </SummaryGroup>
                <SummaryItem> {props.deck.subject}</SummaryItem>
        </DeckSummary>

        <DeckSummary>
            <SummaryGroup>
                SUMMARY 
            </SummaryGroup>
                <SummaryItem> {props.deck.summary}</SummaryItem>
        </DeckSummary>
      </DivStyle>
  </div>
  )
}

export default Deck;
