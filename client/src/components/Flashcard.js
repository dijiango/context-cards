import React from 'react';
import { DivStyle, DeckGrid, DeckSummary, SummaryItem } from './Flashcard.styled';
import deckIcon from './images/deckicon.png';

const deckIconStyle = {
    height: "200px",
    padding: "40px 50px",
    marginLeft: "50px"
}

function Flashcard( {props} ) {
    console.log("This is the deck data", props);
  return (
  <div>
      <DivStyle>
        <DeckGrid>
            <img src={deckIcon} alt="Deck of Cards" style={deckIconStyle}/>
        </DeckGrid>
        <DeckSummary>
            <SummaryItem>Subject: </SummaryItem>
        </DeckSummary>
      </DivStyle>
  </div>
  )
}

export default Flashcard;
